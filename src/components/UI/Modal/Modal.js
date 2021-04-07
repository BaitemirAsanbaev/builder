import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";
import Button from "../Button/Button";

const Modal = ({ show, cancel, notes }) => {
  const style = {
    transform: show ? "translateY(0)" : "translateY(-100vh)",
  };

  return (
    <div className={classes.Modal}>
      <Backdrop show={show} click={cancel} />
      <div className={classes.content} style={style}>
          <div>
              <h2>Great melody</h2>
              <span>{notes.length} notes</span>
          </div>
        <div>
            <h2>Name your composition</h2>
            <input className={classes.compName} type="text" />
        </div>
        <div className={classes.buttons}>
          <Button onClick={cancel} modalButton = {true} green = {true}>Create</Button>
          <Button onClick={cancel} modalButton = {true} red = {true}>Cancel</Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;