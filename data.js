// data_vip.js — chứa nguyên văn 2 ngân hàng câu hỏi (dán vào giữa `...`)
// KHÔNG cần thêm thư viện nào khác. Chỉ cần đặt file này cạnh index_vip.html

// === MÔN Phát triển ứng dụng Web (Mở nguồn) ===
// DÁN nguyên văn nội dung file: TỔNG HỢP CÂU HỎI VÀ ĐÁP ÁN - MÔN Ph.txt
const RAW_PH = `
TỔNG HỢP CÂU HỎI VÀ ĐÁP ÁN - MÔN: Phát triển ứng dụng Web với mã nguồn mở
================================================================================

Câu 1: Hãy chỉ ra đáp án đúng?
Đáp án đúng: CSS là ngôn ngữ đơn giản, hoạt động kết hợp với HTML để tạo định dạng cho nội dung trên các trang web.

Tất cả đáp án:
  A. ✓ CSS là ngôn ngữ đơn giản, hoạt động kết hợp với HTML để tạo định dạng cho nội dung trên các trang web.
  B.   CSS là ngôn ngữ đơn giản, hoạt động kết hợp với HTML để tạo ra nội dung trên các trang web.
  C.   CSS là ngôn ngữ đơn giản, hoạt động kết hợp với HTML để tạo ra hành động trên các trang web.
  D.   CSS là ngôn ngữ đơn giản, hoạt động kết hợp với HTML để tạo định dạng và hành động trên các trang web.

--------------------------------------------------------------------------------

Câu 2: Một style sheet là một tập hợp của?
Đáp án đúng: CSS rule

Tất cả đáp án:
  A.   Layer
  B. ✓ CSS rule
  C.   code
  D.   HTML

--------------------------------------------------------------------------------

Câu 3: Các CSS rule có thể được áp dụng cho?
Đáp án đúng: Áp dụng một cách chọn lọc đối với bất cứ thành phần nào trên trang web.

Tất cả đáp án:
  A.   Photoshop
  B.   Flash
  C. ✓ Áp dụng một cách chọn lọc đối với bất cứ thành phần nào trên trang web.
  D.   Illustrator

--------------------------------------------------------------------------------

Câu 4: Một rule có thể bao gồm nhiều thành phần nào?
Đáp án đúng: Thuộc tính

Tất cả đáp án:
  A.   Hình ảnh
  B.   Layer
  C. ✓ Thuộc tính
  D.   image

--------------------------------------------------------------------------------

Câu 5: CSS rule có thể ảnh hưởng lên các thuộc tính nào sau đây?
Đáp án đúng: Kiểu chữ, màu sắc và định vị.

Tất cả đáp án:
  A.   Kiểu chữ
  B.   Màu sắc
  C.   Định vị
  D. ✓ Kiểu chữ, màu sắc và định vị.

--------------------------------------------------------------------------------

Câu 6: Hãy chỉ ra đáp án đúng?
Đáp án đúng: CSS có khả năng áp dụng style nhất quán lên các thành phần trên một hoặc toàn bộ các trang web trong số website.

Tất cả đáp án:
  A. ✓ CSS có khả năng áp dụng style nhất quán lên các thành phần trên một hoặc toàn bộ các trang web trong số website.
  B.   CSS không có khả năng áp dụng style nhất quán lên các thành phần trên một hoặc toàn bộ các trang web trong số website.
  C.   CSS chỉ có khả năng áp dụng style nhất quán lên duy nhất 1 thành phần của trang web trong số website.
  D.   CSS chỉ có khả năng áp dụng style nhất quán lên không quá 2 thành phần của trang web trong số website.

--------------------------------------------------------------------------------

Câu 7: Đâu là một trong số những phương thức đặt CSS?
Đáp án đúng: external style

Tất cả đáp án:
  A.   Layer
  B.   Fill
  C.   Show
  D. ✓ external style

--------------------------------------------------------------------------------

Câu 8: Inline style là cách sử dụng css như thế nào?
Đáp án đúng: Khai báo css ngay trong thẻ HTML (nội tuyến).

Tất cả đáp án:
  A. ✓ Khai báo css ngay trong thẻ HTML (nội tuyến).
  B.   Khai báo css trong trong file.
  C.   Khai báo css trong một file riêng.
  D.   Không cần khai báo CSS.

--------------------------------------------------------------------------------

Câu 9: Đâu là định nghĩa đúng của địa chỉ IP?
Đáp án đúng: Là địa chỉ dạng số được dùng để định vị và tìm kiếm các trang web và file của một số website.

Tất cả đáp án:
  A. ✓ Là địa chỉ dạng số được dùng để định vị và tìm kiếm các trang web và file của một số website.
  B.   Là địa chỉ của layer.
  C.   Là địa chỉ của code.
  D.   Là địa chỉ của bảng.

--------------------------------------------------------------------------------

Câu 10: Khai báo css theo cách internal style bắt buộc phải khai báo như thế nào?
Đáp án đúng: Khai báo trong cặp thẻ <style></style>

Tất cả đáp án:
  A. ✓ Khai báo trong cặp thẻ
  B.   Khái báo trong cặp thẻ
  C.   Khai báo trong cặp thẻ
  D.   Khái báo trong cặp thẻ

--------------------------------------------------------------------------------

Câu 11: Đâu là trạng thái thường được khai báo cho liên kết (links)?
Đáp án đúng: a:hover

Tất cả đáp án:
  A. ✓ a:hover
  B.   a:load
  C.   a:hide
  D.   a:show

--------------------------------------------------------------------------------

Câu 12: Làm cách nào để gắn external stylesheet với trang web?
Đáp án đúng: Sử dụng lệnh Attach Stylesheet  bằng link rel

Tất cả đáp án:
  A.   Sử dụng photoshop
  B.   Sử dụng Flash
  C.   Sử dụng Illustrator
  D. ✓ Sử dụng lệnh Attach Stylesheet  bằng link rel

--------------------------------------------------------------------------------

Câu 13: Các ngôn ngữ kịch bản được dùng để xây dựng các trang web tương tác hay các website thương mại điện tử được phân thành mấy loại chính?
Đáp án đúng: 2 loại: phía máy khách (client-side) và phía máy chủ (server-side).

Tất cả đáp án:
  A.   1 loại.
  B. ✓ 2 loại: phía máy khách (client-side) và phía máy chủ (server-side).
  C.   3 loại.
  D.   4 loại.

--------------------------------------------------------------------------------

Câu 14: Điều gì sẽ xảy ra khi người dùng chọn cả màu nền và hình nền cho một trang web?
Đáp án đúng: Màu nền sẽ xuất hiện khi ảnh đang tải xuống.

Tất cả đáp án:
  A. ✓ Màu nền sẽ xuất hiện khi ảnh đang tải xuống.
  B.   Chỉ hiển thị màu nền.
  C.   Chỉ hiển thị ảnh nền.
  D.   Không xảy ra hiện tượng gì.

--------------------------------------------------------------------------------

Câu 15: Trong Javascript sự kiện OnUnload thực hiện khi nào?
Đáp án đúng: Khi kết thúc một chương trình.

Tất cả đáp án:
  A.   Khi bắt đầu chương trình chạy.
  B.   Khi click chuột.
  C. ✓ Khi kết thúc một chương trình.
  D.   Khi di chuyển chuột qua.

--------------------------------------------------------------------------------

Câu 16: Trong Javascript sự kiện Onblur thực hiện khi nào?
Đáp án đúng: Khi một đối tượng trong form mất focus.

Tất cả đáp án:
  A. ✓ Khi một đối tượng trong form mất focus.
  B.   Khi một đối tượng trong form có focus.
  C.   Khi di chuyển con chuột qua form.
  D.   Khi click chuột vào nút lệnh.

--------------------------------------------------------------------------------

Câu 17: Trong Javascript sự kiện OnMouseOver thực hiện khi nào?
Đáp án đúng: Khi di chuyển con chuột qua một đối tượng trong form.

Tất cả đáp án:
  A.   Khi một đối tượng trong form mất focus.
  B.   Khi một đối tượng trong form có focus.
  C. ✓ Khi di chuyển con chuột qua một đối tượng trong form.
  D.   Khi click chuột vào nút lệnh.

--------------------------------------------------------------------------------

Câu 18: Trong Javascript sự kiện Onclick xảy ra khi nào?
Đáp án đúng: Khi click chuột vào nút lệnh.

Tất cả đáp án:
  A.   Khi một đối tượng trong form mất focus.
  B.   Khi một đối tượng trong form có focus.
  C.   Khi click chuột vào một đối tượng trong form.
  D. ✓ Khi click chuột vào nút lệnh.

--------------------------------------------------------------------------------

Câu 19: Trong Javascript sự kiện Onchange thực hiện khi nào?
Đáp án đúng: Xảy ra khi giá trị của một trường trong form được người dùng thay đổi.

Tất cả đáp án:
  A.   Khi một đối tượng trong form mất focus.
  B.   Khi một đối tượng trong form có focus.
  C. ✓ Xảy ra khi giá trị của một trường trong form được người dùng thay đổi.
  D.   Khi click chuột vào nút lệnh.

--------------------------------------------------------------------------------

Câu 20: Trong Javascript đoạn mã sau cho ra kết quả gì? <script>function kiemtra(){window.open("http://google.com","Chao");}</script></head><body onload ="kiemtra()"></body>
Đáp án đúng: Khi chạy thì một trang khác  được hiện ra.

Tất cả đáp án:
  A. ✓ Khi chạy thì một trang khác  được hiện ra.
  B.   Không chạy được vì sai.
  C.   Khi kết thúc thì một site khác hiện ra.
  D.   Hiện một trang vnn duy nhất.

--------------------------------------------------------------------------------

Câu 21: Thẻ <input type='text'> dùng để làm gì?
Đáp án đúng: Tạo một ô text để nhập dữ liệu 1 dòng.

Tất cả đáp án:
  A. ✓ Tạo một ô text để nhập dữ liệu 1 dòng.
  B.   Tạo một ô password.
  C.   Tạo một  textbox cho phép nhập liệu nhiều dòng.
  D.   Dùng để submit dữ liệu.

--------------------------------------------------------------------------------

Câu 22: Thẻ <input type='Password'> dùng để làm gì?
Đáp án đúng: Tạo một ô password.

Tất cả đáp án:
  A.   Tạo một ô text để nhập dữ liệu 1 dòng.
  B. ✓ Tạo một ô password.
  C.   Tạo một textbox cho phép nhập liệu nhiều dòng.
  D.   Dùng để hiển thị hình ảnh.

--------------------------------------------------------------------------------

Câu 23: Thẻ <textarea ></textarea> dùng để làm gì?
Đáp án đúng: Tạo một textbox cho phép nhập liệu nhiều dòng.

Tất cả đáp án:
  A.   Tạo một ô text để nhập dữ liệu 1 dòng.
  B.   Tạo một ô password.
  C. ✓ Tạo một textbox cho phép nhập liệu nhiều dòng.
  D.   Dùng để hiển thị hình ảnh.

--------------------------------------------------------------------------------

Câu 24: Phát biểu nào sau đây đúng?
Đáp án đúng: Javascript là một trong ba kỹ thuật cơ bản để tạo nên trang web.

Tất cả đáp án:
  A. ✓ Javascript là một trong ba kỹ thuật cơ bản để tạo nên trang web.
  B.   Javascript không dùng để xử lý trang web.
  C.   Javascript chỉ chạy phía server.
  D.   Javascript không phải ngôn ngữ lập trình.
--------------------------------------------------------------------------------

Câu 25: Phát biểu nào sau đây đúng?
Đáp án đúng: JavaScript được tạo ra với mục đích xử lý các tác vụ phía Client.

Tất cả đáp án:
  A. ✓ JavaScript được tạo ra với mục đích xử lý các tác vụ phía Client.
  B.   JavaScript không được tạo ra với mục đích xử lý các tác vụ phía Client.
  C.   JavaScript được tạo ra với mục đích định dạng trang web phía Client.
  D.   JavaScript được tạo ra với mục đích định dạng trang web phía server.
--------------------------------------------------------------------------------

Câu 26: Hãy chỉ ra đáp án đúng?
Đáp án đúng: HTML giúp bố trí thông tin, CSS giúp định dạng thông tin, JavaScript giúp tính toán và tạo hành động theo tình huống.

Tất cả đáp án:
  A.   HTML giúp xử lý sự kiện, CSS giúp định dạng thông tin, JavaScript giúp tính toán và tạo hành động theo tình huống.
  B.   HTML giúp bố trí thông tin, CSS giúp xử lý sự kiện, JavaScript giúp tính toán và tạo hành động theo tình huống.
  C. ✓ HTML giúp bố trí thông tin, CSS giúp định dạng thông tin, JavaScript giúp tính toán và tạo hành động theo tình huống.
  D.   HTML không giúp gì trong quá trình tạo trang web.

--------------------------------------------------------------------------------

Câu 27: JavaScript có thể làm gì trong trang web?
Đáp án đúng: Tạo menu xổ xuống (menu con) trong thanh menu.

Tất cả đáp án:
  A. ✓ Tạo menu xổ xuống (menu con) trong thanh menu.
  B.   Javascript sẽ định dạng menu hiển thị màu đỏ.
  C.   Javascript sẽ định dạng menu hiển thị màu xanh.
  D.   Javascript sẽ định dạng menu hiển thị màu đỏ và màu xanh.

--------------------------------------------------------------------------------

Câu 28: Hãy chỉ ra phát biểu đúng?
Đáp án đúng: JavaScript dùng để viết game trong trang web.

Tất cả đáp án:
  A. ✓ JavaScript dùng để viết game trong trang web.
  B.   Javascript không thể dùng để viết game cho web.
  C.   Javascript không dùng để kiểm tra tính hợp lệ của form.
  D.   Javascript dùng để định dạng dữ liệu.

--------------------------------------------------------------------------------

Câu 29: Để viết cấu trúc lựa chọn thì có thể sử dụng phương pháp nào dưới đây?
Đáp án đúng: Sử dụng cấu trúc if else, kết hợp toán tử điều kiện, hoặc dùng cấu trúc switch case.

Tất cả đáp án:
  A.   Sử dụng cấu trúc if else.
  B.   Sử dụng toán tử điều kiện.
  C.   Sử dụng cấu trúc switch case.
  D. ✓ Sử dụng cấu trúc if else, kết hợp toán tử điều kiện, hoặc dùng cấu trúc switch case.

--------------------------------------------------------------------------------

Câu 30: Để viết một hàm không trả về dữ liệu thì làm cách nào sau đây?
Đáp án đúng: Không viết return.

Tất cả đáp án:
  A.   Viết return NULL vào cuối thân hàm.
  B.   Viết return NULL vào thân hàm.
  C. ✓ Không viết return.
  D.   Không viết return NULL.

--------------------------------------------------------------------------------

Câu 31: Điều kiện để đảm bảo khi gọi hàm không gặp lỗi là gì?
Đáp án đúng: Các đối số phải cùng thứ tự với các tham số.

Tất cả đáp án:
  A. ✓ Các đối số phải cùng thứ tự với các tham số.
  B.   Các đối số phải cùng một kiểu dữ liệu.
  C.   Các đối số phải nhỏ hơn các tham số.
  D.   Các đối không cùng thứ tự với các tham số.

--------------------------------------------------------------------------------

Câu 32: Chạy chương trình sau hiển thị kết quả gì? $a = 3; function add(&$b){ return $b++; } $a = add($a) - 2; echo $a;
Đáp án đúng: 1

Tất cả đáp án:
  A. ✓ 1
  B.   2
  C.   3
  D.   NULL

--------------------------------------------------------------------------------

Câu 33: Chạy chương trình sau hiển thị kết quả gì? $a = 3; function add($b){ return $b++; } $a = add($a) - 2; echo $a;
Đáp án đúng: 1

Tất cả đáp án:
  A.   NULL
  B. ✓ 1
  C.   3
  D.   4

--------------------------------------------------------------------------------

Câu 34: Chạy chương trình sau hiển thị kết quả gì? $a = 7; function add($b){ return $b++; } add($a);
Đáp án đúng: 7

Tất cả đáp án:
  A. ✓ 7
  B.   6
  C.   8
  D.   9

--------------------------------------------------------------------------------

Câu 35: Chạy chương trình sau hiển thị kết quả gì? $a = 7; function add(&$b){ return $b++; } add($a); echo $a;
Đáp án đúng: 8

Tất cả đáp án:
  A.   7
  B.   6
  C. ✓ 8
  D.   9

--------------------------------------------------------------------------------

Câu 36: Chạy chương trình sau hiển thị kết quả gì? $a = 7; function add(){ global $a++; } add($a); echo $a;
Đáp án đúng: Chương trình báo lỗi.

Tất cả đáp án:
  A.   7
  B.   6
  C.   8
  D. ✓ Chương trình báo lỗi.

--------------------------------------------------------------------------------

Câu 37: Chạy chương trình sau hiển thị kết quả gì? $a = 7; function add(){ global $a; $a++; } add($a); echo $a;
Đáp án đúng: 8

Tất cả đáp án:
  A.   7
  B.   6
  C. ✓ 8
  D.   Chương trình báo lỗi.

--------------------------------------------------------------------------------

Câu 38: Chạy chương trình sau hiển thị kết quả gì? $a = 5; function add($b = 3){ global $a; return $a+$b; } $c = add(); echo $a;
Đáp án đúng: 5

Tất cả đáp án:
  A. ✓ 5
  B.   8
  C.   NULL
  D.   7

--------------------------------------------------------------------------------

Câu 39: Chạy chương trình sau hiển thị kết quả gì? class Number { private $a = 5; public function __construct($b) { $a = $b + 3; } } $num = new Number(); echo $num->a;
Đáp án đúng: Chương trình báo lỗi.

Tất cả đáp án:
  A.   5
  B.   8
  C.   11
  D. ✓ Chương trình báo lỗi.

--------------------------------------------------------------------------------

Câu 40: Chạy chương trình sau hiển thị kết quả gì? class Number { public $a = 5; public function __construct($b) { $a = $b + 3; } } $num = new Number(3); echo $num->a;
Đáp án đúng: 5

Tất cả đáp án:
  A. ✓ 5
  B.   8
  C.   11
  D.   Lỗi chương trình.

--------------------------------------------------------------------------------

Câu 41: Chạy chương trình sau hiển thị kết quả gì? class Number { public static $a = 5; public function __construct($b) { $a = $b + 3; } } echo Number::$a;
Đáp án đúng: 5

Tất cả đáp án:
  A. ✓ 5
  B.   8
  C.   11
  D.   Lỗi chương trình.

--------------------------------------------------------------------------------

Câu 42: Chạy chương trình sau hiển thị kết quả gì? class Number { public $a = 5; public function __construct($b) { $a = $b + 3; } } $num1 = new Number(4); $num2 = clone $num1; echo $num1->a;
Đáp án đúng: 5

Tất cả đáp án:
  A. ✓ 5
  B.   9
  C.   7
  D.   Lỗi chương trình.

--------------------------------------------------------------------------------

Câu 43: $a = 5; $mess =  'Gia tri cua a la: $a'; echo $mess; Kết quả hiện lên màn hình là gì?
Đáp án đúng: Gia tri cua a la: $a

Tất cả đáp án:
  A. ✓ Gia tri cua a la: $a
  B.   Gia tri cua a la: 5
  C.   5
  D.   Lỗi chương trình.

--------------------------------------------------------------------------------

Câu 44: $a = 5; $mess =  ""Gia tri cua a la: $a""; echo $mess; Kết quả hiện lên màn hình là gì?
Đáp án đúng: Lỗi chương trình

Tất cả đáp án:
  A.   Gia tri cua a la: $a
  B.   Gia tri cua a la: 5
  C.   5
  D. ✓ Lỗi chương trình

--------------------------------------------------------------------------------

Câu 45: $a = 5; $mess = "\xa9Gia tri cua a la: $a"; echo $mess; Kết quả hiện lên màn hình là gì?
Đáp án đúng: ©Gia tri cua a la: 5

Tất cả đáp án:
  A.   \xa9Gia tri cua a la: $a
  B.   \xa9Gia tri cua a la: 5
  C.   ©5
  D. ✓ ©Gia tri cua a la: 5

--------------------------------------------------------------------------------

Câu 46: $a = 5; $mess =  "\xa9Gia tri cua a la: $a"; echo html($mess); Kết quả hiện lên màn hình là gì?
Đáp án đúng: Lỗi chương trình.

Tất cả đáp án:
  A.   ©Gia tri cua a la: $a
  B.   ©Gia tri cua a la: 5
  C.   ©5
  D. ✓ Lỗi chương trình.

--------------------------------------------------------------------------------

Câu 47: $a = 5; $mess = "Gia tri cua a la: $a"; echo substr($mess, 0, 3); Kết quả hiện lên màn hình là gì?
Đáp án đúng: Gia

Tất cả đáp án:
  A.   la: 5
  B.   Gia tri cua a la: 5
  C. ✓ Gia
  D.   Lỗi chương trình.

--------------------------------------------------------------------------------

Câu 48: $a = 5; $mess =  "Gia tri cua a la: $a"; echo str_replace('a', 'b', $mess); Kết quả hiện lên màn hình là gì?
Đáp án đúng: Gia tri cua b la: 5

Tất cả đáp án:
  A.   Gia tri cua b la: $b
  B.   Gia tri cua b la: $a
  C. ✓ Gia tri cua b la: 5
  D.   Lỗi chương trình.

--------------------------------------------------------------------------------

Câu 49: $name = 'a|b|c|d'; $name1 = explode('|', $name); $name2 = implode(' ', $name1); echo $name2; Kết quả hiện lên màn hình là gì?
Đáp án đúng: a b c d

Tất cả đáp án:
  A. ✓ a b c d
  B.   abcd
  C.   a|b|c|d
  D.   Lỗi chương trình.

--------------------------------------------------------------------------------

Câu 50: $name = 'a|b|c|d'; $name1 = explode('|', $name); $name2 = implode(' ', $name); echo $name2; Kết quả hiện lên màn hình là gì?
Đáp án đúng: Chương trình không hiển thị kết quả gì.

Tất cả đáp án:
  A.   a b c d
  B.   abcd
  C.   a|b|c|d
  D. ✓ Chương trình không hiển thị kết quả gì.

--------------------------------------------------------------------------------

Câu 51: $mess = (int) 'Gia tri cua a la: 5'; echo $mess; Kết quả hiện lên màn hình là gì?
Đáp án đúng: 0

Tất cả đáp án:
  A.   Gia tri cua a la:
  B.   Gia tri cua a la: 5
  C. ✓ 0
  D.   Lỗi chương trình.

--------------------------------------------------------------------------------

Câu 52: $now = mktime(1, 2, 3, 4, 5, 2012); echo getdate($now)['hour']; Kết quả hiện ra màn hình là gì?
Đáp án đúng: Chương trình không hiện thông tin gì.

Tất cả đáp án:
  A.   5
  B.   4
  C.   NULL
  D. ✓ Chương trình không hiện thông tin gì.

--------------------------------------------------------------------------------

Câu 53: $m = array('a'=>'1', 'b'=>'2'); echo $m['1']; Kết quả hiện lên màn hình là gì?
Đáp án đúng: Lỗi chương trình hoặc cảnh báo.

Tất cả đáp án:
  A.   a
  B.   1
  C.   b
  D. ✓ Lỗi chương trình hoặc cảnh báo.

--------------------------------------------------------------------------------

Câu 54: $m = array('a', 'b', 'c', 'd'); echo array_shift($m); Kết quả hiện lên màn hình là gì?
Đáp án đúng: a

Tất cả đáp án:
  A. ✓ a
  B.   d
  C.   NULL
  D.   Lỗi chương trình.

--------------------------------------------------------------------------------

Câu 55: $m = array('a'=>'1', 'b'=>'2', 'c'=>'3', 'd'=>'4'); echo array_shift($m); Kết quả hiện lên màn hình là gì?
Đáp án đúng: 1

Tất cả đáp án:
  A.   a
  B.   d
  C. ✓ 1
  D.   4

--------------------------------------------------------------------------------

Câu 56: $m = array('a'=>'1', 'b'=>'2', 'c'=>'3', 'd'=>'4'); unset($m); echo array_pop($m); Kết quả hiện lên màn hình là gì?
Đáp án đúng: Lỗi chương trình.

Tất cả đáp án:
  A.   a
  B.   1
  C.   4
  D. ✓ Lỗi chương trình.

--------------------------------------------------------------------------------

Câu 57: $query = "UPDATE Table SET Name='A' WHERE ID=1". Để thực thi câu truy vấn trên trong PHP ta dùng câu lệnh nào trong PDO?
Đáp án đúng: $db->exec($query)

Tất cả đáp án:
  A.   $db->query($query)
  B. ✓ $db->exec($query)
  C.   $db->execute($query)
  D.   $db->execute($query,$db)

--------------------------------------------------------------------------------

Câu 58: Cú pháp nào sau đây là đúng?
Đáp án đúng: header(Location:.)

Tất cả đáp án:
  A.   header(http://fpt.com.vn)
  B.   header(Location:/admin)
  C. ✓ header(Location:.)
  D.   header(Locations:.)

--------------------------------------------------------------------------------

Câu 59: Cấu trúc try catch dùng để…
Đáp án đúng: Bắt ngoại lệ của đoạn mã PHP.

Tất cả đáp án:
  A.   Tăng tốc độ thực thi cho đoạn mã PHP.
  B. ✓ Bắt ngoại lệ của đoạn mã PHP.
  C.   Bỏ qua lỗi của đoạn mã PHP.
  D.   Bỏ qua 1 dòng lệnh PHP.

--------------------------------------------------------------------------------

Câu 60: phpMyAdmin là…
Đáp án đúng: Phần mềm quản trị cơ sở dữ liệu.

Tất cả đáp án:
  A.   Phần mềm máy chủ ảo.
  B.   Phần mềm quản trị máy chủ.
  C. ✓ Phần mềm quản trị cơ sở dữ liệu.
  D.   Phần mềm nhập liệu.

--------------------------------------------------------------------------------

Câu 61: Trong mô hình MVC tầng nào giao tiếp với hai tầng còn lại?
Đáp án đúng: Controller

Tất cả đáp án:
  A.   Model
  B.   View
  C.   Control
  D. ✓ Controller

--------------------------------------------------------------------------------

Câu 62: Trong phpMyAdmin, để xem dữ liệu của một bảng thì nhấn nút nào dưới đây?
Đáp án đúng: Click vào tên bảng ở menu bên trái.

Tất cả đáp án:
  A.   Data
  B.   Browse
  C.   Structure
  D. ✓ Click vào tên bảng ở menu bên trái.

--------------------------------------------------------------------------------

Câu 63: Trong phpMyAdmin, để xóa dữ liệu của một bảng thì nhấn nút nào dưới đây?
Đáp án đúng: Empty

Tất cả đáp án:
  A. ✓ Empty
  B.   Drop
  C.   Delete
  D.   Del

--------------------------------------------------------------------------------

Câu 64: Tầng model của mô hình MVC chứa những gì?
Đáp án đúng: Các file PHP biểu thị dữ liệu của ứng dụng.

Tất cả đáp án:
  A.   Các file HTML thể hiện giao diện của ứng dụng.
  B.   Các file PHP thể hiện giao tiếp với người dùng.
  C. ✓ Các file PHP biểu thị dữ liệu của ứng dụng.
  D.   Các file database.

--------------------------------------------------------------------------------

Câu 65: Tầng nào sau đây thuộc các tầng của mô hình MVC?
Đáp án đúng: Model, view, controller

Tất cả đáp án:
  A.   Database
  B.   Viewer
  C.   Control
  D. ✓ Model, view, controller

--------------------------------------------------------------------------------

Câu 66: Để chuyển tiếp yêu cầu sang một URL khác người ta dùng hàm nào sau đây?
Đáp án đúng: header

Tất cả đáp án:
  A. ✓ header
  B.   include
  C.   require_once
  D.   require

--------------------------------------------------------------------------------

Câu 67: Để chuyển tiếp yêu cầu từ một trang PHP này sang một trang PHP khác người ta dùng hàm nào sau đây?
Đáp án đúng: include

Tất cả đáp án:
  A.   header
  B. ✓ include
  C.   require_once
  D.   require

--------------------------------------------------------------------------------

Câu 68: Để gán giá trị 'abc' cho phần tử 'Ten' của mảng $a thì dùng cấu trúc nào sau đây?
Đáp án đúng: $a['Ten'] = 'abc'

Tất cả đáp án:
  A. ✓ $a['Ten'] = 'abc'
  B.   $a[Ten] = abc
  C.   $a('Ten') = 'abc'
  D.   $a('Ten',0) = 'abc'

--------------------------------------------------------------------------------

Câu 69: Để gán giá trị 18 cho phần tử 'Tuoi' của mảng $a thì dùng cấu trúc nào sau đây?
Đáp án đúng: $a['Tuoi'] = 18

Tất cả đáp án:
  A.   $a(Tuoi) = 18
  B.   $a[Tuoi] = 18
  C.   $a[Tuoi] == 18
  D. ✓ $a['Tuoi'] = 18

--------------------------------------------------------------------------------

Câu 70: Để khởi tạo mảng gồm 4 phần tử trong PHP thì dùng cấu trúc nào sau đây?
Đáp án đúng: array(3)

Tất cả đáp án:
  A.   $a = array(4)
  B.   array(5)
  C. ✓ array(3)
  D.   array[3]

--------------------------------------------------------------------------------

Câu 71: Để lấy dữ liệu từ hàng đầu tiên của tập kết quả $b và lưu vào biến $a thì dùng cấu trúc nào sau đây?
Đáp án đúng: $a = $b->fetch()

Tất cả đáp án:
  A. ✓ $a = $b->fetch()
  B.   $a = $b->fetch(1)
  C.   $a = $b->fetch(0)
  D.   $a = $b->fetch(all)

--------------------------------------------------------------------------------

Câu 72: Để lấy dữ liệu từ tất cả các hàng của tập kết quả thì người ta dùng cách nào sau đây?
Đáp án đúng: Sử dụng vòng lặp để duyệt từng hàng của tập kết quả.

Tất cả đáp án:
  A.   Truy cập trực tiếp vào các phần tử của tập kết quả.
  B. ✓ Sử dụng vòng lặp để duyệt từng hàng của tập kết quả.
  C.   Gán tập kết quả cho một biến mới.
  D.   Gán 1 dòng quả cho một biến mới.

--------------------------------------------------------------------------------

Câu 73: Để lấy giá trị của phần tử 'Ten' của mảng $a và lưu vào biến $b thì dùng cấu trúc nào sau đây?
Đáp án đúng: $b = $a['Ten']

Tất cả đáp án:
  A.   $b = $a[Ten]
  B. ✓ $b = $a['Ten']
  C.   $b = $a('Ten')
  D.   $b = $a(Ten)

--------------------------------------------------------------------------------

Câu 74: Để thực thi câu truy vấn "DELETE * FROM Table" trong PHP với biến kết nối là $db thì dùng cấu trúc nào?
Đáp án đúng: $db->exec('DELETE * FROM Table')

Tất cả đáp án:
  A.   $db->query(DELETE * FROM Table)
  B.   $db->execute('DELETE * FROM Table')
  C. ✓ $db->exec('DELETE * FROM Table')
  D.   $db->executes('DELETE * FROM Table')

--------------------------------------------------------------------------------

Câu 75: Chế độ Live Code sẽ hiển thị điều gì?
Đáp án đúng: Hiển thị mã nguồn.

Tất cả đáp án:
  A.   Hiển thị hình ảnh design.
  B. ✓ Hiển thị mã nguồn.
  C.   Hiển thị layer.
  D.   Hiển thị gradient.

--------------------------------------------------------------------------------

Câu 76: Thẻ <div> là viết tắt của từ nào?
Đáp án đúng: division

Tất cả đáp án:
  A.   divite
  B.   divide
  C. ✓ division
  D.   divition

--------------------------------------------------------------------------------

Câu 77: Có thể khởi tạo  một file .css (dạng external stylesheet) thông qua?
Đáp án đúng: Tạo 1 file css mới.

Tất cả đáp án:
  A. ✓ Tạo 1 file css mới.
  B.   Viết trên file html cũ.
  C.   Sử dụng css trong thẻ.
  D.   Sử dụng css ở trong thẻ title.

--------------------------------------------------------------------------------

Câu 78: Đâu là một tính năng của CSS?
Đáp án đúng: Tính kế thừa.

Tất cả đáp án:
  A. ✓ Tính kế thừa.
  B.   Tính giao thừa.
  C.   Tính bóc tách.
  D.   Tính hợp nhất.

--------------------------------------------------------------------------------

Câu 79: Cặp thẻ <head></head> được đặt nằm trong cặp thẻ nào sau đây?
Đáp án đúng: <html></html>

Tất cả đáp án:

--------------------------------------------------------------------------------

Câu 80: Dạng màu nào được hỗ trợ trong HTML?
Đáp án đúng: Màu bệt (flat color).

Tất cả đáp án:
  A. ✓ Màu bệt (flat color).
  B.   Màu gradient.
  C.   Màu line.
  D.   Màu show.

--------------------------------------------------------------------------------

Câu 81: Thẻ <input type=”Submit” dùng để làm gì?
Đáp án đúng: Tạo một nút lệnh dùng để gửi tin trong form đi.

Tất cả đáp án:
  A.   Tạo một ô text để nhập dữ liệu.
  B. ✓ Tạo một nút lệnh dùng để gửi tin trong form đi.
  C.   Tạo một nút lệnh dùng để xóa thông tin trong form.
  D.   Dùng để nhập liệu.

--------------------------------------------------------------------------------

Câu 82: Phát biểu nào sau đây đúng?
Đáp án đúng: Javascript là ngôn ngữ lập trình, giúp viết code trong trang web để thực hiện tính toán, xử lý sự kiện trang web.

Tất cả đáp án:
  A.   Javascript là cách gọi khác của HTML.
  B. ✓ Javascript là ngôn ngữ lập trình, giúp viết code trong trang web để thực hiện tính toán, xử lý sự kiện trang web.
  C.   Javascript là cách gọi khác của CSS.
  D.   Javacript chính là java.

--------------------------------------------------------------------------------

Câu 83: Mục đích của JavaScript là gì?
Đáp án đúng: JavaScript được tạo ra với mục đích tạo nên tính tương tác cho trang web.

Tất cả đáp án:
  A.   JavaScript được tạo ra với mục đích tạo nên định dạng cho trang web.
  B. ✓ JavaScript được tạo ra với mục đích tạo nên tính tương tác cho trang web.
  C.   JavaScript được tạo ra với mục đích tạo nên các thẻ cho trang web.
  D.   JavaScript được tạo ra với mục đích tạo nên định dạng và các thẻ cho trang web.

--------------------------------------------------------------------------------

Câu 84: JavaScript có thể làm gì trong trang web?
Đáp án đúng: Xử lý sự kiện, ẩn hiện hình, đổi hình khi đưa chuột vào...

Tất cả đáp án:
  A.   Javascript không thể làm gì cho trang web.
  B.   Javascript định dạng button hiển thị màu đỏ.
  C. ✓ Xử lý sự kiện, ẩn hiện hình, đổi hình khi đưa chuột vào...
  D.   Javascript sẽ định dạng button hiển thị màu xanh.
--------------------------------------------------------------------------------

Câu 85: JavaScript có thể làm gì trong trang web?
Đáp án đúng: Tạo các hiệu ứng trong trang web như slide show, carousel, tab...

Tất cả đáp án:
  A.   Javascript không thể giúp trang web tạo hiệu ứng.
  B. ✓ Tạo các hiệu ứng trong trang web như slide show, carousel, tab...
  C.   Javascript định dạng trang web hiển thị trong 1 hình chữ nhật.
  D.   Javascript định dạng trang web hiển thị trong 1 hình vuông.

--------------------------------------------------------------------------------

Câu 86: Hãy chỉ ra phát biểu đúng?
Đáp án đúng: Kiểm tra hợp lệ dữ liệu trong form.

Tất cả đáp án:
  A.   Code JavaScript không cần đặt trong thẻ.
  B. ✓ Kiểm tra hợp lệ dữ liệu trong form.
  C.   Mỗi lệnh trong javascript kết thúc bằng dấu chấm.
  D.   Mỗi lệnh trong javascript kết thúc bằng dấu phảy.

--------------------------------------------------------------------------------

Câu 87: Chạy chương trình sau hiển thị kết quả gì? $a = 7; function add(){ $GLOBAL['a']++; } add($a); echo $a;
Đáp án đúng: Chương trình hiển thị cảnh báo và vẫn in ra giá trị biến $a

Tất cả đáp án:
  A.   8
  B.   6
  C.   5
  D. ✓ Chương trình hiển thị cảnh báo và vẫn in ra giá trị biến $a

--------------------------------------------------------------------------------

Câu 88: Chạy chương trình sau hiển thị kết quả gì? $a = 5; function add($b = 3){ global $a; return $a+$b; } $c = add(4); echo $c;
Đáp án đúng: 9

Tất cả đáp án:
  A. ✓ 9
  B.   8
  C.   NULL
  D.   10

--------------------------------------------------------------------------------

Câu 89: Chạy chương trình sau hiển thị kết quả gì? class Number { public $a = 5; public function __construct($b) { $a = $b + 3; } } $num = new Number(8); echo $num->a;
Đáp án đúng: 5

Tất cả đáp án:
  A. ✓ 5
  B.   8
  C.   11
  D.   Lỗi chương trình.

--------------------------------------------------------------------------------

Câu 90: Chạy chương trình sau hiển thị kết quả gì? class Number { public $a = 5; public function __construct($b) { $a = $b + 3; } } $num = new Number(); echo $num->a;
Đáp án đúng: Lỗi chương trình.

Tất cả đáp án:
  A.   5
  B.   NULL
  C.   11
  D. ✓ Lỗi chương trình.

--------------------------------------------------------------------------------

Câu 91: Chạy chương trình sau hiển thị kết quả gì? class Number { public static $a = 5; public function __construct($b) { self::$a = $b + 3; } } echo Number::$a;
Đáp án đúng: 5

Tất cả đáp án:
  A. ✓ 5
  B.   8
  C.   11
  D.   Lỗi chương trình.

--------------------------------------------------------------------------------

Câu 92: Chạy chương trình sau hiển thị kết quả gì? class Number { public $a = 5; public function __construct($b) { $a = $b + 3; } } $num1 = new Number(4); $num2 = $num1; $num2->$a + 2; echo $num2->a;
Đáp án đúng: Hiển thị cảnh báo và vẫn in ra kết quả biến.

Tất cả đáp án:
  A.   4
  B.   9
  C.   7
  D. ✓ Hiển thị cảnh báo và vẫn in ra kết quả biến.

--------------------------------------------------------------------------------

Câu 93: $now = mktime(1, 2, 3, 4, 5, 2012); $date = getdate($now); $a = $date['month']; echo $a; Kết quả hiện ra màn hình là gì?
Đáp án đúng: April

Tất cả đáp án:
  A.   2
  B. ✓ April
  C.   NULL
  D.   Lỗi chương trình.

--------------------------------------------------------------------------------

Câu 94: Giả sử hiện tại là 1:04:06 sáng ngày 18/02/2012 $now = strtotime('-2 hour'); $date = getdate($now); $a = $date['day']; echo $a; Kết quả hiện ra màn hình là gì?
Đáp án đúng: Chương trình không hiển thị thông tin gì.

Tất cả đáp án:
  A.   18/2/2012
  B.   23
  C.   17
  D. ✓ Chương trình không hiển thị thông tin gì.

--------------------------------------------------------------------------------

Câu 95: $m = array('a'=>'1', 'b'=>'2'); echo $m['a']; Kết quả hiện lên màn hình là gì?
Đáp án đúng: 1

Tất cả đáp án:
  A.   a
  B. ✓ 1
  C.   b
  D.   Lỗi chương trình.

--------------------------------------------------------------------------------

Câu 96: $m = array('a', 'b', 'c', 'd'); echo array_pop($m); Kết quả hiện lên màn hình là gì?
Đáp án đúng: d

Tất cả đáp án:
  A.   a
  B.   NULL
  C. ✓ d
  D.   Lỗi chương trình.

--------------------------------------------------------------------------------

Câu 97: $m = array('a'=>'1', 'b'=>'2', 'c'=>'3', 'd'=>'4'); echo array_pop($m); Kết quả hiện lên màn hình là gì?
Đáp án đúng: 4

Tất cả đáp án:
  A.   a
  B.   d
  C.   1
  D. ✓ 4

--------------------------------------------------------------------------------

Câu 98: $m = array('a', 'b', 'c', 'd'); echo $m[1]; Kết quả hiện lên màn hình là gì?
Đáp án đúng: b

Tất cả đáp án:
  A.   a
  B. ✓ b
  C.   c
  D.   Lỗi chương trình

--------------------------------------------------------------------------------

Câu 99: Để lấy giá trị của phần tử thứ 4 của mảng $a và lưu vào biến $b thì dùng cấu trúc nào sau đây?
Đáp án đúng: $b = $a[3]

Tất cả đáp án:
  A. ✓ $b = $a[3]
  B.   $b = $a[4]
  C.   $b = $a(2)
  D.   $b = $a(2,0)

--------------------------------------------------------------------------------

Câu 100: Để thực thi câu truy vấn "SELECT * FROM Table" trong PHP với biến kết nối là $db thì dùng cấu trúc nào?
Đáp án đúng: $db->query('SELECT * FROM Table')

Tất cả đáp án:
  A.   $db->query(SELECT * FROM Table)
  B.   $db->execute('SELECT * FROM Table')
  C.   $db->exec('SELECT * FROM Table')
  D. ✓ $db->query('SELECT * FROM Table')

--------------------------------------------------------------------------------


`;

