import classes from "./NotesControls.module.css";
import NoteControl from "./NoteControl/NoteControl";

const NotesControls = ({addNote, removeNote, note}) => {
    const result = [];
    for(const item in note){
        result.push(<NoteControl
            key = {item}
            add = {addNote}
            remove = {removeNote}
            type = {item}
        />)
    }
    return ( 
        <div className = {classes.NotesControls}>
            {result}
        </div>
     );
}
 
export default NotesControls;