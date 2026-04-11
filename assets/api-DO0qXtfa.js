var e=`api`,t=`🔌`,n=`주요 API`,r=`dev`,i=[{name:`OpenAI API`,url:`https://platform.openai.com`,desc:`GPT-4o·o1·DALL-E·Whisper·TTS API. 가장 광범위한 AI API`,badge:`paid`,detail:{intro:`OpenAI의 공식 API 플랫폼. GPT-4o·o1 추론 모델부터 DALL-E 이미지 생성, Whisper 음성인식, TTS 음성합성까지 가장 넓은 AI 기능 스펙트럼을 제공한다.`,features:[`GPT-4o·o1·o3 텍스트 생성 및 추론 모델`,`DALL-E 3 이미지 생성·편집 API`,`Whisper 음성→텍스트, TTS 텍스트→음성`,`Function Calling·Structured Outputs·Batch API`,`Assistants API로 스레드·파일·도구 관리`],usage:`platform.openai.com에서 API 키 발급 후 토큰 단위 과금. Python/Node.js 공식 SDK 제공. 월별 사용량 한도 설정 가능.`,notes:`모델별 가격 차이 큼. 비용 최적화 시 GPT-4o Mini 또는 Batch API 활용 권장.`}},{name:`Anthropic API`,url:`https://anthropic.com/api`,desc:`Claude 3.5 Sonnet·Haiku API. 200K 컨텍스트·MCP·Tool Use`,badge:`paid`,detail:{intro:`Anthropic의 Claude 모델 API. 최대 200K 토큰 컨텍스트 윈도우와 강력한 코드·분석 능력이 특징. Tool Use(Function Calling)와 MCP 프로토콜을 공식 지원한다.`,features:[`Claude 3.5 Sonnet·Haiku·Opus 모델 선택`,`200K 컨텍스트 윈도우 — 긴 문서·코드베이스 처리`,`Tool Use(Function Calling)로 외부 도구 연동`,`MCP(Model Context Protocol) 공식 지원`,`Vision — 이미지 첨부·분석 가능`],usage:`console.anthropic.com에서 API 키 발급. Python/TypeScript SDK 제공. 입력/출력 토큰 각각 과금.`,notes:`Claude Haiku는 빠른 응답·저렴한 비용에 최적화. 긴 문서 요약·코드 리뷰 작업에 Sonnet 권장.`}},{name:`Google AI Studio`,url:`https://aistudio.google.com`,desc:`Gemini API 무료 테스트·개발. Gemini Pro·Flash·임베딩 모델`,badge:`free`,detail:{intro:`Google Gemini 모델의 API 키를 무료로 발급하고 테스트할 수 있는 개발자 플랫폼. Gemini Pro·Flash·임베딩 모델을 브라우저에서 즉시 실험하고 코드 스니펫을 자동 생성해준다.`,features:[`Gemini 1.5 Pro·Flash·Flash-8B 모델 API 무료 제공`,`텍스트·이미지·오디오·비디오 멀티모달 입력`,`1M 토큰 컨텍스트 윈도우(Gemini 1.5 Pro)`,`text-embedding-004 임베딩 모델`,`Python·JavaScript·REST 코드 자동 생성`],usage:`Google 계정으로 로그인 후 API 키 발급. 무료 티어에서 분당 요청 제한 있음. 프로덕션 전환 시 Google Cloud Vertex AI로 이관.`,notes:`개발·프로토타이핑 단계에서는 완전 무료. 상용 서비스는 Vertex AI 통해 SLA 계약 권장.`}},{name:`Groq`,url:`https://groq.com`,desc:`초고속 LLM 추론 API. Llama·Mixtral 호스팅·낮은 레이턴시`,badge:`freepaid`,detail:{intro:`자체 개발 LPU(Language Processing Unit) 칩 기반의 초고속 LLM 추론 API. Llama·Mixtral·Gemma 등 오픈소스 모델을 GPU 대비 수십 배 빠른 속도로 호스팅한다.`,features:[`LPU 칩 기반 초저지연 추론 (초당 수백 토큰)`,`Llama 3·Mixtral·Gemma·Whisper 모델 지원`,`OpenAI 호환 API — 기존 코드 최소 수정으로 전환`,`무료 티어 제공 (분당 요청·토큰 제한)`,`실시간 스트리밍 응답 지원`],usage:`console.groq.com에서 API 키 발급. OpenAI SDK에서 base_url만 Groq 엔드포인트로 변경하면 바로 사용 가능.`,notes:`응답 속도가 최우선인 챗봇·실시간 앱에 적합. 무료 티어 한도 내에서 프로토타이핑에 활용 가능.`,mcp:{desktop_config:`{
  "mcpServers": {
    "groq": {
      "command": "uvx",
      "args": ["groq-mcp"],
      "env": {
        "GROQ_API_KEY": "your_groq_api_key"
      }
    }
  }
}`,cli_command:`claude mcp add groq -e GROQ_API_KEY=your_groq_api_key -- uvx groq-mcp`,info_url:`https://github.com/groq/groq-mcp-server`}}},{name:`Replicate`,url:`https://replicate.com`,desc:`오픈소스 AI 모델 API 실행. 이미지·영상·LLM 다양한 모델`,badge:`freepaid`,detail:{intro:`수천 개의 오픈소스 AI 모델을 API로 즉시 실행할 수 있는 플랫폼. Stable Diffusion·Flux·SDXL 이미지 생성부터 LLM·영상·음악 생성 모델까지 클라우드에서 원클릭 실행한다.`,features:[`Flux·SDXL·Stable Diffusion 이미지 생성 모델`,`Llama·Mistral 등 오픈소스 LLM 호스팅`,`영상·음악·음성 생성 모델 다수 보유`,`커스텀 모델 업로드·배포 가능`,`Python·Node.js SDK + REST API`],usage:`replicate.com 가입 후 API 토큰 발급. 모델별 CPU/GPU 실행 시간 기준 과금. 첫 사용 시 무료 크레딧 제공.`,notes:`자체 GPU 서버 없이 오픈소스 모델을 빠르게 프로토타이핑할 때 유용. 자주 쓰는 모델은 배포 유지로 콜드스타트 제거 가능.`,mcp:{desktop_config:`{
  "mcpServers": {
    "replicate": {
      "command": "npx",
      "args": ["-y", "replicate-mcp"],
      "env": {
        "REPLICATE_API_TOKEN": "your-token-here"
      }
    }
  }
}`,cli_command:`claude mcp add replicate -e REPLICATE_API_TOKEN=your-token -- npx -y replicate-mcp`,info_url:`https://replicate.com/docs/reference/mcp`}}},{name:`Together AI`,url:`https://together.ai`,desc:`오픈소스 모델 고속 API. 파인튜닝·배치 처리·저렴한 단가`,badge:`freepaid`,detail:{intro:`오픈소스 LLM을 저렴하고 빠르게 API로 제공하는 플랫폼. Llama·Mistral·Qwen 등 70B 이상 대형 모델도 경쟁력 있는 가격에 호스팅하며, 파인튜닝과 배치 처리를 지원한다.`,features:[`Llama 3·Mistral·Qwen·DBRX 등 50+ 모델`,`모델 파인튜닝 — 커스텀 데이터셋으로 전용 모델 생성`,`배치 API — 대량 처리 시 비용 절감`,`OpenAI 호환 API 인터페이스`,`임베딩·이미지 생성 모델도 지원`],usage:`api.together.ai에서 가입·API 키 발급. 토큰 단위 과금이며 OpenAI 대비 최대 8배 저렴. $5 무료 크레딧 제공.`,notes:`오픈소스 모델로 비용 절감이 목표인 프로젝트에 적합. 파인튜닝 후 전용 엔드포인트로 배포 가능.`,mcp:{desktop_config:`{
  "mcpServers": {
    "together-ai": {
      "command": "npx",
      "args": ["-y", "@open-mcp/together-ai"],
      "env": {
        "API_KEY": "your_api_key"
      }
    }
  }
}`,cli_command:`claude mcp add together-ai -e API_KEY=your_api_key -- npx -y @open-mcp/together-ai`,info_url:`https://docs.together.ai/docs/mcp`}}},{name:`Stripe API`,url:`https://stripe.com`,desc:`결제 처리 API. 구독·단건결제·원화·웹훅 자동화`,badge:`freepaid`,detail:{intro:`전 세계 개발자가 가장 많이 사용하는 결제 처리 API. 단건 결제·구독·인보이스·분할 결제 등 모든 결제 시나리오를 지원하며, 원화(KRW) 포함 135개 통화를 처리한다.`,features:[`카드·간편결제·은행이체 등 다양한 결제 수단`,`구독 관리 — 플랜·청구 주기·업다운그레이드 자동화`,`웹훅으로 결제 성공·실패·환불 이벤트 수신`,`Stripe Checkout — 결제 페이지 즉시 생성`,`Connect — 마켓플레이스·정산 자동화`],usage:`dashboard.stripe.com에서 API 키 발급. 테스트 키로 샌드박스 결제 가능. 거래당 수수료 방식(별도 월정액 없음).`,notes:`한국 사업자는 사업자등록증 필요. 테스트 카드 번호(4242 4242 4242 4242)로 개발 환경 결제 테스트 가능.`,mcp:{desktop_config:`{
  "mcpServers": {
    "stripe": {
      "command": "npx",
      "args": ["-y", "@stripe/mcp@latest"],
      "env": {
        "STRIPE_SECRET_KEY": "your_secret_key"
      }
    }
  }
}`,cli_command:`claude mcp add --transport http stripe https://mcp.stripe.com/`,info_url:`https://docs.stripe.com/mcp`}}},{name:`Google Maps API`,url:`https://developers.google.com/maps`,desc:`지도·위치·경로·장소 검색 API. 앱 내 지도 기능 통합`,badge:`freepaid`,detail:{intro:`Google Maps 플랫폼의 공식 개발자 API. 지도 표시부터 경로 탐색, 장소 검색, 주소 자동완성, 좌표 변환까지 위치 기반 서비스 구축에 필요한 모든 기능을 제공한다.`,features:[`Maps JavaScript API — 웹 지도 삽입·커스터마이징`,`Places API — 장소 검색·상세정보·자동완성`,`Directions API — 경로·거리·소요시간 계산`,`Geocoding API — 주소↔좌표 상호 변환`,`Street View API — 거리뷰 이미지 삽입`],usage:`Google Cloud Console에서 프로젝트 생성 후 API 활성화·키 발급. 월 $200 무료 크레딧 제공. 사용량 초과 시 과금.`,notes:`API 키에 HTTP 리퍼러·IP 제한 설정 필수(키 유출 방지). 모바일은 Android/iOS SDK 별도 사용.`,mcp:{desktop_config:`{
  "mcpServers": {
    "google-maps": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-google-maps"],
      "env": {
        "GOOGLE_MAPS_API_KEY": "your_api_key"
      }
    }
  }
}`,cli_command:`claude mcp add google-maps -e GOOGLE_MAPS_API_KEY=your_api_key -- npx -y @modelcontextprotocol/server-google-maps`,info_url:`https://github.com/modelcontextprotocol/servers/tree/main/src/google-maps`}}},{name:`Resend`,url:`https://resend.com`,desc:`개발자 친화적 이메일 API. React 이메일 템플릿·빠른 발송`,badge:`freepaid`,detail:{intro:`개발자 경험을 최우선으로 설계한 이메일 발송 API. React로 이메일 템플릿을 작성하는 react-email 라이브러리와 깊이 통합되어 있어 HTML 이메일을 컴포넌트 방식으로 개발할 수 있다.`,features:[`react-email 공식 통합 — React 컴포넌트로 이메일 작성`,`도메인 인증(SPF·DKIM) 간편 설정`,`이메일 이벤트 웹훅(발송·열람·클릭·반송)`,`Python·Node.js·PHP·Go·Ruby SDK 제공`,`무료 티어 월 3,000건·일 100건`],usage:`resend.com 가입 후 API 키 발급. 도메인 DNS에 SPF·DKIM 레코드 추가. SDK 설치 후 3줄로 이메일 발송 가능.`,notes:`Vercel·Next.js 프로젝트와 특히 잘 어울림. 트랜잭션 이메일(회원가입·비밀번호 재설정)에 최적화.`,mcp:{desktop_config:`{
  "mcpServers": {
    "resend": {
      "command": "npx",
      "args": ["-y", "resend-mcp"],
      "env": {
        "RESEND_API_KEY": "re_your_api_key"
      }
    }
  }
}`,cli_command:`claude mcp add resend -e RESEND_API_KEY=re_your_api_key -- npx -y resend-mcp`,info_url:`https://github.com/resend/resend-mcp`}}},{name:`Twilio`,url:`https://twilio.com`,desc:`SMS·전화·WhatsApp API. 인증 문자·알림 자동화`,badge:`freepaid`,detail:{intro:`SMS·전화·WhatsApp·이메일 등 커뮤니케이션 채널을 API로 통합 제공하는 클라우드 플랫폼. OTP 인증 문자부터 콜센터 자동화, 알림 발송까지 다양한 커뮤니케이션 워크플로우를 구축할 수 있다.`,features:[`SMS API — 전 세계 문자 발송·수신`,`Verify API — OTP·2FA 인증 번호 발송`,`WhatsApp Business API 연동`,`Voice API — 전화 발신·수신·IVR 자동응답`,`Twilio Studio — 노코드 커뮤니케이션 플로우 설계`],usage:`twilio.com 가입 후 계정 SID·Auth Token 발급. 한국 번호 발송은 국내 규정상 알파 발신자 ID 또는 현지 번호 구매 필요.`,notes:`한국 SMS 발송 시 수신율이 낮을 수 있음. 국내 서비스에는 카카오 알림톡·솔라피 등 국내 업체 비교 검토 권장.`,mcp:{desktop_config:`{
  "mcpServers": {
    "twilio": {
      "command": "npx",
      "args": ["-y", "@twilio-alpha/mcp", "ACCOUNT_SID/API_KEY:API_SECRET"]
    }
  }
}`,cli_command:`claude mcp add twilio -- npx -y @twilio-alpha/mcp ACCOUNT_SID/API_KEY:API_SECRET`,info_url:`https://github.com/twilio-labs/mcp`}}},{name:`DeepL API`,url:`https://deepl.com/pro-api`,desc:`고품질 번역 API. 한국어 포함 30개 언어·높은 자연스러움`,badge:`freepaid`,detail:{intro:`신경망 기반 고품질 번역 API. 구글 번역 대비 자연스러운 문장 품질로 유명하며, 한국어·일본어·독일어 등 30개 언어를 지원한다. 문서 파일 번역과 용어집 기능도 제공한다.`,features:[`30개 언어 상호 번역 (한국어 포함)`,`형식 유지 문서 번역 — PDF·Word·PPTX·XLIFF`,`용어집(Glossary) — 특정 단어를 지정 번역어로 고정`,`공식성 수준 설정 (격식체·비격식체)`,`Python·Node.js·PHP·Ruby·Java SDK`],usage:`deepl.com/pro에서 API 플랜 구독. 무료 플랜은 월 500,000자 제한. API 키 발급 후 SDK 또는 REST API 호출.`,notes:`기술 문서·마케팅 카피 번역 품질이 특히 우수. 대량 번역 시 배치 처리보다 문단 단위 분할 발송이 품질 안정적.`,mcp:{desktop_config:`{
  "mcpServers": {
    "deepl": {
      "command": "npx",
      "args": ["deepl-mcp-server"],
      "env": {
        "DEEPL_API_KEY": "your-api-key"
      }
    }
  }
}`,cli_command:`claude mcp add deepl -e DEEPL_API_KEY=your-api-key -- npx deepl-mcp-server`,info_url:`https://developers.deepl.com/docs/getting-started/deepl-mcp-server`}}},{name:`Google OAuth / Identity`,url:`https://developers.google.com/identity`,desc:`Google 계정 소셜 로그인 구현. OpenID Connect·OAuth 2.0 표준`,badge:`free`,detail:{intro:`Google 계정을 이용한 소셜 로그인(Sign in with Google)과 OAuth 2.0 기반 API 접근 권한을 구현하는 공식 Identity 플랫폼. 웹·Android·iOS 앱에 구글 인증을 무료로 통합할 수 있다.`,features:[`Sign in with Google — 원클릭 소셜 로그인 버튼`,`OAuth 2.0 — Gmail·Drive·Calendar 등 Google API 접근 권한 요청`,`OpenID Connect — 표준 ID 토큰(JWT) 발급`,`One Tap 로그인 — 팝업 없이 자동 로그인`,`서비스 계정(Service Account) — 서버 간 인증`],usage:`Google Cloud Console에서 OAuth 2.0 클라이언트 ID 생성. 승인된 리디렉션 URI 등록 필수. 프로덕션 배포 전 OAuth 동의 화면 검토 신청 필요.`,notes:`민감한 스코프(Gmail 읽기 등) 요청 시 Google 보안 검토 필요(수 주 소요). 기본 프로필·이메일 스코프는 검토 없이 즉시 사용 가능.`}},{name:`Alpha Vantage`,url:`https://www.alphavantage.co`,desc:`주식·암호화폐·외환 시세 데이터 API. 실시간·역사적 데이터`,badge:`freepaid`,detail:{intro:`주식·암호화폐·외환·원자재 시세 데이터를 제공하는 금융 데이터 API. 무료 티어로 기본 시세 조회가 가능하며, 20년 이상의 역사적 데이터와 기술적 지표(SMA·RSI 등)도 제공한다.`,features:[`글로벌 주식 실시간·일별·주별·월별 시세`,`50+ 암호화폐 시세 (BTC·ETH 등)`,`외환(FX) 실시간·역사적 환율`,`SMA·EMA·RSI·MACD 등 기술적 지표 API`,`기업 재무제표·실적 데이터`],usage:`alphavantage.co에서 무료 API 키 발급. 무료 플랜은 분당 5회·일 500회 제한. Python pandas-datareader 라이브러리로도 접근 가능.`,notes:`무료 플랜 요청 제한이 엄격함. 잦은 호출이 필요하면 캐싱 전략 필수. 한국 주식(KRX) 데이터는 커버리지 제한적.`,mcp:{desktop_config:`{
  "mcpServers": {
    "alphavantage": {
      "command": "uvx",
      "args": ["marketdata-mcp-server", "YOUR_API_KEY"]
    }
  }
}`,cli_command:`claude mcp add alphavantage -- uvx marketdata-mcp-server YOUR_API_KEY`,info_url:`https://github.com/alphavantage/alpha_vantage_mcp`}}},{name:`CoinMarketCap`,url:`https://coinmarketcap.com/api/`,desc:`암호화폐 시세·시가총액·거래량 데이터 API`,badge:`freepaid`,detail:{intro:`세계 최대 암호화폐 데이터 플랫폼 CoinMarketCap의 공식 API. 9,000개 이상의 암호화폐 시세·시가총액·거래량·순위 데이터를 실시간으로 제공한다.`,features:[`9,000+ 암호화폐 실시간 시세·시가총액·거래량`,`거래소별 거래 데이터·유동성 정보`,`역사적 OHLCV 데이터`,`글로벌 암호화폐 시장 총 시가총액·도미넌스`,`신규 상장·에어드롭·이벤트 정보`],usage:`pro.coinmarketcap.com에서 API 키 발급. 무료 Basic 플랜은 월 10,000 크레딧 제공. REST API + JSON 응답.`,notes:`무료 플랜은 최신 시세만 조회 가능(역사적 데이터는 유료). 실시간 가격 위젯·포트폴리오 앱 구축에 적합.`,mcp:{desktop_config:`{
  "mcpServers": {
    "cmc-mcp": {
      "url": "https://mcp.coinmarketcap.com/mcp",
      "headers": {
        "X-CMC-MCP-API-KEY": "your_api_key"
      }
    }
  }
}`,info_url:`https://coinmarketcap.com/api/mcp/`}}}],a={id:`api`,icon:t,title:n,group:`dev`,items:i};export{a as default,r as group,t as icon,e as id,i as items,n as title};