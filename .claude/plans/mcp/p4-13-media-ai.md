# P4-13 MCP 조사 — media-ai (image-ai + video-audio-ai, 29개)

> 대상 JSON: `src/data/image-ai.json` (12개), `src/data/video-audio-ai.json` (17개)
> 목적: 각 서비스에 Claude Desktop/CLI MCP 연결 명령이 존재하는지 조사하고 JSON에 반영.
> 조사 기준: phase4-api-mcp.md "MCP 필드 정의" 섹션 참조. 임의 해석 금지.
> 참고: 미디어 생성 AI 서비스는 MCP 연결 가능성 낮으나 전수 조사 필수.

---

## image-ai (12개)

| 서비스명 | 조사 | MCP | 구현 |
|---------|------|-----|------|
| Midjourney | ✅ | ❌ | N/A |
| DALL-E 3 | ✅ | ❌ | N/A |
| Adobe Firefly | ✅ | ❌ | N/A |
| Ideogram | ✅ | ❌ | N/A |
| Leonardo.ai | ✅ | ❌ | N/A |
| Flux (Black Forest Labs) | ✅ | ❌ | N/A |
| Stable Diffusion | ✅ | ❌ | N/A |
| Civitai | ✅ | ❌ | N/A |
| ComfyUI | ✅ | ❌ | N/A |
| Topaz Labs | ✅ | ❌ | N/A |
| Clipdrop | ✅ | ❌ | N/A |
| ImageFX | ✅ | ❌ | N/A |

## video-audio-ai (17개)

| 서비스명 | 조사 | MCP | 구현 |
|---------|------|-----|------|
| Sora | ✅ | ❌ | N/A |
| Runway Gen-3 | ✅ | ✅ | ✅ |
| Kling AI | ✅ | ❌ | N/A |
| Pika Labs | ✅ | ❌ | N/A |
| HeyGen | ✅ | ✅ | ✅ |
| ElevenLabs | ✅ | ✅ | ✅ |
| PlayHT | ✅ | ❌ | N/A |
| Whisper | ✅ | ❌ | N/A |
| Suno | ✅ | ❌ | N/A |
| Udio | ✅ | ❌ | N/A |
| Veo 3 | ✅ | ❌ | N/A |
| Flow | ✅ | ❌ | N/A |
| MusicFX | ✅ | ❌ | N/A |
| Higgsfield AI | ✅ | ❌ | N/A |
| Vrew | ✅ | ❌ | N/A |
| Vooster | ✅ | ❌ | N/A |
| Edimakor | ✅ | ❌ | N/A |

> 조사 컬럼: ✅ 조사 완료 / 🔲 미조사
> MCP 컬럼: ✅ 있음 / ❌ 없음 / `-` 미조사
> 구현 컬럼: ✅ JSON 업데이트 완료 / 🔲 미완료 (MCP 없는 서비스는 N/A)

---

## 완료 체크

- [x] 전체 29개 서비스 MCP 조사 완료
- [x] MCP 있는 서비스 JSON 구현 완료

## 조사 결과 요약

MCP 있음 (3개, 모두 video-audio-ai.json):
- Runway Gen-3: remote MCP (npx mcp-remote https://mcp.runway.team, API 키 필요)
- HeyGen: uvx heygen-mcp (공식 heygen-com/heygen-mcp)
- ElevenLabs: uvx elevenlabs-mcp (공식 elevenlabs/elevenlabs-mcp)

MCP 없음 (26개): 나머지 전부
- 특이사항: Leonardo.ai는 공식 remote MCP 존재하나 Claude Desktop 설정 문서 없음 → 없음 처리
- image-ai 12개 전체 MCP 없음
