import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

const MediaContext = createContext({});

export function MediaProvider({ children }) {
  const [xs, setXs] = useState(false);
  const [sm, setSm] = useState(false);
  const [md, setMd] = useState(false);
  const [lg, setLg] = useState(false);

  const handleResize = () => {
    setXs(window.innerWidth < 576);
    setSm(window.innerWidth >= 576 && window.innerWidth < 768);
    setMd(window.innerWidth >= 768 && window.innerWidth < 992);
    setLg(window.innerWidth >= 992);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const memoedValue = useMemo(() => ({ xs, sm, md, lg }), [lg, md, sm, xs]);

  return (
    <MediaContext.Provider value={memoedValue}>
      {children}
    </MediaContext.Provider>
  );
}

export default function useMedia() {
  return useContext(MediaContext);
}
