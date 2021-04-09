import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";
import Button from "../Button/Button";



const Modal = ({ show, cancel, finish, notes, playAll}) => {
  const style = {
    transform: show ? "translateY(0)" : "translateY(-100vh)",
  };


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
          <Button onClick={finish} modalbutton = 'true' green = 'true'>Save</Button>
          <Button onClick={playAll} modalbutton = 'true' green = 'true'>Play</Button>
          <Button onClick={cancel} modalbutton = 'true' red = 'true'>Cancel</Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;