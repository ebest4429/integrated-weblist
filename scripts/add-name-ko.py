"""nameKo 필드 일괄 추가 스크립트 — 보편적으로 알려진 서비스에만 적용"""
import json
from pathlib import Path

DATA_DIR = Path(__file__).parent.parent / "src" / "data"

# { 파일명: { 서비스명: 한글명 } }
NAME_KO_MAP = {
    "ai-platforms.json": {
        "ChatGPT": "챗GPT",
        "Microsoft Copilot": "마이크로소프트 코파일럿",
        "Hugging Face": "허깅페이스",
        "NotebookLM": "노트북LM",
    },
    "image-ai.json": {
        "Midjourney": "미드저니",
        "Stable Diffusion": "스테이블 디퓨전",
        "ImageFX": "이미지FX",
    },
    "video-audio-ai.json": {
        "Sora": "소라",
        "ElevenLabs": "일레븐랩스",
        "Veo 3": "베오3",
        "MusicFX": "뮤직FX",
    },
    "dev-tools.json": {
        "GitHub Copilot": "깃허브 코파일럿",
        "VS Code": "비주얼스튜디오코드",
        "Docker": "도커",
        "Android Studio": "안드로이드 스튜디오",
        "Flutter": "플러터",
        "TensorFlow": "텐서플로우",
        "Google Colab": "구글 코랩",
        "Google IDX": "구글 IDX",
    },
    "hosting-infra.json": {
        "Firebase": "파이어베이스",
        "AWS": "아마존웹서비스",
        "Google Cloud (GCP)": "구글 클라우드",
        "Google Cloud Run": "구글 클라우드 런",
        "Google App Engine": "구글 앱 엔진",
        "Google Kubernetes Engine": "구글 쿠버네티스 엔진",
    },
    "database.json": {
        "BigQuery": "빅쿼리",
        "MongoDB Atlas": "몽고DB 아틀라스",
        "Redis": "레디스",
    },
    "google-ai.json": {
        "Gemini": "제미나이",
        "NotebookLM": "노트북LM",
        "AI Studio": "AI 스튜디오",
        "ImageFX": "이미지FX",
        "Veo 3": "베오3",
        "MusicFX": "뮤직FX",
        "AI Test Kitchen": "AI 테스트 키친",
        "Gemini for Workspace": "워크스페이스용 제미나이",
        "Google DeepMind": "구글 딥마인드",
    },
    "google-search.json": {
        "Google Search": "구글 검색",
        "Google Lens": "구글 렌즈",
        "Google Maps": "구글 지도",
        "Google Earth": "구글 어스",
        "Google Scholar": "구글 학술검색",
        "Google Trends": "구글 트렌드",
        "Google Alerts": "구글 알리미",
        "Google Translate": "구글 번역",
        "Google News": "구글 뉴스",
        "Google Shopping": "구글 쇼핑",
        "Google Flights": "구글 항공편",
        "Google Hotels": "구글 호텔",
        "Google Books": "구글 북스",
        "Google Assistant": "구글 어시스턴트",
        "Google Patent Search": "구글 특허 검색",
        "Google Dataset Search": "구글 데이터셋 검색",
    },
    "google-productivity.json": {
        "Google Docs": "구글 문서",
        "Google Sheets": "구글 스프레드시트",
        "Google Slides": "구글 프레젠테이션",
        "Google Drive": "구글 드라이브",
        "Gmail": "지메일",
        "Google Calendar": "구글 캘린더",
        "Google Meet": "구글 미트",
        "Google Keep": "구글 킵",
        "Google Forms": "구글 설문지",
        "Google Chat": "구글 챗",
        "Google Workspace": "구글 워크스페이스",
        "Google Sites": "구글 사이트",
        "Google Tasks": "구글 할일",
        "Google Voice": "구글 보이스",
        "Google Contacts": "구글 주소록",
    },
    "google-media.json": {
        "YouTube": "유튜브",
        "YouTube Music": "유튜브 뮤직",
        "YouTube Studio": "유튜브 스튜디오",
        "YouTube Premium": "유튜브 프리미엄",
        "Google Photos": "구글 포토",
        "Google Play Books": "구글 플레이 북스",
        "Google TV": "구글 TV",
        "Google Arts & Culture": "구글 아트앤컬처",
        "Google Play Store": "구글 플레이 스토어",
    },
    "google-cloud.json": {
        "Google Cloud Platform": "구글 클라우드",
        "Firebase": "파이어베이스",
        "Google Colab": "구글 코랩",
        "Android Studio": "안드로이드 스튜디오",
        "Flutter": "플러터",
        "TensorFlow": "텐서플로우",
        "Google IDX": "구글 IDX",
        "BigQuery": "빅쿼리",
        "Cloud Storage": "클라우드 스토리지",
        "Cloud Functions": "클라우드 함수",
        "Kubernetes Engine": "쿠버네티스 엔진",
        "App Engine": "앱 엔진",
        "Cloud Run": "클라우드 런",
        "Looker Studio": "루커 스튜디오",
    },
    "google-ads.json": {
        "Google Ads": "구글 광고",
        "Google Analytics 4": "구글 애널리틱스",
        "Google Merchant Center": "구글 판매자 센터",
        "Google Business Profile": "구글 비즈니스 프로필",
        "Google AdSense": "구글 애드센스",
        "Google Tag Manager": "구글 태그 매니저",
        "Think with Google": "Think with 구글",
    },
    "google-devices.json": {
        "Android": "안드로이드",
        "ChromeOS": "크롬OS",
        "Google Chrome": "구글 크롬",
        "Android Auto": "안드로이드 오토",
        "Android TV": "안드로이드 TV",
        "Wear OS": "웨어OS",
    },
    "google-education.json": {
        "Google Classroom": "구글 클래스룸",
        "Google for Education": "구글 포 에듀케이션",
        "Grow with Google": "Grow with 구글",
    },
    "google-console.json": {
        "Google Admin Console": "구글 관리 콘솔",
        "Google Play Console": "구글 플레이 콘솔",
        "Google Search Console": "구글 서치 콘솔",
        "Google Cloud Console": "구글 클라우드 콘솔",
        "Firebase Console": "파이어베이스 콘솔",
        "Google API Console": "구글 API 콘솔",
        "Google Domains": "구글 도메인",
        "Looker Studio": "루커 스튜디오",
    },
}

updated_total = 0
for filename, ko_map in NAME_KO_MAP.items():
    path = DATA_DIR / filename
    if not path.exists():
        print(f"[SKIP] {filename} not found")
        continue

    with open(path, "r", encoding="utf-8") as f:
        data = json.load(f)

    updated = 0
    for item in data["items"]:
        if item["name"] in ko_map:
            item["nameKo"] = ko_map[item["name"]]
            updated += 1

    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    print(f"[OK] {filename}: {updated}개 nameKo 추가")
    updated_total += updated

print(f"\n완료: 총 {updated_total}개 항목에 nameKo 추가")
