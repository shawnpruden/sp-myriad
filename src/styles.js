import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --font-primary: 'Raleway', sans-serif;
    --font-secondary: 'Oswald', sans-serif;

    --color-primary: #7c4dff;
    --color-secondary: #9a89b4;
    --color-white: #fff;
    --color-black: #111;
    --color-gray: #b5b5b5;
    --color-gray-alt: #9e9e9e;
    --color-red: #e31b6d;
    --color-green: #008e05;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    overflow-x: hidden;
  }

  body {
    color: var(--color-white);
    font-family: var(--font-primary);
    font-weight: 400;

    background-color: var(--color-black);
  }

  a {
    color: unset;
    text-decoration: none;
  }

  button,
  input {
    outline: none;

    font-family: var(--font-primary);
  }

  iframe {
    border: none;
  }

  img {
    width: 100%;
    vertical-align: bottom;

    transition: 0.5s;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyle;
