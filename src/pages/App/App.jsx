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
  const [keyboardActive, setKeyboardActive] = useState(true);

  return (
    <main>
      <>
        <NavBar user={user} setUser={setUser} />
        <Switch>
          <Route path="/auth">
            <AuthPage setUser={setUser} />
          </Route>
          <Route path="/songs">
            <MySongsPage userSongs={userSongs} />
          </Route>
          <Route path="/">
            <MainPage userSongs={userSongs} setUserSongs={setUserSongs} />
          </Route>
          <Redirect to="/" />
        </Switch>
      </>
    </main>
  );
}
