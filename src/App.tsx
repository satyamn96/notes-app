import React, { useState } from "react";
import "./App.css";
import Notes from "./components/notes/Note";
import AllNotes from "./components/notes/data";
// import MyForm from "./components/Form/NoteForm";
import AddNote from "./components/add-note/add-note";
import { NoteType } from "./components/notes/note-type";

function App() {
  const [notes, setNotes] = useState(AllNotes);
  const addNote = (note: NoteType) => {
    setNotes([note, ...notes]);
  };
  console.log("notes", notes);

  const editNote = (id:string) =>{
    console.log('edit',id);
  }
  const deleteNote = (id:string) =>{
    console.log('delete',id);
  }

  return (
    <div className="App">
      {/* <div className="form">
        <MyForm/>
      </div> */}
      <h1>Notes App</h1>
      <AddNote addNote={addNote} />
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
  );
}

export default App;
