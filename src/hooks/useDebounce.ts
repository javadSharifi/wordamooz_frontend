import { useState } from 'react';
import { useDebounce as useDebounceLib } from 'use-debounce';

const useDebounce = (init: any, delay = 500) => {
  const [value, setValue] = useState(init);
  const [valueDebounced] = useDebounceLib(value, delay);
  return [value, valueDebounced, setValue];
};

export default useDebounce;