'use client';

export default function Contact() {
  return (
    <section id='contact' style={{ padding: '3rem 5%', background: '#f9f9f7', textAlign: 'center' }}>
      <h2
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '3.5rem',
          textAlign: 'center',
          marginBottom: '2rem',
          letterSpacing: '4px',
          color: '#2c2c2a',
        }}
      >
        CONTACT
      </h2>

      <a
        href='mailto:contact@team-handmade.com'
        style={{
          display: 'inline-block',
          fontSize: '2rem',
          color: '#6E5744',
          textDecoration: 'none',
          marginTop: 0,
          padding: '1.5rem 3rem',
          border: '2px solid #6E5744',
          borderRadius: '50px',
          transition: 'all 0.3s ease',
          fontWeight: 500,
        }}
        onMouseEnter={e => {
          const el = e.currentTarget;
          el.style.background = '#6E5744';
          el.style.color = '#fff';
          el.style.transform = 'translateY(-4px)';
          el.style.boxShadow = '0 8px 25px rgba(110,87,68,0.3)';
        }}
        onMouseLeave={e => {
          const el = e.currentTarget;
          el.style.background = 'transparent';
          el.style.color = '#6E5744';
          el.style.transform = 'translateY(0)';
          el.style.boxShadow = 'none';
        }}
      >
        contact@team-handmade.com
      </a>
    </section>
  );
}
