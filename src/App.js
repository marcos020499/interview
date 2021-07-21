import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";

import Header from './components/header/index'

import { createGlobalStyle } from "styled-components";
import { toast } from "react-toastify";
toast.configure();
const App =() => {

  return (
    <>
      <HashRouter>
        <Header />
        <Switch>
          {/*<Route exact path="/" component={Home} />*/}
        </Switch>
      </HashRouter>
      <GlobalStyle />
    </>
  );
};
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: linear-gradient(white, blue);
    font-family: 'Inconsolata', monospace;
  }
`;

export default App;