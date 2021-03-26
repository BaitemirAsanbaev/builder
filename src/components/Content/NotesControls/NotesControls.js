import classes from "./NotesControls.module.css";
import NoteControl from "./NoteControl/NoteControl";

const NotesControls = ({addNote, removeNote, notes}) => {
    const result = [];
    for(const note in notes){
        result.push(<NoteControl
            key = {note}
            add = {addNote}
            remove = {removeNote}
            type = {note}
        />)
    }
    return ( 
        <div className = {classes.NotesControls}>
            {result}
        </div>
     );
}
 
export default NotesControls;