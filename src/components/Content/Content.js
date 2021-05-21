import classes from "./Content.module.css";
import NotesPreview from "./NotesPreview/NotesPreview"
import NotesControls from "./NotesControls/NotesControls"
import { useState } from "react";
import Modal from "../UI/Modal/Modal";
import c from "../../audio/c.mp3";
import d from "../../audio/d.mp3";
import e from "../../audio/e.mp3";
import f from "../../audio/f.mp3";
import g from "../../audio/g.mp3";
import a from "../../audio/a.mp3";
import b from "../../audio/b.mp3";
import cd from "../../audio/cd.mp3";
import dd from "../../audio/dd.mp3";
import fd from "../../audio/fd.mp3";
import gd from "../../audio/gd.mp3";
import ad from "../../audio/ad.mp3";
import bd from "../../audio/bd.mp3";
import cb from "../../audio/cb.mp3";
import {useHistory } from "react-router";
import { useSelector } from "react-redux";

//component
const Content = () => {


//states

    const isAuthenticated = useSelector(state => state.auth.token !== null);

    const notes = useSelector(state => state.notes);
    
    const [ordering, setOrdering] = useState(false);

    const [tone, setTone] = useState ("");

    const [tempo, setTempo] = useState(4);

    const history = useHistory()


  //functions
 
  // Plays the notes stored in store.
    let inter;
    let i = 0;

    function playAll(){
        inter = setInterval(() => {
        const all = new Audio();
        all.preload = "auto";
        switch (notes[i]) {
          case 'c':
            all.src = c;
            break;
          case 'd':
            all.src = d;
            break;
          case 'e':
            all.src = e;
            break;
          case 'f':
            all.src = f;
            break;
          case 'g':
            all.src = g;
            break;
          case 'a':
            all.src = a;
            break;
          case 'b':
            all.src = b;
            break
          case 'cd':
            all.src = cd;
            break;
          case 'dd':
            all.src = dd;
            break;
          case 'ed':
            all.src = f;
            break;
          case 'fd':
            all.src = fd;
            break;
          case 'gd':
            all.src = gd;
            break;
          case 'ad':
            all.src = ad;
            break;
          case 'bd':
            all.src = bd;
            break
          case 'cb':
            all.src = cb;
            break;
          case 'db':
            all.src = cd;
            break;
          case 'eb':
            all.src = dd;
            break;
          case 'fb':
            all.src = e;
            break;
          case 'gb':
            all.src = fd;
            break;
          case 'ab':
            all.src = gd;
            break;
          case 'bb':
            all.src = ad;
            break;
          default:
        }
        all.play()
        i++
          }, tempo * 100 + 100)
        
        if(i > notes.length){
          clearInterval(inter)
        }
        i = 0;
    }

    //moves to auth
    function finishOrdering(){
        history.push('/auth')
        setOrdering(false);
    }

    //shows modal window
    function startOrdering() {
      if(isAuthenticated){
        setOrdering(true);
      }
      else{
        history.push('./authent')
      }

    }
  
    //hides modal window
    function stopOrdering() {
      setOrdering(false);
    }



  //JSX
    return ( 
        <div className = {classes.Content}>
              <NotesPreview
                  notes = {notes}
                  playAll = {playAll}
                  setTempo = {setTempo}
                  startOrdering = {startOrdering}/>
              <NotesControls 
                  switchTone = {setTone}
                  tone = {tone}
                  notesArray = {notes}
                  startOrdering = {startOrdering}
                  />
                <Modal
                  notes = {notes}
                  show={ordering}
                  cancel={stopOrdering}
                  finish={finishOrdering}
                  playAll = {playAll}>
                </Modal>
        </div>
     );
}
 
export default Content;