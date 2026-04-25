import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginForm() {
  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(true)
  const [form, setForm] = useState({ email: '', password: '', name: '' })
  const [error, setError] = useState('')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.email || !form.password) {
      setError('Please fill in all fields.')
      return
    }
    setError('')
    navigate('/browse')
  }

  return (
    <div style={styles.card}>
      <h2 style={styles.title}>{isLogin ? 'Sign In' : 'Sign Up'}</h2>

      {error && <p style={styles.error}>{error}</p>}

      <form onSubmit={handleSubmit} style={styles.form}>
        {!isLogin && (
          <input
            style={styles.input}
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
          />
        )}
        <input
          style={styles.input}
          name="email"
          type="email"
          placeholder="Email or phone number"
          value={form.email}
          onChange={handleChange}
        />
        <input
          style={styles.input}
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <button type="submit" style={styles.btn}>
          {isLogin ? 'Sign In' : 'Sign Up'}
        </button>
      </form>

      <p style={styles.toggle}>
        {isLogin ? 'New to Netflix? ' : 'Already have an account? '}
        <span style={styles.link} onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Sign up now.' : 'Sign in.'}
        </span>
      </p>
    </div>
  )
}

const styles = {
  card: {
    background: 'rgba(0,0,0,0.75)',
    padding: '60px 68px',
    borderRadius: '8px',
    width: '100%',
    maxWidth: '450px',
  },
  title: { fontFamily: 'Bebas Neue, sans-serif', fontSize: '2.2rem', marginBottom: '28px', letterSpacing: '1px' },
  form: { display: 'flex', flexDirection: 'column', gap: '16px' },
  input: {
    padding: '16px',
    background: '#333',
    border: '1px solid #444',
    borderRadius: '4px',
    color: 'white',
    fontSize: '16px',
    outline: 'none',
    fontFamily: 'Barlow, sans-serif',
  },
  btn: {
    padding: '16px',
    background: '#E50914',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    fontWeight: 700,
    cursor: 'pointer',
    fontFamily: 'Barlow, sans-serif',
    marginTop: '8px',
  },
  toggle: { marginTop: '20px', color: '#aaa', fontSize: '15px' },
  link: { color: 'white', cursor: 'pointer', fontWeight: 600 },
  error: { color: '#E87C03', background: '#3d3309', padding: '10px', borderRadius: '4px', marginBottom: '12px', fontSize: '14px' },
}
