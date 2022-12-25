import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { ViajeProvider } from "./contexts/ViajeContext";
import { Viajes } from "./components/Viajes/Viajes";
import Header from "./components/Header/Header";

export function App() {
  return (
    <div className="App">
      <ViajeProvider>
        <Router>
          <Header className="Header" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/viajes" element={<Viajes />} />
          </Routes>
          <NavBar className="NavBar" />
        </Router>
      </ViajeProvider>
    </div>
  );
}
