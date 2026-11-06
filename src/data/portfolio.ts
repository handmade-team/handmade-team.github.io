export interface Work {
  streamer: string;
  title: string;
  /** public/portfolio/ 안의 파일명 */
  image: string;
  link?: string;
}

/** 오래된 순. 화면에는 최신순으로 표시 */
export const works: Work[] = [
  { streamer: '양띵TV', title: '악령술래잡기', image: '01-양띵TV-악령술래잡기.jpg' },
  { streamer: '양띵TV', title: '이터널어드벤쳐', image: '02-양띵TV-이터널어드벤쳐.jpg' },
  { streamer: '양띵TV', title: '공성전RPG', image: '03-양띵TV-공성전RPG.jpg' },
  { streamer: '양띵TV', title: '눈삼대전', image: '04-양띵TV-눈삼대전.jpg' },
  { streamer: '양띵TV', title: '퇴근타이쿤 커피한잔할래요', image: '05-양띵TV-퇴근타이쿤-커피한잔할래요.jpg' },
  { streamer: '양띵TV', title: '악령술래잡기2', image: '06-양띵TV-악령술래잡기2.jpg' },
  { streamer: '양띵TV', title: '갈통마피아', image: '07-양띵TV-갈통마피아.jpg' },
  { streamer: '양띵TV', title: '연지', image: '08-양띵TV-연지.jpg' },
  { streamer: '양띵TV', title: '선악과', image: '09-양띵TV-선악과.jpg' },
  { streamer: '양띵TV', title: '구스구스띵', image: '10-양띵TV-구스구스띵.jpg' },
  { streamer: '물초코', title: '여름방학초코고대운동회', image: '11-물초코-여름방학초코고대운동회.jpg' },
  { streamer: '가습기', title: '2025 일출서버', image: '12-가습기-2025-일출서버.png' },
  { streamer: '니즈', title: '경찰과도둑', image: '13-니즈-경찰과도둑.png' },
  { streamer: '물초코', title: '물징어게임', image: '14-물초코-물징어게임.jpg' },
  { streamer: '츠밍', title: '먼푸서버', image: '15-츠밍-먼푸서버.png' },
  { streamer: '스텔라이브', title: '2025 연말 컨텐츠', image: '16-스텔라이브-2025-연말-컨텐츠.jpg' },
  {
    streamer: '스텔라이브',
    title: '아야츠노 유니 3주년 콘텐츠',
    image: '17-스텔라이브-아야츠노-유니-3주년-콘텐츠.png',
  },
  { streamer: '홍신소', title: '창을내요 홍창의 숲', image: '18-홍신소-창을내요-홍창의-숲.png' },
];

export const workImage = (work: Work) => `/portfolio/${work.image}`;

/** 최신순 */
export const latestWorks = [...works].reverse();
