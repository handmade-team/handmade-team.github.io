'use client';

import { useEffect, useRef } from 'react';
import { avatarUrl, crewByGroup, type CrewMember } from '@/data/crew';

export default function Crew() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id='crew' className='section crew' ref={sectionRef}>
      <h2 className='section-title'>CREW</h2>

      <div className='crew-groups'>
        {crewByGroup.map(group => (
          <div key={group.key}>
            <h3 className='crew-group-title'>{group.name}</h3>
            <div className='crew-members'>
              {group.members.map(member => (
                <CrewCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CrewCard({ member }: { member: CrewMember }) {
  return (
    <div className='crew-card reveal'>
      <div className='crew-photo'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={member.mcName ? avatarUrl(member.mcName) : '/logo.png'}
          alt=''
          loading='lazy'
          className={member.mcName ? undefined : 'crew-photo-logo'}
        />
      </div>
      <div className='crew-name-row'>
        <div className='crew-name'>{member.name}</div>
        {member.link && (
          <a
            className='crew-link'
            href={member.link}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={`${member.name} 페이지`}
          >
            <svg
              aria-hidden='true'
              width='14'
              height='14'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71' />
              <path d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71' />
            </svg>
          </a>
        )}
      </div>
      <div className='crew-role'>{member.role}</div>
    </div>
  );
}
