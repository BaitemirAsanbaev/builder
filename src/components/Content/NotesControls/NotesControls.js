import classes from "./NotesControls.module.css";
import NoteControl from "./NoteControl/NoteControl";

const NotesControls = ({addNote, removeNote}) => {
    const result = [];
    const notes = [
        'c',
        'd',
        'e',
        'f',
        'g',
        'a',
        'b',
        'p',
    ];
    for(const note in notes){
        result.push(<NoteControl
            key = {notes[note]}
            add = {addNote}
            remove = {removeNote}
            type = {notes[note]}
        />)
    }
    return ( 
        <div className = {classes.NotesControls}>
            {result}
        </div>
     );
}
 
export default NotesControls;