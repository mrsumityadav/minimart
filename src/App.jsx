import React from "react";
import Home from "./Components/Home";
import { Link, Route, Routes } from "react-router-dom";
import Details from "./Components/Details";

function App() {
  return (
    <div className="w-full h-screen flex">
      {/* <Link to="/" className="text-red-400 absolute left-[17vw] top-[1vw]">Home</Link> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
