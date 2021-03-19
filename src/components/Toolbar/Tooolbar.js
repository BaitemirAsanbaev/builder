import DrowerOpen from "../Drawer/DrawerOpen/DrowerOpen";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import classes from "./Toolbar.module.css";

const Toolbar = ({openDrawer}) => {
    return ( 
        <div className = {classes.Toolbar}>
            <Logo/>
            <Nav/>
            <DrowerOpen click = {openDrawer} />
        </div>
     );
}
 
export default Toolbar;