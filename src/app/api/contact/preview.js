// pages/api/preview.js
export default function handler(req, res) {
    // ここで認証処理などを追加することも可能です
    res.setPreviewData({ user: 'editor' });
    // プレビュー用のリダイレクト先 URL を指定
    res.writeHead(307, { Location: '/' });
    res.end();
  }
  