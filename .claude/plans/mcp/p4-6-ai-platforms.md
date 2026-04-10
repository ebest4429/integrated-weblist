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
| ChatGPT | 🔲 | - | 🔲 |
| Claude | 🔲 | - | 🔲 |
| Gemini | 🔲 | - | 🔲 |
| Grok | 🔲 | - | 🔲 |
| Perplexity | 🔲 | - | 🔲 |
| Microsoft Copilot | 🔲 | - | 🔲 |
| Mistral AI | 🔲 | - | 🔲 |
| Hugging Face | 🔲 | - | 🔲 |
| Ollama | 🔲 | - | 🔲 |
| NotebookLM | 🔲 | - | 🔲 |
| Phind | 🔲 | - | 🔲 |
| Genspark | 🔲 | - | 🔲 |
| Manus | 🔲 | - | 🔲 |
| chat.z.ai | 🔲 | - | 🔲 |
| Qwen | 🔲 | - | 🔲 |
| Kimi | 🔲 | - | 🔲 |
| Flowith | 🔲 | - | 🔲 |
| abocado.ai | 🔲 | - | 🔲 |

> 조사 컬럼: ✅ 조사 완료 / 🔲 미조사
> MCP 컬럼: ✅ 있음 / ❌ 없음 / `-` 미조사
> 구현 컬럼: ✅ JSON 업데이트 완료 / 🔲 미완료 (MCP 없는 서비스는 N/A)

---

## 완료 체크

- [ ] 전체 18개 서비스 MCP 조사 완료
- [ ] MCP 있는 서비스 JSON 구현 완료
