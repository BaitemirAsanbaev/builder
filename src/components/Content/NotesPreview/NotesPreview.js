import classes from "./NotesPreview.module.css";
import Notes from "../Notes/Notes"
import Button from "../../UI/Button/Button";

//component
const NotesPreview = ({ notes, playAll, setTempo, startOrdering }) => {

  //constant which stores notes
  const result = []

  for (const note in notes) {
    result.push(<Notes key={notes[note] + note} type={notes[note]} />)
  }

  //JSX
  return (
    <div className={classes.NotesPreview}>
      <div
        className={classes.sheet}>
        {result}
      </div>

      <div className={classes.extraPreview}>
        <span className={classes.total}>{notes.length} notes in total</span>
        <div className={classes.tempdiv}>
          <h4>Tempo</h4>
          <div className={classes.templabels}>
            <span>1/4</span>
            <span>2/4</span>
            <span>3/4</span>
            <span>4/4</span>
          </div>
          <input type="range" max={4} min={1} onInput={(event) => setTempo(event.target.value)} />
          <Button onClick={playAll} modalbutton='true' green='true' mt="true">Play</Button>
          <Button disabled={!notes.length} onClick={startOrdering} order='true' mt="true">Order</Button>
        </div>

      </div>
    </div>
  );
}

export default NotesPreview;