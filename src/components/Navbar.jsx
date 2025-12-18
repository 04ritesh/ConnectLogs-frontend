import { Link } from "react-router-dom";
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="nav" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/">ConnectLogs</Link>
        {user && <Link to="/create">Write Experience</Link>}
      </div>
      
      <div>
        {user ? (
          <div className="user-info">
            <span>Welcome, {user.firstName}</span>
            <button onClick={logout} className="logout-btn">
              Logout
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
