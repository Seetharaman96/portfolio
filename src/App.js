import React from "react";
import "./index.css"
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Project from "./routes/Project";
import Skills from "./routes/Skills";
import Contact from "./routes/Contact";

function App() {
  return <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/project" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </div>;
}

export default App;
