"use client"; // この行は必要です

import { useState } from "react";

// 問い合わせ内容を表す型を定義
interface ContactData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  // ContactData 型を使ってフォームの状態を管理する
  const [formData, setFormData] = useState<ContactData>({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  // 入力内容の変更時のハンドラ
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // フォーム送信時のハンドラ
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setSubmitSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        throw new Error("送信エラーが発生しました。");
      }
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "予期しないエラーが発生しました。");
      } else {
        setError("予期しないエラーが発生しました。");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">お問い合わせ</h1>
      {/* フォームと追加コンテンツをまとめるラッパー */}
      <div>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
          <div>
            <label htmlFor="name" className="block font-medium">
              お名前
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="山田 太郎"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium">
              メールアドレス
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="example@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-medium">
              メッセージ
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="お問い合わせ内容を入力してください。"
              required
            ></textarea>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          {submitSuccess && <p className="text-green-500">お問い合わせを送信しました！</p>}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600"
          >
            {isSubmitting ? "送信中..." : "送信"}
          </button>
        </form>
        {/* 必要に応じてフォームやその他のコンテンツを追加 */}
      </div>
    </div>
  );
}
