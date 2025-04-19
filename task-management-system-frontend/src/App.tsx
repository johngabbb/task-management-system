import { useState } from "react";
import "./App.css";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import LoginPage from "./components/Pages/LoginPage/LoginPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TasksPage from "./components/Pages/TasksPage/TasksPage";
import Layout from "./components/Layout/Layout";
import BacklogPage from "./components/Pages/BacklogPage/BacklogPage";
import TeamPage from "./components/Pages/TeamPage/TeamPage";
import { AuthProvider } from "./hooks/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Navigate to="/login" replace />} />

          <Route element={<ProtectedRoute />}>
            <Route element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route path="/tasks" element={<TasksPage />}></Route>
              <Route path="/backlog" element={<BacklogPage />}></Route>

              <Route path="/team" element={<TeamPage />}></Route>
            </Route>
          </Route>

          {/* Catch all route - redirect to login */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
