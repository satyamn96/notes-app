import { useState } from "react";
import "./add-note.css";
import { NoteType, Priority } from "../notes/note-type";
import { v4 as uuidv4 } from "uuid";
import Card from "../Card/card";

type AddNoteProps = {
  addNote: (note: NoteType) => void;
};
function AddNote(props: AddNoteProps) {
  console.log("props", props.addNote);
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [priority, setPriority] = useState<Priority>("low");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const handleAuthor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    // Check if any input field has a value
    if (text !== "" || author !== "") {
      console.log("Input fields are not empty");
      props.addNote({
        text,
        author,
        priority,
        id: uuidv4(),
      });
      setText("");
      setAuthor("");
      setPriority("low");
      return;
    }
    else{
      alert("Please Fill the input fields");
    }
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPriority(e.target.value as Priority);
  };

  return (
    <Card bgColor="#CFD8DC" padding="3">
      <form className="add_note">
        <div className="notesFeild">
          <label htmlFor="notes">Note :</label>
          <input
            className="noteInput"
            type="text"
            onChange={handleChange}
            value={text}
          />
        </div>
        <div className="authorFeild">
          <label htmlFor="notes">Author :</label>
          <input
            className="noteInput authorInput"
            type="text"
            onChange={handleAuthor}
            value={author}
          />
        </div>
        <div className="selectPriority">
          <select onChange={handleSelect} name="priority" id="selectPriority" value={priority}>
            <option value="high" className="priorityOption">
              High
            </option>
            <option value="medium" className="priorityOption">
              Medium
            </option>
            <option value="low" className="priorityOption">
              Low
            </option>
          </select>
        </div>
        <button className="addBtn" onClick={handleClick}>
          Add
        </button>
      </form>
    </Card>
  );
}

export default AddNote;
