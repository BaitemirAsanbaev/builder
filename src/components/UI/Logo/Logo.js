import classes from "./Logo.module.css";
import logo from "../../../images/logo.svg"

const Logo = () => {
    return ( 
        <div className = {classes.Logo}>
            <div className={classes.logoDiv}>
                <img alt = "logo" src = {logo} className = {classes.logoImg}/>
            </div>
            <h1 className = {classes.title}>Music maker</h1>
        </div>
     );
}
 
export default Logo;