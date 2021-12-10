import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

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
      <div className="authExit" onClick={handleAuthClick}>
        X
      </div>
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
        </form>
        <div
          className="flex-ctr-ctr"
          style={{
            fontSize: '2vmin',
            paddingTop: '3vmin',
          }}
        >
          <div>New here?</div>
          <button onClick={() => setShowSignUp(true)}>Sign Up</button>
        </div>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}
