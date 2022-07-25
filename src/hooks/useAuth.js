import React, {
  useState,
  createContext,
  useContext,
  useMemo,
  useEffect,
} from 'react';
import { useNavigate } from 'react-router-dom';

import { auth, db, provider } from '../firebase';

import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);

        setIsLoading(false);
      } else {
        setUser(null);

        setIsLoading(false);
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  const handleSignUp = async (email, password) => {
    setError(null);
    setIsLoading(true);

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await setDoc(doc(db, 'users', user.uid), {});

      setUser(user);

      navigate('/');

      setIsLoading(false);

      sendEmailVerification(auth.currentUser);
    } catch (err) {
      setError(
        "This email address already exists. If you don't remember your password, please click Forgot password to reset it or create a new one."
      );

      console.log(err.message);

      setIsLoading(false);
    }
  };

  const handleSignIn = async (email, password) => {
    setError(null);
    setIsLoading(true);

    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      setUser(user);

      navigate('/');

      setIsLoading(false);
    } catch (err) {
      setError(
        'Incorrect username and password combination. Please try again or click Forgot password to reset it.'
      );

      console.log(err.message);

      setIsLoading(false);
    }
  };

  const handleSignOut = async () => {
    setIsLoading(true);

    try {
      await signOut(auth);

      setUser(null);

      navigate('/login');

      setIsLoading(false);
    } catch (err) {
      console.log(err.message);

      setIsLoading(false);
    }
  };

  const handleReset = async (email) => {
    setIsLoading(true);

    try {
      await sendPasswordResetEmail(auth, email);

      setError(
        "We've sent a password reset link. If it doesn't arrive soon, please check your spam folder or try again."
      );

      setIsLoading(false);
    } catch (err) {
      console.log(err.message);

      setIsLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    setIsLoading(true);

    try {
      const result = await signInWithPopup(auth, provider);

      console.log(result);

      navigate('/');

      setIsLoading(false);
    } catch (err) {
      alert(err.message);

      setIsLoading(false);
    }
  };

  const memoedValue = useMemo(
    () => ({
      error,
      isLoading,
      user,
      setError,
      handleSignUp,
      handleSignIn,
      handleSignOut,
      handleReset,
      handleGoogleAuth,
    }),

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [error, isLoading, user]
  );

  return (
    <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
  );
}

export default function useAuth() {
  return useContext(AuthContext);
}
