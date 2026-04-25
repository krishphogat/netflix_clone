import Navbar from '../components/Navbar'
import LoginForm from '../components/LoginForm'

const BG = 'https://assets.nflxext.com/ffe/siteui/vlv3signinui/d282d3d6-2202-4d5b-85da-8f3702aa71fa/web/IN-en-20240415-POP_SIGNUP_TWO_WEEKS-perspective_WEB_2c20f9a7-6c6b-4caa-8440-a4d8fd9b1e21_large.jpg'

export default function LoginPage() {
  return (
    <div style={{ ...styles.page, backgroundImage: `url(${BG})` }}>
      <div style={styles.overlay} />
      <Navbar showSignIn={false} />
      <div style={styles.center}>
        <LoginForm />
      </div>
    </div>
  )
}

const styles = {
  page: {
    minHeight: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'rgba(0,0,0,0.55)',
  },
  center: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '20px',
  },
}
