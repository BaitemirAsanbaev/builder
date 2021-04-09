import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";
import Button from "../Button/Button";



const Modal = ({ show, cancel, finish, notes, playAll, setName}) => {
  const style = {
    transform: show ? "translateY(0)" : "translateY(-100vh)",
  };
  let input = <input className={classes.compName} type="text" onChange={(event)=>setName(event.target.value)} />

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
            {input}
        </div>
        <div className={classes.buttons}>
          <Button onClick={finish} modalbutton = 'true' green = 'true'>Save</Button>
          <Button onClick={playAll} modalbutton = 'true' green = 'true'>Play</Button>
          <Button onClick={cancel} modalbutton = 'true' red = 'true'>Cancel</Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;