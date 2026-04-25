import { useNavigate } from 'react-router-dom'
import MovieRow from '../components/MovieRow'

const LOGO = 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'

const trending = [
  { title: 'Stranger Things', poster: '/8IB2e4r4oVhHnANbnm7O3Tj6tF8.jpg', rating: '8.7' },
  { title: 'Wednesday', poster: '/9PFonBhy4cQy7Jz20NpMygczOkv.jpg', rating: '8.1' },
  { title: 'The Crown', poster: '/72lBMmOv8sDAfivAVFZBBbYfixA.jpg', rating: '8.6' },
  { title: 'Bridgerton', poster: '/luoKpgVwi1E5nQsi7W0UuKHu2Rq.jpg', rating: '7.3' },
  { title: 'Squid Game', poster: '/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg', rating: '8.0' },
  { title: 'Ozark', poster: '/pCGyPVrI9Fzc6UKvtFAjRougYXo.jpg', rating: '8.4' },
]

const action = [
  { title: 'Extraction', poster: '/qhdeL2amcEZQ5FlzKp78YgeHnKb.jpg', rating: '6.7' },
  { title: 'The Gray Man', poster: '/uVkJpUJUJ1FGMpz3UKdHdSoUBY5.jpg', rating: '6.5' },
  { title: 'Red Notice', poster: '/wdE6ewaKZHr62bLqCn7A2DiGShm.jpg', rating: '6.4' },
  { title: 'Army of the Dead', poster: '/ej7eIVCFouU3ZUqKSRVMbWQ61pm.jpg', rating: '5.7' },
  { title: 'Bright', poster: '/mwT98SCNvjE7QIDcHGUmqRGCPLa.jpg', rating: '6.3' },
  { title: 'Spenser Confidential', poster: '/9nVMNGRWzJ3FrTnm5cPTLFXFHbS.jpg', rating: '6.2' },
]

const comedy = [
  { title: 'Murder Mystery', poster: '/iOFRXbFQVB5SHD2HwBiLrOSQLGM.jpg', rating: '6.0' },
  { title: 'Emily in Paris', poster: '/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg', rating: '7.0' },
  { title: 'The Politician', poster: '/6vgNfBNJNBB4JWwi1gBiRoLOgid.jpg', rating: '7.0' },
  { title: 'Young Royals', poster: '/8Vt6mWEReuy1ZVLiM4d3JmPrSmI.jpg', rating: '8.1' },
  { title: 'Partner Track', poster: '/7RSvLCs7dYUoOBMFGBMZFjJy9vy.jpg', rating: '5.9' },
  { title: 'Never Have I Ever', poster: '/oOlOhbWB2G8NWXB18yP08VF0aH.jpg', rating: '7.9' },
]

export default function BrowsePage() {
  const navigate = useNavigate()

  return (
    <div style={styles.page}>
      {/* Navbar */}
      <nav style={styles.nav}>
        <img src={LOGO} alt="Netflix" style={styles.logo} onClick={() => navigate('/')} />
        <div style={styles.navLinks}>
          {['Home', 'TV Shows', 'Movies', 'New & Popular', 'My List'].map(l => (
            <span key={l} style={styles.navLink}>{l}</span>
          ))}
        </div>
        <div style={styles.avatar}>A</div>
      </nav>

      {/* Featured Banner */}
      <div style={styles.banner}>
        <div style={styles.bannerOverlay} />
        <div style={styles.bannerContent}>
          <p style={styles.bannerTag}>🔥 #1 in India Today</p>
          <h1 style={styles.bannerTitle}>Stranger Things</h1>
          <p style={styles.bannerDesc}>
            When a boy vanishes, a small town uncovers a mystery involving secret experiments,
            terrifying supernatural forces, and one strange little girl.
          </p>
          <div style={styles.bannerBtns}>
            <button style={styles.playBtn}>▶ Play</button>
            <button style={styles.infoBtn}>ℹ More Info</button>
          </div>
        </div>
      </div>

      {/* Movie Rows */}
      <div style={{ paddingTop: '20px' }}>
        <MovieRow title="🔥 Trending Now" movies={trending} />
        <MovieRow title="💥 Action & Adventure" movies={action} />
        <MovieRow title="😂 Comedies" movies={comedy} />
      </div>
    </div>
  )
}

const styles = {
  page: { background: '#141414', minHeight: '100vh', color: 'white' },
  nav: {
    position: 'fixed',
    top: 0, left: 0, right: 0,
    display: 'flex',
    alignItems: 'center',
    gap: '32px',
    padding: '16px 48px',
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.9), transparent)',
    zIndex: 100,
  },
  logo: { height: 28, cursor: 'pointer', flexShrink: 0 },
  navLinks: { display: 'flex', gap: '20px' },
  navLink: { fontSize: '14px', color: '#e5e5e5', cursor: 'pointer', transition: 'color 0.2s' },
  avatar: {
    marginLeft: 'auto',
    background: '#E50914',
    width: '36px',
    height: '36px',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 700,
    fontSize: '16px',
    cursor: 'pointer',
  },
  banner: {
    position: 'relative',
    height: '85vh',
    backgroundImage: 'url(https://assets.nflxext.com/ffe/siteui/vlv3signinui/d282d3d6-2202-4d5b-85da-8f3702aa71fa/web/IN-en-20240415-POP_SIGNUP_TWO_WEEKS-perspective_WEB_2c20f9a7-6c6b-4caa-8440-a4d8fd9b1e21_large.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
  },
  bannerOverlay: {
    position: 'absolute', inset: 0,
    background: 'linear-gradient(to right, rgba(0,0,0,0.85) 40%, transparent), linear-gradient(to top, #141414 5%, transparent 50%)',
  },
  bannerContent: { position: 'absolute', bottom: '30%', left: '48px', maxWidth: '500px' },
  bannerTag: { fontSize: '13px', color: '#E50914', fontWeight: 700, marginBottom: '10px' },
  bannerTitle: { fontFamily: 'Bebas Neue, sans-serif', fontSize: '4rem', letterSpacing: '2px', marginBottom: '16px' },
  bannerDesc: { fontSize: '15px', color: '#ddd', lineHeight: 1.6, marginBottom: '24px' },
  bannerBtns: { display: 'flex', gap: '12px' },
  playBtn: {
    padding: '12px 28px',
    background: 'white',
    color: 'black',
    border: 'none',
    borderRadius: '4px',
    fontWeight: 700,
    fontSize: '16px',
    cursor: 'pointer',
    fontFamily: 'Barlow, sans-serif',
  },
  infoBtn: {
    padding: '12px 28px',
    background: 'rgba(109,109,110,0.7)',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontWeight: 700,
    fontSize: '16px',
    cursor: 'pointer',
    fontFamily: 'Barlow, sans-serif',
  },
}