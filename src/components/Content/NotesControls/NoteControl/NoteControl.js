import classes from "./NoteControl.module.css";
import c from "../../../../audio/do.mp3";
import d from "../../../../audio/re.mp3";
import e from "../../../../audio/mi.mp3";
import f from "../../../../audio/fa.mp3";
import g from "../../../../audio/sol.mp3";
import a from "../../../../audio/lja.mp3";
import b from "../../../../audio/si.mp3";
const NoteControl = ({add, remove, type, tone}) => {
    function play(note){
      let relAudio = new Audio();
      relAudio.preload ='auto';
      
      switch(note){
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
          break;
        default://impossible
          // console.log("how the fuck you did this?")
      }
      relAudio.play();
      console.log(type)
    }
    let nota = type;
    if(type.length == 2){
      nota = type.substring(0, type.length - 1)
    }
    return (<div className={classes.NoteControl}>
      <button className={classes.more} onClick={() => {add(type); play(type)}}>+</button>
      <div className={classes.note}>{nota}</div>
      <button className={classes.less} onClick={() => remove(type)}>-</button>
    </div>);
}
 
export default NoteControl;