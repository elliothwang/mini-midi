import { useState } from "react";
import Staff from "../../components/Staff/Staff";
import Keyboard from "../../components/Keyboard/Keyboard";

export default function MainPage () {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");

  return (
    <div className="mainPage">
      <h1>Main Page!</h1>
      <Staff notes={notes} note={note} />
      <Keyboard note={note} setNote={setNote} notes={notes} setNotes={setNotes} />
    </div>
  )
}