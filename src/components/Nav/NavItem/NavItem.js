import { Link } from "react-router-dom";
import classes from "./NavItem.module.css";

const NavItem = ({ url, active, children }) => {
  return (
    <li className={classes.NavItem}>
      <Link to={url} className={active ? classes.active : null}>{children}</Link>
    </li>
  );
}

export default NavItem;