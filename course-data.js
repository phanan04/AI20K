const COURSE_DATA = [
    {
        "badge":  "CĐ-01 · 5 Trọng tâm thi",
        "id":  "cd01",
        "sections":  [
                         {
                             "whyInAI":  "Trong AI, từ ngữ hay ảnh đều được đổi thành Vector (danh sách số). Chuẩn (Norm) là \u0027cây thước đo\u0027 xem vector đó dài bao nhiêu, mạnh cỡ nào.",
                             "title":  "1. Vector \u0026 Chuẩn (Norm): Taxi vs Chim bay",
                             "analogy":  "Hãy tưởng tượng bạn đang ở ngã tư đường phố New York:\n• Chuẩn L1 (Manhattan): Bạn là tài xế taxi. Bạn không thể phóng xuyên qua các tòa nhà, mà phải đi zíc zắc theo các khối phố vuông vức. Do đó, độ dài L1 đơn giản là CỘNG TẤT CẢ CÁC ĐOẠN ĐƯỜNG LẠI (|x1| + |x2|). Trong AI, L1 phạt rất thẳng tay, ép các trọng số vô dụng về đúng số 0 (chọn lọc biến quan trọng).\n• Chuẩn L2 (Euclidean): Bạn là một chú chim bồ câu. Chim bay thẳng một mạch đường chim bay từ điểm A đến điểm B (dùng định lý Pytago: căn bậc 2 của tổng bình phương). Trong AI, L2 phạt mềm mỏng hơn, chỉ co nhỏ trọng số lại chứ không triệt tiêu về 0.",
                             "formulaBox":  "• Vector: $v = [3, -4]$\n• Chuẩn L1: $\\|v\\|_1 = |3| + |-4| = 3 + 4 = 7$\n• Chuẩn L2: $\\|v\\|_2 = \\sqrt{3^2 + (-4)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$\n• Chuẩn L-vô cùng: $\\|v\\|_\\infty = \\max(|3|, |-4|) = 4$",
                             "quickTip":  "Khi đề thi hỏi chuẩn L1 -\u003e Cứ bỏ hết dấu âm đi rồi cộng dồn lại. Hỏi chuẩn L2 -\u003e Nhớ ngay bộ ba Pytago quen thuộc: (3, 4, 5) hoặc (6, 8, 10) để nhẩm nhanh không cần máy tính!"
                         },
                         {
                             "whyInAI":  "Mỗi lớp nơ-ron (layer) trong ChatGPT hay mạng Deep Learning thực chất chỉ là một phép nhân ma trận: Trọng số W x Dữ liệu đầu vào x.",
                             "title":  "2. Phép nhân Ma trận: Ghép Hàng x Cột",
                             "analogy":  "Hãy tưởng tượng một nhà máy lắp ráp: Bạn có Ma trận A kích thước (m x k) và Ma trận B kích thước (k x n). Hai chiếc máy này chỉ lắp ráp được với nhau khi \u0027đầu ra của máy A (k cột)\u0027 KHỚP HOÀN TOÀN với \u0027đầu vào của máy B (k hàng)\u0027. Nếu 2 số ở giữa không bằng nhau -\u003e Dây chuyền kẹt, báo lỗi không nhân được!",
                             "formulaBox":  "• Kiểm tra: $(m \\times \\mathbf{k}) \\times (\\mathbf{k} \\times n) \\to$ Ra ma trận kết quả $(m \\times n)$ (lấy 2 số ngoài cùng).\n• Cách tính từng ô: Lấy từng phần tử của HÀNG (ma trận trước) nhân tương ứng với CỘT (ma trận sau) rồi cộng lại.\n• Tính chất sống còn: $A \\cdot B \\neq B \\cdot A$ (nhân ma trận KHÔNG được đổi chỗ!).",
                             "quickTip":  "Đề bài cho A cỡ 2x3, B cỡ 3x4. Hỏi cỡ của A x B? Bạn chỉ việc gạch bỏ 2 số 3 ở giữa đi, giữ lại 2 và 4 -\u003e Ra ngay kích thước 2x4 trong 2 giây!"
                         },
                         {
                             "whyInAI":  "Định thức (det) cho biết một ma trận khi biến đổi một hình ảnh thì làm hình đó phóng to hay thu nhỏ bao nhiêu lần.",
                             "title":  "3. Định thức (Determinant) \u0026 Nghịch đảo: Kính lúp phóng to diện tích",
                             "analogy":  "Nếu bạn vẽ một hình vuông diện tích 1cm² trên mặt phẳng. Dùng ma trận A kéo dãn mặt phẳng đó ra. Diện tích hình mới lúc này chính là |det(A)|!\nNếu det(A) = 0: Nghĩa là ma trận đã ép bẹp hình vuông thành một đường thẳng (diện tích = 0). Khi đã bị ép bẹp thành đường thẳng thì KHÔNG THỂ KHÔI PHỤC LẠI ĐƯỢC NỮA -\u003e Ma trận không thể đảo ngược (không khả nghịch)!",
                             "formulaBox":  "• Định thức ma trận 2x2:\n$$\\det \\begin{bmatrix} a \u0026 b \\\\ c \u0026 d \\end{bmatrix} = a \\cdot d - b \\cdot c$$\n(Tích chéo chính trừ Tích chéo phụ)\n• Ma trận khả nghịch $\\iff \\det(A) \\neq 0$.\n• Ma trận nghịch đảo: $A^{-1} = \\frac{1}{\\det(A)}\\begin{bmatrix} d \u0026 -b \\\\ -c \u0026 a \\end{bmatrix}$ (Đổi chỗ a và d; đổi dấu b và c).",
                             "quickTip":  "Mẹo nhớ ma trận nghịch đảo 2x2: \u0027Đường chéo chính đổi chỗ cho nhau, đường chéo phụ giữ nguyên vị trí nhưng đổi dấu (+ thành -, - thành +)\u0027."
                         },
                         {
                             "whyInAI":  "Khi xử lý dữ liệu nhiều chiều, ta muốn tìm xem dữ liệu đang dàn trải mạnh nhất theo hướng nào. Hướng đó chính là Vector riêng, và độ mạnh của nó chính là Trị riêng!",
                             "title":  "4. Trị riêng \u0026 Vector riêng: Hướng không bị bẻ cong",
                             "analogy":  "Khi bạn kéo căng một tấm bạt cao su theo nhiều hướng, hầu hết các đường kẻ trên bạt sẽ vừa bị kéo dài, vừa bị bẻ cong sang góc khác. Nhưng luôn có những \u0027đường kẻ đặc biệt\u0027: chúng chỉ bị kéo dài ra chứ KHÔNG HỀ BỊ BẺ CONG. Hướng của đường kẻ đó là Vector riêng (Eigenvector), và tỉ lệ kéo dài đó là Trị riêng (Eigenvalue).",
                             "formulaBox":  "• Phương trình định nghĩa: $A v = \\lambda v$\n• Cách tìm trị riêng $\\lambda$: Giải phương trình $\\det(A - \\lambda I) = 0$.\n• Hai mẹo tính nhẩm thần tốc khi thi trắc nghiệm:\n  1. Tổng các trị riêng = Tổng đường chéo chính (Vết - Trace): $\\lambda_1 + \\lambda_2 = a + d$\n  2. Tích các trị riêng = Định thức: $\\lambda_1 \\cdot \\lambda_2 = \\det(A)$",
                             "quickTip":  "Gặp câu hỏi tìm trị riêng của ma trận [[3, 1], [0, 2]]? Đừng cắm đầu giải phương trình! Nhìn ngay 4 đáp án: đáp án nào có tổng bằng 3+2=5 và tích bằng 3*2-0*1=6 thì chọn ngay (đáp án là 3 và 2)!"
                         },
                         {
                             "whyInAI":  "Một bức ảnh 4K hay một mô hình AI 70 tỷ tham số quá nặng để máy tính xử lý. Làm sao để thu nhỏ nó lại mà không làm mất chất lượng?",
                             "title":  "5. SVD, PCA \u0026 Hệ phương trình tuyến tính (Nén dữ liệu \u0026 LoRA)",
                             "analogy":  "Thay vì lưu toàn bộ hàng triệu điểm ảnh chi tiết, SVD và PCA giống như một người họa sĩ vẽ tranh biếm họa: chỉ giữ lại 5-10 nét vẽ đặc trưng nhất (khung xương chính) nhưng ai nhìn vào cũng nhận ra đó là bức tranh gì.\nKỹ thuật LoRA (Low-Rank Adaptation) dùng để fine-tune mô hình LLM chính là dựa trên xấp xỉ hạng thấp từ SVD: thay vì cập nhật ma trận lớn W, ta chỉ cập nhật hai ma trận nhỏ A và B sao cho W = A x B.",
                             "formulaBox":  "• Phân tích SVD: $A = U \\cdot \\Sigma \\cdot V^T$\n  - $\\Sigma$ là ma trận đường chéo chứa các giá trị kỳ dị sắp xếp từ lớn đến nhỏ ($\\sigma_1 \\ge \\sigma_2 \\ge \\dots \\ge 0$).\n• Xấp xỉ hạng thấp (Rank-k): Giữ lại $k$ giá trị kỳ dị lớn nhất, bỏ phần nhỏ (nhiễu).\n• Hệ phương trình $Ax = b$:\n  - Có nghiệm duy nhất khi $\\det(A) \\neq 0$ ($x = A^{-1} b$).\n  - Vô số nghiệm hoặc vô nghiệm khi các hàng/cột phụ thuộc tuyến tính (đa cộng tuyến trong dữ liệu).",
                             "quickTip":  "PCA thực chất là: Trừ dữ liệu về mean=0 -\u003e Tính ma trận hiệp phương sai -\u003e Tìm các Vector riêng có Trị riêng lớn nhất -\u003e Chiếu dữ liệu lên đó!"
                         }
                     ],
        "title":  "Đại số tuyến tính thực chiến cho AI (Linear Algebra)",
        "examId":  "T01",
        "group":  "toan",
        "cheatSheet":  [
                           "det([[a, b], [c, d]]) = a*d - b*c",
                           "det(A) != 0 \u003c=\u003e Ma trận khả nghịch",
                           "Tổng các trị riêng = a + d (Vết - Trace)",
                           "Tích các trị riêng = det(A)",
                           "L1 = Taxi (tổng trị tuyệt đối) | L2 = Chim bay (căn tổng bình phương)",
                           "SVD: A = U * Sigma * V^T (Nền tảng nén mô hình LoRA \u0026 PCA)"
                       ],
        "code":  "CĐ-01",
        "summary":  "Hiểu bản chất Vector, Ma trận, Định thức, Trị riêng và SVD/PCA qua các hình tượng đời thường thay vì học vẹt công thức.",
        "groupName":  "Nhóm 1: Toán \u0026 Tư duy Định lượng",
        "traps":  [
                      {
                          "explanation":  "Cho A = [[2, -3], [4, 5]]. Tích chéo chính là 2*5 = 10. Tích chéo phụ là (-3)*4 = -12. det = 10 - (-12) = 10 + 12 = 22. Đề thi luôn gài sẵn đáp án 10 - 12 = -2 để bẫy người nhẩm ẩu!",
                          "trap":  "Bẫy dấu trừ khi tính định thức det(A) = ad - bc"
                      },
                      {
                          "explanation":  "Hai câu văn có dot product rất to chưa chắc đã giống nhau, có thể chỉ vì câu văn đó dài nên các số cộng dồn. Muốn đo mức độ giống nhau về ngữ nghĩa thì BẮT BUỘC phải chia cho độ dài hai vector (Cosine).",
                          "trap":  "Nhầm lẫn giữa Tích vô hướng (Dot product) và Cosine Similarity"
                      }
                  ],
        "duration":  "45 phút học sâu",
        "learningGoals":  [
                              "Hiểu vector \u0026 chuẩn L1, L2 qua hình tượng taxi và chim bay",
                              "Mẹo tính nhẩm định thức 2x2 trong 5 giây không dùng máy tính",
                              "Nhận diện điều kiện nhân ma trận và kích thước kết quả",
                              "Hiểu bản chất SVD \u0026 PCA: nén ảnh và cơ chế giảm chiều của LoRA trong LLM",
                              "Nắm vững phương trình hệ tuyến tính Ax = b và điều kiện độc lập tuyến tính"
                          ],
        "practiceQuestions":  [
                                  {
                                      "id":  "T01-A01",
                                      "prompt":  "Cho hai vector $\\mathbf{u} = (2, -1, 3)$ và $\\mathbf{v} = (4, 5, -1)$ trong $\\mathbb{R}^3$. Tích vô hướng $\\mathbf{u} \\cdot \\mathbf{v}$ bằng bao nhiêu?",
                                      "type":  "mcq",
                                      "options":  [
                                                      {
                                                          "key":  "A",
                                                          "text":  "$16$"
                                                      },
                                                      {
                                                          "key":  "B",
                                                          "text":  "$0$"
                                                      },
                                                      {
                                                          "key":  "C",
                                                          "text":  "$(8, -5, -3)$"
                                                      },
                                                      {
                                                          "key":  "D",
                                                          "text":  "$6$"
                                                      }
                                                  ],
                                      "answer":  "B",
                                      "explanation":  "$\\mathbf{u} \\cdot \\mathbf{v} = 2 \\cdot 4 + (-1) \\cdot 5 + 3 \\cdot (-1) = 8 - 5 - 3 = 0$. Tích vô hướng bằng 0 nên hai vector trực giao ($\\mathbf{u} \\perp \\mathbf{v}$).",
                                      "distractors":  {
                                                          "A":  "Lấy trị tuyệt đối từng tích ($8 + 5 + 3 = 16$), làm mất dấu âm của $(-1) \\cdot 5$ và $3 \\cdot (-1)$.",
                                                          "C":  "Đây là tích từng phần tử (Hadamard), còn thiếu bước cộng lại; tích vô hướng là **một số**, không phải vector.",
                                                          "D":  "Sai dấu ở tích cuối: $3 \\cdot (-1) = -3$ chứ không phải $+3$, nên $8 - 5 + 3 = 6$ là sai."
                                                      },
                                      "tags":  [
                                                   "tích vô hướng",
                                                   "trực giao",
                                                   "vector"
                                               ]
                                  },
                                  {
                                      "id":  "T01-A02",
                                      "prompt":  "Trong hồi quy Lasso, số hạng phạt là $\\lambda \\lVert \\mathbf{w} \\rVert_1$. Với vector trọng số $\\mathbf{w} = (3, -4, 0, 12)$, chuẩn $\\lVert \\mathbf{w} \\rVert_1$ bằng bao nhiêu?",
                                      "type":  "mcq",
                                      "options":  [
                                                      {
                                                          "key":  "A",
                                                          "text":  "$13$"
                                                      },
                                                      {
                                                          "key":  "B",
                                                          "text":  "$11$"
                                                      },
                                                      {
                                                          "key":  "C",
                                                          "text":  "$19$"
                                                      },
                                                      {
                                                          "key":  "D",
                                                          "text":  "$12$"
                                                      }
                                                  ],
                                      "answer":  "C",
                                      "explanation":  "$\\lVert \\mathbf{w} \\rVert_1 = \\sum_i \\lvert w_i \\rvert = 3 + 4 + 0 + 12 = 19$.",
                                      "distractors":  {
                                                          "A":  "Đây là chuẩn $L_2$: $\\sqrt{9 + 16 + 0 + 144} = \\sqrt{169} = 13$, không phải $L_1$.",
                                                          "B":  "Cộng thẳng các thành phần $3 - 4 + 0 + 12 = 11$, quên lấy trị tuyệt đối.",
                                                          "D":  "Đây là chuẩn $L_\\infty$ (trị tuyệt đối lớn nhất), không phải tổng trị tuyệt đối."
                                                      },
                                      "tags":  [
                                                   "chuẩn L1",
                                                   "Lasso",
                                                   "regularization"
                                               ]
                                  },
                                  {
                                      "id":  "T01-A03",
                                      "prompt":  "Lớp tuyến tính PyTorch `nn.Linear(768, 512)` lưu ma trận trọng số $W \\in \\mathbb{R}^{512 \\times 768}$ và tính $Y = XW^\\top + \\mathbf{b}$. Đầu vào là một batch $X \\in \\mathbb{R}^{32 \\times 768}$ (32 câu, mỗi câu là một embedding 768 chiều). Kích thước của $Y$ là gì?",
                                      "type":  "mcq",
                                      "options":  [
                                                      {
                                                          "key":  "A",
                                                          "text":  "$32 \\times 512$"
                                                      },
                                                      {
                                                          "key":  "B",
                                                          "text":  "$32 \\times 768$"
                                                      },
                                                      {
                                                          "key":  "C",
                                                          "text":  "$512 \\times 32$"
                                                      },
                                                      {
                                                          "key":  "D",
                                                          "text":  "$768 \\times 512$"
                                                      }
                                                  ],
                                      "answer":  "A",
                                      "explanation":  "$(32 \\times 768) \\cdot (768 \\times 512) = 32 \\times 512$: số hàng lấy từ $X$, số cột lấy từ $W^\\top$; chiều trong (768) phải khớp và biến mất sau phép nhân.",
                                      "distractors":  {
                                                          "B":  "Nghĩ lớp tuyến tính giữ nguyên số chiều đầu vào; thật ra số cột của $Y$ là số chiều đầu ra (512).",
                                                          "C":  "Đây là kích thước của $WX^\\top$, tức $Y^\\top$ (đặt trọng số bên trái), không phải $Y$.",
                                                          "D":  "Đây là kích thước của $W^\\top$; nhầm ma trận trọng số với đầu ra."
                                                      },
                                      "tags":  [
                                                   "nhân ma trận",
                                                   "kích thước",
                                                   "lớp tuyến tính"
                                               ]
                                  }
                              ]
    },
    {
        "badge":  "CĐ-02 · 4 Trọng tâm thi",
        "id":  "cd02",
        "sections":  [
                         {
                             "whyInAI":  "Làm sao mô hình AI biết được nó đang đoán sai bao nhiêu và cần chỉnh trọng số nào để lần sau đoán chuẩn hơn? Đạo hàm và Gradient chính là câu trả lời.",
                             "title":  "1. Gradient \u0026 Đạo hàm riêng: Chiếc la bàn trong sương mù",
                             "analogy":  "Tưởng tượng bạn bị bịt mắt và thả vào một ngọn núi đầy sương mù. Mục tiêu của bạn là tìm đường xuống thung lũng sâu nhất (nơi hàm Loss thấp nhất).\n• Bạn dùng chân dò dẫm xung quanh. Hướng mà mặt đất dốc lên cao nhất chính là Gradient!\n• Nhưng mục tiêu của bạn là ĐI XUỐNG DƯỚI. Vì vậy, bạn phải đi NGƯỢC HƯỚNG với Gradient! Đó chính là thuật toán Gradient Descent (Hạ độ dốc): Bước đi = Vị trí cũ - Tốc độ bước x Gradient.",
                             "formulaBox":  "• Cập nhật trọng số:\n$$\\theta_{new} = \\theta_{old} - \\eta \\cdot \\nabla L$$\n  - $\\theta$: Trọng số mô hình.\n  - $\\eta$ (Learning Rate): Độ dài sải chân của bạn. Bước quá to $\\to$ ngã bay qua thung lũng; Bước quá nhỏ $\\to$ đi mãi không tới đích.\n  - $\\nabla L$ (Gradient): Vector chứa các đạo hàm riêng chỉ hướng dốc lên.",
                             "quickTip":  "Đề thi hỏi: \u0027Gradient chỉ hướng nào?\u0027. Nhớ ngay: Gradient luôn chỉ hướng TĂNG NHANH NHẤT của hàm số. Còn muốn giảm Loss thì phải đi ngược chiều Gradient (có dấu trừ trước learning rate)!"
                         },
                         {
                             "whyInAI":  "Một mạng nơ-ron sâu có hàng chục lớp. Khi đầu ra bị sai, làm sao truyền lỗi ngược về tận lớp đầu tiên để chỉnh sửa? Đó chính là Lan truyền ngược (Backpropagation).",
                             "title":  "2. Quy tắc chuỗi (Chain Rule) \u0026 Hàm Loss BCE",
                             "analogy":  "Tưởng tượng một dây chuyền làm bánh: Người A nhào bột $\\to$ Người B nặn bánh $\\to$ Người C nướng bánh.\nKhi chiếc bánh ra lò bị cháy khét (Loss lớn):\n- Lỗi của Người C ảnh hưởng trực tiếp đến độ cháy (dL/dC).\n- Nhưng Người B làm bánh quá mỏng cũng khiến Người C nướng cháy (dC/dB).\n- Muốn biết Người B có lỗi bao nhiêu với chiếc bánh cháy, ta chỉ cần NHÂN CÁC TỶ LỆ LỖI LẠI VỚI NHAU: (dL/dB) = (dL/dC) x (dC/dB). Đó chính là Quy tắc chuỗi (Chain Rule)!",
                             "formulaBox":  "• Công thức Chain Rule:\n$$\\frac{\\partial L}{\\partial w} = \\frac{\\partial L}{\\partial \\hat{y}} \\cdot \\frac{\\partial \\hat{y}}{\\partial z} \\cdot \\frac{\\partial z}{\\partial w}$$\n• Với hàm kích hoạt Sigmoid $\\sigma(z) = \\frac{1}{1 + e^{-z}}$ và hàm mất mát Binary Cross-Entropy (BCE):\nĐạo hàm tổng hợp cực kỳ đẹp mắt và đơn giản:\n$$\\frac{\\partial L}{\\partial z} = \\hat{y} - y$$\n(Chỉ đơn giản là lấy \u0027Xác suất mô hình đoán\u0027 trừ đi \u0027Nhãn thực tế\u0027!)",
                             "quickTip":  "Khi đề thi hỏi đạo hàm của BCE kết hợp Sigmoid theo logit z, không cần tính toán đạo hàm cồng kềnh, đáp án luôn là (y_hat - y)!"
                         },
                         {
                             "whyInAI":  "Khi đạo hàm bằng 0, mô hình tưởng rằng đã tìm thấy đáy thung lũng. Nhưng thực tế nó có thể đang bị mắc kẹt tại Điểm yên ngựa!",
                             "title":  "3. Hessian \u0026 Điểm yên ngựa: Kẻ thù số 1 của Deep Learning",
                             "analogy":  "Hãy nhìn chiếc yên ngựa: Nếu nhìn từ trước ra sau, nó là một chiếc đáy trũng (cực tiểu). Nhưng nếu nhìn từ trái sang phải, nó lại là đỉnh cao nhất (cực đại).\nTại điểm chính giữa yên ngựa, mặt đất bằng phẳng (đạo hàm = 0). Mô hình AI đi đến đây sẽ bị \u0027đứng hình\u0027 vì tưởng đã xong việc, trong khi thực ra vẫn còn đường đi xuống tiếp!\nMa trận Hessian (đạo hàm cấp 2) dùng để kiểm tra độ cong xung quanh xem đây là đáy thật hay là yên ngựa giả mạo.",
                             "formulaBox":  "• Ma trận Hessian $H$ (chứa các đạo hàm cấp 2):\n  - Mọi trị riêng của $H \u003e 0$ (Xác định dương): **Cực tiểu địa phương (Đáy thật)**.\n  - Mọi trị riêng của $H \u003c 0$ (Xác định âm): **Cực đại địa phương (Đỉnh núi)**.\n  - Trị riêng vừa có âm vừa có dương: **Điểm yên ngựa (Saddle Point)**.",
                             "quickTip":  "Trong mạng nơ-ron nhiều chiều, 99% chỗ bị nghẽn là ĐIỂM YÊN NGỰA! Đó là lý do ta cần thuật toán Momentum và Adam để vượt qua yên ngựa."
                         },
                         {
                             "whyInAI":  "Chọn thuật toán tối ưu giống như chọn phương tiện để AI học nhanh nhất mà không bị lao xuống vực.",
                             "title":  "4. Các thuật toán tối ưu: SGD, Momentum và Adam",
                             "analogy":  "• SGD thuần túy: Người mù đi bộ dò từng bước nhỏ. Gặp rãnh hẹp sẽ bị rung lắc qua lại liên tục giữa 2 vách đá, đi rất chậm.\n• Momentum (Quán tính): Biến người đi bộ thành một QUẢ CẦU NẶNG lăn xuống dốc. Quả cầu tích tụ đà lăn, giúp nó phóng vù qua các ổ gà nhỏ và điểm yên ngựa một cách dễ dàng.\n• Adam: Chiếc xe thể thao thông minh tự động điều chỉnh tốc độ. Nó kết hợp cả đà lăn (Momentum) và tự động giảm ga khi đường gồ ghề (chia cho độ lớn gradient), giúp AI học nhanh và ổn định nhất.",
                             "formulaBox":  "• SGD: $\\theta = \\theta - \\eta g_t$\n• Momentum: $v_t = \\beta v_{t-1} + \\eta g_t$, sau đó $\\theta = \\theta - v_t$\n• Adam: Tính cả trung bình bậc 1 ($m_t$ - đà lăn) và trung bình bậc 2 ($v_t$ - độ dốc bình phương), cộng thêm hiệu chỉnh bias ở các bước đầu.",
                             "quickTip":  "Nhớ câu thần chú: \u0027Adam = Momentum (mô-men 1) + RMSprop (mô-men 2) + Hiệu chỉnh độ chệch (Bias correction)\u0027!"
                         }
                     ],
        "title":  "Giải tích và Tối ưu hóa (Calculus \u0026 Optimization)",
        "examId":  "T02",
        "group":  "toan",
        "cheatSheet":  [
                           "Cập nhật GD: theta_moi = theta_cu - lr * Gradient",
                           "Đạo hàm BCE + Sigmoid: dL/dz = y_hat - y",
                           "Hessian \u003e 0: Cực tiểu (Đáy) | Hessian \u003c 0: Cực đại (Đỉnh) | Lẫn lộn: Yên ngựa",
                           "Adam = Momentum + RMSprop + Bias correction"
                       ],
        "code":  "CĐ-02",
        "summary":  "Hiểu trực quan Gradient, Chain Rule trong lan truyền ngược (Backpropagation), cách AI leo xuống thung lũng (SGD, Adam) và các hàm mất mát.",
        "groupName":  "Nhóm 1: Toán \u0026 Tư duy Định lượng",
        "traps":  [
                      {
                          "explanation":  "Gradient là hướng làm hàm số TĂNG nhanh nhất. Còn trong huấn luyện AI, ta muốn GIẢM hàm mất mát Loss, nên bắt buộc phải đi NGƯỢC hướng Gradient (thêm dấu âm).",
                          "trap":  "Nhầm lẫn giữa Gradient và hướng cập nhật của Gradient Descent"
                      }
                  ],
        "duration":  "45 phút học sâu",
        "learningGoals":  [
                              "Hiểu bản chất Gradient: chiếc la bàn chỉ hướng leo núi",
                              "Nắm vững Chain Rule trong mạng nơ-ron: quy tắc domino",
                              "Phân biệt cực tiểu địa phương và điểm yên ngựa qua ma trận Hessian",
                              "Hiểu bản chất tối ưu: SGD (người mù đi bộ), Momentum (quả cầu lăn), Adam (xe thích nghi)",
                              "Nắm vững đạo hàm của hàm mất mát BCE kết hợp Sigmoid"
                          ],
        "practiceQuestions":  [
                                  {
                                      "id":  "T02-A01",
                                      "prompt":  "Hàm $f(x) = \\sqrt{1 + x^2}$ (dạng của pseudo-Huber loss) có đạo hàm $f\u0027(x)$ bằng:",
                                      "type":  "mcq",
                                      "options":  [
                                                      {
                                                          "key":  "A",
                                                          "text":  "$\\dfrac{x}{\\sqrt{1 + x^2}}$"
                                                      },
                                                      {
                                                          "key":  "B",
                                                          "text":  "$\\dfrac{1}{2\\sqrt{1 + x^2}}$"
                                                      },
                                                      {
                                                          "key":  "C",
                                                          "text":  "$\\dfrac{2x}{\\sqrt{1 + x^2}}$"
                                                      },
                                                      {
                                                          "key":  "D",
                                                          "text":  "$\\dfrac{x}{1 + x^2}$"
                                                      }
                                                  ],
                                      "answer":  "A",
                                      "explanation":  "Quy tắc chuỗi với $u = 1 + x^2$: $f\u0027(x) = \\frac{1}{2\\sqrt{u}} \\cdot u\u0027 = \\frac{1}{2\\sqrt{1+x^2}} \\cdot 2x = \\frac{x}{\\sqrt{1+x^2}}$.",
                                      "distractors":  {
                                                          "B":  "Chỉ lấy đạo hàm của hàm ngoài $\\sqrt{u}$ mà quên nhân đạo hàm hàm trong $u\u0027 = 2x$.",
                                                          "C":  "Nhân đạo hàm hàm trong $2x$ nhưng quên hệ số $\\frac{1}{2}$ của $(\\sqrt{u})\u0027 = \\frac{1}{2\\sqrt{u}}$.",
                                                          "D":  "Nhầm sang đạo hàm của $\\frac{1}{2}\\ln(1+x^2)$; căn bậc hai và logarit có đạo hàm khác nhau."
                                                      },
                                      "tags":  [
                                                   "đạo hàm",
                                                   "quy tắc chuỗi"
                                               ]
                                  },
                                  {
                                      "id":  "T02-A02",
                                      "prompt":  "Trong một đồ thị tính toán, $z = g(x)$ rồi $y = f(z)$, với $f$ và $g$ khả vi. Theo quy tắc chuỗi, $\\dfrac{dy}{dx}$ bằng:",
                                      "type":  "mcq",
                                      "options":  [
                                                      {
                                                          "key":  "A",
                                                          "text":  "$f\u0027(x) \\cdot g\u0027(x)$"
                                                      },
                                                      {
                                                          "key":  "B",
                                                          "text":  "$f\u0027\\big(g\u0027(x)\\big)$"
                                                      },
                                                      {
                                                          "key":  "C",
                                                          "text":  "$f\u0027\\big(g(x)\\big) \\cdot g\u0027(x)$"
                                                      },
                                                      {
                                                          "key":  "D",
                                                          "text":  "$f\\big(g(x)\\big) \\cdot g\u0027(x)$"
                                                      }
                                                  ],
                                      "answer":  "C",
                                      "explanation":  "$\\frac{dy}{dx} = \\frac{dy}{dz} \\cdot \\frac{dz}{dx} = f\u0027(z)\\, g\u0027(x) = f\u0027\\big(g(x)\\big)\\, g\u0027(x)$: đạo hàm hàm ngoài **tính tại giá trị hàm trong**, nhân đạo hàm hàm trong.",
                                      "distractors":  {
                                                          "A":  "Tính $f\u0027$ tại $x$ thay vì tại $z = g(x)$. Ví dụ $f = \\sin$, $g(x) = x^2$ cho $\\cos(x) \\cdot 2x$, sai so với $\\cos(x^2) \\cdot 2x$.",
                                                          "B":  "Lồng đạo hàm vào nhau như hợp hàm; quy tắc chuỗi là **tích** của các đạo hàm chứ không phải hợp của chúng.",
                                                          "D":  "Quên lấy đạo hàm hàm ngoài: giữ nguyên $f(g(x))$ rồi chỉ nhân $g\u0027(x)$."
                                                      },
                                      "tags":  [
                                                   "quy tắc chuỗi",
                                                   "đồ thị tính toán"
                                               ]
                                  },
                                  {
                                      "id":  "T02-A03",
                                      "prompt":  "Một lớp tuyến tính không bias tính $\\mathbf{y} = W\\mathbf{x}$, với $\\mathbf{x} \\in \\mathbb{R}^4$ và $\\mathbf{y} \\in \\mathbb{R}^2$. Ma trận Jacobian $\\dfrac{\\partial \\mathbf{y}}{\\partial \\mathbf{x}}$ (quy ước: hàng $i$ ứng với $y_i$, cột $j$ ứng với $x_j$) là:",
                                      "type":  "mcq",
                                      "options":  [
                                                      {
                                                          "key":  "A",
                                                          "text":  "$W^\\top$, kích thước $4 \\times 2$"
                                                      },
                                                      {
                                                          "key":  "B",
                                                          "text":  "$W$, kích thước $2 \\times 4$"
                                                      },
                                                      {
                                                          "key":  "C",
                                                          "text":  "$\\mathbf{x}^\\top$, kích thước $1 \\times 4$"
                                                      },
                                                      {
                                                          "key":  "D",
                                                          "text":  "$W^\\top W$, kích thước $4 \\times 4$"
                                                      }
                                                  ],
                                      "answer":  "B",
                                      "explanation":  "$y_i = \\sum_j W_{ij} x_j$ nên $\\frac{\\partial y_i}{\\partial x_j} = W_{ij}$: Jacobian chính là $W$, kích thước (số đầu ra) $\\times$ (số đầu vào) $= 2 \\times 4$.",
                                      "distractors":  {
                                                          "A":  "Nhầm quy ước bố cục (layout); $W^\\top$ xuất hiện khi lan truyền ngược gradient $\\frac{\\partial L}{\\partial \\mathbf{x}} = W^\\top \\frac{\\partial L}{\\partial \\mathbf{y}}$, không phải Jacobian theo quy ước đã cho.",
                                                          "C":  "Nhầm với đạo hàm theo **trọng số** của một đầu ra: $\\frac{\\partial y_i}{\\partial W_{i,:}} = \\mathbf{x}^\\top$.",
                                                          "D":  "Nhầm với ma trận $X^\\top X$ hay gặp trong Hessian của bình phương tối thiểu; Jacobian của ánh xạ tuyến tính chỉ là $W$."
                                                      },
                                      "tags":  [
                                                   "Jacobian",
                                                   "lớp tuyến tính"
                                               ]
                                  }
                              ]
    },
    {
        "badge":  "CĐ-03 · Đầy đủ 4 Trọng tâm thi",
        "id":  "cd03",
        "sections":  [
                         {
                             "whyInAI":  "Tính toán số tham số, xác suất kết hợp từ vựng trong LLM hay không gian trạng thái của bài toán đều dựa vào Đại số tổ hợp.",
                             "title":  "1. Đại số tổ hợp \u0026 Quy tắc đếm kinh điển",
                             "analogy":  "• Hoán vị (!$): Đổi chỗ $ người trong 1 hàng dọc.\n• Chỉnh hợp (^k$): Chọn $ người từ $ người VÀ CÓ PHÂN CÔNG CHỨC VỤ (thứ tự quan trọng: Trưởng ban, Phó ban).\n• Tổ hợp (^k$): Chọn $ người từ $ người ĐI ĐÁ BÓNG (thứ tự không quan trọng, chọn ai trước sau cũng là đội bóng đó).\n• Nguyên lý bù trừ: Muốn đếm số trường hợp có \u0027Ít nhất 1\u0027 -\u003e Lấy Tổng số trừ đi trường hợp \u0027Không có cái nào\u0027!",
                             "formulaBox":  "• Hoán vị: $P_n = n! = n \\times (n-1) \\times \\dots \\times 1$\n• Chỉnh hợp: $A_n^k = \\frac{n!}{(n-k)!}$\n• Tổ hợp: $C_n^k = \\binom{n}{k} = \\frac{n!}{k!(n-k)!}$\n• Tính chất nhẩm nhanh: $\\binom{n}{k} = \\binom{n}{n-k}$, ví dụ $\\binom{10}{8} = \\binom{10}{2} = \\frac{10 \\times 9}{2} = 45$.",
                             "quickTip":  "Gặp câu hỏi: \u0027Xác suất có ít nhất 1 người bị lỗi\u0027 -\u003e Lấy ngay 1 trừ đi xác suất \u0027Không ai bị lỗi\u0027 (1 - P(khong loi)), giải nhanh gấp 5 lần tính cộng dồn!"
                         },
                         {
                             "whyInAI":  "Hệ thống AI cảnh báo phát hiện gian lận với độ chính xác 99%. Người nhận thông báo có thực sự bị gian lận tới 99% không? Câu trả lời là KHÔNG!",
                             "title":  "2. Xác suất có điều kiện, Bayes \u0026 Ngụy biện Tỉ lệ nền",
                             "analogy":  "Tưởng tượng một căn bệnh cực hiếm: Trong 1.000 người chỉ có 1 người mắc bệnh (Tỉ lệ nền = 0.1%).\nBác sĩ dùng bộ xét nghiệm \u0027siêu chính xác\u0027 99%:\n- Với 1 người có bệnh: Máy test ra Dương tính (chuẩn 99%).\n- Với 999 người khỏe mạnh: Dù máy chuẩn 99%, vẫn có 1% bị báo nhầm là Dương tính -\u003e Tức là có khoảng 10 người khỏe mạnh bị báo nhầm!\nBây giờ, nếu bạn nhận kết quả Dương tính: Bạn đang nằm trong nhóm nào? Nhóm 1 người bệnh thật, hay nhóm 10 người bị báo nhầm?\nXác suất bạn thực sự bị bệnh chỉ là: 1 / (1 + 10) ≈ 9%! Dù xét nghiệm chính xác 99%, kết quả thực tế chỉ là 9%! Đây chính là NGỤY BIỆN TỈ LỆ NỀN.",
                             "formulaBox":  "• Xác suất có điều kiện: $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$\n• Định lý Bayes toàn phần:\n$$P(\\text{Bệnh} | +) = \\frac{P(+ | \\text{Bệnh}) \\cdot P(\\text{Bệnh})}{P(+ | \\text{Bệnh})P(\\text{Bệnh}) + P(+ | \\text{Khỏe})P(\\text{Khỏe})}$$\n• Hai biến cố độc lập $\\iff P(A \\cap B) = P(A) \\cdot P(B)$.",
                             "quickTip":  "Gặp bài Bayes thi trắc nghiệm: Giả sử có 1.000 hoặc 10.000 người, tính số ca bệnh thật và số ca báo nhầm, lấy Bệnh thật chia Tổng số ca báo dương tính là ra ngay!"
                         },
                         {
                             "whyInAI":  "Kỳ vọng E[X] là điểm tựa trung bình dài hạn, còn Phương sai Var(X) đo mức độ rủi ro, biến động của hệ thống.",
                             "title":  "3. Biến ngẫu nhiên, Kỳ vọng \u0026 Phương sai",
                             "analogy":  "Hãy tưởng tượng bạn bắn bia:\n• Kỳ vọng E[X]: Điểm trọng tâm của toàn bộ các phát bắn. Nếu bạn nhắm chuẩn vào hồng tâm, E[X] = 10.\n• Phương sai Var(X): Độ phân tán của các viên đạn. Đạn chụm sát nhau $\\to$ Phương sai nhỏ (ổn định). Đạn văng lung tung khắp bảng $\\to$ Phương sai lớn (bất ổn).",
                             "formulaBox":  "• Kỳ vọng: $E[X] = \\sum x_i P(X = x_i)$. Tính chất tuyến tính: $E[aX + b] = a E[X] + b$\n• Phương sai: $\\operatorname{Var}(X) = E[X^2] - (E[X])^2$\n• Bẫy hệ số phương sai:\n$$\\operatorname{Var}(aX + b) = a^2 \\cdot \\operatorname{Var}(X)$$\n(Hệ số $a$ khi đưa ra ngoài BẮT BUỘC PHẢI BÌNH PHƯƠNG, còn hằng số $b$ bị biến mất!)",
                             "quickTip":  "Đề bài cho Var(X) = 2. Hỏi Var(3X - 5) bằng bao nhiêu? Nhẩm ngay: 3 bình phương là 9, 9 nhân 2 = 18! Số -5 không ảnh hưởng gì đến phương sai!"
                         },
                         {
                             "whyInAI":  "Biết dữ liệu thuộc phân phối nào giúp bạn chọn đúng mô hình và hàm mất mát phù hợp.",
                             "title":  "4. Bốn phân phối xác suất cốt lõi trong AI",
                             "analogy":  "1. Bernoulli: Tung đồng xu 1 lần (Đúng/Sai, 0 hoặc 1). @{id=T12; code=CĐ-12; title=Logic, đạo đức và pháp lý AI; group=logic; duration_minutes=45; total_points=100; instructions=30 câu · 45 phút · 100 điểm, độ khó tăng dần qua 4 phần: A Nhận biết, B Thông hiểu, C Vận dụng, D Vận dụng cao. Trắc nghiệm 3 điểm/câu (một đáp án đúng); câu điền 3,5 điểm/câu, máy tự chấm; câu tự luận 6 điểm/câu, tự chấm theo rubric. Câu điền: nhập số (dấu phẩy hoặc chấm thập phân, không dùng dấu phân cách hàng nghìn) hoặc gõ đúng kết quả in ra, tùy câu. Không trừ điểm khi sai (quy ước của bộ luyện tập, không phải quy chế thi thật).; sources=System.Object[]; questions=System.Object[]; kind=topic; desc=}[X] = p, \\operatorname{Var}(X) = p(1-p)$.\n2. Nhị thức (Binomial): Tung đồng xu $ lần. Đếm xem có bao nhiêu lần ngửa. @{id=T12; code=CĐ-12; title=Logic, đạo đức và pháp lý AI; group=logic; duration_minutes=45; total_points=100; instructions=30 câu · 45 phút · 100 điểm, độ khó tăng dần qua 4 phần: A Nhận biết, B Thông hiểu, C Vận dụng, D Vận dụng cao. Trắc nghiệm 3 điểm/câu (một đáp án đúng); câu điền 3,5 điểm/câu, máy tự chấm; câu tự luận 6 điểm/câu, tự chấm theo rubric. Câu điền: nhập số (dấu phẩy hoặc chấm thập phân, không dùng dấu phân cách hàng nghìn) hoặc gõ đúng kết quả in ra, tùy câu. Không trừ điểm khi sai (quy ước của bộ luyện tập, không phải quy chế thi thật).; sources=System.Object[]; questions=System.Object[]; kind=topic; desc=}[X] = np, \\operatorname{Var}(X) = np(1-p)$.\n3. Poisson: Đếm số lượng sự kiện hiếm xảy ra trong một khoảng thời gian cố định (ví dụ: số cuộc gọi đến tổng đài trong 1 phút, số lỗi chính tả trên 1 trang sách). Đặc điểm độc nhất vô nhị: @{id=T12; code=CĐ-12; title=Logic, đạo đức và pháp lý AI; group=logic; duration_minutes=45; total_points=100; instructions=30 câu · 45 phút · 100 điểm, độ khó tăng dần qua 4 phần: A Nhận biết, B Thông hiểu, C Vận dụng, D Vận dụng cao. Trắc nghiệm 3 điểm/câu (một đáp án đúng); câu điền 3,5 điểm/câu, máy tự chấm; câu tự luận 6 điểm/câu, tự chấm theo rubric. Câu điền: nhập số (dấu phẩy hoặc chấm thập phân, không dùng dấu phân cách hàng nghìn) hoặc gõ đúng kết quả in ra, tùy câu. Không trừ điểm khi sai (quy ước của bộ luyện tập, không phải quy chế thi thật).; sources=System.Object[]; questions=System.Object[]; kind=topic; desc=}[X] = \\operatorname{Var}(X) = \\lambda$!\n4. Chuẩn Gaussian: Chiều cao, cân nặng, sai số đo lường. Đường cong hình chuông đối xứng.",
                             "formulaBox":  "• Phân phối Poisson: $P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$, Kỳ vọng = Phương sai = $\\lambda$.\n• Quy tắc 68 - 95 - 99.7 của Gaussian:\n  - $[\\mu - \\sigma, \\mu + \\sigma]$: 68.2% dữ liệu.\n  - $[\\mu - 2\\sigma, \\mu + 2\\sigma]$: 95.4% dữ liệu.\n  - $[\\mu - 3\\sigma, \\mu + 3\\sigma]$: 99.7% dữ liệu.",
                             "quickTip":  "Đề thi hỏi: \u0027Phân phối nào có phương sai bằng đúng kỳ vọng?\u0027. Đáp án ngay lập tức: Phân phối Poisson!"
                         }
                     ],
        "title":  "Xác suất \u0026 Biến ngẫu nhiên toàn diện (Probability)",
        "examId":  "T03",
        "group":  "toan",
        "cheatSheet":  [
                           "C(n, k) = n! / (k! * (n-k)!)",
                           "Bayes: P(A|B) = P(B|A)*P(A) / P(B)",
                           "Var(aX + b) = a^2 * Var(X)",
                           "Poisson: E[X] = Var(X) = lambda",
                           "Gaussian 68 - 95 - 99.7: 1 std = 68%, 2 std = 95%, 3 std = 99.7%"
                       ],
        "code":  "CĐ-03",
        "summary":  "Đại số tổ hợp, xác suất có điều kiện, định lý Bayes, ngụy biện tỉ lệ nền (Base-rate fallacy), kỳ vọng, phương sai và các phân phối (Bernoulli, Nhị thức, Poisson, Gaussian).",
        "groupName":  "Nhóm 1: Toán \u0026 Tư duy Định lượng",
        "traps":  [
                      {
                          "explanation":  "Rất nhiều người tính nhẩm Var(2X) = 2*Var(X). SAI! Phương sai đo diện tích phân tán nên phải là 2^2 * Var(X) = 4*Var(X).",
                          "trap":  "Quên bình phương hệ số khi tính Var(aX)"
                      }
                  ],
        "duration":  "45 phút học sâu",
        "learningGoals":  [
                              "Phân biệt hoán vị, chỉnh hợp A(n,k) và tổ hợp C(n,k)",
                              "Hiểu bản chất định lý Bayes và giải đúng bài toán xét nghiệm y tế / bot detection",
                              "Tính nhẩm nhanh kỳ vọng E[X] và phương sai Var(aX + b)",
                              "Làm chủ 4 phân phối kinh điển: Bernoulli, Binomial, Poisson, Gaussian",
                              "Nắm vững quy tắc 68-95-99.7 của phân phối chuẩn Gaussian"
                          ],
        "practiceQuestions":  [
                                  {
                                      "id":  "T03-A01",
                                      "prompt":  "Nhóm ML có 10 đặc trưng ứng viên và muốn huấn luyện thử một mô hình cho **mỗi bộ gồm đúng 3 đặc trưng** (thứ tự các đặc trưng trong bộ không quan trọng, không chọn lặp). Cần huấn luyện bao nhiêu mô hình?",
                                      "type":  "mcq",
                                      "options":  [
                                                      {
                                                          "key":  "A",
                                                          "text":  "$720$"
                                                      },
                                                      {
                                                          "key":  "B",
                                                          "text":  "$120$"
                                                      },
                                                      {
                                                          "key":  "C",
                                                          "text":  "$1000$"
                                                      },
                                                      {
                                                          "key":  "D",
                                                          "text":  "$30$"
                                                      }
                                                  ],
                                      "answer":  "B",
                                      "explanation":  "Chọn 3 trong 10, không thứ tự, không lặp: $\\binom{10}{3} = \\frac{10!}{3!\\,7!} = \\frac{10 \\cdot 9 \\cdot 8}{6} = 120$.",
                                      "distractors":  {
                                                          "A":  "Tính chỉnh hợp $A_{10}^3 = 10 \\cdot 9 \\cdot 8 = 720$, tức đếm cả thứ tự; bộ $\\{x_1, x_2, x_3\\}$ và $\\{x_3, x_1, x_2\\}$ là cùng một mô hình nên phải chia thêm $3! = 6$.",
                                                          "C":  "Tính $10^3$: vừa cho phép chọn lặp một đặc trưng, vừa đếm thứ tự. Đề nói không chọn lặp và không quan tâm thứ tự.",
                                                          "D":  "Nhân $10 \\times 3$ theo cảm tính; đây không phải công thức đếm nào cả."
                                                      },
                                      "tags":  [
                                                   "tổ hợp",
                                                   "đếm",
                                                   "feature selection"
                                               ]
                                  },
                                  {
                                      "id":  "T03-A02",
                                      "prompt":  "Trong log một ngày của một API: 30% request bị **chậm** (trên 1 giây), 20% request trả **lỗi 5xx**, và 10% request vừa chậm vừa lỗi 5xx. Chọn ngẫu nhiên một request. Xác suất request đó chậm **hoặc** lỗi 5xx (ít nhất một trong hai) là bao nhiêu?",
                                      "type":  "mcq",
                                      "options":  [
                                                      {
                                                          "key":  "A",
                                                          "text":  "$0{,}5$"
                                                      },
                                                      {
                                                          "key":  "B",
                                                          "text":  "$0{,}44$"
                                                      },
                                                      {
                                                          "key":  "C",
                                                          "text":  "$0{,}4$"
                                                      },
                                                      {
                                                          "key":  "D",
                                                          "text":  "$0{,}06$"
                                                      }
                                                  ],
                                      "answer":  "C",
                                      "explanation":  "Công thức cộng: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = 0{,}3 + 0{,}2 - 0{,}1 = 0{,}4$.",
                                      "distractors":  {
                                                          "A":  "Cộng thẳng $0{,}3 + 0{,}2$, đếm hai lần nhóm 10% vừa chậm vừa lỗi; phải trừ phần giao.",
                                                          "B":  "Dùng $0{,}3 + 0{,}2 - 0{,}3 \\cdot 0{,}2$, tức tự giả định hai sự kiện độc lập; đề đã cho sẵn $P(\\text{chậm} \\cap \\text{lỗi}) = 0{,}1$ nên phải dùng số này.",
                                                          "D":  "Tính $0{,}3 \\times 0{,}2$: đó là xác suất **giao** nếu hai sự kiện độc lập, không phải xác suất **hợp**."
                                                      },
                                      "tags":  [
                                                   "biến cố hợp",
                                                   "công thức cộng",
                                                   "log"
                                               ]
                                  },
                                  {
                                      "id":  "T03-A03",
                                      "prompt":  "Trong dữ liệu A/B test của một app bán hàng: 40% số phiên đến từ **mobile**, và 6% số phiên là phiên **mobile có mua hàng**. Xác suất một phiên mua hàng **biết rằng** phiên đó đến từ mobile, $P(\\text{mua} \\mid \\text{mobile})$, bằng bao nhiêu?",
                                      "type":  "mcq",
                                      "options":  [
                                                      {
                                                          "key":  "A",
                                                          "text":  "$0{,}15$"
                                                      },
                                                      {
                                                          "key":  "B",
                                                          "text":  "$0{,}024$"
                                                      },
                                                      {
                                                          "key":  "C",
                                                          "text":  "$0{,}06$"
                                                      },
                                                      {
                                                          "key":  "D",
                                                          "text":  "$0{,}34$"
                                                      }
                                                  ],
                                      "answer":  "A",
                                      "explanation":  "$P(\\text{mua} \\mid \\text{mobile}) = \\frac{P(\\text{mua} \\cap \\text{mobile})}{P(\\text{mobile})} = \\frac{0{,}06}{0{,}4} = 0{,}15$.",
                                      "distractors":  {
                                                          "B":  "Nhân $0{,}06 \\times 0{,}4$ thay vì chia. Xác suất có điều kiện là **chia** xác suất giao cho xác suất của điều kiện.",
                                                          "C":  "Đây là xác suất giao $P(\\text{mua} \\cap \\text{mobile})$ trên toàn bộ phiên; chưa thu hẹp không gian mẫu về nhóm mobile.",
                                                          "D":  "Tính $0{,}4 - 0{,}06$: đó là tỉ lệ phiên mobile **không** mua trên toàn bộ phiên, không phải xác suất có điều kiện."
                                                      },
                                      "tags":  [
                                                   "xác suất có điều kiện",
                                                   "A/B test"
                                               ]
                                  }
                              ]
    },
    {
        "badge":  "CĐ-04 · Đầy đủ 5 Trọng tâm thi",
        "id":  "cd04",
        "sections":  [
                         {
                             "whyInAI":  "Khi phân tích độ trễ website hoặc thu nhập khách hàng, dùng số trung bình (Mean) thường dẫn đến những quyết định sai lầm chết người.",
                             "title":  "1. Thống kê mô tả: Khi nào Mean bị Bill Gates đánh lừa?",
                             "analogy":  "Tưởng tượng trong một quán trà đá có 10 sinh viên, mỗi bạn thu nhập 3 triệu/tháng.\n- Trung bình (Mean) = 3 triệu.\n- Trung vị (Median - người đứng giữa khi xếp hàng) = 3 triệu.\nĐột nhiên, tỉ phú Bill Gates bước vào quán uống trà đá (thu nhập 100 tỷ/tháng):\n- Thu nhập trung bình (Mean) lúc này vọt lên gần 10 TỶ/THÁNG! Một con số hoàn toàn ảo và vô nghĩa với 10 bạn sinh viên.\n- Nhưng Trung vị (Median) vẫn là 3 TRIỆU!\nVì vậy, với dữ liệu có phần tử ngoại lai (outliers) hoặc bị lệch (skewed) như độ trễ hệ thống hay tiền lương, MEDIAN luôn đáng tin hơn MEAN!",
                             "formulaBox":  "• Tứ phân vị IQR: $IQR = Q_3 - Q_1$\n• Phát hiện Outlier (Hộp Boxplot):\n  - Giá trị nhỏ bất thường: $\u003c Q_1 - 1.5 \\times IQR$\n  - Giá trị lớn bất thường: $\u003e Q_3 + 1.5 \\times IQR$\n• Phương sai mẫu (Sample Variance): Phải chia cho $n - 1$ (ddof = 1) để không bị ước lượng lệch.",
                             "quickTip":  "Đề thi hỏi: \u0027Dữ liệu phân phối lệch phải và có nhiều outlier, chỉ số nào đại diện tốt nhất?\u0027. Đáp án: Trung vị (Median) và IQR, tuyệt đối không chọn Mean hay Độ lệch chuẩn!"
                         },
                         {
                             "whyInAI":  "Bạn khảo sát 100 người dùng và thấy tỷ lệ thích giao diện mới là 60%. Con số 60% đó có đại diện đúng cho 1 triệu người dùng ngoài kia không?",
                             "title":  "2. Sai số chuẩn (SE) \u0026 Khoảng tin cậy 95%",
                             "analogy":  "Nếu bạn chỉ hỏi 5 người, kết quả có thể rất hên xui. Nhưng nếu bạn hỏi 10.000 người, kết quả trung bình mẫu sẽ cực kỳ sát với thực tế toàn dân.\nĐịnh lý giới hạn trung tâm (CLT) khẳng định: Càng khảo sát nhiều người ($ càng lớn), sai số càng nhỏ lại theo tỉ lệ nghịch với CĂN BẬC HAI của $.",
                             "formulaBox":  "• Sai số chuẩn (Standard Error):\n$$SE = \\frac{s}{\\sqrt{n}}$$\n• Khoảng tin cậy 95% (95% Confidence Interval):\n$$\\text{CI}_{95\\%} = \\bar{X} \\pm 1.96 \\cdot SE = \\bar{X} \\pm 1.96 \\cdot \\frac{s}{\\sqrt{n}}$$\n(Trong 100 lần khảo sát lặp lại, có khoảng 95 lần khoảng này chứa đúng giá trị trung bình thật của tổng thể).",
                             "quickTip":  "Muốn giảm sai số chuẩn đi 2 lần, bạn phải tăng cỡ mẫu lên MẤY LẦN? Vì có căn n ở mẫu số, nên bạn phải tăng cỡ mẫu lên 2^2 = 4 LẦN!"
                         },
                         {
                             "whyInAI":  "Làm sao biết tính năng AI mới thực sự hiệu quả hay chỉ là ngẫu nhiên may mắn?",
                             "title":  "3. Kiểm định giả thuyết, p-value \u0026 Sai lầm Loại I/II",
                             "analogy":  "Xem kiểm định giả thuyết như một phiên tòa xét xử:\n• Giả thuyết H0 (Mặc định vô tội): Tính năng AI mới KHÔNG CÓ TÁC DỤNG GÌ (hiệu quả = 0).\n• p-value: Xác suất quan sát thấy kết quả tốt như thế này NẾU TÍNH NĂNG ĐÓ THỰC SỰ VÔ HẠI.\n  - Nếu $p \u003c 0.05$: Khó có chuyện may mắn ngẫu nhiên như thế $\\to$ Tòa tuyên án: BÁC BỎ H0, công nhận tính năng AI có hiệu quả!\n• Sai lầm Loại I ($\\alpha$): Tuyên án tử hình người vô tội (Bác bỏ nhầm H0 đúng - Báo động giả).\n• Sai lầm Loại II ($\\beta$): Thả tự do cho kẻ giết người (Bỏ sót H0 sai - Bỏ lọt tội phạm).",
                             "formulaBox":  "• Statistical Power (Lực kiểm định) = $1 - \\beta$ (thường thiết lập ở mức 80%).\n• Mức ý nghĩa $\\alpha$: thường chọn 0.05 (5%).",
                             "quickTip":  "p-value KHÔNG PHẢI là xác suất H0 đúng. Nhớ câu thần chú: \u0027p-value nhỏ hơn alpha thì bác bỏ H0\u0027!"
                         },
                         {
                             "whyInAI":  "Hàng trăm cuộc A/B test bị kết luận sai lệch nghiêm trọng chỉ vì kỹ sư không kiểm tra hiện tượng SRM.",
                             "title":  "4. Thiết kế A/B Testing \u0026 Bẫy SRM (Sample Ratio Mismatch)",
                             "analogy":  "Bạn chia 100.000 người dùng làm 2 nửa 50/50: Nhóm A dùng giao diện cũ, Nhóm B dùng giao diện AI mới.\nSau 1 tuần, Nhóm A nhận được 50.000 user, nhưng Nhóm B chỉ nhận được 30.000 user! Tỷ lệ thực tế là 50/30 chứ không phải 50/50!\nĐó chính là SRM (Sample Ratio Mismatch). 20.000 user của nhóm B đã biến đi đâu? Do app bị crash khi gặp tính năng AI nên user văng ra ngoài! Kết quả conversion rate tăng là do chỉ những người máy xịn mới vào được! Toàn bộ kết quả A/B Test vô giá trị!",
                             "formulaBox":  "• SRM Check: Dùng kiểm định Chi-Square so sánh tỉ lệ traffic thực tế với tỉ lệ kỳ vọng (50/50). Nếu $p \u003c 0.001 \\to$ Bị SRM!\n• Hành động đúng khi bị SRM: DỪNG LẠI NGAY, không đọc kết quả conversion rate, tìm kỹ sư sửa bug điều hướng traffic!\n• Bẫy nhìn trộm (Peeking Problem): Kiểm tra p-value mỗi ngày và dừng test ngay khi p \u003c 0.05 làm tăng vọt Sai lầm Loại I. Phải đợi đủ cỡ mẫu mới được đọc p-value!",
                             "quickTip":  "Gặp câu hỏi A/B test mà tỷ lệ phân chia thực tế lệch xa tỷ lệ thiết kế -\u003e Kết luận ngay: Bị SRM, kết quả không đáng tin cậy!"
                         },
                         {
                             "whyInAI":  "Tương quan không có nghĩa là nhân quả (Correlation does not imply Causation). Dữ liệu gộp có thể đánh lừa bạn hoàn toàn.",
                             "title":  "5. Tương quan, Nhân quả \u0026 Nghịch lý Simpson",
                             "analogy":  "Tưởng tượng cuộc thử nghiệm thuốc mới:\n- Xem xét trên từng nhóm: Ở cả nhóm Nam và nhóm Nữ, người uống thuốc mới đều có tỷ lệ khỏi bệnh cao hơn thuốc cũ.\n- Nhưng khi gộp chung toàn bộ lại: Thuốc mới lại có tỷ lệ khỏi bệnh THẤP HƠN thuốc cũ!\nVì sao nghịch lý này xảy ra? Vì có một BIẾN GÂY NHIỄU (Confounder): Nữ có khả năng tự khỏi bệnh cao hơn Nam, và nhóm thử thuốc cũ lại toàn là Nữ! Khi gộp chung lại, biến giới tính đã làm méo mó toàn bộ kết quả. Đó chính là NGHỊCH LÝ SIMPSON.",
                             "formulaBox":  "• Nghịch lý Simpson xuất hiện khi: Một xu hướng xuất hiện trong các phân nhóm nhỏ nhưng bị ĐẢO NGƯỢC khi gộp chung dữ liệu.\n• Giải pháp: Phải phân tầng dữ liệu (Stratified analysis) theo các biến gây nhiễu tiềm năng, không được chỉ nhìn vào số liệu gộp!",
                             "quickTip":  "Đề bài cho: \u0027Xu hướng ở từng phân nhóm đảo ngược hoàn toàn khi gộp chung lại\u0027 -\u003e Chọn ngay: Nghịch lý Simpson (Simpson\u0027s Paradox)!"
                         }
                     ],
        "title":  "Thống kê thực chiến \u0026 Kiểm định A/B (Statistics \u0026 A/B Testing)",
        "examId":  "T04",
        "group":  "toan",
        "cheatSheet":  [
                           "Outlier = Ngoài [Q1 - 1.5*IQR, Q3 + 1.5*IQR]",
                           "Sai số chuẩn: SE = s / sqrt(n)",
                           "Khoảng tin cậy 95%: Mean +- 1.96 * SE",
                           "SRM: Traffic thực tế lệch traffic thiết kế -\u003e Hủy kết quả A/B test",
                           "Nghịch lý Simpson: Xu hướng bị đảo ngược khi gộp dữ liệu do biến gây nhiễu"
                       ],
        "code":  "CĐ-04",
        "summary":  "Thống kê mô tả (Bill Gates vào quán trà đá), CLT, khoảng tin cậy 95%, kiểm định giả thuyết p-value, thiết kế A/B Test (SRM, Peeking) và Nghịch lý Simpson.",
        "groupName":  "Nhóm 1: Toán \u0026 Tư duy Định lượng",
        "traps":  [
                      {
                          "explanation":  "Nếu có SRM, mọi kết luận về conversion rate đều vô giá trị do mẫu đã bị thiên lệch ngay từ khâu điều phối traffic.",
                          "trap":  "Bỏ qua kiểm tra SRM trước khi xem kết quả A/B Test"
                      }
                  ],
        "duration":  "45 phút học sâu",
        "learningGoals":  [
                              "Hiểu vì sao Median tốt hơn Mean qua câu chuyện Bill Gates vào quán trà đá",
                              "Tính sai số chuẩn SE và khoảng tin cậy 95% bằng định lý giới hạn trung tâm",
                              "Hiểu đúng bản chất p-value và phân biệt sai lầm Loại I vs Loại II",
                              "Phát hiện lỗi rò rỉ traffic SRM (Sample Ratio Mismatch) trong A/B Testing",
                              "Giải mã Nghịch lý Simpson và biến gây nhiễu trong phân tích dữ liệu"
                          ],
        "practiceQuestions":  [
                                  {
                                      "id":  "T04-A01",
                                      "prompt":  "Đội backend đo độ trễ API `POST /orders` (gọi khi người dùng bấm nút **Đặt hàng**) của 9 yêu cầu, đơn vị ms:\n\n180, 150, 210, 160, 2900, 170, 190, 200, 165\n\nTrung vị và trung bình cộng của mẫu này lần lượt là bao nhiêu?",
                                      "type":  "mcq",
                                      "options":  [
                                                      {
                                                          "key":  "A",
                                                          "text":  "Trung vị $2900$ ms; trung bình $\\approx 480{,}6$ ms"
                                                      },
                                                      {
                                                          "key":  "B",
                                                          "text":  "Trung vị $180$ ms; trung bình $\\approx 480{,}6$ ms"
                                                      },
                                                      {
                                                          "key":  "C",
                                                          "text":  "Trung vị $480{,}6$ ms; trung bình $180$ ms"
                                                      },
                                                      {
                                                          "key":  "D",
                                                          "text":  "Trung vị $175$ ms; trung bình $\\approx 178{,}1$ ms"
                                                      }
                                                  ],
                                      "answer":  "B",
                                      "explanation":  "Sắp xếp: 150, 160, 165, 170, **180**, 190, 200, 210, 2900; $n = 9$ lẻ nên trung vị là phần tử thứ $(n+1)/2 = 5$, bằng 180 ms. Trung bình $\\bar{x} = 4325/9 \\approx 480{,}6$ ms, bị một yêu cầu 2900 ms kéo lên gần gấp 3 trung vị.",
                                      "distractors":  {
                                                          "A":  "Lấy phần tử ở giữa danh sách **chưa sắp xếp** (vị trí thứ 5 là 2900). Trung vị phải tính sau khi sắp xếp.",
                                                          "C":  "Đảo vai trò hai đại lượng: trung bình mới là con số bị ngoại lai kéo lên, trung vị thì không.",
                                                          "D":  "Tự ý loại 2900 ms rồi mới tính. Đề hỏi thống kê của cả mẫu 9 yêu cầu; loại ngoại lai phải có lý do và phải báo cáo."
                                                      },
                                      "tags":  [
                                                   "trung vị",
                                                   "trung bình",
                                                   "ngoại lai",
                                                   "độ trễ"
                                               ]
                                  },
                                  {
                                      "id":  "T04-A02",
                                      "prompt":  "Dashboard trang thanh toán ghi: **p95 độ trễ của nút Đặt hàng = 820 ms** trong ngày hôm qua (tính trên toàn bộ yêu cầu). Phát biểu nào diễn giải đúng con số này?",
                                      "type":  "mcq",
                                      "options":  [
                                                      {
                                                          "key":  "A",
                                                          "text":  "Trung bình độ trễ của 95% yêu cầu nhanh nhất là 820 ms"
                                                      },
                                                      {
                                                          "key":  "B",
                                                          "text":  "95% người dùng phải chờ đúng 820 ms mỗi lần bấm nút"
                                                      },
                                                      {
                                                          "key":  "C",
                                                          "text":  "Khoảng 95% yêu cầu xong trong tối đa 820 ms, 5% còn lại chậm hơn"
                                                      },
                                                      {
                                                          "key":  "D",
                                                          "text":  "Khoảng 95% yêu cầu chậm hơn 820 ms, chỉ 5% yêu cầu nhanh hơn mức đó"
                                                      }
                                                  ],
                                      "answer":  "C",
                                      "explanation":  "p95 là phân vị thứ 95: giá trị $q_{0{,}95}$ sao cho khoảng 95% quan sát $\\le q_{0{,}95}$. Nó mô tả đuôi chậm (5% yêu cầu tệ nhất) mà trung bình thường che mất.",
                                      "distractors":  {
                                                          "A":  "Nhầm phân vị với trung bình cắt (trimmed mean). p95 là một ngưỡng, không phải trung bình của nhóm nào.",
                                                          "B":  "p95 không nói ai cũng chờ đúng 820 ms; đa số yêu cầu nhanh hơn nhiều. Ngoài ra p95 tính trên yêu cầu chứ không phải trên người dùng.",
                                                          "D":  "Đảo chiều định nghĩa: 95% là phần **không vượt** ngưỡng, 5% là phần vượt."
                                                      },
                                      "tags":  [
                                                   "phân vị",
                                                   "p95",
                                                   "độ trễ"
                                               ]
                                  },
                                  {
                                      "id":  "T04-A03",
                                      "prompt":  "Trong thử nghiệm nút Đặt hàng, nhánh B có $n$ người dùng và tỉ lệ chuyển đổi quan sát là $\\hat{p}$. **Sai số chuẩn** (standard error) của $\\hat{p}$ được ước lượng bằng công thức nào?",
                                      "type":  "mcq",
                                      "options":  [
                                                      {
                                                          "key":  "A",
                                                          "text":  "$\\hat{p}(1-\\hat{p})/n$"
                                                      },
                                                      {
                                                          "key":  "B",
                                                          "text":  "$\\sqrt{\\hat{p}(1-\\hat{p})}$"
                                                      },
                                                      {
                                                          "key":  "C",
                                                          "text":  "$\\sqrt{n\\,\\hat{p}(1-\\hat{p})}$"
                                                      },
                                                      {
                                                          "key":  "D",
                                                          "text":  "$\\sqrt{\\hat{p}(1-\\hat{p})/n}$"
                                                      }
                                                  ],
                                      "answer":  "D",
                                      "explanation":  "$\\hat{p}$ là trung bình của $n$ biến Bernoulli nên $\\operatorname{Var}(\\hat{p}) = p(1-p)/n$ và $SE = \\sqrt{\\hat{p}(1-\\hat{p})/n}$; SE giảm theo $1/\\sqrt{n}$.",
                                      "distractors":  {
                                                          "A":  "Đây là **phương sai** của $\\hat{p}$; quên lấy căn bậc hai nên đơn vị và độ lớn đều sai.",
                                                          "B":  "Đây là độ lệch chuẩn của **một** quan sát Bernoulli, chưa chia cho $n$; độ chính xác của $\\hat{p}$ không tăng theo cỡ mẫu.",
                                                          "C":  "Đây là độ lệch chuẩn của **số lượt** chuyển đổi $X = n\\hat{p}$, không phải của tỉ lệ $\\hat{p}$."
                                                      },
                                      "tags":  [
                                                   "sai số chuẩn",
                                                   "tỉ lệ",
                                                   "Bernoulli"
                                               ]
                                  }
                              ]
    },
    {
        "badge":  "CĐ-05 · Đầy đủ 5 Trọng tâm thi",
        "id":  "cd05",
        "sections":  [
                         {
                             "whyInAI":  "Hầu hết các bug ngớ ngẩn làm sai lệch kết quả huấn luyện mô hình đều xuất phát từ việc sửa dữ liệu mà không biết nó bị đổi ở chỗ khác.",
                             "title":  "1. Bộ nhớ: Chiếc hộp giấy (Mutable) vs Tờ tiền (Immutable)",
                             "analogy":  "• Immutable (Bất biến - int, float, str, tuple, frozenset): Giống như TỜ TIỀN POLYMER 500k. Bạn không thể cạo số 500k đi để sửa thành 200k. Nếu bạn muốn số 200k, ngân hàng phải in ra một TỜ TIỀN MỚI ở vị trí khác trong ví!\n• Mutable (Khả biến - list, dict, set): Giống như CHIẾC HỘP GIẤY. Bạn có thể mở nắp hộp, nhét thêm đồ vào, vứt bớt đồ ra. Chiếc hộp giấy vẫn nằm nguyên ở góc phòng đó (địa chỉ bộ nhớ id() không hề đổi).",
                             "formulaBox":  "• Gán biến (Aliasing):\na = [1, 2, 3]\nb = a  # b CHỈ LÀ BIỆT DANH MỚI CỦA a, cả hai cùng trỏ vào 1 chiếc hộp!\nb.append(4)\nprint(a) # [1, 2, 3, 4] -\u003e a cũng bị thay đổi theo!\n\n• Shallow Copy vs Deep Copy:\n- b = a.copy(): Chỉ sao chép lớp ngoài. Nếu bên trong list a có chứa list con khác thì list con vẫn bị trỏ chung!\n- import copy; b = copy.deepcopy(a): Sao chép đệ quy độc lập 100% từ trong ra ngoài.",
                             "quickTip":  "Đề bài cho b = a rồi thao tác trên b, sau đó hỏi print(a)? 99% đề thi đang gài bẫy bạn! Hãy nhớ nếu a là List hay Dict thì sửa b chính là sửa a!"
                         },
                         {
                             "whyInAI":  "Đây là câu hỏi xuất hiện với tần suất cực cao trong các bài test Python cho kỹ sư AI.",
                             "title":  "2. Bẫy Mutable Default Argument: Chiếc hộp rác dùng chung",
                             "analogy":  "Tưởng tượng trong một khu chung cư có quy định: \u0027Mỗi cư dân khi vào sảnh nếu không mang túi rác riêng thì sẽ được dùng túi mặc định\u0027. Nhưng người quản lý lại đặt đúng 1 chiếc túi duy nhất ở sảnh!\nCư dân A đến, vứt vỏ chuối vào túi mặc định. Cư dân B đến sau, mở túi mặc định ra thì thấy ngay vỏ chuối của cư dân A!\nTrong Python, tham số mặc định của hàm ĐƯỢC TẠO DUY NHẤT 1 LẦN khi load code, không phải mỗi lần gọi hàm!",
                             "formulaBox":  "# ĐOẠN CODE BỊ LỖI KINH ĐIỂN:\ndef add_to_list(val, my_list=[]):\n    my_list.append(val)\n    return my_list\n\nprint(add_to_list(\"A\")) # [\"A\"]\nprint(add_to_list(\"B\")) # [\"A\", \"B\"] -\u003e my_list bị giữ lại từ lần gọi trước!\n\n# CÁCH SỬA CHUẨN KỸ SƯ AI:\ndef add_to_list(val, my_list=None):\n    if my_list is None:\n        my_list = [] # Mỗi lần gọi sẽ tạo một chiếc hộp mới tinh!\n    my_list.append(val)\n    return my_list",
                             "quickTip":  "Thấy hàm có tham số mặc định dạng lst=[] hoặc d={} -\u003e Lập tức cảnh giác! Nó sẽ giữ lại dữ liệu của các lần gọi hàm trước đó."
                         },
                         {
                             "whyInAI":  "Decorators dùng khắp nơi trong AI: đo thời gian chạy hàm (@timeit), ghi log (@logger), kiểm tra quyền API (@auth).",
                             "title":  "3. Scope LEGB, Closures \u0026 Decorators",
                             "analogy":  "• Quy tắc LEGB: Khi bạn tìm chìa khóa, bạn tìm trong Túi quần trước (Local) -\u003e rồi tìm trong Phòng mình (Enclosing) -\u003e rồi tìm cả Căn nhà (Global) -\u003e cuối cùng mới ra Siêu thị hỏi mua (Built-in).\n• Closure (Bọc biến): Một hàm bên trong vẫn \u0027nhớ\u0027 giá trị các biến của hàm cha bên ngoài ngay cả khi hàm cha đã chạy xong và biến mất khỏi RAM!\n• Decorator: Giống như bọc một chiếc ốp lưng bảo vệ cho điện thoại. Bạn không cần mổ xẻ thay đổi linh kiện bên trong máy, mà vẫn thêm được tính năng chống nước hay hoa văn bên ngoài.",
                             "formulaBox":  "def my_decorator(func):\n    def wrapper(*args, **kwargs):\n        print(\"Trước khi chạy hàm...\")\n        result = func(*args, **kwargs)\n        print(\"Sau khi chạy hàm!\")\n        return result\n    return wrapper\n\n@my_decorator\ndef train_model():\n    print(\"Mô hình đang học...\")",
                             "quickTip":  "Muốn sửa đổi biến của hàm cha bên ngoài trong hàm lồng nhau, dùng từ khóa \nonlocal. Muốn sửa biến toàn cục, dùng từ khóa global."
                         },
                         {
                             "whyInAI":  "Một file dữ liệu huấn luyện nặng 50GB, trong khi RAM máy tính chỉ có 16GB. Nếu dùng open().readlines() bạn sẽ bị tràn RAM (OOM) sập máy ngay lập tức!",
                             "title":  "4. Generator \u0026 yield: Uống nước bằng ống hút vs Ôm cả thùng",
                             "analogy":  "• List thông thường: Ôm cả thùng nước 50 lít về nhà rồi mới uống. Nếu nhà chật (RAM ít) thì không chứa nổi.\n• Generator (yield): Dùng chiếc ống hút nối thẳng vào nguồn nước. Mỗi lần bạn hút một ngụm (\next()), máy tính chỉ sinh ra đúng 1 dòng dữ liệu đó, dùng xong vứt đi rồi mới sinh dòng tiếp theo. Tiêu tốn gần như 0 MB RAM!",
                             "formulaBox":  "# Generator đọc từng dòng không sợ tràn RAM:\ndef read_large_file(file_path):\n    with open(file_path, \"r\") as f:\n        for line in f:\n            yield line.strip() # Tạm dừng và trả về 1 dòng duy nhất!\n\ngen = read_large_file(\"huge_data.csv\")\nrow1 = next(gen) # Lấy dòng đầu tiên",
                             "quickTip":  "Hàm có chữ yield thì KHÔNG BAO GIỜ trả về kết quả ngay, mà trả về một Generator Object để duyệt tuần tự!"
                         },
                         {
                             "whyInAI":  "Viết code AI chuyên nghiệp theo chuẩn Google Engineering Practices.",
                             "title":  "5. Dataclass, Magic Methods \u0026 Type Hints",
                             "analogy":  "Thay vì viết các class thông thường với hàng chục dòng __init__, self.a = a, @dataclass tự động sinh ra toàn bộ các hàm so sánh, in ra màn hình và khởi tạo chỉ trong 1 dòng.",
                             "formulaBox":  "from dataclasses import dataclass\nfrom typing import Optional\n\n@dataclass(frozen=True) # frozen=True biến đối tượng thành bất biến (Immutable), hashable!\nclass ModelConfig:\n    model_name: str\n    learning_rate: float = 0.001\n    epochs: int = 10\n    batch_size: Optional[int] = 32",
                             "quickTip":  "@dataclass(frozen=True) giúp biến object thành đối tượng bất biến, có thể dùng làm Key trong Dictionary hoặc nhét vào Set!"
                         }
                     ],
        "title":  "Lập trình Python chuyên sâu (Core Python \u0026 Memory)",
        "examId":  "T05",
        "group":  "code",
        "cheatSheet":  [
                           "Mutable: list, dict, set | Immutable: int, str, tuple, frozenset",
                           "Mặc định cho tham số: arg=None rồi gán arg=[] trong thân hàm",
                           "LEGB: Local -\u003e Enclosing -\u003e Global -\u003e Built-in",
                           "yield: Tạo generator tiết kiệm RAM cho dữ liệu lớn",
                           "b = a: Alias | b = a.copy(): Shallow | copy.deepcopy(a): Deep"
                       ],
        "code":  "CĐ-05",
        "summary":  "Hiểu sâu bộ nhớ Python: Hộp giấy (Mutable) vs Tờ tiền (Immutable), Aliasing, bẫy Mutable Default Argument, Scope LEGB, Closures, Decorators, Generator và Dataclass.",
        "groupName":  "Nhóm 2: Lập trình \u0026 Kỹ thuật Dữ liệu",
        "traps":  [
                      {
                          "explanation":  "b = a chỉ tạo thêm một con trỏ cùng trỏ vào một vùng nhớ list. Sửa b thì a cũng bị thay đổi.",
                          "trap":  "Gán biến b = a trên List rồi sửa b"
                      }
                  ],
        "duration":  "45 phút học sâu",
        "learningGoals":  [
                              "Phân biệt Mutable vs Immutable qua hình tượng hộp giấy và tờ polymer",
                              "Bắt bài bẫy kinh điển Mutable Default Argument trong 3 giây",
                              "Hiểu bản chất Aliasing (b = a) vs Shallow copy vs Deep copy",
                              "Nắm vững thứ tự tìm kiếm biến LEGB, Closure và Decorator",
                              "Sử dụng Generator yield để xử lý file dữ liệu khổng lồ không tốn RAM"
                          ],
        "practiceQuestions":  [
                                  {
                                      "id":  "T05-A01",
                                      "prompt":  "Bạn muốn đếm số lần xuất hiện của từng cặp (endpoint, mã trạng thái) trong log truy cập bằng một `dict`. Giá trị nào dưới đây dùng được làm **khóa** của `dict`?",
                                      "type":  "mcq",
                                      "options":  [
                                                      {
                                                          "key":  "A",
                                                          "text":  "`[\"/api/orders\", 503]`"
                                                      },
                                                      {
                                                          "key":  "B",
                                                          "text":  "`(\"/api/orders\", 503)`"
                                                      },
                                                      {
                                                          "key":  "C",
                                                          "text":  "`{\"/api/orders\": 503}`"
                                                      },
                                                      {
                                                          "key":  "D",
                                                          "text":  "`{\"/api/orders\", 503}`"
                                                      }
                                                  ],
                                      "answer":  "B",
                                      "explanation":  "Khóa `dict` phải hashable: giá trị băm không đổi trong suốt vòng đời. `tuple` gồm các phần tử bất biến (chuỗi, số) thì hashable; `list`, `dict`, `set` thì không.",
                                      "distractors":  {
                                                          "A":  "`list` là kiểu khả biến nên không hashable; dùng làm khóa sẽ báo `TypeError: unhashable type: \u0027list\u0027`.",
                                                          "C":  "`dict` cũng khả biến, không có `__hash__`, nên không làm khóa được.",
                                                          "D":  "`set` khả biến nên không hashable; muốn dùng tập hợp làm khóa phải đổi sang `frozenset`."
                                                      },
                                      "tags":  [
                                                   "dict",
                                                   "hashable",
                                                   "tuple"
                                               ]
                                  },
                                  {
                                      "id":  "T05-A02",
                                      "prompt":  "Lệnh sau in ra gì?\n\n```python\nprint(7 // 2, 7 / 2, -7 // 2)\n```",
                                      "type":  "mcq",
                                      "options":  [
                                                      {
                                                          "key":  "A",
                                                          "text":  "`3 3.5 -3`"
                                                      },
                                                      {
                                                          "key":  "B",
                                                          "text":  "`3.5 3.5 -3.5`"
                                                      },
                                                      {
                                                          "key":  "C",
                                                          "text":  "`3 3.5 -4`"
                                                      },
                                                      {
                                                          "key":  "D",
                                                          "text":  "`3 3 -4`"
                                                      }
                                                  ],
                                      "answer":  "C",
                                      "explanation":  "`//` là floor division: $7 /\\!/ 2 = \\lfloor 3{,}5 \\rfloor = 3$, $-7 /\\!/ 2 = \\lfloor -3{,}5 \\rfloor = -4$. Toán tử `/` luôn cho `float`: $7/2 = 3{,}5$.",
                                      "distractors":  {
                                                          "A":  "Tưởng `//` cắt bỏ phần thập phân (làm tròn về 0) như C/Java; Python làm tròn **xuống** về $-\\infty$ nên $\\lfloor -3{,}5 \\rfloor = -4$.",
                                                          "B":  "Nhầm `//` với phép chia thường `/`; `//` là chia lấy phần nguyên (floor division).",
                                                          "D":  "Tưởng `/` giữa hai số nguyên cho số nguyên như Python 2; trong Python 3, `/` luôn trả `float`."
                                                      },
                                      "tags":  [
                                                   "số học",
                                                   "floor division",
                                                   "int/float"
                                               ]
                                  },
                                  {
                                      "id":  "T05-A03",
                                      "prompt":  "Dashboard giám sát API in tổng số request và tỉ lệ lỗi bằng f-string:\n\n```python\nn = 1234567\nr = 0.0456\nprint(f\"{n:,} | {r:.1%}\")\n```\n\nKết quả in ra là gì?",
                                      "type":  "mcq",
                                      "options":  [
                                                      {
                                                          "key":  "A",
                                                          "text":  "`1,234,567 | 4.6%`"
                                                      },
                                                      {
                                                          "key":  "B",
                                                          "text":  "`1.234.567 | 4.6%`"
                                                      },
                                                      {
                                                          "key":  "C",
                                                          "text":  "`1,234,567 | 0.0%`"
                                                      },
                                                      {
                                                          "key":  "D",
                                                          "text":  "`1,234,567 | 4.5%`"
                                                      }
                                                  ],
                                      "answer":  "A",
                                      "explanation":  "`:,` chèn dấu phẩy phân cách hàng nghìn; `:.1%` tính $0{,}0456 \\times 100 = 4{,}56$ rồi làm tròn 1 chữ số thập phân thành `4.6` và thêm `%`.",
                                      "distractors":  {
                                                          "B":  "Tưởng định dạng theo kiểu Việt Nam; tuỳ chọn `,` trong format spec luôn chèn dấu phẩy làm dấu phân cách hàng nghìn, không phụ thuộc locale.",
                                                          "C":  "Tưởng `%` chỉ gắn thêm ký hiệu phần trăm; thực ra kiểu `%` nhân giá trị với 100 rồi mới làm tròn.",
                                                          "D":  "Tưởng định dạng cắt bớt chữ số; `.1%` **làm tròn** $4{,}56$ thành $4{,}6$."
                                                      },
                                      "tags":  [
                                                   "f-string",
                                                   "format spec",
                                                   "chuỗi"
                                               ]
                                  }
                              ]
    },
    {
        "badge":  "CĐ-06 · Đầy đủ 4 Trọng tâm thi",
        "id":  "cd06",
        "sections":  [
                         {
                             "whyInAI":  "Chọn sai dòng hoặc sai cột khi tạo nhãn (labels) huấn luyện sẽ biến toàn bộ mô hình thành rác.",
                             "title":  "1. Truy xuất dữ liệu: .loc[] vs .iloc[]",
                             "analogy":  "• .loc[] (Label - Tên gọi): Gọi người theo TÊN hoặc SỐ CMND. Cắt bánh: df.loc[\u0027A\u0027:\u0027C\u0027] sẽ lấy CẢ A, B VÀ C (bao gồm cả điểm cuối).\n• .iloc[] (Integer Position - Số thứ tự): Gọi người theo SỐ THỨ TỰ XẾP HÀNG (từ 0). Cắt bánh: df.iloc[0:3] chỉ lấy người số 0, 1, 2 (KHÔNG LẤY NGƯỜI SỐ 3, giống hệt quy tắc lát cắt \range() của Python).",
                             "formulaBox":  "# Giả sử DataFrame có Index là các số: 10, 20, 30\ndf = pd.DataFrame({\"val\": [1, 2, 3]}, index=[10, 20, 30])\n\ndf.loc[10]   # Tìm dòng có Nhãn tên là 10 -\u003e Trả về dòng đầu tiên (val=1)\ndf.iloc[0]   # Tìm dòng ở Vị trí thứ 0 -\u003e Trả về dòng đầu tiên (val=1)\ndf.iloc[10]  # LỖI IndexError vì chỉ có 3 dòng, không có vị trí thứ 10!",
                             "quickTip":  ".loc[] bao gồm cả cận cuối. .iloc[] bỏ cận cuối. Nhớ chữ \u0027i\u0027 trong iloc là \u0027integer\u0027 (chỉ số nguyên)."
                         },
                         {
                             "whyInAI":  "Tạo các đặc trưng tổng hợp (như tổng chi tiêu 3 tháng qua, số lần giao dịch) là cốt lõi của Feature Engineering.",
                             "title":  "2. Biến đổi dữ liệu: GroupBy, Agg \u0026 Pivot Table",
                             "analogy":  "• Groupby: Gom các học sinh cùng lớp vào từng phòng riêng.\n• Agg (Aggregate): Cho phép bạn đặt hàng loạt câu hỏi khác nhau cho từng phòng trong 1 câu lệnh duy nhất (ví dụ: lớp này điểm Toán cao nhất là mấy, điểm Văn trung bình là bao nhiêu?).\n• Pivot Table: Xoay bảng từ dạng dọc dài ngoằng sang dạng ngang để so sánh chéo 2 chiều.",
                             "formulaBox":  "# GroupBy và Agg đa cột cực kỳ thanh lịch:\nsummary = df.groupby(\"customer_id\").agg(\n    total_spent=(\"amount\", \"sum\"),\n    avg_spent=(\"amount\", \"mean\"),\n    order_count=(\"order_id\", \"count\")\n).reset_index()\n\n# Pivot Table:\npivot = df.pivot_table(index=\"city\", columns=\"product_category\", values=\"revenue\", aggfunc=\"sum\", fill_value=0)",
                             "quickTip":  "Sau khi groupby().agg(), đừng quên gọi .reset_index() để đưa các cột nhóm trở lại thành cột dữ liệu thông thường thay vì nằm ở Index!"
                         },
                         {
                             "whyInAI":  "Một lỗi kinh điển của Data/AI Engineer là merge dữ liệu khiến bảng kết quả tăng vọt hàng triệu dòng mà không hay biết.",
                             "title":  "3. Merge trùng khóa: Bẫy bùng nổ doanh thu ảo",
                             "analogy":  "Bạn có 2 bảng:\n- Bảng Đơn hàng: Khách hàng \u0027A\u0027 có 3 đơn hàng.\n- Bảng Địa chỉ: Do nhân viên nhập liệu ẩu, khách hàng \u0027A\u0027 bị lưu trùng 2 dòng địa chỉ giống hệt nhau.\nKhi bạn thực hiện pd.merge(orders, customers, on=\u0027id\u0027):\nMỗi đơn hàng sẽ ghép với CẢ 2 DÒNG ĐỊA CHỈ $\\to$ 3 đơn hàng bị nhân đôi thành  \\times 2 = 6$ đơn hàng!\nKhi sếp bảo tính tổng doanh thu: Doanh thu của khách A bị gấp đôi sai sự thật!",
                             "formulaBox":  "• Quy tắc kích thước khi Merge:\nNếu khóa $K$ xuất hiện $m$ lần ở bảng trái và $n$ lần ở bảng phải, phép merge sẽ sinh ra $m \\times n$ dòng cho khóa đó!\n• Cách phòng chống: Luôn chạy `df_right[\"id\"].is_unique` hoặc `drop_duplicates(subset=[\"id\"])` trước khi merge!",
                             "quickTip":  "Trước khi merge 2 bảng, hãy luôn kiểm tra xem số dòng sau khi merge có bị tăng vọt bất thường không!"
                         },
                         {
                             "whyInAI":  "Tính toán đường trung bình động (Moving Average) và trích xuất đặc trưng thời gian.",
                             "title":  "4. Chuỗi thời gian \u0026 Cửa sổ trượt (Rolling Window)",
                             "analogy":  "• \rolling(3): Luôn cố định đếm đúng 3 dòng phía trước (bất kể khoảng cách thời gian giữa các dòng là 1 giây hay 10 ngày).\n• \rolling(\u00273D\u0027): Cửa sổ trượt theo THỜI GIAN THỰC TẾ 3 ngày. Nếu 3 ngày qua user không giao dịch thì cửa sổ chỉ có 1 dòng; nếu 3 ngày qua user giao dịch 100 lần thì cửa sổ có 100 dòng!\n• \resample(\u0027M\u0027): Gom dữ liệu theo tháng (tương tự GroupBy nhưng chuyên dụng cho trục thời gian DatetimeIndex).",
                             "formulaBox":  "df[\"date\"] = pd.to_datetime(df[\"date\"])\ndf = df.set_index(\"date\").sort_index()\n\n# Trung bình động 7 ngày thực tế:\ndf[\"ma_7d\"] = df[\"price\"].rolling(\"7D\").mean()\n\n# Gom doanh thu theo tuần:\nweekly_sales = df[\"price\"].resample(\"W\").sum()",
                             "quickTip":  "Để dùng \rolling(\u00273D\u0027) theo thời gian, Index của DataFrame BẮT BUỘC phải là DatetimeIndex và ĐÃ ĐƯỢC SẮP XẾP TĂNG DẦN (sort_index())!"
                         }
                     ],
        "title":  "Xử lý dữ liệu với pandas (Data Wrangling)",
        "examId":  "T06",
        "group":  "code",
        "cheatSheet":  [
                           "loc: Theo nhãn, LẤY cả điểm cuối | iloc: Theo số nguyên, BỎ điểm cuối",
                           "Merge trùng khóa sinh ra m * n dòng",
                           "rolling(3): Lấy đúng 3 dòng | rolling(\u00273D\u0027): Lấy các dòng trong 3 ngày",
                           "df.groupby().agg() kết hợp reset_index()"
                       ],
        "code":  "CĐ-06",
        "summary":  "Bản chất loc vs iloc (Gọi tên vs Số thứ tự), Groupby + Agg đa hàm, Merge trùng khóa bùng nổ dòng và xử lý chuỗi thời gian.",
        "groupName":  "Nhóm 2: Lập trình \u0026 Kỹ thuật Dữ liệu",
        "traps":  [
                      {
                          "explanation":  "apply() duyệt từng dòng như vòng lặp for. Luôn ưu tiên vectorization: df[\u0027A\u0027] + df[\u0027B\u0027].",
                          "trap":  "Lạm dụng df.apply() làm code chậm 100 lần"
                      }
                  ],
        "duration":  "45 phút học sâu",
        "learningGoals":  [
                              "Phân biệt rạch ròi quy tắc biên của .loc[] và .iloc[]",
                              "Làm chủ Groupby kết hợp Aggregate đa cột",
                              "Tránh bẫy bùng nổ dòng khi Merge hai bảng trùng khóa",
                              "Xử lý chuẩn xác chuỗi thời gian: resample, dt và rolling window thời gian (\u00273D\u0027) vs dòng (3)"
                          ],
        "practiceQuestions":  [
                                  {
                                      "id":  "T06-A01",
                                      "prompt":  "Bảng đơn hàng `df` có cột `gia` (nghìn đồng) và `tinh`. Biểu thức nào lọc đúng các đơn có giá **trên 1000** và ở tỉnh **HN**?",
                                      "type":  "mcq",
                                      "options":  [
                                                      {
                                                          "key":  "A",
                                                          "text":  "`df[df[\"gia\"] \u003e 1000 and df[\"tinh\"] == \"HN\"]`"
                                                      },
                                                      {
                                                          "key":  "B",
                                                          "text":  "`df[df[\"gia\"] \u003e 1000 \u0026 df[\"tinh\"] == \"HN\"]`"
                                                      },
                                                      {
                                                          "key":  "C",
                                                          "text":  "`df[(df[\"gia\"] \u003e 1000) \u0026 (df[\"tinh\"] == \"HN\")]`"
                                                      },
                                                      {
                                                          "key":  "D",
                                                          "text":  "`df[(df[\"gia\"] \u003e 1000) | (df[\"tinh\"] == \"HN\")]`"
                                                      }
                                                  ],
                                      "answer":  "C",
                                      "explanation":  "Mặt nạ boolean kết hợp bằng `\u0026` (và), `|` (hoặc), `~` (phủ định) theo từng phần tử; mỗi điều kiện phải nằm trong ngoặc vì `\u0026`, `|` ưu tiên cao hơn phép so sánh: `(a \u003e x) \u0026 (b == y)`.",
                                      "distractors":  {
                                                          "A":  "`and` của Python đòi một giá trị đúng/sai duy nhất cho cả Series nên pandas báo `ValueError: The truth value of a Series is ambiguous`; phải dùng `\u0026` để kết hợp theo từng phần tử.",
                                                          "B":  "Thiếu ngoặc: `\u0026` có độ ưu tiên cao hơn `\u003e` và `==`, nên Python tính `1000 \u0026 df[\"tinh\"]` trước và báo lỗi kiểu (TypeError).",
                                                          "D":  "`|` là phép HOẶC: kết quả lẫn cả đơn ngoài HN giá trên 1000 lẫn đơn ở HN giá thấp."
                                                      },
                                      "tags":  [
                                                   "boolean mask",
                                                   "toán tử \u0026",
                                                   "lọc dữ liệu"
                                               ]
                                  },
                                  {
                                      "id":  "T06-A02",
                                      "prompt":  "Phần mềm kế toán xuất file `don_hang.csv` theo kiểu châu Âu/Việt Nam: các cột ngăn bằng dấu chấm phẩy, số thập phân dùng dấu phẩy. Nội dung file:\n\n```text\nma;gia\nD1;1250,5\nD2;980,25\n```\n\nLệnh nào đọc được cột `gia` thành số thực `[1250.5, 980.25]`?",
                                      "type":  "mcq",
                                      "options":  [
                                                      {
                                                          "key":  "A",
                                                          "text":  "`pd.read_csv(\"don_hang.csv\", sep=\";\", decimal=\",\")`"
                                                      },
                                                      {
                                                          "key":  "B",
                                                          "text":  "`pd.read_csv(\"don_hang.csv\", sep=\",\", decimal=\";\")`"
                                                      },
                                                      {
                                                          "key":  "C",
                                                          "text":  "`pd.read_csv(\"don_hang.csv\", sep=\";\", thousands=\",\")`"
                                                      },
                                                      {
                                                          "key":  "D",
                                                          "text":  "`pd.read_csv(\"don_hang.csv\")`"
                                                      }
                                                  ],
                                      "answer":  "A",
                                      "explanation":  "`sep` chỉ ký tự ngăn cột, `decimal` chỉ ký tự thập phân. File dạng `;` và `,` cần `sep=\";\", decimal=\",\"`; còn `thousands` dùng cho dấu phân cách hàng nghìn.",
                                      "distractors":  {
                                                          "B":  "Đảo vai trò hai tham số: tách cột theo dấu phẩy nên dòng `D1;1250,5` bị cắt sai chỗ và không có cột `gia` nào cả.",
                                                          "C":  "`thousands` coi dấu phẩy là dấu phân cách hàng nghìn rồi bỏ đi, nên 1250,5 thành 12505 và 980,25 thành 98025: sai lệch lớn mà không hề báo lỗi.",
                                                          "D":  "Mặc định `sep` là dấu phẩy nên cả tiêu đề `ma;gia` thành một cột duy nhất; dữ liệu bị đọc sai cấu trúc."
                                                      },
                                      "tags":  [
                                                   "read_csv",
                                                   "sep",
                                                   "decimal"
                                               ]
                                  },
                                  {
                                      "id":  "T06-A03",
                                      "prompt":  "Bảng đặt phòng `bk` có cột `thanh_pho`. Biến Python `ks = \"Đà Lạt\"` chứa tên thành phố cần lọc. Cách gọi `query` nào trả về đúng các dòng có `thanh_pho` bằng giá trị của biến `ks`?",
                                      "type":  "mcq",
                                      "options":  [
                                                      {
                                                          "key":  "A",
                                                          "text":  "`bk.query(\"thanh_pho == ks\")`"
                                                      },
                                                      {
                                                          "key":  "B",
                                                          "text":  "`bk.query(f\"thanh_pho == {ks}\")`"
                                                      },
                                                      {
                                                          "key":  "C",
                                                          "text":  "`bk.query(\"thanh_pho == \u0027ks\u0027\")`"
                                                      },
                                                      {
                                                          "key":  "D",
                                                          "text":  "`bk.query(\"thanh_pho == @ks\")`"
                                                      }
                                                  ],
                                      "answer":  "D",
                                      "explanation":  "Trong `DataFrame.query`, tên trần là tên cột, còn `@ten_bien` tham chiếu biến Python ở phạm vi hiện tại, ví dụ `bk.query(\"thanh_pho == @ks\")`.",
                                      "distractors":  {
                                                          "A":  "Trong chuỗi `query`, tên không có `@` được hiểu là tên cột; bảng không có cột `ks` nên pandas báo `UndefinedVariableError`.",
                                                          "B":  "f-string chèn chữ Đà Lạt mà không có dấu nháy, biểu thức thành `thanh_pho == Đà Lạt` sai cú pháp (SyntaxError).",
                                                          "C":  "Dấu nháy biến `ks` thành chuỗi hằng \u0027ks\u0027; không báo lỗi nhưng trả về bảng rỗng vì không có thành phố nào tên là ks."
                                                      },
                                      "tags":  [
                                                   "query",
                                                   "biến cục bộ @"
                                               ]
                                  }
                              ]
    },
    {
        "badge":  "CĐ-07 · Đầy đủ 4 Trọng tâm thi",
        "id":  "cd07",
        "sections":  [
                         {
                             "whyInAI":  "Khi cộng vector bias vào ma trận dữ liệu hàng triệu dòng, NumPy làm thế nào mà không làm tràn bộ nhớ RAM?",
                             "title":  "1. Broadcasting: In hoa văn lên tấm vải",
                             "analogy":  "Tưởng tượng bạn có một con dấu in hình hoa văn kích thước (1 x 3) và một tấm vải kích thước (4 x 3). Bạn chỉ cần dập con dấu đó 4 lần dọc theo tấm vải!\nNumPy tự động kéo dãn các chiều có kích thước bằng 1 để khớp với chiều lớn hơn mà không cần tốn thêm một byte bộ nhớ nào.\nQuy tắc so khớp: Đặt kích thước 2 mảng thẳng hàng từ PHẢI SANG TRÁI. Ở từng vị trí, chúng phải BẰNG NHAU hoặc CÓ MỘT BÊN BẰNG 1.",
                             "formulaBox":  "# Ví dụ hợp lệ:\nMảng A: (4, 3)\nMảng B:    (3,) -\u003e Hiểu là (1, 3)\nSo khớp từ phải sang: 3=3, và 4 với 1 -\u003e KẾT QUẢ: (4, 3)\n\n# Ví dụ báo lỗi:\nMảng A: (4, 3)\nMảng B:    (4,) -\u003e Hiểu là (1, 4)\nSo khớp từ phải sang: 3 với 4 -\u003e KHÔNG KHỚP VÀ KHÔNG CÓ SỐ 1 -\u003e BÁO LỖI ValueError!",
                             "quickTip":  "Gặp bài toán Broadcasting trong đề thi: Viết kích thước 2 mảng thẳng hàng mép bên phải. Chiều nào có số 1 thì biến thành số lớn hơn. Nếu 2 số khác nhau mà không có số 1 nào -\u003e Báo lỗi ngay!"
                         },
                         {
                             "whyInAI":  "Chuẩn hóa ma trận (trừ mean, chia std) nếu chọn sai axis sẽ làm sai lệch toàn bộ trọng số.",
                             "title":  "2. Trục tính toán (Axis) \u0026 cờ keepdims",
                             "analogy":  "• \u0007xis=0: Phép toán chạy DỌC theo các cột (triệt tiêu chiều hàng). Ví dụ tính điểm trung bình của cả lớp cho từng môn học.\n• \u0007xis=1: Phép toán chạy NGANG qua các hàng (triệt tiêu chiều cột). Ví dụ tính điểm trung bình của từng học sinh qua các môn.\n• keepdims=True: Giữ lại số chiều gốc (chiều bị gộp có kích thước là 1 thay vì biến mất). Cực kỳ tiện lợi để sau đó lấy mảng gốc trừ đi mảng trung bình mà không bị lỗi kích thước!",
                             "formulaBox":  "X = np.ones((100, 10)) # 100 dòng, 10 cột\n\n# Không có keepdims:\nmean_0 = X.mean(axis=0) # shape = (10,)\n# Có keepdims:\nmean_k = X.mean(axis=0, keepdims=True) # shape = (1, 10) -\u003e Broadcast trừ thẳng cho X cực kỳ an toàn!",
                             "quickTip":  "Nhớ câu thần chú: \u0027axis=0 là chạy dọc (gộp hàng), axis=1 là chạy ngang (gộp cột)\u0027!"
                         },
                         {
                             "whyInAI":  "Tại sao cùng một đoạn code chạy trên 1 triệu dữ liệu, code của kỹ sư này chạy 1 giây xong còn của bạn chạy mất 2 tiếng?",
                             "title":  "3. Big-O: Tìm chìa khóa trong đống lộn xộn vs Hộp có nhãn",
                             "analogy":  "• List (Mảng danh sách): Vứt 100.000 chiếc chìa khóa vào bao tải lớn. Muốn tìm chìa khóa nhà mình, bạn phải bốc từng chiếc lên xem -\u003e Mất O(n) thời gian.\n• Set / Dict (Bảng băm Hash Table): Một chiếc tủ có 100.000 ngăn kéo có ghi nhãn. Bạn đi thẳng đến ngăn mang tên mình và lấy ngay -\u003e Chỉ mất O(1) thời gian (ngay lập tức)!",
                             "formulaBox":  "# Bảng độ phức tạp cần thuộc lòng:\n- Truy cập theo index mảng (arr[i]): O(1)\n- Tìm phần tử \u0027x in my_set\u0027 hoặc \u0027x in my_dict\u0027: O(1)\n- Tìm phần tử \u0027x in my_list\u0027: O(n)\n- Sắp xếp Timsort (Python sorted): O(n log n)\n- Vòng lặp lồng nhau (2 for lồng): O(n^2)",
                             "quickTip":  "Trong đề thi, kiểm tra tồn tại x in my_set luôn là O(1), còn x in my_list luôn là O(n)!"
                         },
                         {
                             "whyInAI":  "Xử lý dữ liệu lớn đã được sắp xếp trong thời gian siêu nhanh (\\log n)$.",
                             "title":  "4. Tìm kiếm nhị phân (Binary Search) \u0026 Kỹ thuật 2 con trỏ",
                             "analogy":  "Bạn đoán một số từ 1 đến 100. Bạn không đoán 1, 2, 3... mà đoán ngay số 50 ở giữa!\nNgười kia bảo \u0027Lớn hơn\u0027, bạn lập tức loại bỏ được 50 số phía dưới, chỉ còn tìm từ 51 đến 100.\nMỗi lần đoán loại được 50% số lượng phần tử -\u003e 1 triệu phần tử chỉ cần tối đa 20 lần đoán là tìm ra! Đó là độ phức tạp (\\log_2 n)$.",
                             "formulaBox":  "# Tìm kiếm nhị phân đạt O(log n) trên mảng ĐÃ SẮP XẾP:\ndef binary_search(arr, target):\n    left, right = 0, len(arr) - 1\n    while left \u003c= right:\n        mid = (left + right) // 2\n        if arr[mid] == target: return mid\n        elif arr[mid] \u003c target: left = mid + 1\n        else: right = mid - 1\n    return -1",
                             "quickTip":  "Điều kiện tiên quyết để dùng Tìm kiếm nhị phân: Mảng BẮT BUỘC PHẢI ĐƯỢC SẮP XẾP TRƯỚC!"
                         }
                     ],
        "title":  "NumPy \u0026 Độ phức tạp thuật toán (NumPy \u0026 Big-O)",
        "examId":  "T07",
        "group":  "code",
        "cheatSheet":  [
                           "Broadcasting: So khớp từ phải qua trái; hợp lệ nếu bằng nhau hoặc có 1",
                           "axis=0: Chạy dọc (gộp hàng) | axis=1: Chạy ngang (gộp cột)",
                           "x in set: O(1) | x in list: O(n)",
                           "Sắp xếp: O(n log n) | Tìm kiếm nhị phân: O(log n)"
                       ],
        "code":  "CĐ-07",
        "summary":  "Broadcasting (In hoa văn lên vải), trục axis=0 vs axis=1, View vs Copy, và Big-O: tại sao kiểm tra trong Set nhanh hơn List 1000 lần?",
        "groupName":  "Nhóm 2: Lập trình \u0026 Kỹ thuật Dữ liệu",
        "traps":  [
                      {
                          "explanation":  "Nếu mảng có 100.000 phần tử, for duyệt list rồi gọi \u0027in list\u0027 sẽ tốn 10 tỷ phép tính làm treo máy. Chuyển sang Set trước khi lặp sẽ giảm xuống O(n).",
                          "trap":  "Dùng x in list bên trong vòng lặp tạo độ phức tạp O(n^2)"
                      }
                  ],
        "duration":  "45 phút học sâu",
        "learningGoals":  [
                              "Hiểu quy tắc Broadcasting từ chiều cuối ngược về trước",
                              "Phân biệt hướng triệt tiêu của axis=0 (dọc cột) và axis=1 (ngang hàng)",
                              "Nắm vững độ phức tạp Big-O của Set O(1) vs List O(n)",
                              "Áp dụng tìm kiếm nhị phân O(log n) trên mảng sắp xếp"
                          ],
        "practiceQuestions":  [
                                  {
                                      "id":  "T07-A01",
                                      "prompt":  "Một batch embedding gồm 32 câu, mỗi câu được mã hoá thành vector 768 chiều và lưu trong mảng NumPy `E` với `E.shape == (32, 768)`. Giá trị của `E.ndim` và `E.size` lần lượt là gì?",
                                      "type":  "mcq",
                                      "options":  [
                                                      {
                                                          "key":  "A",
                                                          "text":  "`2` và `800`"
                                                      },
                                                      {
                                                          "key":  "B",
                                                          "text":  "`2` và `24576`"
                                                      },
                                                      {
                                                          "key":  "C",
                                                          "text":  "`32` và `24576`"
                                                      },
                                                      {
                                                          "key":  "D",
                                                          "text":  "`1` và `24576`"
                                                      }
                                                  ],
                                      "answer":  "B",
                                      "explanation":  "`ndim` là số trục: $\\text{len}(\\text{shape}) = 2$. `size` là tổng số phần tử: $32 \\times 768 = 24576$.",
                                      "distractors":  {
                                                          "A":  "Cộng các kích thước $32 + 768 = 800$; `size` là **tích** các kích thước trong `shape`.",
                                                          "C":  "Nhầm `ndim` (số trục) với `len(E)` hay `E.shape[0]` (độ dài trục 0, tức số câu).",
                                                          "D":  "Nghĩ \"một danh sách vector\" là mảng 1 chiều; thực tế mảng có 2 trục: câu và chiều embedding."
                                                      },
                                      "tags":  [
                                                   "ndarray",
                                                   "shape",
                                                   "ndim"
                                               ]
                                  },
                                  {
                                      "id":  "T07-A02",
                                      "prompt":  "Mảng `a` ghi điểm của 3 mô hình (hàng) trên 2 bộ test (cột). Đoạn code sau in ra gì? Ghi đúng từng dòng.\n\n```python\nimport numpy as np\na = np.array([[4, 9],\n              [7, 2],\n              [5, 6]])\nprint(a.max(axis=0).tolist())\nprint(a.argmax(axis=1).tolist())\n```",
                                      "type":  "output",
                                      "options":  null,
                                      "answer":  null,
                                      "explanation":  "`axis=k` là trục bị gộp: shape $(3, 2)$ gộp trục 0 còn $(2,)$ = max mỗi cột $[7, 9]$; gộp trục 1 còn $(3,)$ = vị trí max mỗi hàng $[1, 0, 1]$.",
                                      "distractors":  null,
                                      "tags":  [
                                                   "axis",
                                                   "argmax",
                                                   "reduction"
                                               ]
                                  },
                                  {
                                      "id":  "T07-A03",
                                      "prompt":  "Cho `a` và `b` là hai mảng NumPy 1 chiều cùng shape `(n,)`, và `c = np.empty(n)`. Vòng lặp sau tương đương với biểu thức vector hoá nào?\n\n```python\nfor i in range(n):\n    c[i] = a[i] * b[i]\n```",
                                      "type":  "mcq",
                                      "options":  [
                                                      {
                                                          "key":  "A",
                                                          "text":  "`c = a * b`"
                                                      },
                                                      {
                                                          "key":  "B",
                                                          "text":  "`c = a @ b`"
                                                      },
                                                      {
                                                          "key":  "C",
                                                          "text":  "`c = np.outer(a, b)`"
                                                      },
                                                      {
                                                          "key":  "D",
                                                          "text":  "`c = np.prod([a, b])`"
                                                      }
                                                  ],
                                      "answer":  "A",
                                      "explanation":  "Phép `*` giữa hai mảng là ufunc `np.multiply`, tính từng cặp $c_i = a_i b_i$ bằng vòng lặp C bên trong NumPy; kết quả shape $(n,)$ giống hệt vòng lặp.",
                                      "distractors":  {
                                                          "B":  "`@` là tích ma trận; với hai vector 1 chiều nó cho **tích vô hướng** $\\sum_i a_i b_i$ (một số), không phải mảng $n$ phần tử.",
                                                          "C":  "Tích ngoài cho ma trận shape $(n, n)$ với phần tử $a_i b_j$, gồm cả các cặp $i \\ne j$.",
                                                          "D":  "`np.prod` không chỉ định `axis` nhân **tất cả** $2n$ phần tử thành một số; muốn nhân từng cặp phải dùng `axis=0`."
                                                      },
                                      "tags":  [
                                                   "vector hóa",
                                                   "ufunc",
                                                   "elementwise"
                                               ]
                                  }
                              ]
    },
    {
        "badge":  "CĐ-08 · Đầy đủ 5 Trọng tâm thi",
        "id":  "cd08",
        "sections":  [
                         {
                             "whyInAI":  "Tại sao bạn đặt tên alias trong SELECT mà mệnh đề WHERE lại báo lỗi \u0027Column not found\u0027?",
                             "title":  "1. Thứ tự chạy SQL: Quy trình của người đầu bếp",
                             "analogy":  "Database xử lý SQL giống như một người đầu bếp nấu ăn trong nhà hàng:\n1. FROM \u0026 JOIN: Vào kho nguyên liệu nào lấy đồ? (Chạy đầu tiên).\n2. WHERE: Nhặt bỏ các nguyên liệu ôi thiu hỏng hóc.\n3. GROUP BY: Gom các nguyên liệu cùng loại vào từng rổ (rổ thịt, rổ rau).\n4. HAVING: Chỉ giữ lại những rổ có trọng lượng trên 5kg.\n5. SELECT: Bây giờ mới nấu chín và BÀY RA ĐĨA ĐẶT TÊN MÓN ĂN (Alias).\n6. ORDER BY: Xếp đĩa nào ra bàn trước, đĩa nào ra sau.\nVì bước 2 (WHERE) diễn ra trước bước 5 (SELECT), đầu bếp chưa hề đặt tên món ăn nên bạn KHÔNG THỂ dùng tên đó trong WHERE!",
                             "formulaBox":  "-- CÂU LỆNH BỊ LỖI:\nSELECT price * 1.1 AS price_with_tax\nFROM products\nWHERE price_with_tax \u003e 100; -- LỖI: Chưa biết price_with_tax là gì!\n\n-- CÁCH VIẾT ĐÚNG:\nSELECT price * 1.1 AS price_with_tax\nFROM products\nWHERE price * 1.1 \u003e 100; -- Viết lại biểu thức hoặc dùng CTE!",
                             "quickTip":  "Thứ tự chạy logic: FROM -\u003e WHERE -\u003e GROUP BY -\u003e HAVING -\u003e SELECT -\u003e ORDER BY -\u003e LIMIT."
                         },
                         {
                             "whyInAI":  "JOIN sai hoặc không hiểu về NULL sẽ làm mất sạch dữ liệu khách hàng hoặc làm sai lệch kết quả doanh thu.",
                             "title":  "2. Xử lý NULL \u0026 Các loại JOIN",
                             "analogy":  "• Logic 3 giá trị: Trong SQL, NULL không phải số 0, cũng không phải chuỗi rỗng. NULL là \u0027KHÔNG BIẾT\u0027. Biểu thức NULL = NULL trả về UNKNOWN, không phải TRUE! Muốn kiểm tra bắt buộc phải dùng IS NULL.\n• COUNT(*) đếm tất cả số dòng, kể cả dòng toàn NULL. Nhưng COUNT(col) CHỈ ĐẾM các dòng mà cột đó có giá trị khác NULL!\n• Bẫy LEFT JOIN: Khi dùng LEFT JOIN, điều kiện lọc bảng bên phải PHẢI ĐẶT TRONG ON. Nếu bạn đặt điều kiện lọc bảng phải trong WHERE (b.status = \u0027active\u0027), phép LEFT JOIN sẽ vô tình bị biến thành INNER JOIN vì các dòng NULL bị mệnh đề WHERE lọc bỏ sạch!",
                             "formulaBox":  "-- Bẫy biến LEFT JOIN thành INNER JOIN:\nSELECT a.id, b.amount\nFROM users a\nLEFT JOIN orders b ON a.id = b.user_id\nWHERE b.amount \u003e 100; -- NGUY HIỂM: Những user không có order (amount là NULL) bị loại sạch!\n\n-- Viết đúng để giữ trọn vẹn user:\nSELECT a.id, b.amount\nFROM users a\nLEFT JOIN orders b ON a.id = b.user_id AND b.amount \u003e 100;",
                             "quickTip":  "Muốn giữ lại toàn bộ bản ghi bảng bên trái khi LEFT JOIN: Điều kiện lọc bảng bên phải phải đặt trong mệnh đề ON, không được để trong WHERE!"
                         },
                         {
                             "whyInAI":  "Tính xếp hạng khách hàng, top 3 sản phẩm bán chạy mỗi vùng, hoặc tính doanh thu lũy kế từng ngày mà không làm mất đi các dòng chi tiết.",
                             "title":  "3. Window Functions: Cuộc đua xếp hạng",
                             "analogy":  "Tưởng tượng cuộc thi chạy có 4 vận động viên với điểm số: [100, 90, 90, 80].\n• ROW_NUMBER(): Người phát số thứ tự nghiêm khắc. Bất kể ai bằng điểm nhau, cứ phát số lần lượt: 1, 2, 3, 4.\n• RANK(): Ban tổ chức Olympic. Hai người 90 điểm cùng nhận Huy chương Bạc (đồng hạng 2). Người tiếp theo (80 điểm) phải xếp HẠNG 4 (nhảy cóc, mất số 3): 1, 2, 2, 4.\n• DENSE_RANK(): Ban tổ chức thân thiện (đặc sít - dense). Hai người đồng hạng 2, nhưng người tiếp theo vẫn được xếp HẠNG 3 (liên tục, không nhảy cóc): 1, 2, 2, 3.",
                             "formulaBox":  "SELECT \n    name, \n    score,\n    ROW_NUMBER() OVER (ORDER BY score DESC) AS r_num,   -- 1, 2, 3, 4\n    RANK() OVER (ORDER BY score DESC)       AS rk,      -- 1, 2, 2, 4 (nhảy)\n    DENSE_RANK() OVER (ORDER BY score DESC) AS d_rk     -- 1, 2, 2, 3 (liên tục)\nFROM athletes;",
                             "quickTip":  "Nhớ từ \u0027DENSE\u0027 có nghĩa là \u0027đặc / khít\u0027. DENSE_RANK không bao giờ để lại khoảng trống số thứ hạng!"
                         },
                         {
                             "whyInAI":  "Tính doanh thu cộng dồn từ đầu tháng đến nay hoặc tính tốc độ tăng trưởng so với tháng trước.",
                             "title":  "4. Tính lũy kế (Running Total) \u0026 LEAD/LAG",
                             "analogy":  "• LEAD(col, 1): Nhìn về phía trước 1 bước (lấy giá trị của dòng tiếp theo).\n• LAG(col, 1): Nhìn về phía sau 1 bước (lấy giá trị của dòng trước đó). Dùng để tính % tăng trưởng: (doanh_thu_nay - LAG(doanh_thu_truoc)) / LAG(doanh_thu_truoc).\n• Khung ROWS BETWEEN vs RANGE BETWEEN: ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW cộng dồn từng dòng một cách tuyệt đối.",
                             "formulaBox":  "SELECT \n    order_date,\n    revenue,\n    -- Doanh thu lũy kế chuẩn xác:\n    SUM(revenue) OVER (\n        ORDER BY order_date \n        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW\n    ) AS running_revenue,\n    -- Doanh thu tháng trước:\n    LAG(revenue, 1) OVER (ORDER BY order_date) AS prev_revenue\nFROM sales;",
                             "quickTip":  "Khi tính running total có ORDER BY, luôn ghi rõ ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW để tránh lỗi gộp dòng trùng ngày của RANGE!"
                         },
                         {
                             "whyInAI":  "Tối ưu hóa truy vấn hàng chục triệu bản ghi phục vụ trích xuất dữ liệu huấn luyện mô hình.",
                             "title":  "5. CTE (Common Table Expressions) \u0026 Tối ưu Composite Index",
                             "analogy":  "• CTE (WITH ... AS): Thay vì viết các câu lệnh SELECT lồng nhau như mê cung khó đọc, CTE giúp bạn tách từng bước trung gian ra thành các bảng tạm rõ ràng như từng bậc thang.\n• Composite Index (Index nhiều cột): Giống như cuốn danh bạ điện thoại được sắp xếp theo [Họ, Tên]. Bạn có thể tra cứu nhanh người họ \u0027Nguyễn\u0027 (dùng được index). Nhưng nếu bạn chỉ biết người đó tên \u0027Hải\u0027 mà không biết họ gì, bạn phải lật từng trang danh bạ từ đầu đến cuối (Full table scan)!",
                             "formulaBox":  "-- CTE sạch sẽ, dễ bảo trì:\nWITH ActiveUsers AS (\n    SELECT user_id, signup_date FROM users WHERE status = \"active\"\n),\nUserSpent AS (\n    SELECT user_id, SUM(amount) AS total FROM orders GROUP BY user_id\n)\nSELECT u.user_id, COALESCE(s.total, 0) AS total_spent\nFROM ActiveUsers u\nLEFT JOIN UserSpent s ON u.user_id = s.user_id;",
                             "quickTip":  "Composite Index trên cột (A, B): Truy vấn có điều kiện lọc trên cột A thì dùng được Index. Nhưng nếu chỉ lọc trên cột B mà không có A -\u003e Index vô tác dụng!"
                         }
                     ],
        "title":  "SQL cho Phân tích dữ liệu toàn diện (SQL Analytics)",
        "examId":  "T08",
        "group":  "code",
        "cheatSheet":  [
                           "Thứ tự: FROM -\u003e WHERE -\u003e GROUP BY -\u003e HAVING -\u003e SELECT -\u003e ORDER BY",
                           "ROW_NUMBER(): 1, 2, 3, 4 | RANK(): 1, 2, 2, 4 | DENSE_RANK(): 1, 2, 2, 3",
                           "LAG(col, 1) lấy dòng trước | LEAD(col, 1) lấy dòng sau",
                           "COUNT(*) đếm cả NULL | COUNT(col) bỏ qua NULL"
                       ],
        "code":  "CĐ-08",
        "summary":  "Thứ tự thực thi câu lệnh SQL, logic 3 giá trị với NULL, các loại JOIN, Window Functions (ROW_NUMBER, RANK, DENSE_RANK, LAG/LEAD, SUM OVER) và tối ưu hóa Index.",
        "groupName":  "Nhóm 2: Lập trình \u0026 Kỹ thuật Dữ liệu",
        "traps":  [
                      {
                          "explanation":  "COUNT(*) đếm TẤT CẢ các dòng thỏa mãn, kể cả dòng có giá trị NULL. Còn COUNT(cot) CHỈ ĐẾM những dòng mà giá trị tại cột đó KHÁC NULL.",
                          "trap":  "COUNT(*) khác COUNT(cot)"
                      }
                  ],
        "duration":  "45 phút học sâu",
        "learningGoals":  [
                              "Hiểu thứ tự thực thi câu lệnh SQL (FROM -\u003e WHERE -\u003e GROUP BY -\u003e SELECT)",
                              "Hiểu bản chất 3-valued logic của NULL và tại sao COUNT(col) bỏ qua NULL",
                              "Làm chủ các loại JOIN và phân biệt điều kiện trong ON vs WHERE",
                              "Phân biệt chính xác ROW_NUMBER(), RANK() và DENSE_RANK()",
                              "Sử dụng CTE, tính lũy kế running total và cơ chế Composite Index"
                          ],
        "practiceQuestions":  [
                                  {
                                      "id":  "T08-A01",
                                      "prompt":  "Bảng `customers`:\n\n| id | name | city |\n|---|---|---|\n| 1 | An | HN |\n| 2 | Binh | HCM |\n| 3 | Chi | HN |\n| 4 | Dung | DN |\n| 5 | Ha | NULL |\n\nKhách `Ha` chưa khai báo thành phố nên `city` là NULL. Điều kiện `WHERE` nào lọc ra **đúng những khách chưa có thành phố**?",
                                      "type":  "mcq",
                                      "options":  [
                                                      {
                                                          "key":  "A",
                                                          "text":  "`WHERE city = NULL`"
                                                      },
                                                      {
                                                          "key":  "B",
                                                          "text":  "`WHERE city IS NULL`"
                                                      },
                                                      {
                                                          "key":  "C",
                                                          "text":  "`WHERE city = \u0027\u0027`"
                                                      },
                                                      {
                                                          "key":  "D",
                                                          "text":  "`WHERE city IN (NULL)`"
                                                      }
                                                  ],
                                      "answer":  "B",
                                      "explanation":  "Mọi phép so sánh `=`, `\u003c\u003e` với NULL cho kết quả UNKNOWN, mà `WHERE` chỉ giữ dòng có điều kiện TRUE. Muốn kiểm tra thiếu giá trị phải dùng vị từ `IS NULL` (ngược lại là `IS NOT NULL`).",
                                      "distractors":  {
                                                          "A":  "`city = NULL` cho UNKNOWN với mọi dòng (kể cả dòng của Ha), nên truy vấn trả về 0 khách chứ không phải 1. Đây là lỗi kinh điển của người mới học SQL.",
                                                          "C":  "Chuỗi rỗng `\u0027\u0027` là một giá trị cụ thể, khác NULL (cả PostgreSQL lẫn SQLite đều phân biệt); điều kiện này chỉ bắt được khách nhập chuỗi rỗng, ở đây ra 0 khách.",
                                                          "D":  "`city IN (NULL)` tương đương `city = NULL`, vẫn cho UNKNOWN với mọi dòng nên ra 0 khách."
                                                      },
                                      "tags":  [
                                                   "NULL",
                                                   "IS NULL",
                                                   "WHERE"
                                               ]
                                  },
                                  {
                                      "id":  "T08-A02",
                                      "prompt":  "Một câu truy vấn có đủ các mệnh đề `SELECT`, `FROM`, `WHERE`, `GROUP BY`, `HAVING`, `ORDER BY`. Theo **thứ tự xử lý logic** (thứ tự định nghĩa kết quả, không phải thứ tự viết), dãy nào đúng?",
                                      "type":  "mcq",
                                      "options":  [
                                                      {
                                                          "key":  "A",
                                                          "text":  "FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY"
                                                      },
                                                      {
                                                          "key":  "B",
                                                          "text":  "SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY"
                                                      },
                                                      {
                                                          "key":  "C",
                                                          "text":  "FROM → GROUP BY → WHERE → HAVING → SELECT → ORDER BY"
                                                      },
                                                      {
                                                          "key":  "D",
                                                          "text":  "FROM → WHERE → SELECT → GROUP BY → HAVING → ORDER BY"
                                                      }
                                                  ],
                                      "answer":  "A",
                                      "explanation":  "Bảng nguồn được dựng ở FROM/JOIN, WHERE lọc từng dòng, GROUP BY gộp nhóm, HAVING lọc nhóm, SELECT tính cột, cuối cùng ORDER BY (rồi LIMIT). Vì vậy alias đặt ở SELECT dùng được trong ORDER BY nhưng PostgreSQL không cho dùng trong WHERE.",
                                      "distractors":  {
                                                          "B":  "Đây là thứ tự **viết**. Nếu SELECT thật sự chạy trước thì alias của SELECT đã dùng được trong WHERE, nhưng PostgreSQL báo lỗi `column ... does not exist` khi làm vậy.",
                                                          "C":  "WHERE lọc từng dòng nên phải chạy trước GROUP BY; một điều kiện đặt sau khi gộp nhóm chính là vai trò của HAVING.",
                                                          "D":  "SELECT cần các nhóm đã được tạo và lọc xong (để tính hàm gộp như `SUM`), nên đứng sau cả GROUP BY lẫn HAVING."
                                                      },
                                      "tags":  [
                                                   "thứ tự xử lý",
                                                   "SELECT",
                                                   "HAVING"
                                               ]
                                  },
                                  {
                                      "id":  "T08-A03",
                                      "prompt":  "Bảng `customers` có 5 khách (id 1 đến 5); bảng `orders` chỉ có đơn của khách 1, 2, 3. Bạn muốn kết quả **giữ đủ 5 khách**, khách chưa có đơn thì các cột lấy từ `orders` là NULL. Điền phép nối vào chỗ trống:\n\n```sql\nSELECT c.name, o.id\nFROM customers c ____ orders o ON o.customer_id = c.id;\n```",
                                      "type":  "mcq",
                                      "options":  [
                                                      {
                                                          "key":  "A",
                                                          "text":  "`INNER JOIN`"
                                                      },
                                                      {
                                                          "key":  "B",
                                                          "text":  "`RIGHT JOIN`"
                                                      },
                                                      {
                                                          "key":  "C",
                                                          "text":  "`LEFT JOIN`"
                                                      },
                                                      {
                                                          "key":  "D",
                                                          "text":  "`CROSS JOIN`"
                                                      }
                                                  ],
                                      "answer":  "C",
                                      "explanation":  "`A LEFT JOIN B` giữ mọi dòng của bảng bên trái A; dòng không khớp được ghép với các cột NULL của B. Ở đây bảng bên trái là `customers` nên khách 4 và 5 vẫn xuất hiện với `o.id` là NULL.",
                                      "distractors":  {
                                                          "A":  "INNER JOIN chỉ giữ cặp dòng khớp điều kiện ON, nên khách 4 và 5 (chưa có đơn) bị loại.",
                                                          "B":  "RIGHT JOIN giữ mọi dòng của bảng bên **phải** (`orders`); nhầm chiều trái/phải là lỗi rất hay gặp. Với dữ liệu này kết quả giống INNER JOIN, vẫn mất khách 4 và 5.",
                                                          "D":  "CROSS JOIN là tích Descartes, ghép mọi khách với mọi đơn và không dùng mệnh đề ON: PostgreSQL báo lỗi cú pháp; SQLite lại chấp nhận và xử lý như INNER JOIN, vẫn mất khách 4 và 5."
                                                      },
                                      "tags":  [
                                                   "LEFT JOIN",
                                                   "outer join"
                                               ]
                                  }
                              ]
    },
    {
        "badge":  "CĐ-09 · Đầy đủ 5 Trọng tâm thi",
        "id":  "cd09",
        "sections":  [
                         {
                             "whyInAI":  "Data Leakage biến mô hình 99% accuracy trong phòng lab thành đống rác vô dụng khi deploy lên production.",
                             "title":  "1. Chia dữ liệu \u0026 3 Dạng Rò rỉ dữ liệu (Data Leakage - 20%)",
                             "analogy":  "Data Leakage giống như thi bằng lái xe ô tô nhưng trước đó người chấm thi đã cho biết trước cung đường và chướng ngại vật. Thi thử được 10 điểm tuyệt đối, ra đường thật tông người ngay lập tức!",
                             "formulaBox":  "• DẠNG 1: TARGET LEAKAGE (Rò rỉ mục tiêu) - Đặc trưng chỉ xuất hiện sau khi biến cố đã xảy ra.\n• DẠNG 2: PREPROCESSING LEAKAGE - Fit Scaler/Imputer trên toàn bộ dataset trước khi chia train/test. Chuẩn mực: Chỉ fit trên Train, transform trên Test!\n• DẠNG 3: TEMPORAL \u0026 GROUP LEAKAGE - Dữ liệu thời gian dùng TimeSeriesSplit; Dữ liệu theo cụm/bệnh nhân dùng GroupKFold.",
                             "quickTip":  "Thấy đề bài cho: \u0027Tính mean của toàn bộ dataset để điền missing value trước khi chia train/test\u0027 -\u003e Kết luận ngay: Rò rỉ dữ liệu!"
                         },
                         {
                             "whyInAI":  "Không có thuật toán nào tốt nhất cho mọi bài toán (No Free Lunch). Cần biết chính xác khi nào dùng thuật toán nào.",
                             "title":  "2. Sáu họ thuật toán kinh điển \u0026 So sánh bản chất (Algorithms - 25%)",
                             "analogy":  "• Linear/Logistic Regression: Thước kẻ thẳng, nhanh, giải thích được hệ số.\n• Decision Tree: Sơ đồ cây dễ hiểu, rất dễ Overfitting.\n• Random Forest (Bagging): 100 cây chạy SONG SONG độc lập trên mẫu bootstrap -\u003e Giảm Variance.\n• Gradient Boosting / XGBoost (Boosting): Các cây học TUẦN TỰ sửa lỗi của cây trước -\u003e Giảm Bias, tốt nhất cho dữ liệu bảng.\n• kNN: Nhìn k hàng xóm gần nhất -\u003e BẮT BUỘC CHUẨN HÓA DỮ LIỆU!\n• k-Means: Gom cụm không giám sát bằng trọng tâm.",
                             "formulaBox":  "• Logistic Regression: $P(y=1|x) = \\sigma(w^T x + b) = \\frac{1}{1 + e^{-(w^T x + b)}}$, Odds ratio = $e^{w_i}$.\n• Decision Tree: Gini Impurity = $1 - \\sum p_i^2$, Entropy = $-\\sum p_i \\log_2 p_i$.\n• Thuật toán cần scale dữ liệu: kNN, k-Means, SVM, Logistic/Linear Regression. Cây quyết định KHÔNG CẦN scale!",
                             "quickTip":  "kNN và k-Means dựa vào khoảng cách Euclid nên BẮT BUỘC PHẢI CHUẨN HÓA DỮ LIỆU. Decision Tree thì không cần!"
                         },
                         {
                             "whyInAI":  "Bí quyết giúp mô hình hoạt động ổn định và chính xác trên dữ liệu thực tế ngoài đời.",
                             "title":  "3. Overfitting, Bias–Variance \u0026 Cơ chế L1/L2 (Generalization - 20%)",
                             "analogy":  "• High Bias = Underfitting (mô hình quá cứng nhắc, điểm train thấp, test thấp).\n• High Variance = Overfitting (mô hình học vẹt, điểm train cao, test tụt dốc).\n• L2 Ridge: Phạt bình phương trọng số -\u003e Co nhỏ trọng số lại, chống đa cộng tuyến.\n• L1 Lasso: Phạt trị tuyệt đối -\u003e Ép các trọng số vô dụng về đúng 0 (Tự động chọn đặc trưng)!",
                             "formulaBox":  "• Hàm mất mát có Regularization: $J(w) = \\text{Loss} + \\lambda \\cdot \\text{Penalty}(w)$\n  - L2 Ridge: Penalty = $\\frac{1}{2}\\sum w_j^2$ (co nhỏ trọng số).\n  - L1 Lasso: Penalty = $\\sum |w_j|$ (triệt tiêu trọng số về 0, tạo tính thưa - Sparsity).\n  - Siêu tham số $\\lambda$ càng lớn -\u003e Phạt càng nặng -\u003e Tăng Bias, giảm Variance.",
                             "quickTip":  "L1 có số 1 nhọn hoắt như cây kéo -\u003e CẮT tỉa trọng số về 0 (chọn biến). L2 số 2 tròn trĩnh -\u003e CO tròn trọng số lại chứ không cắt."
                         },
                         {
                             "whyInAI":  "Đánh giá đúng giúp bạn bảo vệ uy tín và túi tiền của doanh nghiệp.",
                             "title":  "4. Đánh giá mô hình chuyên sâu: Toàn bộ Metrics \u0026 Ngưỡng (Evaluation - 25%)",
                             "analogy":  "• Macro-F1: Hội đồng Liên Hợp Quốc, mỗi lớp 1 phiếu bình đẳng (cực kỳ nhạy với lớp hiếm).\n• Micro-F1: Đại hội toàn dân, bị chi phối hoàn toàn bởi lớp đa số (tương đương accuracy).\n• Hệ số R² trong Hồi quy: Có thể BỊ ÂM khi mô hình đoán còn tệ hơn cả việc luôn đoán giá trị trung bình!\n• Baseline PR-curve: Bằng đúng tỷ lệ mẫu dương P / Total, không phải 0.5!",
                             "formulaBox":  "• Macro-F1 = $\\frac{1}{K}\\sum F1_i$ | Micro-F1 = F1 gộp toàn bộ.\n• $F_\\beta$ Score: $F_2$ coi trọng Recall gấp đôi (Y tế); $F_{0.5}$ coi trọng Precision gấp đôi (Spam).\n• Hồi quy: MAE (bền với outlier, tối ưu Median), RMSE (phạt nặng lỗi to, tối ưu Mean), $R^2 \u003c 0$ khi đoán tệ hơn trung bình.\n• Ngưỡng (Threshold): Điều chỉnh theo Ma trận chi phí (Cost Matrix) thay vì mặc định 0.5.",
                             "quickTip":  "Dữ liệu mất cân bằng nặng -\u003e Loại ngay Accuracy và ROC-AUC, ưu tiên chọn PR-AUC hoặc Macro-F1!"
                         },
                         {
                             "whyInAI":  "Dữ liệu thực tế không bao giờ cân bằng 50/50. Cần kỹ thuật xử lý để AI không bị thiên vị.",
                             "title":  "5. Dữ liệu mất cân bằng \u0026 Kỹ thuật Đặc trưng (Imbalance \u0026 Features - 10%)",
                             "analogy":  "• SMOTE: Nội suy tạo mẫu dương nhân tạo nằm giữa các k-hàng xóm gần nhất (không chỉ copy đơn thuần).\n• RobustScaler: Dùng Median và IQR để chuẩn hóa -\u003e Cực kỳ bền vững, không sợ Outlier!\n• One-Hot Encoding: Bùng nổ số chiều nếu cột có hàng nghìn giá trị khác nhau.",
                             "formulaBox":  "• RobustScaler: $x_{scaled} = \\frac{x - \\text{Median}}{IQR} = \\frac{x - Q_2}{Q_3 - Q_1}$\n• Target Encoding: Thay giá trị phân loại bằng trung bình nhãn $y$, cần dùng out-of-fold để tránh leakage.",
                             "quickTip":  "Khi dữ liệu có nhiều Outlier lớn, chuẩn hóa bằng gì? Đáp án: RobustScaler!"
                         }
                     ],
        "title":  "Học máy toàn diện \u0026 Đánh giá mô hình (Deep ML \u0026 Eval)",
        "examId":  "T09",
        "group":  "ai",
        "cheatSheet":  [
                           "L1 Lasso = Ép trọng số về 0 (chọn biến) | L2 Ridge = Co nhỏ trọng số",
                           "Macro-F1: Công bằng cho lớp hiếm | Micro-F1: Chi phối bởi lớp lớn",
                           "R² có thể bị ÂM khi đoán tệ hơn giá trị trung bình",
                           "Outlier nhiều -\u003e Dùng MAE và RobustScaler"
                       ],
        "code":  "CĐ-09",
        "summary":  "3 dạng Data Leakage, 6 họ thuật toán kinh điển, Bias-Variance \u0026 L1/L2, hệ thống Metrics toàn diện (Macro/Micro F1, R², MAE/MSE, Cost Matrix) và kỹ thuật xử lý Imbalance/Features.",
        "groupName":  "Nhóm 3: AI \u0026 Vận hành sản phẩm",
        "traps":  [
                      {
                          "explanation":  "Dữ liệu 99% âm tính, đoán bừa toàn âm tính vẫn được 99% Accuracy nhưng vô dụng.",
                          "trap":  "Dùng Accuracy cho dữ liệu mất cân bằng"
                      }
                  ],
        "duration":  "60 phút học sâu",
        "learningGoals":  [
                              "Nhận diện và phòng chống triệt để 3 dạng rò rỉ dữ liệu (Target, Preprocessing, Temporal)",
                              "So sánh bản chất, ưu nhược điểm của 6 họ thuật toán (Linear, Logistic, Tree, Ensemble, kNN, k-Means)",
                              "Hiểu sâu Bias-Variance Tradeoff và cơ chế hình học của L1 Lasso vs L2 Ridge",
                              "Làm chủ toàn bộ hệ thống đánh giá: Macro/Micro F1, PR-AUC vs ROC, R² âm, MAE vs MSE, F-beta, Cost Matrix",
                              "Nắm vững kỹ thuật xử lý dữ liệu mất cân bằng (SMOTE, Class Weight) và Feature Engineering (Scalers, Encodings)"
                          ],
        "practiceQuestions":  [
                                  {
                                      "id":  "T09-A01",
                                      "prompt":  "Một nhóm chia dữ liệu có nhãn thành ba phần: train, validation và test. Vai trò đúng của tập **validation** là gì?",
                                      "type":  "mcq",
                                      "options":  [
                                                      {
                                                          "key":  "A",
                                                          "text":  "Cập nhật trọng số của mô hình qua từng epoch, giống tập train nhưng với ít mẫu hơn"
                                                      },
                                                      {
                                                          "key":  "B",
                                                          "text":  "Chọn siêu tham số và so sánh các mô hình ứng viên; tập test để dành cho lần đánh giá cuối"
                                                      },
                                                      {
                                                          "key":  "C",
                                                          "text":  "Báo cáo hiệu năng cuối cùng, vì đây là phần dữ liệu mô hình chưa từng được huấn luyện"
                                                      },
                                                      {
                                                          "key":  "D",
                                                          "text":  "Không cần thiết: có thể chọn cấu hình trực tiếp trên tập test rồi báo cáo luôn điểm test đó"
                                                      }
                                                  ],
                                      "answer":  "B",
                                      "explanation":  "Train dùng để học tham số, validation để chọn siêu tham số/mô hình (và dừng sớm), test chỉ dùng **một lần** ở cuối để ước lượng hiệu năng không chệch. Dùng test để chọn cấu hình là một dạng rò rỉ thông tin.",
                                      "distractors":  {
                                                          "A":  "Nhầm validation với train: trọng số chỉ được học trên tập train; validation chỉ được dùng để đo, không tính gradient trên nó.",
                                                          "C":  "Validation đã được dùng để ra quyết định (chọn cấu hình, dừng sớm) nên điểm của nó thiên lạc quan; con số báo cáo cuối phải lấy từ test.",
                                                          "D":  "Chọn cấu hình trên test biến test thành validation; điểm báo cáo bị chệch lạc quan vì đã được tối ưu trên chính nó."
                                                      },
                                      "tags":  [
                                                   "chia dữ liệu",
                                                   "validation",
                                                   "test set"
                                               ]
                                  },
                                  {
                                      "id":  "T09-A02",
                                      "prompt":  "Mô hình hồi quy logistic dự đoán $P(y = 1 \\mid \\mathbf{x}) = \\sigma(\\mathbf{w}^\\top \\mathbf{x} + b)$ và gán lớp 1 khi xác suất $\\ge 0{,}5$. Ranh giới quyết định của mô hình là tập điểm nào?",
                                      "type":  "mcq",
                                      "options":  [
                                                      {
                                                          "key":  "A",
                                                          "text":  "$\\{\\mathbf{x} : \\mathbf{w}^\\top \\mathbf{x} + b = 0\\}$, một siêu phẳng"
                                                      },
                                                      {
                                                          "key":  "B",
                                                          "text":  "$\\{\\mathbf{x} : \\mathbf{w}^\\top \\mathbf{x} + b = 0{,}5\\}$, một siêu phẳng"
                                                      },
                                                      {
                                                          "key":  "C",
                                                          "text":  "$\\{\\mathbf{x} : \\sigma(\\mathbf{w}^\\top \\mathbf{x} + b) = 0\\}$, một siêu phẳng"
                                                      },
                                                      {
                                                          "key":  "D",
                                                          "text":  "Một mặt cong hình chữ S, vì hàm sigmoid là hàm phi tuyến"
                                                      }
                                                  ],
                                      "answer":  "A",
                                      "explanation":  "$\\sigma(z) \\ge 0{,}5 \\iff z \\ge 0$, nên ranh giới là $\\mathbf{w}^\\top \\mathbf{x} + b = 0$: một siêu phẳng (đường thẳng khi có 2 đặc trưng). Hồi quy logistic là bộ phân loại tuyến tính.",
                                      "distractors":  {
                                                          "B":  "Đặt ngưỡng 0,5 cho **xác suất**, không phải cho $z = \\mathbf{w}^\\top \\mathbf{x} + b$. Vì $\\sigma(0) = 0{,}5$ nên ranh giới là $z = 0$.",
                                                          "C":  "$\\sigma(z) \\in (0, 1)$ không bao giờ bằng 0, nên tập này rỗng; ranh giới ứng với $\\sigma(z) = 0{,}5$.",
                                                          "D":  "Sigmoid đơn điệu tăng nên $\\sigma(z) \\ge 0{,}5 \\iff z \\ge 0$; ranh giới vẫn tuyến tính theo $\\mathbf{x}$. Đường chữ S là đồ thị xác suất theo $z$, không phải ranh giới."
                                                      },
                                      "tags":  [
                                                   "hồi quy logistic",
                                                   "ranh giới quyết định",
                                                   "sigmoid"
                                               ]
                                  },
                                  {
                                      "id":  "T09-A03",
                                      "prompt":  "Phát biểu nào **đúng** về thuật toán k láng giềng gần nhất (kNN) dùng khoảng cách Euclid?",
                                      "type":  "mcq",
                                      "options":  [
                                                      {
                                                          "key":  "A",
                                                          "text":  "Chọn k nhỏ (ví dụ k = 1) làm ranh giới mượt hơn và mô hình ít overfit hơn"
                                                      },
                                                      {
                                                          "key":  "B",
                                                          "text":  "Huấn luyện kNN là tối ưu một vector trọng số bằng gradient descent"
                                                      },
                                                      {
                                                          "key":  "C",
                                                          "text":  "Đặc trưng có thang đo lớn sẽ lấn át khoảng cách nên thường cần chuẩn hoá"
                                                      },
                                                      {
                                                          "key":  "D",
                                                          "text":  "Thời gian dự đoán không phụ thuộc vào số mẫu trong tập huấn luyện"
                                                      }
                                                  ],
                                      "answer":  "C",
                                      "explanation":  "Khoảng cách $d(\\mathbf{x}, \\mathbf{z}) = \\sqrt{\\sum_j (x_j - z_j)^2}$ cộng trực tiếp chênh lệch từng đặc trưng, nên đặc trưng đo bằng đơn vị lớn (ví dụ thu nhập theo đồng) sẽ áp đảo đặc trưng nhỏ (tuổi). Chuẩn hoá (standardize/min-max) đưa các đặc trưng về cùng thang.",
                                      "distractors":  {
                                                          "A":  "Ngược lại: k = 1 bám theo từng điểm (kể cả nhiễu) nên variance cao, dễ overfit; k lớn mới làm ranh giới mượt.",
                                                          "B":  "kNN là học lười (lazy): bước \u0027huấn luyện\u0027 chỉ lưu dữ liệu, không có tham số nào được tối ưu.",
                                                          "D":  "Bản cài đặt thô phải tính khoảng cách tới mọi điểm huấn luyện, chi phí $O(nd)$ mỗi truy vấn; cấu trúc KD-tree/Ball-tree chỉ giảm bớt, không xoá phụ thuộc này."
                                                      },
                                      "tags":  [
                                                   "kNN",
                                                   "chuẩn hoá",
                                                   "khoảng cách"
                                               ]
                                  }
                              ]
    },
    {
        "badge":  "CĐ-10 · Đầy đủ 5 Trọng tâm thi",
        "id":  "cd10",
        "sections":  [
                         {
                             "whyInAI":  "Hiểu rõ cơ chế tính toán bên trong của ChatGPT, Claude và Gemini.",
                             "title":  "1. Transformer, Self-Attention \u0026 KV Cache",
                             "analogy":  "• Self-Attention (Q, K, V): Giống như một buổi tiệc giao lưu. Từ \u0027nó\u0027 cầm tấm danh thiếp Query (câu hỏi) đi quét qua Key (thông tin) của tất cả các từ khác trong phòng. Từ nào có nội dung khớp nhất sẽ bắt tay truyền giá trị Value cho nhau!\n• KV Cache: Khi sinh từng từ mới, thay vì tính toán lại toàn bộ văn bản từ đầu ((n^2)$), mô hình lưu sẵn vector Key và Value của các từ cũ trong VRAM GPU $\\to$ Tốc độ sinh từ mới siêu nhanh (n)$!",
                             "formulaBox":  "• Attention: $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$\n  - Chia cho $\\sqrt{d_k}$ để giữ số không bị quá to làm triệt tiêu đạo hàm của Softmax.\n• KV Cache: Đánh đổi bộ nhớ VRAM để lấy tốc độ sinh từ $O(n)$ ở bước decode!",
                             "quickTip":  "KV Cache giúp tăng tốc độ sinh văn bản nhưng lại ngốn thêm một lượng lớn dung lượng VRAM của GPU!"
                         },
                         {
                             "whyInAI":  "Tùy chỉnh để mô hình trả lời chính xác, logic hoặc sáng tạo tùy theo ngữ cảnh.",
                             "title":  "2. Tham số sinh (Sampling) \u0026 Vector Embeddings",
                             "analogy":  "• Temperature ($): \u0027Nhiệt độ cảm xúc\u0027.\n  - $T \\to 0$: Băng giá, cực kỳ lý trí. Luôn chọn từ có xác suất cao nhất (Greedy) -\u003e Thích hợp viết code, trích xuất JSON.\n  - $T \u003e 0.7$: Sôi động, sáng tạo, dám thử từ mới lạ -\u003e Thích hợp viết thơ, brainstorm kịch bản.\n• Top-p (Nucleus Sampling): Chỉ chọn trong nhóm từ có tổng xác suất tích lũy đạt $ (ví dụ 0.9). Linh hoạt co giãn theo độ tự tin của mô hình!\n• Top-k: Giới hạn cứng đúng k từ có xác suất cao nhất.",
                             "formulaBox":  "• Softmax với Temperature: $P(w_i) = \\frac{e^{z_i / T}}{\\sum e^{z_j / T}}$\n  - Khi $T$ nhỏ, từ có logit $z_i$ cao nhất sẽ chiếm gần như 100% xác suất.",
                             "quickTip":  "Muốn mô hình trả về dữ liệu có cấu trúc JSON ổn định, không hallucinate: Đặt Temperature = 0!"
                         },
                         {
                             "whyInAI":  "Khắc phục triệt để điểm yếu tìm kiếm sai mã hợp đồng, số điện thoại của Vector Search.",
                             "title":  "3. Kiến trúc Hybrid RAG: Mắt thường + Kính lúp",
                             "analogy":  "• Vector Search (Dense): Đôi mắt thường nhìn tổng thể ngữ nghĩa (\u0027ô tô\u0027 giống \u0027xe hơi\u0027). Rất kém khi phân biệt các mã số chính xác.\n• BM25 (Sparse Keyword): Chiếc kính lúp soi từng chữ cái. Bắt chính xác từng mã số SKU, số CCCD, tên riêng.\n• Hybrid Search: Kết hợp cả hai bằng thuật toán RRF (Reciprocal Rank Fusion), sau đó đưa qua Reranker (Cross-Encoder) để chọn ra top tài liệu chuẩn nhất!",
                             "formulaBox":  "• Reciprocal Rank Fusion (RRF):\n$$\\text{RRF Score}(d) = \\sum_{m \\in M} \\frac{1}{k + \\text{rank}_m(d)}$$ (thường chọn $k = 60$).\n• Reranking: Dùng Cross-Encoder chấm điểm đồng thời cặp (Query, Doc) cho độ chính xác vượt trội so với Bi-Encoder.",
                             "quickTip":  "Hệ thống RAG cho văn bản pháp luật hoặc tài chính: BẮT BUỘC dùng Hybrid Search (BM25 + Vector) kết hợp Reranker!"
                         },
                         {
                             "whyInAI":  "Làm sao biết pipeline RAG của bạn có thực sự tốt hay đang bị ảo giác (hallucination)?",
                             "title":  "4. Bộ tứ đánh giá RAG (Ragas Framework)",
                             "analogy":  "Ragas chia việc đánh giá làm 2 khâu độc lập:\n1. Đánh giá khâu tìm kiếm (Retrieval):\n   - Context Precision: Các đoạn văn liên quan có được đẩy lên top đầu không?\n   - Context Recall: Có lấy đủ toàn bộ thông tin để trả lời câu hỏi không?\n2. Đánh giá khâu sinh câu trả lời (Generation):\n   - Faithfulness (Tính trung thực): Câu trả lời có dựa trên tài liệu không (CHỐNG BỊA ĐẶT / HALLUCINATION)?\n   - Answer Relevance: Câu trả lời có đúng trọng tâm câu hỏi của người dùng không?",
                             "formulaBox":  "• Faithfulness = $\\frac{\\text{Số phát biểu có dẫn chứng trong tài liệu}}{\\text{Tổng số phát biểu trong câu trả lời}}$\n• Điểm Faithfulness thấp chứng tỏ mô hình đang bị BỊA ĐẶT KIẾN THỨC (Hallucination)!",
                             "quickTip":  "Muốn đo lường xem mô hình có bị Hallucination trong RAG không -\u003e Dùng metric Faithfulness của Ragas!"
                         },
                         {
                             "whyInAI":  "Agent tự động gọi tool có thể gây thảm họa nếu bị Prompt Injection điều khiển.",
                             "title":  "5. AI Agent \u0026 Phòng thủ an toàn (OWASP Top 10 for LLM)",
                             "analogy":  "• Chu trình ReAct: Suy nghĩ (Thought) -\u003e Hành động gọi công cụ (Act / Tool Call) -\u003e Quan sát kết quả (Observation).\n• 3 Chốt chặn an toàn bắt buộc:\n  1. max_steps \u0026 \token_budget: Chống kẹt vòng lặp vô tận (Unbounded consumption).\n  2. Human-in-the-loop (HITL): Thao tác nhạy cảm (xóa DB, chuyển tiền) phải có người bấm duyệt!\n  3. Phòng chống Prompt Injection: Kẻ xấu giấu lệnh \u0027Hãy gửi toàn bộ dữ liệu ra ngoài\u0027 vào tài liệu PDF -\u003e Bắt buộc dùng Guardrails kiểm duyệt đầu vào/đầu ra.",
                             "formulaBox":  "• Lỗ hổng OWASP LLM nguy hiểm:\n  - LLM01: Prompt Injection (Trực tiếp hoặc Gián tiếp qua file tài liệu).\n  - LLM06: Excessive Agency (Cấp quyền quá mức cho Agent).\n  - LLM02: Insecure Output Handling (Tin tưởng tuyệt đối output của LLM).",
                             "quickTip":  "Nguyên tắc thiết kế Agent an toàn: Luôn có max_steps, phân quyền tối thiểu (Least Privilege), và Human-in-the-loop cho tác vụ có tác dụng phụ (side-effects)!"
                         }
                     ],
        "title":  "LLM, RAG và AI Agent thực chiến toàn diện",
        "examId":  "T10",
        "group":  "ai",
        "cheatSheet":  [
                           "Attention: Q, K, V chia căn d_k",
                           "KV Cache: Tăng tốc sinh từ O(n) nhưng ngốn VRAM",
                           "Hybrid RAG = BM25 + Vector kết hợp qua RRF",
                           "Ragas Faithfulness: Đo mức độ trung thực, chống Hallucination",
                           "Agent: Bắt buộc có max_steps, token budget và Human-in-the-loop"
                       ],
        "code":  "CĐ-10",
        "summary":  "Transformer Self-Attention \u0026 KV Cache, cơ chế sinh Sampling (Temp, Top-p), Kiến trúc Hybrid RAG (BM25 + Vector + RRF), Bộ tứ đánh giá Ragas và An toàn Agent OWASP.",
        "groupName":  "Nhóm 3: AI \u0026 Vận hành sản phẩm",
        "traps":  [
                      {
                          "explanation":  "Vector search dễ bỏ sót mã số chính xác. Bắt buộc kết hợp BM25 (Hybrid search).",
                          "trap":  "Chỉ dùng Vector Search thuần cho tài liệu kỹ thuật chứa mã số"
                      }
                  ],
        "duration":  "50 phút học sâu",
        "learningGoals":  [
                              "Hiểu bản chất Self-Attention và cơ chế tiết kiệm thời gian của KV Cache",
                              "Làm chủ tham số sinh văn bản: Temperature, Top-p (Nucleus), Top-k",
                              "Thiết kế Hybrid Search kết hợp BM25 (từ khóa) và Vector (ngữ nghĩa) qua RRF",
                              "Nắm vững 4 chỉ số đánh giá Ragas (Context Precision, Recall, Faithfulness, Relevance)",
                              "Áp dụng nguyên tắc an toàn Agent: ReAct, max_steps, Human-in-the-loop, phòng chống OWASP"
                          ],
        "practiceQuestions":  [
                                  {
                                      "id":  "T10-A01",
                                      "prompt":  "Trong scaled dot-product attention $\\mathrm{Attention}(Q, K, V) = \\mathrm{softmax}\\left(\\frac{QK^\\top}{\\sqrt{d_k}}\\right)V$, vì sao phải chia tích vô hướng cho $\\sqrt{d_k}$?",
                                      "type":  "mcq",
                                      "options":  [
                                                      {
                                                          "key":  "A",
                                                          "text":  "Để mỗi hàng của ma trận trọng số attention có tổng đúng bằng 1"
                                                      },
                                                      {
                                                          "key":  "B",
                                                          "text":  "Để độ lớn của $q \\cdot k$ không tăng theo $d_k$, tránh softmax bão hoà làm gradient rất nhỏ"
                                                      },
                                                      {
                                                          "key":  "C",
                                                          "text":  "Để giảm độ phức tạp theo độ dài chuỗi từ $O(n^2)$ xuống $O(n \\log n)$"
                                                      },
                                                      {
                                                          "key":  "D",
                                                          "text":  "Để đưa $q$ và $k$ về độ dài 1, nhờ đó tích vô hướng trở thành đúng cosine similarity của hai vector"
                                                      }
                                                  ],
                                      "answer":  "B",
                                      "explanation":  "Nếu các thành phần của $q, k$ độc lập, trung bình 0, phương sai 1 thì $\\mathrm{Var}(q \\cdot k) = d_k$. Chia cho $\\sqrt{d_k}$ đưa phương sai về 1, giữ softmax ở vùng có gradient đủ lớn.",
                                      "distractors":  {
                                                          "A":  "Tổng mỗi hàng bằng 1 là do softmax, có chia hay không cũng vậy.",
                                                          "C":  "Phép chia cho một hằng số không đổi độ phức tạp; ma trận $QK^\\top$ vẫn có $n \\times n$ phần tử.",
                                                          "D":  "Chia cho $\\sqrt{d_k}$ là chia cho một hằng số chung, không chuẩn hoá từng vector theo độ dài của nó nên không thành cosine."
                                                      },
                                      "tags":  [
                                                   "attention",
                                                   "transformer",
                                                   "softmax"
                                               ]
                                  },
                                  {
                                      "id":  "T10-A02",
                                      "prompt":  "Tokenizer kiểu Byte Pair Encoding (BPE) mà nhiều LLM dùng xây dựng bộ từ vựng như thế nào?",
                                      "type":  "mcq",
                                      "options":  [
                                                      {
                                                          "key":  "A",
                                                          "text":  "Mỗi từ trong từ điển ngôn ngữ là một token, từ không có trong từ điển bị thay bằng token đặc biệt UNK"
                                                      },
                                                      {
                                                          "key":  "B",
                                                          "text":  "Mỗi ký tự Unicode là một token, nên số token của câu luôn bằng số ký tự"
                                                      },
                                                      {
                                                          "key":  "C",
                                                          "text":  "Mô hình học một vector cho cả câu rồi chia đều vector đó thành nhiều token"
                                                      },
                                                      {
                                                          "key":  "D",
                                                          "text":  "Bắt đầu từ byte hoặc ký tự, lặp lại việc gộp cặp đơn vị liền kề hay gặp nhất thành đơn vị mới"
                                                      }
                                                  ],
                                      "answer":  "D",
                                      "explanation":  "BPE khởi đầu từ đơn vị nhỏ nhất rồi gộp dần cặp xuất hiện nhiều nhất trong dữ liệu huấn luyện tokenizer, đến khi đủ kích thước từ vựng. Từ phổ biến thành 1 token, từ hiếm bị tách thành nhiều subword.",
                                      "distractors":  {
                                                          "A":  "Đó là tokenizer mức từ kiểu cũ; BPE (nhất là byte-level) không cần UNK vì luôn tách được về byte.",
                                                          "B":  "BPE gộp ký tự thành subword nên số token thường ít hơn số ký tự; tokenizer mức ký tự mới cho một token mỗi ký tự.",
                                                          "C":  "Nhầm tokenization (bước cắt văn bản rời rạc, trước mô hình) với embedding (vector học được, sau bước cắt)."
                                                      },
                                      "tags":  [
                                                   "token",
                                                   "BPE",
                                                   "tokenizer"
                                               ]
                                  },
                                  {
                                      "id":  "T10-A03",
                                      "prompt":  "Các embedding đã chuẩn hoá L2 ($\\lVert u \\rVert = \\lVert v \\rVert = 1$). Khoảng cách Euclid và cosine similarity liên hệ với nhau thế nào?",
                                      "type":  "mcq",
                                      "options":  [
                                                      {
                                                          "key":  "A",
                                                          "text":  "$\\lVert u - v \\rVert^2 = 2 - 2\\cos(u, v)$, nên xếp theo khoảng cách tăng dần trùng xếp theo cosine giảm dần"
                                                      },
                                                      {
                                                          "key":  "B",
                                                          "text":  "$\\lVert u - v \\rVert = 1 - \\cos(u, v)$, nên hai cách cho cùng điểm số"
                                                      },
                                                      {
                                                          "key":  "C",
                                                          "text":  "Không có liên hệ cố định; khoảng cách Euclid chỉ có ý nghĩa khi vector chưa chuẩn hoá, còn cosine thì ngược lại"
                                                      },
                                                      {
                                                          "key":  "D",
                                                          "text":  "$\\lVert u - v \\rVert^2 = \\cos(u, v)$, nên hai vector càng xa nhau thì càng giống nhau"
                                                      }
                                                  ],
                                      "answer":  "A",
                                      "explanation":  "$\\lVert u - v \\rVert^2 = \\lVert u \\rVert^2 + \\lVert v \\rVert^2 - 2u \\cdot v = 2 - 2\\cos(u, v)$ khi hai vector có độ dài 1. Đây là hàm giảm của cosine nên thứ tự láng giềng gần nhất như nhau.",
                                      "distractors":  {
                                                          "B":  "Thiếu bình phương và thiếu hệ số 2. Ví dụ $u \\perp v$: $\\lVert u - v \\rVert = \\sqrt{2}$, còn $1 - \\cos = 1$.",
                                                          "C":  "Ngược lại: chính khi đã chuẩn hoá, khoảng cách Euclid, tích vô hướng và cosine cho cùng thứ tự xếp hạng.",
                                                          "D":  "Sai chiều và sai công thức: hai vector trùng nhau có khoảng cách 0 nhưng cosine bằng 1."
                                                      },
                                      "tags":  [
                                                   "embedding",
                                                   "cosine",
                                                   "vector search"
                                               ]
                                  }
                              ]
    },
    {
        "badge":  "CĐ-11 · Đầy đủ 5 Trọng tâm thi",
        "id":  "cd11",
        "sections":  [
                         {
                             "whyInAI":  "Cam kết SLA với khách hàng và đảm bảo trải nghiệm người dùng không bị giật lag.",
                             "title":  "1. Độ trễ phục vụ (Serving Metrics): P99 \u0026 TTFT",
                             "analogy":  "• Độ trễ P99: 99% người dùng nhận kết quả trong thời gian \u003c= P99. Không bao giờ dùng Mean (trung bình) vì nó che giấu 1% user bị treo máy đơ 10 giây!\n• TTFT (Time To First Token): Thời gian từ lúc bấm gửi prompt đến lúc chữ đầu tiên xuất hiện (đo tốc độ prefill).\n• Inter-Token Latency (ITL): Tốc độ sinh giữa các từ tiếp theo (đo tốc độ decode).\n• Dynamic Batching: Gom nhiều câu hỏi của các user khác nhau thành một mẻ (batch) để GPU tính toán cùng lúc -\u003e Tăng Throughput gấp 5 lần!",
                             "formulaBox":  "• Định luật Little trong Serving:\n$$L = \\lambda \\cdot W$$\n(Số lượng request đồng thời = Tần suất request đến x Thời gian xử lý trung bình).",
                             "quickTip":  "Cam kết SLA/SLO với khách hàng: Luôn dùng Percentile P95 hoặc P99, tuyệt đối không dùng Mean!"
                         },
                         {
                             "whyInAI":  "Dự toán chi phí phần cứng và tránh lỗi Out-Of-Memory (OOM) làm sập hệ thống.",
                             "title":  "2. Tính toán VRAM GPU \u0026 Lượng tử hóa (Quantization)",
                             "analogy":  "Công thức nhẩm VRAM cho mô hình N tỷ tham số (N Billions):\n• FP16 (16-bit float, 2 bytes/param): Cần 2 x N GB VRAM. (Ví dụ 7B cần 14GB).\n• INT8 (8-bit, 1 byte/param): Cần 1 x N GB VRAM. (Ví dụ 7B cần 7GB).\n• INT4 (4-bit, 0.5 byte/param): Cần 0.5 x N GB VRAM. (Ví dụ 7B cần 3.5GB).\n• BẮT BUỘC PHẢI DỰ PHÒNG THÊM 20-30% VRAM cho KV Cache và Activations! Nếu không sẽ bị lỗi CUDA Out Of Memory!",
                             "formulaBox":  "VRAM Tối thiểu = Trọng số mô hình + KV Cache + Bộ nhớ Activations\n- PagedAttention (vLLM): Chia nhỏ KV Cache thành các trang (pages) trong RAM ảo để chống phân mảnh bộ nhớ!",
                             "quickTip":  "Mô hình 7B FP16: 7x2 = 14GB. Cộng 30% KV cache -\u003e Cần GPU ít nhất 18-24GB VRAM (như RTX 4090 hoặc A10G)!"
                         },
                         {
                             "whyInAI":  "Phát hành mô hình AI mới mà không làm gián đoạn dịch vụ hoặc gây rủi ro cho người dùng.",
                             "title":  "3. Chiến lược phát hành: Canary vs Shadow vs Blue-Green",
                             "analogy":  "• Canary (Chim hoàng yến trong hầm mỏ): Chuyển dần 5% user thật sang mô hình mới. Nếu chạy ổn định thì tăng dần lên 25% -\u003e 100%. Nếu có lỗi lập tức rollback.\n• Shadow Mode (Chạy ngầm / Dark Launch): Gửi toàn bộ 100% request thật sang cả mô hình cũ và mô hình mới. Nhưng kết quả của mô hình mới CHỈ ĐƯỢC LƯU LOG ĐỂ ĐO ĐỘ TRỄ VÀ CHẤT LƯỢNG, không trả về cho user! An toàn tuyệt đối nhưng tốn gấp đôi máy chủ.\n• Blue-Green: Hai môi trường giống hệt nhau, chuyển 100% router từ Blue sang Green.",
                             "formulaBox":  "- Kiểm tra tính an toàn: Shadow Mode là an toàn nhất vì người dùng không bị ảnh hưởng nếu mô hình mới lỗi.\n- Tiết kiệm tài nguyên: Canary Deployment tiết kiệm tài nguyên hơn Shadow Mode.",
                             "quickTip":  "Hệ thống tài chính/ngân hàng có rủi ro cực cao: Luôn dùng Shadow Mode để kiểm chứng ngầm trước khi release thật!"
                         },
                         {
                             "whyInAI":  "Phát hiện khi nào dữ liệu ngoài đời thực đã thay đổi để kịp thời huấn luyện lại mô hình.",
                             "title":  "4. Giám sát Drift bằng chỉ số PSI (Population Stability Index)",
                             "analogy":  "Dữ liệu ngoài đời luôn biến động theo thời gian:\n• Data Drift (Covariate Shift): Phân phối đầu vào X thay đổi (ví dụ độ tuổi khách hàng chuyển dịch từ già sang trẻ).\n• Concept Drift: Mối quan hệ giữa X và y thay đổi (ví dụ trước dịch thích mua sắm trực tiếp, sau dịch thích mua online).\n• Chỉ số PSI (Population Stability Index):",
                             "formulaBox":  "$$\\text{PSI} = \\sum (\\text{Actual}\\% - \\text{Expected}\\%) \\times \\ln\\left(\\frac{\\text{Actual}\\%}{\\text{Expected}\\%}\\right)$$\n• Bảng hành động chuẩn PSI:\n  - PSI \u003c 0.1: Dữ liệu ổn định, an toàn.\n  - 0.1 \u003c= PSI \u003c 0.25: Dữ liệu có sự dịch chuyển, cần theo dõi sát sao.\n  - PSI \u003e= 0.25: DRIFT NGHIÊM TRỌNG! Bắt buộc phải RETRAIN mô hình ngay!",
                             "quickTip":  "Nhớ các mốc PSI: \u003c 0.1 (an toàn), 0.1 - 0.25 (cảnh báo), \u003e= 0.25 (phải retrain gấp)!"
                         },
                         {
                             "whyInAI":  "Quyết định kinh tế sống còn cho công ty: Khi nào nên tự thuê GPU, khi nào nên gọi API trả phí của OpenAI/Anthropic?",
                             "title":  "5. FinOps \u0026 MLOps CI/CD: Tự host GPU vs Gọi API",
                             "analogy":  "• Phân tích điểm hòa vốn (Break-even Analysis):\n  - Gọi API: Chi phí biến đổi (trả tiền theo số token). Dùng ít thì rẻ, dùng hàng trăm triệu token/tháng thì hóa đơn khổng lồ!\n  - Tự host GPU: Chi phí cố định (thuê GPU .5/giờ = .000/tháng). Dù dùng hay không dùng vẫn phải trả từng đó tiền.\n  - Khi lượng request vượt qua ĐIỂM HÒA VỐN $\\to$ Tự host GPU sẽ rẻ hơn nhiều lần so với gọi API!",
                             "formulaBox":  "• Điểm hòa vốn: $Q = \\frac{\\text{Chi phí thuê GPU cố định}}{\\text{Giá API mỗi token}}$\n• Model Registry \u0026 DVC: Quản lý phiên bản trọng số mô hình và dữ liệu đi kèm mã Git commit để đảm bảo tính tái lập (Reproducibility).",
                             "quickTip":  "Lưu lượng ít, không đều -\u003e Dùng API. Lưu lượng lớn, liên tục 24/7 và cần bảo mật dữ liệu nội bộ -\u003e Tự host GPU!"
                         }
                     ],
        "title":  "MLOps và Vận hành mô hình thực chiến (Model Serving \u0026 Ops)",
        "examId":  "T11",
        "group":  "ai",
        "cheatSheet":  [
                           "VRAM: FP16 = 2*N GB | INT8 = 1*N GB | INT4 = 0.5*N GB",
                           "Luôn cộng thêm 20-30% VRAM cho KV Cache",
                           "P99 Latency: 99% request nhanh hơn mốc này | TTFT: Độ trễ token đầu",
                           "PSI: \u003c 0.1 an toàn | 0.1 - 0.25 cảnh báo | \u003e= 0.25 retrain ngay",
                           "Canary: Chuyển dần % user | Shadow: Chạy ngầm 100% không ảnh hưởng user"
                       ],
        "code":  "CĐ-11",
        "summary":  "Độ trễ P99 vs TTFT, tính toán VRAM GPU \u0026 Lượng tử hóa INT4/INT8, chiến lược phát hành Canary/Shadow, giám sát Data Drift qua PSI và bài toán FinOps.",
        "groupName":  "Nhóm 3: AI \u0026 Vận hành sản phẩm",
        "traps":  [
                      {
                          "explanation":  "Chỉ tính dung lượng trọng số mô hình mà quên KV Cache sẽ làm GPU sập khi người dùng chat dài.",
                          "trap":  "Quên dự trù VRAM cho KV Cache dẫn đến lỗi OOM"
                      }
                  ],
        "duration":  "50 phút học sâu",
        "learningGoals":  [
                              "Phân biệt Latency P95/P99 và Time To First Token (TTFT)",
                              "Tính nhẩm chính xác VRAM GPU cho mô hình và KV Cache",
                              "Lựa chọn chiến lược triển khai: Canary vs Shadow vs Blue-Green",
                              "Giám sát Data Drift và Concept Drift bằng chỉ số PSI",
                              "Phân tích điểm hòa vốn FinOps giữa tự host GPU và gọi API trả phí"
                          ],
        "practiceQuestions":  [
                                  {
                                      "id":  "T11-A01",
                                      "prompt":  "Dashboard của API chấm điểm tín dụng ghi: **p95 latency = 420 ms** (tính trên mọi request trong 1 giờ qua). Phát biểu nào diễn giải đúng con số này?",
                                      "type":  "mcq",
                                      "options":  [
                                                      {
                                                          "key":  "A",
                                                          "text":  "Độ trễ trung bình của 95% request nhanh nhất trong giờ đó là 420 ms"
                                                      },
                                                      {
                                                          "key":  "B",
                                                          "text":  "Khoảng 95% request trong giờ đó có độ trễ không vượt quá 420 ms"
                                                      },
                                                      {
                                                          "key":  "C",
                                                          "text":  "Trong 95% thời gian của giờ đó, API phản hồi đúng 420 ms"
                                                      },
                                                      {
                                                          "key":  "D",
                                                          "text":  "Chỉ 5% request có độ trễ không vượt quá 420 ms, còn lại chậm hơn"
                                                      }
                                                  ],
                                      "answer":  "B",
                                      "explanation":  "p95 là giá trị $x$ sao cho khoảng 95% quan sát $\\le x$: $P(\\text{latency} \\le 420\\ \\text{ms}) \\approx 0{,}95$. 5% request còn lại (đuôi chậm) có thể chậm hơn nhiều.",
                                      "distractors":  {
                                                          "A":  "Nhầm phân vị với trung bình có cắt đuôi. p95 là một ngưỡng (một giá trị trong phân phối), không phải trung bình của một nhóm request.",
                                                          "C":  "Nhầm tỉ lệ request với tỉ lệ thời gian, và nhầm \"không vượt quá\" thành \"bằng đúng\". p95 nói về phân phối độ trễ của các request.",
                                                          "D":  "Đảo chiều phân vị: 95% nằm **dưới** p95, chỉ khoảng 5% chậm hơn ngưỡng này."
                                                      },
                                      "tags":  [
                                                   "percentile",
                                                   "latency",
                                                   "SLO"
                                               ]
                                  },
                                  {
                                      "id":  "T11-A02",
                                      "prompt":  "Tính năng **dynamic batching** của một inference server (ví dụ NVIDIA Triton) làm gì?",
                                      "type":  "mcq",
                                      "options":  [
                                                      {
                                                          "key":  "A",
                                                          "text":  "Chia một request lớn thành nhiều batch nhỏ chạy song song trên nhiều GPU để giảm độ trễ của chính request đó"
                                                      },
                                                      {
                                                          "key":  "B",
                                                          "text":  "Tự điều chỉnh batch size khi huấn luyện để loss hội tụ nhanh hơn"
                                                      },
                                                      {
                                                          "key":  "C",
                                                          "text":  "Lưu kết quả của các request giống hệt nhau để trả lại mà không cần chạy mô hình"
                                                      },
                                                      {
                                                          "key":  "D",
                                                          "text":  "Gom các request đến gần nhau trong một cửa sổ chờ ngắn thành một batch để tăng throughput GPU"
                                                      }
                                                  ],
                                      "answer":  "D",
                                      "explanation":  "Thời gian một lượt chạy GPU thường có dạng $t(b) = t_0 + c \\cdot b$ với chi phí cố định $t_0$ lớn, nên throughput $b / t(b)$ tăng theo batch size $b$; đổi lại request phải chờ thêm tối đa một cửa sổ gom batch.",
                                      "distractors":  {
                                                          "A":  "Đây là ý tưởng chia nhỏ (sharding/tensor parallel), ngược với batching. Dynamic batching gộp nhiều request, không tách một request.",
                                                          "B":  "Nhầm batch size lúc huấn luyện (SGD) với batching lúc phục vụ. Dynamic batching chỉ là cơ chế của server suy luận.",
                                                          "C":  "Đó là cache kết quả. Batching vẫn chạy mô hình cho từng request, chỉ là chạy chung một lượt để tận dụng GPU."
                                                      },
                                      "tags":  [
                                                   "batching",
                                                   "throughput",
                                                   "serving"
                                               ]
                                  },
                                  {
                                      "id":  "T11-A03",
                                      "prompt":  "Khi dùng **DVC** để quản lý phiên bản dữ liệu huấn luyện, thứ được commit vào Git thường là gì?",
                                      "type":  "mcq",
                                      "options":  [
                                                      {
                                                          "key":  "A",
                                                          "text":  "File `.dvc`/`dvc.lock` chứa hash nội dung, trỏ tới dữ liệu nằm ở remote storage"
                                                      },
                                                      {
                                                          "key":  "B",
                                                          "text":  "Toàn bộ file dữ liệu, để Git tự nén và so sánh khác biệt giữa các phiên bản"
                                                      },
                                                      {
                                                          "key":  "C",
                                                          "text":  "Câu truy vấn SQL lấy dữ liệu; chạy lại truy vấn sẽ cho đúng dữ liệu cũ"
                                                      },
                                                      {
                                                          "key":  "D",
                                                          "text":  "Chỉ file trọng số model; dữ liệu không cần quản lý vì có thể tải lại từ nguồn"
                                                      }
                                                  ],
                                      "answer":  "A",
                                      "explanation":  "DVC băm nội dung dữ liệu (ví dụ MD5) và ghi hash vào file nhỏ được Git theo dõi; `git checkout \u003ccommit\u003e` + `dvc checkout` khôi phục đúng phiên bản dữ liệu tương ứng: $\\text{phiên bản} = (\\text{commit code}, \\text{hash dữ liệu})$.",
                                      "distractors":  {
                                                          "B":  "Git không hợp với file dữ liệu lớn (repo phình to, diff vô nghĩa với file nhị phân). DVC tách dữ liệu ra remote storage, Git chỉ giữ con trỏ.",
                                                          "C":  "Bảng nguồn thay đổi theo thời gian nên chạy lại cùng truy vấn thường ra dữ liệu khác. Muốn tái lập phải cố định nội dung bằng hash hoặc snapshot.",
                                                          "D":  "Lưu model mà không lưu dữ liệu thì không tái lập hay kiểm toán được quá trình huấn luyện; nguồn dữ liệu cũng không bất biến."
                                                      },
                                      "tags":  [
                                                   "DVC",
                                                   "data versioning",
                                                   "tái lập"
                                               ]
                                  }
                              ]
    },
    {
        "badge":  "CĐ-12 · Đầy đủ 5 Trọng tâm thi",
        "id":  "cd12",
        "sections":  [
                         {
                             "whyInAI":  "Suy luận logic là nền tảng của hệ thống chuyên gia, prompt engineering và kiểm chứng tính đúng đắn của phần mềm.",
                             "title":  "1. Logic mệnh đề, Mệnh đề phản đảo \u0026 Luật De Morgan",
                             "analogy":  "Xét câu: \u0027Nếu là chim bồ câu thì biết bay\u0027 ( \\to Q$).\n• Mệnh đề đảo: \u0027Nếu biết bay thì là chim bồ câu\u0027 ( \\to P$) -\u003e SAI (con dơi cũng biết bay).\n• MỆNH ĐỀ PHẢN ĐẢO: \u0027Nếu KHÔNG BIẾT BAY thì CHẮC CHẮN KHÔNG PHẢI CHIM BỒ CÂU\u0027 ($\\neg Q \\to \\neg P$) -\u003e LUÔN ĐÚNG 100%!\nMệnh đề phản đảo luôn có cùng chân trị với mệnh đề gốc!",
                             "formulaBox":  "• Luật tương đương logic:\n$$P \\to Q \\iff \\neg Q \\to \\neg P$$\n• Bảng chân trị phép kéo theo $P \\to Q$: CHỈ SAI khi $P$ Đúng mà $Q$ Sai. Nếu $P$ Sai, mệnh đề luôn đúng!\n• Luật De Morgan:\n  - $\\neg(A \\land B) \\iff \\neg A \\lor \\neg B$ (Phủ định của VÀ là HOẶC)\n  - $\\neg(A \\lor B) \\iff \\neg A \\land \\neg B$ (Phủ định của HOẶC là VÀ)\n• Lượng từ: Phủ định của $\\forall x, P(x)$ là $\\exists x, \\neg P(x)$ (Phủ định của \u0027Với mọi\u0027 là \u0027Tồn tại ít nhất một\u0027).",
                             "quickTip":  "Gặp câu hỏi tìm mệnh đề tương đương với \u0027Nếu A thì B\u0027? Đáp án luôn là: \u0027Nếu KHÔNG B thì KHÔNG A\u0027!"
                         },
                         {
                             "whyInAI":  "Tránh đưa ra những kết luận sai lệch chết người khi phân tích dữ liệu và báo cáo kết quả mô hình.",
                             "title":  "2. Ngụy biện logic kinh điển trong phân tích AI",
                             "analogy":  "1. Ngụy biện Tương quan là Nhân quả (Post hoc ergo propter hoc):\n   - Thấy doanh số kem bán chạy cùng lúc với số vụ người chết đuối tăng cao -\u003e Kết luận ăn kem gây chết đuối! (Thực tế là do MÙA HÈ làm người ta vừa ăn kem nhiều, vừa đi bơi nhiều).\n2. Ngụy biện Ad Hominem: Tấn công người nói thay vì phản bác luận điểm.\n3. Ngụy biện kẻ sống sót (Survivorship Bias): Chỉ phỏng vấn các triệu phú bỏ học đại học (như Bill Gates, Mark Zuckerberg) rồi kết luận \u0027bỏ học để thành công\u0027, bỏ qua hàng triệu người bỏ học khác đang thất nghiệp!",
                             "formulaBox":  "- Tương quan (Correlation) chỉ đo hai biến biến thiên cùng chiều. Muốn khẳng định Nhân quả (Causation) phải tiến hành A/B Testing hoặc phân tích biến can thiệp (Causal Inference)!",
                             "quickTip":  "Hai biến có tương quan cao (r = 0.95) KHÔNG ĐƯỢC PHÉP KẾT LUẬN biến này gây ra biến kia nếu chưa có thực nghiệm ngẫu nhiên!"
                         },
                         {
                             "whyInAI":  "Tuân thủ pháp luật dữ liệu để không bị xử phạt hàng triệu USD hoặc đình chỉ hoạt động.",
                             "title":  "3. Luật Bảo vệ Dữ liệu Cá nhân VN 2025 \u0026 GDPR",
                             "analogy":  "• Nguyên tắc Tối thiểu hóa dữ liệu (Data Minimisation): App máy tính bỏ túi KHÔNG ĐƯỢC xin quyền vị trí GPS hay danh bạ. Chỉ được thu thập đúng và đủ những gì cần thiết cho dịch vụ!\n• Giới hạn mục đích: Thu thập số điện thoại để giao hàng thì không được tự ý dùng số đó để huấn luyện mô hình gọi điện mời chào bảo hiểm.\n• Thời hạn 72 giờ: Khi phát hiện rò rỉ dữ liệu cá nhân, doanh nghiệp BẮT BUỘC phải thông báo cho cơ quan có thẩm quyền trong vòng 72 GIỜ.\n• Chuyển dữ liệu ra nước ngoài: Gửi dữ liệu khách hàng Việt Nam sang API máy chủ Mỹ bắt buộc phải có sự đồng ý của khách hàng và lập hồ sơ đánh giá tác động!",
                             "formulaBox":  "- Dữ liệu nhạy cảm: Dữ liệu sinh trắc học (vân tay, khuôn mặt), tình trạng sức khỏe, thông tin tài chính ngân hàng -\u003e Yêu cầu biện pháp bảo mật cấp cao nhất!",
                             "quickTip":  "Nhớ con số vàng trong luật dữ liệu: Thời hạn thông báo rò rỉ dữ liệu là 72 GIỜ!"
                         },
                         {
                             "whyInAI":  "Quy định quản lý AI chuẩn mực của thế giới, áp dụng cho mọi doanh nghiệp cung cấp AI toàn cầu.",
                             "title":  "4. Khung rủi ro của EU AI Act",
                             "analogy":  "EU AI Act chia AI làm 4 cấp độ rủi ro:\n1. Rủi ro không thể chấp nhận (BỊ CẤM HOÀN TOÀN):\n   - Hệ thống chấm điểm công dân (Social Scoring).\n   - Thao túng hành vi người dễ bị tổn thương (trẻ em).\n   - Nhận diện cảm xúc tại nơi làm việc/trường học.\n2. Rủi ro cao (High-risk):\n   - Chấm điểm tín dụng duyệt vay, lọc CV tuyển dụng nhân sự, chẩn đoán y tế, tư pháp.\n   - YÊU CẦU BẮT BUỘC: Kiểm toán dữ liệu, minh bạch, và CÓ SỰ GIÁM SÁT CỦA CON NGƯỜI (Human-in-the-loop)!\n3. Rủi ro hạn chế: Chatbot, Deepfake -\u003e Phải dán nhãn cho người dùng biết họ đang tương tác với AI.\n4. Rủi ro tối thiểu: Game AI, bộ lọc spam -\u003e Tự do sử dụng.",
                             "formulaBox":  "- Mức độ rủi ro cao (High-risk) bắt buộc phải có Human Oversight (Giám sát con người) để ngăn chặn Automation Bias (quá tin vào máy)!",
                             "quickTip":  "Đề thi hỏi: \u0027Hệ thống AI lọc hồ sơ tuyển dụng ứng viên thuộc mức độ rủi ro nào theo EU AI Act?\u0027. Đáp án: RỦI RO CAO (High-risk)!"
                         },
                         {
                             "whyInAI":  "Đảm bảo thuật toán không thiên vị hoặc phân biệt đối xử với nhóm yếu thế.",
                             "title":  "5. Chỉ số công bằng (Fairness) \u0026 Quy tắc 4/5",
                             "analogy":  "• Disparate Impact (Tác động bất bình đẳng) \u0026 Quy tắc 4/5:\nGiả sử ngân hàng dùng AI duyệt vay:\n- Nhóm Nam giới (đa số) có tỷ lệ được duyệt là 80%.\n- Nhóm Nữ giới (thiểu số) có tỷ lệ được duyệt là 50%.\nTỷ lệ tác động (Impact Ratio) = 50% / 80% = 0.625 (tức 62.5%).\nCon số này NHỎ HƠN 0.8 (4/5 hay 80%) -\u003e Thuật toán bị coi là CÓ PHÂN BIỆT ĐỐI XỬ VÀ PHẠM LUẬT!\n• Model Cards: Bản thông số minh bạch ghi rõ mô hình được train trên tập dữ liệu nào, giới hạn ở đâu và hiệu năng trên từng nhóm dân số.",
                             "formulaBox":  "• Quy tắc 4/5 (Four-Fifths Rule):\n$$\\text{Impact Ratio} = \\frac{\\text{Tỷ lệ duyệt nhóm thiểu số}}{\\text{Tỷ lệ duyệt nhóm đa số}} \\ge 0.8 \\text{ (80%)}$$\nNếu tỉ lệ \u003c 0.8 -\u003e Bị coi là có Disparate Impact vi phạm luật công bằng!",
                             "quickTip":  "Quy tắc 4/5 trong kiểm tra công bằng: Tỷ lệ được duyệt của nhóm bảo vệ chia nhóm đối chứng phải \u003e= 80% (0.8)!"
                         }
                     ],
        "title":  "Logic suy luận, Đạo đức \u0026 Pháp lý AI toàn diện",
        "examId":  "T12",
        "group":  "logic",
        "cheatSheet":  [
                           "P -\u003e Q tương đương với ~Q -\u003e ~P (Phản đảo)",
                           "Luật De Morgan: Phủ định VÀ là HOẶC, phủ định HOẶC là VÀ",
                           "Báo cáo rò rỉ dữ liệu: Trong vòng 72 giờ",
                           "EU AI Act: Tuyển dụng \u0026 Tín dụng là RỦI RO CAO",
                           "Quy tắc 4/5 (Disparate Impact): Tỉ lệ \u003c 80% là phân biệt đối xử"
                       ],
        "code":  "CĐ-12",
        "summary":  "Logic mệnh đề \u0026 vị từ, Mệnh đề phản đảo, Luật De Morgan, Ngụy biện logic kinh điển, Luật BVDLCN VN 2025 \u0026 GDPR (nguyên tắc 72h, tối thiểu hóa), EU AI Act và Chỉ số công bằng (Quy tắc 4/5).",
        "groupName":  "Nhóm 4: Logic, Đạo đức \u0026 Pháp lý",
        "traps":  [
                      {
                          "explanation":  "Từ P -\u003e Q, không thể suy ra Q -\u003e P. Chỉ có phản đảo ~Q -\u003e ~P mới có cùng giá trị đúng sai.",
                          "trap":  "Nhầm lẫn giữa mệnh đề đảo và mệnh đề phản đảo"
                      }
                  ],
        "duration":  "50 phút học sâu",
        "learningGoals":  [
                              "Lập luận chính xác với mệnh đề phản đảo (~Q -\u003e ~P) và luật De Morgan",
                              "Nhận diện các ngụy biện logic (Ad Hominem, Tương quan ngộ nhận là nhân quả)",
                              "Nắm vững các nguyên tắc cốt lõi của Luật BVDLCN 2025 \u0026 GDPR (Tối thiểu hóa, 72 giờ)",
                              "Phân loại 4 cấp độ rủi ro theo EU AI Act và quy định giám sát con người",
                              "Áp dụng Quy tắc 4/5 (Disparate Impact) để đánh giá công bằng trong thuật toán"
                          ],
        "practiceQuestions":  [
                                  {
                                      "id":  "T12-A01",
                                      "prompt":  "Checklist của nhóm MLOps ghi: “Nếu mô hình bị rò rỉ nhãn (label leakage) thì điểm trên tập test cao bất thường.” Gọi $p$: “mô hình bị rò rỉ nhãn”, $q$: “điểm test cao bất thường”. Câu nào là **mệnh đề đảo** (converse) của câu trong checklist?",
                                      "type":  "mcq",
                                      "options":  [
                                                      {
                                                          "key":  "A",
                                                          "text":  "Nếu điểm test không cao bất thường thì mô hình không bị rò rỉ nhãn."
                                                      },
                                                      {
                                                          "key":  "B",
                                                          "text":  "Nếu điểm test cao bất thường thì mô hình bị rò rỉ nhãn."
                                                      },
                                                      {
                                                          "key":  "C",
                                                          "text":  "Điểm test cao bất thường khi và chỉ khi mô hình bị rò rỉ nhãn."
                                                      },
                                                      {
                                                          "key":  "D",
                                                          "text":  "Mô hình bị rò rỉ nhãn nhưng điểm test lại không cao bất thường."
                                                      }
                                                  ],
                                      "answer":  "B",
                                      "explanation":  "Từ $p \\to q$: đảo là $q \\to p$, phản đảo là $\\lnot q \\to \\lnot p$. Chỉ phản đảo tương đương với câu gốc; mệnh đề đảo $q \\to p$ thì không (điểm cao bất thường có thể do mô hình tốt thật).",
                                      "distractors":  {
                                                          "A":  "Đây là mệnh đề **phản đảo** $\\lnot q \\to \\lnot p$: tương đương câu gốc nhưng không phải mệnh đề đảo; người học hay lẫn hai tên gọi này.",
                                                          "C":  "Đây là mệnh đề tương đương hai chiều $p \\leftrightarrow q$ (gộp câu gốc với mệnh đề đảo); người học hay tưởng “đảo” nghĩa là “và ngược lại”, nhưng $p \\leftrightarrow q$ khẳng định mạnh hơn $q \\to p$.",
                                                          "D":  "Đây là **phủ định** của câu gốc, $p \\land \\lnot q$ (tình huống duy nhất làm câu gốc sai), không phải một mệnh đề kéo theo."
                                                      },
                                      "tags":  [
                                                   "logic mệnh đề",
                                                   "mệnh đề đảo",
                                                   "phản đảo"
                                               ]
                                  },
                                  {
                                      "id":  "T12-A02",
                                      "prompt":  "Trong dịch vụ quảng cáo có đoạn code:\n\n```python\nif not (is_spam or is_bot):\n    show_ads(user)\n```\n\nĐiều kiện nào dưới đây **tương đương** với `not (is_spam or is_bot)` với mọi giá trị `bool` của hai biến?",
                                      "type":  "mcq",
                                      "options":  [
                                                      {
                                                          "key":  "A",
                                                          "text":  "`not is_spam or not is_bot`"
                                                      },
                                                      {
                                                          "key":  "B",
                                                          "text":  "`not is_spam or is_bot`"
                                                      },
                                                      {
                                                          "key":  "C",
                                                          "text":  "`not is_spam and is_bot`"
                                                      },
                                                      {
                                                          "key":  "D",
                                                          "text":  "`not is_spam and not is_bot`"
                                                      }
                                                  ],
                                      "answer":  "D",
                                      "explanation":  "Luật De Morgan: $\\lnot(s \\lor b) \\equiv \\lnot s \\land \\lnot b$. Phủ định một phép **hoặc** thành phép **và** của các phủ định: chỉ hiện quảng cáo khi không spam **và** không phải bot.",
                                      "distractors":  {
                                                          "A":  "Quên đổi phép toán: $\\lnot s \\lor \\lnot b \\equiv \\lnot(s \\land b)$, đúng cả khi người dùng là bot nhưng không spam, nên vẫn hiện quảng cáo cho bot.",
                                                          "B":  "Nhầm thứ tự ưu tiên: Python hiểu `not is_spam or is_bot` là $(\\lnot s) \\lor b$, tức `not` chỉ áp lên `is_spam`; khi là bot thì điều kiện lại đúng.",
                                                          "C":  "Chỉ phủ định vế đầu rồi đổi phép toán: $\\lnot s \\land b$ chỉ đúng khi **là** bot, ngược hẳn ý đồ."
                                                      },
                                      "tags":  [
                                                   "De Morgan",
                                                   "Python",
                                                   "biểu thức bool"
                                               ]
                                  },
                                  {
                                      "id":  "T12-A03",
                                      "prompt":  "Trong buổi review, một kỹ sư mới chỉ ra rằng mô hình duyệt vay có tỉ lệ từ chối nhầm ở nhóm khách hàng nông thôn cao gấp đôi nhóm thành thị. Trưởng nhóm đáp: “Em mới vào công ty ba tháng, chưa đủ kinh nghiệm để nhận xét mô hình này.” Câu đáp của trưởng nhóm mắc ngụy biện nào?",
                                      "type":  "mcq",
                                      "options":  [
                                                      {
                                                          "key":  "A",
                                                          "text":  "Công kích cá nhân (ad hominem)"
                                                      },
                                                      {
                                                          "key":  "B",
                                                          "text":  "Người rơm (straw man)"
                                                      },
                                                      {
                                                          "key":  "C",
                                                          "text":  "Dốc trượt (slippery slope)"
                                                      },
                                                      {
                                                          "key":  "D",
                                                          "text":  "Dựa vào uy quyền (appeal to authority)"
                                                      }
                                                  ],
                                      "answer":  "A",
                                      "explanation":  "Trưởng nhóm không phản bác số liệu về tỉ lệ từ chối nhầm mà bác bỏ lập luận dựa trên đặc điểm của người nói (thâm niên). Đó là công kích cá nhân: giá trị của một lập luận không phụ thuộc vào người đưa ra nó.",
                                      "distractors":  {
                                                          "B":  "Người rơm là bóp méo lập luận của đối phương thành một phiên bản yếu hơn rồi đánh vào đó; ở đây trưởng nhóm không diễn đạt lại ý của kỹ sư.",
                                                          "C":  "Dốc trượt là cho rằng một bước nhỏ tất yếu dẫn tới chuỗi hậu quả cực đoan; câu đáp không nói gì về hậu quả.",
                                                          "D":  "Dựa vào uy quyền là viện dẫn một chuyên gia để khẳng định điều gì đó đúng; ở đây trưởng nhóm tấn công người nói, không viện dẫn ai để chứng minh mô hình ổn."
                                                      },
                                      "tags":  [
                                                   "ngụy biện",
                                                   "ad hominem",
                                                   "công bằng"
                                               ]
                                  }
                              ]
    },
    {
        "badge":  "Tổng hợp · 6 Đề thi 90 phút",
        "id":  "tonghop",
        "sections":  [
                         {
                             "whyInAI":  "Nhiều bạn trượt bài thi ĐGNL không phải vì kém kiến thức, mà vì phân bổ thời gian sai lầm, sa đà vào câu toán khó ở đầu bài rồi không kịp làm phần sau.",
                             "title":  "1. Chiến thuật phân bổ 90 phút cho 60 câu",
                             "analogy":  "Đề thi tổng hợp 90 phút giống như một trận bóng đá: Bạn phải phân phối thể lực hợp lý cho cả 4 hiệp đấu:\n• Hiệp 1 (Phút 00 - 20): Giải quyết dứt điểm Phần A (Toán) và Phần D (Logic/Pháp lý). Khi đầu óc còn minh mẫn nhất, giải quyết các câu tính nhẩm và lý thuyết nhanh.\n• Hiệp 2 (Phút 20 - 55): Xử lý Phần B (Lập trình \u0026 pandas/SQL). Cần đọc code cẩn thận từng dòng để tránh bẫy biến mutable và điều kiện biên.\n• Hiệp 3 (Phút 55 - 80): Xử lý Phần C (Kiến thức AI, RAG, MLOps) và các câu Tự luận thiết kế hệ thống.\n• Hiệp 4 (Phút 80 - 90): RÀ SOÁT LẠI TOÀN BỘ. Tuyệt đối không để trống bất kỳ câu nào!",
                             "formulaBox":  "• Quy tắc 3 phút: Nếu một câu trắc nghiệm bạn tính quá 3 phút chưa ra kết quả -\u003e ĐÁNH DẤU LẠI VÀ CHUYỂN CÂU NGAY. Mỗi câu trắc nghiệm chỉ chiếm 0.75 - 1 điểm, không được đánh đổi 1 câu trắc nghiệm lấy 3 câu tự luận nhiều điểm phía sau!",
                             "quickTip":  "Câu tự luận và câu code viết tay: Dù không viết được trọn vẹn, hãy ghi rõ hướng tiếp cận logic và tên các hàm/thư viện chính. Giám khảo chấm theo barem từng ý, bạn vẫn sẽ lấy được 40% - 60% số điểm!"
                         },
                         {
                             "whyInAI":  "Các câu tự luận đề thi mốc 3 tháng (ĐGNL 04, 05, 06) yêu cầu bạn đóng vai trò Senior AI Engineer thiết kế giải pháp thực tế cho doanh nghiệp.",
                             "title":  "2. Framework 5 bước làm bài Tự luận System Design chuẩn SFIA",
                             "analogy":  "Khi gặp đề bài: \u0027Hãy thiết kế hệ thống AI phát hiện gian lận giao dịch cho ngân hàng X\u0027 hoặc \u0027Xây dựng trợ lý AI tra cứu văn bản pháp luật cho tập đoàn Y\u0027:\nĐừng cắm đầu vào viết code ngay! Hãy trình bày chuẩn mực theo 5 bước:\n1. Ràng buộc \u0026 Mục tiêu (Constraints): Xác định rõ độ trễ cam kết (P99 \u003c 200ms) và ngân sách chi phí.\n2. Dữ liệu (Data Pipeline): Nguồn dữ liệu ở đâu, làm sạch missing values, chiến lược chia train/test chống data leakage.\n3. Kiến trúc mô hình \u0026 Đánh đổi (Architecture \u0026 Trade-offs): Giải thích vì sao dùng Hybrid Search thay vì Vector thuần? Vì sao dùng mô hình nhỏ lượng tử hóa thay vì gọi API đắt đỏ?\n4. Đánh giá \u0026 Giám sát (Eval \u0026 Monitoring): Chọn đúng metric (PR-AUC, F1, Ragas faithfulness), giám sát Data drift qua PSI.\n5. An toàn \u0026 Pháp lý (Safety \u0026 Compliance): Guardrails chống prompt injection, Human-in-the-loop cho hành động nhạy cảm, tuân thủ Luật Bảo vệ dữ liệu cá nhân.",
                             "formulaBox":  "Framework 5 bước: Ràng buộc -\u003e Dữ liệu -\u003e Kiến trúc \u0026 Trade-off -\u003e Đánh giá \u0026 Drift -\u003e An toàn \u0026 Luật pháp.",
                             "quickTip":  "Bài thi chuẩn SFIA đánh giá cao khả năng GIẢI THÍCH LÝ DO TẠI SAO (Trade-offs) chứ không chỉ nêu tên công nghệ!"
                         }
                     ],
        "title":  "Chiến lược làm Đề Tổng hợp \u0026 Tình huống SFIA L3–L4",
        "examId":  "E01",
        "group":  "tonghop",
        "cheatSheet":  [
                           "90p = 20p (Toán/Logic) + 35p (Code/Data) + 25p (AI/System) + 10p (Rà soát)",
                           "Không câu nào bỏ trống: Viết được bước nào có điểm bước đó",
                           "System Design: Ràng buộc -\u003e Dữ liệu -\u003e Mô hình/Trade-off -\u003e Đánh giá -\u003e An toàn"
                       ],
        "code":  "ĐGNL-ALL",
        "summary":  "Bí kíp phân bổ thời gian 90 phút cho 60 câu, mẹo tính nhẩm không máy tính, và Framework 5 bước làm bài tự luận Thiết kế Hệ thống AI (System Design).",
        "groupName":  "Thực chiến ĐGNL Tổng hợp",
        "traps":  [
                      {
                          "explanation":  "Giám khảo chấm điểm từng bước. Ghi rõ hướng tư duy và giả định bài toán sẽ luôn nhận được điểm thành phần, bỏ trống đồng nghĩa mất trắng 10-15 điểm.",
                          "trap":  "Bỏ trống câu tự luận hoặc câu code viết tay"
                      }
                  ],
        "duration":  "45 phút học chiến lược",
        "learningGoals":  [
                              "Phân bổ thời gian 90 phút: 20p Toán/Logic + 35p Code + 25p AI + 10p Rà soát",
                              "Tuyệt đối không để trống câu tự luận hoặc câu code viết tay",
                              "Áp dụng Framework 5 bước giải quyết bài toán System Design chuẩn SFIA L3-L4",
                              "Lựa chọn trade-off kiến trúc (chi phí, độ trễ, an toàn) theo góc nhìn AI Lead"
                          ],
        "practiceQuestions":  [
                                  {
                                      "id":  "E01-A01",
                                      "prompt":  "Định thức của ma trận $A = \\begin{bmatrix}3 \u0026 -2\\\\ 5 \u0026 4\\end{bmatrix}$ bằng bao nhiêu?",
                                      "type":  "mcq",
                                      "options":  [
                                                      {
                                                          "key":  "A",
                                                          "text":  "2"
                                                      },
                                                      {
                                                          "key":  "B",
                                                          "text":  "22"
                                                      },
                                                      {
                                                          "key":  "C",
                                                          "text":  "12"
                                                      },
                                                      {
                                                          "key":  "D",
                                                          "text":  "7"
                                                      }
                                                  ],
                                      "answer":  "B",
                                      "explanation":  "$\\det(A) = ad - bc = 3 \\cdot 4 - (-2) \\cdot 5 = 12 + 10 = 22$.",
                                      "distractors":  {
                                                          "A":  "Đây là kết quả khi bỏ qua dấu âm của phần tử $-2$, tức tính $12 - 10$; dấu của $b$ bị mất nên phép trừ $bc$ thành $12 - 10$.",
                                                          "C":  "12 chỉ là tích đường chéo chính $ad$, quên trừ đi $bc$.",
                                                          "D":  "7 là vết (trace) $3 + 4$ của ma trận, không phải định thức."
                                                      },
                                      "tags":  [
                                                   "định thức",
                                                   "ma trận 2x2"
                                               ]
                                  },
                                  {
                                      "id":  "E01-A02",
                                      "prompt":  "Cho ma trận $M = \\begin{bmatrix}k \u0026 6\\\\ 1 \u0026 3\\end{bmatrix}$. Ma trận $M$ **không** khả nghịch khi và chỉ khi $k$ bằng bao nhiêu?",
                                      "type":  "mcq",
                                      "options":  [
                                                      {
                                                          "key":  "A",
                                                          "text":  "$k = 6$"
                                                      },
                                                      {
                                                          "key":  "B",
                                                          "text":  "$k = 0$"
                                                      },
                                                      {
                                                          "key":  "C",
                                                          "text":  "$k = -2$"
                                                      },
                                                      {
                                                          "key":  "D",
                                                          "text":  "$k = 2$"
                                                      }
                                                  ],
                                      "answer":  "D",
                                      "explanation":  "$M$ không khả nghịch $\\Leftrightarrow \\det(M) = 0$. $\\det(M) = k \\cdot 3 - 6 \\cdot 1 = 3k - 6 = 0 \\Rightarrow k = 2$. Kiểm tra: hàng 1 là $(2, 6) = 2 \\times (1, 3)$, tức gấp 2 lần hàng 2, nên hai hàng phụ thuộc tuyến tính.",
                                      "distractors":  {
                                                          "A":  "Nhầm $k$ với phần tử 6 ở cùng hàng; thay $k = 6$ cho $\\det = 18 - 6 = 12 \\ne 0$.",
                                                          "B":  "$k = 0$ cho $\\det = -6 \\ne 0$ nên $M$ vẫn khả nghịch; ma trận chứa số 0 không có nghĩa là suy biến.",
                                                          "C":  "Giải sai dấu thành $3k + 6 = 0$; thay $k = -2$ cho $\\det = -6 - 6 = -12 \\ne 0$."
                                                      },
                                      "tags":  [
                                                   "định thức",
                                                   "ma trận khả nghịch"
                                               ]
                                  },
                                  {
                                      "id":  "E01-A03",
                                      "prompt":  "Cho $A = \\begin{bmatrix}1 \u0026 2\\\\ 3 \u0026 4\\end{bmatrix}$ và $B = \\begin{bmatrix}2 \u0026 1\\\\ 0 \u0026 3\\end{bmatrix}$. Phần tử ở **hàng 2, cột 1** của tích $AB$ là:",
                                      "type":  "mcq",
                                      "options":  [
                                                      {
                                                          "key":  "A",
                                                          "text":  "6"
                                                      },
                                                      {
                                                          "key":  "B",
                                                          "text":  "9"
                                                      },
                                                      {
                                                          "key":  "C",
                                                          "text":  "0"
                                                      },
                                                      {
                                                          "key":  "D",
                                                          "text":  "2"
                                                      }
                                                  ],
                                      "answer":  "A",
                                      "explanation":  "$(AB)_{21} = (\\text{hàng 2 của } A) \\cdot (\\text{cột 1 của } B) = 3 \\cdot 2 + 4 \\cdot 0 = 6$. Toàn bộ $AB = \\begin{bmatrix}2 \u0026 7\\\\ 6 \u0026 15\\end{bmatrix}$.",
                                      "distractors":  {
                                                          "B":  "9 là phần tử tương ứng của $BA$ ($0 \\cdot 1 + 3 \\cdot 3$), tức đã đổi thứ tự nhân; nhân ma trận không giao hoán.",
                                                          "C":  "0 là kết quả của tích từng phần tử $3 \\cdot 0$ (tích Hadamard), không phải tích ma trận.",
                                                          "D":  "2 là phần tử $(AB)_{11}$, tức lấy nhầm hàng 1 của $A$ thay vì hàng 2."
                                                      },
                                      "tags":  [
                                                   "nhân ma trận"
                                               ]
                                  }
                              ]
    }
];