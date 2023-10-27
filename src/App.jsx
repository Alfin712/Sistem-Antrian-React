import React from "react";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";


function App({ Children }) {
  
  return (
    <div className="bgfoto">
      <div className="w-100">
        {Children}
        <Outlet />
      </div>
    </div>
  )
}

export default App;
