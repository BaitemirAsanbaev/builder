  
import classes from "./Button.module.css";

const Button = (props) => {
  const className = [classes.Button];
  if(props.order){
    className.push(classes.order)
  }
  if(props.modalButton){
    className.push(classes.modalButton)
  }
  return (
    <button {...props} className={className.join(" ")}>{props.children}</button>
  );
}

export default Button;