// app/api/contact/route.ts
import { NextResponse } from "next/server";
import admin from "@/lib/firebaseAdmin";

export async function POST(request: Request) {
  let data: any;

  // リクエストボディのパースと検証
  try {
    data = await request.json();
  } catch (parseError) {
    console.error("Invalid JSON received: " + JSON.stringify({ parseError }));
    return new Response(
      JSON.stringify({ error: "不正なJSON形式です。" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  // 必要なパラメータが存在するかチェック
  if (
    !data ||
    typeof data !== "object" ||
    !data.name ||
    !data.email ||
    !data.message
  ) {
    return new Response(
      JSON.stringify({ error: "必要なパラメータが不足しています。" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  try {
    // Firestore のインスタンス取得
    const db = admin.firestore();

    // "contacts" コレクションにドキュメントを追加する
    await db.collection("contacts").add({
      name: data.name,
      email: data.email,
      message: data.message,
      createdAt: new Date().toISOString(),
    });

    return new Response(
      JSON.stringify({ message: "お問い合わせを受け付けました。" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    // error がオブジェクト以外の場合は必ずオブジェクトにラップする
    const errPayload =
      error && typeof error === "object"
        ? error
        : { message: error ?? "Unknown error" };

    // エラー内容を JSON 文字列にしてログ出力することで、Next.js の内部ロガーが
    // 受け取る値が常に文字列になるようにする
    console.error("Error saving contact: " + JSON.stringify(errPayload));

    return new Response(
      JSON.stringify({ error: "データの処理中にエラーが発生しました。" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
