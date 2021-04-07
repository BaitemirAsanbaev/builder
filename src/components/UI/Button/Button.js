  
import classes from "./Button.module.css";

const Button = (props) => {
  const className = [classes.Button];
  if(props.order){
    className.push(classes.order)
  }
  return (
    <button {...props} className={className.join(" ")}>{props.children}</button>
  );
}

export default Button;