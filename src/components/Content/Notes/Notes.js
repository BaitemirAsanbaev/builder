import classes from "./Notes.module.css";
import note from "../../../images/note.png"

const Notes = ({type, fixed}) => {
    const types = {
        c: {backgroundImage: `url(${note})`, width: '35px', height: '35px'},
        d: {backgroundImage: `url(${note})`, width: '35px', height: '35px'},
        e: {backgroundImage: `url(${note})`, width: '35px', height: '35px'},
        f: {backgroundImage: `url(${note})`, width: '35px', height: '35px'},
        g: {backgroundImage: `url(${note})`, width: '35px', height: '35px'},
        a: {backgroundImage: `url(${note})`, width: '35px', height: '35px'},
        b: {backgroundImage: `url(${note})`, width: '35px', height: '35px'},
    }
    function getPosition (noteWidth){

    }
    return ( 
        <div  className = {classes.Notes}>
            <div></div>
        </div>
     );
}
 
export default Notes;