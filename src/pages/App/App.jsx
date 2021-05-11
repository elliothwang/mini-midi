import './App.css';
import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import MainPage from '../MainPage/MainPage';
import MySongsPage from '../MySongsPage/MySongsPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [userSongs, setUserSongs] = useState([]);
  
  return (
    <main className="App">
      { user ? 
        <>
          <NavBar user={ user } setUser={ setUser } />
          <Switch>
            <Route path="/songs">
              <MySongsPage userSongs={ userSongs } setUserSongs = { setUserSongs }/>
            </Route>
            <Route path="/">
              <MainPage userSong={ userSongs }/>
            </Route>
            <Redirect to="/" />
          </Switch>
        </>
        :
        <AuthPage setUser={ setUser } />
      }
    </main>
  );
}
