# Phase 4 — API·MCP 정보 보강

> ⚠️ **전면 재작성 필요** — WORKSPACE.md 기준으로 다음 세션에서 재작성할 것.
> 기존 MCP 조사 방향이 잘못됨. 아래 내용을 구현 기준으로 사용하지 말 것.
> 작업 지시는 WORKSPACE.md 참조.

---

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

## 데이터 품질 기준 (필수)

> 취지: 기준 없이 진행하면 info_url만 넣고 완료 처리하거나, 검증 없는 링크가 들어가는 문제 발생.

| 항목 | 기준 |
|------|------|
| api_docs | 실제 접근 가능한 API 문서 URL. 로그인 월(paywall) 뒤에 있어도 링크 자체는 유효해야 함 |
| dashboard | 실제 로그인 후 관리 가능한 콘솔 URL |
| mcp | **desktop_config + cli_command 모두 필수**. info_url만 단독 사용 금지. 커뮤니티 패키지는 출처(GitHub URL) 명시 |
| 링크 검증 | 추가 전 브라우저 접근 가능 여부 확인 (WebFetch 또는 실제 URL 구조 검증) |
| 스킵 기준 | API 없는 서비스, MCP 서버 미존재 서비스는 해당 필드 자체 생략 (빈 값 입력 금지) |

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

> ⚠️ 아래 항목은 잘못된 방향으로 진행된 기록임. 구현 기준으로 사용 금지.
> 다음 세션에서 WORKSPACE.md 기준으로 전면 재작성할 것.

### P4-1. ItemDetail.jsx UI 확장

- ✅ api_docs·dashboard·mcp 기본 렌더링 구현 완료
- 🔲 **재작업 필요**: mcp 섹션 "Claude MCP 연결" 레이블 + 코드블록 복사 버튼 미구현

---

### P4-2. mcp-automation (13개)
- ✅ api_docs·dashboard 완료
- 🔲 mcp 전체 재조사 필요 — 각 JSON 파일 전체 서비스 대상

### P4-3. dev-tools (24개)
- ✅ api_docs·dashboard 완료
- 🔲 mcp 전체 재조사 필요

### P4-4. database (13개)
- ✅ api_docs·dashboard 완료
- 🔲 mcp 전체 재조사 필요

### P4-5. hosting-infra (18개)
- ✅ api_docs·dashboard 완료
- 🔲 mcp 전체 재조사 필요

### P4-6. ai-platforms (18개)
- ✅ api_docs·dashboard 완료
- 🔲 mcp 전체 재조사 필요

### P4-7. api (14개)
- 🔲 api_docs·dashboard·mcp 전체 미작업

### P4-8. payment (13개)
- 🔲 전체 미작업

### P4-9. nocode-collab (13개)
- 🔲 전체 미작업

### P4-10. design-tools (8개)
- 🔲 전체 미작업

### P4-11. marketing-seo (21개)
- 🔲 전체 미작업

### P4-12. google-* (9개 카테고리)
- 🔲 전체 미작업

### P4-13. image-ai / video-audio-ai / 에셋 계열 / web-templates (4개 카테고리)
- 🔲 전체 미작업

---

## 품질 재검토 체크리스트

> 취지: P4-2~P4-6은 데이터 품질 기준 수립 이전에 작업됨. 3개 기준으로 전수 점검 후 ✅ 확인된 것만 완료 처리.
> JSON 파일 직접 읽어 실제 값 기준으로 작성함.

**기준 범례**
- 기준1(MCP): ✅ desktop_config+cli_command 모두 있음 | ❌ info_url 단독 사용(위반) | — MCP 없음(스킵 정상)
- 기준2(빈필드): ✅ 빈값 없음 | ❌ 빈값·불완전 필드 있음 | — 해당없음
- 기준3(링크): ✅ 확인됨 | 🔲 미확인

---

### P4-2. mcp-automation (13개)

| 서비스 | 기준1(MCP) | 기준2(빈필드) | 기준3(링크) |
|--------|-----------|-------------|-----------|
| MCP 공식 문서 | — | ✅ | — |
| MCP.so | — | ✅ | ✅ |
| Smithery | — | ✅ | ✅ |
| LangChain | — | ✅ | ✅ |
| LangGraph | — | ✅ | ✅ |
| CrewAI | — | ✅ | ✅ |
| AutoGen | — | ✅ | ✅ |
| Dify | — | ✅ | ✅ |
| n8n | — | ✅ | ✅ |
| Zapier | — | ✅ | ✅ |
| Make | — | ✅ | ✅ |
| Pipedream | ✅ | ✅ | ✅ |
| Apify | ✅ | ✅ | ✅ |

---

### P4-3. dev-tools (24개)

