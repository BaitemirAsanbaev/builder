import classes from "./Notes.module.css";
import c from "../../../images/c.png"
import d from "../../../images/d.png"
import e from "../../../images/e.png"
import f from "../../../images/f.png"
import g from "../../../images/g.png"
import a from "../../../images/a.png"
import b from "../../../images/b.png"
import cb from "../../../images/cb.png"
import db from "../../../images/db.png"
import eb from "../../../images/eb.png"
import fb from "../../../images/fb.png"
import gb from "../../../images/gb.png"
import ab from "../../../images/ab.png"
import bb from "../../../images/bb.png"
import cd from "../../../images/cd.png"
import dd from "../../../images/dd.png"
import ed from "../../../images/ed.png"
import fd from "../../../images/fd.png"
import gd from "../../../images/gd.png"
import ad from "../../../images/ad.png"
import bd from "../../../images/bd.png"
import React from 'react'

const Notes = ({type}) => {
    const types = {
        c: {backgroundImage: `url(${c})`, backgroundRepeat: 'no-repeat', width: '55px', height: '300px', margin: '0px 15px', transform: 'translateY(72px)'},
        d: {backgroundImage: `url(${d})`, backgroundRepeat: 'no-repeat', width: '55px', height: '300px', margin: '0px 15px', transform: 'translateY(72px)'},
        e: {backgroundImage: `url(${e})`, backgroundRepeat: 'no-repeat', width: '55px', height: '300px', margin: '0px 15px', transform: 'translateY(72px)'},
        f: {backgroundImage: `url(${f})`, backgroundRepeat: 'no-repeat', width: '55px', height: '300px', margin: '0px 15px', transform: 'translateY(72px)'},
        g: {backgroundImage: `url(${g})`, backgroundRepeat: 'no-repeat', width: '55px', height: '300px', margin: '0px 15px', transform: 'translateY(72px)'},
        a: {backgroundImage: `url(${a})`, backgroundRepeat: 'no-repeat', width: '55px', height: '300px', margin: '0px 15px', transform: 'translateY(72px)'},
        b: {backgroundImage: `url(${b})`, backgroundRepeat: 'no-repeat', width: '55px', height: '300px', margin: '0px 15px', transform: 'translateY(72px)'},
        cb: {backgroundImage: `url(${cb})`, backgroundRepeat: 'no-repeat', width: '55px', height: '300px', margin: '0px 15px', transform: 'translateY(72px)'},
        db: {backgroundImage: `url(${db})`, backgroundRepeat: 'no-repeat', width: '55px', height: '300px', margin: '0px 15px', transform: 'translateY(72px)'},
        eb: {backgroundImage: `url(${eb})`, backgroundRepeat: 'no-repeat', width: '55px', height: '300px', margin: '0px 15px', transform: 'translateY(72px)'},
        fb: {backgroundImage: `url(${fb})`, backgroundRepeat: 'no-repeat', width: '55px', height: '300px', margin: '0px 15px', transform: 'translateY(72px)'},
        gb: {backgroundImage: `url(${gb})`, backgroundRepeat: 'no-repeat', width: '55px', height: '300px', margin: '0px 15px', transform: 'translateY(72px)'},
        ab: {backgroundImage: `url(${ab})`, backgroundRepeat: 'no-repeat', width: '55px', height: '300px', margin: '0px 15px', transform: 'translateY(72px)'},
        bb: {backgroundImage: `url(${bb})`, backgroundRepeat: 'no-repeat', width: '55px', height: '300px', margin: '0px 15px', transform: 'translateY(72px)'},
        cd: {backgroundImage: `url(${cd})`, backgroundRepeat: 'no-repeat', width: '55px', height: '300px', margin: '0px 15px', transform: 'translateY(72px)'},
        dd: {backgroundImage: `url(${dd})`, backgroundRepeat: 'no-repeat', width: '55px', height: '300px', margin: '0px 15px', transform: 'translateY(72px)'},
        ed: {backgroundImage: `url(${ed})`, backgroundRepeat: 'no-repeat', width: '55px', height: '300px', margin: '0px 15px', transform: 'translateY(72px)'},
        fd: {backgroundImage: `url(${fd})`, backgroundRepeat: 'no-repeat', width: '55px', height: '300px', margin: '0px 15px', transform: 'translateY(72px)'},
        gd: {backgroundImage: `url(${gd})`, backgroundRepeat: 'no-repeat', width: '55px', height: '300px', margin: '0px 15px', transform: 'translateY(72px)'},
        ad: {backgroundImage: `url(${ad})`, backgroundRepeat: 'no-repeat', width: '55px', height: '300px', margin: '0px 15px', transform: 'translateY(72px)'},
        bd: {backgroundImage: `url(${bd})`, backgroundRepeat: 'no-repeat', width: '55px', height: '300px', margin: '0px 15px', transform: 'translateY(72px)'},
        p: {backgroundColor: 'black', width: '40px', height: '13px', margin: '0px 15px', transform: 'translateY(123px)'}
    }
    
    return ( 
        <div  className = {classes.Notes} style = {types[type]}>
            
        </div>
     );
}
 
export default React.memo(Notes);