import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import classes from "./Drawer.module.css";

const Drawer = () => {
    return ( 
        <div className = {classes.Drawer}>
            <Logo/>
            <Nav/>
        </div>
     );
}
 
export default Drawer;