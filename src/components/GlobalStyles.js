import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    width: 100%;
    font-family: 'Montserrat', sans-serif;
    background: #3f444a;
    color: #f1ebdc;
  }
  
  h1 {
    font-size: 64px;
  }
  
  h2 {
    font-size: 50px;
  }
  
  h3 {
    font-size: 38px;
  }
  
  h4 {
    font-size: 28px;
  }

  h5 {
    font-size: 21px;
  }
  
  p {
    font-size: 16px;
  }

`;

export default GlobalStyles;