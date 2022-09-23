import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "styled-components";

import Routes from './routes';
import { themes } from "./themes";
import GlobalStyle from './styles/globals';

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={themes} >
          <Routes />
        </ThemeProvider>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
