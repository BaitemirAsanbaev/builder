import classes from "./Notes.module.css";
import note from "../../../images/note.png"

const Notes = ({type, fixed}) => {
    const types = {
        c: {backgroundImage: `url(${note})`, width: '55px', height: '55px', margin: '10px 15px', transform: 'translateY(200px)', },
        d: {backgroundImage: `url(${note})`, width: '55px', height: '55px', margin: '10px 15px', transform: 'translateY(180px)',},
        e: {backgroundImage: `url(${note})`, width: '55px', height: '55px', margin: '10px 15px', transform: 'translateY(160px)',},
        f: {backgroundImage: `url(${note})`, width: '55px', height: '55px', margin: '10px 15px', transform: 'translateY(140px)',},
        g: {backgroundImage: `url(${note})`, width: '55px', height: '55px', margin: '10px 15px', transform: 'translateY(120px)',},
        a: {backgroundImage: `url(${note})`, width: '55px', height: '55px', margin: '10px 15px', transform: 'translateY(100px)',},
        b: {backgroundImage: `url(${note})`, width: '55px', height: '55px', margin: '10px 15px', transform: 'translateY(80px)',},
    }
    
    return ( 
        <div  className = {classes.Notes} style = {types[type]}>
            
        </div>
     );
}
 
export default Notes;