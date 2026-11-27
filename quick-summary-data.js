/**
 * quick-summary-data.js
 * Bản rút gọn cực ngắn cho toàn bộ 12 Chuyên đề + Đề Tổng hợp AI20K
 * Bao gồm:
 * 1. glossary: Bảng ký hiệu & định nghĩa phản xạ nhanh siêu dễ nhớ trên cùng
 * 2. groups: Toàn bộ công thức bấm máy, mẹo trắc nghiệm 3s, bẫy thi chuẩn đề thi ĐGNL
 */

window.QUICK_SUMMARY_DATA = {
  "cd01": {
    "title": "Bản rút gọn cực ngắn cho toàn bộ CĐ-01, chỉ giữ đúng công thức bấm máy & mẹo khoanh trắc nghiệm:",
    "glossary": [
      { "symbol": "\\text{tr}(A)", "meaning": "Vết ma trận = Tổng các phần tử trên đường chéo chính (bằng tổng các trị riêng $\\sum \\lambda_i$)." },
      { "symbol": "\\det(A)", "meaning": "Định thức = Hệ số co giãn diện tích/thể tích (bằng 0 là suy biến, phẳng bẹp không có nghịch đảo)." },
      { "symbol": "\\|x\\|_1", "meaning": "Chuẩn L1 = Khoảng cách Manhattan (cộng dồn trị tuyệt đối $\\sum |x_i|$, dùng trong Lasso tạo trọng số thưa 0)." },
      { "symbol": "\\|x\\|_2", "meaning": "Chuẩn L2 = Khoảng cách Euclidean đường chim bay ($\\sqrt{\\sum x_i^2}$, dùng trong Ridge và chuẩn hóa vector)." },
      { "symbol": "u \\cdot v", "meaning": "Tích vô hướng = Đo mức độ cùng hướng giữa 2 vector ($u^T v = \\|u\\| \\|v\\| \\cos \\theta$, bằng 0 là vuông góc trực giao)." },
      { "symbol": "\\cos(\\theta)", "meaning": "Cosine Similarity = Độ tương đồng hướng giữa 2 embedding $\\in [-1, 1]$, độc lập với độ dài văn bản." },
      { "symbol": "\\text{rank}(A)", "meaning": "Hạng ma trận = Số chiều độc lập tuyến tính tối đa (số thông tin không bị trùng lặp, số dòng/cột độc lập)." },
      { "symbol": "Av = \\lambda v", "meaning": "Trị riêng $\\lambda$ & vector riêng $v$ = Hướng $v$ không bị quay phương sau biến đổi, chỉ bị co/dãn $\\lambda$ lần." },
      { "symbol": "\\sigma_i", "meaning": "Giá trị kỳ dị (SVD) = Căn bậc hai trị riêng của $A^T A$ (độ dài bán trục biến dạng chính, nền tảng LoRA/PCA)." }
    ],
    "groups": [
      {
        "category": "Chuẩn, Tích vô hướng & Cosine Similarity",
        "items": [
          "**Chuẩn $L_1$ (Manhattan):** $\\|x\\|_1 = \\sum |x_i|$. Phạt Lasso ép trọng số về đúng 0 (Feature Selection).",
          "**Chuẩn $L_2$ (Euclidean):** $\\|x\\|_2 = \\sqrt{\\sum x_i^2} = \\sqrt{x^T x}$. Phạt Ridge co nhỏ trọng số, chống đa cộng tuyến.",
          "**Tích vô hướng:** $u \\cdot v = \\sum u_i v_i = \\|u\\|_2 \\|v\\|_2 \\cos \\theta$. Hai vector vuông góc (trực giao $u \\perp v$) $\\Longleftrightarrow u \\cdot v = 0$.",
          "**Cosine Similarity (Cốt lõi Vector DB/RAG):** $\\cos \\theta = \\frac{u \\cdot v}{\\|u\\|_2 \\|v\\|_2} \\in [-1, 1]$. Bất biến khi nhân số dương: $\\cos(u, kv) = \\cos(u, v)$ với mọi $k > 0$ (văn bản lặp đôi tần suất thì cosine không đổi).",
          "**Vector đã chuẩn hóa (\\|u\\| = \\|v\\| = 1):** $\\cos \\theta = u \\cdot v$ (chính là tích vô hướng, tính cực nhanh trong FAISS/ChromaDB).",
          "**Mối liên hệ giữa Cosine & Khoảng cách Euclid:** $\\|u - v\\|_2^2 = \\|u\\|^2 + \\|v\\|^2 - 2(u \\cdot v) = 2(1 - \\cos \\theta) \\implies \\|u - v\\|_2 = \\sqrt{2(1 - \\cos \\theta)}$. Cực đại hóa Cosine tương đương cực tiểu hóa khoảng cách Euclid!",
          "**Khoảng cách Cosine (Cosine Distance):** $D_{\\cos}(u, v) = 1 - \\cos \\theta \\in [0, 2]$. (Không thỏa bất đẳng thức tam giác nên không phải metric chuẩn).",
          "**Phép chiếu trực giao (Orthogonal Projection):** Chiếu $u$ lên $v$: $\\text{proj}_v(u) = \\frac{u \\cdot v}{\\|v\\|_2^2} v$. Thành phần trực giao khử thiên lệch (de-biasing): $u_\\perp = u - \\text{proj}_v(u)$."
        ]
      },
      {
        "category": "Ma trận, Phép nhân, Chuyển vị & Ma trận trực giao",
        "items": [
          "**Phép nhân & Kích thước:** Phép nhân $(m \\times k) \\cdot (k \\times n) \\rightarrow (m \\times n)$. Không giao hoán ($AB \\ne BA$).",
          "**Chuyển vị:** $(AB)^T = B^T A^T$; $(ABC)^T = C^T B^T A^T$; $(A + B)^T = A^T + B^T$.",
          "**Ma trận trực giao ($Q$):** $Q^T Q = Q Q^T = I \\implies Q^{-1} = Q^T$. Bảo toàn độ dài $\\|Qx\\|_2 = \\|x\\|_2$ và góc (bảo toàn khoảng cách Euclid). Ứng dụng: RoPE xoay vector trong LLaMA, phép xoay $2D$: $R(\\theta)^{-1} = R(\\theta)^T = R(-\\theta)$.",
          "**LoRA (Low-Rank Adaptation $d \\times d$, hạng $r \\ll d$):** Phân rã $\\Delta W = B \\cdot A$ với $B \\in \\mathbb{R}^{d \\times r}, A \\in \\mathbb{R}^{r \\times d}$. Giảm số tham số từ $d^2$ còn $2dr$ (ví dụ: $d=1024, r=4 \\to 2 \\cdot 1024 \\cdot 4 = 8.192$, tiết kiệm $>99\\%$ VRAM)."
        ]
      },
      {
        "category": "Định thức (det) & Nghịch đảo ma trận",
        "items": [
          "$\\det(kA) = k^n \\det A$ ($n$ là cấp ma trận vuông $A \\in \\mathbb{R}^{n \\times n}$). Ví dụ: $A_{3 \\times 3}$ có $\\det A = 5 \\implies \\det(2A^T) = 2^3 \\det A = 8 \\cdot 5 = 40$.",
          "$\\det(A^T) = \\det A$; $\\det(AB) = \\det A \\cdot \\det B$; $\\det(A^{-1}) = \\frac{1}{\\det A}$.",
          "**Ý nghĩa hình học:** $|\\det M|$ là hệ số co giãn diện tích (2D) hoặc thể tích (3D). Nếu $\\det M < 0 \\implies$ phép biến đổi làm lật ngược hướng không gian.",
          "**Nghịch đảo $2 \\times 2$:** $\\begin{bmatrix}a & b \\\\ c & d\\end{bmatrix}^{-1} = \\frac{1}{ad-bc}\\begin{bmatrix}d & -b \\\\ -c & a\\end{bmatrix}$. Tồn tại nghịch đảo $\\Longleftrightarrow \\det(A) = ad - bc \\ne 0$."
        ]
      },
      {
        "category": "Độc lập tuyến tính, Hạng (Rank) & Hệ phương trình",
        "items": [
          "**Quy tắc số chiều:** Tập gồm $k$ vector trong không gian $\\mathbb{R}^n$ với $k > n$ thì CHẮC CHẮN phụ thuộc tuyến tính.",
          "**Ma trận vuông phụ thuộc tuyến tính:** $\\Longleftrightarrow \\det(A) = 0 \\Longleftrightarrow \\text{rank}(A) < n \\Longleftrightarrow$ Có ít nhất một trị riêng $\\lambda = 0$.",
          "**Bất đẳng thức Hạng:** $\\text{rank}(A_{m \\times n}) \\le \\min(m, n)$; $\\text{rank}(AB) \\le \\min(\\text{rank}(A), \\text{rank}(B))$.",
          "**Hệ phương trình $Ax = b$ (Định lý Rouché-Capelli):**\n• Nghiệm duy nhất: $\\text{rank}(A) = \\text{rank}([A|b]) = n$.\n• Vô số nghiệm: $\\text{rank}(A) = \\text{rank}([A|b]) < n$ (số biến tự do $= n - \\text{rank}(A)$).\n• Vô nghiệm: $\\text{rank}(A) < \\text{rank}([A|b])$."
        ]
      },
      {
        "category": "Trị riêng ($\\lambda$) & Vector riêng ($v$)",
        "items": [
          "**Phương trình đặc trưng:** $Av = \\lambda v \\Longleftrightarrow (A - \\lambda I)v = 0 \\Longleftrightarrow \\det(A - \\lambda I) = 0$.",
          "**Công thức nhẩm 2 đại lượng vàng:**\n• Tổng các trị riêng: $\\sum \\lambda_i = \\text{tr}(A)$ (tổng đường chéo chính).\n• Tích các trị riêng: $\\prod \\lambda_i = \\det(A)$.",
          "**Phương trình bậc 2 cho ma trận $2 \\times 2$:** $\\lambda^2 - \\text{tr}(A)\\lambda + \\det(A) = 0$.",
          "**Tính chất trị riêng theo phép biến đổi:**\n• Ma trận $A^{-1}$ có trị riêng là $\\frac{1}{\\lambda}$.\n• Ma trận lũy thừa $A^k$ có trị riêng là $\\lambda^k$ (giữ nguyên vector riêng).\n• Ma trận $P(A) = c_k A^k + \\dots + c_0 I$ có trị riêng $P(\\lambda)$.\n• Ma trận $A^T$ có cùng tập trị riêng với $A$.",
          "**Bán kính phổ $\\rho(A) = \\max |\\lambda_i|$:** Quyết định sự hội tụ của mạng nơ-ron hồi quy RNN:\n• $|\\lambda_{\\max}| > 1 \\implies$ Lũy thừa $W^t$ bùng nổ gradient (Exploding gradient).\n• $|\\lambda_{\\max}| < 1 \\implies$ Lũy thừa $W^t \\to 0$ tiêu biến gradient (Vanishing gradient).",
          "**Ma trận đối xứng thực ($A = A^T$):** Mọi trị riêng đều là số THỰC; các vector riêng thuộc các trị riêng khác nhau luôn TRỰC GIAO với nhau ($v_i \\perp v_j$)."
        ]
      },
      {
        "category": "SVD, PCA & Hồi quy tuyến tính OLS",
        "items": [
          "**Phân rã SVD:** $X = U \\Sigma V^T$ với $U, V$ là các ma trận trực giao. Các giá trị kỳ dị $\\sigma_i = \\sqrt{\\lambda_i(X^T X)}$. Số $\\sigma_i > 0$ chính là $\\text{rank}(X)$.",
          "**Định lý Eckart-Young (Xấp xỉ hạng $k$ tối ưu):** Ma trận hạng $k$ gần $X$ nhất là $X_k = \\sum_{i=1}^k \\sigma_i u_i v_i^T$. Sai số chuẩn Frobenius: $\\|X - X_k\\|_F = \\sqrt{\\sum_{i=k+1}^r \\sigma_i^2}$.",
          "**PCA 1D (Principal Component Analysis):** Giảm chiều xuống $w_1$ (vector riêng ứng với trị riêng lớn nhất của ma trận hiệp phương sai). Tọa độ $z = w_1^T (x - \\mu)$, điểm tái tạo $\\hat{x} = \\mu + z w_1$.",
          "**Tỉ lệ phương sai giải thích trong PCA:** Tỉ lệ giữ lại $= \\frac{\\sum_{i=1}^k \\sigma_i^2}{\\sum_{i=1}^r \\sigma_i^2}$.",
          "**Hồi quy tuyến tính OLS (Phương trình chuẩn Normal Equation):** $X^T X \\beta = X^T y \\Longleftrightarrow \\beta = (X^T X)^{-1} X^T y$ (yêu cầu $X^T X$ khả nghịch, tức $X$ có các cột độc lập tuyến tính)."
        ]
      }
    ]
  },

  "cd02": {
    "title": "Bản rút gọn cực ngắn cho CĐ-02 (Giải tích & Tối ưu hóa), chỉ giữ đúng công thức tính nhanh & mẹo trắc nghiệm:",
    "glossary": [
      { "symbol": "\\nabla f", "meaning": "Gradient (vector đạo hàm riêng) = Hướng tăng dốc nhất của hàm số tại điểm khảo sát." },
      { "symbol": "-\\nabla f", "meaning": "Negative Gradient = Hướng giảm dốc nhất (hướng đi của thuật toán Gradient Descent)." },
      { "symbol": "D_u f", "meaning": "Đạo hàm theo hướng vector đơn vị $u = \\nabla f \\cdot u$ (hình chiếu của gradient lên hướng $u$)." },
      { "symbol": "H = \\nabla^2 f", "meaning": "Ma trận Hessian = Ma trận các đạo hàm riêng bậc hai (đo độ cong cục bộ của mặt phẳng hàm mất mát)." },
      { "symbol": "\\eta", "meaning": "Learning Rate (Tốc độ học) = Độ dài bước nhảy theo hướng gradient trong mỗi epoch." },
      { "symbol": "\\sigma(z)", "meaning": "Hàm Sigmoid = Nén giá trị từ $(-\\infty, +\\infty)$ về $(0, 1)$, biểu diễn xác suất nhị phân." },
      { "symbol": "p_i - y_i", "meaning": "Gradient của hàm Cross-Entropy kết hợp Softmax/Sigmoid = Hiệu số giữa xác suất dự đoán và nhãn thực." },
      { "symbol": "m_t, v_t", "meaning": "Mô-men bậc 1 (trung bình gradient có đà) và bậc 2 (trung bình bình phương gradient) trong optimizer Adam." }
    ],
    "groups": [
      {
        "category": "Đạo hàm, Gradient & Đạo hàm theo hướng",
        "items": [
          "**Quy tắc chuỗi (Chain Rule) & Đồ thị tính toán:** $\\frac{dL}{dx} = \\frac{dL}{dy} \\cdot \\frac{dy}{dx}$. Mạng nơ-ron dùng Reverse-mode Autograd (Backpropagation) truyền gradient ngược từ output về input chỉ tốn $O(1)$ lần forward-pass.",
          "**Đạo hàm theo hướng vector đơn vị $u$ ($\\|u\\|_2 = 1$):** $D_u f(x_0) = \\nabla f(x_0) \\cdot u$. Đạt giá trị lớn nhất $= +\\|\\nabla f\\|_2$ khi $u$ cùng hướng với $\\nabla f$; đạt giá trị nhỏ nhất $= -\\|\\nabla f\\|_2$ khi $u$ ngược hướng ($-\\nabla f$).",
          "**Đạo hàm ma trận cốt lõi (Matrix Calculus):**\n• $\\nabla_w (w^T x) = x$\n• $\\nabla_w (w^T A w) = (A + A^T)w$ (nếu $A$ đối xứng thì $= 2Aw$)\n• $\\nabla_w \\|Xw - y\\|_2^2 = 2 X^T (Xw - y)$ (Gradient của hàm mất mát OLS/MSE)."
        ]
      },
      {
        "category": "Hàm kích hoạt & Đạo hàm nhanh",
        "items": [
          "**Sigmoid:** $\\sigma(z) = \\frac{1}{1 + e^{-z}} \\implies \\sigma'(z) = \\sigma(z)(1 - \\sigma(z))$. Đạt cực đại tại $z=0$ với $\\sigma'(0) = 0.25$. Khi $|z| > 5 \\implies \\sigma' \\to 0$ (gây tiêu biến gradient khi xếp chồng nhiều lớp).",
          "**Tanh:** $\\tanh(z) = \\frac{e^z - e^{-z}}{e^z + e^{-z}} \\implies \\tanh'(z) = 1 - \\tanh^2(z)$. Đối xứng qua gốc tọa độ 0, có đạo hàm cực đại $= 1$ tại $z=0$.",
          "**Softplus:** $f(x) = \\ln(1 + e^x) \\implies f'(x) = \\sigma(x)$ (chính là hàm Sigmoid!). Nếu $f(x) = \\ln(1 + e^{kx}) \\implies f'(x) = k \\sigma(kx)$.",
          "**ReLU & Leaky ReLU:** $\\text{ReLU}(x) = \\max(0, x) \\implies f'(x) = 1$ nếu $x > 0$, $0$ nếu $x < 0$ (nguy cơ Dead ReLU nếu $x \\le 0$). $\\text{LeakyReLU}(x) = \\max(\\alpha x, x) \\implies f' = \\alpha$ khi $x < 0$.",
          "**Gradient vàng của Softmax + Cross-Entropy:** $\\frac{\\partial L}{\\partial z_i} = p_i - y_i$. Đạo hàm cực kỳ đơn giản: chỉ là hiệu giữa xác suất dự đoán $p_i$ và nhãn ground-truth $y_i$."
        ]
      },
      {
        "category": "Ma trận Hessian & Điểm dừng (Critical Points)",
        "items": [
          "**Khai triển Taylor bậc 2:** $f(w + \\Delta w) \\approx f(w) + \\nabla f(w)^T \\Delta w + \\frac{1}{2} \\Delta w^T H \\Delta w$.",
          "**Phân loại điểm dừng khi $\\nabla f(w^*) = 0$ dựa trên Hessian $H$:**\n• Cực tiểu địa phương (Local Minimum): Mọi trị riêng $\\lambda_i(H) > 0$ ($H$ xác định dương).\n• Cực đại địa phương (Local Maximum): Mọi trị riêng $\\lambda_i(H) < 0$ ($H$ xác định âm).\n• Điểm yên ngựa (Saddle Point): Tồn tại cả $\\lambda > 0$ và $\\lambda < 0$ (rất phổ biến trong không gian nghìn chiều của Deep Learning).\n• Chưa kết luận được: Có ít nhất một $\\lambda = 0$.",
          "**Phương pháp Newton bậc 2:** $w_{t+1} = w_t - H^{-1} \\nabla f(w_t)$. Hội tụ bậc 2 cực nhanh gần điểm cực tiểu nhưng tốn $O(d^3)$ tính nghịch đảo ma trận Hessian."
        ]
      },
      {
        "category": "Thuật toán Tối ưu hóa (Optimizers: GD, Momentum, Adam)",
        "items": [
          "**Gradient Descent (GD):** $w_{t+1} = w_t - \\eta \\nabla L(w_t)$. Điều kiện để không phân kỳ: $\\eta < \\frac{2}{\\lambda_{\\max}(H)}$. Nếu $\\eta$ quá lớn $\\implies$ Loss nhảy vọt, phân kỳ ra vô cùng.",
          "**Momentum:** $v_t = \\beta v_{t-1} + \\nabla L(w_t)$, $w_{t+1} = w_t - \\eta v_t$. Giúp dập tắt dao động ngoằn ngoèo ở các khe hẹp (ravines) và gia tốc lăn qua các vùng bằng phẳng.",
          "**Adam (Adaptive Moment Estimation):**\n• Mô-men bậc 1: $m_t = \\beta_1 m_{t-1} + (1 - \\beta_1) g_t$\n• Mô-men bậc 2: $v_t = \\beta_2 v_{t-1} + (1 - \\beta_2) g_t^2$\n• **Hiệu chỉnh độ lệch (Bias Correction - Sống còn ở bước $t$ đầu):** $\\hat{m}_t = \\frac{m_t}{1 - \\beta_1^t}$ và $\\hat{v}_t = \\frac{v_t}{1 - \\beta_2^t}$. Nếu không chia cho $1 - \\beta^t$, các bước đầu tiên $m_t, v_t$ sẽ bị co về sát 0!\n• Cập nhật: $w_{t+1} = w_t - \\frac{\\eta}{\\sqrt{\\hat{v}_t} + \\epsilon} \\hat{m}_t$."
        ]
      }
    ]
  },

  "cd03": {
    "title": "Bản rút gọn cực ngắn cho CĐ-03 (Xác suất & Biến ngẫu nhiên), mẹo khoanh trắc nghiệm 3 giây:",
    "glossary": [
      { "symbol": "P(A \\cup B)", "meaning": "Xác suất hợp = $P(A) + P(B) - P(A \\cap B)$ (xác suất ít nhất một trong 2 biến cố xảy ra)." },
      { "symbol": "P(A \\mid B)", "meaning": "Xác suất có điều kiện = $\\frac{P(A \\cap B)}{P(B)}$ (xác suất $A$ xảy ra khi đã biết $B$ xảy ra)." },
      { "symbol": "E[X]", "meaning": "Kỳ vọng toán học = Giá trị trung bình kỳ vọng theo trọng số xác suất $\\sum x_i p_i$." },
      { "symbol": "\\text{Var}(X)", "meaning": "Phương sai = $E[X^2] - (E[X])^2$ (độ phân tán bình phương của biến ngẫu nhiên quanh kỳ vọng)." },
      { "symbol": "\\text{Cov}(X, Y)", "meaning": "Hiệp phương sai = $E[XY] - E[X]E[Y]$ (bằng 0 khi 2 biến ngẫu nhiên độc lập)." },
      { "symbol": "\\text{Base Rate}", "meaning": "Tỉ lệ nền = Xác suất tiên nghiệm $P(A)$ trước khi có kết quả xét nghiệm/bằng chứng mới." }
    ],
    "groups": [
      {
        "category": "Quy tắc Xác suất Cơ bản & Định lý Bayes",
        "items": [
          "**Xác suất biến cố hợp:** $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$. Nếu xung khắc ($A \\cap B = \\emptyset$) thì $P(A \\cup B) = P(A) + P(B)$.",
          "**Độc lập thống kê:** $A, B$ độc lập $\\Longleftrightarrow P(A \\cap B) = P(A) \\cdot P(B) \\Longleftrightarrow P(A|B) = P(A)$.",
          "**Bẫy lý thuyết:** Hai biến cố có xác suất dương ($P(A)>0, P(B)>0$) thì **KHÔNG THỂ** vừa độc lập vừa xung khắc!",
          "**Công thức Xác suất Toàn phần:** $P(B) = \\sum_{i=1}^n P(B \\mid A_i) P(A_i)$ với $\\{A_i\\}$ tạo thành một hệ đầy đủ.",
          "**Định lý Bayes (Cốt lõi Classifier & Inference):** $P(A \\mid B) = \\frac{P(B \\mid A) P(A)}{P(B)} = \\frac{P(B \\mid A) P(A)}{P(B \\mid A)P(A) + P(B \\mid \\neg A)P(\\neg A)}$.",
          "**Bẫy Base Rate Fallacy (Tỉ lệ nền thấp):** Nếu bệnh cực hiếm (ví dụ tỉ lệ mắc $0.1\\%$), thì ngay cả khi xét nghiệm có độ chính xác $99\\%$, xác suất người có kết quả Dương tính thật sự bị bệnh vẫn chỉ $\\approx 9\\%$ (đa số là dương tính giả do tỉ lệ nền quá thấp)!"
        ]
      },
      {
        "category": "Kỳ vọng, Phương sai & Hiệp phương sai",
        "items": [
          "**Tính tuyến tính của Kỳ vọng (Luôn đúng dù độc lập hay không):** $E[aX + bY + c] = a E[X] + b E[Y] + c$.",
          "**Phương sai:** $\\text{Var}(X) = E[X^2] - (E[X])^2$. $\\text{Var}(aX + b) = a^2 \\text{Var}(X)$ (cộng hằng số không đổi phương sai).",
          "**Phương sai của tổng 2 biến:** $\\text{Var}(X + Y) = \\text{Var}(X) + \\text{Var}(Y) + 2 \\text{Cov}(X, Y)$.",
          "**Nếu $X, Y$ độc lập:** $\\text{Cov}(X, Y) = 0 \\implies \\text{Var}(X + Y) = \\text{Var}(X) + \\text{Var}(Y)$ và $E[XY] = E[X]E[Y]$.",
          "**Hệ số tương quan Pearson:** $\\rho(X, Y) = \\frac{\\text{Cov}(X, Y)}{\\sigma_X \\sigma_Y} \\in [-1, 1]$. Đo mức độ tương quan TUYẾN TÍNH (nếu liên hệ phi tuyến như $Y = X^2$ thì $\\rho$ vẫn có thể bằng 0)."
        ]
      },
      {
        "category": "Các phân phối xác suất quan trọng cần nhớ",
        "items": [
          "**Bernoulli($p$):** Biến nhị phân $\\{0, 1\\}$. $E[X] = p$, $\\text{Var}(X) = p(1-p)$. Đạt phương sai cực đại $= 0.25$ khi $p = 0.5$.",
          "**Nhị thức (Binomial $B(n, p)$):** Số lần thành công trong $n$ phép thử Bernoulli độc lập. $P(X=k) = \\binom{n}{k} p^k (1-p)^{n-k}$. $E[X] = np$, $\\text{Var}(X) = np(1-p)$.",
          "**Poisson($\\lambda$):** Số biến cố xảy ra trong một khoảng thời gian cố định. $P(X=k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$. Điểm đặc biệt: $E[X] = \\text{Var}(X) = \\lambda$.",
          "**Phân phối chuẩn $N(\\mu, \\sigma^2)$ & Quy tắc 68–95–99.7:**\n• Khoảng $[\mu \\pm \\sigma]$: chiếm $\\approx 68.3\\%$ dữ liệu.\n• Khoảng $[\mu \\pm 2\\sigma]$: chiếm $\\approx 95.4\\%$ dữ liệu.\n• Khoảng $[\mu \\pm 3\\sigma]$: chiếm $\\approx 99.7\\%$ dữ liệu (ngoài $3\\sigma$ coi là ngoại lai Outlier).\n• Chuẩn hóa Z-score: $Z = \\frac{X - \\mu}{\\sigma} \\sim N(0, 1)$."
        ]
      }
    ]
  },

  "cd04": {
    "title": "Bản rút gọn cực ngắn cho CĐ-04 (Thống kê & Thử nghiệm A/B), mẹo nhẩm & ra quyết định:",
    "glossary": [
      { "symbol": "\\text{SE}", "meaning": "Standard Error (Sai số chuẩn) = Độ lệch chuẩn của ước lượng trung bình mẫu ($\\frac{\\sigma}{\\sqrt{n}}$)." },
      { "symbol": "p\\text{-value}", "meaning": "Xác suất quan sát được kết quả cực đoan như mẫu khi giả định $H_0$ là đúng (nhỏ hơn $\\alpha$ thì bác bỏ $H_0$)." },
      { "symbol": "\\alpha", "meaning": "Mức ý nghĩa = Xác suất mắc sai lầm loại I (False Positive - báo động giả, quy ước 5%)." },
      { "symbol": "1 - \\beta", "meaning": "Statistical Power (Năng lực kiểm định) = Xác suất phát hiện được khác biệt thật sự khi $H_1$ đúng (chuẩn $\\ge 80\\%$)." },
      { "symbol": "\\text{SRM}", "meaning": "Sample Ratio Mismatch = Lỗi tỉ lệ phân bổ mẫu giữa các biến thể bị lệch bất thường (hỏng A/B test)." },
      { "symbol": "\\text{CI 95%}", "meaning": "Khoảng tin cậy 95% = $[\\bar{X} - 1.96 \\cdot \\text{SE}, \\bar{X} + 1.96 \\cdot \\text{SE}]$." }
    ],
    "groups": [
      {
        "category": "Định lý CLT, Sai số chuẩn & Khoảng tin cậy",
        "items": [
          "**Định lý Giới hạn Trung tâm (CLT):** Khi cỡ mẫu $n \\ge 30$, trung bình mẫu $\\bar{X}$ luôn xấp xỉ phân phối chuẩn $N(\\mu, \\frac{\\sigma^2}{n})$ bất kể quần thể ban đầu có phân phối gì.",
          "**Sai số chuẩn (Standard Error - SE):**\n• Cho giá trị trung bình: $\\text{SE} = \\frac{\\sigma}{\\sqrt{n}}$.\n• Cho tỉ lệ (Conversion Rate $p$): $\\text{SE} = \\sqrt{\\frac{p(1-p)}{n}}$.",
          "**Quy tắc cỡ mẫu căn bậc 2:** Muốn giảm sai số $\\text{SE}$ đi 1 nửa (tăng độ chính xác gấp đôi), bắt buộc phải tăng cỡ mẫu $n$ lên **GẤP 4 LẦN** ($2^2 = 4$).",
          "**Khoảng tin cậy 95%:** $\\bar{X} \\pm 1.96 \\cdot \\text{SE}$. Nếu khoảng tin cậy của hiệu $\\Delta = B - A$ chứa số 0 $\\implies$ Chưa đủ bằng chứng kết luận $B$ khác $A$."
        ]
      },
      {
        "category": "Kiểm định Giả thuyết, p-value & Bảng Sai lầm",
        "items": [
          "**Quy tắc ra quyết định p-value:** Nếu $p\\text{-value} \\le \\alpha$ (thường $0.05$) $\\implies$ Bác bỏ giả thuyết không $H_0$, kết luận có ý nghĩa thống kê.",
          "**Sai lầm loại I (Type I Error - $\\alpha$):** Báo động giả (False Positive) - $H_0$ đúng mà ta lại bác bỏ. Tỉ lệ này do ta cố định trước (thường chọn $\\alpha = 5\\%$).",
          "**Sai lầm loại II (Type II Error - $\\beta$):** Bỏ sót cơ hội (False Negative) - $H_1$ đúng mà ta không phát hiện ra.",
          "**Statistical Power ($1 - \\beta$):** Xác suất bắt đúng hiệu ứng thật. Nếu cỡ mẫu quá nhỏ $\\implies$ Power thấp, dẫn đến việc cải tiến thực sự tốt nhưng test không ra kết quả.",
          "**Z-score cho 2 tỉ lệ A/B:** $Z = \\frac{p_B - p_A}{\\sqrt{\\text{SE}_A^2 + \\text{SE}_B^2}}$. Nếu $|Z| > 1.96 \\implies p < 0.05$."
        ]
      },
      {
        "category": "A/B Testing, Sample Ratio Mismatch & Bẫy thực tế",
        "items": [
          "**Sample Ratio Mismatch (SRM):** Phân bổ $50:50$ nhưng dữ liệu thu về là $10.000$ vs $10.500$. Dùng kiểm định Chi-square $\\chi^2$. Nếu $p < 0.001 \\implies$ SRM nghiêm trọng (lỗi bot, lỗi phân luồng redirect, lỗi tracking), **PHẢI HỦY KẾT QUẢ TEST**, không được kết luận!",
          "**Bẫy nhìn trộm (Peeking Problem):** Kiểm tra $p$-value hằng ngày và dừng test ngay khi $p < 0.05$ sẽ làm thổi phồng tỉ lệ sai lầm loại I thực tế từ $5\\%$ lên $>30\\%$. Khắc phục: Phải chạy đủ cỡ mẫu tính toán trước, hoặc dùng Sequential Testing (mức $\\alpha$ điều chỉnh).",
          "**Vấn đề đa so sánh (Multiple Testing):** Khi đo $k$ chỉ số đồng thời, xác suất ít nhất 1 chỉ số có $p < 0.05$ ngẫu nhiên là $1 - (1 - 0.05)^k$. Khắc phục: Dùng Bonferroni correction: $\\alpha_{\\text{new}} = \\frac{\\alpha}{k}$.",
          "**Nghịch lý Simpson:** Biến thể B có tỉ lệ chuyển đổi cao hơn A ở TẤT CẢ các phân khúc riêng lẻ (Mobile, Desktop), nhưng khi gộp chung lại thì B lại THUA A do tỉ trọng người dùng ở các nhóm không đều nhau. Khắc phục: Phân tích theo từng phân đoạn (Stratified Analysis)."
        ]
      }
    ]
  },

  "cd05": {
    "title": "Bản rút gọn cực ngắn cho CĐ-05 (Lập trình Python chuyên sâu & Quản lý bộ nhớ):",
    "glossary": [
      { "symbol": "\\text{id}(x)", "meaning": "Địa chỉ ô nhớ của đối tượng trong RAM (CPython memory address)." },
      { "symbol": "\\text{is vs } ==", "meaning": "`is` so sánh cùng địa chỉ bộ nhớ (`id(a) == id(b)`), còn `==` so sánh bình đẳng về giá trị nội dung." },
      { "symbol": "\\text{Mutable}", "meaning": "Khả biến = Kiểu dữ liệu có thể sửa đổi nội dung tại chỗ mà không đổi địa chỉ nhớ (`list`, `dict`, `set`)." },
      { "symbol": "\\text{Immutable}", "meaning": "Bất biến = Khi sửa sẽ tạo ra đối tượng mới ở ô nhớ mới (`int`, `float`, `str`, `tuple`, `frozenset`)." },
      { "symbol": "\\text{LEGB}", "meaning": "Thứ tự tìm kiếm biến của Python: Local $\\to$ Enclosing $\\to$ Global $\\to$ Built-in." },
      { "symbol": "\\text{yield}", "meaning": "Tạo hàm Generator = Tính toán lười (Lazy evaluation), tốn $O(1)$ bộ nhớ bất kể dữ liệu lớn bao nhiêu." }
    ],
    "groups": [
      {
        "category": "Kiểu dữ liệu, Mutability & Bẫy Vùng nhớ",
        "items": [
          "**Phân biệt Mutable vs Immutable:**\n• Immutable: `int`, `float`, `str`, `tuple`, `frozenset`, `bytes` (an toàn làm dict key).\n• Mutable: `list`, `dict`, `set`, `bytearray` (không thể làm dict key, dễ dính side-effect khi truyền vào hàm).",
          "**Bẫy kinh điển: Mutable Default Argument:**\n`def append_to(val, target=[])`: tham số mặc định `target` chỉ được khởi tạo **DUY NHẤT 1 LẦN** khi hàm được định nghĩa, dùng chung cho mọi lần gọi sau! Cách sửa chuẩn: `target=None`, bên trong kiểm tra `if target is None: target = []`.",
          "**Bẫy khởi tạo list 2 chiều:** `[[0] * 3] * 3` tạo ra 3 dòng cùng trỏ vào 1 list duy nhất (sửa 1 phần tử là sửa cả 3 dòng!). Cách đúng: `[[0] * 3 for _ in range(3)]`.",
          "**Toán tử `is` vs `==`:** `a == b` gọi `__eq__` so sánh giá trị; `a is b` kiểm tra `id(a) == id(b)`. Lưu ý: Python cache các số nguyên nhỏ từ `[-5, 256]` nên `256 is 256` là True, nhưng `257 is 257` có thể là False."
        ]
      },
      {
        "category": "Shallow Copy, Deep Copy & Scope LEGB",
        "items": [
          "**Phép gán `b = a`:** Không sao chép gì cả, chỉ gán thêm một biến mới cùng trỏ vào cùng 1 object trong RAM.",
          "**Shallow Copy (`a.copy()`, `a[:]`, `copy.copy(a)`):** Tạo container mới ở ngoài, nhưng các phần tử con lồng bên trong vẫn dùng chung tham chiếu cũ. Thay đổi phần tử con sẽ ảnh hưởng lẫn nhau!",
          "**Deep Copy (`copy.deepcopy(a)`):** Đệ quy sao chép hoàn toàn độc lập từ vỏ ngoài đến các tầng con cháu sâu nhất.",
          "**Quy tắc Scope LEGB:** Local $\\to$ Enclosing $\\to$ Global $\\to$ Built-in.\n• Dùng từ khóa `global x` để ghi đè biến ở tầng module.\n• Dùng từ khóa `nonlocal x` trong Closure để ghi đè biến của hàm bao ngoài gần nhất."
        ]
      },
      {
        "category": "Generator, Comprehensions & Tối ưu Bộ nhớ",
        "items": [
          "**List Comprehension vs Generator Expression:**\n• `[x for x in data]`: Tạo ra toàn bộ danh sách, nạp hết vào RAM ($O(N)$ bộ nhớ).\n• `(x for x in data)`: Trả về một generator object, sinh từng phần tử khi gọi `next()` ($O(1)$ bộ nhớ).\n• Khi xử lý file log hàng triệu dòng hoặc dataset lớn, luôn ưu tiên dùng Generator.",
          "**Dunder Methods cốt lõi trong AI/Data:**\n• `__getitem__(self, idx)`: Cho phép truy cập cú pháp `obj[idx]` hoặc slicing `obj[1:3]` (Dataset trong PyTorch).\n• `__len__(self)`: Trả về kích thước dataset cho DataLoader.\n• `__call__(self, *args)`: Biến object thành callable (chạy như hàm `model(x)` trong PyTorch)."
        ]
      }
    ]
  },

  "cd06": {
    "title": "Bản rút gọn cực ngắn cho CĐ-06 (Xử lý dữ liệu với pandas), mẹo tránh bẫy code:",
    "glossary": [
      { "symbol": "\\text{loc}", "meaning": "Truy cập dựa trên NHÃN (label-based), BAO GỒM cả mốc kết thúc (inclusive)." },
      { "symbol": "\\text{iloc}", "meaning": "Truy cập dựa trên VỊ TRÍ NGUYÊN (integer position), KHÔNG bao gồm mốc kết thúc (exclusive)." },
      { "symbol": "\\text{transform}", "meaning": "Thực hiện phép tính theo nhóm nhưng TRẢ VỀ CÙNG SỐ DÒNG với DataFrame ban đầu." },
      { "symbol": "\\text{SettingWithCopy}", "meaning": "Cảnh báo khi gán giá trị trên một bản View trung gian thay vì gán trực tiếp lên DataFrame gốc." }
    ],
    "groups": [
      {
        "category": "Indexing, Slicing & Lọc điều kiện",
        "items": [
          "**Phân biệt sống còn: `loc` vs `iloc`:**\n• `df.loc[1:3]`: Lấy các dòng có nhãn là 1, 2, 3 (lấy cả 3!).\n• `df.iloc[1:3]`: Lấy vị trí index 1 và 2 (bỏ vị trí 3, chuẩn Python slice).\n• Cột: `df.loc[:, 'colA':'colC']` (theo tên); `df.iloc[:, 0:2]` (theo số thứ tự).",
          "**Boolean Indexing:** Bắt buộc dùng toán tử bitwise `&`, `|`, `~` và bọc ngoặc đơn quanh từng biểu thức điều kiện: `df[(df['age'] > 20) & (df['score'] >= 8)]`. Dùng `and` / `or` sẽ báo lỗi `ValueError`!",
          "**Tránh lỗi SettingWithCopyWarning:** Tuyệt đối không dùng chained indexing: `df[df['a'] > 0]['b'] = 1`. Phải dùng cú pháp chuẩn một bước: `df.loc[df['a'] > 0, 'b'] = 1`."
        ]
      },
      {
        "category": "Merge, Groupby & Missing Values",
        "items": [
          "**`pd.merge(df1, df2)`:** Mặc định `how='inner'`. Trùng tên cột không nằm trong `on` sẽ tự động thêm đuôi `_x`, `_y`.",
          "**`transform()` vs `agg()` trong Groupby:**\n• `df.groupby('dept')['salary'].agg('mean')`: Thu gọn thành Series có số dòng bằng số phòng ban.\n• `df.groupby('dept')['salary'].transform('mean')`: Giữ nguyên toàn bộ số dòng ban đầu, mỗi dòng nhận giá trị trung bình của phòng ban nó thuộc về (dùng để tính tỉ lệ `%` hoặc chuẩn hóa theo nhóm cực nhanh).",
          "**Xử lý dữ liệu thiếu (Missing values):** `df.isna().sum()`. Để xóa dòng có quá $N$ giá trị null: `df.dropna(thresh=N)`. Điền giá trị: `df.fillna({'age': df['age'].median()})`."
        ]
      }
    ]
  },

  "cd07": {
    "title": "Bản rút gọn cực ngắn cho CĐ-07 (NumPy Broadcasting & Big-O Thuật toán):",
    "glossary": [
      { "symbol": "\\text{Broadcasting}", "meaning": "Cơ chế kéo dãn ảo mảng kích thước nhỏ để khớp với mảng lớn trong phép tính mà không tốn thêm RAM." },
      { "symbol": "\\text{axis=0}", "meaning": "Tính toán dọc theo các HÀNG (ép phẳng dòng, kết quả còn lại theo cột)." },
      { "symbol": "\\text{axis=1}", "meaning": "Tính toán ngang theo các CỘT (ép phẳng cột, kết quả còn lại theo hàng)." },
      { "symbol": "\\text{keepdims=True}", "meaning": "Giữ nguyên số chiều gốc (ví dụ giữ `(N, 1)` thay vì làm phẳng thành `(N,)`), chống lỗi broadcasting." },
      { "symbol": "O(\\log N)", "meaning": "Độ phức tạp thời gian của Binary Search (tìm kiếm nhị phân trên mảng đã sắp xếp)." }
    ],
    "groups": [
      {
        "category": "NumPy Broadcasting & View/Copy",
        "items": [
          "**Quy tắc Broadcasting 2 bước:**\n1. So khớp các chiều (dimensions) từ PHẢI SANG TRÁI (trailing dimensions).\n2. Hai chiều tương thích khi: Chúng BẰNG NHAU hoặc Có ít nhất một chiều BẰNG 1.\n• Ví dụ hợp lệ: `(5, 1, 4)` và `(3, 4)` $\\rightarrow$ kết quả là `(5, 3, 4)`.\n• Ví dụ lỗi: `(3, 4)` và `(4, 3)` $\\rightarrow$ báo lỗi `ValueError: operands could not be broadcast together`.",
          "**View vs Copy trong NumPy:**\n• Slicing cơ bản `b = a[1:3]` tạo VIEW (sửa `b` làm thay đổi trực tiếp `a`).\n• Fancy Indexing `b = a[[0, 2]]` hoặc Boolean Indexing `b = a[a > 0]` luôn tạo COPY độc lập."
        ]
      },
      {
        "category": "Độ phức tạp Thuật toán Big-O Cốt lõi",
        "items": [
          "**Dictionary & Set lookup (`x in my_dict`):** $O(1)$ trung bình nhờ bảng băm Hash table ($O(N)$ trong trường hợp xấu nhất khi hash collision).",
          "**List lookup (`x in my_list`):** $O(N)$ vì phải duyệt tuần tự từ đầu đến cuối.",
          "**Các thao tác trên List:**\n• `list.append(x)` và `list.pop()` ở cuối: $O(1)$ amortized.\n• `list.insert(0, x)` hoặc `list.pop(0)` ở đầu: $O(N)$ vì phải dịch chuyển toàn bộ các phần tử phía sau.",
          "**Tìm kiếm nhị phân (Binary Search):** $O(\\log N)$ thời gian, yêu cầu mảng PHẢI ĐÃ ĐƯỢC SẮP XẾP.",
          "**Thuật toán Sắp xếp (Timsort của Python):** $O(N \\log N)$ thời gian tốt nhất/trung bình/xấu nhất, tốn $O(N)$ bộ nhớ phụ trợ."
        ]
      }
    ]
  },

  "cd08": {
    "title": "Bản rút gọn cực ngắn cho CĐ-08 (SQL Analytics & Window Functions):",
    "glossary": [
      { "symbol": "\\text{ROW\\_NUMBER()}", "meaning": "Đánh số thứ tự liên tục 1, 2, 3, 4 không trùng nhau dù điểm bằng nhau." },
      { "symbol": "\\text{RANK()}", "meaning": "Xếp hạng có đồng hạng, NHẢY CÓC số thứ tự tiếp theo (ví dụ: 1, 2, 2, 4)." },
      { "symbol": "\\text{DENSE\\_RANK()}", "meaning": "Xếp hạng có đồng hạng, KHÔNG nhảy cóc (ví dụ: 1, 2, 2, 3)." },
      { "symbol": "\\text{LEAD / LAG}", "meaning": "Lấy giá trị của dòng tiếp theo / dòng liền trước trong cửa sổ mà không cần tự JOIN." }
    ],
    "groups": [
      {
        "category": "Thứ tự Thực thi SQL & Bẫy phổ biến",
        "items": [
          "**Thứ tự thực thi logic (Logical Execution Order):**\n`FROM` $\\rightarrow$ `ON` $\\rightarrow$ `JOIN` $\\rightarrow$ `WHERE` $\\rightarrow$ `GROUP BY` $\\rightarrow$ `HAVING` $\\rightarrow$ `SELECT` $\\rightarrow$ `DISTINCT` $\\rightarrow$ `ORDER BY` $\\rightarrow$ `LIMIT`.",
          "**Bẫy alias cột:** Không thể sử dụng bí danh (alias) được tạo trong `SELECT` ở mệnh đề `WHERE` vì `WHERE` chạy trước `SELECT`!",
          "**`WHERE` vs `HAVING`:** `WHERE` lọc từng dòng thô TRƯỚC khi gom nhóm; `HAVING` lọc các nhóm SAU khi tính hàm tổng hợp (`COUNT`, `SUM`, `AVG`).",
          "**Xử lý giá trị NULL:**\n• So sánh `col = NULL` luôn trả về `UNKNOWN` (coi như False). Phải dùng cú pháp `IS NULL` hoặc `IS NOT NULL`.\n• `COUNT(*)` đếm cả dòng NULL; `COUNT(col)` chỉ đếm dòng có giá trị khác NULL.\n• `COALESCE(val1, val2, ...)` trả về giá trị đầu tiên khác NULL."
        ]
      },
      {
        "category": "Window Functions (Hàm cửa sổ chuyên sâu)",
        "items": [
          "**Phân biệt bộ ba xếp hạng:** Cùng có điểm là 100, 90, 90, 80:\n• `ROW_NUMBER()`: 1, 2, 3, 4\n• `RANK()`: 1, 2, 2, 4 (nhảy cóc vị trí 3)\n• `DENSE_RANK()`: 1, 2, 2, 3 (không nhảy cóc)",
          "**Tính lũy kế (Running Total):**\n`SUM(amount) OVER (PARTITION BY user_id ORDER BY order_date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)`.",
          "**Hàm truy cập dòng lân cận:**\n• `LAG(col, 1)`: Lấy giá trị dòng ngay phía trước (dùng tính % tăng trưởng so với hôm qua).\n• `LEAD(col, 1)`: Lấy giá trị dòng ngay phía sau."
        ]
      }
    ]
  },

  "cd09": {
    "title": "Bản rút gọn cực ngắn cho CĐ-09 (Học máy toàn diện & Đánh giá mô hình):",
    "glossary": [
      { "symbol": "\\text{Precision}", "meaning": "Độ chuẩn xác = $\\frac{TP}{TP + FP}$ (trong số mẫu đoán Dương, bao nhiêu % là đúng?)." },
      { "symbol": "\\text{Recall}", "meaning": "Độ nhạy = $\\frac{TP}{TP + FN}$ (trong số mẫu Dương thực tế, phát hiện được bao nhiêu %?)." },
      { "symbol": "F_1\\text{-score}", "meaning": "Trung bình điều hòa của Precision và Recall = $2 \\cdot \\frac{P \\cdot R}{P + R}$." },
      { "symbol": "\\text{PR-AUC}", "meaning": "Diện tích dưới đường cong Precision-Recall (bắt buộc dùng khi dữ liệu mất cân bằng nghiêm trọng)." },
      { "symbol": "\\text{ROC-AUC}", "meaning": "Đo khả năng phân biệt lớp của mô hình theo các ngưỡng (đường chéo ngẫu nhiên $= 0.5$)." },
      { "symbol": "\\text{L1 Lasso}", "meaning": "Phạt tổng trị tuyệt đối trọng số $\\lambda \\sum |w_i|$ $\\implies$ Ép trọng số về đúng 0 (chọn đặc trưng)." },
      { "symbol": "\\text{L2 Ridge}", "meaning": "Phạt tổng bình phương trọng số $\\lambda \\sum w_i^2$ $\\implies$ Thu nhỏ trọng số về gần 0 (giảm đa cộng tuyến)." }
    ],
    "groups": [
      {
        "category": "Confusion Matrix & Các Chỉ số Đánh giá Cốt lõi",
        "items": [
          "**Accuracy (Độ chính xác tổng thể):** $\\frac{TP + TN}{TP + TN + FP + FN}$. Vô nghĩa khi dữ liệu mất cân bằng (ví dụ: $99\\%$ mẫu âm tính, model đoán toàn Âm vẫn đạt $99\\%$ accuracy).",
          "**Khi nào ưu tiên Precision cao:** Khi chi phí của Báo động giả (False Positive - $FP$) quá đắt đỏ: Hệ thống lọc thư rác (không được ném nhầm email quan trọng vào spam), gợi ý nội dung an toàn cho trẻ em.",
          "**Khi nào ưu tiên Recall cao:** Khi chi phí của Bỏ sót (False Negative - $FN$) mang tính sinh mạng/thảm họa: Tầm soát ung thư, phát hiện gian lận thẻ tín dụng, phát hiện lỗi an toàn xe tự lái.",
          "**Chỉ số $F_\\beta$:** $F_\\beta = (1 + \\beta^2) \\frac{P \\cdot R}{\\beta^2 P + R}$. Nếu coi trọng Recall gấp đôi Precision $\\implies$ chọn $F_2$ (ví dụ chẩn đoán y tế)."
        ]
      },
      {
        "category": "ROC-AUC vs PR-AUC & Dữ liệu Mất cân bằng",
        "items": [
          "**Đường cong ROC-AUC:** Trục tung là True Positive Rate ($\text{TPR} = \\text{Recall}$), trục hoành là False Positive Rate ($\\text{FPR} = \\frac{FP}{FP + TN}$). Mô hình phân loại ngẫu nhiên có $\\text{AUC} = 0.5$. Mô hình hoàn hảo có $\\text{AUC} = 1.0$.",
          "**Bẫy lạc quan giả của ROC-AUC:** Khi mẫu Âm tính cực lớn ($TN$ khổng lồ), mẫu $FP$ dù nhiều thì mẫu số $FP + TN$ vẫn áp đảo làm $FPR$ luôn nhỏ, khiến đường ROC-AUC vẫn cao chót vót ảo. Trong bài toán hiếm (fraud detection $0.1\\%$), **BẮT BUỘC** dùng **PR-AUC (Precision-Recall Curve)**!",
          "**Kỹ thuật xử lý mất cân bằng:** Resampling (SMOTE oversampling, Random undersampling), dùng hàm mất mát Focal Loss, hoặc chỉnh ngưỡng phân loại (threshold tuning)."
        ]
      },
      {
        "category": "Bias - Variance, Regularization & Cross Validation",
        "items": [
          "**High Bias (Underfitting):** Mô hình quá đơn giản, sai số trên cả tập Train và Val đều cao $\\rightarrow$ Cần tăng độ phức tạp mô hình, thêm feature, giảm bớt regularization.",
          "**High Variance (Overfitting):** Train loss rất thấp nhưng Val loss cao vọt $\\rightarrow$ Cần thêm dữ liệu, giảm bớt feature, tăng L1/L2 regularization, dùng Dropout, Early Stopping.",
          "**L1 (Lasso) vs L2 (Ridge):**\n• L1: Phạt $\\lambda \\sum |w_i|$ $\\implies$ Đỉnh nhọn tại trục tọa độ ép nhiều trọng số về đúng bằng 0 (tự động loại bỏ đặc trưng thừa).\n• L2: Phạt $\\lambda \\sum w_i^2$ $\\implies$ Hình tròn đồng tâm thu nhỏ đều các trọng số về gần 0, giải quyết hiện tượng đa cộng tuyến (multicollinearity).",
          "**K-Fold Cross Validation:** Chia dữ liệu thành $K$ phần đều nhau, train trên $K-1$ phần và kiểm thử trên phần còn lại, lặp lại $K$ lần. Với dữ liệu phân loại mất cân bằng, luôn dùng **Stratified K-Fold** để giữ nguyên tỉ lệ các nhãn giữa các fold."
        ]
      }
    ]
  },

  "cd10": {
    "title": "Bản rút gọn cực ngắn cho CĐ-10 (LLM, RAG & AI Agent thực chiến):",
    "glossary": [
      { "symbol": "\\text{Temperature } T", "meaning": "Tham số điều khiển độ ngẫu nhiên khi sinh văn bản ($T \\to 0$: greedy tất định, $T$ cao: đa dạng, sáng tạo)." },
      { "symbol": "\\text{Top-}p", "meaning": "Nucleus Sampling = Chỉ lấy tập token nhỏ nhất có tổng xác suất tích lũy $\\ge p$." },
      { "symbol": "\\text{KV Cache}", "meaning": "Lưu trữ vector Key & Value của các token đã qua, biến chi phí sinh token từ $O(N)$ thành $O(1)$." },
      { "symbol": "\\text{Faithfulness}", "meaning": "Chỉ số RAG đo lường câu trả lời có trung thực, bắt nguồn hoàn toàn từ Context truy xuất được hay không (chống bịa)." }
    ],
    "groups": [
      {
        "category": "Transformer, Attention & Tham số Sinh",
        "items": [
          "**Scaled Dot-Product Attention:** $\\text{Attention}(Q, K, V) = \\operatorname{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$. Yếu tố $\\sqrt{d_k}$ chia tỉ lệ để tránh tích vô hướng quá lớn làm Softmax rơi vào vùng bão hòa có gradient gần bằng 0.",
          "**KV Cache:** Trong giai đoạn sinh tuần tự (Autoregressive Generation), lưu lại ma trận $K$ và $V$ của toàn bộ các token trước để không phải tính lại từ đầu, tiết kiệm tài nguyên tính toán nhưng ngốn thêm dung lượng VRAM GPU.",
          "**Tham số điều khiển sinh:**\n• `Temperature`: Chia logit cho $T$ trước khi qua Softmax. $T=0$ chọn token có xác suất cao nhất (Greedy); $T > 1$ làm phẳng phân phối xác suất.\n• `Top-p` (Nucleus): Cắt tỉa đuôi token xác suất thấp, chỉ chọn từ nhóm token tích lũy xác suất $\\ge p$ (ví dụ $p=0.9$)."
        ]
      },
      {
        "category": "Kiến trúc Hybrid RAG & Bộ tứ Đánh giá Ragas",
        "items": [
          "**Hybrid RAG (Tìm kiếm lai):** Kết hợp Tìm kiếm từ khóa truyền thống (BM25 - bắt chính xác mã hiệu, tên riêng, số CMND/CCCD) với Tìm kiếm ngữ nghĩa bằng vector embedding (Dense Vector Search - hiểu ý định câu hỏi) qua thuật toán xếp hạng RRF (Reciprocal Rank Fusion).",
          "**Bộ tứ đánh giá RAG Framework (Ragas):**\n1. `Faithfulness` (Độ trung thực): Câu trả lời có đúng với ngữ cảnh truy xuất không? (Phát hiện hallucination bịa đặt).\n2. `Answer Relevance` (Độ liên quan câu trả lời): Câu trả lời có giải quyết đúng câu hỏi không?\n3. `Context Precision` (Độ chính xác ngữ cảnh): Các đoạn trích dẫn đúng có nằm ở top đầu kết quả tìm kiếm không?\n4. `Context Recall` (Độ bao phủ ngữ cảnh): Ngữ cảnh tìm được có chứa đủ thông tin để trả lời câu hỏi không?"
        ]
      },
      {
        "category": "AI Agent & An toàn Bảo mật (OWASP Top 10 for LLM)",
        "items": [
          "**Cơ chế ReAct (Reasoning + Acting):** Agent lặp chu trình: Suy nghĩ (Thought) $\\rightarrow$ Hành động gọi Tool (Action) $\\rightarrow$ Quan sát kết quả (Observation).",
          "**OWASP LLM01 - Prompt Injection:** Kẻ tấn công chèn câu lệnh độc hại vào prompt người dùng (Direct) hoặc gián tiếp qua tài liệu web/CV được mô hình đọc (Indirect Injection).",
          "**OWASP LLM06 - Excessive Agency (Cấp thừa quyền):** Agent được cấp quyền thực thi nhạy cảm (tự xóa database, tự gửi email khách hàng mà không có bước con người phê duyệt - Human-in-the-loop)."
        ]
      }
    ]
  },

  "cd11": {
    "title": "Bản rút gọn cực ngắn cho CĐ-11 (MLOps & Vận hành mô hình trong sản xuất):",
    "glossary": [
      { "symbol": "\\text{TTFT}", "meaning": "Time to First Token = Thời gian từ lúc user gửi prompt đến khi nhận được ký tự đầu tiên (đo độ trễ prefill)." },
      { "symbol": "\\text{TPOT}", "meaning": "Time Per Output Token = Thời gian sinh mỗi token tiếp theo (phụ thuộc băng thông bộ nhớ GPU)." },
      { "symbol": "\\text{PSI}", "meaning": "Population Stability Index = Chỉ số đo độ trôi dạt của phân phối dữ liệu ($\\ge 0.25$ là phải retrain)." },
      { "symbol": "\\text{Canary}", "meaning": "Chiến lược release mô hình mới: Chuyển trước 5-10% traffic thực tế để thử nghiệm an toàn." }
    ],
    "groups": [
      {
        "category": "Serving Metrics & Tính toán VRAM Lượng tử hóa",
        "items": [
          "**Ước lượng VRAM cho Model Weights:**\n$\\text{VRAM (GB)} \\approx \\text{Số tỷ tham số (Billion)} \\times \\text{Số byte mỗi tham số}$.\n• FP16 (16-bit) = 2 bytes/param $\\implies$ Model 7B cần $7 \\times 2 = 14\\text{ GB}$.\n• INT8 (8-bit) = 1 byte/param $\\implies$ Model 7B cần $7\\text{ GB}$.\n• INT4 (4-bit) = 0.5 byte/param $\\implies$ Model 7B cần $3.5\\text{ GB}$.\n• *Thực tế:* Phải cộng thêm $20\\% - 30\\%$ overhead cho KV Cache, Activations và Context Window.",
          "**Serving Metrics:**\n• $\\text{P99 Latency}$: 99% request hoàn thành nhanh hơn mốc này (phản ánh trải nghiệm trong trường hợp xấu nhất).\n• $\\text{Throughput}$: Số token/giây mà toàn bộ cụm server phục vụ đồng thời."
        ]
      },
      {
        "category": "Trôi dạt Dữ liệu (Drift) & Chiến lược Phát hành",
        "items": [
          "**Phân biệt các loại Drift:**\n• Data Drift (Covariate Shift): Phân phối đầu vào $P(X)$ thay đổi, nhưng quy luật $P(Y|X)$ giữ nguyên.\n• Concept Drift: Bản chất mối quan hệ $P(Y|X)$ thay đổi (ví dụ: mô hình dự đoán hành vi khách hàng trước và sau đại dịch).\n• Prior Probability Shift: Tỉ lệ nhãn $P(Y)$ thay đổi.",
          "**Chỉ số PSI (Population Stability Index):** $\\text{PSI} = \\sum (A_i - E_i) \\ln\\left(\\frac{A_i}{E_i}\\right)$.\n• $\\text{PSI} < 0.1$: Ổn định, không có drift đáng kể.\n• $0.1 \\le \\text{PSI} < 0.25$: Drift vừa phải, cần theo dõi sát.\n• $\\text{PSI} \\ge 0.25$: Drift nghiêm trọng, **PHẢI HUẤN LUYỆN LẠI (RETRAIN)** mô hình ngay lập tức!",
          "**Chiến lược Deployment:**\n• Canary: Chuyển 5% traffic sang model mới, theo dõi lỗi/latency trước khi tăng dần lên 100%.\n• Shadow (Dark Traffic): Nhân bản request gửi song song vào model mới nhưng chỉ trả kết quả của model cũ về cho user (an toàn tuyệt đối để test tải).\n• Blue-Green: Duy trì 2 môi trường sản xuất giống hệt nhau, chuyển hướng router tức thời, rollback trong 1 giây."
        ]
      }
    ]
  },

  "cd12": {
    "title": "Bản rút gọn cực ngắn cho CĐ-12 (Logic hình thức, Đạo đức & Pháp lý AI):",
    "glossary": [
      { "symbol": "P \\rightarrow Q", "meaning": "Mệnh đề kéo theo: 'Nếu P thì Q'. Chỉ sai khi P đúng mà Q sai." },
      { "symbol": "\\neg Q \\rightarrow \\neg P", "meaning": "Mệnh đề phản đảo (Contrapositive) = Luôn có CÙNG GIÁ TRỊ CHÂN LÝ với mệnh đề thuận $P \\rightarrow Q$." },
      { "symbol": "\\text{Four-Fifths}", "meaning": "Quy tắc 4/5 (80% Rule của EEOC) = Tỉ lệ tuyển dụng nhóm thiểu số phải $\\ge 80\\%$ nhóm cao nhất để tránh vi phạm phân biệt đối xử." },
      { "symbol": "\\text{High Risk}", "meaning": "Mức rủi ro cao trong EU AI Act (tuyển dụng, chấm CV, y tế, ngân hàng) = Bắt buộc có Human Oversight và audit dữ liệu." }
    ],
    "groups": [
      {
        "category": "Logic Mệnh đề, Phản đảo & Luật De Morgan",
        "items": [
          "**Mệnh đề Phản đảo (Contrapositive - Cốt lõi suy luận):**\n• Mệnh đề thuận: $P \\rightarrow Q$ (Nếu có $P$ thì có $Q$).\n• Mệnh đề phản đảo: $\\neg Q \\rightarrow \\neg P$ (Nếu không có $Q$ thì chắc chắn không có $P$).\n• **Quy tắc vàng:** $P \\rightarrow Q \\Longleftrightarrow \\neg Q \\rightarrow \\neg P$ (luôn có cùng tính đúng/sai!).\n• **Bẫy suy luận thuận:** Mệnh đề đảo $Q \\rightarrow P$ và nghịch đảo $\\neg P \\rightarrow \\neg Q$ KHÔNG tương đương logic với $P \\rightarrow Q$!",
          "**Luật De Morgan:**\n• $\\neg(P \\land Q) \\Longleftrightarrow \\neg P \\lor \\neg Q$ (Phủ định của 'và' là 'hoặc').\n• $\\neg(P \\lor Q) \\Longleftrightarrow \\neg P \\land \\neg Q$ (Phủ định của 'hoặc' là 'và')."
        ]
      },
      {
        "category": "Đạo đức AI, Công bằng & Pháp lý (EU AI Act & Luật VN 2025)",
        "items": [
          "**Quy tắc 4/5 (Four-Fifths Rule / Disparate Impact):** Tỉ lệ lựa chọn của nhóm được bảo vệ phải đạt ít nhất $80\\%$ so với nhóm có tỉ lệ cao nhất: $\\frac{\\text{Selection Rate}_{\\text{nhóm B}}}{\\text{Selection Rate}_{\\text{nhóm A}}} \\ge 0.8$. Nếu nhỏ hơn $0.8$ bị coi là bằng chứng sơ bộ về phân biệt đối xử bất hợp pháp.",
          "**EU AI Act - 4 Cấp độ rủi ro:**\n1. Rủi ro không thể chấp nhận (Unacceptable Risk) - **BỊ CẤM HOÀN TOÀN**: Hệ thống chấm điểm công dân (Social Scoring), khai thác điểm yếu tâm lý/trẻ em, nhận diện cảm xúc tại nơi làm việc và trường học.\n2. Rủi ro cao (High Risk): AI lọc hồ sơ tuyển dụng, chấm điểm thi cử, đánh giá tín dụng cá nhân, thiết bị y tế $\\rightarrow$ Bắt buộc đánh giá rủi ro, kiểm soát thiên lệch dữ liệu, lưu vết log và có sự giám sát của con người (Human Oversight).\n3. Rủi ro hạn chế (Limited Risk): Chatbot AI, deepfake $\\rightarrow$ Bắt buộc công khai minh bạch để người dùng biết mình đang tương tác với AI.\n4. Rủi ro tối thiểu (Minimal Risk): Bộ lọc spam, game AI $\\rightarrow$ Được tự do triển khai.",
          "**Luật Bảo vệ Dữ liệu Cá nhân VN 2025 & GDPR:** Dữ liệu cá nhân chỉ được xử lý khi có sự đồng thuận rõ ràng của chủ thể; cá nhân có quyền được biết, quyền rút lại sự đồng thuận, quyền xóa dữ liệu và quyền không phải chịu sự định đoạt hoàn toàn bởi quyết định tự động của AI."
        ]
      }
    ]
  },

  "tonghop": {
    "title": "Chiến thuật 90 phút & Mẹo phản xạ thi ĐGNL Tổng hợp (ĐGNL 01–06):",
    "glossary": [
      { "symbol": "60 \\text{ câu} / 90'", "meaning": "Thời gian trung bình: 1.5 phút/câu. Không bao giờ sa đà quá 3 phút vào một câu tính toán phức tạp." },
      { "symbol": "\\text{SFIA L3–L4}", "meaning": "Chuẩn năng lực kỹ sư: Độc lập giải quyết vấn đề, phân tích trade-off, bảo mật và thiết kế hệ thống có tính mở rộng." }
    ],
    "groups": [
      {
        "category": "Phân bổ thời gian chuẩn cho 4 Phần thi",
        "items": [
          "**Phần A (Toán học & Tư duy định lượng - 20 câu):** Dành tối đa **25 phút**. Ưu tiên dùng công thức nhẩm nhanh (det, trace, chuẩn hóa cosine, gradient) thay vì tính toán đại số dài dòng.",
          "**Phần B (Kỹ thuật lập trình & Dữ liệu - 20 câu):** Dành tối đa **25 phút**. Tập trung vào bẫy mutable default argument, loc vs iloc, thứ tự chạy SQL và broadcasting NumPy.",
          "**Phần C (Kiến thức AI & Sản phẩm - 12 câu):** Dành tối đa **20 phút**. Trả lời nhanh dựa trên các độ đo Precision/Recall, kiến trúc RAG, phục vụ mô hình LLM và phát hiện drift.",
          "**Phần D (Tư duy Logic & Tự luận System Design - 8 câu):** Dành **15 phút**. Dùng mệnh đề phản đảo để loại trừ nhanh trắc nghiệm logic. 5 phút cuối cùng kiểm tra toàn bộ phiếu trả lời (tuyệt đối không bỏ trống vì không trừ điểm câu sai)."
        ]
      },
      {
        "category": "Framework 5 bước làm bài Tự luận System Design chuẩn SFIA",
        "items": [
          "**Bước 1: Nêu Giả định & Phạm vi (Clarify Scope):** Xác định rõ đầu vào, đầu ra, ràng buộc độ trễ (P99 < 500ms) và ngân sách chi phí.",
          "**Bước 2: Kiến trúc Giải pháp (Architecture):** Vẽ sơ đồ luồng dữ liệu (Data Ingestion $\\to$ Offline Training $\\to$ Vector Index $\\to$ Online Serving API).",
          "**Bước 3: Chỉ số Đo lường (Metrics):** Nêu rõ 2 tầng: Chỉ số kỹ thuật (Latency, Recall@K, Faithfulness) và Chỉ số kinh doanh (Conversion rate, Click-through rate).",
          "**Bước 4: Quản trị Rủi ro & An toàn (Risks & Fallbacks):** Cơ chế dự phòng khi mô hình sập (Rule-based fallback), giám sát drift (PSI) và phòng thủ Prompt Injection.",
          "**Bước 5: Phân tích Đánh đổi (Trade-offs):** Đưa ra lý do chọn công nghệ (ví dụ chọn Llama-3-8B INT4 self-host thay vì GPT-4 API để tiết kiệm chi phí và bảo mật dữ liệu nội bộ)."
        ]
      }
    ]
  }
};
