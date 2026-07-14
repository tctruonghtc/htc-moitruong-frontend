---
type: Concept
status: Active
Related to:
  - "[[entity-moitruonghtc]]"
---

# Headless WordPress Architecture

**Ngày quyết định:** 2026-07-14

Thay vì sử dụng WordPress để quản lý cả backend (dữ liệu) và frontend (giao diện, Elementor), chúng ta tách rời hai phần này:
- **Backend (CMS)**: Vẫn là trang `moitruonghtc.com` hiện tại. Dùng để quản trị viên (Admin) đăng bài, quản lý cấu hình, thông qua giao diện WP Admin truyền thống.
- **Frontend (Giao diện người dùng)**: Được xây dựng lại hoàn toàn mới bằng **Next.js (React)** và **TailwindCSS**. Frontend sẽ giao tiếp với Backend thông qua WordPress REST API (hoặc WPGraphQL).

## Lợi ích cho dự án HTC
1. **AI-driven UI**: Cho phép AI (như Antigravity) toàn quyền viết code, sửa đổi giao diện trực tiếp bằng code mà không bị rào cản bởi các trình dựng trang kéo-thả mã hóa trong DB (như Elementor).
2. **Hiệu suất (Performance)**: Next.js mang lại tốc độ tải trang cực nhanh (SSG/SSR), điểm SEO tuyệt đối.
3. **Bảo mật**: Người dùng cuối không bao giờ tương tác trực tiếp với máy chủ WordPress, giảm thiểu rủi ro bị tấn công.

## Quá trình triển khai
1. Khởi tạo Next.js App tại thư mục `frontend/`.
2. Dùng thư viện lấy dữ liệu bài viết, dịch vụ từ `https://moitruonghtc.com/wp-json/wp/v2/`.
3. Xây dựng UI (Trang chủ, Tin tức, Dịch vụ) bằng TailwindCSS với thiết kế hiện đại, premium.
4. Triển khai (Deploy) Frontend lên Vercel hoặc Cloudflare Pages. Trỏ tên miền chính `moitruonghtc.com` về Frontend, chuyển Backend WP về subdomain (VD: `api.moitruonghtc.com`).
