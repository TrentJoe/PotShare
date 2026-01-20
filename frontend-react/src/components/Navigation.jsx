import './Navigation.css'

function Navigation() {
  // TODO: You'll add authentication check
  // TODO: You'll add conditional rendering (show different links based on auth)
  // TODO: You'll add logout functionality

  return (
    <nav className="navigation">
      <div className="nav-brand">
        <h1>PotShare</h1>
      </div>
      
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </div>
    </nav>
  )
}

export default Navigation
