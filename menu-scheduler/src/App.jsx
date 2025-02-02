import { useState } from "react";
import Home from "./components/Home";
import FooterTeam from "./components/FooterTeam";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Home />
      <FooterTeam />
    </>
  );
}

export default App;
