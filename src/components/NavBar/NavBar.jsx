import "./NavBar.css";
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut () {
    userService.logOut();
    setUser(null);
  }

  function openSideNav () {
    console.log('opening nav')
    document.querySelector(".sideNav").style.width = "250px";
  }

  function closeSideNav () {
    document.querySelector(".sideNav").style.width = "0px";
  }

  return (
    <nav>
      <div className="welcome"><span>Welcome, {user.name}!</span></div>
        <div className="sideNavOpenButton" onClick={ openSideNav }><img src="https://toppng.com/uploads/preview/menu-icon-png-3-lines-11552739310fjzs2n2wxt.png" alt="dropdown menu icon" /></div>
            <div className="sideNav">
              <Link to="/">Home</Link>
              <Link to="/songs">My Songs</Link>
              <div className="spacer"></div>
              <div className="sideNavCloseButton" onClick={ closeSideNav }>Close</div>
              <Link to="" onClick={handleLogOut}>Log Out</Link>
            </div>
    </nav>
  );
}