import React, { useContext, useState } from "react";
import "./home.css";
import Notes from "../../../components/notes/Note";
import AllNotes from "../../../components/notes/data";
// import MyForm from "../../../components/Form/NoteForm";
import AddNote from "../../../components/add-note/add-note";
import { NoteType } from "../../../components/notes/note-type";
import { ThemeContext } from "../../../context/theme/theme";

function Home() {
  const [notes, setNotes] = useState(AllNotes);
  const [editMode, setEditMode] = useState(false);
  const [noteToBeEdited, setNoteToBeEdited] = useState<NoteType | null>(null)
  const addNote = (note: NoteType) => {
    setNotes([note, ...notes]);
  };
  const theme = useContext(ThemeContext)
  const updateNote = (updatedNote: NoteType)=>{
    const index = notes.findIndex((note)=>note.id === updatedNote.id);
    console.log('index',index);
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1, updatedNote); //splice(index of that element which is delete , from that point how many elements are deleted)
    setNotes(updatedNotes);
    setEditMode(false);
  }

  console.log("notes", notes);

  const editNote = (id:string) =>{
    console.log('edit',id);
    const note = notes.find((note)=>note.id === id);
    setEditMode(true);
    if(note){
      setNoteToBeEdited(note);  
    }
  }
  const deleteNote = (id:string) =>{
    console.log('delete',id);
    const index = notes.findIndex((note)=>note.id === id);
    console.log('index',index);
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1); //splice(index of that element which is delete , from that point how many elements are deleted)
    setNotes(updatedNotes);
  }

  return (
    // <ThemeContext.Provider value="dark">
    <div className={`home ${theme}`}>
      {/* <div className="form"><MyForm/></div> */}
      <h1>Notes App : [{notes.length}] Avaliable Notes</h1>
      <AddNote addNote={addNote} editMode={editMode} noteToBeEdited={noteToBeEdited} updateNote={updateNote} />
      <div className="Notes">
        {notes.map((note) => (
          <Notes
            key={note.id}
            text={note.text}
            id={note.id}
            priority={note.priority}
            author={note.author}
            editNote={editNote}
            deleteNote={deleteNote}
          />
        ))}
      </div>
    </div>
    // </ThemeContext.Provider>
  );
}

export default Home;
