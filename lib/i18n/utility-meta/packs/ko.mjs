export const koTools = {
  "przelicznik-walut": {
    "cat": "finance",
    "name": "환율 변환기",
    "desc": "ECB 최신 기준환율로 온라인 환전. PLN, EUR, USD 및 수십 개 통화쌍 — 가입 불필요.",
    "steps": [
      "금액과 원본 통화를 입력하세요.",
      "대상 통화를 선택하세요.",
      "결과와 당일 환율을 확인하세요."
    ],
    "faq": [
      {
        "q": "환율은 어디서 오나요?",
        "a": "Frankfurter API를 통한 유럽중앙은행 기준환율, 영업일에 업데이트됩니다."
      },
      {
        "q": "실시간 환율인가요?",
        "a": "ECB 기준환율이며, 은행이나 환전소 환율이 아닙니다."
      }
    ]
  },
  "kalkulator-dat": {
    "cat": "time",
    "name": "날짜 계산기",
    "desc": "두 날짜 사이의 일수, 근무일, 요일을 계산 — 계약 및 마감일에 유용.",
    "steps": [
      "시작일과 종료일을 선택하세요.",
      "일수 및 주수 차이를 확인하세요.",
      "선택적으로 근무일만 계산하세요."
    ],
    "faq": [
      {
        "q": "공휴일은 제외되나요?",
        "a": "기본적으로 토·일요일을 제외합니다. 공휴일은 국가마다 다릅니다."
      }
    ]
  },
  "strefy-czasowe": {
    "cat": "time",
    "name": "시간대 차이",
    "desc": "도시 간 현지 시간을 비교하고, 시차를 확인하며, 간단한 지도에서 위치를 찾으세요.",
    "steps": [
      "출발 및 도착 도시를 선택하세요.",
      "현재 현지 시간을 비교하세요.",
      "오프셋과 지도 마커를 확인하세요."
    ],
    "faq": [
      {
        "q": "일광 절약 시간을 고려하나요?",
        "a": "예 — IANA 시간대(예: Europe/Warsaw)를 사용하며 DST를 자동 적용합니다."
      }
    ]
  },
  "przelicznik-jednostek": {
    "cat": "units",
    "name": "단위 변환기",
    "desc": "길이, 질량, 온도, 부피 변환: cm↔인치, kg↔lb, °C↔°F 등.",
    "steps": [
      "단위 카테고리를 선택하세요.",
      "값과 단위를 입력하세요.",
      "즉시 결과를 확인하세요."
    ],
    "faq": [
      {
        "q": "변환이 정확한가요?",
        "a": "예 — 표준 SI 계수. 온도는 단순 곱셈이 아닌 전용 공식을 사용합니다."
      }
    ]
  },
  "kalkulator-vat": {
    "cat": "finance",
    "name": "VAT 및 백분율 계산기",
    "desc": "VAT(23%, 8%, 5%) 추가/차감, 순/총액 계산 및 간단한 백분율.",
    "steps": [
      "순액 또는 총액을 입력하세요.",
      "VAT율 또는 사용자 지정 비율을 선택하세요.",
      "순액, VAT, 총액 내역을 확인하세요."
    ],
    "faq": [
      {
        "q": "폴란드 VAT율은?",
        "a": "표준 23%, 감면 8% 및 5%. 사용자 지정율도 입력 가능합니다."
      }
    ]
  },
  "kalkulator-wieku": {
    "cat": "time",
    "name": "나이 및 카운트다운 계산기",
    "desc": "정확한 나이(년, 월, 일) 계산 — 또는 특정 날짜까지 남은 일수.",
    "steps": [
      "생년월일 또는 목표 날짜를 입력하세요.",
      "나이 또는 카운트다운을 확인하세요.",
      "다음 생일도 확인하세요."
    ],
    "faq": [
      {
        "q": "나이는 어떻게 계산되나요?",
        "a": "생년월일부터 오늘까지 년, 월, 일로 계산 — 단순 역년만이 아닙니다."
      }
    ]
  },
  "generator-hasel": {
    "cat": "dev",
    "name": "비밀번호 생성기",
    "desc": "브라우저에서 로컬로 강력한 비밀번호 생성. 길이 및 문자 집합 설정 — 서버로 전송되지 않습니다.",
    "steps": [
      "길이 및 문자 옵션을 설정하세요.",
      "생성을 클릭하세요.",
      "한 번의 클릭으로 복사하세요."
    ],
    "faq": [
      {
        "q": "비밀번호가 업로드되나요?",
        "a": "아니요 — 생성은 브라우저에서 완전히 로컬로 이루어집니다."
      }
    ]
  },
  "licznik-znakow": {
    "cat": "text",
    "name": "글자 및 단어 수 세기",
    "desc": "글자, 단어, 문장, 단락 수 계산 — SEO, SNS, 양식 제한에 유용.",
    "steps": [
      "텍스트를 붙여넣거나 입력하세요.",
      "실시간 통계를 확인하세요.",
      "공백 제외 길이를 확인하세요."
    ],
    "faq": [
      {
        "q": "단어는 어떻게 세나요?",
        "a": "단어는 공백 또는 줄바꿈으로 구분된 연속입니다."
      }
    ]
  },
  "generator-qr": {
    "cat": "dev",
    "name": "QR 코드 생성기",
    "desc": "링크 또는 텍스트에서 QR 코드를 만들고 PNG로 다운로드. 브라우저에서 로컬 실행.",
    "steps": [
      "텍스트 또는 URL을 입력하세요.",
      "QR 미리보기를 생성하세요.",
      "PNG 이미지를 다운로드하세요."
    ],
    "faq": [
      {
        "q": "QR 내용이 업로드되나요?",
        "a": "아니요 — 코드는 로컬에서 생성됩니다. 내용을 저장하지 않습니다."
      }
    ]
  },
  "kalkulator-bitrate": {
    "cat": "media",
    "name": "파일 크기 및 bitrate 계산기",
    "desc": "주어진 bitrate와 길이에서 오디오/비디오 파일 크기 추정 — 또는 MB 한도에 맞는 bitrate.",
    "steps": [
      "bitrate에서 크기 또는 한도에서 bitrate 선택.",
      "길이와 값을 입력하세요.",
      "MB / kbps 결과를 확인하세요."
    ],
    "faq": [
      {
        "q": "컨테이너가 포함되나요?",
        "a": "원시 스트림을 추정합니다. 컨테이너와 추가 트랙은 보통 몇 % 추가됩니다."
      }
    ]
  },
  "konwerter-kolorow": {
    "cat": "dev",
    "name": "HEX RGB HSL 색상 변환기",
    "desc": "HEX, RGB, HSL 간 색상 변환 및 배경 대비 WCAG 대비 확인.",
    "steps": [
      "모든 형식으로 색상 입력.",
      "HEX/RGB/HSL 등가값 확인.",
      "배경 대비 대비 확인."
    ],
    "faq": [
      {
        "q": "AA / AAA란?",
        "a": "텍스트와 배경 대비에 대한 WCAG 접근성 등급."
      }
    ]
  },
  "base64": {
    "cat": "dev",
    "name": "Base64 인코딩 / 디코딩",
    "desc": "텍스트를 Base64로 인코딩하거나 디코딩. 로컬 처리, 데이터 업로드 없음.",
    "steps": [
      "텍스트 또는 Base64 붙여넣기.",
      "인코딩 또는 디코딩 선택.",
      "결과 복사."
    ],
    "faq": [
      {
        "q": "UTF-8을 지원하나요?",
        "a": "예 — Unicode 문자를 지원합니다."
      }
    ]
  },
  "unix-timestamp": {
    "cat": "dev",
    "name": "Unix timestamp ↔ 날짜",
    "desc": "Unix timestamp(초/ms)를 날짜로 변환 및 역변환. 로그 및 API에 유용.",
    "steps": [
      "timestamp 붙여넣기 또는 날짜 선택.",
      "ISO 및 로컬 결과 확인.",
      "값 복사."
    ],
    "faq": [
      {
        "q": "초인가요 밀리초인가요?",
        "a": "길이에 따라 자동 감지. 단위 강제 지정도 가능."
      }
    ]
  },
  "generator-uuid": {
    "cat": "dev",
    "name": "UUID 생성기",
    "desc": "한 번의 클릭으로 UUID v4(무작위) 생성. 필요 시 여러 개 동시 생성.",
    "steps": [
      "UUID 개수 설정.",
      "생성 클릭.",
      "목록 복사."
    ],
    "faq": [
      {
        "q": "UUID 버전은?",
        "a": "UUID v4 — 무작위, RFC 4122, 브라우저에서 생성."
      }
    ]
  },
  "generator-hash": {
    "cat": "dev",
    "name": "SHA / MD5 hash",
    "desc": "텍스트의 SHA-1, SHA-256, SHA-512 또는 MD5 계산. Web Crypto로 로컬 실행.",
    "steps": [
      "텍스트 붙여넣기.",
      "알고리즘 선택.",
      "hex hash 복사."
    ],
    "faq": [
      {
        "q": "MD5가 안전한가요?",
        "a": "MD5는 비밀번호용이 아닙니다. 보안에는 SHA-256+ 사용; MD5는 checksum용."
      }
    ]
  },
  "json-formatter": {
    "cat": "dev",
    "name": "JSON 포맷터",
    "desc": "브라우저에서 JSON 포맷 및 압축 — 서버 업로드 없음.",
    "steps": [
      "JSON 붙여넣기.",
      "포맷 또는 압축 클릭.",
      "결과 복사."
    ],
    "faq": [
      {
        "q": "데이터가 업로드되나요?",
        "a": "아니요 — 처리는 브라우저에서 로컬로 이루어집니다."
      }
    ]
  },
  "diff-tekstu": {
    "cat": "text",
    "name": "텍스트 diff",
    "desc": "두 텍스트 조각을 줄별로 비교하고 차이점 강조.",
    "steps": [
      "텍스트 A와 B 붙여넣기.",
      "강조된 차이점 검토."
    ],
    "faq": [
      {
        "q": "완전한 diff인가요?",
        "a": "줄별 비교 — 짧은 조각과 목록에 적합."
      }
    ]
  },
  "konwerter-wielkosci-liter": {
    "cat": "text",
    "name": "대소문자 변환기",
    "desc": "텍스트를 대문자, 소문자, Title Case, sentence case로 변환.",
    "steps": [
      "텍스트 붙여넣기.",
      "모드 선택.",
      "결과 복사."
    ],
    "faq": []
  },
  "usun-duplikaty-linii": {
    "cat": "text",
    "name": "중복 줄 제거",
    "desc": "이메일 목록, SKU 또는 태그에서 반복 줄 제거.",
    "steps": [
      "목록 붙여넣기.",
      "옵션 설정.",
      "정리된 목록 복사."
    ],
    "faq": []
  },
  "dekoder-jwt": {
    "cat": "dev",
    "name": "JWT 디코더",
    "desc": "서명 검증 없이 JWT header 및 payload 읽기.",
    "steps": [
      "token 붙여넣기.",
      "header 및 payload 확인."
    ],
    "faq": [
      {
        "q": "서명을 검증하나요?",
        "a": "아니요 — token의 Base64URL 디코딩만 수행."
      }
    ]
  },
  "walidator-nip-pesel": {
    "cat": "dev",
    "name": "NIP / PESEL / REGON 검증기",
    "desc": "checksum 규칙으로 폴란드 세금 및 ID 번호 검증.",
    "steps": [
      "번호 입력.",
      "검증 결과 확인."
    ],
    "faq": [
      {
        "q": "GUS 등록부를 조회하나요?",
        "a": "아니요 — checksum 및 길이만."
      }
    ]
  },
  "kalkulator-kredytu": {
    "cat": "finance",
    "name": "대출 계산기",
    "desc": "원리금균등 상환, 총 상환액 및 이자 비용 계산.",
    "steps": [
      "금액, 금리, 기간 입력.",
      "월 상환액 확인."
    ],
    "faq": [
      {
        "q": "은행 수수료가 포함되나요?",
        "a": "수수료 및 보험 없는 단순 시뮬레이션."
      }
    ]
  },
  "markdown-preview": {
    "cat": "text",
    "name": "Markdown 미리보기",
    "desc": "Markdown을 작성하고 브라우저에서 실시간 HTML 미리보기.",
    "steps": [
      "Markdown 입력.",
      "미리보기 자동 업데이트."
    ],
    "faq": []
  },
  "sila-hasla": {
    "cat": "dev",
    "name": "비밀번호 강도",
    "desc": "길이, 문자 다양성, 일반적인 패턴으로 비밀번호 강도 평가.",
    "steps": [
      "비밀번호 입력.",
      "점수 및 팁 확인."
    ],
    "faq": [
      {
        "q": "비밀번호가 업로드되나요?",
        "a": "아니요 — 평가는 브라우저에서 로컬로 이루어집니다."
      }
    ]
  },
  "konwerter-napisow": {
    "cat": "media",
    "name": "SRT / VTT 자막 변환기",
    "desc": "SRT와 WebVTT 형식 간 자막 변환.",
    "steps": [
      "자막 붙여넣기.",
      "방향 또는 자동 선택.",
      "결과 복사."
    ],
    "faq": []
  },
  "generator-nazw-plikow": {
    "cat": "text",
    "name": "일괄 파일 이름 변경",
    "desc": "{name}, {ext}, {index} 패턴으로 파일 일괄 이름 변경.",
    "steps": [
      "파일 목록 붙여넣기.",
      "패턴 설정.",
      "새 이름 복사."
    ],
    "faq": []
  },
  "walidator-iban": {
    "cat": "dev",
    "name": "IBAN 검증기",
    "desc": "IBAN checksum(mod 97) 및 국가별 길이 검증.",
    "steps": [
      "IBAN 붙여넣기.",
      "포맷된 출력 및 검증 확인."
    ],
    "faq": [
      {
        "q": "은행 계좌를 검증하나요?",
        "a": "아니요 — 형식 및 checksum만."
      }
    ]
  },
  "kalkulator-b2b": {
    "cat": "finance",
    "name": "B2B vs 고용 계산기",
    "desc": "고용 순급여와 B2B 송장 수입(정액세 또는 선형세) 비교.",
    "steps": [
      "고용 총급여 및 B2B 수입 입력.",
      "세금 형태 선택.",
      "결과 비교."
    ],
    "faq": [
      {
        "q": "세무 자문인가요?",
        "a": "아니요 — 회계사와 논의용 단순 시뮬레이션."
      }
    ]
  }
};
