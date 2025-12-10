import styles from "./dashboardLayout.module.css";
import Sidebar from "../sidebar";
export const DashboardLayout =({children}) =>{
    return (
        <main className={styles.wrapper}>
        
<Sidebar/>
        {children}

        
        </main>
    )
}