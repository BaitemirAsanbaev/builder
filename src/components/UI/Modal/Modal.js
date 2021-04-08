import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";
import Button from "../Button/Button";
import c from "../../../audio/c.mp3";
import d from "../../../audio/d.mp3";
import e from "../../../audio/e.mp3";
import f from "../../../audio/f.mp3";
import g from "../../../audio/g.mp3";
import a from "../../../audio/a.mp3";
import b from "../../../audio/b.mp3";
import cd from "../../../audio/cd.mp3";
import dd from "../../../audio/dd.mp3";
import fd from "../../../audio/fd.mp3";
import gd from "../../../audio/gd.mp3";
import ad from "../../../audio/ad.mp3";
import bd from "../../../audio/bd.mp3";
import cb from "../../../audio/cb.mp3";


const Modal = ({ show, cancel, notes }) => {
  const style = {
    transform: show ? "translateY(0)" : "translateY(-100vh)",
  };
  let inter;
  let i = 0;
  function playAll(){
      inter = setInterval(() => {
      const all = new Audio();
      all.preload = "auto";
      switch (notes[i]) {
        case 'c':
          all.src = c;
          break;
        case 'd':
          all.src = d;
          break;
        case 'e':
          all.src = e;
          break;
        case 'f':
          all.src = f;
          break;
        case 'g':
          all.src = g;
          break;
        case 'a':
          all.src = a;
          break;
        case 'b':
          all.src = b;
          break
        case 'cd':
          all.src = cd;
          break;
        case 'dd':
          all.src = dd;
          break;
        case 'ed':
          all.src = f;
          break;
        case 'fd':
          all.src = fd;
          break;
        case 'gd':
          all.src = gd;
          break;
        case 'ad':
          all.src = ad;
          break;
        case 'bd':
          all.src = bd;
          break
        case 'cb':
          all.src = cb;
          break;
        case 'db':
          all.src = cd;
          break;
        case 'eb':
          all.src = dd;
          break;
        case 'fb':
          all.src = e;
          break;
        case 'gb':
          all.src = fd;
          break;
        case 'ab':
          all.src = gd;
          break;
        case 'bb':
          all.src = ad;
          break;
        default:
      }
      all.play()
      console.log(notes[i])
      i++
        }, 500)

  }
  if(notes[i] < notes.length){
    clearInterval(inter)
  }

  return (
    <div className={classes.Modal}>
      <Backdrop show={show} click={cancel} />
      <div className={classes.content} style={style}>
          <div>
              <h2>Great melody!</h2>
              <span>{notes.length} notes</span>
          </div>
        <div>
            <h2>Name your composition</h2>
            <input className={classes.compName} type="text" />
        </div>
        <div className={classes.buttons}>
          <Button onClick={()=>playAll()} modalButton = {true} green = {true}>Play</Button>
          <Button onClick={cancel} modalButton = {true} red = {true}>Cancel</Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;