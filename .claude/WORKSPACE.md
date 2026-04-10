# WORKSPACE.md

> 세션 시작 시 읽는다.
> **기본 읽기**: 현재 위치 + 남은 과제까지.
> **진행 이력**: 필요할 때만 추가 요청.

---

## 현재 위치

| 항목 | 값 |
|------|-----|
| PROJECT | 통합 웹 리소스 허브 |
| 현재 Phase | Phase 4 — API·MCP 정보 보강 |
| 상태 | 🔄 진행중 — P4-1~P4-6 완료, 품질 재검토 전수 점검 완료 (위반 4건 수정) |
| 현재 플랜 | `.claude/plans/phase4-api-mcp.md` |
| 전체 플랜 | `.claude/plans/weblist-master.md` |

---

## 남은 과제

### Phase 4 구현 항목

phase4-api-mcp.md 참조.

**작업 순서 (우선순위 순):**
1. ✅ P4-1: ItemDetail.jsx UI 확장 (구분선 + api_docs/dashboard/mcp 렌더링)
2. ✅ P4-2: mcp-automation JSON 업데이트 (Apify MCP 포함 13개 완료)
3. ✅ P4-3: dev-tools JSON 업데이트 완료 (24개 전체)
   - MCP 추가: Playwright(npx @playwright/mcp@latest), Sentry(npx @sentry/mcp-server@latest), Docker(MCP Catalog info_url)
   - API/dashboard 추가: Replit, Claude Code, Mintlify, Postman, ngrok, Semgrep, Tailwind, Puppeteer, VS Code, Android Studio, Flutter, TensorFlow
4. ✅ P4-4: database JSON 업데이트 완료 (13개)
   - MCP 추가: PostgreSQL(@modelcontextprotocol/server-postgres), SQLite(@modelcontextprotocol/server-sqlite), MongoDB(mongodb-mcp-server), Neon(@neondatabase/mcp-server-neon), Redis(@modelcontextprotocol/server-redis)
   - API/dashboard 추가: Pinecone, Weaviate, Qdrant, Neon, Upstash, MongoDB, PlanetScale, Cloudflare D1, BigQuery
5. ✅ P4-5: hosting-infra JSON 업데이트 완료 (18개)
   - MCP 추가: Vercel(info_url), AWS(awslabs/mcp info_url), Cloudflare(@cloudflare/mcp-server-cloudflare), Supabase(@supabase/mcp-server-supabase)
   - API/dashboard 추가: Netlify, Railway, Render, Cron-job.org, Firebase, Clerk, DigitalOcean, NCloud, Cloud Run, App Engine, GKE 등
6. ✅ P4-6: ai-platforms JSON 업데이트 완료 (18개)
   - API 추가: ChatGPT, Claude, Gemini, Grok, Perplexity, Microsoft Copilot, Mistral AI, Hugging Face, Ollama, Qwen
   - MCP 추가: Perplexity(@perplexity-ai/mcp-server 공식), Hugging Face(https://huggingface.co/mcp 공식원격), Ollama(ollama-mcp 커뮤니티)
   - 스킵(API 없음): NotebookLM, Phind, Genspark, Manus, chat.z.ai, Kimi, Flowith, abocado.ai
7. 🔲 P4-7: api 카테고리 (14개 — 다음 세션 시작점)
8. 🔲 P4-8 이후: payment, nocode-collab, design-tools, marketing-seo, google-*, 에셋 계열

### 보류 — Phase 3에서 이월

- 훅 구조 문제 (protect-phase-transition.js 우회 경로): 추후 해결
- designs/phase2-detail.md 미삭제: Phase 4 완료 후 정리
- 점검-scope 갱신 문제: 추후 해결

### 완료 — Phase 4 품질 재검토 (2026-04-10)

> 취지: P4-2~P4-6 전수 점검 완료. 3개 기준(MCP 완전성·빈필드·링크 유효성) 서비스별 확인.

**위반 발견 및 수정 (기준1 — info_url 단독 사용 → mcp 필드 제거):**
- dev-tools: Docker (docs.docker.com/ai/mcp-catalog/ — 카탈로그 페이지, 단일 서버 없음)
- hosting-infra: Vercel (github.com/vercel/mcp), AWS (github.com/awslabs/mcp — 다수 서버 모음)
- ai-platforms: ChatGPT (OpenAI가 MCP 클라이언트 역할, 서버 아님)

**기준2(빈필드)·기준3(링크)**: 위반 없음.

**남은 UI 구현 누락:**
- **코드블록 복사 버튼**: ItemRow.jsx DetailPanel `<pre>` 코드블록 전체에 복사 기능 없음. P4-1 플랜에 항목 추가 후 구현.

**master-source ↔ JSON 동기화 미완**: Phase 4 api_docs·dashboard·mcp 데이터가 master-source-*.md에 없음. gen-json.py detail 보존으로 실제 손실 없으나 구조 문제. Phase 4 완료 후 협의.

**다음 세션 작업 순서:**
1. P4-1 플랜에 복사 버튼 항목 추가 → ItemRow.jsx 구현
2. P4-7(api 카테고리) 진행

---

## 진행 이력

### 2026-04-09 Phase 4 전환 — API·MCP 정보 보강 플랜 수립

| 항목 | 내용 |
|------|------|
| 전환 | WORKSPACE.phase3-search-filter.md 아카이브 후 새 WORKSPACE.md 작성 |
| 플랜 | phase4-api-mcp.md 작성 완료 |
| 스키마 | detail 객체에 api_docs / dashboard / mcp(desktop_config, cli_command, info_url) 추가 |
| 체크리스트 | 25개 카테고리 × 서비스별 MCP/API 지원 여부 조사 완료 (플랜 내 테이블 참조) |