| 서비스 | 기준1(MCP) | 기준2(빈필드) | 기준3(링크) |
|--------|-----------|-------------|-----------|
| Cursor | — | ✅ | — |
| Windsurf | — | ✅ | — |
| GitHub Copilot | — | ✅ | ✅ |
| Bolt.new | — | ✅ | — |
| v0 by Vercel | — | ✅ | — |
| Replit | — | ✅ | ✅ |
| Lovable | — | ✅ | — |
| Claude Code | — | ✅ | ✅ |
| Mintlify | — | ✅ | ✅ |
| Postman AI | — | ✅ | ✅ |
| Pinokio | — | ✅ | — |
| Tailwind CSS | — | ✅ | ✅ |
| Docker | ❌ 제거됨 | ✅ | ✅ |
| Puppeteer | — | ✅ | ✅ |
| Playwright | ✅ | ✅ | ✅ |
| ngrok | — | ✅ | ✅ |
| Sentry | ✅ | ✅ | ✅ |
| Semgrep | — | ✅ | ✅ |
| VS Code | — | ✅ | ✅ |
| Android Studio | — | ✅ | ✅ |
| Google IDX | — | ✅ | — |
| Google Colab | — | ✅ | — |
| Flutter | — | ✅ | ✅ |
| TensorFlow | — | ✅ | ✅ |

---

### P4-4. database (13개)

| 서비스 | 기준1(MCP) | 기준2(빈필드) | 기준3(링크) |
|--------|-----------|-------------|-----------|
| Pinecone | — | ✅ | ✅ |
| Weaviate | — | ✅ | ✅ |
| Qdrant | — | ✅ | ✅ |
| Chroma | — | ✅ | ✅ |
| Neon | ✅ | ✅ | ✅ |
| Upstash | — | ✅ | ✅ |
| MongoDB Atlas | ✅ | ✅ | ✅ |
| PlanetScale | — | ✅ | ✅ |
| Cloudflare D1 | — | ✅ | ✅ |
| SQLite | ✅ | ✅ | ✅ |
| PostgreSQL | ✅ | ✅ | ✅ |
| Redis | ✅ | ✅ | ✅ |
| BigQuery | — | ✅ | ✅ |

---

### P4-5. hosting-infra (18개)

| 서비스 | 기준1(MCP) | 기준2(빈필드) | 기준3(링크) |
|--------|-----------|-------------|-----------|
| Vercel | ❌ 제거됨 | ✅ | ✅ |
| Netlify | — | ✅ | ✅ |
| Railway | — | ✅ | ✅ |
| Render | — | ✅ | ✅ |
| GitHub Pages | — | ✅ | — |
| Cron-job.org | — | ✅ | ✅ |
| Supabase | ✅ | ✅ | ✅ |
| Firebase | — | ✅ | ✅ |
| Clerk | — | ✅ | ✅ |
| PocketBase | — | ✅ | ✅ |
| AWS | ❌ 제거됨 | ✅ | ✅ |
| Google Cloud (GCP) | — | ✅ | ✅ |
| DigitalOcean | — | ✅ | ✅ |
| Cloudflare Workers | ✅ | ✅ | ✅ |
| NCloud | — | ✅ | ✅ |
| Google Cloud Run | — | ✅ | ✅ |
| Google App Engine | — | ✅ | ✅ |
| Google Kubernetes Engine | — | ✅ | ✅ |

---

### P4-6. ai-platforms (18개)

| 서비스 | 기준1(MCP) | 기준2(빈필드) | 기준3(링크) |
|--------|-----------|-------------|-----------|
| ChatGPT | ❌ 제거됨 | ✅ | ✅ |
| Claude | — | ✅ | ✅ |
| Gemini | — | ✅ | ✅ |
| Grok | — | ✅ | ✅ |
| Perplexity | ✅ | ✅ | ✅ |
| Microsoft Copilot | — | ✅ | ✅ |
| Mistral AI | — | ✅ | ✅ |
| Hugging Face | ✅ | ✅ | ✅ |
| Ollama | ✅ | ✅ | ✅ |
| NotebookLM | — | ✅ | — |
| Phind | — | ✅ | — |
| Genspark | — | ✅ | — |
| Manus | — | ✅ | — |
| chat.z.ai | — | ✅ | — |
| Qwen | — | ✅ | ✅ |
| Kimi | — | ✅ | — |
| Flowith | — | ✅ | — |
| abocado.ai | — | ✅ | — |

---

## 완료 조건

- [ ] ItemDetail.jsx 구분선·신규 필드 렌더링 동작
- [ ] 전체 25개 카테고리 JSON 업데이트 완료 (지원 서비스만)
- [ ] 빌드 경고 없음
- [ ] GitHub Pages 재배포 완료
