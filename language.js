(() => {
  'use strict';
  const translations = {
    '본문으로 건너뛰기': 'Skip to content',
    'PSL Mining 홈': 'PSL Mining home',
    '주요 메뉴': 'Main navigation',
    '앱 소개': 'About',
    '마일스톤': 'Milestones',
    '고객지원': 'Support',
    '커뮤니티 ↗': 'Community ↗',
    'ANDROID · 출시 준비 중': 'ANDROID · COMING SOON',
    '지구 어딘가,': 'Somewhere on Earth,',
    '나의 광산을': 'a mine awaits',
    '찾아서.': 'your discovery.',
    '세계 지도를 탐색하고, 나만의 채굴 기록을 남기세요.': 'Explore the world map and keep your own mining records.',
    '작은 발견이 새로운 탐험의 시작이 됩니다.': 'Every small discovery is the start of a new adventure.',
    'PSL Mining 알아보기': 'Discover PSL Mining',
    'Google Play 출시 소식은 커뮤니티에서 안내합니다.': 'Visit our community for Google Play launch updates.',
    '보라색 배경 위 곡괭이와 광산 입구가 그려진 PSL 앱 아이콘': 'PSL app icon featuring a pickaxe and a mine entrance on a purple background',
    '지도를 펼치면': 'Open the map.',
    '탐험이 시작됩니다.': 'Your adventure begins.',
    '탐색부터 기록까지,': 'From exploring to recording,',
    '나만의 속도로.': 'at your own pace.',
    '지도에서 발견하기': 'Discover on the map',
    '지도를 확대하고 이동하며 광산 구역을 선택하세요. 탐험한 곳과 완료한 광산을 다시 살펴볼 수 있습니다.': 'Zoom and move around the map to choose a mining area. Revisit places you have explored and mines you have completed.',
    '채굴 여정 이어가기': 'Continue your mining journey',
    '시간에 따라 진행되는 채굴 현황을 확인하세요. 24시간마다 다시 활성화하며 여정을 이어갑니다.': 'Track your mining progress over time. Reactivate every 24 hours to continue your journey.',
    '인증서로 남기기': 'Keep a certificate',
    '완료한 광산의 인증서를 확인하세요. 선택형 광고로 이용하는 프리미엄 인증서는 이름과 사진으로 꾸미고 저장·공유할 수 있습니다.': 'View certificates for completed mines. Premium certificates, available through optional ads, can be personalized with your name and photo, saved, and shared.',
    '서비스 안내': 'Service information',
    '채굴 진행률은 서버에서 계산하며 휴대전화에서 암호화폐 연산 채굴을 수행하지 않습니다. PSL은 SASEUL 블록체인 기반 토큰입니다. 지급은 서비스의 신청·검토 절차에 따라 처리되며 토큰의 가치나 수익은 보장되지 않습니다. 인증서용 보상 광고는 채굴 속도나 PSL 잔액을 늘리지 않습니다.': 'Mining progress is calculated on the server; your phone does not perform cryptocurrency mining computations. PSL is a token on the SASEUL blockchain. Distribution is subject to the service’s application and review process. Token value and returns are not guaranteed. Rewarded ads for certificates do not increase mining speed or your PSL balance.',
    'PSL의 발자취와 앞으로의 개발 계획을 확인하세요.': 'Explore PSL’s achievements and upcoming development plans.',
    '완료': 'Done',
    '진행중': 'In progress',
    '예정': 'Planned',
    'PSL 토큰 발행 완료': 'PSL token issuance completed',
    '토큰확인': 'View token',
    '(새 탭)': '(new tab)',
    '스마트 컨트랙트 주소': 'Smart contract address',
    'PSL 토큰 지갑 개발 및 배포 완료': 'PSL token wallet developed and released',
    '다운로드': 'Download',
    'PSL 토큰 채굴 앱 개발 진행 중...': 'PSL token mining app in development...',
    '위치기반 PSL 토큰 P2P 거래 앱 개발 예정': 'Location-based PSL token P2P trading app planned',
    '소식도, 궁금한 점도': 'News and questions,',
    '여기에서.': 'all in one place.',
    '앱 소식을 확인하고 사용 경험을 나눠주세요.': 'Get app updates and share your experience.',
    '계정 관련 문의는 이메일로 보내주세요.': 'For account questions, please email us.',
    '공지 · 커뮤니티': 'Updates · Community',
    '소득자유 네이버 카페': 'Income Freedom · Naver Cafe',
    '새로운 소식과 이용 안내': 'Latest news and guides',
    '영상 채널': 'Video channel',
    '소득자유 유튜브': 'Income Freedom · YouTube',
    '영상으로 만나는 이야기': 'Discover our stories on video',
    '이메일 문의': 'Email us',
    '개인정보와 계정 관리가 궁금하신가요?': 'Questions about privacy or managing your account?',
    '계정 및 데이터 삭제 안내 →': 'Account and data deletion guide →',
    '운영 · Gaebal2': 'Operated by Gaebal2',
    '개인정보처리방침': 'Privacy Policy',
    '이용약관': 'Terms of Service',
    '계정 및 데이터 삭제': 'Account and data deletion',
    'PSL Mining | 나만의 광산 탐험': 'PSL Mining | Your mining adventure',
    'PSL Mining 공식 안내. 앱 소식, 고객지원과 개인정보 안내를 확인하세요.': 'Official PSL Mining information. Find app updates, support, and privacy information.'
  };
  const normalize = value => value.replace(/\s+/g, ' ').trim();
  // Retain the original text nodes so switching languages preserves icons and links.
  const entries = [];
  const walker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node.parentElement.closest('script, style, .language-toggle')) continue;
    const english = translations[normalize(node.nodeValue)];
    if (english) entries.push({ node, korean: node.nodeValue, english: ` ${english} ` });
  }
  const attributes = [];
  document.querySelectorAll('[aria-label], [alt], meta[name="description"]').forEach(node => {
    for (const attribute of ['aria-label', 'alt', 'content']) {
      const korean = node.getAttribute(attribute);
      if (korean && translations[normalize(korean)]) {
        attributes.push({ node, attribute, korean, english: translations[normalize(korean)] });
      }
    }
  });
  const button = document.querySelector('.language-toggle');
  function setLanguage(language) {
    const english = language === 'en';
    document.documentElement.lang = english ? 'en' : 'ko';
    entries.forEach(entry => { entry.node.nodeValue = english ? entry.english : entry.korean; });
    attributes.forEach(entry => entry.node.setAttribute(entry.attribute, english ? entry.english : entry.korean));
    button.setAttribute('aria-pressed', String(english));
    button.setAttribute('aria-label', english ? '한국어로 전환' : 'Switch to English');
    try { localStorage.setItem('psl-language', english ? 'en' : 'ko'); } catch { /* Storage may be disabled. */ }
  }
  let initialLanguage = 'ko';
  try { initialLanguage = localStorage.getItem('psl-language') === 'en' ? 'en' : 'ko'; } catch { /* Use Korean by default. */ }
  setLanguage(initialLanguage);
  button.hidden = false;
  button.addEventListener('click', () => setLanguage(document.documentElement.lang === 'ko' ? 'en' : 'ko'));
})();
