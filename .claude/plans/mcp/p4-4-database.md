# P4-4 MCP 조사 — database (13개)

> 대상 JSON: `src/data/database.json`
> 목적: 각 서비스에 Claude Desktop/CLI MCP 연결 명령이 존재하는지 조사하고 JSON에 반영.
> 조사 기준: phase4-api-mcp.md "MCP 필드 정의" 섹션 참조. 임의 해석 금지.
> 우선순위 1순위: DB 직접 연결은 Claude MCP 활용 실무 필요성이 가장 높음.

---

## 서비스 조사 테이블

| 서비스명 | 조사 | MCP | 구현 |
|---------|------|-----|------|
| Pinecone | ✅ | ✅ | ✅ |
| Weaviate | ✅ | ❌ | N/A |
| Qdrant | ✅ | ✅ | ✅ |
| Chroma | ✅ | ✅ | ✅ |
| Neon | ✅ | ✅ | ✅ |
| Upstash | ✅ | ✅ | ✅ |
| MongoDB Atlas | ✅ | ✅ | ✅ |
| PlanetScale | ✅ | ✅ | ✅ |
| Cloudflare D1 | ✅ | ✅ | ✅ |
| SQLite | ✅ | ✅ | ✅ |
| PostgreSQL | ✅ | ✅ | ✅ |
| Redis | ✅ | ✅ | ✅ |
| BigQuery | ✅ | ✅ | ✅ |

> Weaviate: 공식 Docs MCP 서버(원격 HTTP)는 Weaviate 문서 질의 전용이며 사용자 DB 인스턴스 연결 용도가 아님. DB 연결용 `weaviate/mcp-server-weaviate`는 claude_desktop_config.json 설정 미공개 → MCP 없음 처리.

> 조사 컬럼: ✅ 조사 완료 / 🔲 미조사
> MCP 컬럼: ✅ 있음 / ❌ 없음 / `-` 미조사
> 구현 컬럼: ✅ JSON 업데이트 완료 / 🔲 미완료 (MCP 없는 서비스는 N/A)

---

## 완료 체크

- [x] 전체 13개 서비스 MCP 조사 완료
- [x] MCP 있는 서비스 JSON 구현 완료
