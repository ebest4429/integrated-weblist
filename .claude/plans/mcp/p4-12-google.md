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
| Gemini | 🔲 | - | 🔲 |
| Flow | 🔲 | - | 🔲 |
| ImageFX | 🔲 | - | 🔲 |
| Veo 3 | 🔲 | - | 🔲 |
| MusicFX | 🔲 | - | 🔲 |
| NotebookLM | 🔲 | - | 🔲 |
| AI Studio | 🔲 | - | 🔲 |
| AI Test Kitchen | 🔲 | - | 🔲 |
| Gemini for Workspace | 🔲 | - | 🔲 |
| Project Astra | 🔲 | - | 🔲 |
| Google DeepMind | 🔲 | - | 🔲 |
| Google Opal | 🔲 | - | 🔲 |

## google-search (16개)

| 서비스명 | 조사 | MCP | 구현 |
|---------|------|-----|------|
| Google Search | 🔲 | - | 🔲 |
| Google Lens | 🔲 | - | 🔲 |
| Google Maps | 🔲 | - | 🔲 |
| Google Earth | 🔲 | - | 🔲 |
| Google Scholar | 🔲 | - | 🔲 |
| Google Trends | 🔲 | - | 🔲 |
| Google Alerts | 🔲 | - | 🔲 |
| Google Translate | 🔲 | - | 🔲 |
| Google News | 🔲 | - | 🔲 |
| Google Shopping | 🔲 | - | 🔲 |
| Google Flights | 🔲 | - | 🔲 |
| Google Hotels | 🔲 | - | 🔲 |
| Google Books | 🔲 | - | 🔲 |
| Google Assistant | 🔲 | - | 🔲 |
| Google Patent Search | 🔲 | - | 🔲 |
| Google Dataset Search | 🔲 | - | 🔲 |

## google-productivity (16개)

| 서비스명 | 조사 | MCP | 구현 |
|---------|------|-----|------|
| Google Docs | 🔲 | - | 🔲 |
| Google Sheets | 🔲 | - | 🔲 |
| Google Slides | 🔲 | - | 🔲 |
| Google Drive | 🔲 | - | 🔲 |
| Gmail | 🔲 | - | 🔲 |
| Google Calendar | 🔲 | - | 🔲 |
| Google Meet | 🔲 | - | 🔲 |
| Google Keep | 🔲 | - | 🔲 |
| Google Forms | 🔲 | - | 🔲 |
| Google Chat | 🔲 | - | 🔲 |
| Google Workspace | 🔲 | - | 🔲 |
| Google Sites | 🔲 | - | 🔲 |
| Google Drawings | 🔲 | - | 🔲 |
| Google Tasks | 🔲 | - | 🔲 |
| Google Voice | 🔲 | - | 🔲 |
| Google Contacts | 🔲 | - | 🔲 |

## google-media (13개)

| 서비스명 | 조사 | MCP | 구현 |
|---------|------|-----|------|
| YouTube | 🔲 | - | 🔲 |
| YouTube Music | 🔲 | - | 🔲 |
| YouTube Studio | 🔲 | - | 🔲 |
| YouTube Premium | 🔲 | - | 🔲 |
| Google Photos | 🔲 | - | 🔲 |
| Google Play Books | 🔲 | - | 🔲 |
| Google Play Movies & TV | 🔲 | - | 🔲 |
| Google TV | 🔲 | - | 🔲 |
| Google Play Games | 🔲 | - | 🔲 |
| Play Games for PC | 🔲 | - | 🔲 |
| Google Arts & Culture | 🔲 | - | 🔲 |
| Google Play Store | 🔲 | - | 🔲 |
| Google Podcasts | 🔲 | - | 🔲 |

## google-cloud (17개)

