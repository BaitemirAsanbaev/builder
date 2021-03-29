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
        c: {backgroundImage: `url(${c})`, backgroundRepeat: 'no-repeat', width: '55px', height: '300px', margin: '0px 15px', transform: 'translateY(72x)'},
        d: {backgroundImage: `url(${d})`, backgroundRepeat: 'no-repeat', width: '55px', height: '300px', margin: '0px 15px', transform: 'translateY(72px)'},
        e: {backgroundImage: `url(${e})`, backgroundRepeat: 'no-repeat', width: '55px', height: '300px', margin: '0px 15px', transform: 'translateY(72px)'},
        f: {backgroundImage: `url(${f})`, backgroundRepeat: 'no-repeat', width: '55px', height: '300px', margin: '0px 15px', transform: 'translateY(72px)'},
        g: {backgroundImage: `url(${g})`, backgroundRepeat: 'no-repeat', width: '55px', height: '300px', margin: '0px 15px', transform: 'translateY(72px)'},
        a: {backgroundImage: `url(${a})`, backgroundRepeat: 'no-repeat', width: '55px', height: '300px', margin: '0px 15px', transform: 'translateY(72px)'},
        b: {backgroundImage: `url(${b})`, backgroundRepeat: 'no-repeat', width: '55px', height: '300px', margin: '0px 15px', transform: 'translateY(72px)'},
        p: {backgroundColor: 'black', width: '40px', height: '13px', margin: '0px 15px', transform: 'translateY(123px)'}
    }
    
    return ( 
        <div  className = {classes.Notes} style = {types[type]}>
            
        </div>
     );
}
 
export default React.memo(Notes);