import { NavLink } from "react-router";
import { DashboardLayout } from "../components/dashboardLayout.jsx";

const RegisterPage = () =>{
    return ( <div>
      <NavLink to="login">Login</NavLink>
      <DashboardLayout>
        <div style={{color: "blue"}}>THis  is Register page</div>
      </DashboardLayout>
        </div>
    )

} 
export default RegisterPage;