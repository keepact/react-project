import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from './shared/context/themeContext';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './shared/store';
import GlobalStyle from './styles/global';
import HelloWorld from './components/HelloWorld';

const App: React.FC = () => {
  const { colorTheme } = React.useContext(ThemeContext);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={colorTheme}>
          <HelloWorld firstName="Alina" lastName="Renan" />
        </ThemeProvider>
      </PersistGate>
      <GlobalStyle />
    </Provider>
  );
};
export default App;