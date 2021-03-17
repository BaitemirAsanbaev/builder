import classes from "./Layout.module.css";
import Toolbar from "../Toolbar/Tooolbar";

const Layout = () => {
    return ( 
        <div className = {classes.Layout}>
            <Toolbar/>
        </div>
     );
}
 
export default Layout;