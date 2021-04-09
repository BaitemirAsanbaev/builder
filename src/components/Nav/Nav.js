import classes from "./Nav.module.css";
import NavItem from "./NavItem/NavItem";

const Nav = () => {
    return ( 
            <ul className = {classes.Nav}>
                <NavItem className ={classes.navbtns} url={'/'} active>Create</NavItem>
                <NavItem className ={classes.navbtns} url={'/'}>Auth</NavItem>
            </ul>

     );
}
 
export default Nav;