import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={process.env.PUBLIC_URL + "/img/ice.png"} />
        <p>안녕하세요. 리액트 시작합니다.</p>
      </header>
    </div>
  );
}

export default App;
