'use client';

import { useEffect, useRef } from 'react';

const timelineData = [
  { year: '2017', content: '마인크래프트 외주 제작팀 "가내수공업팀" 신설' },
  { year: '2019', content: '양띵 TV 소속 제작팀 합류' },
  { year: '2024', content: 'SOOP 플랫폼을 중심으로 외주 활동 재개' },
];

const services = [
  '기획, 스토리',
  '서버 운영',
  '시스템 개발',
  '맵 제작, 건축',
  '3D 모델링',
  '디자인, 일러스트',
  'QA',
  '영상 편집',
  'BGM',
];

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
        {timelineData.map((item, i) => (
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
