import React from "react";
import "./note.css";
import { Color, Priority } from "./note-type";
import { FaTrash,FaEdit } from "react-icons/fa";
import Card from "../Card/card";

type NoteProps = {
  id: string,
  text: string,
  author?: string,
  priority: Priority,
  editNote:(id: string) => void,
  deleteNote:(id: string) => void
};
function Notes(props: NoteProps) {
  console.log("Color", props.priority);
  return (
    <Card
      bgColor={props.priority && Color[props.priority]}
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
