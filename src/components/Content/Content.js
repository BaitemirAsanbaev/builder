import classes from "./Content.module.css";
import NotesPreview from "./NotesPreview/NotesPreview"
import NotesControls from "./NotesControls/NotesControls"
import { useState } from "react";
const Content = () => {
    
    const [notes, setNotes] = useState ([

    ]);
    const [tone, setTone] = useState ("");


    function switchTone(tonalnost){
      setTone(tonalnost)
    }



    function addNote(type){
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
                />
        </div>
     );
}
 
export default Content;