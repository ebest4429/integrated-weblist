# P4-14 MCP 조사 — assets-templates (image-assets + video-assets + sound-assets + web-templates, 43개)

> 대상 JSON: `src/data/image-assets.json` (10개), `src/data/video-assets.json` (12개),
>             `src/data/sound-assets.json` (12개), `src/data/web-templates.json` (9개)
> 목적: 각 서비스에 Claude Desktop/CLI MCP 연결 명령이 존재하는지 조사하고 JSON에 반영.
> 조사 기준: phase4-api-mcp.md "MCP 필드 정의" 섹션 참조. 임의 해석 금지.
> 참고: 에셋·템플릿 서비스는 MCP 연결 가능성이 가장 낮음. 전수 조사 후 대부분 없음 처리 예상.

---

## image-assets (10개)

| 서비스명 | 조사 | MCP | 구현 |
|---------|------|-----|------|
| Freepik | 🔲 | - | 🔲 |
| Unsplash | 🔲 | - | 🔲 |
| Pexels | 🔲 | - | 🔲 |
| Pixabay | 🔲 | - | 🔲 |
| Shutterstock | 🔲 | - | 🔲 |
| Getty Images | 🔲 | - | 🔲 |
| Envato Elements | 🔲 | - | 🔲 |
| Flaticon | 🔲 | - | 🔲 |
| VistaCreate | 🔲 | - | 🔲 |
| rawpixel | 🔲 | - | 🔲 |

## video-assets (12개)

| 서비스명 | 조사 | MCP | 구현 |
|---------|------|-----|------|
| Mixkit | 🔲 | - | 🔲 |
| Pexels Video | 🔲 | - | 🔲 |
| Pixabay Video | 🔲 | - | 🔲 |
| Coverr | 🔲 | - | 🔲 |
| Videvo | 🔲 | - | 🔲 |
| Shutterstock Video | 🔲 | - | 🔲 |
| Getty Images Video | 🔲 | - | 🔲 |
| Pond5 | 🔲 | - | 🔲 |
| Storyblocks | 🔲 | - | 🔲 |
| Envato Elements Video | 🔲 | - | 🔲 |
| Artgrid | 🔲 | - | 🔲 |
| Motion Array | 🔲 | - | 🔲 |

## sound-assets (12개)

| 서비스명 | 조사 | MCP | 구현 |
|---------|------|-----|------|
| Freesound | 🔲 | - | 🔲 |
| Mixkit Sound | 🔲 | - | 🔲 |
| Pixabay Music | 🔲 | - | 🔲 |
| Epidemic Sound | 🔲 | - | 🔲 |
| Artlist | 🔲 | - | 🔲 |
| Soundsnap | 🔲 | - | 🔲 |
| Pond5 Audio | 🔲 | - | 🔲 |
| Storyblocks Audio | 🔲 | - | 🔲 |
| Uppbeat | 🔲 | - | 🔲 |
| Bensound | 🔲 | - | 🔲 |
| Zapsplat | 🔲 | - | 🔲 |
| Adobe Stock Audio | 🔲 | - | 🔲 |

## web-templates (9개)

| 서비스명 | 조사 | MCP | 구현 |
|---------|------|-----|------|
| HTML5 UP | 🔲 | - | 🔲 |
| Start Bootstrap | 🔲 | - | 🔲 |
| Creative Tim | 🔲 | - | 🔲 |
| Colorlib | 🔲 | - | 🔲 |
| FreeHTML5 | 🔲 | - | 🔲 |
| Themezy | 🔲 | - | 🔲 |
| Wix 템플릿 | 🔲 | - | 🔲 |
| Pixso | 🔲 | - | 🔲 |
| 웹쟁이 | 🔲 | - | 🔲 |

> 조사 컬럼: ✅ 조사 완료 / 🔲 미조사
> MCP 컬럼: ✅ 있음 / ❌ 없음 / `-` 미조사
> 구현 컬럼: ✅ JSON 업데이트 완료 / 🔲 미완료 (MCP 없는 서비스는 N/A)

---

## 완료 체크

- [ ] 전체 43개 서비스 MCP 조사 완료
- [ ] MCP 있는 서비스 JSON 구현 완료
