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
| 상태 | 🔄 진행중 — P4-1·P4-2 완료, P4-3 (dev-tools) 부분 완료 후 세션 전환 |
| 현재 플랜 | `.claude/plans/phase4-api-mcp.md` |
| 전체 플랜 | `.claude/plans/weblist-master.md` |

---

## 남은 과제

### Phase 4 구현 항목

phase4-api-mcp.md 참조.

**작업 순서 (우선순위 순):**
1. ✅ P4-1: ItemDetail.jsx UI 확장 (구분선 + api_docs/dashboard/mcp 렌더링)
2. ✅ P4-2: mcp-automation JSON 업데이트 (Apify MCP 포함 13개 완료)
3. 🔄 P4-3: dev-tools JSON 업데이트 (GitHub Copilot 1개만 완료, 나머지 재개 필요)
   - 확인된 MCP: Playwright(npx @playwright/mcp@latest), Sentry(npx @sentry/mcp-server@latest), Docker(MCP Gateway)
4. 🔲 P4-4: database JSON 업데이트
5. 🔲 P4-5: hosting-infra JSON 업데이트
6. 🔲 P4-6 이후: ai-platforms, api, payment, nocode-collab, design-tools, marketing-seo, google-*, 에셋 계열

### 보류 — Phase 3에서 이월

- 훅 구조 문제 (protect-phase-transition.js 우회 경로): 추후 해결
- designs/phase2-detail.md 미삭제: Phase 4 완료 후 정리
- 점검-scope 갱신 문제: 추후 해결

---

## 진행 이력

### 2026-04-09 Phase 4 전환 — API·MCP 정보 보강 플랜 수립

| 항목 | 내용 |
|------|------|
| 전환 | WORKSPACE.phase3-search-filter.md 아카이브 후 새 WORKSPACE.md 작성 |
| 플랜 | phase4-api-mcp.md 작성 완료 |
| 스키마 | detail 객체에 api_docs / dashboard / mcp(desktop_config, cli_command, info_url) 추가 |
| 체크리스트 | 25개 카테고리 × 서비스별 MCP/API 지원 여부 조사 완료 (플랜 내 테이블 참조) |
