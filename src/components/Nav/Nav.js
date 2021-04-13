import classes from "./Nav.module.css";
import NavItem from "./NavItem/NavItem";

const Nav = () => {
    return ( 
            <ul className = {classes.Nav}>
                <NavItem className ={classes.navbtns} url={'/'} active>Create</NavItem>
                <NavItem className ={classes.navbtns} url={'/auth'}>Auth</NavItem>
                <NavItem className ={classes.navbtns} url={'/songs'}>Songs</NavItem>
            </ul>

     );
}
 
export default Nav;