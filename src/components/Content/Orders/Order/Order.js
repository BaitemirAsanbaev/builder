import classes from "./Order.module.css";

const Order = ({ name, phone, address, notes, price }) => {
  const outputIngredients = Object.keys(notes)
    .map(note => <em>{note} - {notes[note]}</em>);

  return (
    <div className={classes.Order}>
      <div>{name}, {phone}, {address}</div>
      <div>{outputIngredients}</div>
      <strong>{price}</strong>
    </div>
  );
}

export default Order;