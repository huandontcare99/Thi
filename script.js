// script.js
const quizArea = document.getElementById('quiz-area');
const resultArea = document.getElementById('result-area');
const questionText = document.getElementById('question-text');
const answerOptions = document.getElementById('answer-options');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const timerDisplay = document.querySelector('#timer span');
const scoreDisplay = document.getElementById('score');
const totalQuestionsDisplay = document.getElementById('total-questions');
const restartBtn = document.getElementById('restart-btn');
const resultDetails = document.getElementById('result-details');

// Dữ liệu câu hỏi gốc (chưa xáo trộn)
const originalQuestions = [
    {
        question: "Vì sao một tổ chức, công ty cần phải khai thác dữ liệu?",
        options: [
            "Vì tổ chức đó có quá nhiều dữ liệu.",
            "Vì tổ chức đó thiếu lao động có tri thức.",
            "Vì cơ sở dữ liệu của tổ chức đó không được thiết kế tốt.",
            "Vì tổ chức đó muốn rút trích tri thức từ nguồn dữ liệu có sẵn."
        ],
        correctAnswer: "Vì tổ chức đó muốn rút trích tri thức từ nguồn dữ liệu có sẵn."
    },
    {
        question: "Trong quy trình khám phá tri thức, khai thác dữ liệu là bước nằm ngay sau thao tác",
        options: [
            "Thu thập dữ liệu",
            "Tiền xử lý dữ liệu",
            "Trực quan hóa dữ liệu",
            "Tích hợp dữ liệu"
        ],
        correctAnswer: "Tiền xử lý dữ liệu"
    },
    {
        question: "Khái niệm nào sau đây không có liên quan đến khai thác dữ liệu?",
        options: [
            "Phát hiện tri thức (Knowledge discovery)",
            "Rút trích tri thức (knowledge extraction)",
            "Nghiệp vụ thông minh (business intelligence)",
            "Phân tích nghiệp vụ (business analysis)"
        ],
        correctAnswer: "Phân tích nghiệp vụ (business analysis)"
    },
    {
        question: "Hãy chọn phát biểu ĐÚNG trong các phát biểu sau:",
        options: [
            "Khai thác dữ liệu là một bước tiến của khoa học máy tính.",
            "Khai thác dữ liệu là một bước tiến của khoa học dữ liệu.",
            "Khai thác dữ liệu là một bước tiến của khoa học thực nghiệm.",
            "Khai thác dữ liệu là một bước tiến của khoa học lý thuyết."
        ],
        correctAnswer: "Khai thác dữ liệu là một bước tiến của khoa học dữ liệu."
    },
    {
        question: "Một siêu thị muốn triển khai một số chính sách khuyến mãi cho khách hàng. Siêu thị muốn chính sách khuyến mãi của mình phù hợp nhất với nhu cầu của khách hàng. Vậy, siêu thị nên thực hiện bài toán gì trên thông tin và lịch sử mua hàng của khách hàng?",
        options: [
            "Phân cụm",
            "Phân lớp",
            "Hồi quy",
            "Phân tích luật kết hợp"
        ],
        correctAnswer: "Phân tích luật kết hợp"
    },
    {
        question: "Trong một công ty, ai là người sử dụng kết quả của khai thác dữ liệu?",
        options: [
            "Bộ phận quản trị cơ sở dữ liệu",
            "Bộ phận phân tích dữ liệu",
            "Bộ phận ra quyết định nghiệp vụ",
            "Bộ phận quản trị hệ thống thông tin"
        ],
        correctAnswer: "Bộ phận ra quyết định nghiệp vụ"
    },
    {
        question: "Bạn phân tích dữ liệu về dân số của một địa phương, sau đó bạn muốn dự đoán tỷ lệ sinh của địa phương đó trong năm tới. Bạn dùng bài toán",
        options: [
            "Phân cụm",
            "Phân lớp",
            "Hồi quy",
            "Phân tích tương quan"
        ],
        correctAnswer: "Hồi quy"
    },
    {
        question: "Việc khai thác mối quan hệ bạn bè trên mạng xã hội sử dụng bài toán",
        options: [
            "Khai thác đồ thị",
            "Khai thác hình ảnh",
            "Khai thác văn bản",
            "Khai thác đa phương tiện"
        ],
        correctAnswer: "Khai thác đồ thị"
    },
    {
        question: "Bùng nổ dữ liệu không liên quan đến",
        options: [
            "Năng lực của máy tính",
            "Định luật Moore",
            "Giá thành phần cứng",
            "Giá thành phần mềm"
        ],
        correctAnswer: "Giá thành phần mềm"
    },
    {
        question: "Tại sao nói khai thác dữ liệu được xem là là một hợp lưu của nhiều lĩnh vực?",
        options: [
            "Vì phải có nhiều tổ chức cùng hợp lại để thực hiện khai thác dữ liệu.",
            "Vì khai thác dữ liệu sử dụng kiến thức, kỹ thuật của nhiều lĩnh vực khác nhau.",
            "Vì khai thác dữ liệu được sử dụng trong nhiều lĩnh vực khác nhau",
            "Vì nhiều lĩnh vực cùng sử dụng những bài toán khai thác dữ liệu giống nhau"
        ],
        correctAnswer: "Vì khai thác dữ liệu sử dụng kiến thức, kỹ thuật của nhiều lĩnh vực khác nhau."
    },
    {
        question: "Câu hỏi “Ta nên duyệt cho khách hàng có thông tin là X vay bao nhiêu tiền?” có thể trả lời bằng:",
        options: [
            "Phân tích luật kết hợp",
            "Hồi quy",
            "Phân lớp",
            "Phân cụm"
        ],
        correctAnswer: "Hồi quy"
    },
    {
        question: "Câu hỏi “Liệu doanh thu của công ty tăng hay giảm trong 3 tháng kế tiếp?” có thể được trả lời bằng:",
        options: [
            "Phân tích luật kết hợp",
            "Phân tích dữ liệu chuỗi thời gian",
            "Phân lớp",
            "Phân cụm"
        ],
        correctAnswer: "Phân tích dữ liệu chuỗi thời gian"
    },
    {
        question: "Để xác định đặc trưng của các đối tượng khách hàng ta sử dụng bài toán",
        options: [
            "Phân lớp",
            "Phân cụm",
            "Khai thác tập phổ biến",
            "Hồi quy"
        ],
        correctAnswer: "Phân cụm"
    },
    {
        question: "Trung vị (median) của một tập dữ liệu là",
        options: [
            "Giá trị trung bình của tập dữ liệu đó",
            "Giá trị chính giữa của tập dữ liệu đó",
            "Giá trị cao nhất của tập dữ liệu đó",
            "Giá trị xuất hiện nhiều nhất của trong tập dữ liệu"
        ],
        correctAnswer: "Giá trị chính giữa của tập dữ liệu đó"
    },
    {
        question: "Chiều cao, cân nặng là dữ liệu kiểu",
        options: [
            "Số rời rạc",
            "Số liên tục",
            "Định danh",
            "Thứ bậc"
        ],
        correctAnswer: "Số liên tục"
    },
    {
        question: "Để đánh giá mức độ đáng tin của giá trị trung bình (mean) của một tập dữ liệu, ta cần xem xét thêm giá trị",
        options: [
            "Trung vị",
            "Yếu vị (mode)",
            "Độ lệch chuẩn",
            "Cực đại"
        ],
        correctAnswer: "Độ lệch chuẩn"
    },
    {
        question: "Dữ liệu nào là dữ liệu nhị phân đối xứng?",
        options: [
            "Kết quả xét nghiệm HIV (+/-)",
            "Độ an toàn của khách hàng vay tiền (+/-)",
            "Giới tính (+/-)",
            "Đánh giá khách hàng tiềm năng (+/-)"
        ],
        correctAnswer: "Giới tính (+/-)"
    },
    {
        question: "là công thức tính khoảng cách",
        options: [
            "Manhattan",
            "Minkowski",
            "Euclidean",
            "Hamming"
        ],
        correctAnswer: "Minkowski"
    },
    {
        question: "Hai kiểu lược đồ thường sử dụng trong data warehouse là",
        options: [
            "Lược đồ hình sao và lược đồ hình vòng.",
            "Lược đồ hình bông tuyết và lược đồ hình vòng.",
            "Lược đồ hình sao và lược đồ hình bông tuyết.",
            "Lược đồ hình bông tuyết và lược đồ hình trục."
        ],
        correctAnswer: "Lược đồ hình sao và lược đồ hình bông tuyết."
    },
    {
        question: "Hãy lựa chọn đặc trưng đúng của OLAP khi so sánh với OLTP",
        options: [
            "OLAP thường có dung lượng nhỏ hơn OLTP.",
            "OLAP thường có truy vấn phức tạp hơn OLTP.",
            "OLAP thường có nhiều người dùng cùng lúc hơn OLTP.",
            "OLAP được cập nhật thường xuyên hơn OLTP."
        ],
        correctAnswer: "OLAP thường có truy vấn phức tạp hơn OLTP."
    },
    {
        question: "Trình tự các bước triển khai Data Mart",
        options: [
            "Xây dựng, Thiết kế, Cư trú, Truy cập, Quản lý.",
            "Thiết kế, Xây dựng, Cư trú, Truy cập, Quản lý.",
            "Quản lý, Thiết kế , Xây dựng, Cư trú, Truy cập.",
            "Truy cập, Thiết kế, Xây dựng, Cư trú, Quản lý."
        ],
        correctAnswer: "Thiết kế, Xây dựng, Cư trú, Truy cập, Quản lý."
    },
    {
        question: "OLAP là tên viết tắt của kĩ thuật nào?",
        options: [
            "Online Advanced Program",
            "Online Analytical Program",
            "Online Advanced Processing",
            "Online Analytical Processing"
        ],
        correctAnswer: "Online Analytical Processing"
    },
    {
        question: "Hãy chọn phát biểu ĐÚNG khi so sánh thuật toán Apriori và thuật toán FP-Growth",
        options: [
            "FP-Growth có cần số lần quét cơ sở dữ liệu nhiều hơn Apriori.",
            "FP-Growth không sinh tập ứng viên như Apriori.",
            "FP-Growth cần thời gian để đếm độ hỗ trợ của các tập ứng viên ít hơn Apriori.",
            "FP-Growth dễ cài đặt hơn Apriori."
        ],
        correctAnswer: "FP-Growth không sinh tập ứng viên như Apriori."
    },
    {
        question: "Độ đo về tính dễ bắt gặp của luật kết hợp được gọi là",
        options: [
            "Độ tin cậy (confidence)",
            "Độ hỗ trợ (support)",
            "Độ nâng (lift)",
            "Độ nhạy (sensitivity)"
        ],
        correctAnswer: "Độ hỗ trợ (support)"
    },
    {
        question: "Trong các khuyết điểm sau đây, khuyết điểm nào KHÔNG phải của thuật toán Apriori?",
        options: [
            "Duyệt cơ sở dữ liệu nhiều lần",
            "Không sinh tập ứng viên",
            "Khó khăn trong đếm độ hỗ trợ",
            "Tốn thời gian thực thi"
        ],
        correctAnswer: "Không sinh tập ứng viên"
    },
    {
        question: "Theo cơ sở dữ liệu giao tác trong bảng sau, độ hỗ trợ của tập AB là: TID Itemset 100 A B C D 200 A C D 300 A B D 400 B C D E 500 A B C E",
        options: [
            "60%",
            "75%",
            "80%",
            "65%"
        ],
        correctAnswer: "60%"
    },
    {
        question: "Theo cơ sở dữ liệu giao tác trong bảng sau, độ hỗ trợ và độ tin cậy của luật kết hợp BC àD lần lượt là: TID Itemset 100 A B C D 200 A C D 300 A B D 400 B C D E 500 A B C E",
        options: [
            "40%; 66.7%",
            "66.7%; 40%",
            "40%; 75%",
            "75%; 40%"
        ],
        correctAnswer: "40%; 66.7%"
    },
    {
        question: "Hãy cho biết phát biểu nào sau đây ĐÚNG với tính chất downward closure?",
        options: [
            "Mọi tập con của một tập phổ biến thì không phổ biến.",
            "Mọi tập con của một tập không phổ biến thì không phổ biến.",
            "Mọi tập bao của một tập không phổ biến thì không phổ biến.",
            "Mọi tập bao của một tập phổ biến thì phổ biến."
        ],
        correctAnswer: "Mọi tập bao của một tập không phổ biến thì không phổ biến."
    },
    {
        question: "Ưu điểm của thuật toán FP-Growth là",
        options: [
            "Duyệt đệ quy cây FP",
            "Nén cơ sở dữ liệu vào cây FP",
            "Không sinh tập ứng viên",
            "Tốn ít bộ nhớ để duy trì cây FP"
        ],
        correctAnswer: "Không sinh tập ứng viên"
    },
    {
        question: "Thuật toán FP-Growth cần nhiều bộ nhớ để thực thi do",
        options: [
            "Phải nén toàn bộ cơ sở dữ liệu giao tác vào cấu trúc cây FP.",
            "Phải sinh ra nhiều tập ứng viên.",
            "Phải quét cơ sở dữ liệu nhiều lần.",
            "Phải thực thi duyệt cây đệ quy."
        ],
        correctAnswer: "Phải nén toàn bộ cơ sở dữ liệu giao tác vào cấu trúc cây FP."
    },
    {
        question: "Hãy chọn cụm từ nào sau đây có liên quan đến thuật toán FP-Growth?",
        options: [
            "Chia để trị",
            "Tham lam",
            "Quy hoạch động",
            "Đệ quy"
        ],
        correctAnswer: "Đệ quy"
    },
    {
        question: "Để xác định khách hàng thường mua gì sau khi mua siêu xe Rolls Royce, ta làm bài toán khai thác",
        options: [
            "Luật kết hợp phổ biến",
            "Luật kết hợp hiếm",
            "Luật kết hợp phủ định",
            "Luật kết hợp đa chiều"
        ],
        correctAnswer: "Luật kết hợp hiếm"
    },
    {
        question: "Cho X là một tập mục, X là tập phổ biến cực đại (max-pattern) khi và chỉ khi X là phổ biến và",
        options: [
            "Không tồn tại một tập mục Y sao cho [] mà Y có cùng độ hỗ trợ với X",
            "Không tồn tại một tập mục Y sao cho [] , mà Y có cùng độ hỗ trợ với X",
            "Không tồn tại một tập mục Y sao cho [] , mà Y là phổ biến",
            "Không tồn tại một tập mục Y sao cho [] mà Y là phổ biến"
        ],
        correctAnswer: "Không tồn tại một tập mục Y sao cho [] , mà Y là phổ biến"
    },
    {
        question: "Trong các ứng dụng sau, ứng dụng nào KHÔNG PHẢI là ứng dụng của phân lớp?",
        options: [
            "Nhận dạng khuôn mặt",
            "Nhận dạng chữ viết",
            "Phát hiện thư rác",
            "Phân tích giỏ hàng"
        ],
        correctAnswer: "Phân tích giỏ hàng"
    },
    {
        question: "Công thức sau được ứng dụng trong thuật toán nào? P(H|X)",
        options: [
            "ID3",
            "CART",
            "KNN",
            "Naïve Bayes"
        ],
        correctAnswer: "Naïve Bayes"
    },
    {
        question: "Độ đo Information Gain được sử dụng để",
        options: [
            "Lựa chọn thuộc tính để rẽ nhánh",
            "Làm điều kiện dừng dựng cây",
            "Đo độ chính xác của mô hình",
            "Đo độ bao phủ của mô hình"
        ],
        correctAnswer: "Lựa chọn thuộc tính để rẽ nhánh"
    },
    {
        question: "Thuật toán nào KHÔNG áp dụng được cho dữ liệu trong bảng sau nếu không xử lý gì thêm? Thu nhập Sở hữu nhà Tuổi Nghề nghiệp An toàn 2 Không 30-45 CNV Có Cao Không <30 CNV Không Cao Có 30-45 Kinh doanh Không Rất cao Có >45 Kinh doanh Có Rất cao Có <30 Kinh doanh Không Cao Có >45 Kinh doanh Có 2 Có >45 Nông dân Có 2 Không >45 Nông dân Không Cao Không 30-45 CNV Có",
        options: [
            "C4.5",
            "CART",
            "KNN",
            "ID3"
        ],
        correctAnswer: "KNN"
    },
    {
        question: "Thuật toán nào sau đây cần giả định các thuộc tính của dữ liệu là độc lập về mặt thống kê?",
        options: [
            "KNN",
            "Naïve Bayes",
            "SVM",
            "Cây quyết định"
        ],
        correctAnswer: "Naïve Bayes"
    },
    {
        question: "Overfitting là hiện tượng xảy ra khi",
        options: [
            "Sử dụng quá ít dữ liệu để huấn luyện mô hình.",
            "Sử dụng quá nhiều dữ liệu để huấn luyện mô hình.",
            "Sử dụng dữ liệu không chính xác để huấn luyện mô hình.",
            "Sử dụng dữ liệu không đầy đủ để huấn luyện mô hình."
        ],
        correctAnswer: "Sử dụng quá nhiều dữ liệu để huấn luyện mô hình."
    },
    {
        question: "Độ chính xác (accuracy) của phép tiên đoán trong bảng 2 là: Actual\\Prediction Cancer Not Cancer Total Cancer 1300 1200 2500 Not Cancer 2700 4800 7500 Total 4000 6000 10000",
        options: [
            "75%",
            "61%",
            "60%",
            "40%"
        ],
        correctAnswer: "61%"
    },
    {
        question: "Tại sao nói phân lớp là phương pháp học có giám sát?",
        options: [
            "Vì cần theo dõi từng lần lặp của thuật toán.",
            "Vì cần tri thức của chuyên gia để phân lớp.",
            "Vì có thể kiểm định tính chính xác của mô hình và huấn luyện lại.",
            "Vì có thể giám sát hoạt động của thuật toán bằng một công cụ nào đó ."
        ],
        correctAnswer: "Vì có thể kiểm định tính chính xác của mô hình và huấn luyện lại."
    },
    {
        question: "Dựa vào bảng sau, theo thuật toán Naïve Bayes, khi cần xét độ an toàn cho khách hàng {Thu nhâp = “Cao”, Sở hữu nhà = “Không”, Tuổi = “>45”, Nghề nghiệp = “CNV”}, ta KHÔNG cần tính xác suất nào? Thu nhập Sở hữu nhà Tuổi Nghề nghiệp An toàn 2 Không 30-45 CNV Có Cao Không <30 CNV Không Cao Có 30-45 Kinh doanh Không Rất cao Có >45 Kinh doanh Có Rất cao Có <30 Kinh doanh Không Cao Có >45 Kinh doanh Có 2 Có >45 Nông dân Có 2 Không >45 Nông dân Không Cao Không 30-45 CNV Có",
        options: [
            "P(An toàn = “Có”| Nghề nghiệp = “CNV”)",
            "P(Tuổi = “>45”| An toàn = “Có”)",
            "P(An toàn = “Không”)",
            "P(An toàn = “Có”)"
        ],
        correctAnswer: "P(An toàn = “Có”| Nghề nghiệp = “CNV”)"
    },
    {
        question: "Trong bài toán dự đoán khách hàng tiềm năng để tiếp thị. Một khách hàng là không tiềm năng, nhưng mô hình dự đoán là tiềm năng. Khi đó doanh nghiệp sẽ…",
        options: [
            "Mất chi phí",
            "Mất lợi nhuận",
            "Mất cả chi phí lẫn lợi nhuận",
            "Không mất gì cả"
        ],
        correctAnswer: "Mất chi phí"
    },
    {
        question: "Dựa vào bảng sau, giá trị của xác suất P(Nghề nghiệp = “CNV”|An toàn = “Không”) là: Thu nhập Sở hữu nhà Tuổi Nghề nghiệp An toàn 2 Không 30-45 CNV Có Cao Không <30 CNV Không Cao Có 30-45 Kinh doanh Không Rất cao Có >45 Kinh doanh Có Rất cao Có <30 Kinh doanh Không Cao Có >45 Kinh doanh Có 2 Có >45 Nông dân Có 2 Không >45 Nông dân Không Cao Không 30-45 CNV Có",
        options: [
            "1/4",
            "1/2",
            "1/3",
            "1"
        ],
        correctAnswer: "1/4"
    },
    {
        question: "K-means là phương pháp phân cụm dựa trên",
        options: [
            "Phân hoạch (partitioning)",
            "Mật độ (density based)",
            "Phân cấp (hierarchical)",
            "Lưới (grid based)"
        ],
        correctAnswer: "Phân hoạch (partitioning)"
    },
    {
        question: "Trong thuật toán phân cụm dựa trên phân cấp top-down (thuật toán DIANA), với tập dữ liệu có N điểm, kết quả cuối cùng sẽ là:",
        options: [
            "N cụm",
            "1 cụm",
            "K cụm (K là một số cho trước)",
            "Không xác định được số cụm"
        ],
        correctAnswer: "N cụm"
    },
    {
        question: "Cho các bước sau: B1. Gán các điểm dữ liệu vào các cụm theo trọng tâm gần nhất B2. Chọn k trọng tâm B3. Tính lại trọng tâm mới B4. Tính khoảng cách từ các điểm dữ liệu đến k trọng tâm Thứ tự đúng của các bước theo thuật toán k-means lần lượt là:",
        options: [
            "B1 – B2 – B3 – B4",
            "B2 – B3 – B4 – B1",
            "B2 – B4 – B1 – B3",
            "B2 – B1 – B4 – B3"
        ],
        correctAnswer: "B2 – B4 – B1 – B3"
    },
    {
        question: "Ứng dụng nào sau đây KHÔNG phải là ứng dụng của phân cụm?",
        options: [
            "Phát hiện ngoại lệ",
            "Phát hiện thể loại",
            "Phát hiện thư rác",
            "Tiền xử lý cho phân lớp"
        ],
        correctAnswer: "Phát hiện thư rác"
    },
    {
        question: "Đối tượng của khai thác dữ liệu web bao gồm:",
        options: [
            "Cấu trúc web, nội dung web và lịch sử sử dụng web.",
            "Cấu trúc web, thứ hạng web và lịch sử sử dụng web.",
            "Nội dung web, thứ hạng web và lịch sử sử dụng web.",
            "Cấu trúc web, nội dung web và thứ hạng web."
        ],
        correctAnswer: "Cấu trúc web, nội dung web và lịch sử sử dụng web."
    },
    {
        question: "Mục đích chính của khai thác cấu trúc web là tìm ra những mối quan hệ chưa biết giữa",
        options: [
            "Các trang web",
            "Các siêu liên kết",
            "Dữ liệu web",
            "Nội dung web"
        ],
        correctAnswer: "Các trang web"
    },
    {
        question: "Chọn phát biểu ĐÚNG trong thuật toán HITS",
        options: [
            "Authority của trang p cao khi p được nhiều trang có authority cao trỏ đến",
            "Hub của trang p cao khi p được nhiều trang có authority cao trỏ đến",
            "Hub của trang p cao khi p trỏ đến nhiều trang có hub cao",
            "Authority của trang p cao khi p được nhiều trang có hub cao trỏ đến"
        ],
        correctAnswer: "Authority của trang p cao khi p được nhiều trang có hub cao trỏ đến"
    }
];
let questions = []; // Mảng này sẽ chứa các câu hỏi đã được xáo trộn
let currentQuestionIndex = 0;
let userAnswers = []; // Lưu trữ câu trả lời của người dùng (có thể cần reset khi start quiz)
let score = 0;
let timeLeft = 60 * 5; // 5 phút = 300 giây
let timerInterval;

