import classes from "./Layout.module.css";
import Toolbar from "../Toolbar/Tooolbar";
import Drawer from "../Drawer/Drawer";

const Layout = () => {
    return ( 
        <div className = {classes.Layout}>
            <Toolbar/>
            <Drawer/>
        </div>
     );
}
 
export default Layout;