import classes from "./NotesPreview.module.css";
import sheet from "../../../images/sheet.png";
import Notes from "../Notes/Notes"
import Button from "../../UI/Button/Button";
import l from "../../../images/l.png"
import hbd from "../../../images/hbd.png"
import hp from "../../../images/hp.png"
import can from "../../../images/can.png"
import wm from "../../../images/wellerman.png"
    
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
                        <img alt="L" src={l} className={classes.lImg}/>
                    </div>
                </div>
                <div onClick={()=>ImportSong('happybday')} className={classes.song + " " + classes.hbd}>
                    <div>
                        <h3 className={classes.songTitle}>Happy birthday</h3>
                        <span>Recomended tempo: 3/4</span>
                    </div>
                    <div>
                        <img alt="happy birthday" src={hbd}/>
                    </div>
                </div>
                <div onClick={()=>ImportSong('harrypotter')} className={classes.song + " " + classes.hp}>
                    <div>
                        <h3 className={classes.songTitle}>Harry Potter</h3>
                        <span>Recomended tempo: 2/4</span>
                    </div>
                    <div>
                        <img alt="harry potter" src={hp}/>
                    </div>
                </div>
                <div onClick={()=>ImportSong('cancan')} className={classes.song + " " + classes.can}>
                    <div>
                        <h3 className={classes.songTitle}>Cancan</h3>
                        <span>Recomended tempo: 2/4</span>
                    </div>
                    <div>
                        <img alt="cancan" src={can}/>
                    </div>
                </div>
                <div onClick={()=>ImportSong('wellerman')} className={classes.song + " " + classes.wm}>
                    <div>
                        <h3 className={classes.songTitle}>Wellerman</h3>
                        <span>Recomended tempo: 1/4</span>
                    </div>
                    <div>
                        <img alt="cancan" src={wm}/>
                    </div>
                </div>
            </div>
        </div>
     );
    }
 
export default NotesPreview;