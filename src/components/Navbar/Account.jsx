import React from 'react';
import { Link } from 'react-router-dom';

import { BsPersonCircle } from 'react-icons/bs';
import { IoExitOutline } from 'react-icons/io5';

import { Button } from './styles';

import { useAuth } from '../../hooks';

export default function Account() {
  const { user, handleSignOut } = useAuth();

  return (
    <>
      {user ? (
        <Button onClick={handleSignOut}>
          <IoExitOutline />
          <span>Log Out</span>
        </Button>
      ) : (
        <Link to="/login">
          <Button>
            <BsPersonCircle />
            <span>Log In</span>
          </Button>
        </Link>
      )}
    </>
  );
}
