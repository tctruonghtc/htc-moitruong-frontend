# Hướng dẫn Bàn giao cho AI Agent (HTC Website Project)
type: handover

Chào mừng AI Agent mới! Dưới đây là toàn bộ thông tin hệ thống, kiến trúc và nguyên tắc làm việc mà bạn cần phải nắm rõ để tiếp quản và phát triển dự án website cho Công ty TNHH Tài nguyên và Môi trường HTC.

---

## 1. Kiến trúc Hệ thống (Headless WordPress)
Dự án đã được chuyển đổi từ WordPress truyền thống sang mô hình **Headless CMS** để tối ưu hóa tốc độ và bảo mật.

*   **Frontend (Giao diện người dùng)**: 
    *   **Công nghệ**: Next.js (App Router), TypeScript, TailwindCSS v4, React.
    *   **AI Chat**: Sử dụng Vercel AI SDK v3 (`ai@3.4.15`) kết hợp với VietAPI (`@ai-sdk/openai`).
    *   **Máy chủ**: Vercel.
    *   **Tên miền chính**: `https://moitruonghtc.com`
    *   **Thư mục làm việc cục bộ**: Tại chính thư mục chứa file tài liệu này (đây là thư mục gốc của dự án).
    *   **Git Repository**: Toàn bộ mã nguồn và tài liệu bàn giao (Wiki) đều được quản lý tập trung trên GitHub (`https://github.com/tctruonghtc/htc-moitruong-frontend.git`). Mọi thay đổi code khi push lên nhánh `main` sẽ tự động kích hoạt Vercel Deploy.

*   **Backend (Hệ thống Quản trị Nội dung)**:
    *   **Công nghệ**: WordPress chạy trên cPanel (Hosting AZDIGI).
    *   **Tên miền quản trị & API**: `https://api.moitruonghtc.com`
    *   **Mục đích**: Người dùng sẽ viết bài, đăng ảnh tại `api.moitruonghtc.com/wp-admin`. Hệ thống này chỉ làm nhiệm vụ cung cấp dữ liệu qua API.

*   **Luồng dữ liệu (Data Fetching)**: 
    *   Frontend gọi dữ liệu qua REST API chuẩn của WordPress (`/wp-json/wp/v2/`).

---

## 2. Thông tin Kết nối Máy chủ & API
*   **SSH AZDIGI**:
    *   **Server**: `ghf56-22143.azdigihost.com` | **Port**: `2210` | **User**: `setmvcsl`
    *   **Lệnh mẫu**: `ssh -p 2210 setmvcsl@ghf56-22143.azdigihost.com "cd public_html && wp info"`
*   **VietAPI (AI Assistant)**:
    *   Hệ thống sử dụng VietAPI thay thế OpenAI/Gemini. 
    *   Model hiện tại: `deepseek-v4-pro` (Thiết lập tại `src/app/api/chat/route.ts`).
    *   Biến môi trường cần thiết: `VIETAPI_KEY` (Thiết lập trong `.env.local` hoặc trên Vercel Dashboard).

---

## 3. Các Lệnh cấm & Ràng buộc Kỹ thuật (CRITICAL)
Bạn **BẮT BUỘC** phải tuân thủ các quy tắc sau (Đã ghi trong `AGENTS.md`):

1.  **Cấm dùng `browser_subagent`**: Tuyệt đối không sử dụng công cụ `browser_subagent` của hệ thống để điều khiển trình duyệt. Nó sẽ mở các profile Chrome rác làm hỏng phiên làm việc.
2.  **Chỉ dùng `browser-harness`**: Để tương tác web, phải viết script Python và chạy qua pipeline với cổng CDP 61920:
    ```powershell
    $env:BU_CDP_URL="http://127.0.0.1:61920"; cmd.exe /c "type script.py | browser-harness"
    ```
3.  **Hệ thống Tolaria Wiki**: Cập nhật mọi thay đổi cấu trúc, logic hoặc feature mới vào các file markdown tương ứng và ghi lại lịch sử vào file `log.md`.
4.  **Vercel AI SDK**: Hiện tại Frontend đang bị "khóa" (lock) ở phiên bản `ai@3.4.15` và `@ai-sdk/react@0.x` vì phiên bản mới nhất gây ra lỗi component. TUYỆT ĐỐI KHÔNG tự ý update thư viện `ai` lên v4+ nếu không có sự đồng ý của User.

---

## 4. Kế hoạch & Nhiệm vụ tiếp theo (Dành cho Bạn)
Dự án đã hoàn thiện Trang chủ, Dynamic Routing bài viết chi tiết, và Widget AI Chat. Các tác vụ bạn cần phát triển tiếp:
*   **Tạo Trang tĩnh**: Xây dựng UI cho các trang Dịch vụ (Hồ sơ môi trường, Nước ngầm...), Trang Giới thiệu và Trang Liên hệ theo giao diện chuyên nghiệp.
*   **Giao diện Mobile**: Kiểm tra và tinh chỉnh lại độ tương thích trên thiết bị di động (Responsive).
*   **Cải tiến RAG cho AI (Tùy chọn)**: Đọc file System Prompt (`src/lib/prompt.ts`) và nghiên cứu cách đưa thêm tài liệu pháp lý chuyên sâu về môi trường để AI tư vấn luật chính xác hơn.
*   **SEO Metadata**: Hoàn thiện các thẻ SEO, OpenGraph cho các trang tĩnh.

*Ký tên: AI Agent tiền nhiệm (Thực hiện ngày 15/07/2026).*
