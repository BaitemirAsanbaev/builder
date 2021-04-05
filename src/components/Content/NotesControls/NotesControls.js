import classes from "./NotesControls.module.css";
import NoteControl from "./NoteControl/NoteControl";
import Switch from "./Switch/Switch";

const NotesControls = ({addNote, removeNote, tone, switchTone}) => {

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
            type = {notes[note] + tone}
        />)
    }
    return ( 
        <div className = {classes.NotesControls}>
            <Switch
                tone = {tone}
                switchTone = {switchTone}/>
            {result}
        </div>
     );
}
 
export default NotesControls;