import { NavLink } from "react-router"

const HomePage = () => {
    return ( <div>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
        </div>
    )
}

export default HomePage;