# Phase 4 — API·MCP 정보 보강

> **전면 재작성** — 2026-04-11
> 취지: 기존 플랜의 MCP 조사 방향이 근본적으로 잘못됨.
> "서비스가 MCP 기능을 보유하는가" 기준으로 조사했으나,
> 실제 목적은 "Claude CLI/Desktop에서 해당 서비스를 MCP로 연결하는 명령 안내"임.
> 이 기준 불일치로 잘못된 데이터 삽입·올바른 데이터 누락이 반복 발생 → 전면 재작업.

---

## 목적 (취지)

사용자가 Claude Desktop 또는 Claude CLI에서 특정 서비스를 MCP로 연결하고 싶을 때,
해당 서비스 카드에서 바로 연결 명령을 복사해 사용할 수 있도록 한다.
사용자는 외부 문서를 찾아볼 필요 없이 이 페이지에서 설정을 완료할 수 있어야 한다.

---

## 구현 범위

detail 객체에 선택적 필드를 추가한다. 지원하는 서비스만 해당 필드 포함. 없으면 필드 자체 생략.

- **api_docs**: ✅ 완료 — P4-2~P4-6 구현 완료. 이 플랜에서 추가 작업 없음.
- **dashboard**: ✅ 완료 — 동상.
- **mcp**: 현재 작업 — 전 카테고리(P4-2~P4-14) 전면 재조사·구현 필요.

---

## MCP 필드 정의 (핵심 기준 — 반드시 이 기준으로만 판단)

> 취지: 이 기준이 없으면 세션마다 AI가 다르게 해석하여 잘못된 데이터가 반복 삽입됨.
> 아래 기준은 협의 결과이며 임의 변경 금지.

### MCP 필드를 추가하는 조건

Claude Desktop config(`claude_desktop_config.json`) 또는 `claude mcp add` CLI 명령이
실제로 존재하는 서비스. 반드시 공식 문서 또는 명확한 GitHub 출처에서 확인 가능해야 함.

### MCP 필드를 추가하지 않는 조건

- 공식 MCP 서버가 없는 서비스
- 서비스 자체가 MCP 기능을 제공하더라도 Claude에서 연결하는 방법이 없는 경우
- 커뮤니티 패키지라도 GitHub에서 명확한 설치 명령 확인 불가 시
- info_url만 있고 desktop_config·cli_command 모두 없는 경우 (info_url 단독 사용 금지)

### MCP 필드 구성

- `desktop_config` — claude_desktop_config.json에 추가하는 JSON 스니펫
- `cli_command` — `claude mcp add` CLI 명령어
- `info_url` — 출처 문서 링크 (선택)
- **규칙: desktop_config 또는 cli_command 중 하나 이상 필수. 둘 중 있는 것만 기록.**

### 조사 방법 (단계별 — 순서 준수)

1. 서비스 공식 문서에서 "MCP", "Claude", "claude_desktop_config" 키워드로 검색
2. `modelcontextprotocol/servers` GitHub 저장소에서 해당 서비스 확인
3. 서비스 자체 GitHub 저장소에서 MCP 관련 내용 확인
4. 위 3단계에서 확인 불가 → mcp 필드 없음으로 처리 (빈 값 입력 금지)

---

## JSON 스키마 (detail 객체 확장)

```json
"detail": {
  "intro": "...",
  "features": ["..."],
  "usage": "...",
  "notes": "...",
  "api_docs": "https://...",
  "dashboard": "https://...",
  "mcp": {
    "desktop_config": "{\n  \"mcpServers\": {\n    \"서비스명\": { ... }\n  }\n}",
    "cli_command": "claude mcp add 서비스명 -- npx ...",
    "info_url": "https://..."
  }
}
```

---

## UI 구현 사항 (P4-1)

> 취지: 데이터가 있어도 UI가 없으면 표시 불가. 데이터 작업과 독립적으로 구현.
> 데이터 구현과 무관하게 이 작업이 먼저 완료되어야 이후 단계 검증이 가능.

### CopyButton 컴포넌트 (재사용)

- 코드블록 우측 상단에 복사 아이콘 버튼
- 클릭 시 해당 코드블록 내용 클립보드에 복사
- 복사 후 "복사됨" 텍스트 잠깐 표시 후 아이콘으로 복귀
- `desktop_config` 코드블록용 1개 + `cli_command` 코드블록용 1개 (각각 독립)

### ItemDetail.jsx MCP 섹션 수정

- 섹션 제목 레이블: **"MCP 연결 (CLAUDE)"**
- 서브레이블: "Claude Desktop — claude_desktop_config.json" (desktop_config 코드블록 위)
- 서브레이블: "Claude CLI" (cli_command 코드블록 위)
- 각 코드블록에 CopyButton 컴포넌트 부착

---

## 카테고리 테이블 파일 목록

> 취지: 서비스 전체를 한 파일에 넣으면 비대화로 세션 간 관리 불가.
> 카테고리별 독립 파일로 분리하여 집중 조사·완료 검증이 가능하도록 함.
> 세션 간 인수인계는 WORKSPACE.md의 "현재 활성 MCP 조사 파일" 포인터로 관리.
> 카테고리 완료 시 AI가 확인 요청 → 사용자 승인 후 WORKSPACE 포인터 변경.

