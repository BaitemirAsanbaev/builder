import classes from "./Nav.module.css";

const Nav = () => {
    return ( 
        <div className = {classes.Nav}>
            <button className ={classes.navbtns}>Create</button>
            <button className ={classes.navbtns}>Auth</button>
        </div>
     );
}
 
export default Nav;