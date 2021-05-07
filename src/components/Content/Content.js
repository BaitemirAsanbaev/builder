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
import axios from "../../axios";
import { Route, Switch } from "react-router";
import Songs from "./Songs/Songs";
import NotFound from "../UI/NotFound/NotFound";
import Auth from "./Auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { clear } from "../../redux/actions/builder";
const Content = () => {

    const notes = useSelector(state => state);
    
    const [ordering, setOrdering] = useState(false);


    const [tone, setTone] = useState ("");


    const [compName, setCompName] = useState('');


    const [temp, setTemp] = useState(4);

    const dispatch = useDispatch();


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
          }, temp * 100 + 100)
        
        if(i > notes.length){
          clearInterval(inter)
        }
        i = 0;
    }
  


    function finishOrdering(){
      axios.post('/order.json', Object.assign({name: compName}, notes)).then(()=>{
        
        setOrdering(false);
        console.log(ordering);
        dispatch(clear());
      })
    }


    function switchTone(tonalnost){
      setTone(tonalnost)
    }



    // function addNote(type){
    //     const newNote = [...notes]
    //     newNote.push(type)
    //     setNotes(newNote)
    // }
    //   function removeAllNote(){ 
    //     const newNote = [...notes]
    //     if (newNote.length !== -1) {
    //       newNote.splice(-1, 1);
    //     }
    //     setNotes(newNote);
    //   }
    //   function clearNotes(){
    //     setNotes([])
    //   }
    function startOrdering() {
      setOrdering(true);
    }
  
    function stopOrdering() {
      setOrdering(false);
    }

    return ( 
        <div className = {classes.Content}>
          <Switch>
            <Route exact path="/songs">
              <Songs  playAll = {playAll}/>
            </Route>
            <Route exact path="/auth">
              <Auth/>
            </Route>

            <Route exact path="/">
              <NotesPreview
                  notes = {notes}
                  playAll = {playAll}
                  setTemp = {setTemp}
                  startOrdering = {startOrdering}/>
              <NotesControls 
                  // addNote = {addNote}
                  // removeAllNote = {removeAllNote}
                  // clearNotes ={clearNotes}
                  switchTone = {switchTone}
                  tone = {tone}
                  notesArray = {notes}
                  startOrdering = {startOrdering}
                  />
                <Modal
                  notes = {notes}
                  show={ordering}
                  cancel={stopOrdering}
                  finish={finishOrdering}
                  playAll = {playAll}
                  setName = {setCompName}>
                </Modal>
            </Route>
            <Route path="/" component={NotFound}/>
          </Switch>

        </div>
     );
}
 
export default Content;