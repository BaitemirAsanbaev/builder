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
            <Switch switchTone = {switchTone}/>
            <div>
                <Button onClick = {removeAllNote} remove disabled = {!notesArray.length}>Remove</Button>
                <Button onClick = {clearNotes} remove disabled = {!notesArray.length}>Clear</Button>
            </div>
            {result}
            <Button disabled = {!notesArray.length} onClick ={startOrdering} order>Order</Button>
        </div>
     );
}
 
export default NotesControls;