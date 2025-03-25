import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LoginPage from "./components/Pages/LoginPage/LoginPage";

function App() {
  return (
    <>
      <div className="bg-neutral-800 h-screen">
        <LoginPage />
      </div>
    </>
  );
}

export default App;