| 서비스명 | 조사 | MCP | 구현 |
|---------|------|-----|------|
| Google Cloud Platform | 🔲 | - | 🔲 |
| Firebase | 🔲 | - | 🔲 |
| Google Colab | 🔲 | - | 🔲 |
| Android Studio | 🔲 | - | 🔲 |
| PageSpeed Insights | 🔲 | - | 🔲 |
| Google Search Console | 🔲 | - | 🔲 |
| Cloud Storage | 🔲 | - | 🔲 |
| Cloud Functions | 🔲 | - | 🔲 |
| BigQuery | 🔲 | - | 🔲 |
| Kubernetes Engine | 🔲 | - | 🔲 |
| App Engine | 🔲 | - | 🔲 |
| Looker Studio | 🔲 | - | 🔲 |
| Cloud Run | 🔲 | - | 🔲 |
| Flutter | 🔲 | - | 🔲 |
| TensorFlow | 🔲 | - | 🔲 |
| Google IDX | 🔲 | - | 🔲 |
| Google OAuth / Identity | 🔲 | - | 🔲 |

## google-ads (12개)

| 서비스명 | 조사 | MCP | 구현 |
|---------|------|-----|------|
| Google Ads | 🔲 | - | 🔲 |
| Google Analytics 4 | 🔲 | - | 🔲 |
| Google Merchant Center | 🔲 | - | 🔲 |
| Google Business Profile | 🔲 | - | 🔲 |
| Google AdSense | 🔲 | - | 🔲 |
| Display & Video 360 | 🔲 | - | 🔲 |
| Search Ads 360 | 🔲 | - | 🔲 |
| Google Tag Manager | 🔲 | - | 🔲 |
| Looker | 🔲 | - | 🔲 |
| Google Partners | 🔲 | - | 🔲 |
| Think with Google | 🔲 | - | 🔲 |
| Google Pay Business | 🔲 | - | 🔲 |

## google-devices (12개)

| 서비스명 | 조사 | MCP | 구현 |
|---------|------|-----|------|
| Android | 🔲 | - | 🔲 |
| ChromeOS | 🔲 | - | 🔲 |
| Google Pixel | 🔲 | - | 🔲 |
| Google Nest Hub | 🔲 | - | 🔲 |
| Chromecast | 🔲 | - | 🔲 |
| Google Nest Audio | 🔲 | - | 🔲 |
| Wear OS | 🔲 | - | 🔲 |
| Nest Wifi Pro | 🔲 | - | 🔲 |
| Google Chrome | 🔲 | - | 🔲 |
| Android Auto | 🔲 | - | 🔲 |
| Android TV | 🔲 | - | 🔲 |
| Android XR | 🔲 | - | 🔲 |

## google-education (10개)

| 서비스명 | 조사 | MCP | 구현 |
|---------|------|-----|------|
| Google Classroom | 🔲 | - | 🔲 |
| Google for Education | 🔲 | - | 🔲 |
| CS First | 🔲 | - | 🔲 |
| Grow with Google | 🔲 | - | 🔲 |
| Digital Garage | 🔲 | - | 🔲 |
| AI Essentials | 🔲 | - | 🔲 |
| Be Internet Awesome | 🔲 | - | 🔲 |
| Earth Education | 🔲 | - | 🔲 |
| Applied Digital Skills | 🔲 | - | 🔲 |
| Google Career Certificates | 🔲 | - | 🔲 |

## google-console (12개)

| 서비스명 | 조사 | MCP | 구현 |
|---------|------|-----|------|
| Google Admin Console | 🔲 | - | 🔲 |
| Google Play Console | 🔲 | - | 🔲 |
| Google Search Console | 🔲 | - | 🔲 |
| Google Cloud Console | 🔲 | - | 🔲 |
| Firebase Console | 🔲 | - | 🔲 |
| Google Ads Manager | 🔲 | - | 🔲 |
| Analytics Admin | 🔲 | - | 🔲 |
| AdMob Console | 🔲 | - | 🔲 |
| Google API Console | 🔲 | - | 🔲 |
| Google Domains | 🔲 | - | 🔲 |
| Tag Manager Console | 🔲 | - | 🔲 |
| Looker Studio | 🔲 | - | 🔲 |

> 조사 컬럼: ✅ 조사 완료 / 🔲 미조사
> MCP 컬럼: ✅ 있음 / ❌ 없음 / `-` 미조사
> 구현 컬럼: ✅ JSON 업데이트 완료 / 🔲 미완료 (MCP 없는 서비스는 N/A)

---

## 완료 체크

- [ ] 전체 120개 서비스 MCP 조사 완료 (9개 카테고리 합산)
- [ ] MCP 있는 서비스 JSON 구현 완료
