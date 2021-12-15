import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

// TODO: fix auth, can compare it to rona rates's auth process;
export default function LogIn({ setUser, setShowSignUp, handleAuthClick }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div>
      <a href="/" className="authExit" onClick={handleAuthClick}>
        X
      </a>
      <div className="form-container" onSubmit={handleSubmit}>
        <form autoComplete="off" style={{ marginTop: '1vmin' }}>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Log In</button>
        </form>
        <p className="error-message">&nbsp;{error}</p>
        <div
          className="flex-ctr-ctr"
          style={{
            fontSize: '2vmin',
          }}
        >
          <div>New here?</div>
          <div
            style={{ color: 'skyblue', cursor: 'pointer' }}
            onClick={() => setShowSignUp(true)}
          >
            &nbsp;Sign Up
          </div>
          !
        </div>
      </div>
    </div>
  );
}
