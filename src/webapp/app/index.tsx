import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { ThemeContextProvider } from './shared/context/themeContext';
import App from './App';

ReactDOM.render(
  <StrictMode>
    <ThemeContextProvider>
      <App />
  	</ThemeContextProvider>
  </StrictMode>,
  document.getElementById('root')
);