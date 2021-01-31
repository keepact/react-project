import * as React from 'react';
import { DefaultTheme } from 'styled-components';
import light from '../../styles/themes/light';
import { usePersistedState } from '../hooks/usePersistedState';

type Props = {
  children: React.ReactNode;
};

export type Theme = {
  colorTheme: DefaultTheme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

const initialStore: Theme = {
  colorTheme: light,
  setTheme: (): void => {
    throw new Error('setTheme function must be overridden');
  },
};

const ThemeContext = React.createContext<Theme>(initialStore);

const ThemeContextProvider = ({ children }: Props): JSX.Element => {
  const [theme, setTheme] = usePersistedState<Theme>('theme', initialStore);

  return (
    <ThemeContext.Provider value={{ ...theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };