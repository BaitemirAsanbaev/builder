import classes from "./Notes.module.css";
import note from "../../../images/note.png"
import React from 'react'

const Notes = ({type}) => {
    const types = {
        c: {backgroundImage: `url(${note})`, width: '55px', height: '55px', margin: '10px 15px', transform: 'translateY(151px)'},
        d: {backgroundImage: `url(${note})`, width: '55px', height: '55px', margin: '10px 15px', transform: 'translateY(131px)'},
        e: {backgroundImage: `url(${note})`, width: '55px', height: '55px', margin: '10px 15px', transform: 'translateY(111px)'},
        f: {backgroundImage: `url(${note})`, width: '55px', height: '55px', margin: '10px 15px', transform: 'translateY(91px)'},
        g: {backgroundImage: `url(${note})`, width: '55px', height: '55px', margin: '10px 15px', transform: 'translateY(71px)'},
        a: {backgroundImage: `url(${note})`, width: '55px', height: '55px', margin: '10px 15px', transform: 'translateY(51px)'},
        b: {backgroundImage: `url(${note})`, width: '55px', height: '55px', margin: '10px 15px', transform: 'translateY(30px)'},
        p: {backgroundColor: 'black', width: '40px', height: '13px', margin: '10px 15px', transform: 'translateY(123px)'}
    }
    
    return ( 
        <div  className = {classes.Notes} style = {types[type]}>
            
        </div>
     );
}
 
export default React.memo(Notes);