// Hàm để xáo trộn một mảng (Fisher-Yates shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Hoán đổi phần tử
    }
    return array;
}

function startQuiz() {
    // Xáo trộn các câu hỏi trước khi bắt đầu bài thi
    questions = shuffleArray([...originalQuestions]); // Tạo bản sao để không làm thay đổi mảng gốc

    currentQuestionIndex = 0;
    userAnswers = new Array(questions.length).fill(null); // Reset userAnswers
    score = 0;
    timeLeft = 60 * 5; // Đặt lại thời gian
    quizArea.classList.remove('hidden');
    resultArea.classList.add('hidden');
    submitBtn.style.display = 'none';
    prevBtn.disabled = true;

    loadQuestion();
    startTimer();
}

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    questionText.textContent = question.question;
    answerOptions.innerHTML = ''; // Xóa các đáp án cũ

    // Xáo trộn các đáp án cho câu hỏi hiện tại
    const shuffledOptions = shuffleArray([...question.options]); // Tạo bản sao để không làm thay đổi mảng gốc

    shuffledOptions.forEach((option) => {
        const optionDiv = document.createElement('div');
        optionDiv.classList.add('answer-option');
        optionDiv.textContent = option;
        optionDiv.dataset.option = option;

        if (userAnswers[currentQuestionIndex] === option) {
            optionDiv.classList.add('selected');
        }

        optionDiv.addEventListener('click', () => selectAnswer(option));
        answerOptions.appendChild(optionDiv);
    });

    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = currentQuestionIndex === questions.length - 1;

    if (currentQuestionIndex === questions.length - 1) {
        submitBtn.style.display = 'inline-block';
    } else {
        submitBtn.style.display = 'none';
    }
}

