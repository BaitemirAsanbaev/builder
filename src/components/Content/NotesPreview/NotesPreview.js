import classes from "./NotesPreview.module.css";
import sheet from "../../../images/sheet.png";
import Notes from "../Notes/Notes"
import Button from "../../UI/Button/Button";
import l from "../../../images/l.png"
import hbd from "../../../images/hbd.png"
import hp from "../../../images/hp.png"
import can from "../../../images/can.png"
    
    const NotesPreview = ({notes, playAll, ImportSong}) =>{
        const result = []
        for (const note in notes) {
                result.push(<Notes key = {notes[note] + note} type = {notes[note]}/>)
        }



    return ( 
        <div className = {classes.NotesPreview}>
            <div
                className = {classes.sheet}
                style = {{backgroundImage: `url(${sheet})`}}>
                {result}
            </div>
            <div className={classes.extraPreview}>
                <span className = {classes.total}>{notes.length} notes in total</span>
                <Button onClick={playAll} modalbutton = 'true' green = 'true'>Play</Button>
                <div onClick={()=>ImportSong('deathnote')} className={classes.song + " " + classes.l}>
                    <div>
                        <h3 className={classes.songTitle}>L's theme</h3>
                        <span>Recomended tempo: 1/4</span>
                    </div>
                    <div>
                        <img src={l} className={classes.lImg}/>
                    </div>
                </div>
                <div onClick={()=>ImportSong('happybday')} className={classes.song + " " + classes.hbd}>
                    <div>
                        <h3 className={classes.songTitle}>Happy birthday</h3>
                        <span>Recomended tempo: 1/4</span>
                    </div>
                    <div>
                        <img src={hbd}/>
                    </div>
                </div>
                <div onClick={()=>ImportSong('harrypotter')} className={classes.song + " " + classes.hp}>
                    <div>
                        <h3 className={classes.songTitle}>Harry Potter</h3>
                        <span>Recomended tempo: 1/4</span>
                    </div>
                    <div>
                        <img src={hp}/>
                    </div>
                </div>
                <div onClick={()=>ImportSong('cancan')} className={classes.song + " " + classes.hcanp}>
                    <div>
                        <h3 className={classes.songTitle}>Cancan</h3>
                        <span>Recomended tempo: 1/4</span>
                    </div>
                    <div>
                        <img src={can}/>
                    </div>
                </div>
            </div>
        </div>
     );
    }
 
export default NotesPreview;