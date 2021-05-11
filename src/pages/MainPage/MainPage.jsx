import { useState } from "react";
import Staff from "../../components/Staff/Staff";
import Keyboard from "../../components/Keyboard/Keyboard";
import Metronome from "../../components/Metronome/Metronome";

export default function MainPage () {
  const [notes, setNotes] = useState([]);

  return (
    <div className="mainPage">
      <h1>Main Page!</h1>
      <Metronome />
      <Staff notes={notes} />
      <Keyboard notes={notes} setNotes={setNotes} />
    </div>
  )
}