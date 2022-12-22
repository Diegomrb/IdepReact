import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home} from "./pages/Home/Home";
import './App.css';
import NavBar from './components/NavBar/NavBar';


export function App() {
  return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <NavBar className="NavBar" />
        </Router>
      </div>
    );
}
