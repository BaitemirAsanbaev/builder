
import Nav from "../../Nav/Nav";
import Logo from "../../UI/Logo/Logo";
import classes from "./Drawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";

const Drawer = ({open, closeDrawer}) => {
    const drawerClasses = [
        classes.content,
        open ? classes.open : classes.close,
    ];

    return ( 
        <div className = {classes.Drawer}>
            <Backdrop show = {open} click = {closeDrawer}/>
            <div className = {drawerClasses.join(' ')}>
                <Logo />
                <div className={classes.drnavdiv}>                    
                    <Nav/>
                </div>
            </div>
        </div>
     );
}
 
export default Drawer;