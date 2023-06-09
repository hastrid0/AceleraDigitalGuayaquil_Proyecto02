import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }

  *:focus{
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body{
    background-color: #f6f7fb;
    -webkit-font-smoothing: antiliased;
  }

  body, input, button {
    font-family: 'Montserrat', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
    display:grid;
  }

  button {
    cursor: pointer;
  }
`;