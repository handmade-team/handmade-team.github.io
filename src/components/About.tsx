'use client';

import { useEffect, useRef } from 'react';

import { services, timeline } from '@/data/team';

export default function About() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    itemRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id='about' className='section about'>
      <h2 className='section-title'>ABOUT</h2>

      <div className='timeline'>
        {timeline.map((item, i) => (
          <div
            key={item.year}
            ref={el => {
              itemRefs.current[i] = el;
            }}
            className='timeline-row reveal'
          >
            <div className='timeline-year'>{item.year}</div>
            <p className='timeline-text'>{item.content}</p>
          </div>
        ))}
      </div>

      <ul className='service-list' aria-label='제작 분야'>
        {services.map(service => (
          <li key={service}>{service}</li>
        ))}
      </ul>
    </section>
  );
}
