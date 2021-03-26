import classes from "./NoteControl.module.css";

const NoteControl = ({add, remove, type}) => {
    return (<div className={classes.NoteControl}>
      <button className={classes.more} onClick={() => add(type)}>+</button>
      <div className={classes.note}>{type}
      </div>
      <button className={classes.less} onClick={() => remove(type)}>-</button>
    </div>);
}
 
export default NoteControl;