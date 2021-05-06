import classes from "./NoteControl.module.css";
import c from "../../../../audio/c.mp3";
import d from "../../../../audio/d.mp3";
import e from "../../../../audio/e.mp3";
import f from "../../../../audio/f.mp3";
import g from "../../../../audio/g.mp3";
import a from "../../../../audio/a.mp3";
import b from "../../../../audio/b.mp3";
import cd from "../../../../audio/cd.mp3";
import dd from "../../../../audio/dd.mp3";
import fd from "../../../../audio/fd.mp3";
import gd from "../../../../audio/gd.mp3";
import ad from "../../../../audio/ad.mp3";
import bd from "../../../../audio/bd.mp3";
import cb from "../../../../audio/cb.mp3";
import Button from "../../../UI/Button/Button";
import { useDispatch } from "react-redux";
import { add } from "../../../../redux/actions/builder";
const NoteControl = ({ type }) => {

  const dispatch = useDispatch();



  function play(note){
  

  
    let relAudio = new Audio();
    relAudio.preload = 'auto';

    switch (note) {
      case 'c':
        relAudio.src = c;
        break;
      case 'd':
        relAudio.src = d;
        break;
      case 'e':
        relAudio.src = e;
        break;
      case 'f':
        relAudio.src = f;
        break;
      case 'g':
        relAudio.src = g;
        break;
      case 'a':
        relAudio.src = a;
        break;
      case 'b':
        relAudio.src = b;
        break
      case 'cd':
        relAudio.src = cd;
        break;
      case 'dd':
        relAudio.src = dd;
        break;
      case 'ed':
        relAudio.src = f;
        break;
      case 'fd':
        relAudio.src = fd;
        break;
      case 'gd':
        relAudio.src = gd;
        break;
      case 'ad':
        relAudio.src = ad;
        break;
      case 'bd':
        relAudio.src = bd;
        break
      case 'cb':
        relAudio.src = cb;
        break;
      case 'db':
        relAudio.src = cd;
        break;
      case 'eb':
        relAudio.src = dd;
        break;
      case 'fb':
        relAudio.src = e;
        break;
      case 'gb':
        relAudio.src = fd;
        break;
      case 'ab':
        relAudio.src = gd;
        break;
      case 'bb':
        relAudio.src = ad;
        break;
      default:
    }
    relAudio.play();
  }
  let nota = type;
  if (type.length === 2) {
    nota = type.substring(0, type.length - 1)
  }

  return (<div className={classes.NoteControl}>
      <Button
      addbtn = 'true'
      onClick={()=>{
        dispatch(add(type));
        play(type)}}>
          {nota}
      </Button>
  </div>);
}

export default NoteControl;