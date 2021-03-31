import classes from "./NotesControls.module.css";
import NoteControl from "./NoteControl/NoteControl";
import Switch from "./Switch/Switch";

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
            <Switch/>
            {result}
        </div>
     );
}
 
export default NotesControls;