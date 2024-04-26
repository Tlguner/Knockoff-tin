import React, { useState } from "react";
import people from "./people.js";
import "./App.css";
import "./index.css";
import Picture from "./picture.jsx";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import BasicExample from "./navbar.jsx";

function App() {
  return (
    <>
      <div>
        <BasicExample />
        <h1 className="Header">
          Our <span className="underline">Matchs</span>
        </h1>
        <div className="box">
          <Picture />
        </div>
      </div>
    </>
  );
}

export default App;
