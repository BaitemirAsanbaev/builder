import classes from "./NotesControls.module.css";
import NoteControl from "./NoteControl/NoteControl";
import Switch from "./Switch/Switch";
import Button from "../../UI/Button/Button";

const NotesControls = ({addNote, removeNote, tone, switchTone, notesArray, startOrdering}) => {

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
            tone = {tone}
        />)
    }
    return ( 
        <div className = {classes.NotesControls}>
            <Switch
                switchTone = {switchTone}/>
            {result}
            <Button disabled = {!notesArray.length} onClick ={startOrdering} order>Order</Button>
        </div>
     );
}
 
export default NotesControls;