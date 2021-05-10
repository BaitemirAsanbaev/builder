import classes from "./Switch.module.css";

//component
const Switch = ({ switchTone }) => {

  //radio-inputs constants 
  const inpB = <input
    type="radio"
    id="bemol"
    name="tune"
    onChange={() => switchTone("b")} />

  const inpN = <input
    type="radio"
    id="none"
    name="tune"
    chacked="checked"
    onChange={() => switchTone("")} />

  const inpD = <input
    type="radio"
    id="diese"
    name="tune"
    onChange={() => switchTone("d")} />


  //JSX
  return (
    <div className={classes.Switch}>
      <div className={classes.inp}>
        <label htmlFor="bemol">bemol</label>
        {inpB}
      </div>
      <div className={classes.inp}>
        <label htmlFor="none">none</label>
        {inpN}
      </div>
      <div className={classes.inp}>
        <label htmlFor="diese">diese</label>
        {inpD}
      </div>
    </div>
  );
}

export default Switch;