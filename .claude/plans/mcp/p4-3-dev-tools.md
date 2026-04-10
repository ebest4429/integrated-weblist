# P4-3 MCP 조사 — dev-tools (24개)

> 대상 JSON: `src/data/dev-tools.json`
> 목적: 각 서비스에 Claude Desktop/CLI MCP 연결 명령이 존재하는지 조사하고 JSON에 반영.
> 조사 기준: phase4-api-mcp.md "MCP 필드 정의" 섹션 참조. 임의 해석 금지.

---

## 서비스 조사 테이블

| 서비스명 | 조사 | MCP | 구현 | 비고 |
|---------|------|-----|------|------|
| Cursor | ✅ | ❌ | N/A | MCP 클라이언트. 서비스 자체 MCP 없음 |
| Windsurf | ✅ | ❌ | N/A | MCP 클라이언트. 서비스 자체 MCP 없음 |
| GitHub Copilot | ✅ | ❌ | N/A | MCP 클라이언트. Copilot 자체를 Claude MCP로 연결 불가 |
| Bolt.new | ✅ | ❌ | N/A | 공식 MCP 없음 |
| v0 by Vercel | ✅ | ❌ | N/A | v0 AI 도구 자체 공식 MCP 없음 (Vercel 플랫폼 MCP는 hosting-infra 카테고리) |
| Replit | ✅ | ❌ | N/A | 공식 MCP 없음 |
| Lovable | ✅ | ❌ | N/A | 공식 MCP 없음 |
| Claude Code | ✅ | ❌ | N/A | 공식 MCP 서버 없음. 커뮤니티 구현만 존재 |
| Mintlify | ✅ | ❌ | N/A | 공식 MCP 없음 |
| Postman AI | ✅ | ✅ | ✅ | 공식 MCP. CLI: `claude mcp add --transport http postman https://mcp.postman.com/minimal --header "Authorization: Bearer <KEY>"` |
| Pinokio | ✅ | ❌ | N/A | Pinokio는 다른 MCP 설치 도구. 서비스 자체 MCP 없음 |
| Tailwind CSS | ✅ | ❌ | N/A | Tailwind Labs 공식 MCP 없음. 커뮤니티만 존재 |
| Docker | ✅ | ✅ | ✅ | Docker MCP Toolkit 공식. Desktop config 자동 설정 또는 `docker mcp gateway run` |
| Puppeteer | ✅ | ✅ | ✅ | `@modelcontextprotocol/server-puppeteer` — **deprecated**, Playwright 권장. 출처: npmjs.com/package/@modelcontextprotocol/server-puppeteer |
| Playwright | ✅ | ✅ | ✅ | 공식 Microsoft MCP. `@playwright/mcp@latest`. CLI: `claude mcp add playwright npx @playwright/mcp@latest`. 출처: playwright.dev/docs/getting-started-mcp |
| ngrok | ✅ | ❌ | N/A | ngrok은 MCP 게이트웨이 도구로 활용되나, ngrok 서비스 자체를 Claude MCP로 연결하는 공식 방법 없음 |
| Sentry | ✅ | ✅ | ✅ | 공식 MCP. URL: `https://mcp.sentry.dev/mcp`. CLI: `claude mcp add --transport http sentry https://mcp.sentry.dev/mcp`. 출처: docs.sentry.io/product/sentry-mcp/ |
| Semgrep | ✅ | ❌ | N/A | semgrep/mcp GitHub 저장소 2025-10-28 archived. 공식 Claude Desktop config 확인 불가 |
| VS Code | ✅ | ❌ | N/A | MCP 클라이언트. 서비스 자체 공식 MCP 없음 |
| Android Studio | ✅ | ✅ | ✅ | JetBrains 공식 MCP (Android Studio 포함). `npx -y @jetbrains/mcp-proxy`. 출처: github.com/JetBrains/mcp-jetbrains |
| Google IDX | ✅ | ❌ | N/A | 공식 MCP 없음 |
| Google Colab | ✅ | ✅ | ✅ | Google 공식 MCP. `uvx git+https://github.com/googlecolab/colab-mcp`. 출처: github.com/googlecolab/colab-mcp |
| Flutter | ✅ | ✅ | ✅ | Dart 팀 공식 MCP. CLI: `claude mcp add --transport stdio dart -- dart mcp-server`. 출처: flutter.dev/ai/mcp-server |
| TensorFlow | ✅ | ❌ | N/A | 공식 MCP 없음 |

> 조사 컬럼: ✅ 조사 완료 / 🔲 미조사
> MCP 컬럼: ✅ 있음 / ❌ 없음 / `-` 미조사
> 구현 컬럼: ✅ JSON 업데이트 완료 / 🔲 미완료 (MCP 없는 서비스는 N/A)

---

## 완료 체크

- [x] 전체 24개 서비스 MCP 조사 완료
- [x] MCP 있는 서비스 JSON 구현 완료
