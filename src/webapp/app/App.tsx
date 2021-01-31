import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from './shared/context/themeContext';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './shared/store';
import { Routes } from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  const { colorTheme } = useContext(ThemeContext);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={colorTheme}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
      <GlobalStyle />
    </Provider>
  );
};
export default App;