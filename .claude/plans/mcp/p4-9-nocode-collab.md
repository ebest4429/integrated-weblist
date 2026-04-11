# P4-9 MCP 조사 — nocode-collab (13개)

> 대상 JSON: `src/data/nocode-collab.json`
> 목적: 각 서비스에 Claude Desktop/CLI MCP 연결 명령이 존재하는지 조사하고 JSON에 반영.
> 조사 기준: phase4-api-mcp.md "MCP 필드 정의" 섹션 참조. 임의 해석 금지.
> 참고: Notion, Airtable, GitHub, Linear 등 협업 도구는 MCP 연결 가능성 높음.

---

## 서비스 조사 테이블

| 서비스명 | 조사 | MCP | 구현 |
|---------|------|-----|------|
| Webflow | ✅ | ✅ | ✅ |
| Bubble | ✅ | ❌ | N/A |
| FlutterFlow | ✅ | ❌ | N/A |
| Retool | ✅ | ❌ | N/A |
| Appsmith | ✅ | ❌ | N/A |
| Glide | ✅ | ❌ | N/A |
| Notion AI | ✅ | ✅ | ✅ |
| Airtable | ✅ | ✅ | ✅ |
| Linear | ✅ | ✅ | ✅ |
| GitHub | ✅ | ✅ | ✅ |
| Jira | ✅ | ✅ | ✅ |
| Google Sites | ✅ | ❌ | N/A |
| Google Chat | ✅ | ❌ | N/A |

> 조사 컬럼: ✅ 조사 완료 / 🔲 미조사
> MCP 컬럼: ✅ 있음 / ❌ 없음 / `-` 미조사
> 구현 컬럼: ✅ JSON 업데이트 완료 / 🔲 미완료 (MCP 없는 서비스는 N/A)

---

## 완료 체크

- [x] 전체 13개 서비스 MCP 조사 완료
- [x] MCP 있는 서비스 JSON 구현 완료
