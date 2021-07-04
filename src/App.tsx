import React from "react";
import "./App.css";
import Dropdown from "./components/Dropdown";

function App() {
  return (
    <div className="App">
      <h3>dropdown menu</h3>
      <div className="dropdown-menu">
        <Dropdown />
      </div>
    </div>
  );
}

export default App;
