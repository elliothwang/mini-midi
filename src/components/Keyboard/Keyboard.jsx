import "./Keyboard.css";
import playNote from "../../utilities/playNote";

export default function Keyboard({ setNote, song, setSong, isRecording }) {
  
  function handlePianoClick(evt) {
    if (isRecording) {
      setSong([...song, evt.target.value]);
    }
    playNote(evt.target.value);
    setNote(evt.target.value);
  }

  function handleWhiteKeyPress (note) {
    if (isRecording) {
      setSong([...song, note]);
    }
    playNote(note);
    setNote(note);
    document.querySelector(`.${note}`).style.boxShadow = "2px 0 3px rgba(0, 0, 0, 0.1) inset, -5px 5px 20px rgba(0, 0, 0, 0.2) inset, 0 0 3px rgba(0, 0, 0, 0.2)";
    document.querySelector(`.${note}`).style.background = "linear-gradient(to bottom, #fff 0%, #e9e9e9 100%)";
  }

  function handleWhiteKeyRelease (note) {
    document.querySelector(`.${note}`).style.boxShadow = "-1px 0 0 rgba(255, 255, 255, 0.8) inset, 0 0 5px #ccc inset, 0 0 3px rgba(0, 0, 0, 0.2)";
    document.querySelector(`.${note}`).style.background = "linear-gradient(to bottom, #eee 0%, #fff 100%)";
  }

  function handleBlackKeyPress (note) {
    if (isRecording) {
      setSong([...song, note]);
    }
    playNote(note);
    setNote(note);
    document.querySelector(`.${note}`).style.boxShadow = "-1px -1px 2px rgba(255, 255, 255, 0.2) inset, 0 -2px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 1px 2px rgba(0, 0, 0, 0.5)";
    document.querySelector(`.${note}`).style.background = "linear-gradient(to right, #444 0%, #222 100%)";  
  }

  function handleBlackKeyRelease (note) {
    document.querySelector(`.${note}`).style.boxShadow = "-1px -1px 2px rgba(255, 255, 255, 0.2) inset, 0 -5px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 2px 4px rgba(0, 0, 0, 0.5)";
    document.querySelector(`.${note}`).style.background = "linear-gradient(45deg, #222 0%, #555 100%)";
  }


  function handleKeyDown(evt) {
    let keyCode = evt.keyCode;
    switch (keyCode) {
    case 65:
      handleWhiteKeyPress("C");
      break;
    case 87:
      handleBlackKeyPress("CSharp");
      break;
    case 83:
      handleWhiteKeyPress("D");
      break;
    case 69:
      handleBlackKeyPress("DSharp");
      break;
    case 68:
      handleWhiteKeyPress("E");
      break;
    case 70:
      handleWhiteKeyPress("F");
      break;
    case 84:
      handleBlackKeyPress("FSharp");
      break;
    case 71:
      handleWhiteKeyPress("G");
      break;
    case 89:
      handleBlackKeyPress("GSharp");
      break;
    case 72:
      handleWhiteKeyPress("A");
      break;
    case 85:
      handleBlackKeyPress("ASharp");
      break;
    case 74:
      handleWhiteKeyPress("B");
      break;
    }
  }

  function handleKeyUp(evt) {
    let keyCode = evt.keyCode;
    switch (keyCode) {
    case 65:
      handleWhiteKeyRelease("C");
      break;
    case 87:
      handleBlackKeyRelease("CSharp")
      break;
    case 83:
      handleWhiteKeyRelease("D");
      break;
    case 69:
      handleBlackKeyRelease("DSharp")
      break;
    case 68:
      handleWhiteKeyRelease("E");
      break;
    case 70:
      handleWhiteKeyRelease("F");
      break;
    case 84:
      handleBlackKeyRelease("FSharp")
      break;
    case 71:
      handleWhiteKeyRelease("G");
      break;
    case 89:
      handleBlackKeyRelease("GSharp")
      break;
    case 72:
      handleWhiteKeyRelease("A");
      break;
    case 85:
      handleBlackKeyRelease("ASharp")
      break;
    case 74:
      handleWhiteKeyRelease("B");
      break;
    }
  }

  document.body.onkeydown = handleKeyDown;
  document.body.onkeyup = handleKeyUp;

  return (
    <div className="keyboardContainer">
      <div className="keyboard" onClick={handlePianoClick}>
        <button className="key white C" value="C">A</button>
        <button className="key black CSharp" value="CSharp">W</button>
        <button className="key white D" value="D">S</button>
        <button className="key black DSharp" value="DSharp">E</button>
        <button className="key white E" value="E">D</button>
        <button className="key white F" value="F">F</button>
        <button className="key black FSharp" value="FSharp">T</button>
        <button className="key white G" value="G">G</button>
        <button className="key black GSharp" value="GSharp">Y</button>
        <button className="key white A" value="A">H</button>
        <button className="key black ASharp" value="ASharp">U</button>
        <button className="key white B" value="B">J</button>
      </div>
    </div>
  );
}
