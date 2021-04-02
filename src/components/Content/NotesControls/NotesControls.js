import classes from "./NotesControls.module.css";
import NoteControl from "./NoteControl/NoteControl";
import Switch from "./Switch/Switch";
import { useState } from "react";

const NotesControls = ({addNote, removeNote, setTone}) => {

    const result = [];
    const [notes, setNotes] = useState([
        'c',
        'd',
        'e',
        'f',
        'g',
        'a',
        'b',
        'p',
    ]);
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
            <Switch setTone = {setTone}/>
            {result}
        </div>
     );
}
 
export default NotesControls;