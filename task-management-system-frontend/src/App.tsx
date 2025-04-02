import { useState } from "react";
import "./App.css";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import LoginPage from "./components/Pages/LoginPage/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TasksPage from "./components/Pages/TasksPage/TasksPage";
import Layout from "./components/Layout/Layout";
import BacklogPage from "./components/Pages/BacklogPage/BacklogPage";
import TeamPage from "./components/Pages/TeamPage/TeamPage";
import ProjectsPage from "./components/Pages/ProjectsPage/ProjectsPage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />}></Route>

          <Route path="/tasks" element={<TasksPage />}></Route>

          <Route path="/backlog" element={<BacklogPage />}></Route>

          <Route path="/team" element={<TeamPage />}></Route>

          <Route path="/projects" element={<ProjectsPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
