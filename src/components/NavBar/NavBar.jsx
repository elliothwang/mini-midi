import './NavBar.scss';
import { useState } from 'react';
import $ from 'jquery';
import { NavLink } from 'react-router-dom';
import { ReactComponent as House } from '../../assets/Icons/house.svg';
import { ReactComponent as SongList } from '../../assets/Icons/song-list.svg';
import { ReactComponent as Key } from '../../assets/Icons/key.svg';
import AuthPopUp from '../AuthPopUp/AuthPopUp';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  const [sideNavShown, setSideNavShown] = useState(false);
  const [authShown, setAuthShown] = useState(false);

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  function handleSideNavClick() {
    setSideNavShown(!sideNavShown);
    if (sideNavShown) {
      $('.sideNav').width('0px');
      $('.spacer').width('0px');
    } else {
      $('.sideNav').width('25%');
      $('.spacer').width('25%');
    }
  }

  function closeSideNav() {
    setSideNavShown(false);
    handleSideNavClick();
  }

  function handleAuthClick(evt) {
    setAuthShown(!authShown);
    if (
      evt.target.className === 'link' ||
      evt.target.className === 'link active'
    ) {
      closeSideNav();
    }
  }

  return (
    <nav>
      <div className={authShown ? 'popup' : 'none'}>
        <AuthPopUp handleAuthClick={handleAuthClick} />
      </div>
      <div className="header">
        <a href="/">
          m<span className="pink">i</span>n<span className="purple">i</span> m
          <span className="blue">i</span>d<span className="pink">i</span>
        </a>
      </div>
      <div
        className="sideNavOpenButton"
        style={
          authShown
            ? { pointerEvents: 'none', background: 'black', opacity: '0.1' }
            : { pointerEvents: 'auto' }
        }
        onClick={handleSideNavClick}
      >
        <div className={!sideNavShown ? 'line1' : 'line1 active1'}></div>
        <div className={!sideNavShown ? 'line2' : 'line2 active2'}></div>
        <div className={!sideNavShown ? 'line3' : 'line3 active3'}></div>
      </div>
      <div className="spacer"></div>
      <div className={(sideNavShown || authShown) && 'overlay'}></div>
      <div className="sideNav">
        <NavLink
          to="/"
          exact
          className="link"
          activeClassName="active"
          onClick={closeSideNav}
        >
          <span className="icon">
            <House />
          </span>
          Home
        </NavLink>
        <NavLink
          to="/songs"
          className="link"
          activeClassName="active"
          onClick={closeSideNav}
        >
          <span className="icon">
            <SongList />
          </span>
          My Songs
        </NavLink>
        <div></div>
        {user ? (
          <NavLink
            to=""
            exact
            className="link"
            activeClassName="active"
            onClick={handleLogOut}
          >
            <span className="icon">
              <Key />
            </span>
            Log Out
          </NavLink>
        ) : (
          <NavLink
            to=""
            exact
            className="link"
            activeClassName="active"
            onClick={handleAuthClick}
          >
            <span className="icon">
              <Key />
            </span>
            Sign Up
          </NavLink>
        )}
      </div>
    </nav>
  );
}
