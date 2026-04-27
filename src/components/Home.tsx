'use client';

import { contentSlides } from '@/data/content';

const streamers = ['라율', '꾸르밍', '시스네'];

export default function HomeSection() {
  return (
    <section
      id='home'
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '8rem 5% 4rem',
        background: 'linear-gradient(135deg, #ffffff 0%, #f5f4f1 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* 배경 라디얼 그라데이션 */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 20% 50%, rgba(110,87,68,0.08) 0%, transparent 50%), ' +
            'radial-gradient(circle at 80% 80%, rgba(110,87,68,0.05) 0%, transparent 50%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ textAlign: 'center', zIndex: 2, maxWidth: '900px', width: '100%' }}>
        {/* 타이틀 */}
        <h1
          style={{
            fontFamily: "'Pretendard', sans-serif",
            fontSize: 'clamp(3.5rem, 8vw, 5rem)',
            letterSpacing: '4px',
            marginBottom: '1rem',
            fontWeight: 900,
            color: '#2c2c2a',
          }}
        >
          가내<span style={{ color: '#6E5744' }}>수공업</span>팀
        </h1>

        {/* 서브타이틀 */}
        <p style={{ fontSize: '1.5rem', color: '#666', marginBottom: '1rem', fontWeight: 300 }}>
          스트리머 전문 콘텐츠 제작팀
        </p>

        {/* Since */}
        <p
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '1.2rem',
            color: '#999',
            letterSpacing: '3px',
            marginBottom: '4rem',
          }}
        >
          Since 2017
        </p>

        {/* 콘텐츠 슬라이더 */}
        <div
          className='slider-wrapper'
          style={{
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto 4rem',
            overflow: 'hidden',
          }}
        >
          <div className='slider-track' style={{ display: 'flex', gap: '2rem' }}>
            {[...contentSlides, ...contentSlides].map((slide, i) => (
              <div
                key={i}
                style={{
                  minWidth: '300px',
                  height: '200px',
                  background: slide.thumbnail
                    ? `url(${slide.thumbnail}) center/cover no-repeat`
                    : 'linear-gradient(135deg, rgba(110,87,68,0.12) 0%, rgba(110,87,68,0.04) 100%)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.9rem',
                  color: '#999',
                  border: '1px solid rgba(0,0,0,0.08)',
                  flexShrink: 0,
                }}
              >
                {!slide.thumbnail && slide.title}
              </div>
            ))}
          </div>
        </div>

        {/* 제휴 스트리머 */}
        <div style={{ marginBottom: '3rem' }}>
          <h3
            style={{
              fontSize: '0.9rem',
              color: '#888',
              marginBottom: '1.5rem',
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}
          >
            제휴 스트리머
          </h3>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {streamers.map(name => (
              <StreamerName key={name} name={name} />
            ))}
          </div>
        </div>

        {/* SNS 아이콘 */}
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
          <SocialIcon label='Discord' href='#'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 127.14 96.36' width={24} height={24}>
              <path d='M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z' />
            </svg>
          </SocialIcon>
          <SocialIcon label='YouTube' href='#'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' width={24} height={24}>
              <path d='M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z' />
            </svg>
          </SocialIcon>
        </div>
      </div>
    </section>
  );
}

function StreamerName({ name }: { name: string }) {
  return (
    <span
      style={{ fontSize: '1.1rem', fontWeight: 500, color: '#aaa', transition: 'color 0.3s ease', cursor: 'pointer' }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.color = '#6E5744';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.color = '#aaa';
      }}
    >
      {name}
    </span>
  );
}

function SocialIcon({ label, href, children }: { label: string; href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      style={{
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        background: 'rgba(0,0,0,0.05)',
        border: '1px solid rgba(0,0,0,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget;
        el.style.background = '#6E5744';
        el.style.borderColor = '#6E5744';
        el.style.transform = 'translateY(-4px)';
        const svg = el.querySelector('svg');
        if (svg) svg.style.fill = '#fff';
      }}
      onMouseLeave={e => {
        const el = e.currentTarget;
        el.style.background = 'rgba(0,0,0,0.05)';
        el.style.borderColor = 'rgba(0,0,0,0.1)';
        el.style.transform = 'translateY(0)';
        const svg = el.querySelector('svg');
        if (svg) svg.style.fill = '#333';
      }}
    >
      <span style={{ display: 'flex', fill: '#333' }}>{children}</span>
    </a>
  );
}
