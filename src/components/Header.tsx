'use client';

import { useState, useEffect } from 'react';

const navItems = ['HOME', 'ABOUT', 'PORTFOLIO', 'CREW', 'CONTACT'] as const;

export default function Header() {
  const [active, setActive] = useState('HOME');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const handleScroll = () => {
      let current = 'HOME';
      sections.forEach(section => {
        const el = section as HTMLElement;
        if (window.scrollY >= el.offsetTop - 200) {
          current = el.id.toUpperCase();
        }
      });
      setActive(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setActive(id);
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(10px)',
        padding: '1.5rem 5%',
        zIndex: 1000,
        borderBottom: '1px solid rgba(0,0,0,0.08)',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* 로고 */}
        <div style={{ cursor: 'pointer' }} onClick={() => scrollTo('HOME')}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src='/logo.png' alt='가내수공업팀' style={{ height: '60px', width: 'auto', display: 'block' }} />
        </div>

        {/* 네비게이션 */}
        <nav style={{ display: 'flex', gap: '3rem' }}>
          {navItems.map(item => (
            <NavLink key={item} label={item} active={active === item} onClick={() => scrollTo(item)} />
          ))}
        </nav>
      </div>
    </header>
  );
}

function NavLink({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        position: 'relative',
        color: active ? '#6E5744' : '#666',
        fontSize: '0.95rem',
        fontWeight: 500,
        letterSpacing: '1px',
        transition: 'color 0.3s ease',
        fontFamily: 'inherit',
      }}
    >
      {label}
      {/* 하단 밑줄 */}
      <span
        style={{
          position: 'absolute',
          bottom: '-6px',
          left: 0,
          height: '2px',
          width: active ? '100%' : '0',
          background: '#6E5744',
          transition: 'width 0.3s ease',
          display: 'block',
        }}
      />
    </button>
  );
}
