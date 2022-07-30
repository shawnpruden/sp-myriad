import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  setDoc,
} from 'firebase/firestore';

import { db } from '../firebase';
import useAuth from './useAuth';

const toaster = {
  color: 'var(--color-white)',
  maxWidth: '100vw',
  padding: '0.5rem',
  borderRadius: '5px',
  border: '1px solid var(--color-white)',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
};

const title = {
  color: 'var(--color-primary)',
};

export default function useList(item, type) {
  const [list, setList] = useState([]);

  const [isAdded, setIsAdded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);

  const { user } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.uid) return;

    return onSnapshot(
      collection(db, 'users', user?.uid, 'watchList'),
      ({ docs }) => setList(docs.map((doc) => doc.data()))
    );
  }, [user]);

  useEffect(() => {
    if (user) {
      return onSnapshot(
        collection(db, 'users', user?.uid, 'watchList'),
        ({ docs }) => setItems(docs)
      );
    }
  }, [user]);

  useEffect(() => {
    setIsAdded(
      items.findIndex((result) => result.data().id === item?.id) !== -1
    );
  }, [item?.id, items]);

  const handleList = async (e) => {
    e.stopPropagation();

    if (!user) {
      navigate('/login');

      return;
    }

    setIsLoading(true);

    if (isAdded) {
      await deleteDoc(
        doc(db, 'users', user.uid, 'watchList', item.id.toString())
      );

      toast(
        <>
          <span>
            <b style={title}>
              {item?.title ||
                item?.original_title ||
                item?.name ||
                item?.original_name}
            </b>
            &nbsp; has been removed from Watchlist.
          </span>
        </>,

        {
          duration: 5000,
          style: toaster,
        }
      );

      setIsAdded(false);
      setIsLoading(false);
    } else {
      await setDoc(
        doc(db, 'users', user.uid, 'watchList', item.id.toString()),
        { media_type: type, ...item }
      );

      toast(
        <>
          <span>
            <b style={title}>
              {item?.title ||
                item?.original_title ||
                item?.name ||
                item?.original_name}
            </b>
            &nbsp; has been added to Watchlist.
          </span>
        </>,

        {
          duration: 5000,
          style: toaster,
        }
      );

      setIsAdded(true);
      setIsLoading(false);
    }
  };

  return { isAdded, isLoading, list, handleList };
}
