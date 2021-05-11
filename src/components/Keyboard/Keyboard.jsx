import "./Keyboard.css";
import { useState, useEffect } from "react";
import playNote from "../../utilities/playNote";

export default function Keyboard({ note, setNote, notes, setNotes }) {

  // play note & store note in state function
  function handlePianoClick(evt) {
    setNote(evt.target.value);
    playNote(evt.target.value);
  }

  // play note if valid keyboard key clicked
  function handleKeyDown(evt) {
    let keyCode = evt.keyCode;
    if (keyCode === 65) {
      playNote("C");
      setNote("C");
      // "depress" key on page
    } else if (keyCode === 87) {
      playNote("CSharp");
      setNote("CSharp");
    } else if (keyCode === 83) {
      playNote("D");
      setNote("D");
    } else if (keyCode === 69) {
      playNote("DSharp");
      setNote("DSharp");
    } else if (keyCode === 68) {
      playNote("E");
      setNote("E");
    } else if (keyCode === 70) {
      playNote("F");
      setNote("F");
    } else if (keyCode === 84) {
      playNote("FSharp");
      setNote("FSharp");
    } else if (keyCode === 71) {
      playNote("G");
      setNote("G");
    } else if (keyCode === 89) {
      playNote("GSharp");
      setNote("GSharp");
    } else if (keyCode === 72) {
      playNote("A");
      setNote("A");
    } else if (keyCode === 85) {
      playNote("ASharp");
      setNote("ASharp");
    } else if (keyCode === 74) {
      playNote("B");
      setNote("B");
    }
  }

  // function handleKeyUp(evt) {
    // setNotes with clicked note
    // what happens if note is held?
  // }

  // limit event listener to the component's mount
  useEffect(() => {
    // capture keypress at the window/body level because non-input elements don't have an input focus
    window.addEventListener("keydown", handleKeyDown);
    // window.addEventListener("keyup", handleKeyUp);
  }, [])

  return (
    <div className="keyboardContainer">
      <div
        className="keyboard"
        onClick={handlePianoClick}
      >
        <button className="key white c" value="C">
          A
        </button>
        <button className="key black cSharp" value="CSharp">
          W
        </button>
        <button className="key white d" value="D">
          S
        </button>
        <button className="key black dSharp" value="DSharp">
          E
        </button>
        <button className="key white e" value="E">
          D
        </button>
        <button className="key white f" value="F">
          F
        </button>
        <button className="key black fSharp" value="FSharp">
          T
        </button>
        <button className="key white g" value="G">
          G
        </button>
        <button className="key black gSharp" value="GSharp">
          Y
        </button>
        <button className="key white a" value="A">
          H
        </button>
        <button className="key black aSharp" value="ASharp">
          U
        </button>
        <button className="key white b" value="B">
          J
        </button>
      </div>
    </div>
  );
}
