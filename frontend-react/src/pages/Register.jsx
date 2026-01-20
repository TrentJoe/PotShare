import './Auth.css'

function Register() {
  // TODO: You'll add useState for form data
  // TODO: You'll add form submission handler
  // TODO: You'll add password validation
  // TODO: You'll connect to your Flask backend

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create Account</h2>
        
        <form>
          <div className="form-group">
            <label>Username</label>
            <input 
              type="text" 
              placeholder="johndoe"
            />
          </div>

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

          <div className="form-group">
            <label>Confirm Password</label>
            <input 
              type="password" 
              placeholder="••••••••"
            />
          </div>

          <button type="submit" className="btn-primary">
            Register
          </button>
        </form>

        <p className="auth-footer">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  )
}

export default Register
