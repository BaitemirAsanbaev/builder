import DrawerOpen from "../Drawer/DrawerOpen/DrawerOpen";
import Logo from "../../UI/Logo/Logo";
import Nav from "../../Nav/Nav";
import classes from "./Toolbar.module.css";

const Toolbar = ({openDrawer, closeDrawer}) => {
    return ( 
        <div className = {classes.Toolbar}>
            <div className ={classes.logoCont}>
                <Logo/>
            </div>
            <nav>
                <Nav  closeDrawer = {closeDrawer}/>
            </nav>
            <DrawerOpen click = {openDrawer} />
        </div>
     );
}
 
export default Toolbar;