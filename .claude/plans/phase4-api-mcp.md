# Phase 4 — API·MCP 정보 보강

> Phase 3 완료(검색 고도화 + 태그 필터) 후 진입.
> 전체 347개 서비스에 API·대시보드·MCP 연결 정보를 선택적으로 추가한다.

---

## 목표

각 서비스의 detail 하단에 구분선으로 분리하여 아래 정보를 추가한다.
**지원하는 서비스만** 해당 필드를 포함한다 (없으면 필드 자체 생략).

- **api_docs**: API 문서 링크
- **dashboard**: 서비스 대시보드/콘솔 링크
- **mcp**: Claude Desktop config·CLI 명령어·정보 링크

---

## 배경 결정사항

| 항목 | 결정 내용 |
|------|---------|
| 필드 위치 | detail 객체 내 선택적 필드 (optional). 취지: 없는 서비스는 기존 UI 영향 없음 |
| 구분선 처리 | ItemDetail.jsx에서 mcp/api_docs/dashboard 중 하나라도 있으면 `<hr>` 렌더링 |
| MCP 명령어 형식 | claude_desktop_config.json 스니펫 + `claude mcp add` CLI 명령어 두 가지 제공 |
| 데이터 수집 | MCP 공식 서버 목록(modelcontextprotocol/servers) + 서비스 공식 문서 WebFetch 기반 |
| 우선순위 | mcp-automation → dev-tools → database → hosting-infra → ai-platforms → api → payment → nocode-collab → design-tools → marketing-seo → google-* → 에셋 계열 |

---

## JSON 스키마 (detail 객체 확장)

```json
"detail": {
  "intro": "...",
  "features": [...],
  "usage": "...",
  "notes": "...",
  "api_docs": "https://...",
  "dashboard": "https://...",
  "mcp": {
    "desktop_config": "{\n  \"mcpServers\": {\n    \"서비스명\": {\n      ...\n    }\n  }\n}",
    "cli_command": "claude mcp add 서비스명 -- npx ...",
    "info_url": "https://..."
  }
}
```

---

## 작업 항목

### P4-1. ItemDetail.jsx UI 확장

- ✅ detail 객체에 api_docs / dashboard / mcp 필드 렌더링 추가
  - api_docs, dashboard 중 존재하면: 구분선(`<hr>`) 출력 후 API·대시보드 링크 표시
  - mcp 존재하면: Claude Desktop config 코드블록 + CLI 명령어 코드블록 + 정보 링크 표시
- ✅ 빌드 확인

---

### P4-2. mcp-automation 카테고리 (13개)

> MCP·에이전트·자동화 카테고리 — MCP 관련 서비스 밀집

- 🔲 WebFetch로 각 서비스 MCP 서버 정보 수집
- 🔲 JSON 업데이트

**대상 체크리스트** (서비스별 예상 지원 여부):

| 서비스 | API | Dashboard | MCP |
|--------|-----|-----------|-----|
| n8n | ✓ | ✓ | 조사 필요 |
| Zapier | ✓ | ✓ | 조사 필요 |
| Make | ✓ | ✓ | 조사 필요 |
| Pipedream | ✓ | ✓ | ✓ (공식) |
| Activepieces | ✓ | ✓ | 조사 필요 |
| Windmill | ✓ | ✓ | 조사 필요 |
| Smithery | ✓ | ✓ | ✓ (MCP 허브) |
| Glama | ✓ | ✓ | ✓ (MCP 허브) |
| MCP.so | - | ✓ | ✓ (MCP 허브) |
| Composio | ✓ | ✓ | ✓ (공식) |
|나머지 | 조사 필요 | 조사 필요 | 조사 필요 |

---

### P4-3. dev-tools 카테고리 (24개)

| 서비스 | API | Dashboard | MCP |
|--------|-----|-----------|-----|
| GitHub | ✓ | ✓ | ✓ (공식: @modelcontextprotocol/server-github) |
| GitLab | ✓ | ✓ | ✓ (공식) |
| Docker | ✓ | ✓ | ✓ (공식) |
| VS Code | - | - | 조사 필요 |
| Cursor | - | - | 조사 필요 |
| Sentry | ✓ | ✓ | ✓ (공식) |
| Vercel | ✓ | ✓ | ✓ (공식) |
| 나머지 | 조사 필요 | 조사 필요 | 조사 필요 |

---

### P4-4. database 카테고리 (13개)

