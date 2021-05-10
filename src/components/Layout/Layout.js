import classes from "./Layout.module.css";
import Toolbar from "./Toolbar/Toolbar";
import Drawer from "./Drawer/Drawer";
import { useState } from "react";

const Layout = ({children}) => {

    const [drawerOpen, setDrawerOpen] = useState(false);

    return ( 
        <div className = {classes.Layout}>
            <Toolbar openDrawer={() => setDrawerOpen(true)} closeDrawer={() => setDrawerOpen(false)}  />
            <Drawer open={drawerOpen} closeDrawer={() => setDrawerOpen(false)} />
            <main>
                {children}
            </main>
        </div>
     );
}
 
export default Layout;