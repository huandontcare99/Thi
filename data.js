// data.js — chứa ngân hàng câu hỏi (GZIP Base64) + helper giải nén
// Lưu file này cạnh index.html
// Dùng pako (đã được nạp trong index.html) để ungzip

const GZ_B64_QU = "H4sIAAAAAAAAA61YbW/bNhD+K8R8n8mWm8Qk0gVdC2Q7k7QmJY6A5bWkq4I0mJq0z4Ck6v8+1kYJ+3iTQ9a9kFhZr8rjY7v3b9pV6WlR9c0y6pZ1D2bLw2F7S5b1t...<đã rút gọn trong tin nhắn vì quá dài khi bạn copy ở đây sẽ có đầy đủ trong file tải về>";
const GZ_B64_PH = "H4sIAAAAAAAAA6VWbW+bMBD+K4h8n0m2mGm1o5wJwCw2mS7zHq0l6x1sXoYF1X...<đã rút gọn trong tin nhắn, bản đầy đủ có trong file tải về>";

/** Giải nén GZIP Base64 -> UTF-8 string */
function decodeBankFromGzB64(b64) {
  try {
    // Xử lý Base64 cho cả môi trường browser và Node.js
    let bin;
    if (typeof window !== 'undefined' && typeof atob === 'function') {
      // Môi trường browser
      bin = atob(b64);
    } else {
      // Môi trường Node.js hoặc các môi trường khác
      bin = Buffer.from(b64, 'base64').toString('binary');
    }
    
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) {
      bytes[i] = bin.charCodeAt(i);
    }
    
    const decompressed = window.pako.ungzip(bytes);
    return new TextDecoder('utf-8').decode(decompressed);
  } catch (error) {
    console.error('Lỗi giải mã dữ liệu:', error);
    throw new Error('Không thể giải mã dữ liệu Base64 GZIP');
  }
}
