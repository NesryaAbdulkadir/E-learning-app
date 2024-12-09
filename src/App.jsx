import React from "react";
import Routes from "./Routes";
import NavBar from "./Components/NavBar";
import ProgressBar from "./Components/ProgressBar";

export default function App() {
  return (
    <div className="w-screen">
      <NavBar />
      <Routes />
    </div>
  );
}
