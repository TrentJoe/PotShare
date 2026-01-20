/**
 * Navigation Component
 */
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navigation = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header>
      <div className="nav-container">
        <div className="logo-section">
          <Link to="/" className="logo-link">
            <img src="/logo.png" alt="PotShare" className="logo-img" />
            <h1>PotShare</h1>
          </Link>
        </div>

        <nav>
          {isAuthenticated ? (
            <>
              <Link to="/">Dashboard</Link>
              <span className="user-greeting">Welcome, {user?.username}</span>
              <button onClick={handleLogout} className="btn-link">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
