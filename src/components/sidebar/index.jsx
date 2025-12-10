import styles from "./sidebar.module.css"
import {NavLink} from "react-router"
import {House, Search, LibraryBig} from "lucide-react"

const navigationLinks =[
    {
        label: "Home",
        icon: House,
        path: "/",
    },
    {
        label: "Search",
        icon: Search,
        path: "/search",
    },

    {
        label: "Your Library",
        icon: LibraryBig,
        path: "/Library",
    },
];

const musicCateogory =[
    "Running Playlist",
    "21st Birthday",
    "April 2023",
    "Gym Session",
    "Classic Anthems",
    "Discover Weekly",
    "Liked from Radio"
]
const Sidebar = () => {
    return (

<div className={styles.container}>
   <ul className={styles.navList}>

   {navigationLinks.map((item)=>{
    const Icon =item.icon;
    return(
        <li className={styles.navListItem}>
            <NavLink to ={item.path} className={styles.navItems}>
                <Icon/> <span>{item.label}</span>
                </NavLink>
                </li>
    )
   })}
    {/* <li>
        <NavLink to="/">
        <House/><span>Home</span>
        </NavLink>
    </li>
    <li>
        <NavLink to="/">
        <Search/><span>Search</span></NavLink>
    </li>
    <li>
        <NavLink to="/">
        <LibraryBig/><span>Your Library</span></NavLink>
    </li> */}
    </ul> 
</div>

    )
}

export default Sidebar;