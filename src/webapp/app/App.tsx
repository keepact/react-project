import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import HelloWorld from './components/HelloWorld';
import GlobalStyle from './styles/global';
import { ThemeContext } from './context/themeContext';

const App: React.FC = () => {
  const { colorTheme } = React.useContext(ThemeContext);

  return (
    <ThemeProvider theme={colorTheme}>
      <HelloWorld firstName="Alina" lastName="Renan" />
      <GlobalStyle />
    </ThemeProvider>
  );
};
export default App;