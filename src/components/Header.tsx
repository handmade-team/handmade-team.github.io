'use client';

import { useState, useEffect } from 'react';

const navItems = ['HOME', 'ABOUT', 'PORTFOLIO', 'CREW', 'CONTACT'] as const;

export default function Header() {
  const [active, setActive] = useState('HOME');
  const [menuOpen, setMenuOpen] = useState(false);

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
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <header className='site-header'>
      <div className='header-inner'>
        <button type='button' className='logo-button' aria-label='맨 위로 이동' onClick={() => scrollTo('HOME')}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src='/logo.png' alt='가내수공업팀' />
        </button>

        <button
          type='button'
          className='menu-button'
          aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={menuOpen}
          aria-controls='site-nav'
          onClick={() => setMenuOpen(open => !open)}
        >
          <svg
            aria-hidden='true'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path d={menuOpen ? 'M5 5l14 14M19 5L5 19' : 'M3 6h18M3 12h18M3 18h18'} />
          </svg>
        </button>

        <nav id='site-nav' aria-label='주요 메뉴' className={`site-nav${menuOpen ? ' open' : ''}`}>
          {navItems.map(item => (
            <button
              key={item}
              type='button'
              className={`nav-link${active === item ? ' active' : ''}`}
              aria-current={active === item ? 'true' : undefined}
              onClick={() => scrollTo(item)}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
