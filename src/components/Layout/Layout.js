import classes from "./Layout.module.css";
import Toolbar from "./Toolbar/Tooolbar";
import Drawer from "./Drawer/Drawer";
import { useState } from "react";
import Content from "../Content/Content";

const Layout = ({children}) => {

    const [drawerOpen, setDrawerOpen] = useState(false);

    return ( 
        <div className = {classes.Layout}>
            <Toolbar openDrawer={() => setDrawerOpen(true)} />
            <Drawer open={drawerOpen} closeDrawer={() => setDrawerOpen(false)} />
            <main>
                <Content/>
            </main>
        </div>
     );
}
 
export default Layout;