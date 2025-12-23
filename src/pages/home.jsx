import { NavLink } from "react-router"
import { DashboardLayout } from "../components/dashboardLayout.jsx";
import Suggestion from "../components/suggestion/index.jsx";
import styles from "styled-components"

const Button = styles.button`
color: gold;
background-color: ${props => props?.variant === "secondary" ? 'purple' : 'blue'};
padding: 10px 18px;
box-sizing: border-box;
margin-top: 20px;
display:block;
border-radius: 10px;
`


const HomePage = () => {
    return ( 
        <DashboardLayout>
            <div class ="text-white bg-amber-200">
            <Suggestion />
            </div>

            <Button variant="primary">I am the styled component button</Button>
             
            <div style={{color:"red"}}> This is the home page</div>
        </DashboardLayout>
        
        
    )
}

export default HomePage;