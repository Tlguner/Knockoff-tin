import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BasicExample from "./navbar.jsx";
import Picture from "./picture.jsx";

function Home() {
  return (
    <div>
      <BasicExample />
      <h1 className="Header">
        Our <span className="underline">Matchs</span>
      </h1>
      <div className="grid grid-cols-3">
        <div className="col-span-1 justify-center border-2 border-rose-600"></div>
        <div className="col-span-2 flex justify-center border-2 border-cyan-700">
          <div className="box">
            <Picture />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
