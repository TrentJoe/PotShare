import './Auth.css'

function Login() {
  // TODO: You'll add useState for form data
  // TODO: You'll add form submission handler
  // TODO: You'll connect to your Flask backend

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>
        
        <form>
          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              placeholder="your.email@example.com"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="••••••••"
            />
          </div>

          <button type="submit" className="btn-primary">
            Login
          </button>
        </form>

        <p className="auth-footer">
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  )
}

export default Login
