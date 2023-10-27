import { createBrowserRouter } from "react-router-dom"
import App from "./App" 
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/content/dashboard"
import UserIndex from "./pages/content/UserIndex"
import Cs from "./pages/content/CsIndex"
import Teller from "./pages/content/TellerIndex"
import TT from "./pages/content/TicketTeller"
import CT from "./pages/content/TicketCs"
import CsH from "./pages/content/CsHistory"
import TellerH from "./pages/content/TellerHistory"


const router = createBrowserRouter([
    {
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Login/>,
            },
            {
                path: '/AuLogin',
                element: <Login/>,
            },
            {
                path: 'register',
                element: <Register/>,   
            },
        ]
    },
    {
        path: 'register',
        element: <Register/>,   
    },
    {
        path: 'dashboard',
        element: <Dashboard/>,
        children: [
            {
                path: 'pelanggan',
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
            {
                path: 'history-cs',
                element: <CsH/>,
            },
            {
                path: 'history-teller',
                element: <TellerH/>,
            },
            {
                path: 'teller-ticket',
                element: <TT/>,
            },
            {
                path: 'cs-ticket',
                element: <CT/>,
            },
        ]   
    },
])

export default router