# Project Log

> Chronological record of everything that happened in this project — setups, code changes, ingests, and features.

Format: `## [YYYY-MM-DD] <action> | <title>`

---

## [2026-07-14] init | Project initialized

- Applied Tolaria LLM-maintained wiki pattern to the HTC Website project.
- Created `index.md`, `log.md`, `AGENTS.md`.

## [2026-07-14] ingest | Ingested moitruonghtc.com

- Scraped homepage of `https://moitruonghtc.com`.
- Created `entity-moitruonghtc.md` to document the company info and services.
- Identified as a WordPress site for environmental consulting.

## [2026-07-14] access | Thiết lập SSH & WP-CLI

- Đã lấy username cPanel là `setmvcsl` và thông tin server `ghf56-22143.azdigihost.com`.
- Đã dùng `browser-harness` tự động tạo khóa SSH, đẩy lên và Authorize trên cPanel.
- Kết nối SSH thành công và kiểm tra lệnh `wp-cli` hoạt động tốt trên thư mục `public_html`.

## [2026-07-14] init | Khởi tạo Headless Frontend (Next.js)

- Chốt phương án thiết kế giao diện bằng code thuần (Headless WordPress).
- Tạo `concept-headless-wordpress.md` để ghi chú kiến trúc.
- Chạy lệnh khởi tạo dự án Next.js tại thư mục `frontend/`.

## [2026-07-14] dev | Chốt giao diện Trang Chủ Next.js

- Xây dựng giao diện trang chủ với TailwindCSS, Glassmorphism, tone màu xanh môi trường.
- Người dùng đã xem trước qua localhost:3000 và phê duyệt giao diện.
- Chuẩn bị bước tích hợp REST API để kéo dữ liệu từ WordPress backend.

## [2026-07-14] ops | Chốt phương án triển khai Vercel + AZDIGI

- Quyết định giữ AZDIGI làm Backend API (tên miền `api.moitruonghtc.com`).
- Triển khai Next.js Frontend lên Vercel (tên miền chính `moitruonghtc.com`).
- Đã commit mã nguồn Next.js cục bộ, chuẩn bị đẩy lên GitHub/Vercel.

## [2026-07-14] release | Đưa giao diện Headless Next.js lên Vercel

- Mã nguồn đã được đẩy lên GitHub repository: `htc-moitruong-frontend`.
- Đã kết nối và tự động xuất bản (deploy) thành công trên hệ thống máy chủ toàn cầu của Vercel.
- Giao diện mới giờ đây đã được đưa lên môi trường mạng thực tế, tự động kéo tin tức từ WP-API.

## [2026-07-14] release | Cấu hình DNS và Go Live

- Cập nhật DNS Cloudflare thành công: Trỏ `moitruonghtc.com` sang Vercel và `api.moitruonghtc.com` về AZDIGI.
- Thực hiện Database Search & Replace trên AZDIGI qua SSH để đổi URL WordPress sang `api.moitruonghtc.com` thành công (246 replacements).
- Cập nhật frontend Next.js trỏ endpoint API về `https://api.moitruonghtc.com/wp-json/` và hoàn tất quá trình go live.

## [2026-07-15] handover | Agent succession

- Thêm `handover-agent-guide.md` (kiến trúc Headless, SSH, ràng buộc browser-harness, lock AI SDK).

## [2026-07-15] dev | Static pages + shell + SEO

- Clone repo local: `/Users/phuongthao/Projects/htc-moitruong-frontend`.
- Component: `Header` (mobile nav), `Footer`, `PageHero`; config `src/lib/site.ts`.
- Routes: `/gioi-thieu`, `/lien-he`, `/dich-vu`, `/dich-vu/[slug]` (3 dịch vụ SSG).
- Homepage / news: dùng Header-Footer chung; CTA link thật.
- SEO: metadata root + OG, `robots.ts`, `sitemap.ts`, `next.config` remotePatterns.
- AI: pin `ai@3.4.15`, gỡ deps `@ai-sdk/react`/`@ai-sdk/google` top-level; sửa `VIETAPI_KEY` + copy widget; `.env.example`.
- Verify: `npm run build` thành công (13 routes).
- Docs: `feature-static-pages-shell.md`, session summary.
