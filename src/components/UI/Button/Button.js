  
import classes from "./Button.module.css";

const Button = (props) => {
  const className = [classes.Button];
  if(props.order){
    className.push(classes.order)
  }
  if(props.modalbutton){
    className.push(classes.modalbutton)
  }
  if(props.green){
    className.push(classes.green)
  }
  if(props.red){
    className.push(classes.red)
  }
  if(props.addbtn){
    className.push(classes.addbtn)
  }
  if(props.remove){
    className.push(classes.remove)
  }
  
  return (
    <button {...props} className={className.join(" ")}>{props.children}</button>
  );
}

export default Button;