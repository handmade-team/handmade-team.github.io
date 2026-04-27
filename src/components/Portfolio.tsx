'use client'

import { useEffect, useRef, forwardRef } from 'react'

const items = Array.from({ length: 20 }, (_, i) => `[콘텐츠 ${i + 1}]`)

export default function Portfolio() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -30px 0px' }
    )
    itemRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="portfolio" style={{ padding: '8rem 5%', background: '#f9f9f7' }}>
      <h2 style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: '3.5rem',
        textAlign: 'center',
        marginBottom: '5rem',
        letterSpacing: '4px',
        color: '#2c2c2a',
      }}>
        PORTFOLIO
      </h2>

      <div
        className="portfolio-grid"
        style={{
          maxWidth: '1600px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '1.5rem',
        }}
      >
        {items.map((label, i) => (
          <PortfolioItem
            key={i}
            label={label}
            ref={(el) => { itemRefs.current[i] = el }}
          />
        ))}
      </div>
    </section>
  )
}

const PortfolioItem = forwardRef<HTMLDivElement, { label: string }>(({ label }, ref) => {
  return (
    <div
      ref={ref}
      className="reveal"
      style={{
        aspectRatio: '16/9',
        background: 'linear-gradient(135deg, rgba(110,87,68,0.15) 0%, rgba(110,87,68,0.05) 100%)',
        borderRadius: '8px',
        border: '1px solid rgba(0,0,0,0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.85rem',
        color: '#999',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        padding: '1rem',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.transform = 'translateY(-8px)'
        el.style.boxShadow = '0 12px 30px rgba(110,87,68,0.2)'
        el.style.borderColor = '#6E5744'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.transform = 'translateY(0)'
        el.style.boxShadow = 'none'
        el.style.borderColor = 'rgba(0,0,0,0.08)'
      }}
    >
      {label}
    </div>
  )
})
PortfolioItem.displayName = 'PortfolioItem'
