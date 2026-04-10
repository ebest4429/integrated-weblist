# P4-13 MCP 조사 — media-ai (image-ai + video-audio-ai, 29개)

> 대상 JSON: `src/data/image-ai.json` (12개), `src/data/video-audio-ai.json` (17개)
> 목적: 각 서비스에 Claude Desktop/CLI MCP 연결 명령이 존재하는지 조사하고 JSON에 반영.
> 조사 기준: phase4-api-mcp.md "MCP 필드 정의" 섹션 참조. 임의 해석 금지.
> 참고: 미디어 생성 AI 서비스는 MCP 연결 가능성 낮으나 전수 조사 필수.

---

## image-ai (12개)

| 서비스명 | 조사 | MCP | 구현 |
|---------|------|-----|------|
| Midjourney | 🔲 | - | 🔲 |
| DALL-E 3 | 🔲 | - | 🔲 |
| Adobe Firefly | 🔲 | - | 🔲 |
| Ideogram | 🔲 | - | 🔲 |
| Leonardo.ai | 🔲 | - | 🔲 |
| Flux (Black Forest Labs) | 🔲 | - | 🔲 |
| Stable Diffusion | 🔲 | - | 🔲 |
| Civitai | 🔲 | - | 🔲 |
| ComfyUI | 🔲 | - | 🔲 |
| Topaz Labs | 🔲 | - | 🔲 |
| Clipdrop | 🔲 | - | 🔲 |
| ImageFX | 🔲 | - | 🔲 |

## video-audio-ai (17개)

| 서비스명 | 조사 | MCP | 구현 |
|---------|------|-----|------|
| Sora | 🔲 | - | 🔲 |
| Runway Gen-3 | 🔲 | - | 🔲 |
| Kling AI | 🔲 | - | 🔲 |
| Pika Labs | 🔲 | - | 🔲 |
| HeyGen | 🔲 | - | 🔲 |
| ElevenLabs | 🔲 | - | 🔲 |
| PlayHT | 🔲 | - | 🔲 |
| Whisper | 🔲 | - | 🔲 |
| Suno | 🔲 | - | 🔲 |
| Udio | 🔲 | - | 🔲 |
| Veo 3 | 🔲 | - | 🔲 |
| Flow | 🔲 | - | 🔲 |
| MusicFX | 🔲 | - | 🔲 |
| Higgsfield AI | 🔲 | - | 🔲 |
| Vrew | 🔲 | - | 🔲 |
| Vooster | 🔲 | - | 🔲 |
| Edimakor | 🔲 | - | 🔲 |

> 조사 컬럼: ✅ 조사 완료 / 🔲 미조사
> MCP 컬럼: ✅ 있음 / ❌ 없음 / `-` 미조사
> 구현 컬럼: ✅ JSON 업데이트 완료 / 🔲 미완료 (MCP 없는 서비스는 N/A)

---

## 완료 체크

- [ ] 전체 29개 서비스 MCP 조사 완료
- [ ] MCP 있는 서비스 JSON 구현 완료