| 번호 | 파일 | 대상 JSON | 서비스 수 | 상태 |
|------|------|----------|---------|------|
| P4-2 | plans/mcp/p4-2-mcp-automation.md | mcp-automation.json | 13 | 🔲 |
| P4-3 | plans/mcp/p4-3-dev-tools.md | dev-tools.json | 24 | 🔲 |
| P4-4 | plans/mcp/p4-4-database.md | database.json | 13 | 🔲 |
| P4-5 | plans/mcp/p4-5-hosting-infra.md | hosting-infra.json | 18 | 🔲 |
| P4-6 | plans/mcp/p4-6-ai-platforms.md | ai-platforms.json | 18 | 🔲 |
| P4-7 | plans/mcp/p4-7-api.md | api.json | 14 | 🔲 |
| P4-8 | plans/mcp/p4-8-payment.md | payment.json | 13 | 🔲 |
| P4-9 | plans/mcp/p4-9-nocode-collab.md | nocode-collab.json | 13 | 🔲 |
| P4-10 | plans/mcp/p4-10-design-tools.md | design-tools.json | 8 | 🔲 |
| P4-11 | plans/mcp/p4-11-marketing-seo.md | marketing-seo.json | 21 | 🔲 |
| P4-12 | plans/mcp/p4-12-google.md | google-*.json (9개) | 120 | 🔲 |
| P4-13 | plans/mcp/p4-13-media-ai.md | image-ai.json, video-audio-ai.json | 29 | 🔲 |
| P4-14 | plans/mcp/p4-14-assets-templates.md | image-assets.json, video-assets.json, sound-assets.json, web-templates.json | 43 | 🔲 |

> 참고: 25개 JSON 파일을 13개 테이블 파일로 그룹화.
> google-* 9개 카테고리는 MCP 연결 가능성이 낮은 서비스들이므로 하나로 통합.
> assets·templates 4개는 MCP 연결 가능성이 가장 낮아 마지막 파일로 통합.

---

## 조사 우선순위

> 취지: 이 순서는 참고 기준이며 전 카테고리 전수 조사가 목표.
> Claude MCP 연결의 실무 필요성이 높은 순서로 배열.
> 순서보다 전수 조사와 정확도가 핵심이므로 임의 재배열 금지.

1. database — DB 직접 연결, 가장 실무적 필요성 높음
2. dev-tools — GitHub, Sentry, Docker 등 개발 워크플로우 핵심
3. mcp-automation — n8n, Zapier 등 자동화 도구, MCP 생태계 핵심
4. hosting-infra — Cloudflare, Vercel, Supabase 등
5. nocode-collab — Notion, Airtable, Linear, GitHub 등 협업 도구
6. api — 각종 API 서비스
7. ai-platforms — AI 서비스 자체는 MCP를 제공하더라도 Claude가 연결하는 경우는 드묾
8. payment, design-tools, marketing-seo
9. google-* — 구글 서비스
10. media-ai, assets-templates — MCP 연결 가능성 가장 낮음

---

## 작업 항목

### 0단계: 플랜 완성 (2026-04-11 세션)

- [x] phase4-api-mcp.md 전면 재작성
- [x] plans/mcp/ 하위 카테고리 테이블 파일 13개 생성
- [x] WORKSPACE.md 업데이트 (활성 카테고리 파일 포인터 추가)

### 1단계: UI 구현 (P4-1)

- [ ] CopyButton 재사용 컴포넌트 구현 (src/components/CopyButton.jsx)
- [ ] ItemDetail.jsx MCP 섹션 레이블 + CopyButton 연결
- [ ] 빌드 확인 (npm run build)
- [ ] 커밋

### 2단계: 카테고리별 순차 조사 + 구현 (P4-2 ~ P4-14)

> 취지: 카테고리 하나씩 완료 후 다음으로 이동. 세션 간 포인터로 현재 위치 추적.
> 각 카테고리 완료 시 AI가 사용자에게 다음 카테고리 이동 여부 확인 요청.

각 카테고리마다:
- [ ] WORKSPACE 활성 파일 포인터를 해당 테이블 파일로 변경
- [ ] 전 서비스 MCP 조사 (테이블 파일 체크리스트 완료)
- [ ] JSON 업데이트 (MCP 있는 서비스만)
- [ ] 빌드 확인
- [ ] 커밋 + 배포 + 사용자 샘플 검증

---

## 검증 계획

> 취지: 검증 없이 완료 처리하면 잘못된 MCP 명령이 그대로 배포됨.
> 단계별 검증으로 오류를 조기 발견하고, 최종 전체 검증은 단계별 검증 결과에 따라 선택.

### 단계별 검증 (카테고리 완료마다)

- AI 자체: JSON 스키마 준수 확인 (info_url 단독 여부, 빈 값 여부)
- AI 자체: 빌드 성공 확인 (npm run build)
- 사용자: 해당 카테고리 서비스 중 몇 개 샘플 선택 → MCP 명령 실제 동작 + 복사 버튼 UX 확인

### 최종 전체 검증 (Phase 4 완료 후 — 선택적)

> 단계별 검증에서 큰 문제 없으면 생략 가능. 마스터플랜에 완료 후 협의.

- 전체 JSON 스키마 자동 검사 (Python 스크립트)
- 전체 api_docs·dashboard URL HTTP 응답 확인 (WebFetch)
- GitHub Pages 배포 후 전체 UI 확인

---

## 완료 조건

- [ ] P4-1 UI 구현 완료 (CopyButton 컴포넌트 + 레이블)
- [ ] 13개 카테고리 테이블 파일 전체 조사 완료 체크
- [ ] 25개 JSON 파일 구현 완료 체크 (MCP 있는 서비스만)
- [ ] 빌드 경고 없음
- [ ] GitHub Pages 재배포 완료