// === MÔN Quản trị dự án CNTT ===
// DÁN nguyên văn nội dung file: TỔNG HỢP CÂU HỎI VÀ ĐÁP ÁN - MÔN Qu.txt
const RAW_QU = `
TỔNG HỢP CÂU HỎI VÀ ĐÁP ÁN - MÔN: Quản trị dự án Công nghệ thông tin
====================================================================================================

Câu 1: Chọn phát biểu đúng về dự án?
Đáp án đúng: Dự án là một nỗ lực tạm thời được tiến hành để tạo ra một sản phẩm hoặc dịch vụ duy nhất.

Tất cả đáp án:
  A. ✓ Dự án là một nỗ lực tạm thời được tiến hành để tạo ra một sản phẩm hoặc dịch vụ duy nhất.
  B.   Dự án là một dịch vụ duy nhất được tiến hành để tạo ra một sản phẩm tạm thời.
  C.   Dự án là một sản phẩm tạm thời được tiến hành để tạo ra một nỗ lực hoặc dịch vụ duy nhất.
  D.   Dự án là một nỗ lực duy nhất để tạo ra một dịch vụ tạm thời.

----------------------------------------------------------------------------------------------------

Câu 2: Một chuỗi các công việc nhằm tạo ra một sản phẩm hay dịch vụ duy nhất trong một thời hạn nào đó được mô tả đúng bởi thuật ngữ nào?
Đáp án đúng: Một dự án.

Tất cả đáp án:
  A.   Một chương trình.
  B. ✓ Một dự án.
  C.   Một đơn vị công việc.
  D.   Một nhiệm vụ.

----------------------------------------------------------------------------------------------------

Câu 3: Quản lý dự án là:
Đáp án đúng: Khả năng quản lý và nỗ lực tạm thời để tạo ra một sản phẩm hay dịch vụ duy nhất với khoảng thời gian và ngân sách nhất định.

Tất cả đáp án:
  A.   Khả năng hoàn thành một công việc trong khoảng thời gian nhất định.
  B.   Khả năng hoàn thành một công việc với khoản ngân sách nhất định.
  C. ✓ Khả năng quản lý và nỗ lực tạm thời để tạo ra một sản phẩm hay dịch vụ duy nhất với khoảng thời gian và ngân sách nhất định.
  D.   Khả năng quản lý một chuỗi công việc theo thứ tự thời gian với khoảng thời gian và ngân sách nhất định.

----------------------------------------------------------------------------------------------------

Câu 4: Yếu tố nào sau đây KHÔNG PHẢI là một trong các ràng buộc của quản lý dự án?
Đáp án đúng: Con người.

Tất cả đáp án:
  A.   Thời gian.
  B.   Chi phí.
  C. ✓ Con người.
  D.   Phạm vi.

----------------------------------------------------------------------------------------------------

Câu 5: Yếu tố nào sau đây là yếu tố quyết định sự thành công của dự án?
Đáp án đúng: Con người.

Tất cả đáp án:
  A. ✓ Con người.
  B.   Quy trình.
  C.   Sản phẩm.
  D.   Kỹ thuật.

----------------------------------------------------------------------------------------------------

Câu 6: Phát biểu nào sau đây là đặc trưng của phần mềm?
Đáp án đúng: Phần mềm sẽ thoái hóa theo thời gian.

Tất cả đáp án:
  A.   Phần mềm sẽ hư hỏng theo thời gian.
  B. ✓ Phần mềm sẽ thoái hóa theo thời gian.
  C.   Phần mềm được chế tạo theo nghĩa cổ điển.
  D.   Phần mềm được phát triển theo đơn đặt hàng.

----------------------------------------------------------------------------------------------------

Câu 7: Quản lý dự án phần mềm là:
Đáp án đúng: Khả năng quản lý và nỗ lực tạm thời để tạo ra một phần mềm duy nhất với khoảng thời gian và ngân sách nhất định.

Tất cả đáp án:
  A.   Khả năng hoàn thành một phần mềm trong khoảng thời gian nhất định.
  B.   Khả năng hoàn thành một phần mềm với khoản ngân sách nhất định.
  C. ✓ Khả năng quản lý và nỗ lực tạm thời để tạo ra một phần mềm duy nhất với khoảng thời gian và ngân sách nhất định.
  D.   Khả năng quản lý một chuỗi công việc theo thứ tự thời gian với khoảng thời gian và ngân sách nhất định.

----------------------------------------------------------------------------------------------------

Câu 8: Sắp xếp theo thứ tự hợp lý cho các nhóm quy trình trong quản lý dự án phần mềm:
Đáp án đúng: Khởi động, lập kế hoạch, thực hiện, theo dõi và giám sát, kết thúc.

Tất cả đáp án:
  A.   Khởi động, theo dõi và giám sát, thực hiện, lập kế hoạch, kết thúc.
  B.   Khởi động, thực hiện, lập kế hoạch, theo dõi và giám sát, kết thúc.
  C.   Khởi động, lập kế hoạch, theo dõi và giám sát, thực hiện, kết thúc.
  D. ✓ Khởi động, lập kế hoạch, thực hiện, theo dõi và giám sát, kết thúc.

----------------------------------------------------------------------------------------------------

Câu 9: Nhóm tiến trình nào sau đây của dự án phần mềm có khối lượng công việc ít nhất?
Đáp án đúng: Khởi động.

Tất cả đáp án:
  A.   Thực hiện.
  B. ✓ Khởi động.
  C.   Theo dõi và giám sát.
  D.   Lập kế hoạch.

----------------------------------------------------------------------------------------------------

Câu 10: Một dự án chỉ được tiến hành khi đáp ứng đầy đủ các yêu cầu nào sau đây?
Đáp án đúng: Mục tiêu, yêu cầu của khách hàng, ngân sách, giải pháp thực hiện, kết quả mong đợi.

Tất cả đáp án:
  A.   Mục tiêu, yêu cầu của khách hàng, ngân sách, thời gian thực hiện, kết quả mong đợi.
  B. ✓ Mục tiêu, yêu cầu của khách hàng, ngân sách, giải pháp thực hiện, kết quả mong đợi.
  C.   Mục tiêu, yêu cầu của khách hàng, ngân sách, công nghệ thực hiện, kết quả mong đợi.
  D.   Mục tiêu, yêu cầu của khách hàng, ngân sách, kế hoạch thực hiện, kết quả mong đợi.

----------------------------------------------------------------------------------------------------

Câu 11: Thứ tự đúng của các giai đoạn trong quy trình phát triển dự án phần mềm:
Đáp án đúng: Đặc tả, phân tích, thiết kế, thực hiện, phát hành.

Tất cả đáp án:
  A.   Đặc tả, phân tích, thực hiện, thiết kế, phát hành.
  B.   Đặc tả, thiết kế, phân tích, thực hiện, phát hành.
  C. ✓ Đặc tả, phân tích, thiết kế, thực hiện, phát hành.
  D.   Đặc tả, thiết kế, thực hiện, phân tích, phát hành.

----------------------------------------------------------------------------------------------------

Câu 12: Trong các bên có liên quan đến dự án phần mềm, bên nào có vai trò quan trọng nhất quyết định sự thành công của dự án?
Đáp án đúng: Người quản lý dự án.

Tất cả đáp án:
  A.   Quản lý cấp cao.
  B. ✓ Người quản lý dự án.
  C.   Khách hàng.
  D.   Nhà tài trợ.

----------------------------------------------------------------------------------------------------

Câu 13: Hoạt động nào sau đây KHÔNG PHẢI là một hoạt động đặc thù của người quản lý dự án?
Đáp án đúng: Kiểm soát công việc dự án.

Tất cả đáp án:
  A.   Lập các kế hoạch cho dự án.
  B. ✓ Kiểm soát công việc dự án.
  C.   Theo dõi và giám sát tiến độ dự án.
  D.   Lập kế hoạch tiến độ cho dự án.

----------------------------------------------------------------------------------------------------

Câu 14: Quản lý tích hợp là:
Đáp án đúng: Tích hợp 4 lĩnh vực hỗ trợ trong quản lý dự án và các tác động qua lại giữa chúng.

Tất cả đáp án:
  A.   Tích hợp 4 lĩnh vực chính trong quản lý dự án và các tác động qua lại giữa chúng.
  B. ✓ Tích hợp 4 lĩnh vực hỗ trợ trong quản lý dự án và các tác động qua lại giữa chúng.
  C.   Tích hợp tất cả các lĩnh vực trong quản lý dự án và các tác động qua lại giữa chúng.
  D.   Tích hợp 4 lĩnh vực chính trong quản lý dự án và các tác động qua lại giữa chúng, Tích hợp 4 lĩnh vực hỗ trợ trong quản lý dự án và các tác động qua lại giữa chúng và Tích hợp tất cả các lĩnh vực trong quản lý dự án và các tác động qua lại giữa chúng đều sai.

----------------------------------------------------------------------------------------------------

Câu 15: Phát triển điều lệ dự án thuộc nhóm quy trình nào?
Đáp án đúng: Khởi động dự án.

Tất cả đáp án:
  A. ✓ Khởi động dự án.
  B.   Lập kế hoạch dự án.
  C.   Nghiên cứu khả thi.
  D.   Xác định dự án

----------------------------------------------------------------------------------------------------

Câu 16: Khi nào người quản lý dự án nên được phân công quản lý dự án?
Đáp án đúng: Trong giai đoạn khởi động dự án.

Tất cả đáp án:
  A.   Khi các hợp đồng được ký kết.
  B.   Một khi ngân sách được hoạch định.
  C. ✓ Trong giai đoạn khởi động dự án.
  D.   Trong khoảng thời gian phân tích rủi ro.

----------------------------------------------------------------------------------------------------

Câu 17: Kế hoạch thực hiện dự án cung cấp ......... cho việc xác định và kiểm soát những thay đổi.
Đáp án đúng: đường cơ sở.

Tất cả đáp án:
  A. ✓ đường cơ sở.
  B.   hướng dẫn.
  C.   quy trình.
  D.   kỹ thuật.

----------------------------------------------------------------------------------------------------

Câu 18: Khi nào đề xuất thay đổi của các bên liên quan được thực hiện?
Đáp án đúng: Khi được phê duyệt.

Tất cả đáp án:
  A. ✓ Khi được phê duyệt.
  B.   Khi đề xuất là của khách hàng.
  C.   Khi đề xuất là của đội dự án.
  D.   Khi đề xuất là của người quản lý dự án.

----------------------------------------------------------------------------------------------------

Câu 19: ......... là quá trình xem xét tất cả các đề xuất thay đổi, phê duyệt các đề xuất thay đổi và thực hiện các thay đổi.
Đáp án đúng: Quản lý thay đổi tích hợp.

Tất cả đáp án:
  A. ✓ Quản lý thay đổi tích hợp.
  B.   Quản lý thay đổi.
  C.   Quản lý yêu cầu.
  D.   Quản lý rủi ro

----------------------------------------------------------------------------------------------------

Câu 20: Khái niệm nào gồm tất cả các giai đoạn phát triển của một dự án phần mềm?
Đáp án đúng: Chu kỳ sống.

Tất cả đáp án:
  A.   Tiến trình dự án.
  B.   Thời gian.
  C.   Mô hình phát triển.
  D. ✓ Chu kỳ sống.

----------------------------------------------------------------------------------------------------

Câu 21: Phạm vi dự án là:
Đáp án đúng: Những công việc cần phải thực hiện để dự án đạt được mục tiêu.

Tất cả đáp án:
  A.   Ranh giới giữa các công việc cần phải thực hiện để dự án đạt được mục tiêu.
  B. ✓ Những công việc cần phải thực hiện để dự án đạt được mục tiêu.
  C.   Những công việc không thuộc về dự án.
  D.   Các công việc được tiến hành trước khi dự án bắt đầu

----------------------------------------------------------------------------------------------------

Câu 22: Quản lý phạm vi dự án là:
Đáp án đúng: Các quy trình xác định và kiểm soát những công việc của dự án và những công việc không thuộc dự án.

Tất cả đáp án:
  A.   Các quy trình xác định những công việc của dự án và những công việc không thuộc dự án.
  B.   Các quy trình kiểm soát những công việc của dự án và những công việc không thuộc dự án.
  C. ✓ Các quy trình xác định và kiểm soát những công việc của dự án và những công việc không thuộc dự án.
  D.   Các quy trình xác định và kiểm soát những kế hoạch thực hiện dự án.

----------------------------------------------------------------------------------------------------

Câu 23: Chức năng chính của quản lý cấp cao trong quản lý phạm vi là:
Đáp án đúng: Phê duyệt các tác động của các yêu cầu thay đổi.

Tất cả đáp án:
  A.   Xác định phạm vi mới của dự án.
  B.   Đưa ra các yêu cầu về thay đổi.
  C. ✓ Phê duyệt các tác động của các yêu cầu thay đổi.
  D.   Bảo vệ những lợi ích chính của dự án.

----------------------------------------------------------------------------------------------------

Câu 24: Tiêu chí quan trọng nào được nhắc đến trong báo cáo quản lý phạm vi?
Đáp án đúng: Hoàn tất.

Tất cả đáp án:
  A.   Kinh phí.
  B. ✓ Hoàn tất.
  C.   Chất lượng.
  D.   Lịch trình.

----------------------------------------------------------------------------------------------------

Câu 25: Phạm vi dự án phần mềm KHÔNG đề cập đến:
Đáp án đúng: Thời gian và chi phí phát triển phầm mềm.

Tất cả đáp án:
  A.   Các công việc liên quan đến việc tạo ra sản phẩm phần mềm.
  B.   Các quá trình được sử dụng để tạo ra sản phẩm phần mềm.
  C.   Các kỹ thuật được sử dụng để tạo ra sản phẩm phần mềm.
  D. ✓ Thời gian và chi phí phát triển phầm mềm.

----------------------------------------------------------------------------------------------------

Câu 26: Quản lý phạm vi dự án phần mềm KHÔNG bao gồm các hoạt động nào?
Đáp án đúng: Thiết kế và xây dựng phần mềm.

Tất cả đáp án:
  A.   Thu thập yêu cầu và xác định phạm vi.
  B.   Xây dựng cấu trúc phân chia công việc.
  C.   Xác nhận và kiểm tra phạm vi.
  D. ✓ Thiết kế và xây dựng phần mềm.

----------------------------------------------------------------------------------------------------

Câu 27: Chọn thứ tự đúng các bước thu thập yêu cầu phần mềm:
Đáp án đúng: Thu thập yêu cầu, phân tích yêu cầu, đặc tả yêu cầu, đánh giá yêu cầu.

Tất cả đáp án:
  A. ✓ Thu thập yêu cầu, phân tích yêu cầu, đặc tả yêu cầu, đánh giá yêu cầu.
  B.   Thu thập yêu cầu, phân tích yêu cầu, đánh giá yêu cầu, đặc tả yêu cầu.
  C.   Thu thập yêu cầu, đánh giá yêu cầu, phân tích yêu cầu, đặc tả yêu cầu.
  D.   Thu thập yêu cầu, đặc tả yêu cầu, phân tích yêu cầu, đánh giá yêu cầu.

----------------------------------------------------------------------------------------------------

Câu 28: Kỹ thuật thu thập yêu cầu phần mềm nào hiệu quả nhất nhưng cần rất nhiều thời gian để thực hiện?
Đáp án đúng: Phỏng vấn.

Tất cả đáp án:
  A.   Họp nhóm.
  B. ✓ Phỏng vấn.
  C.   Ấn định công việc tạm thời.
  D.   Xem xét phần mềm hiện có.

----------------------------------------------------------------------------------------------------

Câu 29: Kỹ thuật thu thập yêu cầu phần mềm nào dễ thực hiện và thông tin thu thập được sẽ khách quan và chính xác?
Đáp án đúng: Xem xét tài liệu.

Tất cả đáp án:
  A.   Họp nhóm.
  B.   Phỏng vấn.
  C. ✓ Xem xét tài liệu.
  D.   Xem xét phần mềm hiện có.

----------------------------------------------------------------------------------------------------

Câu 30: Khuyết điểm của kỹ thuật thu thập yêu cầu phần mềm thông qua xem xét phần mềm hiện có là:
Đáp án đúng: Thông tin từ nhật ký có thể chưa cập nhật kịp thời.

Tất cả đáp án:
  A. ✓ Thông tin từ nhật ký có thể chưa cập nhật kịp thời.
  B.   Thông tin thu được từ nhật ký sẽ không khách quan.
  C.   Cần nhiều thời gian để thu thập thông tin từ nhật ký.
  D.   Cần nhiều chi phí để để thu thập thông tin từ nhật ký

----------------------------------------------------------------------------------------------------

Câu 31: Kỹ thuật ấn định công việc tạm thời được sử dụng để thu thập yêu cầu khi:
Đáp án đúng: Những hoạt động cần thu thập chưa diễn ra hoặc là những tình huống ngoại lệ.

Tất cả đáp án:
  A. ✓ Những hoạt động cần thu thập chưa diễn ra hoặc là những tình huống ngoại lệ.
  B.   Cần nhiều thời gian và chi phí để thu thập thông tin.
  C.   Thông tin thu thập không khách quan.
  D.   Thông tin thu thập không chính xác.

----------------------------------------------------------------------------------------------------

Câu 32: Yếu tố nào sau đây KHÔNG PHẢI là đầu vào của hoạt động xây dựng WBS của dự án phần mềm?
Đáp án đúng: Báo cáo nghiên cứu khả thi.

Tất cả đáp án:
  A.   Báo cáo phạm vi dự án.
  B.   Báo cáo yêu cầu.
  C.   Quy trình phát triển phần mềm.
  D. ✓ Báo cáo nghiên cứu khả thi.

----------------------------------------------------------------------------------------------------

Câu 33: Đặc trưng chính của WBS là:
Đáp án đúng: Có hướng đi từ trên xuống.

Tất cả đáp án:
  A. ✓ Có hướng đi từ trên xuống.
  B.   Có hướng đi từ dưới lên.
  C.   Được chia thành nhiều mức.
  D.   Không nêu cách thức thực hiện công việc.

----------------------------------------------------------------------------------------------------

Câu 34: Yếu tố nào sau đây KHÔNG PHẢI là đặc trưng của WBS?
Đáp án đúng: Có hướng đi từ dưới lên.

Tất cả đáp án:
  A.   Có hướng đi từ trên xuống.
  B. ✓ Có hướng đi từ dưới lên.
  C.   Được chia thành nhiều mức.
  D.   Không nêu cách thức thực hiện công việc.

----------------------------------------------------------------------------------------------------

Câu 35: Work Breakdown Structure – WBS là:
Đáp án đúng: Sự phân chia các hoạt động của một dự án.

Tất cả đáp án:
  A.   Sự mô tả các hoạt động của một dự án.
  B. ✓ Sự phân chia các hoạt động của một dự án.
  C.   Mô hình trách nhiệm của các trưởng nhóm.
  D.   Các thời điểm cuối cùng trong dự án.

----------------------------------------------------------------------------------------------------

Câu 36: Những nguồn lực cơ bản cần hoạch định ngân sách là:
Đáp án đúng: Vật lực và nguồn nhân lực.

Tất cả đáp án:
  A. ✓ Vật lực và nguồn nhân lực.
  B.   Nguyên vật liệu và nguồn nhân lực.
  C.   Chiến lược quảng cáo.
  D.   Nguyên vật liệu, nhiên liệu, và thiết bị.

----------------------------------------------------------------------------------------------------

Câu 37: Trình tự các bước xây dựng kế hoạch dự án là:
Đáp án đúng: Lập WBS → ước lượng → lập lịch biểu.

Tất cả đáp án:
  A.   Ước lượng → lập lịch biểu → lập WBS.
  B.   Ước lượng → lập WBS → lập lịch biểu.
  C. ✓ Lập WBS → ước lượng → lập lịch biểu.
  D.   Lập lịch biểu → lập WBS → ước lượng.

----------------------------------------------------------------------------------------------------

Câu 38: Chọn thứ tự đúng của các bước trong nhóm quy trình lập kế hoạch dự án:
Đáp án đúng: Lập WBS, ước lượng, lập kế hoạch tiến độ.

Tất cả đáp án:
  A.   Ước lượng, lập WBS, lập kế hoạch tiến độ.
  B.   Lập WBS, lập kế hoạch tiến độ, ước lượng.
  C. ✓ Lập WBS, ước lượng, lập kế hoạch tiến độ.
  D.   Lập kế hoạch tiến độ, ước lượng, lập WBS.

----------------------------------------------------------------------------------------------------

Câu 39: Giải pháp tốt nhất để ngăn ngừa sự thay đổi kế hoạch dự án là:
Đáp án đúng: Lập kế hoạch chính xác.

Tất cả đáp án:
  A.   Có đầy đủ tài nguyên.
  B. ✓ Lập kế hoạch chính xác.
  C.   Có đầy đủ vốn.
  D.   Sử dụng kỹ thuật hiện đại.

----------------------------------------------------------------------------------------------------

Câu 40: Mục đích của lập kế hoạch dự án phần mềm là:
Đáp án đúng: Xác định kích thước, thời gian và chi phí thực hiện dự án.

Tất cả đáp án:
  A.   Phát hiện kỹ thuật gì sẽ được dùng để đạt được hiệu quả cao nhất.
  B. ✓ Xác định kích thước, thời gian và chi phí thực hiện dự án.
  C.   Xác định ai sẽ là khách hàng hay nhà tài trợ dự án.
  D.   Xác định chi phí dự án.

----------------------------------------------------------------------------------------------------

Câu 41: Lịch trình thực hiện dự án được thể hiện trong:
Đáp án đúng: Kế hoạch tiến độ dự án.

Tất cả đáp án:
  A.   Các tài liệu khởi động dự án.
  B.   Báo cáo nghiên cứu khả thi.
  C.   Báo cáo phạm vi dự án.
  D. ✓ Kế hoạch tiến độ dự án.

----------------------------------------------------------------------------------------------------

Câu 42: Chọn kiểu quan hệ phụ thuộc nhiệm vụ cho hoạt động: “Lập trình phải tiến hành trước khi kiểm thử”:
Đáp án đúng: Logic.

Tất cả đáp án:
  A.   Tùy ý.
  B. ✓ Logic.
  C.   Quyết định của đội dự án.
  D.   Nguồn lực.

----------------------------------------------------------------------------------------------------

Câu 43: Loại quan hệ nào biểu diễn sự bắt đầu của một công việc phụ thuộc vào sự kết thúc của một công việc khác?
Đáp án đúng: Finish-to-Start (FS).

Tất cả đáp án:
  A. ✓ Finish-to-Start (FS).
  B.   Finish-to-Finish (FF).
  C.   Start-to-Start (SS).
  D.   Start-to-Finish (SF).

----------------------------------------------------------------------------------------------------

Câu 44: Loại quan hệ nào biểu diễn sự kết thúc của một công việc phụ thuộc vào sự kết thúc của một công việc khác?
Đáp án đúng: Finish-to-Finish (FF).

Tất cả đáp án:
  A.   Finish-to-Start (FS).
  B. ✓ Finish-to-Finish (FF).
  C.   Start-to-Start (SS).
  D.   Start-to-Finish (SF).

----------------------------------------------------------------------------------------------------

Câu 45: Giả sử A là hoạt động phân tích, B là hoạt động thiết kế. Khi đó quan hệ phụ thuộc nhiệm vụ giữa A và B là:
Đáp án đúng: Finish to start (FS).

Tất cả đáp án:
  A. ✓ Finish to start (FS).
  B.   Start to start (SS).
  C.   Start to finish (SF).
  D.   Finish to finish (FF)

----------------------------------------------------------------------------------------------------

Câu 46: Yếu tố nào sau đây KHÔNG PHẢI là đầu vào của quá trình lập kế hoạch là:
Đáp án đúng: Chi phí thực hiện từng công việc.

Tất cả đáp án:
  A.   Danh sách các công việc.
  B.   Mối quan hệ giữa các công việc.
  C.   Thời gian thực hiện các công việc.
  D. ✓ Chi phí thực hiện từng công việc.

----------------------------------------------------------------------------------------------------

Câu 47: Để tính tiến độ dự án bằng phương pháp sơ đồ mạng công việc, chúng ta cần xác định bao nhiêu mốc thời gian trên từng công việc?
Đáp án đúng: 4

Tất cả đáp án:
  A.   2
  B.   3
  C. ✓ 4
  D.   5

----------------------------------------------------------------------------------------------------

Câu 48: Sơ đồ Gantt…
Đáp án đúng: Trình bày toàn bộ các hoạt động của dự án ở dạng timeline.

Tất cả đáp án:
  A.   Thể hiện tổng thời gian của từng thành viên trong nhóm.
  B.   Thể hiện tổng thời gian của từng nhóm.
  C. ✓ Trình bày toàn bộ các hoạt động của dự án ở dạng timeline.
  D.   Trình bày WBS trong mối quan hệ tài chính của dự án.

----------------------------------------------------------------------------------------------------

Câu 49: Kết quả của ước lượng là đầu vào của nhóm tiến trình nào sau đây?
Đáp án đúng: Lập kế hoạch.

Tất cả đáp án:
  A.   Khởi động.
  B.   Thực hiện.
  C. ✓ Lập kế hoạch.
  D.   Kiểm tra và giám sát.

----------------------------------------------------------------------------------------------------

Câu 50: Ước lượng phần mềm trong giai đoạn nào sau đây sẽ có sai số nhiều nhất?
Đáp án đúng: Định nghĩa.

Tất cả đáp án:
  A. ✓ Định nghĩa.
  B.   Phân tích.
  C.   Thực hiện.
  D.   Khảo sát

----------------------------------------------------------------------------------------------------

Câu 51: Ước lượng phần mềm được thực hiện ngay sau hoạt động quản lý dự án nào?
Đáp án đúng: Tạo WBS.

Tất cả đáp án:
  A. ✓ Tạo WBS.
  B.   Lập điều lệ dự án.
  C.   Giám sát dự án.
  D.   Lập kế hoạch.

----------------------------------------------------------------------------------------------------

Câu 52: Chọn thứ tự đúng của ước lượng phần mềm:
Đáp án đúng: Ước lượng kích thước → Ước lượng nỗ lực → Ước lượng lịch biểu → Ước lượng chi phí.

Tất cả đáp án:
  A. ✓ Ước lượng kích thước → Ước lượng nỗ lực → Ước lượng lịch biểu → Ước lượng chi phí.
  B.   Ước lượng nỗ lực → Ước lượng lịch biểu → Ước lượng kích thước → Ước lượng chi phí.
  C.   Ước lượng lịch biểu → Ước lượng kích thước → Ước lượng nỗ lực → Ước lượng chi phí.
  D.   Ước lượng kích thước → Ước lượng lịch biểu → Ước lượng nỗ lực → Ước lượng chi phí.

----------------------------------------------------------------------------------------------------

Câu 53: Đầu vào của ước lượng kích thước phần mềm là:
Đáp án đúng: Báo cáo phạm vi.

Tất cả đáp án:
  A. ✓ Báo cáo phạm vi.
  B.   Ma trận truy xuất yêu cầu.
  C.   Điều lệ dự án.
  D.   Hợp đồng dự án.

----------------------------------------------------------------------------------------------------

Câu 54: Phương pháp ước lượng nỗ lực COCOMO sử dụng đơn vị số dòng mã lệnh nào?
Đáp án đúng: Hàng ngàn.

Tất cả đáp án:
  A.   Hàng chục.
  B.   Hàng trăm.
  C. ✓ Hàng ngàn.
  D.   Hàng chục ngàn.

----------------------------------------------------------------------------------------------------

Câu 55: Phương pháp nào sau đây KHÔNG PHẢI là phương pháp ước lượng?
Đáp án đúng: Brainstorming.

Tất cả đáp án:
  A.   Lấy ý kiến chuyên gia.
  B.   Trả giá để thắng.
  C. ✓ Brainstorming.
  D.   Từ dưới lên.

----------------------------------------------------------------------------------------------------

Câu 56: Phương pháp ước lượng nào sau đây có ưu điểm là thường giành được hợp đồng?
Đáp án đúng: Trả giá để thắng.

Tất cả đáp án:
  A.   Từ trên xuống.
  B.   Quy tắc Parkinson.
  C.   Lấy ý kiến chuyên gia.
  D. ✓ Trả giá để thắng.

----------------------------------------------------------------------------------------------------

Câu 57: Phương pháp nào sau đây là phương pháp ước lượng theo công thức?
Đáp án đúng: Điểm chức năng.

Tất cả đáp án:
  A.   Số dòng lệnh.
  B. ✓ Điểm chức năng.
  C.   Số nút trong lưu đồ dữ liệu (DFD).
  D.   Tương tự.

----------------------------------------------------------------------------------------------------

Câu 58: Phương pháp nào sau đây KHÔNG PHẢI là phương pháp ước lượng theo công thức?
Đáp án đúng: Tương tự.

Tất cả đáp án:
  A.   Số dòng lệnh.
  B.   Điểm chức năng.
  C.   Điểm trường hợp sử dụng.
  D. ✓ Tương tự.

----------------------------------------------------------------------------------------------------

Câu 59: Phương pháp ước lượng nào sau đây có ưu điểm là có độ chính xác cao?
Đáp án đúng: Từ dưới lên.

Tất cả đáp án:
  A.   Từ trên xuống.
  B. ✓ Từ dưới lên.
  C.   Số dòng lệnh.
  D.   Trả giá để thắng.

----------------------------------------------------------------------------------------------------

Câu 60: Thành phần nào sau đây KHÔNG PHẢI là đầu vào của phương pháp ước lượng điểm chức năng?
Đáp án đúng: Trả giá để thắng.

Tất cả đáp án:
  A.   Từ trên xuống.
  B.   Quy tắc Parkinson.
  C.   Lấy ý kiến chuyên gia.
  D. ✓ Trả giá để thắng.

----------------------------------------------------------------------------------------------------

Câu 61: Phương pháp ước lượng điểm chức năng sử dụng bao nhiêu loại dữ liệu đầu vào?
Đáp án đúng: 5

Tất cả đáp án:
  A.   3
  B.   4
  C. ✓ 5
  D.   6

----------------------------------------------------------------------------------------------------

Câu 62: Chi phí thực hiện phương pháp ước lượng tương tự là:
Đáp án đúng: Thấp.

Tất cả đáp án:
  A. ✓ Thấp.
  B.   TB.
  C.   Cao.
  D.   Rất cao.

----------------------------------------------------------------------------------------------------

Câu 63: Phương pháp ước lượng từ dưới lên có độ chính xác như thế nào?
Đáp án đúng: Cao.

Tất cả đáp án:
  A.   Thấp.
  B.   Tương đối thấp.
  C.   TB.
  D. ✓ Cao.

----------------------------------------------------------------------------------------------------

Câu 64: Thành phần nào sau đây KHÔNG PHẢI là đầu vào của phương pháp ước lượng điểm trường hợp sử dụng?
Đáp án đúng: Câu truy vấn.

Tất cả đáp án:
  A.   Tác nhân.
  B.   Trường hợp sử dụng.
  C.   Yếu tố phức tạp kỹ thuật.
  D. ✓ Câu truy vấn.

----------------------------------------------------------------------------------------------------

Câu 65: Phương pháp ước lượng điểm trường hợp sử dụng cần bao nhiêu loại dữ liệu đầu vào?
Đáp án đúng: 4

Tất cả đáp án:
  A.   3
  B. ✓ 4
  C.   5
  D.   6

----------------------------------------------------------------------------------------------------

Câu 66: Trong phương pháp ước lượng điểm trường hợp sử dụng, giá trị của tham số C1 của biểu thức tính yếu tố phức tạp kỹ thuật (TCF) có giá trị là:
Đáp án đúng: 0,65

Tất cả đáp án:
  A. ✓ 0,65
  B.   0,55
  C.   0,45
  D.   0,75

----------------------------------------------------------------------------------------------------

Câu 67: Trong phương pháp ước lượng điểm trường hợp sử dụng, giá trị của tham số C2 của biểu thức tính yếu tố phức tạp kỹ thuật (TCF) có giá trị là:
Đáp án đúng: 0,01

Tất cả đáp án:
  A. ✓ 0,01
  B.   0,001
  C.   0,1
  D.   1

----------------------------------------------------------------------------------------------------

Câu 68: Trong phương pháp ước lượng điểm trường hợp sử dụng, thuật ngữ UUCP là:
Đáp án đúng: Unadjusted use case point.

Tất cả đáp án:
  A. ✓ Unadjusted use case point.
  B.   Unified use case point.
  C.   Unadjusted use case protocol.
  D.   Unified use case protocol.

----------------------------------------------------------------------------------------------------

Câu 69: Trong phương pháp ước lượng điểm trường hợp sử dụng, yếu tố nào sau đây KHÔNG PHẢI là yếu tố phức tạp môi trường?
Đáp án đúng: Đội dự án quen thuộc với UML.

Tất cả đáp án:
  A. ✓ Đội dự án quen thuộc với UML.
  B.   Có nhân viên làm việc bán thời gian.
  C.   Độ ổn định của các yêu cầu.
  D.   Xử lý tương tranh.

----------------------------------------------------------------------------------------------------

Câu 70: Trong phương pháp ước lượng điểm trường hợp sử dụng, giá trị của tham số C1 của biểu thức tính yếu tố phức tạp môi trường (EF) có giá trị là:
Đáp án đúng: 1,4

Tất cả đáp án:
  A. ✓ 1,4
  B.   1,44
  C.   0,4
  D.   0,44

----------------------------------------------------------------------------------------------------

Câu 71: Trong phương pháp ước lượng điểm trường hợp sử dụng, giá trị của tham số C2 của biểu thức tính yếu tố phức tạp môi trường (EF) có giá trị là:
Đáp án đúng: -0,03

Tất cả đáp án:
  A. ✓ -0,03
  B.   0,03
  C.   -0,3
  D.   0,3

----------------------------------------------------------------------------------------------------

Câu 72: Trong ước lượng phần mềm, phương pháp ước lượng từ dưới lên (bottom-up) cho rằng:
Đáp án đúng: Chi phí sẽ được ước lượng chi tiết dựa vào các công việc trong dự án.

Tất cả đáp án:
  A.   Ngân sách năm nay sẽ nhiều hơn 20% so với năm trước.
  B.   Ngân sách năm nay sẽ ít hơn 20% so với năm trước.
  C.   Chi phí sẽ được ước lượng ở mức thấp nhất nếu có thể.
  D. ✓ Chi phí sẽ được ước lượng chi tiết dựa vào các công việc trong dự án.

----------------------------------------------------------------------------------------------------

Câu 73: Loại chi phí nào sau đây KHÔNG làm ảnh hưởng đến chất lượng của dự án?
Đáp án đúng: Di chuyển phần mềm.

Tất cả đáp án:
  A.   Dự phòng.
  B.   Thất bại.
  C. ✓ Di chuyển phần mềm.
  D.   Thẩm định.

----------------------------------------------------------------------------------------------------

Câu 74: Nhóm quy trình quản lý dự án nào được lặp đi lặp lại trong suốt vòng đời dự án?
Đáp án đúng: Lập kế hoạch, thực hiện, kiểm soát.

Tất cả đáp án:
  A. ✓ Lập kế hoạch, thực hiện, kiểm soát.
  B.   Khởi động, lập kế hoạch, thực hiện.
  C.   Khởi động, lập kế hoạch, kiểm soát.
  D.   Lập kế hoạch, kiểm soát, kết thúc.

----------------------------------------------------------------------------------------------------

Câu 75: Người quản lý dự án cần kiểm tra tiến độ dự án khi nào?
Đáp án đúng: Trong suốt các giai đoạn thực hiện dự án.

Tất cả đáp án:
  A. ✓ Trong suốt các giai đoạn thực hiện dự án.
  B.   Ở giai đoạn cuối cùng.
  C.   Ở giai đoạn một phần ba sau của quá trình thực hiện.
  D.   Khi dự án gần kết thúc.

----------------------------------------------------------------------------------------------------

Câu 76: Cách ước lượng tỉ lệ phần trăm hoàn thành cho các công việc dự án KHÔNG theo quy ước là:
Đáp án đúng: Ước lượng 40-60.

Tất cả đáp án:
  A.   Ước lượng 50-50
  B.   Ước lượng 0-100.
  C. ✓ Ước lượng 40-60.
  D.   Ước lượng cân đối.

----------------------------------------------------------------------------------------------------

Câu 77: Chọn công thức tính phương sai về lịch biểu:
Đáp án đúng: SV = BCWP – BCWS.

Tất cả đáp án:
  A.   SV = BCWP – ACWP.
  B. ✓ SV = BCWP – BCWS.
  C.   SV = ACWP – BCWP.
  D.   SV = BCWS – BCWP

----------------------------------------------------------------------------------------------------

Câu 78: Khi phân tích giá trị thu được của dự án và biểu diễn trạng thái của dự án bằng biểu đồ thì số khả năng của trạng thái là:
Đáp án đúng: 6

Tất cả đáp án:
  A.   3
  B.   4
  C.   5
  D. ✓ 6

----------------------------------------------------------------------------------------------------

Câu 79: Trong phân tích giá trị thu được, giá trị của CV và SV đều dương khi:
Đáp án đúng: Giá trị khối lượng công việc đã hoàn thành lớn hơn chi phí thực tế và chi phí thực tế nhỏ hơn chi phí theo kế hoạch.

Tất cả đáp án:
  A. ✓ Giá trị khối lượng công việc đã hoàn thành lớn hơn chi phí thực tế và chi phí thực tế nhỏ hơn chi phí theo kế hoạch.
  B.   Giá trị khối lượng công việc đã hoàn thành nhỏ hơn chi phí thực tế và chi phí thực tế nhỏ hơn chi phí theo kế hoạch.
  C.   Giá trị khối lượng công việc đã hoàn thành lớn hơn chi phí thực tế nhưng nhỏ hơn chi phí theo kế hoạch.
  D.   Giá trị khối lượng công việc hoàn thành nhỏ hơn chi phí thực tế nhưng lớn hơn chi phí theo kế hoạch.

----------------------------------------------------------------------------------------------------

Câu 80: Phân tích giá trị thu được, giá trị của CV dương và SV âm:
Đáp án đúng: Giá trị khối lượng công việc đã hoàn thành lớn hơn chi phí thực tế nhưng nhỏ hơn chi phí theo kế hoạch.

Tất cả đáp án:
  A.   Giá trị khối lượng công việc đã hoàn thành lớn hơn chi phí thực tế và chi phí thực tế nhỏ hơn chi phí theo kế hoạch.
  B.   Giá trị khối lượng công việc đã hoàn thành nhỏ hơn chi phí thực tế và chi phí thực tế nhỏ hơn chi phí theo kế hoạch.
  C. ✓ Giá trị khối lượng công việc đã hoàn thành lớn hơn chi phí thực tế nhưng nhỏ hơn chi phí theo kế hoạch.
  D.   Giá trị khối lượng công việc hoàn thành nhỏ hơn chi phí thực tế nhưng lớn hơn chi phí theo kế hoạch.

----------------------------------------------------------------------------------------------------

Câu 81: Trong phân tích giá trị thu được, giá trị của CV âm và SV dương:
Đáp án đúng: Giá trị khối lượng công việc hoàn thành nhỏ hơn chi phí thực tế nhưng lớn hơn chi phí theo kế hoạch.

Tất cả đáp án:
  A.   Giá trị khối lượng công việc đã hoàn thành lớn hơn chi phí thực tế và chi phí thực tế nhỏ hơn chi phí theo kế hoạch.
  B.   Giá trị khối lượng công việc đã hoàn thành nhỏ hơn chi phí thực tế và chi phí thực tế nhỏ hơn chi phí theo kế hoạch.
  C.   Giá trị khối lượng công việc đã hoàn thành lớn hơn chi phí thực tế nhưng nhỏ hơn chi phí theo kế hoạch.
  D. ✓ Giá trị khối lượng công việc hoàn thành nhỏ hơn chi phí thực tế nhưng lớn hơn chi phí theo kế hoạch.

----------------------------------------------------------------------------------------------------

Câu 82: Chọn công thức tính chỉ số thực hiện về chi phí (Schedule performance index):
Đáp án đúng: SPI = BCWP / BCWS.

Tất cả đáp án:
  A.   SPI = BCWP / ACWP.
  B. ✓ SPI = BCWP / BCWS.
  C.   SPI = ACWP / BCWP.
  D.   SPI = BCWS / BCWP.

----------------------------------------------------------------------------------------------------

Câu 83: Một dự án phát triển phần mềm ước tính hoàn tất trong 6 tháng với chi phí 10.000$. Khi dự án còn 2 tháng nữa sẽ kết thúc, 55% công việc của dự án đã hoàn tất, 7.000$ đã dùng cho các công việc. Phương sai lịch biểu (SV) là:
Đáp án đúng: -1.160$.

Tất cả đáp án:
  A.   1.160$.
  B.   3.000$.
  C.   -3.000$.
  D. ✓ -1.160$.

----------------------------------------------------------------------------------------------------

Câu 84: Một dự án phần mềm mới có thể đem lại lợi nhuận cho tổ chức hoặc sẽ bán không được. Điều đó được xếp vào loại rủi ro gì?
Đáp án đúng: Rủi ro về thị trường.

Tất cả đáp án:
  A. ✓ Rủi ro về thị trường.
  B.   Rủi ro về con người.
  C.   Rủi ro về kỹ thuật.
  D.   Rủi ro về tài chính.

----------------------------------------------------------------------------------------------------

Câu 85: Xếp loại rủi ro cho tình huống: Tổ chức có thể không đủ khả năng về kinh phí để thực hiện dự án phần mềm?
Đáp án đúng: Rủi ro về tài chính.

Tất cả đáp án:
  A.   Rủi ro về thị trường.
  B.   Rủi ro về con người.
  C.   Rủi ro về kỹ thuật.
  D. ✓ Rủi ro về tài chính.

----------------------------------------------------------------------------------------------------

Câu 86: Yếu tố nào sau đây KHÔNG mang đến các rủi ro về kỹ thuật đối với dự án phần mềm?
Đáp án đúng: Sự hiểu biết về kỹ thuật.

Tất cả đáp án:
  A.   Sự phức tạp của phần mềm.
  B.   Kích thước của phần mềm.
  C.   Sử dụng công nghệ mới.
  D. ✓ Sự hiểu biết về kỹ thuật.

----------------------------------------------------------------------------------------------------

Câu 87: Nhân tố nào sau đây là rủi ro về nhân sự?
Đáp án đúng: Thành viên rời bỏ nhóm dự án.

Tất cả đáp án:
  A.   Phát triển đội dự án.
  B. ✓ Thành viên rời bỏ nhóm dự án.
  C.   Hoạch định nhân sự.
  D.   Thu nhận nhân sự.

----------------------------------------------------------------------------------------------------

Câu 88: Quản lý rủi ro được thực hiện ở nhóm tiến trình nào của quản lý dự án?
Đáp án đúng: Kiểm soát.

Tất cả đáp án:
  A.   Lập kế hoạch.
  B.   Thực hiện.
  C. ✓ Kiểm soát.
  D.   Khởi động.

----------------------------------------------------------------------------------------------------

Câu 89: Hoạt động nào sau đây KHÔNG thuộc về quản lý rủi ro dự án?
Đáp án đúng: Đánh giá tiến độ thực hiện dự án.

Tất cả đáp án:
  A.   Tìm giải pháp giảm thiểu mức độ tác động.
  B.   Xác định xác suất xuất hiện.
  C.   Đánh giá mức độ tác động.
  D. ✓ Đánh giá tiến độ thực hiện dự án.

----------------------------------------------------------------------------------------------------

Câu 90: Các rủi ro được sắp xếp theo yếu tố nào sau đây?
Đáp án đúng: Xác suất xảy ra và mức độ tác động.

Tất cả đáp án:
  A. ✓ Xác suất xảy ra và mức độ tác động.
  B.   Mức độ tác động và kinh phí ứng phó.
  C.   Xác suất xảy ra và kinh phí ứng phó.
  D.   Mức độ tác động và kế hoạch ứng phó.

----------------------------------------------------------------------------------------------------

Câu 91: Quản lý rủi ro có thể được tích hợp vào quy trình phát triển phần mềm nào sau đây:
Đáp án đúng: Mô hình xoắn ốc.

Tất cả đáp án:
  A. ✓ Mô hình xoắn ốc.
  B.   Mô hình prototype.
  C.   Mô hình thác nước.
  D.   Mô hình chữ V.

----------------------------------------------------------------------------------------------------

Câu 92: Chọn yếu tố KHÔNG PHẢI là nguồn gốc của rủi ro trong các dự án phần mềm:
Đáp án đúng: Sự hiểu biết về kỹ thuật của người dùng.

Tất cả đáp án:
  A.   Ngân sách thực hiện dự án.
  B.   Thay đổi về phạm vi.
  C.   Khó khăn về kỹ thuật.
  D. ✓ Sự hiểu biết về kỹ thuật của người dùng.

----------------------------------------------------------------------------------------------------

Câu 93: Chiến lược nào sau đây KHÔNG được dùng để ứng phó với các rủi ro?
Đáp án đúng: Không chấp nhận.

Tất cả đáp án:
  A.   Tránh.
  B.   Chấp nhận.
  C.   Giảm nhẹ.
  D. ✓ Không chấp nhận.

----------------------------------------------------------------------------------------------------

Câu 94: Trong cấu trúc của tổ chức nào sau đây, người quản lý dự án có quyền lực cao nhất?
Đáp án đúng: Tổ chức theo dự án.

Tất cả đáp án:
  A. ✓ Tổ chức theo dự án.
  B.   Tổ chức theo chức năng.
  C.   Tổ chức theo phân cấp.
  D.   Tổ chức ma trận.

----------------------------------------------------------------------------------------------------

Câu 95: Phát biểu đúng về quản lý nguồn nhân lực:
Đáp án đúng: Là tất cả các hoạt động của một tổ chức để thu hút, xây dựng, phát triển, sử dụng, đánh giá, bảo toàn và giữ gìn một lực lượng lao động phù hợp với yêu cầu công việc.

Tất cả đáp án:
  A. ✓ Là tất cả các hoạt động của một tổ chức để thu hút, xây dựng, phát triển, sử dụng, đánh giá, bảo toàn và giữ gìn một lực lượng lao động phù hợp với yêu cầu công việc.
  B.   Là việc tuyển mộ, tuyển chọn, duy trì, phát triển, sử dụng, động viên và cung cấp tiện nghi cho nhân lực.
  C.   Là nghệ thuật lãnh đạo, nghệ thuật chỉ huy, nghệ thuật làm việc với con người.
  D.   Là hoạch định, tổ chức, chỉ huy và kiểm soát các hoạt động nhằm thu hút, sử dụng và phát triển con người để có thể đạt được các mục tiêu của tổ chức.

----------------------------------------------------------------------------------------------------

Câu 96: Đối tượng của quản lý nguồn nhân lực là:
Đáp án đúng: Người lao động trong tổ chức và các vấn đề liên quan đến họ.

Tất cả đáp án:
  A.   Người lao động trong tổ chức.
  B.   Chỉ bao gồm những người lãnh đạo cấp cao trong tổ chức.
  C.   Chỉ bao gồm những nhân viên cấp dưới.
  D. ✓ Người lao động trong tổ chức và các vấn đề liên quan đến họ.

----------------------------------------------------------------------------------------------------

Câu 97: Quản lý nhân sự dự án là:
Đáp án đúng: Hoạch định, thu nhận, huấn luyện và sử dụng nhân viên và trả lương.

Tất cả đáp án:
  A.   Hoạch định, thu nhận và kích thích nhân viên làm việc.
  B.   Hoạch định, thu nhận và sử dụng nhân viên.
  C.   Hoạch định, thu nhận, huấn luyện và sử dụng nhân viên.
  D. ✓ Hoạch định, thu nhận, huấn luyện và sử dụng nhân viên và trả lương.

----------------------------------------------------------------------------------------------------

Câu 98: Quy trình quản lý nhân sự dự án là:
Đáp án đúng: Hoạch định tài nguyên nhân sự, thu nhận nhân viên và quản lý đội dự án và phát triển kỹ năng.

Tất cả đáp án:
  A.   Hoạch định tài nguyên nhân sự và quản lý đội dự án.
  B.   Hoạch định, thu nhận nhân viên và quản lý đội dự án.
  C.   Hoạch định tài nguyên nhân sự, thu nhận nhân viên và quản lý đội dự án.
  D. ✓ Hoạch định tài nguyên nhân sự, thu nhận nhân viên và quản lý đội dự án và phát triển kỹ năng.

----------------------------------------------------------------------------------------------------

Câu 99: Chọn thứ tự đúng của quy trình quản lý nhân sự:
Đáp án đúng: Hoạch định, thu nhận, phát triển kỹ năng và quản lý đội.

Tất cả đáp án:
  A.   Thu nhận, hoạch định, phát triển kỹ năng và quản lý đội.
  B.   Quản lý đội, hoạch định, thu nhận và phát triển kỹ năng.
  C. ✓ Hoạch định, thu nhận, phát triển kỹ năng và quản lý đội.
  D.   Phát triển kỹ năng, hoạch định, thu nhận và quản lý đội.

----------------------------------------------------------------------------------------------------

Câu 100: Chức năng nào chú trọng nâng cao năng lực của đội dự án và đảm bảo cho các thành viên trong đội có các kỹ năng cần thiết?
Đáp án đúng: Phát triển.

Tất cả đáp án:
  A.   Hoạch định.
  B.   Thu nhận.
  C. ✓ Phát triển.
  D.   Quản lý đội.

----------------------------------------------------------------------------------------------------

Câu 101: Kích thích và động viên nhân viên thuộc về nhóm chức năng nào của quản lý nguồn nhân lực?
Đáp án đúng: Quản lý.

Tất cả đáp án:
  A.   Hoạch định.
  B.   Phát triển.
  C.   Thu nhận.
  D. ✓ Quản lý.

----------------------------------------------------------------------------------------------------

Câu 102: Trong tháp nhu cầu của Maslow, nhu cầu nằm đỉnh tháp là:
Đáp án đúng: Nhu cầu tự hoàn thiện mình.

Tất cả đáp án:
  A.   Nhu cầu sinh lý.
  B.   Nhu cầu an toàn.
  C.   Nhu cầu được tôn trọng.
  D. ✓ Nhu cầu tự hoàn thiện mình.

----------------------------------------------------------------------------------------------------

Câu 103: Trong tháp nhu cầu của Maslow, nhu cầu duy trì sự tồn tại tự nhiên của cơ thể là nhu cầu nào?
Đáp án đúng: Nhu cầu sinh lý.

Tất cả đáp án:
  A. ✓ Nhu cầu sinh lý.
  B.   Nhu cầu an toàn.
  C.   Nhu cầu được tôn trọng.
  D.   Nhu cầu sự tự hoàn thiện.

----------------------------------------------------------------------------------------------------

Câu 104: Phát biểu nào sau đây KHÔNG PHẢI là đặc trưng của dự án?
Đáp án đúng: Có nhiều mục đích khác nhau.

Tất cả đáp án:
  A.   Có tính tạm thời.
  B.   Có tính rủi ro.
  C.   Được thực hiện dưới sự hợp tác của nhiều người.
  D. ✓ Có nhiều mục đích khác nhau.

----------------------------------------------------------------------------------------------------

Câu 105: Chọn ba đặc trưng quan trọng của dự án:
Đáp án đúng: Phạm vi, thời gian và chi phí.

Tất cả đáp án:
  A. ✓ Phạm vi, thời gian và chi phí.
  B.   Phạm vi, thời gian và công nghệ.
  C.   Phạm vi, thời gian và giải pháp.
  D.   Phạm vi, thời gian và tài nguyên.

----------------------------------------------------------------------------------------------------

Câu 106: Chọn thứ tự quản lý từ tổng quát đến cụ thể của các lĩnh vực sau:
Đáp án đúng: Quản lý → Quản lý dự án → Quản lý dự án phần mềm.

Tất cả đáp án:
  A.   Quản lý dự án → Quản lý → Quản lý dự án phần mềm
  B.   Quản lý dự án → Quản lý dự án phần mềm → Quản lý
  C.   Quản lý → Quản lý dự án phần mềm → Quản lý dự án
  D. ✓ Quản lý → Quản lý dự án → Quản lý dự án phần mềm.

----------------------------------------------------------------------------------------------------

Câu 107: Nhóm quy trình nào sau đây của dự án phần mềm có khối lượng công việc nhiều nhất?
Đáp án đúng: Thực hiện.

Tất cả đáp án:
  A. ✓ Thực hiện.
  B.   Khởi động.
  C.   Theo dõi và giám sát.
  D.   Lập kế hoạch.

----------------------------------------------------------------------------------------------------

Câu 108: Theo thống kê của Chaos, tỉ lệ thành công của các dự án phần mềm trong thập niên qua:
Đáp án đúng: Có xu hướng tăng.

Tất cả đáp án:
  A. ✓ Có xu hướng tăng.
  B.   Có xu hướng giảm.
  C.   Không thay đổi.
  D.   Lúc tăng, lúc giảm.

----------------------------------------------------------------------------------------------------

Câu 109: Các đặc tính nào được xem là tiêu chuẩn để tuyển chọn người quản lý dự án?
Đáp án đúng: Uy tín, nhạy bén, tác phong lãnh đạo và quản lý, khả năng chế ngự áp lực.

Tất cả đáp án:
  A.   Uy tín, nhạy bén, kinh nghiệm.
  B.   Chín chắn, nhạy bén, tác phong lãnh đạo và quản lý, khả năng chế ngự áp lực.
  C.   Uy tín, nhạy bén, hoà đồng, khả năng chế ngự áp lực.
  D. ✓ Uy tín, nhạy bén, tác phong lãnh đạo và quản lý, khả năng chế ngự áp lực.

----------------------------------------------------------------------------------------------------

Câu 110: Ai chịu trách nhiệm quản lý tích hợp dự án?
Đáp án đúng: Người quản lý dự án.

Tất cả đáp án:
  A. ✓ Người quản lý dự án.
  B.   Quản lý cấp cao.
  C.   Đội dự án.
  D.   Nhà tài trợ hoặc khách hàng.

----------------------------------------------------------------------------------------------------

Câu 111: Tài liệu nào sau đây có thông tin bổ nhiệm người quản lý dự án?
Đáp án đúng: Điều lệ dự án.

Tất cả đáp án:
  A. ✓ Điều lệ dự án.
  B.   Kế hoạch dự án theo sơ đồ Gantt.
  C.   Tài liệu quy trình tổ chức.
  D.   Ma trận trách nhiệm.

----------------------------------------------------------------------------------------------------

Câu 112: Kiểm soát tiến độ nằm ở nhóm quy trình nào của quản lý dự án?
Đáp án đúng: Theo dõi và giám sát.

Tất cả đáp án:
  A.   Khởi động dự án.
  B.   Lập kế hoạch.
  C.   Thực hiện.
  D. ✓ Theo dõi và giám sát.

----------------------------------------------------------------------------------------------------

Câu 113: Phạm vi dự án phần mềm đề cập đến:
Đáp án đúng: Các quá trình và công việc liên quan đến tạo ra sản phẩm phần mềm.

Tất cả đáp án:
  A.   Các công việc liên quan đến việc tạo ra sản phẩm phần mềm.
  B.   Các quá trình được sử dụng để tạo ra sản phẩm phần mềm.
  C.   Các kỹ thuật và nguồn nhân lực được sử dụng để tạo ra sản phẩm phần mềm.
  D. ✓ Các quá trình và công việc liên quan đến tạo ra sản phẩm phần mềm.

----------------------------------------------------------------------------------------------------

Câu 114: Chọn thứ tự đúng các bước quản lý phạm vi dự án:
Đáp án đúng: Thu thập yêu cầu, xác định phạm vi, tạo cấu trúc WBS, xác nhận và kiểm soát phạm vi.

Tất cả đáp án:
  A. ✓ Thu thập yêu cầu, xác định phạm vi, tạo cấu trúc WBS, xác nhận và kiểm soát phạm vi.
  B.   Thu thập yêu cầu, tạo cấu trúc WBS, xác nhận và kiểm soát phạm vi, xác định phạm vi.
  C.   Thu thập yêu cầu, xác nhận và kiểm soát phạm vi, xác định phạm vi, tạo cấu trúc WBS.
  D.   Thu thập yêu cầu, xác nhận và kiểm soát phạm vi, tạo cấu trúc WBS, xác định phạm vi.

----------------------------------------------------------------------------------------------------

Câu 115: Kỹ thuật thu thập yêu cầu phần mềm nào có thể thu thập nhanh các thông tin và ít chi phí nhưng cần nhiều thời gian để chuẩn bị?
Đáp án đúng: Họp nhóm.

Tất cả đáp án:
  A. ✓ Họp nhóm.
  B.   Phỏng vấn.
  C.   Xem xét tài liệu.
  D.   Xem xét phần mềm hiện có

----------------------------------------------------------------------------------------------------

Câu 116: Người quản lý dự án nên thực hiện hoạt động gì để xác định được tất cả các công việc của dự án?
Đáp án đúng: Lập cấu trúc phân chia công việc.

Tất cả đáp án:
  A.   Lập kế hoạch quản lý rủi ro.
  B.   Lập báo cáo nghiên cứu sơ bộ.
  C. ✓ Lập cấu trúc phân chia công việc.
  D.   Phân công công việc rõ ràng.

----------------------------------------------------------------------------------------------------

Câu 117: Cách phân chia nào sau đây KHÔNG mô tả phương pháp phân chia công việc của WBS?
Đáp án đúng: Phân chia cho đến khi còn ý nghĩa.

Tất cả đáp án:
  A. ✓ Phân chia cho đến khi còn ý nghĩa.
  B.   Phân chia cho đến khi không thể phân chia được nữa.
  C.   Phân chia cho đến khi công việc được thực hiện bởi một người.
  D.   Phân chia cho đến khi có thể ước lượng được.

----------------------------------------------------------------------------------------------------

Câu 118: Các nghiên cứu gần đây chỉ ra rằng ước lượng phần mềm có sai số khoảng:
Đáp án đúng: 30%

Tất cả đáp án:
  A.   35%
  B. ✓ 30%
  C.   25%
  D.   20%

----------------------------------------------------------------------------------------------------

Câu 119: Phương pháp nào sau đây là phương pháp ước lượng nỗ lực:
Đáp án đúng: COCOMO

Tất cả đáp án:
  A. ✓ COCOMO
  B.   Tương tự.
  C.   Từ dưới lên.
  D.   Từ trên xuống.

----------------------------------------------------------------------------------------------------

Câu 120: Phương pháp ước lượng nào sau đây có ưu điểm là KHÔNG ước lượng quá mức kinh phí?
Đáp án đúng: Quy tắc Parkinson.

Tất cả đáp án:
  A.   Từ trên xuống.
  B. ✓ Quy tắc Parkinson.
  C.   Lấy ý kiến chuyên gia.
  D.   Trả giá để thắng.

----------------------------------------------------------------------------------------------------

Câu 121: Chọn thứ tự đúng của các bước ước lượng điểm chức năng:
Đáp án đúng: Tính điểm chức năng, đánh giá yếu tố phức tạp kỹ thuật, tính điểm chức năng điều chỉnh.

Tất cả đáp án:
  A. ✓ Tính điểm chức năng, đánh giá yếu tố phức tạp kỹ thuật, tính điểm chức năng điều chỉnh.
  B.   Tính điểm chức năng điều chỉnh, đánh giá yếu tố phức tạp kỹ thuật, tính điểm chức năng.
  C.   Đánh giá yếu tố phức tạp kỹ thuật, tính điểm chức năng điều chỉnh, tính điểm chức năng.
  D.   Tính điểm chức năng điều chỉnh, tính điểm chức năng, đánh giá yếu tố phức tạp kỹ thuật.

----------------------------------------------------------------------------------------------------

Câu 122: Trong phương pháp ước lượng điểm chức năng, yếu tố phức tạp kỹ thuật (TCF) có miền giá trị từ:
Đáp án đúng: Từ 0,65 đến 1,35.

Tất cả đáp án:
  A. ✓ Từ 0,65 đến 1,35.
  B.   Từ 0,65 đến 1.
  C.   Từ 0,65 đến 1,5.
  D.   Từ 0,65 đến 2.

----------------------------------------------------------------------------------------------------

Câu 123: Chọn thứ tự đúng của các bước ước lượng điểm trường hợp sử dụng:
Đáp án đúng: Tính điểm trường hợp sử dụng, đánh giá yếu tố phức tạp kỹ thuật và môi trường, tính điểm trường hợp sử dụng điều chỉnh.

Tất cả đáp án:
  A. ✓ Tính điểm trường hợp sử dụng, đánh giá yếu tố phức tạp kỹ thuật và môi trường, tính điểm trường hợp sử dụng điều chỉnh.
  B.   Tính điểm trường hợp sử dụng điều chỉnh, đánh giá yếu tố phức tạp kỹ thuật, tính điểm trường hợp sử dụng.
  C.   Đánh giá yếu tố phức tạp kỹ thuật, tính điểm trường hợp sử dụng điều chỉnh, tính điểm trường hợp sử dụng.
  D.   Tính điểm trường hợp sử dụng điều chỉnh, tính điểm trường hợp sử dụng, đánh giá yếu tố phức tạp kỹ thuật.

----------------------------------------------------------------------------------------------------

Câu 124: Trong phương pháp ước lượng điểm trường hợp sử dụng, yếu tố nào sau đây KHÔNG PHẢI là yếu tố phức tạp kỹ thuật?
Đáp án đúng: Ngôn ngữ lập trình có độ khó cao.

Tất cả đáp án:
  A.   Khả năng tái sử dụng mã nguồn.
  B.   Tính khả chuyển.
  C.   Tính bảo mật cao.
  D. ✓ Ngôn ngữ lập trình có độ khó cao.

----------------------------------------------------------------------------------------------------

Câu 125: Trong phương pháp ước lượng điểm trường hợp sử dụng, thuật ngữ UAW là:
Đáp án đúng: Unadjusted actor weight.

Tất cả đáp án:
  A. ✓ Unadjusted actor weight.
  B.   Unified actor weight.
  C.   Unadjusted actor world.
  D.   Unified actor world.

----------------------------------------------------------------------------------------------------

Câu 126: Phát biểu nào sau đây mô tả chính xác phương pháp ước lượng từ dưới lên?
Đáp án đúng: Phương pháp đòi hỏi người lập kế hoạch phải sử dụng càng nhiều chi tiết càng tốt nhằm phân chia dự án thành các gói công việc đủ nhỏ để cho phép ước tính chi phí chính xác.

Tất cả đáp án:
  A.   Phương pháp đơn giản nhất để ước tính chi phí trong một dự án với nhiều điểm tương đồng với các dự án thành công khác.
  B. ✓ Phương pháp đòi hỏi người lập kế hoạch phải sử dụng càng nhiều chi tiết càng tốt nhằm phân chia dự án thành các gói công việc đủ nhỏ để cho phép ước tính chi phí chính xác.
  C.   Phương pháp có thể được mô tả bề ngoài trong Kỹ thuật duyệt và đánh giá chương trình hoặc sơ đồ Gantt.
  D.   Phương pháp đòi hỏi một hoạt động hay sự kiện riêng lẻ có sự phụ thuộc lẫn nhau đối với người tiền nhiệm, người thành công cũng như các hoạt động hay sự kiện song song.

----------------------------------------------------------------------------------------------------

Câu 127: Sau khi ước lượng kích thước phần mềm bằng phương pháp điểm chức năng, ước lượng nỗ lực của dự án sẽ được tính theo phương pháp nào?
Đáp án đúng: Xác định số giờ làm việc cho mỗi điểm trường hợp sử dụng.

Tất cả đáp án:
  A.   Xác định số dòng mã lệnh cho mỗi điểm trường hợp sử dụng.
  B.   Dùng phương pháp ước lượng nỗ lực COCOMO.
  C. ✓ Xác định số giờ làm việc cho mỗi điểm trường hợp sử dụng.
  D.   Xác định số dòng mã lệnh cho mỗi điểm trường hợp sử dụng, Dùng phương pháp ước lượng nỗ lực COCOMO và Xác định số giờ làm việc cho mỗi điểm trường hợp sử dụng đều sai.

----------------------------------------------------------------------------------------------------

Câu 128: Kế hoạch tiến độ dự án phải thể hiện đầy đủ các công việc trong:
Đáp án đúng: WBS của dự án.

Tất cả đáp án:
  A. ✓ WBS của dự án.
  B.   Báo cáo nghiên cứu khả thi.
  C.   Hợp đồng dự án.
  D.   Điều lệ dự án.

----------------------------------------------------------------------------------------------------

Câu 129: Mối quan hệ của ba hạng mục công việc khi xây một tòa nhà bao gồm đổ móng, xây tường và lợp máy là:
Đáp án đúng: Logic.

Tất cả đáp án:
  A.   Tùy ý.
  B. ✓ Logic.
  C.   Quyết định của đội dự án.
  D.   Nguồn lực

----------------------------------------------------------------------------------------------------

Câu 130: Loại quan hệ nào biểu diễn sự phụ thuộc giữa công việc kiểm thử đơn vị chỉ có thể hoàn thành sau khi công việc viết mã lệnh đã hoàn thành?
Đáp án đúng: Finish-to-Finish (FF).

Tất cả đáp án:
  A.   Finish-to-Start (FS).
  B. ✓ Finish-to-Finish (FF).
  C.   Start-to-Start (SS).
  D.   Start-to-Finish (SF).

----------------------------------------------------------------------------------------------------

Câu 131: Giả sử A là hoạt động thu thập yêu cầu phần mềm, B là hoạt động phân tích yêu cầu phần mềm. Khi đó quan hệ phụ thuộc nhiệm vụ giữa A và B là gì khi hai công việc này cùng thực hiện?
Đáp án đúng: Start to start (SS).

Tất cả đáp án:
  A.   Finish to start (FS).
  B. ✓ Start to start (SS).
  C.   Start to finish (SF).
  D.   Finish to finish (FF).

----------------------------------------------------------------------------------------------------

Câu 132: Phương pháp nào sau đây KHÔNG hỗ trợ lập kế hoạch tiến độ dự án:
Đáp án đúng: COCOMO.

Tất cả đáp án:
  A.   Biểu đồ Gantt.
  B.   Đường tới hạn.
  C.   PERT.
  D. ✓ COCOMO.

----------------------------------------------------------------------------------------------------

Câu 133: Chọn thuật ngữ tương ứng với phát biểu “đường dài nhất đi từ đỉnh bắt đầu đến đỉnh kết thúc của sơ đồ mạng công việc”:
Đáp án đúng: Đường găng.

Tất cả đáp án:
  A.   Đường chart.
  B. ✓ Đường găng.
  C.   Đường slack.
  D.   Đường Gantt.

----------------------------------------------------------------------------------------------------

Câu 134: Công cụ phổ biến nhất để thiết lập sơ đồ Gantt là:
Đáp án đúng: Microsoft Project.

Tất cả đáp án:
  A. ✓ Microsoft Project.
  B.   Microsoft Visio
  C.   Microsoft Word.
  D.   Bảng.

----------------------------------------------------------------------------------------------------

Câu 135: Chọn công thức tính phương sai về chi phí:
Đáp án đúng: CV = BCWP – ACWP.

Tất cả đáp án:
  A. ✓ CV = BCWP – ACWP.
  B.   CV = BCWP – BCWS.
  C.   CV = ACWP – BCWP.
  D.   CV = BCWS – BCWP.

----------------------------------------------------------------------------------------------------

Câu 136: Trong phân tích giá trị thu được, giá trị của CV và SV đều âm khi:
Đáp án đúng: Giá trị khối lượng công việc đã hoàn thành nhỏ hơn chi phí thực tế và chi phí thực tế nhỏ hơn chi phí theo kế hoạch.

Tất cả đáp án:
  A.   Giá trị khối lượng công việc đã hoàn thành lớn hơn chi phí thực tế và chi phí thực tế nhỏ hơn chi phí theo kế hoạch.
  B. ✓ Giá trị khối lượng công việc đã hoàn thành nhỏ hơn chi phí thực tế và chi phí thực tế nhỏ hơn chi phí theo kế hoạch.
  C.   Giá trị khối lượng công việc đã hoàn thành lớn hơn chi phí thực tế nhưng nhỏ hơn chi phí theo kế hoạch.
  D.   Giá trị khối lượng công việc hoàn thành nhỏ hơn chi phí thực tế nhưng lớn hơn chi phí theo kế hoạch.

----------------------------------------------------------------------------------------------------

Câu 137: Chọn công thức tính chỉ số thực hiện về chi phí (Cost performance index):
Đáp án đúng: CPI = BCWP / ACWP.

Tất cả đáp án:
  A. ✓ CPI = BCWP / ACWP.
  B.   CPI = BCWP / BCWS.
  C.   CPI = ACWP / BCWP.
  D.   CPI = BCWS / BCWP.

----------------------------------------------------------------------------------------------------

Câu 138: Một dự án phát triển phần mềm ước tính hoàn tất trong 2 tháng với chi phí 40.000$. Khi dự án còn 1 tháng để kết thúc, 60% công việc của dự án đã hoàn tất, 27.000$ đã dùng cho các công việc. Phương sai chi phí (CV) là:
Đáp án đúng: -3.000$.

Tất cả đáp án:
  A.   7.000$.
  B.   3.000$.
  C.   4.000$.
  D. ✓ -3.000$.

----------------------------------------------------------------------------------------------------

Câu 139: Chỉ số thực hiện về chi phí có giá trị lớn hơn 1 khi:
Đáp án đúng: Chi phí thực hiện công việc nhỏ hơn chi phí theo kế hoạch.

Tất cả đáp án:
  A.   Chi phí thực hiện công việc bằng chi phí theo kế hoạch.
  B.   Chi phí thực hiện công việc lớn hơn chi phí theo kế hoạch.
  C. ✓ Chi phí thực hiện công việc nhỏ hơn chi phí theo kế hoạch.
  D.   Chi phí thực hiện công việc bằng chi phí theo kế hoạch, Chi phí thực hiện công việc lớn hơn chi phí theo kế hoạch và Chi phí thực hiện công việc nhỏ hơn chi phí theo kế hoạch đều sai.

----------------------------------------------------------------------------------------------------

Câu 140: .Chọn phát biểu đúng về quản lý rủi ro:
Đáp án đúng: Quản lý rủi ro là việc dự đoán, phát hiện, phân tích, xử lý và kiểm soát rủi ro.

Tất cả đáp án:
  A.   Quản lý rủi ro là sự lo lắng về dự án.
  B.   Quản lý rủi ro bảo đảm cho dự án thành công.
  C. ✓ Quản lý rủi ro là việc dự đoán, phát hiện, phân tích, xử lý và kiểm soát rủi ro.
  D.   Quản lý rủi ro là chuẩn bị sẵn ngân sách, nhân lực để khắc phục rủi ro.

----------------------------------------------------------------------------------------------------

Câu 141: Người quản lý dự án phần mềm sẽ đưa những rủi ro nào vào kế hoạch quản lý rủi ro?
Đáp án đúng: Các rủi ro có nguy cơ cao.

Tất cả đáp án:
  A. ✓ Các rủi ro có nguy cơ cao.
  B.   Các rủi ro có mức độ tác động lớn.
  C.   Các rủi ro có xác suất xảy ra cao.
  D.   Tất cả các rủi ro được nhận diện.

----------------------------------------------------------------------------------------------------

Câu 142: Đánh giá rủi ro và giám sát quá trình thực hiện dự án sẽ luôn song hành để:
Đáp án đúng: Xác định lại các rủi ro cần quản lý.

Tất cả đáp án:
  A. ✓ Xác định lại các rủi ro cần quản lý.
  B.   Giảm thiểu tác động của các rủi ro.
  C.   Tránh các rủi ro.
  D.   Tiết kiệm kinh phí quản lý rủi ro.

----------------------------------------------------------------------------------------------------

Câu 143: Chọn quy trình đúng trong kiểm soát rủi ro:
Đáp án đúng: Nhận diện → phân tích → xử lý.

Tất cả đáp án:
  A. ✓ Nhận diện → phân tích → xử lý.
  B.   Phân tích → xếp ưu tiên → điều khiển.
  C.   Nhận diện → phân tích → xếp ưu tiên.
  D.   Lập kế hoạch → xử lý → điều khiển.

----------------------------------------------------------------------------------------------------

Câu 144: Lập kế hoạch khắc phục tác hại khi rủi ro xảy ra là hành động của chiến lược ứng phó rủi ro nào sau đây?
Đáp án đúng: Chấp nhận.

Tất cả đáp án:
  A. ✓ Chấp nhận.
  B.   Chuyển giao.
  C.   Tránh né.
  D.   Giảm nhẹ

----------------------------------------------------------------------------------------------------

Câu 145: Chọn thứ tự đúng cho các bước trong quản lý nhân lực dự án:
Đáp án đúng: Hoạch định, thu nhận, phát triển và quản lý đội dự án.

Tất cả đáp án:
  A. ✓ Hoạch định, thu nhận, phát triển và quản lý đội dự án.
  B.   Thu nhận, hoạch định, phát triển và quản lý đội dự án.
  C.   Hoạch định, thu nhận, quản lý và phát triển đội dự án.
  D.   Thu nhận, hoạch định, quản lý và phát triển đội dự án.

----------------------------------------------------------------------------------------------------

Câu 146: .Chức năng nào chú trọng đến vấn đề đảm bảo đủ số lượng nhân viên với các phẩm chất phù hợp với công việc?
Đáp án đúng: Hoạch định.

Tất cả đáp án:
  A. ✓ Hoạch định.
  B.   Thu nhận.
  C.   Phát triển.
  D.   Quản lý đội.

----------------------------------------------------------------------------------------------------

Câu 147: Các hoạt động như phỏng vấn và trắc nghiệm trong quá trình tuyển dụng nhân viên thuộc chức năng nào của quản lý nguồn nhân lực?
Đáp án đúng: Thu nhận.

Tất cả đáp án:
  A.   Hoạch định.
  B. ✓ Thu nhận.
  C.   Phát triển.
  D.   Tuyển dụng.

----------------------------------------------------------------------------------------------------

Câu 148: Trong tháp nhu cầu của Maslow, nhu cầu nằm ở đáy tháp là:
Đáp án đúng: Nhu cầu sinh lý.

Tất cả đáp án:
  A. ✓ Nhu cầu sinh lý.
  B.   Nhu cầu an toàn.
  C.   Nhu cầu được tôn trọng.
  D.   Nhu cầu tự hoàn thiện.

----------------------------------------------------------------------------------------------------

Câu 149: Trong tháp nhu cầu của Maslow, con người sẽ có những phản ứng lại đối với những dấu hiệu nguy hiểm từ đó họ sẽ phát sinh nhu cầu nào?
Đáp án đúng: Nhu cầu an toàn.

Tất cả đáp án:
  A.   Nhu cầu giao tiếp.
  B. ✓ Nhu cầu an toàn.
  C.   Nhu cầu được tôn trọng.
  D.   Nhu cầu tự hoàn thiện.

----------------------------------------------------------------------------------------------------


`;

// Xuất 2 hàm để index_vip.html lấy dữ liệu
window.getTextPh = () => RAW_PH;
window.getTextQu = () => RAW_QU;
