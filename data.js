// data.js — chứa ngân hàng câu hỏi (Base64 UTF-8) + hàm giải mã
// Đặt file này cùng thư mục với index.html

(function () {
  // Base64 -> UTF-8 string
  function b64ToText(b64) {
    const bin = atob(b64);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return new TextDecoder('utf-8').decode(bytes);
  }

  // ====== DỮ LIỆU NHÚNG SẴN (từ 2 file bạn đã gửi) ======
  const BANKS = [
    {
      subject: "Phát triển ứng dụng Web (Mở nguồn)",
      b64: "<?=B64_PH?>"
    },
    {
      subject: "Quản trị dự án CNTT",
      b64: "<?=B64_QU?>"
    }
  ];

  // API cho index.html
  window.quizData = {
    getAll() {
      return BANKS.map(x => ({ subject: x.subject, text: b64ToText(x.b64) }));
    }
  };
})();
