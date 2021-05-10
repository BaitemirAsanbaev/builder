import classes from "./Order.module.css";

//component
const Order = ({ name, phone, address, notes, price }) => {

  //returns notes in order
  const output = Object.keys(notes)
    .map(note => <em>{notes[note]} - </em>);


  //JSX
  return (
    <div className={classes.Order}>
      <div>{name}, {phone}, {address}</div>
      <div>{output}</div>
      <strong>{price}</strong>
    </div>
  );
}

export default Order;