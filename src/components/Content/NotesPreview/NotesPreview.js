import classes from "./NotesPreview.module.css";
import sheet from "../../../images/sheet.png";
import Notes from "../Notes/Notes"
    
    const NotesPreview = ({notes}) =>{
        const result = []
        for (const note in notes) {
            for (let i = 0; i < notes[note]; i++){
                result.push(<Notes key = {note + i} type = {note}/>)
            }
        }
    return ( 
        <div className = {classes.NotesPreview}>
            <div
                className = {classes.sheet}
                style = {{backgroundImage: `url(${sheet})`}}>
                {result}
            </div>
        </div>
     );
    }
 
export default NotesPreview;