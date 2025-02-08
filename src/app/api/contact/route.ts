// app/api/contact/route.ts
import admin from "@/lib/firebaseAdmin";

// リクエストボディとして期待する型を定義
interface ContactRequest {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: Request): Promise<Response> {
  let data: ContactRequest;

  // リクエストボディのパースと検証
  try {
    // JSON の内容を ContactRequest 型として扱う
    data = (await request.json()) as ContactRequest;
  } catch (parseError) {
    console.error("Invalid JSON received:", parseError);
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
  } catch (error: unknown) {
    // error がオブジェクトでない場合は、文字列化してオブジェクトにラップする
    const errPayload =
      error && typeof error === "object"
        ? error
        : { message: String(error) };

    console.error("Error saving contact:", JSON.stringify(errPayload));

    return new Response(
      JSON.stringify({ error: "データの処理中にエラーが発生しました。" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
