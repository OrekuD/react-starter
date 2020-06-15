import React from "react";
import "./App.scss";
import { Route } from "react-router-dom";
import { Home } from "./pages";
import { Header } from "./components";

function App() {
  return (
    <>
      <Header />
      <Route path="/" exact component={Home} />
    </>
  );
}

export default App;
