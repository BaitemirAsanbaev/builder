import classes from "./Switch.module.css";

const Switch = ({setTone}) => {
    return ( 
        <div className = {classes.Switch}>
            <div className = {classes.inp}>
                <label htmlFor = "bemol">bemol</label>
                <input
                    type = "radio"
                    value = "bemol"
                    id = "bemol"
                    name = "tune"
                    onChange = {setTone("b")}/>
            </div> 
            <div className = {classes.inp}>
                <label htmlFor = "none">none</label>
                <input
                    type = "radio"
                    value = "none"
                    id = "none"
                    name = "tune"
                    onChange = {setTone("")}/>
            </div>
            <div className = {classes.inp}>
                <label htmlFor = "diese">diese</label>
                <input
                    type = "radio"
                    value = "diese"
                    id = "diese"
                    name = "tune"
                    onChange = {setTone("d")}/>
            </div>
        </div>
     );
}
 
export default Switch;