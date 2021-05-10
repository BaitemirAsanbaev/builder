import Logo from "../../UI/Logo/Logo";
import classes from "./Drawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Nav from "../Toolbar/Nav/Nav";

//component
const Drawer = ({ open, closeDrawer }) => {

  //switches classes
  const drawerClasses = [
    classes.content,
    open ? classes.open : classes.close,
  ];

  //JSX
  return (
    <div className={classes.Drawer}>
      <Backdrop show={open} click={closeDrawer} />
      <div className={drawerClasses.join(' ')}>
        <Logo />
        <div className={classes.drnavdiv}>
          <Nav />
        </div>
      </div>
    </div>
  );
}

export default Drawer;