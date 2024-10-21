import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Menu from "./Components/Menu/Menu";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Menu />
    </div>
  );
}

export default App;
