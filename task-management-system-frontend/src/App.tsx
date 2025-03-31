import { useState } from "react";
import "./App.css";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import LoginPage from "./components/Pages/LoginPage/LoginPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  return (
    <BrowserRouter>
      <div className="bg-gradient-to-b from-neutral-700 via-neutral-950 to-neutral-950 h-screen overflow-auto">
        <Routes>
          <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />

          <Route path="/dashboard" element={<Dashboard />}></Route>

          <Route path="/tasks" element={<Dashboard />}></Route>

          <Route path="/backlog" element={<Dashboard />}></Route>

          <Route path="/team" element={<Dashboard />}></Route>

          <Route path="/projects" element={<Dashboard />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
