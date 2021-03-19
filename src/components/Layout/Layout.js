import classes from "./Layout.module.css";
import Toolbar from "../Toolbar/Tooolbar";
import Drawer from "../Drawer/Drawer";
import Backdrop from "../UI/Backdrop/Backdrop";

const Layout = () => {
    return ( 
        <div className = {classes.Layout}>
            <Backdrop/>
            <div>
                <Toolbar/>
                <Drawer/>
            </div>
        </div>
     );
}
 
export default Layout;