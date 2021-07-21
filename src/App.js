import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";

import Header from './components/header/index'
import SignIn from './components/sign-in/sign-in'
import SignUp from './components/sign-up/sign-up'

import { createGlobalStyle } from "styled-components";
import { toast } from "react-toastify";
toast.configure();
const App =() => {

  return (
    <>
      <HashRouter>
        <Header />
        <SignIn/>
        <SignUp/>
      </HashRouter>
      <GlobalStyle />
    </>
  );
};
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: gray;
    font-family: 'Inconsolata', monospace;
  }
`;

export default App;
