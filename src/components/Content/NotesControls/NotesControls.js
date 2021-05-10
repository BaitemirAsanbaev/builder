import classes from "./NotesControls.module.css";
import NoteControl from "./NoteControl/NoteControl";
import Switch from "./Switch/Switch";
import Button from "../../UI/Button/Button";
import { useDispatch } from "react-redux";
import { clear, remove } from "../../../redux/actions/notes";

//component
const NotesControls = ({ tone, switchTone, notesArray}) => {

    //dispatch constant
    const dispatch = useDispatch();

    //notes which will be contained in buttons
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

    //setting every button
    for(const note in notes){
        result.push(<NoteControl
            key = {notes[note]}
            type = {notes[note] + tone}
            notes = {notes}
        />)
    }

    //JSX
    return ( 
        <div className = {classes.NotesControls}>

            <h4>Tonality</h4>
            <Switch switchTone = {switchTone}/>
            <div className={classes.contBtns}>
                <Button onClick = {()=>{dispatch(remove())}} remove = 'true' disabled = {!notesArray.length}>Remove</Button>
                <Button onClick = {()=>{dispatch(clear())}} remove = 'true' disabled = {!notesArray.length}>Clear</Button>
            </div>
            {result}
        </div>
     );
}
 
export default NotesControls;