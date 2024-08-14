import { Link } from 'react-router-dom';
import './NavBar.css'


const NavBar = ({ user, handleSignout }) => {
    return (
      <>
        { user ? (
          <nav>
            <ul className="nav-bar">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">All Logs</Link></li>
              <li><Link to="/students">Students</Link></li>
              <li><Link to="/students/new">Add Students</Link></li>
              <li><Link to="" onClick={handleSignout}>Sign Out</Link></li>
            </ul>
          </nav>
        ) : (
          <nav>
            <ul className="nav-bar">
              <li><Link to="/signin">Sign In</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
            </ul>
          </nav>
        )}
      </>
    )
  }

export default NavBar;
