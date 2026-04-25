import { useState } from 'react'

export default function MovieCard({ movie }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      style={{ ...styles.card, transform: hovered ? 'scale(1.08)' : 'scale(1)' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster}`}
        alt={movie.title}
        style={styles.img}
        onError={(e) => { e.target.src = 'https://via.placeholder.com/200x300/141414/E50914?text=No+Image' }}
      />
      {hovered && (
        <div style={styles.overlay}>
          <p style={styles.movieTitle}>{movie.title}</p>
          <div style={styles.actions}>
            <button style={styles.playBtn}>▶ Play</button>
            <button style={styles.iconBtn}>+</button>
            <button style={styles.iconBtn}>👍</button>
          </div>
          <p style={styles.rating}>⭐ {movie.rating}</p>
        </div>
      )}
    </div>
  )
}

const styles = {
  card: {
    position: 'relative',
    borderRadius: '6px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'transform 0.25s ease',
    flexShrink: 0,
    width: '180px',
  },
  img: { width: '100%', height: '270px', objectFit: 'cover', display: 'block' },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, rgba(0,0,0,0.95) 60%, transparent)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: '12px',
  },
  movieTitle: { fontWeight: 600, fontSize: '13px', marginBottom: '8px', lineHeight: 1.3 },
  actions: { display: 'flex', gap: '6px', marginBottom: '6px' },
  playBtn: {
    background: 'white',
    color: 'black',
    border: 'none',
    borderRadius: '4px',
    padding: '4px 10px',
    fontWeight: 700,
    fontSize: '12px',
    cursor: 'pointer',
  },
  iconBtn: {
    background: 'rgba(255,255,255,0.2)',
    color: 'white',
    border: '1px solid #aaa',
    borderRadius: '50%',
    width: '28px',
    height: '28px',
    cursor: 'pointer',
    fontSize: '14px',
  },
  rating: { fontSize: '12px', color: '#46d369' },
}