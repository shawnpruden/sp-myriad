import { useEffect, useState } from 'react';

export default function useScroll() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [bodyOffset, setBodyOffset] = useState(
    document.body.getBoundingClientRect()
  );

  const [isVisible, setIsVisible] = useState(true);

  const listener = () => {
    if (document.body.getBoundingClientRect().top !== 0) {
      setBodyOffset(document.body.getBoundingClientRect());

      setIsVisible(lastScrollTop > -bodyOffset.top ? true : false);

      setLastScrollTop(-bodyOffset.top);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  });

  return { isVisible };
}
