import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'

const features = [
  {
    title: 'Enjoy on your TV.',
    desc: 'Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
    img: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png',
    reverse: false,
  },
  {
    title: 'Download your shows to watch offline.',
    desc: 'Save your favourites easily and always have something to watch.',
    img: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg',
    reverse: true,
  },
  {
    title: 'Watch everywhere.',
    desc: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
    img: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png',
    reverse: false,
  },
]

export default function LandingPage() {
  return (
    <div style={{ background: '#000' }}>
      <Navbar />
      <HeroSection />

      {features.map((f, i) => (
        <section key={i} style={{ ...styles.section, flexDirection: f.reverse ? 'row-reverse' : 'row' }}>
          <div style={styles.featureText}>
            <h2 style={styles.featureH2}>{f.title}</h2>
            <p style={styles.featureP}>{f.desc}</p>
          </div>
          <div style={styles.featureImg}>
            <img src={f.img} alt={f.title} style={{ width: '100%', borderRadius: '8px' }} />
          </div>
        </section>
      ))}

      <footer style={styles.footer}>
        <p style={{ color: '#808080' }}>© 2024 Netflix Clone — Built for educational purposes</p>
      </footer>
    </div>
  )
}

const styles = {
  section: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '48px',
    padding: '60px 10%',
    borderBottom: '8px solid #222',
    flexWrap: 'wrap',
  },
  featureText: { flex: 1, minWidth: '280px' },
  featureH2: { fontFamily: 'Bebas Neue, sans-serif', fontSize: '3rem', marginBottom: '16px' },
  featureP: { fontSize: '1.2rem', color: '#ddd', lineHeight: 1.6 },
  featureImg: { flex: 1, minWidth: '280px', maxWidth: '500px' },
  footer: { padding: '40px', textAlign: 'center', borderTop: '1px solid #222' },
}
