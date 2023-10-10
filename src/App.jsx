import React, { Children } from 'react';
import { BrowserRouter as Router, Outlet } from "react-router-dom";
import Menu from './pages/Menu';
import "bootstrap/dist/css/bootstrap.css";  
import "bootstrap/dist/css/bootstrap.min.css";  
import "./css/style.css";
import Header from './pages/Header';


function App({Children}) {
  return (
    <div className="bgfoto">
        <div className="d-flex">
          <div className="w-100 bg-dark opacity-75" >
          <Header/>
            {Children}
            <Outlet  style={{ backgroundColor: 'blue' }}/>
          </div>
          <Menu/>
        </div>
    </div>
  );
}



export default App;