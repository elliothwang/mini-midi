import "./Keyboard.css";
import { useState } from "react";

export default function Keyboard({ notes, setNotes }) {
  const [note, setNote] = useState("");

  return (
    <div className="keyboardContainer">
      <div className="keyboard">
        <div className="key white c"></div>
        <div className="key black cSharp"></div>
        <div className="key white d"></div>
        <div className="key black dSharp"></div>
        <div className="key white e"></div>
        <div className="key white f"></div>
        <div className="key black fSharp"></div>
        <div className="key white g"></div>
        <div className="key black gSharp"></div>
        <div className="key white a"></div>
        <div className="key black aSharp"></div>
        <div className="key white b"></div>
      </div>
    </div>
  );
}