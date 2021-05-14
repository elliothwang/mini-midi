import "./NavBar.css";
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut () {
    userService.logOut();
    setUser(null);
  }

  function openSideNav () {
    document.querySelector(".sideNav").style.width = "225px";
  }

  function closeSideNav () {
    document.querySelector(".sideNav").style.width = "0px";
  }

  return (
    <nav>
      <div className="welcome"><span>Welcome, <strong>{user.name}</strong>!</span></div>
      <div className="header">mini midi</div>
        <div className="sideNavOpenButton" onClick={ openSideNav }>
          <div className="sideNavOpenButtonLine1"></div>
          <div className="sideNavOpenButtonLine2"></div>
          <div className="sideNavOpenButtonLine3"></div>
        </div>
          <div className="sideNav">
            <Link to="/" onClick={ closeSideNav }>Home</Link>
            <Link to="/songs" onClick={ closeSideNav }>My Songs</Link>
            <div className="spacer"></div>
            <div className="sideNavCloseButton" onClick={ closeSideNav }>Close</div>
            <Link to="" onClick={handleLogOut}>Log Out</Link>
          </div>
    </nav>
  );
}