import { useState, useEffect } from 'react';

export default function useOpacity() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 1000);
  }, []);

  return { isVisible };
}
