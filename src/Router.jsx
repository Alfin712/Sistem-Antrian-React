import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/content/dashboard"
import UserIndex from "./pages/content/UserIndex"
import Cs from "./pages/content/CsIndex"
import Teller from "./pages/content/TellerIndex"


const router = createBrowserRouter([
    {
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
        ]
    },
    {   
        path: 'login',
        element: <Login/>,  
    },
    {
        path: 'register',
        element: <Register/>,   
    },
    {
        element: <Dashboard/>,
        children: [
            {
                path: 'user',
                element: <UserIndex/>,
            },
            {
                path: 'teller',
                element: <Teller/>,
            },
            {
                path: 'cs',
                element: <Cs/>,
            },
        ]   
    },
])

export default router