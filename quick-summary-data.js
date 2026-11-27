/**
 * quick-summary-data.js
 * Bản rút gọn cực ngắn cho toàn bộ 12 Chuyên đề + Đề Tổng hợp AI20K
 * Chuẩn hóa 100% công thức bấm máy, định nghĩa & mẹo khoanh trắc nghiệm 3 giây
 */

window.QUICK_SUMMARY_DATA = {
  "cd01": {
    "title": "Bản rút gọn cực ngắn cho toàn bộ CĐ-01, chỉ giữ đúng công thức bấm máy & mẹo khoanh trắc nghiệm:",
    "groups": [
      {
        "category": "Chuẩn & Tích vô hướng",
        "items": [
          "**Chuẩn $L_1$:** Cộng trị tuyệt đối ($\\sum |x_i|$).",
          "**Chuẩn $L_2$ (Euclidean):** Căn tổng bình phương $\\sqrt{\\sum x_i^2}$.",
          "**Tích vô hướng:** $u \\cdot v = \\sum u_i v_i = \\|u\\| \\|v\\| \\cos \\theta$ (ra 1 số). Nhân đôi vector $\\rightarrow$ tích vô hướng gấp đôi, cosine giữ nguyên.",
          "**Cosine similarity:** $\\cos \\theta = \\frac{u \\cdot v}{\\|u\\| \\|v\\|} \\in [-1, 1]$."
        ]
      },
      {
        "category": "Chuyển vị & Kích thước ma trận",
        "items": [
          "**Chuyển vị & Kích thước:** $(AB)^T = B^T A^T$. Phép nhân $(m \\times k) \\cdot (k \\times n) \\rightarrow (m \\times n)$.",
          "**LoRA ($d \\times d$, hạng $r$):** Số tham số $= 2dr$ (giảm từ $d^2$ còn $2dr$)."
        ]
      },
      {
        "category": "Định thức (det)",
        "items": [
          "$\\det(kA) = k^n \\det A$ ($n$ là cấp ma trận).",
          "$\\det(A^T) = \\det A$; $\\det(AB) = \\det A \\cdot \\det B$.",
          "**Diện tích mới** $= |\\det M| \\times$ Diện tích cũ; $\\det M < 0 \\rightarrow$ lật ngược hướng.",
          "**Nghịch đảo $2 \\times 2$:** $\\begin{bmatrix}a & b \\\\ c & d\\end{bmatrix}^{-1} = \\frac{1}{ad-bc}\\begin{bmatrix}d & -b \\\\ -c & a\\end{bmatrix}$. Ma trận xoay: $R(\\theta)^{-1} = R(\\theta)^T$."
        ]
      },
      {
        "category": "Phụ thuộc tuyến tính / Rank",
        "items": [
          "Ma trận vuông phụ thuộc tuyến tính $\\Longleftrightarrow \\det = 0$.",
          "Cột 3 tính được từ cột 1, 2 $\\rightarrow \\text{rank} \\le 2$.",
          "Hệ $Ax = b$ có nghiệm duy nhất khi $\\text{rank}(A) = \\text{rank}([A|b]) = n$."
        ]
      },
      {
        "category": "Trị riêng ($\\lambda$) & Vector riêng ($v$)",
        "items": [
          "$Av = \\lambda v$ (nhân vào ra cùng phương).",
          "**Tổng $\\lambda_i = \\text{tr}(A)$** (tổng đường chéo); **Tích $\\lambda_i = \\det A$.**",
          "Đa thức đặc trưng $2 \\times 2$: $\\lambda^2 - \\text{tr}(A)\\lambda + \\det(A) = 0$.",
          "Đa thức $P(A)$ có trị riêng $P(\\lambda)$, giữ nguyên vector riêng.",
          "**Lũy thừa $W^t$:** $|\\lambda_{\\max}| > 1 \\rightarrow$ bùng nổ; $|\\lambda_{\\max}| < 1 \\rightarrow$ về 0."
        ]
      },
      {
        "category": "SVD, PCA & Hồi quy",
        "items": [
          "**SVD:** $X = U \\Sigma V^T$. Giá trị kỳ dị $\\sigma_i = \\sqrt{\\lambda_i(X^T X)}$. Số $\\sigma_i > 0$ là $\\text{rank}(X)$.",
          "**Sai số cắt cụt hạng $k$:** $\\sqrt{\\sum_{i>k} \\sigma_i^2}$.",
          "**PCA 1D:** Tọa độ $z = w_1^T(x - \\mu)$, tái tạo $\\hat{x} = \\mu + z w_1$.",
          "**Hồi quy OLS:** $A^T A \\beta = A^T y \\Longrightarrow \\beta = (A^T A)^{-1} A^T y$."
        ]
      }
    ]
  },

  "cd02": {
    "title": "Bản rút gọn cực ngắn cho CĐ-02 (Giải tích & Tối ưu hóa), chỉ giữ đúng công thức tính nhanh & mẹo trắc nghiệm:",
    "groups": [
      {
        "category": "Đạo hàm & Gradient",
        "items": [
          "**Gradient $\\nabla f$:** Vector đạo hàm riêng $\\left(\\frac{\\partial f}{\\partial x}, \\frac{\\partial f}{\\partial y}\\right)$, chỉ hướng tăng dốc nhất; $-\\nabla f$ chỉ hướng dốc xuống nhanh nhất.",
          "**Đạo hàm theo hướng $u$ (với $\\|u\\|=1$):** $D_u f = \\nabla f \\cdot u$.",
          "**Cập nhật Gradient Descent:** $w_{\\text{mới}} = w - \\eta \\nabla L(w)$ (dấu TRỪ để xuống dốc; cộng là leo dốc!).",
          "**Quy tắc chuỗi (Chain Rule):** $\\frac{\\partial L}{\\partial w} = \\frac{\\partial L}{\\partial y} \\cdot \\frac{\\partial y}{\\partial z} \\cdot \\frac{\\partial z}{\\partial w}$."
        ]
      },
      {
        "category": "Hàm kích hoạt & Đạo hàm nhanh",
        "items": [
          "**Sigmoid $\\sigma(z)$:** $\\sigma'(z) = \\sigma(z)(1 - \\sigma(z))$. Đạt cực đại $= 0{,}25$ tại $z=0 \\rightarrow$ Gây triệt tiêu gradient (Vanishing gradient) qua nhiều tầng.",
          "**Softplus $f(x) = \\ln(1 + e^{kx})$:** $f'(x) = \\frac{k e^{kx}}{1 + e^{kx}} = k \\sigma(kx)$.",
          "**Softmax + Cross-Entropy:** $\\frac{\\partial L_{CE}}{\\partial z_i} = p_i - y_i$ (Xác suất dự đoán trừ nhãn One-hot!).",
          "**ReLU:** $f(z) = \\max(0, z)$; đạo hàm $= 1$ khi $z > 0$, $= 0$ khi $z \\le 0$ (Dead ReLU khi học suất quá cao)."
        ]
      },
      {
        "category": "Hessian & Điểm dừng (Critical points)",
        "items": [
          "**Hessian $H$:** Ma trận đạo hàm cấp hai $\\begin{bmatrix}f_{xx} & f_{xy} \\\\ f_{yx} & f_{yy}\\end{bmatrix}$.",
          "**Phân loại điểm dừng khi $\\nabla f = 0$:** $\\det H > 0, f_{xx} > 0 \\rightarrow$ Cực tiểu địa phương; $\\det H > 0, f_{xx} < 0 \\rightarrow$ Cực đại địa phương; $\\det H < 0 \\rightarrow$ Điểm yên ngựa (Saddle point).",
          "**Kiểm tra Gradient vi phân (Gradient check):** Sai phân trung tâm $\\frac{f(x+\\epsilon) - f(x-\\epsilon)}{2\\epsilon}$ sai số $O(\\epsilon^2)$, chính xác hơn sai phân một phía $O(\\epsilon)$."
        ]
      },
      {
        "category": "Thuật toán Tối ưu hóa (Optimizers)",
        "items": [
          "**Momentum:** $v_t = \\beta v_{t-1} + g_t$; $w_t = w_{t-1} - \\eta v_t$. Lướt qua rãnh hẹp, giảm dao động ngang.",
          "**Adam:** Kết hợp Momentum (ước lượng mô-men cấp 1) + RMSprop (chuẩn hóa chia $\\sqrt{v_t + \\epsilon}$ phương sai bậc 2). Có cơ chế hiệu chỉnh độ lệch (Bias correction) ở các bước đầu.",
          "**Học suất $\\eta$:** Quá nhỏ $\\rightarrow$ hội tụ chậm; quá lớn $\\rightarrow$ dao động phân kỳ (loss tăng vọt thành NaN)."
        ]
      }
    ]
  },

  "cd03": {
    "title": "Bản rút gọn cực ngắn cho CĐ-03 (Xác suất & Biến ngẫu nhiên), mẹo khoanh trắc nghiệm 3 giây:",
    "groups": [
      {
        "category": "Quy tắc Xác suất Cơ bản & Bayes",
        "items": [
          "**Quy tắc cộng:** $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$. Nếu xung khắc: $P(A \\cap B) = 0$.",
          "**Xác suất có điều kiện:** $P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}$ (Thu hẹp không gian mẫu về $B$).",
          "**Công thức Bayes:** $P(A \\mid B) = \\frac{P(B \\mid A) \\cdot P(A)}{P(B)}$ với $P(B) = P(B \\mid A)P(A) + P(B \\mid \\neg A)P(\\neg A)$.",
          "**Độc lập thống kê:** $P(A \\cap B) = P(A)P(B) \\Longleftrightarrow P(A \\mid B) = P(A)$."
        ]
      },
      {
        "category": "Kỳ vọng, Phương sai & Tương quan",
        "items": [
          "**Tuyến tính kỳ vọng:** $E[aX + bY + c] = aE[X] + bE[Y] + c$ (luôn đúng kể cả khi phụ thuộc).",
          "**Phương sai:** $\\text{Var}(X) = E[X^2] - (E[X])^2$; $\\text{Var}(aX + b) = a^2 \\text{Var}(X)$.",
          "**Với $X, Y$ độc lập:** $\\text{Var}(X + Y) = \\text{Var}(X) + \\text{Var}(Y)$; $\\text{Var}(X - Y) = \\text{Var}(X) + \\text{Var}(Y)$ (Vẫn là dấu CỘNG!).",
          "**Hiệp phương sai:** $\\text{Cov}(X, Y) = E[XY] - E[X]E[Y]$. Độc lập $\\rightarrow \\text{Cov}=0$ (ngược lại chưa chắc đúng).",
          "**Hệ số tương quan:** $\\rho = \\frac{\\text{Cov}(X,Y)}{\\sigma_X \\sigma_Y} \\in [-1, 1]$."
        ]
      },
      {
        "category": "Các phân phối chuẩn cần nhớ",
        "items": [
          "**Bernoulli($p$):** $E = p$, $\\text{Var} = p(1-p)$.",
          "**Nhị thức $B(n, p)$:** $E = np$, $\\text{Var} = np(1-p)$.",
          "**Poisson($\\lambda$):** $P(X=k) = \\frac{e^{-\\lambda} \\lambda^k}{k!}$; **$E = \\lambda$, $\\text{Var} = \\lambda$ (Kỳ vọng bằng phương sai!)**.",
          "**Hình học Geometric($p$):** $E = \\frac{1}{p}$ (số phép thử trung bình đến khi thành công lần đầu).",
          "**Phân phối chuẩn $N(\\mu, \\sigma^2)$:** Chuẩn hóa $Z = \\frac{X - \\mu}{\\sigma} \\sim N(0, 1)$. Quy tắc $68\\% - 95\\% - 99{,}7\\%$ tương ứng $[\\mu \\pm 1\\sigma, \\mu \\pm 2\\sigma, \\mu \\pm 3\\sigma]$."
        ]
      }
    ]
  },

  "cd04": {
    "title": "Bản rút gọn cực ngắn cho CĐ-04 (Thống kê & Thử nghiệm A/B), mẹo nhẩm & ra quyết định:",
    "groups": [
      {
        "category": "Định lý CLT & Khoảng tin cậy",
        "items": [
          "**Định lý CLT:** Khi $n \\ge 30$, trung bình mẫu $\\bar{X} \\sim N\\left(\\mu, \\frac{\\sigma^2}{n}\\right)$. Sai số chuẩn $SE = \\frac{\\sigma}{\\sqrt{n}}$.",
          "**Tăng cỡ mẫu gấp 4 lần ($n \\times 4$) $\\rightarrow$ Sai số chuẩn $SE$ giảm một nửa ($SE / 2$).**",
          "**Khoảng tin cậy 95% cho trung bình:** $\\bar{X} \\pm 1{,}96 \\cdot \\frac{\\sigma}{\\sqrt{n}}$. (Tin cậy 90%: $1{,}645$; 99%: $2{,}576$).",
          "**Khoảng tin cậy tỉ lệ $p$:** $\\hat{p} \\pm 1{,}96 \\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}$."
        ]
      },
      {
        "category": "Kiểm định Giả thuyết, p-value & Sai lầm",
        "items": [
          "**Quy tắc $p$-value:** $p \\le \\alpha$ ($0{,}05$) $\\rightarrow$ Bác bỏ $H_0$ (kết quả có ý nghĩa thống kê); $p > \\alpha \\rightarrow$ Chưa đủ bằng chứng bác bỏ $H_0$.",
          "**Sai lầm loại I ($\\alpha$ - False Positive):** $H_0$ đúng mà bác bỏ (Báo động giả).",
          "**Sai lầm loại II ($\\beta$ - False Negative):** $H_0$ sai mà không bác bỏ được (Bỏ sót cơ hội).",
          "**Power (Sức mạnh kiểm định):** $1 - \\beta$, thường đặt mục tiêu $\\ge 80\\%$. Tăng cỡ mẫu $n$ làm tăng Power.",
          "**Kiểm định Z hai mẫu độc lập:** $Z = \\frac{\\hat{p}_B - \\hat{p}_A}{\\sqrt{p_{\\text{pool}}(1-p_{\\text{pool}})(\\frac{1}{n_A} + \\frac{1}{n_B})}}$."
        ]
      },
      {
        "category": "A/B Testing & Bẫy thực tế",
        "items": [
          "**Bẫy Peeking (Nhìn trộm kết quả):** Liên tục kiểm tra $p$-value và dừng sớm $\\rightarrow$ Thổi phồng $\\alpha$ thực tế từ 5% lên 20-30%!",
          "**Hiệu ứng Novelty:** Tỉ lệ click tăng vọt ban đầu do tò mò, sau đó tụt dần $\\rightarrow$ Bắt buộc chạy tối thiểu 1-2 tuần đủ chu kỳ ngày đêm.",
          "**Hiệu chỉnh Bonferroni:** Chạy đồng thời $m$ biến thể $\\rightarrow$ Ngưỡng ý nghĩa từng cặp $\\alpha' = \\frac{\\alpha}{m}$ để kiểm soát FWER.",
          "**Tung thử mẫu (Sample Ratio Mismatch - SRM):** Chia 50/50 mà nhận 45/55 $\\rightarrow$ Dữ liệu bị lỗi lọc traffic, phải hủy bỏ test."
        ]
      }
    ]
  },

  "cd05": {
    "title": "Bản rút gọn cực ngắn cho CĐ-05 (Lập trình Python chuyên sâu & Quản lý bộ nhớ):",
    "groups": [
      {
        "category": "Kiểu dữ liệu & Bản chất Vùng nhớ",
        "items": [
          "**Mutable (thay đổi tại chỗ):** `list`, `dict`, `set`, `bytearray`.",
          "**Immutable (bất biến):** `int`, `float`, `str`, `tuple`, `frozenset`, `bytes`.",
          "**Bẫy Mutable Default Argument:** `def f(x, acc=[]):` $\\rightarrow$ `acc` được chia sẻ giữa mọi lần gọi hàm! Sửa: `acc=None` rồi `if acc is None: acc = []`.",
          "**`==` vs `is`:** `==` so sánh bình đẳng giá trị; `is` so sánh trùng địa chỉ bộ nhớ (`id(a) == id(b)`)."
        ]
      },
      {
        "category": "Copy & Scope LEGB",
        "items": [
          "**Shallow copy (`copy.copy`):** Chỉ copy vỏ ngoài; object lồng bên trong vẫn trỏ chung ô nhớ.",
          "**Deep copy (`copy.deepcopy`):** Nhân bản đệ quy toàn bộ cây đối tượng độc lập hoàn toàn.",
          "**Thứ tự tìm kiếm biến LEGB:** Local $\\rightarrow$ Enclosing $\\rightarrow$ Global $\\rightarrow$ Built-in.",
          "**`global` vs `nonlocal`:** `global` sửa biến tầng module; `nonlocal` sửa biến hàm bọc ngoài (Closure)."
        ]
      },
      {
        "category": "Generator, Memory & Trình tối ưu",
        "items": [
          "**Generator (`yield`):** Đánh giá lười (Lazy Evaluation), bộ nhớ $O(1)$ thay vì nạp toàn bộ mảng vào RAM.",
          "**`__slots__` trong Class:** Bỏ qua dictionary `__dict__` nội tại $\\rightarrow$ Tiết kiệm 40-60% RAM khi tạo hàng triệu object.",
          "**GIL (Global Interpreter Lock):** Giới hạn chỉ 1 thread chạy mã bytecode Python tại một thời điểm $\\rightarrow$ Đa luồng (threading) chỉ nhanh cho I/O bound; CPU bound bắt buộc dùng đa tiến trình (`multiprocessing`)."
        ]
      }
    ]
  },

  "cd06": {
    "title": "Bản rút gọn cực ngắn cho CĐ-06 (Xử lý dữ liệu với pandas), mẹo tránh bẫy code:",
    "groups": [
      {
        "category": "Indexing & Slicing",
        "items": [
          "**`df.loc[...]`:** Theo nhãn/tên (Label-based) $\\rightarrow$ **Bao gồm cả 2 đầu mút [start, stop] (inclusive)**.",
          "**`df.iloc[...]`:** Theo vị trí chỉ số nguyên (0-based) $\\rightarrow$ **Không bao gồm cận cuối [start, stop) (exclusive)**.",
          "**Bẫy `SettingWithCopyWarning`:** Do Chained Indexing `df[col][row] = val` $\\rightarrow$ Luôn sửa bằng `df.loc[row, col] = val`."
        ]
      },
      {
        "category": "Merge, Groupby & Missing Values",
        "items": [
          "**Merge `how`:** `'inner'` (giao khóa); `'left'` (giữ hết bảng trái); `'right'` (giữ hết bảng phải); `'outer'` (hợp toàn bộ).",
          "**Chống rò rỉ dữ liệu (Data Leakage):** Khi điền khuyết `fillna(mean)`, CHỈ tính `mean` trên tập Train, sau đó áp số đó cho Val/Test.",
          "**Tối ưu bộ nhớ pandas:** Chuyển `float64` $\\rightarrow$ `float32`, `object` chứa ít giá trị lặp $\\rightarrow$ `category` (giảm 80% RAM)."
        ]
      }
    ]
  },

  "cd07": {
    "title": "Bản rút gọn cực ngắn cho CĐ-07 (NumPy Broadcasting & Big-O Thuật toán):",
    "groups": [
      {
        "category": "NumPy Broadcasting & View/Copy",
        "items": [
          "**Quy tắc Broadcasting:** So sánh kích thước từ chiều cuối cùng ngược lên đầu. Hai chiều hợp lệ khi: **(1) Bằng nhau**, hoặc **(2) Một trong hai bằng 1**.",
          "Ví dụ: $(3, 1, 5)$ và $(4, 5) \\rightarrow (3, 4, 5)$ (Hợp lệ). $(3, 4)$ và $(3, 5) \\rightarrow$ Báo lỗi `ValueError`!",
          "**View vs Copy:** Slice thông thường `a[1:4]` trả về **View** (sửa làm đổi mảng gốc). Fancy Indexing `a[[0, 2]]` trả về **Copy** độc lập."
        ]
      },
      {
        "category": "Độ phức tạp Big-O Cốt lõi",
        "items": [
          "**Hash Map / Python Dict:** Tìm kiếm/thêm/xóa trung bình $O(1)$; tệ nhất $O(n)$ do bão hòa xung đột.",
          "**Tìm kiếm nhị phân (Binary search):** $O(\\log n)$ trên mảng đã sắp xếp.",
          "**Sắp xếp (MergeSort / Timsort):** $O(n \\log n)$.",
          "**Nhân ma trận $(m \\times k) \\cdot (k \\times n)$:** $O(m \\cdot k \\cdot n)$; với ma trận vuông $n \\times n$ là $O(n^3)$."
        ]
      }
    ]
  },

  "cd08": {
    "title": "Bản rút gọn cực ngắn cho CĐ-08 (SQL Analytics & Window Functions):",
    "groups": [
      {
        "category": "Thứ tự Thực thi SQL & Bẫy phổ biến",
        "items": [
          "**Thứ tự chạy trong Engine:** `FROM` $\\rightarrow$ `WHERE` $\\rightarrow$ `GROUP BY` $\\rightarrow$ `HAVING` $\\rightarrow$ `SELECT` $\\rightarrow$ `DISTINCT` $\\rightarrow$ `ORDER BY` $\\rightarrow$ `LIMIT`.",
          "**Bẫy alias:** Không thể dùng bí danh khai báo trong `SELECT` đặt vào `WHERE` (vì `WHERE` chạy trước `SELECT`!).",
          "**`WHERE` vs `HAVING`:** `WHERE` lọc từng dòng bản ghi trước khi gom nhóm; `HAVING` lọc sau khi tính hàm tổng hợp (`SUM`, `COUNT`, `AVG`).",
          "**Bẫy NULL:** `NULL = NULL` trả về `UNKNOWN` (False). So sánh NULL bắt buộc dùng `IS NULL` hoặc `IS NOT NULL`."
        ]
      },
      {
        "category": "Window Functions (Hàm cửa sổ)",
        "items": [
          "**`ROW_NUMBER()`:** Đánh số thứ tự liên tục duy nhất: $1, 2, 3, 4$.",
          "**`RANK()`:** Đồng hạng thì cùng số, người tiếp theo nhảy cóc: $1, 2, 2, 4$.",
          "**`DENSE_RANK()`:** Đồng hạng cùng số, người tiếp theo KHÔNG nhảy cóc: $1, 2, 2, 3$.",
          "**`LAG(col, 1)` / `LEAD(col, 1)`:** Lấy giá trị của dòng liền trước / liền sau trong phân vùng `PARTITION BY`."
        ]
      }
    ]
  },

  "cd09": {
    "title": "Bản rút gọn cực ngắn cho CĐ-09 (Học máy toàn diện & Đánh giá mô hình):",
    "groups": [
      {
        "category": "Confusion Matrix & Độ đo",
        "items": [
          "**Precision (Độ chuẩn xác):** $\\frac{TP}{TP + FP}$ — Mẫu số là tất cả ca MÔ HÌNH BÁO DƯƠNG. Dùng khi chi phí báo động giả rất đắt (ví dụ: bộ lọc spam).",
          "**Recall (Độ nhạy):** $\\frac{TP}{TP + FN}$ — Mẫu số là tất cả ca THỰC TẾ LÀ DƯƠNG. Dùng khi tuyệt đối không được bỏ sót (ví dụ: phát hiện ung thư, gian lận).",
          "**F1-Score:** $2 \\cdot \\frac{\\text{Precision} \\cdot \\text{Recall}}{\\text{Precision} + \\text{Recall}}$ (Trung bình điều hòa, phạt nặng nếu 1 trong 2 thấp).",
          "**Dịch chuyển ngưỡng (Threshold moving):** Tăng ngưỡng $0{,}5 \\rightarrow 0{,}7$: Precision tăng, Recall giảm. Hạ ngưỡng $0{,}5 \\rightarrow 0{,}3$: Recall tăng, Precision giảm."
        ]
      },
      {
        "category": "ROC-AUC & PR-AUC",
        "items": [
          "**Đường cong ROC:** Trục tung $TPR = \\text{Recall}$, trục hoành $FPR = \\frac{FP}{FP + TN}$. Đoán ngẫu nhiên $\\text{AUC} = 0{,}5$. Không phụ thuộc tỉ lệ mất cân bằng lớp.",
          "**Dữ liệu cực kỳ mất cân bằng (Imbalanced data):** BẮT BUỘC dùng **PR-AUC (Precision-Recall Curve)** thay cho ROC-AUC!",
          "**K-Means:** Nhạy cảm với ngoại lai và khởi tạo ban đầu $\\rightarrow$ Dùng k-means++ để rải đều tâm cụm ban đầu."
        ]
      },
      {
        "category": "Bias - Variance & Regularization",
        "items": [
          "**High Bias (Underfitting):** Train loss cao, Test loss cao $\\rightarrow$ Cần tăng độ phức tạp mô hình, thêm feature.",
          "**High Variance (Overfitting):** Train loss cực thấp, Test loss cao $\\rightarrow$ Cần thêm dữ liệu, giảm feature, Early stopping, Regularization.",
          "**L1 (Lasso):** Phạt $\\lambda \\sum |w_i|$ $\\rightarrow$ Triệt tiêu trọng số về ĐÚNG BẰNG 0 (tạo mô hình thưa, chọn đặc trưng).",
          "**L2 (Ridge):** Phạt $\\lambda \\sum w_i^2$ $\\rightarrow$ Kéo trọng số về gần 0 nhưng không triệt tiêu hoàn toàn (chống đa cộng tuyến)."
        ]
      }
    ]
  },

  "cd10": {
    "title": "Bản rút gọn cực ngắn cho CĐ-10 (LLM, RAG & AI Agent thực chiến):",
    "groups": [
      {
        "category": "Tham số sinh & Tokenization",
        "items": [
          "**Temperature:** Bằng 0 $\\rightarrow$ Xác định (Deterministic), chọn từ có xác suất cao nhất. Càng cao $\\rightarrow$ Càng sáng tạo nhưng dễ ảo giác (Hallucination).",
          "**Top-$p$ (Nucleus Sampling):** Chỉ chọn mẫu trong nhóm từ có tổng xác suất tích lũy đạt $p$ (e.g. $0{,}9$).",
          "**Định luật Chinchilla Scaling Law:** Tối ưu chi phí huấn luyện khi số lượng token dữ liệu gấp khoảng 20 lần số lượng tham số mô hình."
        ]
      },
      {
        "category": "Kiến trúc RAG (Retrieval-Augmented Generation)",
        "items": [
          "**Chunking:** Chia nhỏ văn bản có Overlap 10-20% để không làm đứt gãy ngữ nghĩa ở ranh giới cắt.",
          "**Hybrid Search:** Kết hợp Dense Retrieval (Embedding Vector Cosine) + Sparse Retrieval (BM25 từ khóa) để tối đa Recall.",
          "**Re-ranking:** Dùng mô hình Cross-Encoder chấm điểm lại top $K$ đoạn trích xuất trước khi nhét vào prompt context."
        ]
      },
      {
        "category": "Fine-tuning & LoRA",
        "items": [
          "**LoRA (Low-Rank Adaptation):** Cố định trọng số gốc $W_0 \\in \\mathbb{R}^{d \\times k}$, chỉ huấn luyện $BA$ với $B \\in \\mathbb{R}^{d \\times r}, A \\in \\mathbb{R}^{r \\times k}$ ($r \\ll d$). Tiết kiệm $>90\\%$ VRAM.",
          "**RLHF vs DPO:** DPO (Direct Preference Optimization) tối ưu trực tiếp trên cặp câu trả lời ưu tiên không cần huấn luyện riêng Reward Model."
        ]
      }
    ]
  },

  "cd11": {
    "title": "Bản rút gọn cực ngắn cho CĐ-11 (MLOps & Vận hành mô hình trong sản xuất):",
    "groups": [
      {
        "category": "Trôi dạt Dữ liệu & Khái niệm (Drift)",
        "items": [
          "**Data / Covariate Drift:** Phân phối đầu vào $P(X)$ thay đổi, nhưng quy luật $P(Y \\mid X)$ không đổi (Đo bằng KS-test, PSI).",
          "**Concept Drift:** Mối quan hệ giữa $X$ và $Y$ thay đổi hoàn toàn $P(Y \\mid X)$ đổi (Ví dụ: Hành vi mua sắm đổi sau khủng hoảng). Cần trigger re-train mô hình ngay.",
          "**Feature Store:** Đảm bảo thống nhất feature giữa lúc offline train và online serving, chống rò rỉ dữ liệu."
        ]
      },
      {
        "category": "Chiến lược Deployment",
        "items": [
          "**Canary Deployment:** Chuyển 5-10% traffic thực tế sang mô hình mới, theo dõi lỗi/latency trước khi tăng dần lên 100%.",
          "**Blue/Green Deployment:** Hai môi trường song song; switch router tức thì giữa Blue (v1) và Green (v2), rollback trong 1 giây nếu lỗi.",
          "**Shadow Deployment:** Nhân đôi traffic thực gửi tới mô hình mới để test tải và độ chính xác nhưng kết quả trả về cho khách vẫn từ mô hình cũ."
        ]
      }
    ]
  },

  "cd12": {
    "title": "Bản rút gọn cực ngắn cho CĐ-12 (Logic hình thức, Đạo đức & Pháp lý AI):",
    "groups": [
      {
        "category": "Logic Mệnh đề & Phản đảo",
        "items": [
          "**Mệnh đề gốc:** $P \\Longrightarrow Q$ (Nếu $P$ thì $Q$).",
          "**Phản đảo (Contrapositive):** $\\neg Q \\Longrightarrow \\neg P$ (**Luôn luôn có cùng giá trị chân lý với mệnh đề gốc!**).",
          "**Đảo & Nghịch:** $Q \\Longrightarrow P$ và $\\neg P \\Longrightarrow \\neg Q$ KHÔNG tương đương logic với mệnh đề gốc (Ngụy biện phổ biến).",
          "**Phủ định lượng từ:** Phủ định của \"$\\forall x, P(x)$\" là \"$\\exists x, \\neg P(x)$\". Phủ định của \"$\\exists x, P(x)$\" là \"$\\forall x, \\neg P(x)$\"."
        ]
      },
      {
        "category": "EU AI Act & Bảo vệ Dữ liệu 2025",
        "items": [
          "**Rủi ro không thể chấp nhận (BỊ CẤM):** Social scoring (chấm điểm công dân), nhận diện cảm xúc tại trường học/nơi làm việc, thao túng hành vi ngầm.",
          "**Rủi ro cao (High-risk):** Tuyển dụng (sàng lọc CV), chấm điểm tín dụng, y tế, tư pháp $\\rightarrow$ Bắt buộc đánh giá rủi ro, kiểm toán dữ liệu và có giám sát con người (Human-in-the-loop).",
          "**OWASP LLM Top 10:** LLM01: Prompt Injection (chèn câu lệnh chiếm quyền), LLM06: Excessive Agency (trao quyền tool vượt mức kiểm soát)."
        ]
      }
    ]
  },

  "tonghop": {
    "title": "Chiến thuật 90 phút & Mẹo phản xạ thi ĐGNL Tổng hợp (ĐGNL 01–06):",
    "groups": [
      {
        "category": "Phân bổ thời gian chuẩn 90 phút",
        "items": [
          "**30 phút đầu:** Quét sạch toàn bộ 35-40 câu Trắc nghiệm Nhận biết & Thông hiểu. Câu nào tính toán quá 90 giây $\\rightarrow$ Đánh dấu, chuyển câu tiếp ngay.",
          "**35 phút tiếp theo:** Giải quyết các bài toán Vận dụng & Tự luận ngắn (Đạo hàm, Bayes, ma trận nghịch đảo, phân tích độ phức tạp code).",
          "**25 phút cuối:** Làm câu Tình huống / System Design (chuẩn SFIA L3–L4) và soát lại toàn bộ phiếu trắc nghiệm, tuyệt đối không để trống câu nào."
        ]
      },
      {
        "category": "Kỹ thuật nhẩm nhanh không máy tính",
        "items": [
          "**Phần trăm & Xác suất Bayes:** Luôn giả định mẫu quy chuẩn 1000 hoặc 10.000 cá thể để làm việc với số nguyên, không nhân chia số thập phân.",
          "**Trace & Det Ma trận $2 \\times 2$:** Tổng 2 nghiệm đặc trưng $\\lambda_1 + \\lambda_2 = a + d$; tích 2 nghiệm $\\lambda_1 \\lambda_2 = ad - bc$ $\\rightarrow$ Thử ngược 4 đáp án loại trừ trong 5 giây."
        ]
      }
    ]
  }
};
