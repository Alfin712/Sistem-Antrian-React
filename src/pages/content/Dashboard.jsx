import React, {children} from 'react'
import { BrowserRouter as Router, Outlet } from "react-router-dom"
import Menu from './Menu1'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "./../../css/style.css"


function Dashboard() {
  return (
    <div>
        <div className="d-flex">
            <div className="w-100" >   
                <Outlet />
            </div>
            <Menu/>
        </div>
    </div>
  );
}



export default Dashboard;