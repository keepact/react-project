import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeContextProvider } from './shared/context/themeContext';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
  	</ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
