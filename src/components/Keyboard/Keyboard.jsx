import "./Keyboard.css";
import playNote from "../../utilities/playNote";

export default function Keyboard({ note, setNote, song, setSong }) {

  // play note & store note in state function
  function handlePianoClick(evt) {
    playNote(evt.target.value);
    setNote(evt.target.value);
    setSong([...song, evt.target.value]);
    console.log(evt.target.value);
  }

  // play note if valid keyboard key clicked
  function handleKeyDown(evt) {
    let keyCode = evt.keyCode;
    if (keyCode === 65) {
      playNote("C");
      setNote("C");
      console.log(song);
      console.log([...song, "C"]);
      setSong([...song, "C"]);
      // "depress" key on page by editing css (making it active)
    } else if (keyCode === 87) {
      playNote("CSharp");
      setNote("CSharp");
      setSong([...song, "CSharp"]);
    } else if (keyCode === 83) {
      playNote("D");
      setNote("D");
      setSong([...song, "D"]);
    } else if (keyCode === 69) {
      playNote("DSharp");
      setNote("DSharp");
      setSong([...song, "DSharp"]);
    } else if (keyCode === 68) {
      playNote("E");
      setNote("E");
      setSong([...song, "E"]);
    } else if (keyCode === 70) {
      playNote("F");
      setNote("F");
      setSong([...song, "F"]);
    } else if (keyCode === 84) {
      playNote("FSharp");
      setNote("FSharp");
      setSong([...song, "FSharp"]);
    } else if (keyCode === 71) {
      playNote("G");
      setNote("G");
      setSong([...song, "G"]);
    } else if (keyCode === 89) {
      playNote("GSharp");
      setNote("GSharp");
      setSong([...song, "GSharp"]);
    } else if (keyCode === 72) {
      playNote("A");
      setNote("A");
      setSong([...song, "A"]);
    } else if (keyCode === 85) {
      playNote("ASharp");
      setNote("ASharp");
      setSong([...song, "ASharp"]);
    } else if (keyCode === 74) {
      playNote("B");
      setNote("B");
      setSong([...song, "B"]);
    }
  }

  function handleKeyUp(evt) {
    let keyCode = evt.keyCode;
    if (keyCode === 65) {
      console.log('A has been released');
    } else if (keyCode === 87) {
      console.log('W has been released');
    } else if (keyCode === 83) {
      console.log('S has been released');
    } else if (keyCode === 69) {
      console.log('E has been released');
    } else if (keyCode === 68) {
      console.log('D has been released');
    } else if (keyCode === 70) {
      console.log('F has been released');
    } else if (keyCode === 84) {
      console.log('T has been released');
    } else if (keyCode === 71) {
      console.log('G has been released');
    } else if (keyCode === 89) {
      console.log('Y has been released');
    } else if (keyCode === 72) {
      console.log('H has been released');
    } else if (keyCode === 85) {
      console.log('U has been released');
    } else if (keyCode === 74) {
      console.log('J has been released');
    }
    // reset note & song state
  }

  document.body.onkeydown = handleKeyDown;
  document.body.onkeyup = handleKeyUp;

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
