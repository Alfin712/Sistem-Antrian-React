import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from './pages/Menu';
import Login from './pages/Login';
import Register from './pages/Register';  
import "bootstrap/dist/css/bootstrap.css";


function App() {
  return (
    <div className="h-100">
      <Router>
        <div className="d-flex">
          <div className="w-100">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="Login" element={<Login />} />
              <Route path="Register" element={<Register />} />
            </Routes>
          </div>
          <Menu/>
        </div>
        </Router>
    </div>
  );
}



export default App;