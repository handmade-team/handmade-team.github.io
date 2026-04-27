export default function Footer() {
  return (
    <footer
      style={{
        padding: '3rem 5%',
        background: '#ffffff',
        textAlign: 'center',
        color: '#999',
        fontSize: '0.9rem',
        borderTop: '1px solid rgba(0,0,0,0.08)',
      }}
    >
      <p>
        &copy; 2017–{new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Seoul' })).getFullYear()}{' '}
        가내수공업팀. All Rights Reserved.
      </p>
    </footer>
  );
}