| 서비스 | API | Dashboard | MCP |
|--------|-----|-----------|-----|
| PostgreSQL | - | - | ✓ (공식: @modelcontextprotocol/server-postgres) |
| SQLite | - | - | ✓ (공식: @modelcontextprotocol/server-sqlite) |
| MySQL | - | - | 조사 필요 |
| MongoDB | ✓ | ✓ | ✓ (공식) |
| Supabase | ✓ | ✓ | ✓ (공식) |
| PlanetScale | ✓ | ✓ | 조사 필요 |
| Neon | ✓ | ✓ | ✓ (공식) |
| Redis | ✓ | ✓ | ✓ (공식) |
| 나머지 | 조사 필요 | 조사 필요 | 조사 필요 |

---

### P4-5. hosting-infra 카테고리 (18개)

| 서비스 | API | Dashboard | MCP |
|--------|-----|-----------|-----|
| AWS | ✓ | ✓ | ✓ (awslabs/mcp) |
| Cloudflare | ✓ | ✓ | ✓ (공식) |
| Vercel | ✓ | ✓ | ✓ (공식) |
| Netlify | ✓ | ✓ | 조사 필요 |
| Render | ✓ | ✓ | 조사 필요 |
| 나머지 | 조사 필요 | 조사 필요 | 조사 필요 |

---

### P4-6. ai-platforms 카테고리 (18개)

| 서비스 | API | Dashboard | MCP |
|--------|-----|-----------|-----|
| OpenAI | ✓ | ✓ | ✓ (공식 Remote MCP) |
| Anthropic Claude | ✓ | ✓ | - (MCP 제공자) |
| Google AI Studio | ✓ | ✓ | 조사 필요 |
| Mistral | ✓ | ✓ | 조사 필요 |
| Groq | ✓ | ✓ | 조사 필요 |
| Perplexity | ✓ | ✓ | 조사 필요 |
| Cohere | ✓ | ✓ | 조사 필요 |
| 나머지 | 조사 필요 | 조사 필요 | 조사 필요 |

---

### P4-7. api 카테고리 (14개)

- 🔲 WebFetch로 각 서비스 API·MCP 정보 수집 후 업데이트
- 주로 API 서비스이므로 api_docs·dashboard 위주

---

### P4-8. payment 카테고리 (13개)

| 서비스 | API | Dashboard | MCP |
|--------|-----|-----------|-----|
| Stripe | ✓ | ✓ | ✓ (공식) |
| 나머지 | 조사 필요 | 조사 필요 | 조사 필요 |

---

### P4-9. nocode-collab 카테고리 (13개)

| 서비스 | API | Dashboard | MCP |
|--------|-----|-----------|-----|
| GitHub | ✓ | ✓ | ✓ (중복 — dev-tools와 동일 처리) |
| Notion | ✓ | ✓ | ✓ (공식: @notionhq/notion-mcp-server) |
| Linear | ✓ | ✓ | ✓ (공식) |
| Airtable | ✓ | ✓ | ✓ (커뮤니티) |
| Jira/Atlassian | ✓ | ✓ | ✓ (공식 Remote MCP) |
| 나머지 | 조사 필요 | 조사 필요 | 조사 필요 |

---

### P4-10. design-tools 카테고리 (8개)

| 서비스 | API | Dashboard | MCP |
|--------|-----|-----------|-----|
| Figma | ✓ | ✓ | ✓ (공식) |
| 나머지 | 조사 필요 | 조사 필요 | 조사 필요 |

---

### P4-11. marketing-seo 카테고리 (21개)

- 🔲 WebFetch로 각 서비스 API·MCP 정보 수집 후 업데이트

---

### P4-12. google-* 카테고리 (9개 카테고리, 총 ~108개)

| 서비스 그룹 | API | Dashboard | MCP |
|------------|-----|-----------|-----|
| Google Drive | ✓ | ✓ | ✓ (공식: @modelcontextprotocol/server-gdrive) |
| Google Maps | ✓ | ✓ | ✓ (공식: @modelcontextprotocol/server-google-maps) |
| Google Cloud | ✓ | ✓ | 조사 필요 |
| 나머지 Google 서비스 | 조사 필요 | ✓ (대부분 console.cloud.google.com) | 조사 필요 |

---

### P4-13. image-ai / video-audio-ai / 에셋 계열 / web-templates (4개 카테고리)

- 🔲 WebFetch로 API 제공 여부 조사 후 api_docs·dashboard 위주 업데이트
- MCP 서버 존재 가능성: image-ai 일부 (ElevenLabs, Stability AI 등)

---

## 완료 조건

- [ ] ItemDetail.jsx 구분선·신규 필드 렌더링 동작
- [ ] 전체 25개 카테고리 JSON 업데이트 완료 (지원 서비스만)
- [ ] 빌드 경고 없음
- [ ] GitHub Pages 재배포 완료
