'use client'

import { useEffect, useRef, forwardRef } from 'react'
import { crewData, type CrewMember } from '@/data/crew'

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
            key={member.id}
            member={member}
            ref={(el) => { itemRefs.current[i] = el }}
          />
        ))}
      </div>
    </section>
  )
}

const CrewCard = forwardRef<HTMLDivElement, { member: CrewMember }>(
  ({ member }, ref) => {
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
            background: member.image
              ? `url(${member.image}) center/cover no-repeat`
              : 'linear-gradient(135deg, rgba(110,87,68,0.2) 0%, rgba(110,87,68,0.08) 100%)',
            border: '3px solid rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.8rem',
            color: '#999',
            transition: 'all 0.3s ease',
          }}
        >
          {!member.image && '[프로필 사진]'}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <div style={{ fontSize: '1.3rem', fontWeight: 600, color: '#2c2c2a' }}>
            {member.name}
          </div>
          {member.link && (
            <a
              href={member.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: 'rgba(0,0,0,0.05)',
                border: '1px solid rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.background = '#6E5744'
                el.style.borderColor = '#6E5744'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.background = 'rgba(0,0,0,0.05)'
                el.style.borderColor = 'rgba(0,0,0,0.1)'
              }}
              aria-label={`${member.name} 페이지`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#666', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => { (e.currentTarget as SVGElement).style.color = '#fff' }}
                onMouseLeave={(e) => { (e.currentTarget as SVGElement).style.color = '#666' }}
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            </a>
          )}
        </div>
        <div style={{ fontSize: '0.9rem', color: '#999' }}>
          {member.role}
        </div>
      </div>
    )
  }
)
CrewCard.displayName = 'CrewCard'
