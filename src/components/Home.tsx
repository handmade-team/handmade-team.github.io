import { contentSlides } from '@/data/content';

const streamers = ['라율', '츠밍', '꾸르밍', '시스네', '일오놈'];

export default function HomeSection() {
  return (
    <section id='home' className='hero'>
      <h1 className='hero-title'>가내수공업팀</h1>
      <p className='hero-sub'>스트리머를 위한 마인크래프트 콘텐츠 제작팀</p>
      <p className='hero-since'>Since 2017</p>

      <div className='hero-actions'>
        <a className='btn btn-main' href='#contact'>
          프로젝트 문의하기
        </a>
        <a className='btn btn-sub' href='#portfolio'>
          작품 보기
        </a>
      </div>

      <div className='slider-wrapper'>
        <div className='slider-track'>
          {[...contentSlides, ...contentSlides].map((slide, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={`${slide.id}-${i}`}
              src={slide.thumbnail}
              alt={i < contentSlides.length ? slide.title : ''}
              aria-hidden={i >= contentSlides.length}
            />
          ))}
        </div>
      </div>

      <h2 className='streamer-label'>제휴 스트리머</h2>
      <div className='streamer-list'>
        {streamers.map(name => (
          <span key={name}>{name}</span>
        ))}
      </div>
    </section>
  );
}
