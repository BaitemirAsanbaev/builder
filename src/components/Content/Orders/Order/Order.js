import classes from "./Order.module.css";

//component
const Order = ({ name, phone, address, notes, composition_name }) => {

  //returns notes in order
  const output = Object.keys(notes)
    .map(note => <em key={note} className={classes.notes}>{notes[note]} - </em>);


  //JSX
  return (
    <div className={classes.Order}>
      <strong>{composition_name}</strong>
      <div>{output}</div>
      <br />
      <div>{name} / {phone} / {address}</div>
      <br/>
      <hr />
    </div>
  );
}

export default Order;