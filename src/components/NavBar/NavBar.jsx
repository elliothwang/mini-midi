import "./NavBar.css";
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <div className="welcome"><span>Welcome, {user.name}!</span></div>
      <div className="dropdown">
        <div className="dropdownIcon"><img src="https://toppng.com/uploads/preview/menu-icon-png-3-lines-11552739310fjzs2n2wxt.png" alt="dropdown menu icon" /></div>
        <div className="dropdownContent">
          <Link to="/">Home</Link>
          <Link to="/songs">My Songs</Link>
          <Link to="" onClick={handleLogOut}>Log Out</Link>
        </div>
      </div>
    </nav>
  );
}