import React, { useReducer, useState } from "react";
import "./App.css";
import { ThemeContext } from "./context/theme/theme";
import Home from "./components/pages/home/home";
import Switch from "react-switch";
import { FaSun, FaMoon } from "react-icons/fa";
import { NoteType } from "./components/notes/note-type";

type StateType = {
  notes: NoteType[];
  editMode: boolean;
  noteToBeEdited: NoteType | null;
};

function App() {
  const [theme, setTheme] = useState("light");
  const [checked, setChecked] = useState(false);

  const [state, dispatch] = useReducer(
    (state: StateType, action: { type: string; payload: any }) => {
      switch (action.type) {
        default:
          return state;
      }
    },
    { notes: [], editMode: false, noteToBeEdited: null }
  );

  const changeHandle = (check: boolean) => {
    setChecked(check);
    console.log(checked, check);
    check ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeContext.Provider value={theme}>
      <Switch
        onChange={changeHandle}
        checked={checked}
        className="react-switch"
        checkedIcon={
          <FaSun
            size={26}
            color="yellow"
            style={{ paddingTop: "4px", paddingRight: "4px", float: "left" }}
          />
        }
        uncheckedIcon={
          <FaMoon
            size={26}
            color="white"
            style={{ paddingTop: "4px", paddingRight: "4px", float: "right" }}
          />
        }
        onColor="#5c6664"
        offColor="#000"
        onHandleColor="#000"
      />
      <Home />
    </ThemeContext.Provider>
  );
}

export default App;
