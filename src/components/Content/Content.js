import classes from "./Content.module.css";
import NotesPreview from "./NotesPreview/NotesPreview"
import NotesControls from "./NotesControls/NotesControls"
import { useEffect, useState } from "react";
import axios from "axios";
const Content = () => {
    
    const [notes, setNotes] = useState ([

    ]);

    // useEffect(()=>{
    //   axios.get('https://builder-a3cdc-default-rtdb.firebaseio.com/notes.json').then((response)=>{
    //     const notes = response.data;
    //     setNotes(Object.values(notes))
    //     console.log(Object.assign({}, notes))
    //   })
    // }, [])


    const [tone, setTone] = useState ("");


    function switchTone(tonalnost){
      setTone(tonalnost)
    }



    function addNote(type){
      // axios.post('https://builder-a3cdc-default-rtdb.firebaseio.com/notes.json', Object.assign({}, notes))
        const newNote = [...notes]
        newNote.push(type)
        setNotes(newNote)
    }
    function removeNote(type){ 
        const newNote = [...notes]
        const index = newNote.lastIndexOf(type);
        if (index !== -1) {
          newNote.splice(index, 1);
        }
        setNotes(newNote);
      }
    return ( 
        <div className = {classes.Content}>
            <NotesPreview notes = {notes}/>
            <NotesControls 
                addNote = {addNote}
                removeNote = {removeNote}
                switchTone = {switchTone}
                tone = {tone}
                notesArray = {notes}
                />
        </div>
     );
}
 
export default Content;