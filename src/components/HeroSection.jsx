import { useNavigate } from 'react-router-dom'

export default function HeroSection() {
  const navigate = useNavigate()

  return (
    <div style={styles.hero}>
      <div style={styles.overlay} />
      <div style={styles.content}>
        <h1 style={styles.h1}>Unlimited movies, TV<br />shows and more.</h1>
        <p style={styles.sub}>Watch anywhere. Cancel anytime.</p>
        <p style={styles.cta}>Ready to watch? Enter your email to get started.</p>
        <div style={styles.row}>
          <input style={styles.input} type="email" placeholder="Email address" />
          <button style={styles.btn} onClick={() => navigate('/login')}>
            Get Started &rsaquo;
          </button>
        </div>
      </div>
    </div>
  )
}

const styles = {
  hero: {
    position: 'relative',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'url(https://assets.nflxext.com/ffe/siteui/vlv3signinui/d282d3d6-2202-4d5b-85da-8f3702aa71fa/web/IN-en-20240415-POP_SIGNUP_TWO_WEEKS-perspective_WEB_2c20f9a7-6c6b-4caa-8440-a4d8fd9b1e21_large.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    textAlign: 'center',
    borderBottom: '8px solid #222',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'rgba(0,0,0,0.6)',
  },
  content: { position: 'relative', zIndex: 1, padding: '0 20px', maxWidth: '700px' },
  h1: { fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(2.5rem, 7vw, 4.5rem)', letterSpacing: '1px', marginBottom: '16px' },
  sub: { fontSize: '1.5rem', marginBottom: '8px' },
  cta: { fontSize: '1.1rem', marginBottom: '24px', color: '#ddd' },
  row: { display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' },
  input: {
    padding: '14px 18px',
    fontSize: '15px',
    border: '1px solid #aaa',
    borderRadius: '4px',
    width: '320px',
    background: 'rgba(0,0,0,0.6)',
    color: 'white',
    outline: 'none',
  },
  btn: {
    padding: '14px 24px',
    background: '#E50914',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1.1rem',
    fontWeight: 600,
    cursor: 'pointer',
    fontFamily: 'Barlow, sans-serif',
  }
}
