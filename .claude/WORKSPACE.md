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
| 상태 | 🔄 진행중 — 0단계(플랜 완성) 완료. 다음: P4-1 UI 재작업 |
| 현재 플랜 | `.claude/plans/phase4-api-mcp.md` |
| 전체 플랜 | `.claude/plans/weblist-master.md` |
| 현재 활성 MCP 조사 파일 | 없음 — P4-1 UI 완료 후 P4-2부터 시작 예정 |

> 포인터 운용 방법: MCP 조사 시작 시 "현재 활성 MCP 조사 파일"을 해당 plans/mcp/*.md로 변경.
> 카테고리 완료 시 AI가 확인 요청 → 사용자 승인 후 이 포인터를 다음 파일로 변경.

---

## 남은 과제

### 다음 세션 최우선: P4-1 UI 재작업

P4-1 UI (CopyButton 컴포넌트 + 레이블) 구현. 플랜 참조: `.claude/plans/phase4-api-mcp.md` → "UI 구현 사항(P4-1)" 섹션.

구현 내용:
- `src/components/CopyButton.jsx` — 재사용 복사 버튼 컴포넌트
- `src/components/ItemDetail.jsx` — MCP 섹션 레이블("MCP 연결 (CLAUDE)") + CopyButton 연결
- 빌드 확인 → 커밋

---

### 이후 순서: 카테고리별 MCP 조사 + 구현 (P4-2 ~ P4-14)

각 카테고리마다: WORKSPACE 포인터 변경 → 조사(테이블 파일 체크리스트) → JSON 업데이트 → 빌드 → 커밋·배포·샘플 검증.
조사 기준: `.claude/plans/phase4-api-mcp.md` → "MCP 필드 정의" 섹션 (임의 해석 금지).

**재조사 시 참고 — 기존 데이터 중 구조상 올바른 것:**
Pipedream, Apify, Playwright, Sentry, Neon, MongoDB Atlas, SQLite, PostgreSQL, Redis, Supabase, Cloudflare Workers, Perplexity, Hugging Face, Ollama
→ 재조사 대상에 포함하여 공식 문서 기준으로 재검증할 것.

---

### 보류 — Phase 3에서 이월

- 훅 구조 문제 (protect-phase-transition.js 우회 경로): 추후 해결
- designs/phase2-detail.md 미삭제: Phase 4 완료 후 정리
- master-source ↔ JSON 동기화 미완: Phase 4 완료 후 협의

---

## 진행 이력

### 2026-04-11 Phase 4 플랜 전면 재작성 + 테이블 파일 구조 수립

| 항목 | 내용 |
|------|------|
| 플랜 재작성 | phase4-api-mcp.md 전면 재작성 완료 — MCP 목적·기준·조사방법·UI사양·검증계획 명시 |
| 테이블 파일 | plans/mcp/ 하위 13개 카테고리 파일 생성 완료 (p4-2 ~ p4-14) |
| 포인터 구조 | WORKSPACE "현재 활성 MCP 조사 파일" 항목으로 세션 간 인수인계 방식 확립 |
| 취지 | 세션마다 AI 해석이 달라 MCP 구현 반복 실패 → 목적·기준·취지를 플랜에 명시하여 일관성 확보 |

### 2026-04-09 Phase 4 전환 — API·MCP 정보 보강 플랜 수립

| 항목 | 내용 |
|------|------|
| 전환 | WORKSPACE.phase3-search-filter.md 아카이브 후 새 WORKSPACE.md 작성 |
| 플랜 | phase4-api-mcp.md 작성 완료 |
| 스키마 | detail 객체에 api_docs / dashboard / mcp(desktop_config, cli_command, info_url) 추가 |
| 체크리스트 | ❌ 잘못된 기준으로 조사됨 — 테이블 전부 제거. 전면 재조사 필요 (WORKSPACE 남은 과제 참조) |
