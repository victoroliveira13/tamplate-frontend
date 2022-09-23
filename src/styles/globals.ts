import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font: 16px Roboto, sans-serif;
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: #FFFF;
    &:hover {
      color: #FFF;
    }
  }
`;