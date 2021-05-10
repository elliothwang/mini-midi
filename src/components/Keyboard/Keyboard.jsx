import "./Keyboard.css";
import { useState } from "react";

export default function Keyboard({ notes, setNotes }) {
  const [note, setNote] = useState("");

  // play note & store note in state function
  function handlePianoClick(evt) {
    console.log(evt.target);
    setNote(evt.target.value);
    // use created properties using values
    // setNotes();
  }

  return (
    <div className="keyboardContainer">
      <div
        className="keyboard"
        // onKeyDown={handleKeyDown}
        onClick={handlePianoClick}
      >
        <button className="key white c" value="C">
          A
        </button>
        <button className="key black cSharp" value="C#">
          W
        </button>
        <button className="key white d" value="D">
          S
        </button>
        <button className="key black dSharp" value="D#">
          E
        </button>
        <button className="key white e" value="E">
          D
        </button>
        <button className="key white f" value="F">
          F
        </button>
        <button className="key black fSharp" value="F#">
          T
        </button>
        <button className="key white g" value="G">
          G
        </button>
        <button className="key black gSharp" value="G#">
          Y
        </button>
        <button className="key white a" value="A">
          H
        </button>
        <button className="key black aSharp" value="A#">
          U
        </button>
        <button className="key white b" value="B">
          J
        </button>
      </div>
    </div>
  );
}