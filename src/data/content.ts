export interface ContentSlide {
  id: number
  title: string
  thumbnail?: string
}

export interface PortfolioItem {
  id: number
  title: string
  image?: string
  link?: string
}

export const contentSlides: ContentSlide[] = [
  { id: 1, title: '콘텐츠 썸네일 1', thumbnail: '/content/thumbnail1.jpg' },
  { id: 2, title: '콘텐츠 썸네일 2', thumbnail: '/content/thumbnail2.jpg' },
  { id: 3, title: '콘텐츠 썸네일 3', thumbnail: '/content/thumbnail3.jpg' },
  { id: 4, title: '콘텐츠 썸네일 4', thumbnail: '/content/thumbnail4.jpg' },
  { id: 5, title: '콘텐츠 썸네일 5', thumbnail: '/content/thumbnail5.jpg' },
  { id: 6, title: '콘텐츠 썸네일 6', thumbnail: '/content/thumbnail6.jpg' },
]

export const portfolioItems: PortfolioItem[] = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: `콘텐츠 ${i + 1}`,
  image: `/portfolio/item${i + 1}.jpg`,
}))
