import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const theme = {
  primary: "#eb2f64",
  primaryLight: "#FF3366",
  primaryDark: " #BA265D",
  greyLightOne: "#faf9f9",
  greyLightTwo: " #f4f2f2",
  greyLighThree: "#f0eeee",
  greyLightFour: "#ccc",
  greyDarkOne: "#333",
  greyDarkTwo: "#777",
  greyDarkThree: "#999",
  shadowDark: " 0 2rem 6rem rgba(0, 0, 0, .3)",
  shadowLight: "0 2rem 5rem rgba(0, 0, 0, .06)",
  line: "1px solid #f4f2f2"
};

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: inherit;
  }
  
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    text-rendering: optimizeLegibility;
    text-size-adjust: 100%;
  }
    body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    color: ${({ theme }) => theme.greyDarkTwo};
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.6;
    min-height: 100vh;
  }

  ul {
    margin: 0;
    padding: 0;
  }
  img {
    max-width: 100%;
  }

  h1,h2,h3,h4,h5,h6 {
    margin: 0 0 2.5rem;
  }
  p {
    margin: 0 0 1.5rem;
    &:last-child {
      margin-bottom: 0
    }
  }
  a {
    transition: all .3s ease-in-out 0s;
    text-decoration: none;
  }
`;

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Router>
      <App />
    </Router>
  </ThemeProvider>,
  document.getElementById("root")
);
serviceWorker.unregister();
