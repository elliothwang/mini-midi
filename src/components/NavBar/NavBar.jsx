import './NavBar.scss';
import $ from 'jquery';
import { NavLink } from 'react-router-dom';
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
        <a href="/">
          m<span className="pink">i</span>n<span className="purple">i</span> m
          <span className="blue">i</span>d<span className="pink">i</span>
        </a>
      </div>
      <div className="sideNavOpenButton" onClick={openSideNav}>
        <div className="line1"></div>
        <div></div>
        <div className="line3"></div>
      </div>
      <div className="sideNav">
        <NavLink
          to="/"
          exact
          className="link"
          activeClassName="active"
          onClick={closeSideNav}
        >
          Home
        </NavLink>
        <NavLink
          to="/songs"
          className="link"
          activeClassName="active"
          onClick={closeSideNav}
        >
          My Songs
        </NavLink>
        <div></div>
        {user ? (
          <NavLink
            to=""
            className="link"
            activeClassName="active"
            onClick={handleLogOut}
          >
            Log Out
          </NavLink>
        ) : (
          <NavLink
            to="/auth"
            className="link"
            activeClassName="active"
            onClick={closeSideNav}
          >
            Log In
          </NavLink>
        )}
      </div>
    </nav>
  );
}
