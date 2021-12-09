import './NavBar.css';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  function openSideNav() {
    $('.sideNav').width('225px');
  }

  function closeSideNav() {
    $('.sideNav').width('0px');
  }

  return (
    <nav>
      <div className="header">
        <a href="/">mini midi</a>
      </div>
      <div className="sideNavOpenButton" onClick={openSideNav}>
        <div className="sideNavOpenButtonLine1"></div>
        <div className="sideNavOpenButtonLine2"></div>
        <div className="sideNavOpenButtonLine3"></div>
      </div>
      <div className="sideNav">
        <Link to="/" onClick={closeSideNav}>
          Home
        </Link>
        <Link to="/songs" onClick={closeSideNav}>
          My Songs
        </Link>
        <div className="spacer"></div>
        {user ? (
          <Link to="" onClick={handleLogOut}>
            Log Out
          </Link>
        ) : (
          <Link to="/auth" onClick={closeSideNav}>
            Log In
          </Link>
        )}
      </div>
    </nav>
  );
}
