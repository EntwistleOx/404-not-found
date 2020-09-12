import React from "react";
import scarecrow from "./img/scarecrow.png";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <h1 className="title">404 not found</h1>
      <div className="main">
        <img src={scarecrow} alt="" />
        <div className="content">
          <h2>I have bad news for you</h2>
          <p>
            The page you are looking for might be removed or is temporarily
            unavailable
          </p>
          <button>Back to homepage</button>
        </div>
      </div>
      <footer>Josué @DevChallenges.io</footer>
    </React.Fragment>
  );
}

export default App;
