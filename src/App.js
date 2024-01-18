import React from "react";
import "./App.css";
import axios from "axios";
import Header from "./component/Header/Header";
import Body from "./component/Body/Body";

function App() {
  return (
    <div className="App">
      <h1>Exchange api app</h1>
      <Header />
      <Body />
    </div>
  );
}

export default App;
