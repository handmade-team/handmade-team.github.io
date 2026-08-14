# 가내수공업팀 공식 웹사이트

스트리머 전문 콘텐츠 제작팀 **가내수공업팀**의 공식 웹사이트입니다.

## 🔗 배포 주소

https://handmade-team.github.io

---

## 🛠 기술 스택

| 분류 | 기술 |
|------|------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| 배포 | GitHub Pages (GitHub Actions) |

---

## 📁 프로젝트 구조

```
src/
├── app/
│   ├── layout.tsx       # 루트 레이아웃
│   ├── page.tsx         # 메인 페이지
│   └── globals.css      # 전역 스타일
├── components/
│   ├── Header.tsx       # 고정 헤더 + 네비게이션
│   ├── Home.tsx         # HOME 섹션 (슬라이더, 스트리머, SNS)
│   ├── About.tsx        # ABOUT 섹션 (타임라인)
│   ├── Portfolio.tsx    # PORTFOLIO 섹션 (그리드)
│   ├── Crew.tsx         # CREW 섹션 (팀원 카드)
│   ├── Contact.tsx      # CONTACT 섹션
│   └── Footer.tsx       # 푸터
└── data/
    ├── crew.ts          # 팀원 데이터
    └── content.ts       # 슬라이더 + 포트폴리오 데이터

public/
├── logo.png             # 팀 로고
├── content/             # HOME 슬라이더 썸네일
├── portfolio/           # 포트폴리오 이미지
└── crew/                # 팀원 프로필 사진
```

---

## 🖼 이미지 추가 방법

| 폴더 | 파일명 규칙 | 용도 |
|------|------------|------|
| `public/content/` | `thumbnail1.jpg` ~ `thumbnail6.jpg` | HOME 슬라이더 |
| `public/portfolio/` | `item1.jpg` ~ `item20.jpg` | PORTFOLIO 그리드 |
| `public/crew/` | `member1.jpg` ~ `member6.jpg` | CREW 프로필 사진 |

---

## ✏️ 데이터 수정 방법

**팀원 정보** — `src/data/crew.ts`
```ts
{ id: 1, name: '이름', role: '역할', image: '/crew/member1.jpg', link: 'https://...' }
```

**포트폴리오** — `src/data/content.ts`
```ts
{ id: 1, title: '제목', image: '/portfolio/item1.jpg', link: 'https://...' }
```

---

## 💻 로컬 실행

```bash
npm install
npm run dev
# http://localhost:3000
```

## 🚀 배포

`main` 브랜치에 push하면 GitHub Actions가 자동으로 빌드 & 배포합니다.
