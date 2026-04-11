# P4-12 MCP 조사 — google-* (9개 카테고리 통합)

> 대상 JSON: google-ai, google-search, google-productivity, google-media,
>             google-cloud, google-ads, google-devices, google-education, google-console
> 목적: 각 서비스에 Claude Desktop/CLI MCP 연결 명령이 존재하는지 조사하고 JSON에 반영.
> 조사 기준: phase4-api-mcp.md "MCP 필드 정의" 섹션 참조. 임의 해석 금지.
> 참고: 구글 서비스는 MCP 연결 가능성이 낮으나 전수 조사 필수.
>       google-cloud의 일부 서비스(BigQuery, Firebase 등)는 가능성 있음.

---

## google-ai (12개)

| 서비스명 | 조사 | MCP | 구현 |
|---------|------|-----|------|
| Gemini | ✅ | ❌ | N/A |
| Flow | ✅ | ❌ | N/A |
| ImageFX | ✅ | ❌ | N/A |
| Veo 3 | ✅ | ❌ | N/A |
| MusicFX | ✅ | ❌ | N/A |
| NotebookLM | ✅ | ❌ | N/A |
| AI Studio | ✅ | ❌ | N/A |
| AI Test Kitchen | ✅ | ❌ | N/A |
| Gemini for Workspace | ✅ | ❌ | N/A |
| Project Astra | ✅ | ❌ | N/A |
| Google DeepMind | ✅ | ❌ | N/A |
| Google Opal | ✅ | ❌ | N/A |

## google-search (16개)

| 서비스명 | 조사 | MCP | 구현 |
|---------|------|-----|------|
| Google Search | ✅ | ❌ | N/A |
| Google Lens | ✅ | ❌ | N/A |
| Google Maps | ✅ | ✅ | ✅ |
| Google Earth | ✅ | ❌ | N/A |
| Google Scholar | ✅ | ❌ | N/A |
| Google Trends | ✅ | ❌ | N/A |
| Google Alerts | ✅ | ❌ | N/A |
| Google Translate | ✅ | ❌ | N/A |
| Google News | ✅ | ❌ | N/A |
| Google Shopping | ✅ | ❌ | N/A |
| Google Flights | ✅ | ❌ | N/A |
| Google Hotels | ✅ | ❌ | N/A |
| Google Books | ✅ | ❌ | N/A |
| Google Assistant | ✅ | ❌ | N/A |
| Google Patent Search | ✅ | ❌ | N/A |
| Google Dataset Search | ✅ | ❌ | N/A |

## google-productivity (16개)

| 서비스명 | 조사 | MCP | 구현 |
|---------|------|-----|------|
| Google Docs | ✅ | ❌ | N/A |
| Google Sheets | ✅ | ❌ | N/A |
| Google Slides | ✅ | ❌ | N/A |
| Google Drive | ✅ | ✅ | ✅ |
| Gmail | ✅ | ❌ | N/A |
| Google Calendar | ✅ | ❌ | N/A |
| Google Meet | ✅ | ❌ | N/A |
| Google Keep | ✅ | ❌ | N/A |
| Google Forms | ✅ | ❌ | N/A |
| Google Chat | ✅ | ❌ | N/A |
| Google Workspace | ✅ | ❌ | N/A |
| Google Sites | ✅ | ❌ | N/A |
| Google Drawings | ✅ | ❌ | N/A |
| Google Tasks | ✅ | ❌ | N/A |
| Google Voice | ✅ | ❌ | N/A |
| Google Contacts | ✅ | ❌ | N/A |

## google-media (13개)

| 서비스명 | 조사 | MCP | 구현 |
|---------|------|-----|------|
| YouTube | ✅ | ❌ | N/A |
| YouTube Music | ✅ | ❌ | N/A |
| YouTube Studio | ✅ | ❌ | N/A |
| YouTube Premium | ✅ | ❌ | N/A |
| Google Photos | ✅ | ❌ | N/A |
| Google Play Books | ✅ | ❌ | N/A |
| Google Play Movies & TV | ✅ | ❌ | N/A |
| Google TV | ✅ | ❌ | N/A |
| Google Play Games | ✅ | ❌ | N/A |
| Play Games for PC | ✅ | ❌ | N/A |
| Google Arts & Culture | ✅ | ❌ | N/A |
| Google Play Store | ✅ | ❌ | N/A |
| Google Podcasts | ✅ | ❌ | N/A |

## google-cloud (17개)

| 서비스명 | 조사 | MCP | 구현 |
|---------|------|-----|------|
| Google Cloud Platform | ✅ | ❌ | N/A |
| Firebase | ✅ | ✅ | ✅ |
| Google Colab | ✅ | ❌ | N/A |
| Android Studio | ✅ | ❌ | N/A |
| PageSpeed Insights | ✅ | ❌ | N/A |
| Google Search Console | ✅ | ❌ | N/A |
| Cloud Storage | ✅ | ❌ | N/A |
| Cloud Functions | ✅ | ❌ | N/A |
| BigQuery | ✅ | ✅ | ✅ |
| Kubernetes Engine | ✅ | ❌ | N/A |
| App Engine | ✅ | ❌ | N/A |
| Looker Studio | ✅ | ❌ | N/A |
| Cloud Run | ✅ | ✅ | ✅ |
| Flutter | ✅ | ❌ | N/A |
| TensorFlow | ✅ | ❌ | N/A |
| Google IDX | ✅ | ❌ | N/A |
| Google OAuth / Identity | ✅ | ❌ | N/A |

