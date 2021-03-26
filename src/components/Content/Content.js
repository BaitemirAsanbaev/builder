import classes from "./Content.module.css";
import NotesPreview from "./NotesPreview/NotesPreview"
import NotesControls from "./NotesControls/NotesControls"
import { useState } from "react";
const Content = () => {
    const [notes, setNotes] = useState ({
        c: 0,
        d: 0,
        e: 0,
        f: 0,
        g: 0,
        a: 0,
        b: 0,
        p: 0,
    });

    function addNote(type){
        const newNote = { ...notes };
        newNote[type]++;
        setNotes(newNote);
    }

    function removeNote(type){
        const newNote = { ...notes };
        newNote[type]--;
        setNotes(newNote);
    }

    return ( 
        <div className = {classes.Content}>
            <NotesPreview notes = {notes} />
            <NotesControls 
                notes = {notes}
                addNote = {addNote}
                removeNote = {removeNote}
                />
        </div>
     );
}
 
export default Content;