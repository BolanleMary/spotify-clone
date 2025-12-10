import { NavLink } from "react-router"
import { DashboardLayout } from "../components/dashboardLayout.jsx";

const HomePage = () => {
    return ( <div>
        <DashboardLayout>
            <div style={{color:"red"}}> This is the home page</div>
        </DashboardLayout>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
        </div>
    )
}

export default HomePage;