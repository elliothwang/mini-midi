import { useState } from 'react';
import SignUpForm from '../SignUpForm/SignUpForm';
import LoginForm from '../LoginForm/LoginForm';

export default function AuthPage({ setUser, handleAuthClick }) {
  const [showSignUp, setShowSignUp] = useState(true);

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
