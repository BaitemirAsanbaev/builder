import classes from "./NotesPreview.module.css";
import sheet from "../../../images/sheet.png";
import Notes from "../Notes/Notes"
import Button from "../../UI/Button/Button";
    
    const NotesPreview = ({notes, playAll}) =>{
        const result = []
        for (const note in notes) {
                result.push(<Notes key = {notes[note] + note} type = {notes[note]}/>)
        }



    return ( 
        <div className = {classes.NotesPreview}>
            <div
                className = {classes.sheet}
                style = {{backgroundImage: `url(${sheet})`}}>
                {result}
            </div>
            <div className={classes.extraPreview}>
                <div className = {classes.total}>{notes.length} notes in total</div>
                <Button onClick={()=>playAll()} modalButton = {true} green = {true}>Play</Button>
            </div>
        </div>
     );
    }
 
export default NotesPreview;