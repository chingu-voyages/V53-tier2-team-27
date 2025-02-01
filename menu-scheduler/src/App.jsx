import { useState } from "react";
import Home from "./components/Home";
import AllergyForm from "./components/Form/index";
import FooterTeam from "./components/FooterTeam";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Home />
      {/* <AllergyForm /> */}
      <FooterTeam />

    </>
  );
}

export default App;
