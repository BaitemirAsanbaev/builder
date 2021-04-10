import classes from "./NotesControls.module.css";
import NoteControl from "./NoteControl/NoteControl";
import Switch from "./Switch/Switch";
import Button from "../../UI/Button/Button";

const NotesControls = ({addNote, removeAllNote, clearNotes, tone, switchTone, notesArray, startOrdering, setTemp}) => {

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
            <div>
                <h4>Tempo</h4>
                <div className={classes.templabels}>
                    <span>1/4</span>
                    <span>2/4</span>
                    <span>3/4</span>
                    <span>4/4</span>
                </div>
                <input type="range" max={4} min={1} onInput={(event)=>setTemp(event.target.value)}></input>
            </div>
            <h4>Tonality</h4>
            <Switch switchTone = {switchTone}/>
            <div>
                <Button onClick = {removeAllNote} remove = 'true' disabled = {!notesArray.length}>Remove</Button>
                <Button onClick = {clearNotes} remove = 'true' disabled = {!notesArray.length}>Clear</Button>
            </div>
            {result}
            <Button disabled = {!notesArray.length} onClick ={startOrdering} order = 'true'>Order</Button>
        </div>
     );
}
 
export default NotesControls;