function selectAnswer(selectedOption) {
    userAnswers[currentQuestionIndex] = selectedOption;

    document.querySelectorAll('.answer-option').forEach(optionDiv => {
        optionDiv.classList.remove('selected');
    });

    // Thêm class 'selected' vào tùy chọn được chọn
    // Đảm bảo chọn đúng div dựa trên dataset.option
    const selectedDiv = document.querySelector(`.answer-option[data-option="${selectedOption}"]`);
    if (selectedDiv) {
        selectedDiv.classList.add('selected');
    }
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            submitQuiz();
            alert('Hết giờ! Bài thi của bạn đã được nộp tự động.');
        }
    }, 1000);
}

function submitQuiz() {
    clearInterval(timerInterval);
    calculateScore();
    displayResults();
}

function calculateScore() {
    score = 0;
    questions.forEach((question, index) => {
        if (userAnswers[index] === question.correctAnswer) {
            score++;
        }
    });
}

function displayResults() {
    quizArea.classList.add('hidden');
    resultArea.classList.remove('hidden');

    scoreDisplay.textContent = score;
    totalQuestionsDisplay.textContent = questions.length;
    resultDetails.innerHTML = '';

    questions.forEach((question, index) => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');

        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correctAnswer;

        resultItem.innerHTML = `
            <p><strong>Câu ${index + 1}:</strong> ${question.question}</p>
            <p>Đáp án đúng: <span class="correct-answer">${question.correctAnswer}</span></p>
            <p>Câu trả lời của bạn: <span class="${isCorrect ? 'user-answer' : 'incorrect-answer'}">
                ${userAnswer !== null ? userAnswer : 'Không trả lời'}
            </span></p>
        `;
        resultDetails.appendChild(resultItem);
    });
}

// Bắt sự kiện click cho các nút
nextBtn.addEventListener('click', nextQuestion);
prevBtn.addEventListener('click', prevQuestion);
submitBtn.addEventListener('click', submitQuiz);
restartBtn.addEventListener('click', startQuiz);

// Bắt đầu bài thi khi tải trang
startQuiz();