export interface CrewMember {
  id: number;
  name: string;
  role: string;
  image?: string;
  link?: string;
}

export const crewData: CrewMember[] = [
  {
    id: 1,
    name: '다비(라율)',
    role: '총괄 디렉터',
    image: 'https://cravatar.eu/helmhead/G_DABI/512',
    link: 'https://www.sooplive.com/station/layule',
  },
  { id: 2, name: '신빗', role: '프로젝트 매니저', image: 'https://cravatar.eu/helmhead/shinbit/512' },
  {
    id: 3,
    name: '고랑',
    role: '프로젝트 매니저, 서버',
    image: 'https://cravatar.eu/helmhead/gotiger/512',
    link: 'https://go-tiger.notion.site/119972c9052046cdb6293746935ad64e',
  },
  {
    id: 4,
    name: '연탄',
    role: '프로젝트 매니저, 스킨, 3D모델링',
    image: 'https://cravatar.eu/helmhead/N_TAN/512',
    link: 'https://tann00.creatorlink.net/%EC%8A%A4%ED%82%A8',
  },
  {
    id: 5,
    name: '다요',
    role: '시스템 개발',
    image: 'https://cravatar.eu/helmhead/Dayo05/512',
    link: 'https://pf.ddayo.me/',
  },
  {
    id: 6,
    name: '깃터',
    role: '시스템 개발',
    image: 'https://cravatar.eu/helmhead/gitter_/512',
    link: 'https://pretty-diploma-193.notion.site/185fb412a9f7806b8c7af399d5bb7d75',
  },
  {
    id: 7,
    name: '하루',
    role: '맵 제작',
    image: 'https://cravatar.eu/helmhead/ArtistKorea/512',
    link: 'https://www.youtube.com/@%EA%B1%B4%EC%B6%95%EC%84%A0%EC%83%9D%EA%B9%80%ED%95%98%EB%A3%A8',
  },
  { id: 8, name: '좀비쒸', role: '맵 제작', image: 'https://cravatar.eu/helmhead/ZomBieC39/512' },
  { id: 9, name: '준우', role: '시스템 개발', image: 'https://cravatar.eu/helmhead/Zzunwoo/512' },
  {
    id: 10,
    name: '시스네',
    role: '기획, 디자인',
    image: 'https://cravatar.eu/helmhead/cisnes/512',
    link: 'https://www.sooplive.com/station/sirohiru/board/121661269',
  },
  { id: 11, name: '해물찜', role: '맵 제작', image: 'https://cravatar.eu/helmhead/hemuljjim/512' },
  { id: 12, name: '킨더스', role: '맵 제작', image: 'https://cravatar.eu/helmhead/RFT_Kinders/512' },
  { id: 13, name: '노네임', role: '기획, 스토리', image: 'https://cravatar.eu/helmhead/Dl0524/512' },
  { id: 14, name: '아스', role: 'QA, 서버 운영', image: 'https://cravatar.eu/helmhead/Lias_1g/512' },
  { id: 15, name: '비트타는곰', role: 'QA, 서버 운영', image: 'https://cravatar.eu/helmhead/Elfail8591/512' },
  { id: 16, name: '일오놈', role: 'QA, 서버 운영', image: 'https://cravatar.eu/helmhead/15nom/512' },
  { id: 17, name: '정이', role: 'QA, 서버 운영', image: 'https://cravatar.eu/helmhead/yumin0331/512' },
  { id: 18, name: '하빈', role: '영상 편집', image: '/logo.png' },
  {
    id: 19,
    name: '홍띠',
    role: '3D 모델링',
    image: '/logo.png',
    link: 'https://bsky.app/profile/did:plc:jjpovpplafouengdgmhqpqhy',
  },
  {
    id: 20,
    name: '서리태',
    role: '3D 모델링',
    image: 'https://cravatar.eu/helmhead/SEOLEETAE/512',
    link: 'https://sketchfab.com/Seoleetae',
  },
  { id: 21, name: '앞니', role: '시스템 개발', image: '/logo.png' },
  { id: 22, name: '롤라드', role: 'BGM', image: 'https://cravatar.eu/helmhead/lollade/512' },
  { id: 23, name: '와비소', role: '디자인', image: '/logo.png' },
  { id: 24, name: '박유화', role: '디자인', image: '/logo.png' },
  { id: 25, name: '카라멜', role: '디자인', image: 'https://cravatar.eu/helmhead/abc_CARAMEL/512' },
  { id: 26, name: '최뽀삐', role: '건축, 디자인', image: '/logo.png' },
  { id: 27, name: '홍.', role: '디자인', image: '/logo.png' },
  { id: 28, name: '꾸르밍', role: '디자인', image: '/logo.png' },
  { id: 29, name: '츠양', role: '일러스트', image: '/logo.png' },
  { id: 30, name: '트잼', role: '시스템 개발', image: '/logo.png' },
  { id: 31, name: '시우(꽁플)', role: '시스템 개발', image: '/logo.png' },
];
