import classes from "./DrowerOpen.module.css";

const DrowerOpen = (click) => {
    return ( 
        <div className = {classes.DrowerOpen} onClick = {click}>Open</div>
     );
}
 
export default DrowerOpen;