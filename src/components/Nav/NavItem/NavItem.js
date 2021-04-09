import classes from "./NavItem.module.css";

const NavItem = ({url, active, children}) => {
    return (
        <li className={classes.NavItem}><a href={url} className={active ? classes.active : null}>{children}</a></li>
         );
}
 
export default NavItem;