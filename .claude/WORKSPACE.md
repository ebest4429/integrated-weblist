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
| 상태 | 🔄 진행중 — api_docs·dashboard 구현 완료 / mcp 구현 목표 재정의 → 전면 재작업 필요 |
| 현재 플랜 | `.claude/plans/phase4-api-mcp.md` |
| 전체 플랜 | `.claude/plans/weblist-master.md` |

---

## 남은 과제

### ⚠️ 다음 세션 최우선: phase4-api-mcp.md 전면 재작성

> 취지: 기존 Phase 4 플랜의 MCP 구현 방향이 근본적으로 잘못됨.
> 기존 MCP 조사는 "서비스가 MCP 관련 기능을 보유하는가"를 기준으로 했으나
> 실제 목적은 "Claude CLI/Desktop에서 해당 서비스를 MCP로 연결하는 명령 안내"임.
> 이 기준 불일치로 잘못된 데이터 삽입·올바른 데이터 누락이 발생함.
> phase4-api-mcp.md를 이 WORKSPACE 기준으로 전면 재작성해야 한다.

---

#### 현재 상태 정리

**유지 (재작업 불필요):**
- api_docs·dashboard JSON 데이터 — 올바르게 구현됨. 링크 검증은 미실시(마스터플랜 별도 기록).
- P4-1 UI 기본 렌더링 구조 (api_docs·dashboard·mcp 필드 표시)

**재작업 필요:**
- mcp JSON 데이터 전체 — 잘못된 기준으로 조사됨. 전 카테고리 전체 서비스 재조사 필요.
- P4-1 UI — 복사 버튼·레이블 미구현.

**현재 mcp 데이터 중 구조상 올바른 것 (재조사 시 참고):**
Pipedream, Apify, Playwright, Sentry, Neon, MongoDB Atlas, SQLite, PostgreSQL, Redis, Supabase, Cloudflare Workers, Perplexity, Hugging Face, Ollama
→ 재조사 대상에 포함하여 공식 문서 기준으로 재검증할 것.

---

#### mcp 필드 정의 (취지 — 플랜 재작성 시 반드시 포함)

**목적:** Claude CLI 또는 Claude Desktop에서 해당 서비스를 MCP로 연결하고 싶을 때 필요한 명령을 사용자에게 안내한다. 사용자가 코드블록을 보고 복사하여 즉시 사용 가능해야 한다.

**필드 구성:**
- `desktop_config` — claude_desktop_config.json에 추가하는 JSON 코드블록
- `cli_command` — `claude mcp add` CLI 명령어
- `info_url` — 출처 문서 링크 (선택)
- **둘 중 하나라도 있으면 있는 것만 기록. 둘 다 없으면 필드 없음. info_url 단독 사용 금지.**

**조사 방법:**
각 서비스 공식 문서에서 Claude Desktop config 또는 `claude mcp add` 명령을 직접 확인.
커뮤니티 패키지는 GitHub에서 명확한 설치 명령 확인 시 포함 (출처 info_url 명시).

---

#### UI 구현 필요사항 (P4-1 재작업 — 데이터 작업보다 먼저)

1. mcp 섹션 제목: **"Claude MCP 연결"** 레이블 표시
2. `desktop_config` 코드블록에 클릭 복사 버튼 구현
3. `cli_command` 코드블록에 클릭 복사 버튼 구현
4. 복사 후 시각적 피드백 ("복사됨" 등 잠깐 표시)

---

#### 서비스 목록 재구성 방침

> 취지: 기존 플랜의 서비스 목록은 잘못된 MCP 기준으로 선별됨.
> 특정 서비스만 조사하면 실제 Claude MCP 명령을 제공하는 서비스가 누락될 수 있음.

- 기존 MCP 서비스 목록 전부 제거됨 (phase4-api-mcp.md에서 제거됨)
- **재조사 대상: 각 카테고리 JSON 파일의 전체 서비스**
- 조사 전 체크리스트 작성 필수 (서비스 수 많음)
- 조사 완료 후 구현 체크리스트 별도 작성 필수

---

#### 다음 세션 작업 순서

1. **phase4-api-mcp.md 전면 재작성** — 이 WORKSPACE 내용 기준으로
   - mcp 필드 정의·취지 상단 명시
   - 기존 MCP 조사 테이블 제거 (이미 제거됨)
   - 전체 서비스 대상 조사·구현 체크리스트 구조로 재구성
2. **P4-1 UI 재작업** — 복사 버튼 + "Claude MCP 연결" 레이블
3. **전 카테고리 MCP 재조사** — 각 JSON 파일 전체 서비스 대상, 체크리스트로 진행
4. **JSON 업데이트** — 조사 결과 기반 순차 구현, 체크리스트로 진행

---

### 보류 — Phase 3에서 이월

- 훅 구조 문제 (protect-phase-transition.js 우회 경로): 추후 해결
- designs/phase2-detail.md 미삭제: Phase 4 완료 후 정리
- master-source ↔ JSON 동기화 미완: Phase 4 완료 후 협의

---

## 진행 이력

### 2026-04-09 Phase 4 전환 — API·MCP 정보 보강 플랜 수립

| 항목 | 내용 |
|------|------|
| 전환 | WORKSPACE.phase3-search-filter.md 아카이브 후 새 WORKSPACE.md 작성 |
| 플랜 | phase4-api-mcp.md 작성 완료 |
| 스키마 | detail 객체에 api_docs / dashboard / mcp(desktop_config, cli_command, info_url) 추가 |
| 체크리스트 | ❌ 잘못된 기준으로 조사됨 — 테이블 전부 제거. 전면 재조사 필요 (WORKSPACE 남은 과제 참조) |
