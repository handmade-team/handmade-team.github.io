'use client';

import { useEffect, useRef } from 'react';
import { portfolioItems } from '@/data/content';

const works = [...portfolioItems].reverse().map(item => {
  const [by, ...rest] = item.title.split(' ');
  return { ...item, by, name: rest.join(' ') };
});

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
        {works.map((work, i) => (
          <article
            key={work.id}
            ref={el => {
              itemRefs.current[i] = el;
            }}
            className='work reveal'
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={work.image} alt={`${work.title} 썸네일`} loading='lazy' />
            <h3 className='work-title'>{work.name}</h3>
            <p className='work-by'>{work.by}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
