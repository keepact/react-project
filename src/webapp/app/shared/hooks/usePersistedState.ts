import * as React from 'react';
import { Theme } from '../../context/themeContext';

type Response<T> = [T, React.Dispatch<React.SetStateAction<T>>];

export const usePersistedState = <T>(
  key: string,
  initialState: Theme,
): Response<T> => {
  const [state, setState] = React.useState(() => {
    const storageValue = localStorage.getItem(key);

    if (storageValue) return JSON.parse(storageValue);
    return initialState;
  });

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};