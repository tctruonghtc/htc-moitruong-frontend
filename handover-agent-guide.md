# Hướng dẫn Bàn giao cho AI Agent (HTC Website Project)
type: handover

Chào mừng AI Agent mới! Dưới đây là toàn bộ thông tin hệ thống, kiến trúc và nguyên tắc làm việc mà bạn cần phải nắm rõ để tiếp quản và phát triển dự án website cho Công ty TNHH Tài nguyên và Môi trường HTC.

---

## 1. Kiến trúc Hệ thống (Headless WordPress)
Dự án đã được chuyển đổi từ WordPress truyền thống sang mô hình **Headless CMS** để tối ưu hóa tốc độ và bảo mật.

*   **Frontend (Giao diện người dùng)**: 
    *   **Công nghệ**: Next.js (App Router), TypeScript, TailwindCSS v4, React.
    *   **Máy chủ**: Vercel.
    *   **Tên miền chính**: `https://moitruonghtc.com`
    *   **Thư mục làm việc cục bộ**: Tại chính thư mục chứa file tài liệu này (đây là thư mục gốc của dự án).
    *   **Git Repository**: Toàn bộ mã nguồn và tài liệu bàn giao (Wiki) đều được quản lý tập trung trên GitHub (`https://github.com/tctruonghtc/htc-moitruong-frontend.git`). Mọi thay đổi code khi push lên nhánh `main` sẽ tự động kích hoạt Vercel Deploy.

*   **Backend (Hệ thống Quản trị Nội dung)**:
    *   **Công nghệ**: WordPress chạy trên cPanel (Hosting AZDIGI).
    *   **Tên miền quản trị & API**: `https://api.moitruonghtc.com` (Đã cấu hình lại trong Database).
    *   **Mục đích**: Người dùng sẽ viết bài, đăng ảnh tại `api.moitruonghtc.com/wp-admin`. Hệ thống này chỉ làm nhiệm vụ cung cấp dữ liệu qua API, không xử lý giao diện hiển thị cho khách hàng.

*   **Luồng dữ liệu (Data Fetching)**: 
    *   Frontend gọi dữ liệu qua REST API chuẩn của WordPress. 
    *   Ví dụ API Endpoint: `https://api.moitruonghtc.com/wp-json/wp/v2/posts`

---

## 2. Thông tin Kết nối Máy chủ (Backend AZDIGI)
Bạn có toàn quyền truy cập SSH vào máy chủ AZDIGI để chạy các lệnh quản lý WordPress (`wp-cli`) nếu cần:
*   **Server**: `ghf56-22143.azdigihost.com`
*   **Port**: `2210`
*   **User**: `setmvcsl`
*   **Thư mục gốc của WordPress**: `public_html`
*   **Xác thực SSH**: Sử dụng khóa Public Key. *Lưu ý quan trọng cho máy tính mới: Nếu bạn làm việc trên một máy tính khác, máy tính đó phải được copy file khóa riêng tư (`id_ed25519`) từ máy tính cũ sang. Nếu không, AI Agent hãy yêu cầu người dùng cung cấp mật khẩu cPanel để tự động tạo và add một SSH Key mới.*
*   **Lệnh mẫu để kiểm tra trạng thái WP**: 
    ```bash
    ssh -p 2210 setmvcsl@ghf56-22143.azdigihost.com "cd public_html && wp info"
    ```

---

## 3. Các Lệnh cấm & Ràng buộc Kỹ thuật (CRITICAL)
Bạn **BẮT BUỘC** phải tuân thủ các quy tắc sau (Đã ghi trong `AGENTS.md`):

1.  **Cấm dùng `browser_subagent`**: Tuyệt đối không sử dụng công cụ `browser_subagent` của hệ thống để điều khiển trình duyệt. Nó sẽ mở các profile Chrome rác làm hỏng phiên làm việc.
2.  **Chỉ dùng `browser-harness`**: Để tương tác web, phải viết script Python và chạy qua pipeline với cổng CDP 61920:
    ```powershell
    $env:BU_CDP_URL="http://127.0.0.1:61920"; cmd.exe /c "type script.py | browser-harness"
    ```
3.  **Hệ thống Tolaria Wiki**: Cập nhật mọi thay đổi cấu trúc, logic hoặc feature mới vào các file markdown tương ứng và ghi lại lịch sử vào file `log.md`.

---

## 4. Kế hoạch & Nhiệm vụ tiếp theo (Dành cho Bạn)
Dự án mới hoàn thiện phần Trang chủ (hiển thị danh sách tin tức). Các tác vụ bạn cần phát triển tiếp:
*   **Dynamic Routing (Trang chi tiết bài viết)**: Tạo route `src/app/news/[slug]/page.tsx` để render nội dung chi tiết của một bài viết khi người dùng click vào từ trang chủ.
*   **Tạo Trang tĩnh**: Xây dựng UI cho các trang Dịch vụ (Hồ sơ môi trường, Nước ngầm...), Trang Giới thiệu và Trang Liên hệ.
*   **SEO Metadata**: Thiết lập `generateMetadata` của Next.js cho tất cả các trang dựa trên dữ liệu lấy từ WordPress API để đảm bảo điểm SEO tuyệt đối.

*Ký tên: AI Agent tiền nhiệm (Thực hiện ngày 14/07/2026).*
