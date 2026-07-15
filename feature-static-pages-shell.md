---
type: Feature
status: Active
---

# Feature: Static Pages & Shared Shell

**Ngày:** 2026-07-15

## Nội dung
- Component hóa `Header` (desktop + mobile hamburger), `Footer`, `PageHero`.
- Trang tĩnh:
  - `/gioi-thieu`
  - `/lien-he` (CTA hotline/Zalo; form submit backend chưa làm)
  - `/dich-vu` + `/dich-vu/[slug]` (3 dịch vụ SSG)
- Shared config: `src/lib/site.ts` (contact, services, API base).
- SEO: `metadataBase`, OG/Twitter root, per-page metadata, `robots.ts`, `sitemap.ts`.
- `next.config.ts`: `images.remotePatterns` (WP, Unsplash, AZDIGI).
- AI: gỡ `@ai-sdk/react` / `@ai-sdk/google` khỏi deps trực tiếp; pin `ai@3.4.15`; copy widget → VietAPI; fix `process.env.VIETAPI_KEY`; thêm `.env.example`.
- News detail dùng chung Header/Footer.

## Routes
| Path | Ghi chú |
|------|---------|
| `/` | Homepage + WP posts |
| `/gioi-thieu` | About |
| `/lien-he` | Contact CTA |
| `/dich-vu` | Services index |
| `/dich-vu/ho-so-moi-truong` | SSG |
| `/dich-vu/tai-nguyen-nuoc` | SSG |
| `/dich-vu/thi-cong-cong-trinh` | SSG |
| `/news/[slug]` | WP dynamic |
| `/api/chat` | VietAPI stream |
| `/robots.txt` `/sitemap.xml` | SEO |

## Verify
`npm run build` — OK (Next 16.2.10, 13 routes).
