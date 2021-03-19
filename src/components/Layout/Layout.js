import classes from "./Layout.module.css";
import Toolbar from "../Toolbar/Tooolbar";
import Drawer from "../Drawer/Drawer";
import { useState } from "react";

const Layout = () => {

    const [drowerOpen, setdrawerOpen] = useState(false);

    return ( 
        <div className = {classes.Layout}>
            
            <Toolbar openDrawer = {() => {setdrawerOpen(true)}}/>
            <Drawer open = {drowerOpen} closeDrawer={() => setdrawerOpen(false)}/>
        </div>
     );
}
 
export default Layout;