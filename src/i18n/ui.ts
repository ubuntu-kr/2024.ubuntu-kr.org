export const languages = {
    en: 'English',
    ko: '한국어',
  };
  
  export const defaultLang = 'ko';
  
  export const ui: Record<string, Record<string, string>> = {
    en:{
      
      'home.tagline': 'The second edition of UbuCon Korea to be held at Microsoft Korea which is the same venue as last year on August 10th. Various sessions will be prepared with theme "Deploy with Ubuntu"!',
      'home.venuetbd': '*Dates and venue to be confirmed soon.',
      'footer.contact': 'Contact us with Email',
      'footer.srcrepo': 'See source code',
      'footer.otherevents': 'Other events of Ubuntu Korea',
      'cityBanner.title': 'Let\'s meet at Microsoft Korea near Gwanghwamoon Gate!',
      'cityBanner.description': 'Learn how to get to the venue, Available facilities and our event floor plan',
      'nav.venue': 'Venue & Safety',
      'nav.about': 'About'
    },
    ko: {
      'home.tagline': '두번째 UbuCon Korea는 작년과 동일한 장소인 한국마이크로소프트에서 8월 10일에 개최될 예정입니다. "Deploy with Ubuntu"를 테마로 다양한 세션이 준비 될 예정입니다.',
      'home.venuetbd': '*장소 및 날짜 추후 확정 예정.',
      'footer.contact': '이메일로 연락하기',
      'footer.srcrepo': '소스코드 확인',
      'footer.otherevents': '우분투한국커뮤니티의 다른 행사',
      'cityBanner.title': '광화문 근처에 위치한 한국마이크로소프트에서 만나요!',
      'cityBanner.description': '행사장 오시는 길, 내부 이용 가능 시설 및 행사 당일 행사장 구성 등에 대해 알아보세요',
      'nav.venue': '행사장 & 안전정보',
      'nav.about': '소개'
    },
  } as const;