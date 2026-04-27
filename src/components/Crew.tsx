'use client'

import { useEffect, useRef, forwardRef } from 'react'

const crewData = [
  { name: '팀원 1', role: '직책/역할' },
  { name: '팀원 2', role: '직책/역할' },
  { name: '팀원 3', role: '직책/역할' },
  { name: '팀원 4', role: '직책/역할' },
  { name: '팀원 5', role: '직책/역할' },
  { name: '팀원 6', role: '직책/역할' },
]

export default function Crew() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    itemRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="crew" style={{ padding: '8rem 5%', background: '#ffffff' }}>
      <h2 style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: '3.5rem',
        textAlign: 'center',
        marginBottom: '5rem',
        letterSpacing: '4px',
        color: '#2c2c2a',
      }}>
        CREW
      </h2>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '3rem',
      }}>
        {crewData.map((member, i) => (
          <CrewCard
            key={i}
            name={member.name}
            role={member.role}
            ref={(el) => { itemRefs.current[i] = el }}
          />
        ))}
      </div>
    </section>
  )
}

const CrewCard = forwardRef<HTMLDivElement, { name: string; role: string }>(
  ({ name, role }, ref) => {
    return (
      <div
        ref={ref}
        className="reveal"
        style={{ textAlign: 'center', transition: 'transform 0.3s ease', cursor: 'default' }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-8px)'
          const photo = e.currentTarget.querySelector('.crew-photo') as HTMLElement | null
          if (photo) {
            photo.style.borderColor = '#6E5744'
            photo.style.boxShadow = '0 0 30px rgba(110,87,68,0.3)'
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)'
          const photo = e.currentTarget.querySelector('.crew-photo') as HTMLElement | null
          if (photo) {
            photo.style.borderColor = 'rgba(0,0,0,0.1)'
            photo.style.boxShadow = 'none'
          }
        }}
      >
        <div
          className="crew-photo"
          style={{
            width: '160px',
            height: '160px',
            margin: '0 auto 1.5rem',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(110,87,68,0.2) 0%, rgba(110,87,68,0.08) 100%)',
            border: '3px solid rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.8rem',
            color: '#999',
            transition: 'all 0.3s ease',
          }}
        >
          [프로필 사진]
        </div>
        <div style={{ fontSize: '1.3rem', fontWeight: 600, color: '#2c2c2a', marginBottom: '0.5rem' }}>
          {name}
        </div>
        <div style={{ fontSize: '0.9rem', color: '#999' }}>
          {role}
        </div>
      </div>
    )
  }
)
CrewCard.displayName = 'CrewCard'
