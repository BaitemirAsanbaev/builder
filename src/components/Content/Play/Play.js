import classes from "./Play.module.css";

import c from "../../../audio/do.mp3"
import d from "../../../audio/re.mp3";
import e from "../../../audio/mi.mp3";
import f from "../../../audio/fa.mp3";
import g from "../../../audio/sol.mp3";
import a from "../../../audio/lja.mp3";
import b from "../../../audio/si.mp3";

const Play = ({type}) => {
    function playAll(note){
        let allMus = new Audio();
        allMus.preload ='auto';
        switch(note){
          case 'c':
            allMus.src = c;
            break;
          case 'd':
            allMus.src = d;
            break;
          case 'e':
            allMus.src = e;
            break;
          case 'f':
            allMus.src = f;
            break;
          case 'g':
            allMus.src = g;
            break;
          case 'a':
            allMus.src = a;
            break;
          case 'b':
            allMus.src = b;
            break;
          default://impossible
            console.log("how the fuck you did this?")
        }
        allMus.play();
      }
    function playMus(list){
        for (const nota of list) {
            let interval = setInterval(() =>{
                playAll(nota)}, 1000
            )
        }
    }
    return (
        <div className ={classes.Play}>
            <button onClick = {playMus(type)}>Play</button>
        </div>
    );
}
 
export default Play;