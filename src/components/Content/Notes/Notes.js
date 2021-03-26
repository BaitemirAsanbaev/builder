import classes from "./Notes.module.css";
import note from "../../../images/note.png"
import React from 'react'

const Notes = ({type, fixed}) => {
    const types = {
        c: {backgroundImage: `url(${note})`, width: '55px', height: '55px', margin: '10px 15px', transform: 'translateY(200px) translateX(100px)', },
        d: {backgroundImage: `url(${note})`, width: '55px', height: '55px', margin: '10px 15px', transform: 'translateY(180px) translateX(100px)',},
        e: {backgroundImage: `url(${note})`, width: '55px', height: '55px', margin: '10px 15px', transform: 'translateY(160px) translateX(100px)',},
        f: {backgroundImage: `url(${note})`, width: '55px', height: '55px', margin: '10px 15px', transform: 'translateY(140px) translateX(100px)',},
        g: {backgroundImage: `url(${note})`, width: '55px', height: '55px', margin: '10px 15px', transform: 'translateY(120px) translateX(100px)',},
        a: {backgroundImage: `url(${note})`, width: '55px', height: '55px', margin: '10px 15px', transform: 'translateY(100px) translateX(100px)',},
        b: {backgroundImage: `url(${note})`, width: '55px', height: '55px', margin: '10px 15px', transform: 'translateY(80px) translateX(100px)',},
    }
    
    return ( 
        <div  className = {classes.Notes} style = {types[type]}>
            
        </div>
     );
}
 
export default React.memo(Notes);