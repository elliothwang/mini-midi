import { useState } from "react";
import Staff from "../../components/Staff/Staff";
import Keyboard from "../../components/Keyboard/Keyboard";

export default function MainPage () {
  const [song, setSong] = useState([]);
  const [note, setNote] = useState("");

  return (
    <div className="mainPage">
      <h1>Main Page!</h1>
      <Staff song={song} note={note} />
      <Keyboard song={song} setSong={setSong} note={note} setNote={setNote} />
    </div>
  )
}
