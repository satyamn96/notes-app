import React, { useContext } from "react";
import "./note.css";
import { ColorLight,ColorDark, Priority } from "./note-type";
import { FaTrash,FaEdit } from "react-icons/fa";
import Card from "../Card/card";
import { ThemeContext } from "../../context/theme/theme";

type NoteProps = {
  id: string,
  text: string,
  author?: string,
  priority: Priority,
  editNote:(id: string) => void,
  deleteNote:(id: string) => void
};
function Notes(props: NoteProps) {
  const theme = useContext(ThemeContext);
  // console.log("Color", props.priority);
  return (
    <Card
      bgColor={theme==='dark'? props.priority && ColorDark[props.priority] : props.priority && ColorLight[props.priority]}
      height="4"
      padding="3"
    >
      <>
      <div>
        <h2>{props.text}</h2>
        <h3>{props.author}</h3>
      </div>
      <div className="icons">
        <span className="editIcon icon" onClick={()=>props.editNote(props.id)}><FaEdit/></span>
        <span className="deleteIcon icon" onClick={()=>props.deleteNote(props.id)}><FaTrash/></span>
      </div>
      </>
    </Card>
  );
}

export default Notes;
