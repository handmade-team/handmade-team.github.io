'use client';

import { useEffect, useRef } from 'react';
import { latestWorks, workImage } from '@/data/portfolio';

export default function Portfolio() {
  const itemRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -30px 0px' }
    );
    itemRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id='portfolio' className='section portfolio'>
      <h2 className='section-title'>PORTFOLIO</h2>

      <div className='portfolio-grid'>
        {latestWorks.map((work, i) => (
          <article
            key={work.image}
            ref={el => {
              itemRefs.current[i] = el;
            }}
            className='work reveal'
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={workImage(work)} alt={`${work.streamer} ${work.title} 썸네일`} loading='lazy' />
            <h3 className='work-title'>{work.title}</h3>
            <p className='work-by'>{work.streamer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
