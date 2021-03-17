import classes from "./Nav.module.css";

const Nav = () => {
    return ( 
        <div className = {classes.Nav}>
            <button className ={classes.createbtn, classes.navbtns}>Create</button>
            <button className ={classes.authbtn, classes.navbtns}>Auth</button>
        </div>
     );
}
 
export default Nav;