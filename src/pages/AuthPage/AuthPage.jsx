import { useState, useEffect } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(true);

  return (
    <main>
      {showSignUp ? (
        <SignUpForm setUser={setUser} setShowSignUp={setShowSignUp} />
      ) : (
        <LoginForm setUser={setUser} setShowSignUp={setShowSignUp} />
      )}
    </main>
  );
}
