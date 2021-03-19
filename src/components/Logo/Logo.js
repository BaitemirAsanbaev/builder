import classes from "./Logo.module.css";
import logo from "../../images/logo.png"

const Logo = () => {
    return ( 
        <div className = {classes.Logo}>
            <img alt = "logo" src = {logo} className = {classes.logoImg}/>
            <h1 className = {classes.title}>Music maker</h1>
        </div>
     );
}
 
export default Logo;