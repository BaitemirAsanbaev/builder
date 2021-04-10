import classes from "./NotesPreview.module.css";
import sheet from "../../../images/sheet.png";
import Notes from "../Notes/Notes"
import Button from "../../UI/Button/Button";
    
    const NotesPreview = ({notes, playAll, ImportSong}) =>{
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
                <Button onClick={playAll} modalbutton = 'true' green = 'true'>Play</Button>
                <Button onClick={()=>ImportSong('deathnote')} modalbutton = 'true' green = 'true'>L's theme</Button>
                <Button onClick={()=>ImportSong('happybday')} modalbutton = 'true' green = 'true'>Happy birthday</Button>
                <Button onClick={()=>ImportSong('harrypotter')} modalbutton = 'true' green = 'true'>Harry Potter</Button>
                <Button onClick={()=>ImportSong('cancan')} modalbutton = 'true' green = 'true'>Cancan</Button>
            </div>
        </div>
     );
    }
 
export default NotesPreview;