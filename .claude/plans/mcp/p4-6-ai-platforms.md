# P4-6 MCP 조사 — ai-platforms (18개)

> 대상 JSON: `src/data/ai-platforms.json`
> 목적: 각 서비스에 Claude Desktop/CLI MCP 연결 명령이 존재하는지 조사하고 JSON에 반영.
> 조사 기준: phase4-api-mcp.md "MCP 필드 정의" 섹션 참조. 임의 해석 금지.
> 주의: AI 서비스 자체가 MCP를 제공하더라도 "Claude에서 해당 서비스를 MCP로 연결하는 명령"이
> 존재하는 경우만 기록. 서비스가 자체 AI 어시스턴트를 제공한다는 사실은 무관.

---

## 서비스 조사 테이블

| 서비스명 | 조사 | MCP | 구현 |
|---------|------|-----|------|
| ChatGPT | ✅ | ✅ | ✅ |
| Claude | ✅ | ❌ | N/A |
| Gemini | ✅ | ✅ | ✅ |
| Grok | ✅ | ✅ | ✅ |
| Perplexity | ✅ | ✅ | ✅ |
| Microsoft Copilot | ✅ | ❌ | N/A |
| Mistral AI | ✅ | ❌ | N/A |
| Hugging Face | ✅ | ✅ | ✅ |
| Ollama | ✅ | ✅ | ✅ |
| NotebookLM | ✅ | ✅ | ✅ |
| Phind | ✅ | ❌ | N/A |
| Genspark | ✅ | ❌ | N/A |
| Manus | ✅ | ❌ | N/A |
| chat.z.ai | ✅ | ✅ | ✅ |
| Qwen | ✅ | ❌ | N/A |
| Kimi | ✅ | ✅ | ✅ |
| Flowith | ✅ | ❌ | N/A |
| abocado.ai | ✅ | ❌ | N/A |

> MCP 결과 메모 (2026-04-11):
> ✅ ChatGPT: @mzxrai/mcp-openai (community, npm)
> ✅ Gemini: @rlabs-inc/gemini-mcp (community, npm)
> ✅ Grok: guzus/grok-mcp (community, PyPI uvx) — X.com 실시간 검색
> ✅ Perplexity: @perplexity-ai/mcp-server (공식) — "type":"stdio" 제거 필요
> ✅ Hugging Face: huggingface.co/mcp (공식 HTTP) — auth 헤더 추가 필요
> ✅ Ollama: rawveg/ollama-mcp (기존 데이터 정확)
> ✅ NotebookLM: notebooklm-mcp (community, npx) — Google 인증 필요
> ✅ chat.z.ai: @z_ai/mcp-server (공식 Z.AI, Vision)
> ✅ Kimi: kimi-mcp-server (community, npx) — Kimi Code 멤버십 필요
> ❌ Claude/Copilot/Mistral/Phind/Genspark/Manus/Qwen/Flowith/abocado.ai: MCP 없음

> 조사 컬럼: ✅ 조사 완료 / 🔲 미조사
> MCP 컬럼: ✅ 있음 / ❌ 없음 / `-` 미조사
> 구현 컬럼: ✅ JSON 업데이트 완료 / 🔲 미완료 (MCP 없는 서비스는 N/A)

---

## 완료 체크

- [x] 전체 18개 서비스 MCP 조사 완료
- [x] MCP 있는 서비스 JSON 구현 완료 (9개 MCP 있음: ChatGPT·Gemini·Grok·Perplexity·HuggingFace·Ollama·NotebookLM·chat.z.ai·Kimi)
