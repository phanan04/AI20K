/**
 * quick-summary-data.js
 * Bản rút gọn cực ngắn cho toàn bộ 12 Chuyên đề + Đề Tổng hợp
 * Chỉ giữ đúng công thức bấm máy, định nghĩa cốt lõi & mẹo khoanh trắc nghiệm phản xạ 3 giây
 */

window.QUICK_SUMMARY_DATA = {
  "cd01": {
    "title": "Bản rút gọn cực ngắn cho toàn bộ CĐ-01, chỉ giữ đúng công thức bấm máy & mẹo khoanh trắc nghiệm:",
    "groups": [
      {
        "category": "Chuẩn & Tích vô hướng",
        "items": [
          "**Chuẩn $L_1$:** Cộng trị tuyệt đối ($\\sum |x_i|$).",
          "**Tích vô hướng:** $u \\cdot v = \\sum u_i v_i$ (ra 1 số). Nhân đôi vector $\\rightarrow$ tích vô hướng gấp đôi, cosine giữ nguyên."
        ]
      },
      {
        "category": "Chuyển vị & Kích thước ma trận",
        "items": [
          "**Chuyển vị & Kích thước:** $(AB)^T = B^T A^T$. Nhân $(m \\times k) \\cdot (k \\times n) \\rightarrow (m \\times n)$.",
          "**LoRA ($d \\times d$, hạng $r$):** Số tham số $= 2dr$."
        ]
      },
      {
        "category": "Định thức (det)",
        "items": [
          "$\\det(kA) = k^n \\det A$ ($n$ là cấp ma trận).",
          "$\\det(A^T) = \\det A$.",
          "**Diện tích mới** $= |\\det M| \\times$ Diện tích cũ; $\\det M < 0 \\rightarrow$ lật ngược hướng.",
          "**Nghịch đảo $2 \\times 2$:** $\\begin{bmatrix}a & b \\\\ c & d\\end{bmatrix}^{-1} = \\frac{1}{ad-bc}\\begin{bmatrix}d & -b \\\\ -c & a\\end{bmatrix}$. Ma trận xoay: $R(\\theta)^{-1} = R(\\theta)^T$."
        ]
      },
      {
        "category": "Phụ thuộc tuyến tính / Rank",
        "items": [
          "Ma trận vuông phụ thuộc tuyến tính $\\Longleftrightarrow \\det = 0$.",
          "Cột 3 tính được từ cột 1, 2 $\\rightarrow \\text{rank} \\le 2$."
        ]
      },
      {
        "category": "Trị riêng ($\\lambda$) & Vector riêng ($v$)",
        "items": [
          "$Av = \\lambda v$ (nhân vào ra cùng phương).",
          "**Tổng $\\lambda_i = \\text{tr}(A)$** (tổng đường chéo); **Tích $\\lambda_i = \\det A$.**",
          "Đa thức $P(A)$ có trị riêng $P(\\lambda)$, giữ nguyên vector riêng.",
          "**Lũy thừa $W^t$:** $|\\lambda_{\\max}| > 1 \\rightarrow$ bùng nổ; $|\\lambda_{\\max}| < 1 \\rightarrow$ về 0."
        ]
      },
      {
        "category": "SVD & PCA",
        "items": [
          "**Giá trị kỳ dị:** $\\sigma_i = \\sqrt{\\lambda_i(X^T X)}$. Số $\\sigma_i > 0$ là $\\text{rank}(X)$.",
          "**Sai số cắt cụt hạng $k$:** $\\sqrt{\\sum_{i>k} \\sigma_i^2}$.",
          "**PCA 1D:** Tọa độ $z = w_1^T(x - \\mu)$, tái tạo $\\hat{x} = \\mu + z w_1$.",
          "**Hồi quy OLS:** $A^T A \\beta = A^T y$."
        ]
      }
    ]
  },

  "cd02": {
    "title": "Bản rút gọn cực ngắn cho CĐ-02 (Giải tích & Tối ưu hóa), chỉ giữ công thức tính nhanh & mẹo trắc nghiệm:",
    "groups": [
      {
        "category": "Đạo hàm & Gradient",
        "items": [
          "**Gradient $\\nabla f$:** Vector các đạo hàm riêng $\\left(\\frac{\\partial f}{\\partial x}, \\frac{\\partial f}{\\partial y}\\right)$, chỉ hướng tăng nhanh nhất.",
          "**Cập nhật Gradient Descent:** $w_{\\text{mới}} = w - \\eta \\nabla L(w)$ (dấu TRỪ để xuống dốc).",
          "**Quy tắc chuỗi (Chain rule):** $\\frac{\\partial L}{\\partial w} = \\frac{\\partial L}{\\partial y} \\cdot \\frac{\\partial y}{\\partial z} \\cdot \\frac{\\partial z}{\\partial w}$."
        ]
      },
      {
        "category": "Hàm kích hoạt & Đạo hàm nhanh",
        "items": [
          "**Sigmoid $\\sigma(z)$:** $\\sigma'(z) = \\sigma(z)(1 - \\sigma(z))$. Cực đại tại $z=0$ là $0{,}25 \\rightarrow$ Triệt tiêu gradient.",
          "**Softmax:** $\\frac{\\partial L_{CE}}{\\partial z_i} = p_i - y_i$ (Xác suất dự đoán trừ nhãn One-hot, cực kỳ đơn giản khi nhẩm!).",
          "**ReLU:** $f(z) = \\max(0, z)$; đạo hàm bằng 1 khi $z > 0$, bằng 0 khi $z \\le 0$ (Dead ReLU khi học suất quá cao)."
        ]
      },
      {
        "category": "Ma trận Hessian & Điểm dừng",
        "items": [
          "**Hessian $H$:** Ma trận các đạo hàm cấp hai $\\begin{bmatrix}f_{xx} & f_{xy} \\\\ f_{yx} & f_{yy}\\end{bmatrix}$.",
          "**Phân loại điểm dừng:** $\\det H > 0, f_{xx} > 0 \\rightarrow$ Cực tiểu; $\\det H > 0, f_{xx} < 0 \\rightarrow$ Cực đại; $\\det H < 0 \\rightarrow$ Điểm yên ngựa (Saddle point)."
        ]
      },
      {
        "category": "Thuật toán Tối ưu hóa (Optimizers)",
        "items": [
          "**Momentum:** $v_t = \\beta v_{t-1} + (1-\\beta)g_t$; lướt qua dốc hẹp, giảm rung lắc.",
          "**Adam:** Kết hợp Momentum (mô-men quán tính cấp 1) + RMSprop (chuẩn hóa chia căn phương sai bậc 2)."
        ]
      }
    ]
  },

  "cd03": {
    "title": "Bản rút gọn cực ngắn cho CĐ-03 (Xác suất & Biến ngẫu nhiên), mẹo khoanh trắc nghiệm 3 giây:",
    "groups": [
      {
        "category": "Quy tắc Xác suất Cơ bản",
        "items": [
          "**Xác suất có điều kiện:** $P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}$ (Mẫu số bị thu hẹp vào không gian $B$).",
          "**Công thức Bayes:** $P(A \\mid B) = \\frac{P(B \\mid A) \\cdot P(A)}{P(B)}$.",
          "**Hai biến độc lập:** $P(A \\cap B) = P(A) \\cdot P(B) \\Longleftrightarrow P(A \\mid B) = P(A)$."
        ]
      },
      {
        "category": "Kỳ vọng, Phương sai & Hiệp phương sai",
        "items": [
          "**Kỳ vọng tuyến tính:** $E[aX + bY + c] = aE[X] + bE[Y] + c$ (luôn đúng kể cả khi phụ thuộc).",
          "**Phương sai:** $\\text{Var}(aX + b) = a^2 \\text{Var}(X)$. Với $X, Y$ độc lập: $\\text{Var}(X + Y) = \\text{Var}(X) + \\text{Var}(Y)$.",
          "**Hệ số tương quan:** $\\rho_{X,Y} = \\frac{\\text{Cov}(X,Y)}{\\sigma_X \\sigma_Y} \\in [-1, 1]$. Nhân biến với số dương không đổi $\\rho$."
        ]
      },
      {
        "category": "Các phân phối chuẩn cần nhớ",
        "items": [
          "**Bernoulli($p$):** $E = p$, $\\text{Var} = p(1-p)$.",
          "**Nhị thức $B(n, p)$:** $E = np$, $\\text{Var} = np(1-p)$.",
          "**Poisson($\\lambda$):** $E = \\lambda$, $\\text{Var} = \\lambda$ (Kỳ vọng bằng phương sai!).",
          "**Phân phối chuẩn $N(\\mu, \\sigma^2)$:** Quy tắc $68\\% - 95\\% - 99{,}7\\%$ tương ứng $[\\mu \\pm 1\\sigma, \\mu \\pm 2\\sigma, \\mu \\pm 3\\sigma]$."
        ]
      }
    ]
  },

  "cd04": {
    "title": "Bản rút gọn cực ngắn cho CĐ-04 (Thống kê & Thử nghiệm A/B), mẹo nhẩm & ra quyết định:",
    "groups": [
      {
        "category": "Định lý Giới hạn Trung tâm & Khoảng tin cậy",
        "items": [
          "**CLT (Central Limit Theorem):** Khi cỡ mẫu $n \\ge 30$, trung bình mẫu $\\bar{X} \\sim N\\left(\\mu, \\frac{\\sigma^2}{n}\\right)$. Sai số chuẩn $SE = \\frac{\\sigma}{\\sqrt{n}}$.",
          "**Tăng gấp 4 lần cỡ mẫu ($n \\times 4$) $\\rightarrow$ Sai số chuẩn giảm một nửa ($SE / 2$).**",
          "**Khoảng tin cậy 95%:** $\\bar{X} \\pm 1{,}96 \\cdot \\frac{\\sigma}{\\sqrt{n}}$."
        ]
      },
      {
        "category": "Kiểm định Giả thuyết & P-value",
        "items": [
          "**$p$-value $\\le \\alpha$ (thường là $0{,}05$):** Bác bỏ $H_0 \\rightarrow$ Có ý nghĩa thống kê.",
          "**Sai lầm loại I ($\\alpha$ - Dương tính giả):** $H_0$ đúng mà lại bác bỏ (kết luận có tác dụng khi thực tế không có).",
          "**Sai lầm loại II ($\\beta$ - Âm tính giả):** $H_0$ sai mà không bác bỏ được. Sức mạnh kiểm định (Power) $= 1 - \\beta$."
        ]
      },
      {
        "category": "A/B Testing & Bẫy thực tế",
        "items": [
          "**Bẫy Peeking:** Liên tục dừng sớm khi thấy $p < 0{,}05 \\rightarrow$ Thổi phồng sai lầm loại I gấp nhiều lần.",
          "**Hiệu ứng Novelty:** Người dùng tò mò giao diện mới lúc đầu, sau đó tụt dần $\\rightarrow$ Cần chạy đủ chu kỳ tuần hoàn (ít nhất 1-2 tuần).",
          "**Hiệu chỉnh Bonferroni:** Kiểm định $m$ biến thể đồng thời $\\rightarrow$ Ngưỡng ý nghĩa mới $\\alpha' = \\frac{\\alpha}{m}$."
        ]
      }
    ]
  },

  "cd05": {
    "title": "Bản rút gọn cực ngắn cho CĐ-05 (Lập trình Python chuyên sâu & Bộ nhớ):",
    "groups": [
      {
        "category": "Kiểu dữ liệu & Bản chất Bộ nhớ",
        "items": [
          "**Mutable (thay đổi tại chỗ):** `list`, `dict`, `set`. **Immutable (bất biến):** `int`, `float`, `str`, `tuple`, `frozenset`.",
          "**Bẫy Mutable Default Argument:** `def append_to(item, target=[]):` $\\rightarrow$ `target` dùng chung giữa các lần gọi hàm! Khắc phục: `target=None`.",
          "**`==` vs `is`:** `==` so sánh giá trị; `is` so sánh định danh vùng nhớ (`id(a) == id(b)`)."
        ]
      },
      {
        "category": "Copy & Scope (LEGB)",
        "items": [
          "**Shallow copy (`copy.copy`):** Chỉ copy tầng ngoài; phần tử con bên trong vẫn chung tham chiếu.",
          "**Deep copy (`copy.deepcopy`):** Sao chép đệ quy độc lập hoàn toàn toàn bộ cây đối tượng.",
          "**Thứ tự tìm kiếm biến LEGB:** Local $\\rightarrow$ Enclosing $\\rightarrow$ Global $\\rightarrow$ Built-in."
        ]
      },
      {
        "category": "Generator & Decorator",
        "items": [
          "**Generator (`yield`):** Đánh giá lười (Lazy evaluation), tiết kiệm RAM tuyệt đối, độ phức tạp bộ nhớ $O(1)$.",
          "**List comprehension:** `[x for x in list]` tạo ngay mảng đầy đủ trong RAM; `(x for x in list)` trả về generator."
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
          "**`df.loc[...]`:** Theo tên/nhãn (Label-based) $\\rightarrow$ **Bao gồm cả cận cuối (inclusive cả 2 đầu)**.",
          "**`df.iloc[...]`:** Theo vị trí chỉ số nguyên (Position-based) $\\rightarrow$ **Không bao gồm cận cuối (exclusive đầu mút phải, giống Python slice)**.",
          "**Cảnh báo `SettingWithCopyWarning`:** Xảy ra do Chained indexing `df[col][idx] = val` $\\rightarrow$ Sửa bằng `df.loc[idx, col] = val`."
        ]
      },
      {
        "category": "Merge, Join & Missing values",
        "items": [
          "**`pd.merge(how='inner')`:** Giữ khóa chung; `left`: giữ toàn bộ bảng trái; `outer`: giữ tất cả.",
          "**Xử lý rò rỉ dữ liệu khi Impute:** Tính `mean`/`median` CHỈ trên tập Train, rồi dùng số đó điền cho Test/Val.",
          "**`df.groupby().agg()`:** Dùng dictionary để tổng hợp đa cột tốc độ cao: `{'age': 'mean', 'salary': 'sum'}`."
        ]
      }
    ]
  },

  "cd07": {
    "title": "Bản rút gọn cực ngắn cho CĐ-07 (NumPy Broadcasting & Big-O Thuật toán):",
    "groups": [
      {
        "category": "NumPy Broadcasting Rules",
        "items": [
          "**Quy tắc khớp chiều:** So sánh từ chiều **cuối cùng ngược lên đầu**. Hai chiều tương thích khi: **(1) Chúng bằng nhau**, hoặc **(2) Một trong hai bằng 1**.",
          "Ví dụ: $(3, 1, 5)$ và $(4, 5) \\rightarrow (3, 4, 5)$ (Hợp lệ). $(3, 4)$ và $(3, 5) \\rightarrow$ LỖI!",
          "**View vs Copy:** `a[1:3]` trả về View (sửa làm đổi mảng gốc). `a[[0, 2]]` (Fancy indexing) luôn trả về Copy mới."
        ]
      },
      {
        "category": "Big-O Độ phức tạp Cốt lõi",
        "items": [
          "**Truy cập Hash Map / Dict / Set:** Trung bình $O(1)$, tệ nhất $O(n)$ do xung đột.",
          "**Tìm kiếm nhị phân (Binary search):** $O(\\log n)$ trên mảng đã sắp xếp.",
          "**Sắp xếp (MergeSort, Timsort của Python):** $O(n \\log n)$.",
          "**Nhân ma trận thông thường $(n \\times k) \\cdot (k \\times m)$:** $O(n \\cdot k \\cdot m)$, với ma trận vuông là $O(n^3)$."
        ]
      }
    ]
  },

  "cd08": {
    "title": "Bản rút gọn cực ngắn cho CĐ-08 (SQL Analytics & Window Functions):",
    "groups": [
      {
        "category": "Thứ tự thực thi SQL (Execution Order)",
        "items": [
          "**Thứ tự chuẩn:** `FROM` $\\rightarrow$ `WHERE` $\\rightarrow$ `GROUP BY` $\\rightarrow$ `HAVING` $\\rightarrow$ `SELECT` $\\rightarrow$ `DISTINCT` $\\rightarrow$ `ORDER BY` $\\rightarrow$ `LIMIT`.",
          "**Bẫy:** Không được dùng alias đặt ở `SELECT` trong `WHERE` (vì `WHERE` chạy trước `SELECT`!).",
          "**`WHERE` vs `HAVING`:** `WHERE` lọc từng dòng trước khi gộp nhóm; `HAVING` lọc các nhóm sau khi chạy hàm tổng hợp (`COUNT`, `AVG`)."
        ]
      },
      {
        "category": "Window Functions (Hàm cửa sổ)",
        "items": [
          "**`ROW_NUMBER()`:** Đánh số liên tục không trùng (1, 2, 3, 4).",
          "**`RANK()`:** Đồng hạng thì nhảy cách số (1, 2, 2, 4).",
          "**`DENSE_RANK()`:** Đồng hạng nhưng KHÔNG nhảy số (1, 2, 2, 3).",
          "**`LAG(col, 1)` / `LEAD(col, 1)`:** Lấy giá trị của dòng trước / dòng sau trong phân vùng `PARTITION BY`."
        ]
      }
    ]
  },

  "cd09": {
    "title": "Bản rút gọn cực ngắn cho CĐ-09 (Học máy toàn diện & Đánh giá mô hình):",
    "groups": [
      {
        "category": "Precision, Recall, F1 & Ma trận nhầm lẫn",
        "items": [
          "**Precision (Độ chuẩn xác):** $\\frac{TP}{TP + FP}$ — Mẫu số là tất cả những ca mô hình ĐOÁN LÀ DƯƠNG (Cần cao khi chi phí báo động giả rất đắt, e.g., spam filter).",
          "**Recall (Độ nhạy):** $\\frac{TP}{TP + FN}$ — Mẫu số là tất cả những ca THỰC TẾ LÀ DƯƠNG (Cần cao khi không được bỏ sót, e.g., ung thư, gian lận thẻ).",
          "**F1-Score:** Trung bình điều hòa $2 \\cdot \\frac{\\text{Precision} \\cdot \\text{Recall}}{\\text{Precision} + \\text{Recall}}$ (Phạt nặng nếu 1 trong 2 chỉ số bị thấp).",
          "**Đổi ngưỡng quyết định:** Tăng ngưỡng từ $0{,}5 \\rightarrow 0{,}7$: Precision tăng, Recall giảm. Giảm ngưỡng: Recall tăng, Precision giảm."
        ]
      },
      {
        "category": "ROC-AUC & PR-AUC",
        "items": [
          "**ROC Curve:** Trục hoành $FPR = \\frac{FP}{FP + TN}$, trục tung $TPR = \\text{Recall}$. Mô hình đoán bừa có $\\text{AUC} = 0{,}5$. ROC-AUC không nhạy với mất cân bằng lớp.",
          "**Dữ liệu cực kỳ mất cân bằng (Imbalanced):** BẮT BUỘC dùng **PR-AUC (Precision-Recall Curve)** thay cho ROC-AUC!"
        ]
      },
      {
        "category": "Bias-Variance & Regularization",
        "items": [
          "**High Bias (Underfitting):** Lỗi train cao, lỗi test cao $\\rightarrow$ Cần mô hình phức tạp hơn, thêm feature.",
          "**High Variance (Overfitting):** Lỗi train cực thấp, lỗi test cao $\\rightarrow$ Cần thêm dữ liệu, giảm feature, tăng Regularization, Early stopping.",
          "**L1 (Lasso):** Thêm $\\lambda \\sum |w_i|$ $\\rightarrow$ Ép trọng số về ĐÚNG BẰNG 0 (tạo trọng số thưa, dùng chọn đặc trưng).",
          "**L2 (Ridge):** Thêm $\\lambda \\sum w_i^2$ $\\rightarrow$ Thu nhỏ trọng số về gần 0 nhưng không triệt tiêu hoàn toàn."
        ]
      }
    ]
  },

  "cd10": {
    "title": "Bản rút gọn cực ngắn cho CĐ-10 (LLM, RAG & AI Agent thực chiến):",
    "groups": [
      {
        "category": "Tham số sinh của LLM",
        "items": [
          "**Temperature:** Bằng 0 $\\rightarrow$ Cực kỳ xác định (Deterministic), chọn từ xác suất cao nhất. Càng cao $\\rightarrow$ Càng sáng tạo, ngẫu nhiên, dễ ảo giác (hallucination).",
          "**Top-$p$ (Nucleus sampling):** Chỉ lấy mẫu trong tập từ có tổng xác suất tích lũy đạt $p$.",
          "**Định luật Scaling Law:** Năng lực mô hình tỉ lệ thuận với (Số lượng tham số $\\times$ Lượng dữ liệu train $\\times$ Compute)."
        ]
      },
      {
        "category": "Kiến trúc RAG (Retrieval-Augmented Generation)",
        "items": [
          "**Chunking:** Chia văn bản theo đoạn ngữ nghĩa có Overlap (10-20%) để không mất ngữ cảnh ở ranh giới cắt.",
          "**Vector Search & Hybrid Search:** Kết hợp Dense Retrieval (Cosine similarity qua Embedding) + Sparse Retrieval (BM25 từ khóa) để đạt recall tốt nhất.",
          "**Re-ranking:** Dùng Cross-encoder chấm điểm lại top $K$ văn bản trước khi nhét vào Context của LLM."
        ]
      },
      {
        "category": "Fine-tuning & LoRA",
        "items": [
          "**LoRA (Low-Rank Adaptation):** Đóng băng mô hình gốc $W_0 \\in \\mathbb{R}^{d \\times k}$, chỉ huấn luyện 2 ma trận phân rã nhỏ $B \\in \\mathbb{R}^{d \\times r}$ và $A \\in \\mathbb{R}^{r \\times k}$ với $r \\ll \\min(d, k)$.",
          "Tiết kiệm $>90\\%$ VRAM và tham số huấn luyện!"
        ]
      }
    ]
  },

  "cd11": {
    "title": "Bản rút gọn cực ngắn cho CĐ-11 (MLOps & Vận hành mô hình trong sản xuất):",
    "groups": [
      {
        "category": "Data Drift & Concept Drift",
        "items": [
          "**Covariate/Data Drift:** Phân phối đầu vào thay đổi $P(X)$ đổi, nhưng quy luật $P(Y \\mid X)$ không đổi (Ví dụ: Độ tuổi khách hàng trẻ hóa). Đo bằng KS-test, PSI.",
          "**Concept Drift:** Bản chất mối quan hệ $P(Y \\mid X)$ thay đổi (Ví dụ: Hành vi mua sắm thay đổi đột ngột sau đại dịch Covid).",
          "Khắc phục: Thiết lập trigger tự động re-train mô hình với dữ liệu mới."
        ]
      },
      {
        "category": "Chiến lược Deployment",
        "items": [
          "**Canary Deployment:** Chuyển một phần nhỏ traffic (e.g., 5%) sang phiên bản mới, theo dõi lỗi/latency trước khi rollout 100%.",
          "**Blue/Green Deployment:** Chạy 2 môi trường song song giống hệt nhau, switch router tức thì giữa Blue (cũ) và Green (mới), rollback trong 1 giây.",
          "**Shadow Deployment:** Nhân bản traffic thật đưa vào mô hình mới để test tải và độ chuẩn, nhưng kết quả trả về cho khách vẫn từ mô hình cũ."
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
          "**Phản đảo (Contrapositive):** $\\neg Q \\Longrightarrow \\neg P$ (**Luôn có cùng giá trị chân lý với mệnh đề gốc!**).",
          "**Đảo & Nghịch:** $Q \\Longrightarrow P$ và $\\neg P \\Longrightarrow \\neg Q$ KHÔNG tương đương logic với mệnh đề gốc (Ngụy biện phổ biến).",
          "**Phủ định lượng từ:** Phủ định của \"$\\forall x, P(x)$\" là \"$\\exists x, \\neg P(x)$\". Phủ định của \"$\\exists x, P(x)$\" là \"$\\forall x, \\neg P(x)$\"."
        ]
      },
      {
        "category": "Quy định Pháp lý AI (EU AI Act & Dữ liệu 2025)",
        "items": [
          "**Bị cấm hoàn toàn (Unacceptable risk):** Chấm điểm công dân (Social scoring), nhận diện cảm xúc tại nơi làm việc/trường học, thao túng tâm lý dưới ngưỡng nhận thức.",
          "**Rủi ro cao (High risk):** AI dùng trong tuyển dụng (sàng lọc CV), y tế, chấm điểm tín dụng, tư pháp $\\rightarrow$ Bắt buộc đánh giá rủi ro, kiểm toán dữ liệu và có giám sát con người (Human-in-the-loop).",
          "**OWASP LLM Top 10:** LLM01: Prompt Injection (tấn công chèn câu lệnh), LLM06: Excessive Agency (trao quyền tool vượt mức kiểm soát)."
        ]
      }
    ]
  },

  "tonghop": {
    "title": "Chiến thuật 90 phút & Mẹo phản xạ thi ĐGNL Tổng hợp (ĐGNL 01–06):",
    "groups": [
      {
        "category": "Phân bổ thời gian chuẩn",
        "items": [
          "**30 phút đầu:** Quét sạch toàn bộ câu Trắc nghiệm Nhận biết & Thông hiểu (khoảng 35–40 câu). Câu nào tính toán quá 90 giây $\\rightarrow$ Đánh dấu, làm sau.",
          "**35 phút tiếp theo:** Giải quyết các bài toán Vận dụng & Tự luận ngắn (Tính đạo hàm, Bayes, ma trận, phân tích độ phức tạp code).",
          "**25 phút cuối:** Làm câu Tình huống / System Design (SFIA L3–L4) và soát lại toàn bộ phiếu trả lời, tuyệt đối không bỏ trống câu nào."
        ]
      },
      {
        "category": "Kỹ thuật nhẩm nhanh không máy tính",
        "items": [
          "**Phần trăm & Bayes:** Dùng bảng số nguyên quy chuẩn 1000 người thay vì nhân chia số thập phân.",
          "**Trace & Det:** Tổng 2 nghiệm đặc trưng luôn bằng đường chéo chính; tích 2 nghiệm luôn bằng định thức $\\rightarrow$ Thử ngược đáp án trong 5 giây."
        ]
      }
    ]
  }
};
