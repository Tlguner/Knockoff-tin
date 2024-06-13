import React, { useState } from "react";
import people from "./people.js";
import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BasicExample from "./navbar.jsx";
import Login from "./Login.jsx";
import Home from "./home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Picture from "./picture.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
