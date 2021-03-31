import classes from "./Switch.module.css";

const Switch = () => {
    return ( 
        <div className = {classes.Switch}>
            <div className = {classes.inp}>
                <label for = "bemol">bemol</label>
                <input type = "radio" id = "bemol" name = "tune"/>
            </div>
            <div className = {classes.inp}>
                <label for = "none">none</label>
                <input type = "radio" id = "none" name = "tune"/>
            </div>
            <div className = {classes.inp}>
                <label for = "diez">diez</label>
                <input type = "radio" id = "diez" name = "tune"/>
            </div>
        </div>
     );
}
 
export default Switch;