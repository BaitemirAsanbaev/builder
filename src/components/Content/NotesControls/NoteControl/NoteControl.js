import classes from "./NoteControl.module.css";
import Notes from "../../Notes/Notes";

const NoteControl = ({add, remove, type}) => {
    return (<div className={classes.NoteControl}>
      <button className={classes.more} onClick={() => add(type)}>+</button>
      <div className={classes.ingredient}>
        <Notes type={type} fixed />
      </div>
      <button className={classes.less} onClick={() => remove(type)}>-</button>
    </div>);
}
 
export default NoteControl;