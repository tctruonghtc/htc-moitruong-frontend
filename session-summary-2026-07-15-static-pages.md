---
type: SessionSummary
date: 2026-07-15
---

# Session 2026-07-15 — Static pages & shell

## Goal
Tiếp quản handover → clone audit → implement theo roadmap an toàn.

## Done
1. Clone `htc-moitruong-frontend` → `~/Projects/htc-moitruong-frontend`.
2. Audit: stack Next 16 / React 19 / ai 3.4.15; WP API 200; live www 200.
3. Header/Footer/PageHero + mobile menu.
4. Trang tĩnh GT / LH / DV + 3 slug SSG.
5. SEO metadata, robots, sitemap, image remotePatterns.
6. Dọn AI deps (không upgrade `ai` v4), fix env key & footer copy.
7. `npm run build` pass.

## Not done / next
- Form liên hệ backend (WPForms / API) — hiện chỉ CTA phone/Zalo.
- `next/image` thay `<img>` raw (config đã sẵn).
- Responsive visual QA trên device thật / browser-harness.
- Push GitHub + Vercel deploy (chờ xác nhận anh).
- RAG nâng system prompt (tùy chọn).

## Risks
- Peer warn `swr` (ai v3) vs React 19 — runtime chat cần smoke test sau deploy.
- Chưa commit/push — chỉ local.
