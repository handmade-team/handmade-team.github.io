/** 크루 그룹. 배열 순서 = 화면 표시 순서 */
export const crewGroups = [
  { key: 'planning', name: '기획, 프로젝트 관리' },
  { key: 'dev', name: '시스템 개발' },
  { key: 'map', name: '맵 제작, 건축' },
  { key: 'modeling', name: '3D 모델링' },
  { key: 'design', name: '디자인, 일러스트' },
  { key: 'qa', name: 'QA, 서버 운영' },
  { key: 'media', name: '영상, 사운드' },
] as const;

export type CrewGroupKey = (typeof crewGroups)[number]['key'];

export interface CrewMember {
  name: string;
  group: CrewGroupKey;
  role: string;
  mcName?: string;
  link?: string;
}

export const crew: CrewMember[] = [
  // 기획, 프로젝트 관리
  {
    name: '다비(라율)',
    group: 'planning',
    role: '총괄 디렉터',
    mcName: 'G_DABI',
    link: 'https://www.sooplive.com/station/layule',
  },
  { name: '신빗', group: 'planning', role: '프로젝트 매니저', mcName: 'shinbit' },
  {
    name: '고랑',
    group: 'planning',
    role: '프로젝트 매니저, 서버',
    mcName: 'gotiger',
    link: 'https://go-tiger.notion.site/119972c9052046cdb6293746935ad64e',
  },
  {
    name: '연탄',
    group: 'planning',
    role: '프로젝트 매니저, 스킨, 3D모델링',
    mcName: 'N_TAN',
    link: 'https://tann00.creatorlink.net/%EC%8A%A4%ED%82%A8',
  },
  {
    name: '시스네',
    group: 'planning',
    role: '기획, 디자인',
    mcName: 'cisnes',
    link: 'https://www.notion.so/36da4dbd5aec8027a625ca1366d411e6?source=copy_link',
  },
  { name: '노네임', group: 'planning', role: '기획, 스토리', mcName: 'Dl0524' },

  // 시스템 개발
  { name: '다요', group: 'dev', role: '시스템 개발', mcName: 'Dayo05', link: 'https://pf.ddayo.me/' },
  {
    name: '깃터',
    group: 'dev',
    role: '시스템 개발',
    mcName: 'gitter_',
    link: 'https://pretty-diploma-193.notion.site/185fb412a9f7806b8c7af399d5bb7d75',
  },
  { name: '준우', group: 'dev', role: '시스템 개발', mcName: 'Zzunwoo' },
  { name: '앞니', group: 'dev', role: '시스템 개발' },
  { name: '시우(꽁플)', group: 'dev', role: '시스템 개발' },

  // 맵 제작, 건축
  {
    name: '하루',
    group: 'map',
    role: '맵 제작',
    mcName: 'ArtistKorea',
    link: 'https://www.youtube.com/@%EA%B1%B4%EC%B6%95%EC%84%A0%EC%83%9D%EA%B9%80%ED%95%98%EB%A3%A8',
  },
  { name: '좀비쒸', group: 'map', role: '맵 제작', mcName: 'ZomBieC39' },
  { name: '해물찜', group: 'map', role: '맵 제작', mcName: 'hemuljjim' },
  { name: '킨더스', group: 'map', role: '맵 제작', mcName: 'RFT_Kinders' },
  { name: '최뽀삐', group: 'map', role: '건축, 디자인' },

  // 3D 모델링
  {
    name: '홍띠',
    group: 'modeling',
    role: '3D 모델링',
    mcName: 'hongddi_',
    link: 'https://bsky.app/profile/did:plc:jjpovpplafouengdgmhqpqhy',
  },
  {
    name: '서리태',
    group: 'modeling',
    role: '3D 모델링',
    mcName: 'SEOLEETAE',
    link: 'https://sketchfab.com/Seoleetae',
  },

  // 디자인, 일러스트
  { name: '와비소', group: 'design', role: '디자인' },
  { name: '박유화', group: 'design', role: '디자인', mcName: 'YuHwa_' },
  { name: '카라멜', group: 'design', role: '디자인', mcName: 'abc_CARAMEL' },
  { name: '홍.', group: 'design', role: '디자인', mcName: 'HONG0000' },
  { name: '꾸르밍', group: 'design', role: '디자인', mcName: 'lwy2808' },
  { name: '츠양', group: 'design', role: '일러스트', mcName: 'ceuyang' },

  // QA, 서버 운영
  { name: '아스', group: 'qa', role: 'QA, 서버 운영', mcName: 'Lias_1g' },
  { name: '비트타는곰', group: 'qa', role: 'QA, 서버 운영', mcName: 'Elfail8591' },
  { name: '일오놈', group: 'qa', role: 'QA, 서버 운영', mcName: '15nom' },
  { name: '정이', group: 'qa', role: 'QA, 서버 운영', mcName: 'yumin0331' },

  // 영상, 사운드
  { name: '하빈', group: 'media', role: '영상 편집' },
  { name: '롤라드', group: 'media', role: 'BGM', mcName: 'lollade123' },
];

/** public/crew/ 에 저장된 머리 이미지. `npm run avatars` 로 받아온다 */
export const avatarUrl = (mcName: string) => `/crew/${mcName}.png`;

/** 그룹별로 묶은 크루 목록 (빈 그룹 제외) */
export const crewByGroup = crewGroups
  .map(group => ({ ...group, members: crew.filter(m => m.group === group.key) }))
  .filter(group => group.members.length > 0);
