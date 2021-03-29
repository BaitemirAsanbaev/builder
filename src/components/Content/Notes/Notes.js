import classes from "./Notes.module.css";
import c from "../../../images/c.png"
import d from "../../../images/d.png"
import e from "../../../images/e.png"
import f from "../../../images/f.png"
import g from "../../../images/g.png"
import a from "../../../images/a.png"
import b from "../../../images/b.png"
import React from 'react'

const Notes = ({type}) => {
    const types = {
        c: {backgroundImage: `url(${c})`, width: '55px', height: '220px', margin: '10px 15px', transform: 'translateY(-10px)'},
        d: {backgroundImage: `url(${d})`, width: '55px', height: '220px', margin: '10px 15px', transform: 'translateY(-10px)'},
        e: {backgroundImage: `url(${e})`, width: '55px', height: '220px', margin: '10px 15px', transform: 'translateY(-10px)'},
        f: {backgroundImage: `url(${f})`, width: '55px', height: '220px', margin: '10px 15px', transform: 'translateY(-10px)'},
        g: {backgroundImage: `url(${g})`, width: '55px', height: '220px', margin: '10px 15px', transform: 'translateY(-10px)'},
        a: {backgroundImage: `url(${a})`, width: '55px', height: '220px', margin: '10px 15px', transform: 'translateY(-10px)'},
        b: {backgroundImage: `url(${b})`, width: '55px', height: '220px', margin: '10px 15px', transform: 'translateY(-10px)'},
        p: {backgroundColor: 'black', width: '40px', height: '13px', margin: '10px 15px', transform: 'translateY(123px)'}
    }
    
    return ( 
        <div  className = {classes.Notes} style = {types[type]}>
            
        </div>
     );
}
 
export default React.memo(Notes);