import React, { useState } from "react";
import people from "./people.js";
import "./App.css";
import "./index.css";
import Picture from "./picture.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import BasicExample from "./navbar.jsx";
import Sum from "./Sum.jsx";

function App() {
  return (
    <>
      <div>
        <BasicExample />
        <h1 className="Header">
          Our <span className="underline">Matchs</span>
        </h1>
        <div class=" grid grid-cols-3 ">
          <div class="col-span-1  justify-center border-2 border-rose-600">
            <Sum />
          </div>
          <div class="col-span-2 flex justify-center border-2 border-cyan-700">
            <div className="box">
              <Picture />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
