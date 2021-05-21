import { useSelector } from "react-redux";
import classes from "./Nav.module.css";
import NavItem from "./NavItem/NavItem";

const Nav = ({ closeDrawer }) => {
  const isAuthenticated = useSelector(state => state.auth.token !== null)
  return (
    <ul className={classes.Nav}>
      <NavItem onClick={closeDrawer} className={classes.navbtns} url={'/'} active>Create</NavItem>
      <NavItem onClick={closeDrawer} className={classes.navbtns} url={'/orders'}>Orders</NavItem>
      <NavItem onClick={closeDrawer} className={classes.navbtns} url={'/songs'}>Songs</NavItem>
    </ul>

  );
}

export default Nav;