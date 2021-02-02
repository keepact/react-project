import { createGlobalStyle } from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #F0f0f5;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font: 16px Roboto, sans-serif;
  }
  button {
    cursor: pointer;
    background: none;
    border: none;
  }
`;