## google-ads (12개)

> 참고: Google Ads, GA4, AdSense, Tag Manager, PageSpeed Insights, GSC는 marketing-seo.json에 구현 완료.
> google-ads.json 내 동일 서비스에는 중복 추가하지 않음 (JSON 별도 파일로 분리되어 있음).

| 서비스명 | 조사 | MCP | 구현 |
|---------|------|-----|------|
| Google Ads | ✅ | ❌ | N/A |
| Google Analytics 4 | ✅ | ❌ | N/A |
| Google Merchant Center | ✅ | ❌ | N/A |
| Google Business Profile | ✅ | ❌ | N/A |
| Google AdSense | ✅ | ❌ | N/A |
| Display & Video 360 | ✅ | ❌ | N/A |
| Search Ads 360 | ✅ | ❌ | N/A |
| Google Tag Manager | ✅ | ❌ | N/A |
| Looker | ✅ | ❌ | N/A |
| Google Partners | ✅ | ❌ | N/A |
| Think with Google | ✅ | ❌ | N/A |
| Google Pay Business | ✅ | ❌ | N/A |

## google-devices (12개)

| 서비스명 | 조사 | MCP | 구현 |
|---------|------|-----|------|
| Android | ✅ | ❌ | N/A |
| ChromeOS | ✅ | ❌ | N/A |
| Google Pixel | ✅ | ❌ | N/A |
| Google Nest Hub | ✅ | ❌ | N/A |
| Chromecast | ✅ | ❌ | N/A |
| Google Nest Audio | ✅ | ❌ | N/A |
| Wear OS | ✅ | ❌ | N/A |
| Nest Wifi Pro | ✅ | ❌ | N/A |
| Google Chrome | ✅ | ✅ | ✅ |
| Android Auto | ✅ | ❌ | N/A |
| Android TV | ✅ | ❌ | N/A |
| Android XR | ✅ | ❌ | N/A |

## google-education (10개)

| 서비스명 | 조사 | MCP | 구현 |
|---------|------|-----|------|
| Google Classroom | ✅ | ❌ | N/A |
| Google for Education | ✅ | ❌ | N/A |
| CS First | ✅ | ❌ | N/A |
| Grow with Google | ✅ | ❌ | N/A |
| Digital Garage | ✅ | ❌ | N/A |
| AI Essentials | ✅ | ❌ | N/A |
| Be Internet Awesome | ✅ | ❌ | N/A |
| Earth Education | ✅ | ❌ | N/A |
| Applied Digital Skills | ✅ | ❌ | N/A |
| Google Career Certificates | ✅ | ❌ | N/A |

## google-console (12개)

| 서비스명 | 조사 | MCP | 구현 |
|---------|------|-----|------|
| Google Admin Console | ✅ | ❌ | N/A |
| Google Play Console | ✅ | ❌ | N/A |
| Google Search Console | ✅ | ❌ | N/A |
| Google Cloud Console | ✅ | ❌ | N/A |
| Firebase Console | ✅ | ❌ | N/A |
| Google Ads Manager | ✅ | ❌ | N/A |
| Analytics Admin | ✅ | ❌ | N/A |
| AdMob Console | ✅ | ❌ | N/A |
| Google API Console | ✅ | ❌ | N/A |
| Google Domains | ✅ | ❌ | N/A |
| Tag Manager Console | ✅ | ❌ | N/A |
| Looker Studio | ✅ | ❌ | N/A |

> 조사 컬럼: ✅ 조사 완료 / 🔲 미조사
> MCP 컬럼: ✅ 있음 / ❌ 없음 / `-` 미조사
> 구현 컬럼: ✅ JSON 업데이트 완료 / 🔲 미완료 (MCP 없는 서비스는 N/A)

---

## 완료 체크

- [x] 전체 120개 서비스 MCP 조사 완료 (9개 카테고리 합산)
- [x] MCP 있는 서비스 JSON 구현 완료

## 조사 결과 요약

MCP 있음 (5개):
- Google Maps → google-search.json (@modelcontextprotocol/server-google-maps, API 키 필요)
- Google Drive → google-productivity.json (@modelcontextprotocol/server-gdrive, OAuth 설정 필요)
- Firebase → google-cloud.json (firebase-tools@latest mcp, 공식 지원)
- BigQuery → google-cloud.json (@toolbox-sdk/server --prebuilt=bigquery, googleapis/mcp-toolbox)
- Cloud Run → google-cloud.json (@google-cloud/cloud-run-mcp, gcloud 로그인 필요)
- Google Chrome → google-devices.json (chrome-devtools-mcp@latest, ChromeDevTools 공식)

MCP 없음 (114개): 나머지 모든 서비스
