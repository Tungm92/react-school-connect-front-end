import { Link } from 'react-router-dom';
import './NavBar.css'


const NavBar = ({ user, handleSignout }) => {
    return (
      <>
        { user ? (
          <nav>
            <ul className="nav-bar">
            <div className="title">
                <h1>SchoolConnect.</h1>
            </div>
            <div className="links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/mylogs">All Logs</Link></li>
              <li><Link to="/students">Students</Link></li>
              <li><Link to="/students/new">Add Students</Link></li>
              <li><Link to="" onClick={handleSignout}>Sign Out</Link></li>
            </div>
            </ul>
          </nav>
        ) : (
          <nav>
            <ul className="nav-bar">
              <div className="title">
                <h1>SchoolConnect.</h1>
              </div>
              <div className="links">
                <li><Link to="/signin">Sign In</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
              </div>
            </ul>
          </nav>
        )}
      </>
    )
  }

export default NavBar;
