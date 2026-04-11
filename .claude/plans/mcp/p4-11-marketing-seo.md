# P4-11 MCP 조사 — marketing-seo (21개)

> 대상 JSON: `src/data/marketing-seo.json`
> 목적: 각 서비스에 Claude Desktop/CLI MCP 연결 명령이 존재하는지 조사하고 JSON에 반영.
> 조사 기준: phase4-api-mcp.md "MCP 필드 정의" 섹션 참조. 임의 해석 금지.

---

## 서비스 조사 테이블

| 서비스명 | 조사 | MCP | 구현 |
|---------|------|-----|------|
| Jasper AI | ✅ | ✅ | ✅ |
| Copy.ai | ✅ | ❌ | N/A |
| Writesonic | ✅ | ❌ | N/A |
| Ahrefs | ✅ | ✅ | ✅ |
| Semrush | ✅ | ✅ | ✅ |
| Google Analytics 4 | ✅ | ✅ | ✅ |
| Google Search Console | ✅ | ✅ | ✅ |
| Google Ads | ✅ | ✅ | ✅ |
| Meta Ads | ✅ | ✅ | ✅ |
| Naver 검색광고 | ✅ | ✅ | ✅ |
| Kakao 모먼트 | ✅ | ❌ | N/A |
| Naver 서치어드바이저 | ✅ | ❌ | N/A |
| Bitly | ✅ | ✅ | ✅ |
| Gamma | ✅ | ✅ | ✅ |
| bkit.ai | ✅ | ❌ | N/A |
| Google Merchant Center | ✅ | ❌ | N/A |
| Google Business Profile | ✅ | ❌ | N/A |
| Google AdSense | ✅ | ✅ | ✅ |
| Google Tag Manager | ✅ | ✅ | ✅ |
| Think with Google | ✅ | ❌ | N/A |
| PageSpeed Insights | ✅ | ✅ | ✅ |

> 조사 컬럼: ✅ 조사 완료 / 🔲 미조사
> MCP 컬럼: ✅ 있음 / ❌ 없음 / `-` 미조사
> 구현 컬럼: ✅ JSON 업데이트 완료 / 🔲 미완료 (MCP 없는 서비스는 N/A)

---

## 완료 체크

- [x] 전체 21개 서비스 MCP 조사 완료
- [x] MCP 있는 서비스 JSON 구현 완료
