import { useNavigate } from 'react-router-dom'

const LOGO = 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'

export default function Navbar({ showSignIn = true }) {
  const navigate = useNavigate()

  return (
    <nav style={styles.nav}>
      <img src={LOGO} alt="Netflix" style={styles.logo} onClick={() => navigate('/')} />
      {showSignIn && (
        <button style={styles.btn} onClick={() => navigate('/login')}>Sign In</button>
      )}
    </nav>
  )
}

const styles = {
  nav: {
    position: 'absolute',
    top: 0, left: 0, right: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 48px',
    zIndex: 10,
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)',
  },
  logo: { height: 36, cursor: 'pointer' },
  btn: {
    background: '#E50914',
    color: 'white',
    border: 'none',
    padding: '8px 20px',
    borderRadius: '4px',
    fontFamily: 'Barlow, sans-serif',
    fontWeight: 600,
    fontSize: '15px',
    cursor: 'pointer',
  }
}
