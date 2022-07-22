import React from 'react';
import { Link } from 'react-router-dom';

import { BsPersonCircle } from 'react-icons/bs';
import { IoExitOutline } from 'react-icons/io5';

import { Button } from './styles';

import { useAuth } from '../../hooks/useAuth';

export default function Account() {
  const { user, handleSignOut } = useAuth();

  return (
    <>
      {user ? (
        <Button onClick={handleSignOut}>
          <IoExitOutline fontSize={24} />
          Log Out
        </Button>
      ) : (
        <Link to="/login">
          <Button>
            <BsPersonCircle fontSize={24} />
            Log In
          </Button>
        </Link>
      )}
    </>
  );
}
