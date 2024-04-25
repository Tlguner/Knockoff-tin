import React, { useState } from "react";
import people from "./people.js";
import "./App.css";
import Picture from "./picture.jsx";

function App() {
  return (
    <>
      <div>
        <h1 className="Header">
          Our <span className="underline">Rev</span>iews
        </h1>
        <div className="box">
          <Picture />
        </div>
      </div>
    </>
  );
}

export default App;
