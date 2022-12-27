import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { ViajeProvider } from "./contexts/ViajeContext";
import { Viaje } from "./components/Viaje/Viaje";
import { Viajes } from "./components/Viajes/Viajes";
import { Header } from "./components/Header/Header";
import { Pasajes } from "./components/Pasajes/Pasajes";
import { Usuarios } from "./components/Usuarios/Usuarios";
import { Splash } from "./components/Splash/Splash";
import { Login } from "./components/Login/Login";
import { PreRegistro } from "./components/PreRegistro/PreRegistro";
import { Registro } from "./components/Registro/Registro";
import { UsuarioProvider } from "./contexts/UsuarioContext";
import { Checkout } from "./components/Checkout/Checkout";

// asientos []

export function App() {
  return (
    <div className="App">
      <UsuarioProvider>
        <ViajeProvider>
          <Router>
            <Header className="Header" />
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/viajes/:tipoViaje" element={<Viajes />} />
              <Route path="/viaje/:id/:tipoViaje" element={<Viaje />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/pasajes" element={<Pasajes />} />
              <Route path="/usuarios" element={<Usuarios />} />
              <Route path="/" element={<Splash />} />
              <Route path="/login" element={<Login />} />
              <Route path="/preregistro" element={<PreRegistro />} />
              <Route path="/registro" element={<Registro />} />
            </Routes>
            <NavBar className="NavBar" />
          </Router>
        </ViajeProvider>
      </UsuarioProvider>
    </div>
  );
}
