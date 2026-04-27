'use client'

import { useEffect, useRef } from 'react'

const timelineData = [
  { year: '2017', content: '마인크래프트 외주 제작팀 "가내수공업팀" 신설' },
  { year: '2019', content: '양띵 TV 소속 제작팀 합류' },
  { year: '2024', content: 'SOOP 플랫폼을 중심으로 외주 활동 재개' },
]

export default function About() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    itemRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" style={{ padding: '8rem 5%', background: '#ffffff' }}>
      <h2 style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: '3.5rem',
        textAlign: 'center',
        marginBottom: '5rem',
        letterSpacing: '4px',
        color: '#2c2c2a',
      }}>
        ABOUT
      </h2>

      {/* 타임라인 */}
      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>

        {/* 중앙 세로선 */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          bottom: 0,
          width: '2px',
          background: 'linear-gradient(180deg, #6E5744 0%, #8a7462 100%)',
          transform: 'translateX(-50%)',
        }} />

        {timelineData.map((item, i) => {
          const isEven = i % 2 === 1
          return (
            <div
              key={item.year}
              ref={(el) => { itemRefs.current[i] = el }}
              className="reveal"
              style={{
                display: 'flex',
                flexDirection: isEven ? 'row-reverse' : 'row',
                marginBottom: '4rem',
                position: 'relative',
              }}
            >
              {/* 연도 */}
              <div style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '3rem',
                color: '#6E5744',
                flex: 1,
                textAlign: isEven ? 'left' : 'right',
                paddingRight: isEven ? 0 : '3rem',
                paddingLeft: isEven ? '3rem' : 0,
                letterSpacing: '2px',
              }}>
                {item.year}
              </div>

              {/* 중앙 점 */}
              <div style={{
                width: '20px',
                height: '20px',
                background: '#6E5744',
                borderRadius: '50%',
                position: 'absolute',
                left: '50%',
                top: '1rem',
                transform: 'translateX(-50%)',
                boxShadow: '0 0 20px rgba(110,87,68,0.5)',
                zIndex: 2,
              }} />

              {/* 내용 */}
              <div style={{
                flex: 1,
                paddingLeft: isEven ? 0 : '3rem',
                paddingRight: isEven ? '3rem' : 0,
                paddingTop: '0.5rem',
                textAlign: isEven ? 'right' : 'left',
              }}>
                <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: 1.8 }}>
                  {item.content}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
