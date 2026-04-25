import MovieCard from './MovieCard'

export default function MovieRow({ title, movies }) {
  return (
    <div style={styles.row}>
      <h3 style={styles.title}>{title}</h3>
      <div style={styles.scroll}>
        {movies.map((m, i) => (
          <MovieCard key={i} movie={m} />
        ))}
      </div>
    </div>
  )
}

const styles = {
  row: { padding: '16px 48px' },
  title: { fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.5rem', marginBottom: '12px', letterSpacing: '1px' },
  scroll: {
    display: 'flex',
    gap: '12px',
    overflowX: 'auto',
    paddingBottom: '16px',
    scrollbarWidth: 'thin',
    scrollbarColor: '#555 transparent',
  },
}
