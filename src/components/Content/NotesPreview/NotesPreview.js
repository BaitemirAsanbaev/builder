import classes from "./NotesPreview.module.css";
import sheet from "../../../images/sheet.png"
const NotesPreview = (notes) => {
    return ( 
        <div className = {classes.NotesPreview}>
            <img src = {sheet} alt = "sheet"/>
        </div>
     );
}
 
export default NotesPreview;