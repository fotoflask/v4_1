import React from "react";
import Register from "./pages/Register";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Cards from "./pages/Cards.js";
import HomePage from "./pages/Homepage";
import LandingPage from "./pages/LandingPage";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/login" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
