import React from "react";
// import logo from "../logo.svg";
import "./App.css";
import "./SearchBar";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Nominations from "./Nominations";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>The Shoppies</h1>
      <SearchBar />
      <SearchResults />
      <Nominations />
    </div>
  );
}

export default App;
