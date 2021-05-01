import classes from "./NotesControls.module.css";
import NoteControl from "./NoteControl/NoteControl";
import Switch from "./Switch/Switch";
import Button from "../../UI/Button/Button";

const NotesControls = ({addNote, removeAllNote, clearNotes, tone, switchTone, notesArray, startOrdering}) => {

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
            type = {notes[note] + tone}
            notes = {notes}
        />)
    }
    return ( 
        <div className = {classes.NotesControls}>

            <h4>Tonality</h4>
            <Switch switchTone = {switchTone}/>
            <div>
                <Button onClick = {removeAllNote} remove = 'true' disabled = {!notesArray.length}>Remove</Button>
                <Button onClick = {clearNotes} remove = 'true' disabled = {!notesArray.length}>Clear</Button>
            </div>
            {result}
        </div>
     );
}
 
export default NotesControls;