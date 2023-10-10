import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import UserIndex from "./pages/content/userIndex"
import Cs from "./pages/content/csIndex"
import Teller from "./pages/content/tellerIndex"


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
        path: 'userIndex',
        element: <UserIndex/>,   
    },
])

export default router