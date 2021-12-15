import { useState } from 'react';
import SignUpForm from '../SignUpForm/SignUpForm';
import LoginForm from '../LoginForm/LoginForm';

export default function AuthPopUp({ authShown, setUser, handleAuthClick }) {
  const [showSignUp, setShowSignUp] = useState(true);

  authShown && (document.body.onkeydown = null);
  authShown && (document.body.onkeyup = null);

  return (
    <main className="popup">
      {showSignUp ? (
        <SignUpForm
          setUser={setUser}
          setShowSignUp={setShowSignUp}
          handleAuthClick={handleAuthClick}
        />
      ) : (
        <LoginForm
          setUser={setUser}
          setShowSignUp={setShowSignUp}
          handleAuthClick={handleAuthClick}
        />
      )}
    </main>
  );
}
