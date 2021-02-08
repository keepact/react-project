import { ThemeContextProvider } from './shared/context/themeContext';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <StrictMode>
    <ThemeContextProvider>
      <App />
  	</ThemeContextProvider>
  </StrictMode>,
  document.getElementById('root')
);