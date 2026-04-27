export interface ContentSlide {
  id: number;
  title: string;
  thumbnail?: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  image?: string;
  link?: string;
}

export const contentSlides: ContentSlide[] = [
  { id: 1, title: '콘텐츠 썸네일 1', thumbnail: '/content/thumbnail1.jpg' },
  { id: 2, title: '콘텐츠 썸네일 2', thumbnail: '/content/thumbnail2.jpg' },
  { id: 3, title: '콘텐츠 썸네일 3', thumbnail: '/content/thumbnail3.jpg' },
  { id: 4, title: '콘텐츠 썸네일 4', thumbnail: '/content/thumbnail4.jpg' },
  { id: 5, title: '콘텐츠 썸네일 5', thumbnail: '/content/thumbnail5.jpg' },
  { id: 6, title: '콘텐츠 썸네일 6', thumbnail: '/content/thumbnail6.jpg' },
];

export const portfolioItems: PortfolioItem[] = [
  { id: 1, title: '양띵TV 악령술래잡기', image: '/portfolio/01-양띵TV-악령술래잡기.jpg' },
  { id: 2, title: '양띵TV 이터널어드벤쳐', image: '/portfolio/02-양띵TV-이터널어드벤쳐.jpg' },
  { id: 3, title: '양띵TV 공성전RPG', image: '/portfolio/03-양띵TV-공성전RPG.jpg' },
  { id: 4, title: '양띵TV 눈삼대전', image: '/portfolio/04-양띵TV-눈삼대전.jpg' },
  { id: 5, title: '양띵TV 퇴근타이쿤 커피한잔할래요', image: '/portfolio/05-양띵TV-퇴근타이쿤-커피한잔할래요.jpg' },
  { id: 6, title: '양띵TV 악령술래잡기2', image: '/portfolio/06-양띵TV-악령술래잡기2.jpg' },
  { id: 7, title: '양띵TV 갈통마피아', image: '/portfolio/07-양띵TV-갈통마피아.jpg' },
  { id: 8, title: '양띵TV 연지', image: '/portfolio/08-양띵TV-연지.jpg' },
  { id: 9, title: '양띵TV 선악과', image: '/portfolio/09-양띵TV-선악과.jpg' },
  { id: 10, title: '양띵TV 구스구스띵', image: '/portfolio/10-양띵TV-구스구스띵.jpg' },
  { id: 11, title: '물초코 여름방학초코고대운동회', image: '/portfolio/11-물초코-여름방학초코고대운동회.jpg' },
  { id: 12, title: '가습기 2025 일출서버', image: '/portfolio/12-가습기-2025-일출서버.png' },
  { id: 13, title: '니즈 경찰과도둑', image: '/portfolio/13-니즈-경찰과도둑.jpg' },
  { id: 14, title: '물초코 물징어게임', image: '/portfolio/14-물초코-물징어게임.jpg' },
  { id: 15, title: '츠밍 먼푸서버', image: '/portfolio/15-츠밍-먼푸서버.png' },
  { id: 16, title: '스텔라이브 2025 연말 컨텐츠', image: '/portfolio/16-스텔라이브-2025-연말-컨텐츠.jpg' },
  { id: 17, title: '스텔라이브 아야츠노 유니 3주년 콘텐츠', image: '/portfolio/17-스텔라이브-아야츠노-유니-3주년-콘텐츠.png' },
  { id: 18, title: '홍신소 창을내요 홍창의 숲', image: '/portfolio/18-홍신소-창을내요-홍창의-숲.png' },
];
