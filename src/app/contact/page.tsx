"use client"; // ← この行を追加

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
    } catch (err: any) {
      setError(err.message || "予期しないエラーが発生しました。");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">お問い合わせ</h1>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
        <div>
          <label htmlFor="name" className="block font-medium">お名前</label>
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
          <label htmlFor="email" className="block font-medium">メールアドレス</label>
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
          <label htmlFor="message" className="block font-medium">メッセージ</label>
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
    </div>
  );
}
