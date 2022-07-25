import { useState } from 'react';

export default function useUpdate() {
  const [, update] = useState(0);

  return () => update((value) => value + 1);
}
