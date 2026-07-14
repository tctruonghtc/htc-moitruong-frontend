# AGENTS.md — HTC Website Project

This folder uses the [Tolaria LLM-maintained wiki pattern](https://github.com/refactoringhq/tolaria) adapted for project management. 
It serves as both a knowledge base and a codebase for the HTC company website project.

## Core conventions

- Maintain an LLM-maintained wiki alongside the project files.
- The first H1 in the body is the preferred display title.
- Store note type in the `type:` frontmatter field.
- Keep `index.md` and `log.md` up to date with any significant actions, new pages, or code features.

## Strict Technical Constraints (CRITICAL)

- **NEVER use the `browser_subagent` tool.** Hệ thống `browser_subagent` sẽ tự động mở Chrome profile mới, làm hỏng phiên làm việc hiện tại.
- **ALWAYS use `browser-harness`**: Để tương tác với trình duyệt, phải gọi lệnh script Python thông qua pipeline với biến môi trường `$env:BU_CDP_URL="http://127.0.0.1:61920"`. (Tuyệt đối không dùng bất kỳ công cụ tự động hóa UI nào khác).

## Wiki System

1. **Raw sources** (`raw/`) — immutable input files or reference documents.
2. **The wiki** (vault root) — LLM-generated Markdown pages for tracking Entities, Concepts, Features, and Workflows.
3. **The code** — actual codebase for the HTC website will live here as well (if applicable).

## Workflows

- **Ingest**: When given new requirements or reference docs, summarize them into a wiki page and update `index.md` & `log.md`.
- **Develop**: Write code for the website. When a feature is complete, document it in a `feature-<name>.md` page and log it.
- **Session-End**: Summarize the session in a `session-summary-YYYY-MM-DD-<topic>.md` file, update `index.md` and `log.md`.
