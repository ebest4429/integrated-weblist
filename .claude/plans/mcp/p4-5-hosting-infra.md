# P4-5 MCP 조사 — hosting-infra (18개)

> 대상 JSON: `src/data/hosting-infra.json`
> 목적: 각 서비스에 Claude Desktop/CLI MCP 연결 명령이 존재하는지 조사하고 JSON에 반영.
> 조사 기준: phase4-api-mcp.md "MCP 필드 정의" 섹션 참조. 임의 해석 금지.

---

## 서비스 조사 테이블

| 서비스명 | 조사 | MCP | 구현 |
|---------|------|-----|------|
| Vercel | ✅ | ✅ | ✅ |
| Netlify | ✅ | ✅ | ✅ |
| Railway | ✅ | ✅ | ✅ |
| Render | ✅ | ✅ | ✅ |
| GitHub Pages | ✅ | ❌ | N/A |
| Cron-job.org | ✅ | ❌ | N/A |
| Supabase | ✅ | ✅ | ✅ |
| Firebase | ✅ | ✅ | ✅ |
| Clerk | ✅ | ✅ | ✅ |
| PocketBase | ✅ | ❌ | N/A |
| AWS | ✅ | ✅ | ✅ |
| Google Cloud (GCP) | ✅ | ✅ | ✅ |
| DigitalOcean | ✅ | ✅ | ✅ |
| Cloudflare Workers | ✅ | ✅ | ✅ |
| NCloud | ✅ | ❌ | N/A |
| Google Cloud Run | ✅ | ✅ | ✅ |
| Google App Engine | ✅ | ❌ | N/A |
| Google Kubernetes Engine | ✅ | ✅ | ✅ |

> GitHub Pages: 전용 MCP 없음 (GitHub MCP 서버는 저장소·PR 관리용, Pages 전용 아님)
> Cron-job.org: 공식 MCP 서버 없음
> PocketBase: 공식 없음 (커뮤니티만 존재)
> NCloud: 공식 없음 (커뮤니티 미완성)
> Google App Engine: Google Cloud 공식 지원 MCP 목록 미포함. Cloud Run 권장 추세

> 조사 컬럼: ✅ 조사 완료 / 🔲 미조사
> MCP 컬럼: ✅ 있음 / ❌ 없음 / `-` 미조사
> 구현 컬럼: ✅ JSON 업데이트 완료 / 🔲 미완료 (MCP 없는 서비스는 N/A)

---

## 완료 체크

- [x] 전체 18개 서비스 MCP 조사 완료
- [x] MCP 있는 서비스 JSON 구현 완료
