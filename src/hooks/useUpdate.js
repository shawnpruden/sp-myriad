import { useState } from 'react';

export function useUpdate() {
  const [, update] = useState(0);

  return () => update((value) => value + 1);
}
