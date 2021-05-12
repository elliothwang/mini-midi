import "./Keyboard.css";
import playNote from "../../utilities/playNote";

export default function Keyboard({ setNote, song, setSong }) {

  function handlePianoClick(evt) {
    playNote(evt.target.value);
    setNote(evt.target.value);
    setSong([...song, evt.target.value]);
  }

  function handleKeyDown(evt) {
    let keyCode = evt.keyCode;
    if (keyCode === 65) {
      playNote("C");
      setNote("C");
      setSong([...song, "C"]);
      document.querySelector(".C").style.boxShadow = "2px 0 3px rgba(0, 0, 0, 0.1) inset, -5px 5px 20px rgba(0, 0, 0, 0.2) inset, 0 0 3px rgba(0, 0, 0, 0.2)";
      document.querySelector(".C").style.background = "linear-gradient(to bottom, #fff 0%, #e9e9e9 100%)";
    } else if (keyCode === 87) {
      playNote("CSharp");
      setNote("CSharp");
      setSong([...song, "CSharp"]);
      document.querySelector(".CSharp").style.boxShadow = "-1px -1px 2px rgba(255, 255, 255, 0.2) inset, 0 -2px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 1px 2px rgba(0, 0, 0, 0.5)";
      document.querySelector(".CSharp").style.background = "linear-gradient(to right, #444 0%, #222 100%)";
    } else if (keyCode === 83) {
      playNote("D");
      setNote("D");
      setSong([...song, "D"]);
      document.querySelector(".D").style.boxShadow = "2px 0 3px rgba(0, 0, 0, 0.1) inset, -5px 5px 20px rgba(0, 0, 0, 0.2) inset, 0 0 3px rgba(0, 0, 0, 0.2)";
      document.querySelector(".D").style.background = "linear-gradient(to bottom, #fff 0%, #e9e9e9 100%)";
    } else if (keyCode === 69) {
      playNote("DSharp");
      setNote("DSharp");
      setSong([...song, "DSharp"]);
      document.querySelector(".DSharp").style.boxShadow = "-1px -1px 2px rgba(255, 255, 255, 0.2) inset, 0 -2px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 1px 2px rgba(0, 0, 0, 0.5)";
      document.querySelector(".DSharp").style.background = "linear-gradient(to right, #444 0%, #222 100%)";

    } else if (keyCode === 68) {
      playNote("E");
      setNote("E");
      setSong([...song, "E"]);
      document.querySelector(".E").style.boxShadow = "2px 0 3px rgba(0, 0, 0, 0.1) inset, -5px 5px 20px rgba(0, 0, 0, 0.2) inset, 0 0 3px rgba(0, 0, 0, 0.2)";
      document.querySelector(".E").style.background = "linear-gradient(to bottom, #fff 0%, #e9e9e9 100%)";
    } else if (keyCode === 70) {
      playNote("F");
      setNote("F");
      setSong([...song, "F"]);
      document.querySelector(".F").style.boxShadow = "2px 0 3px rgba(0, 0, 0, 0.1) inset, -5px 5px 20px rgba(0, 0, 0, 0.2) inset, 0 0 3px rgba(0, 0, 0, 0.2)";
      document.querySelector(".F").style.background = "linear-gradient(to bottom, #fff 0%, #e9e9e9 100%)";
    } else if (keyCode === 84) {
      playNote("FSharp");
      setNote("FSharp");
      setSong([...song, "FSharp"]);
      document.querySelector(".FSharp").style.boxShadow = "-1px -1px 2px rgba(255, 255, 255, 0.2) inset, 0 -2px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 1px 2px rgba(0, 0, 0, 0.5)";
      document.querySelector(".FSharp").style.background = "linear-gradient(to right, #444 0%, #222 100%)";

    } else if (keyCode === 71) {
      playNote("G");
      setNote("G");
      setSong([...song, "G"]);
      document.querySelector(".G").style.boxShadow = "2px 0 3px rgba(0, 0, 0, 0.1) inset, -5px 5px 20px rgba(0, 0, 0, 0.2) inset, 0 0 3px rgba(0, 0, 0, 0.2)";
      document.querySelector(".G").style.background = "linear-gradient(to bottom, #fff 0%, #e9e9e9 100%)";
    } else if (keyCode === 89) {
      playNote("GSharp");
      setNote("GSharp");
      setSong([...song, "GSharp"]);
      document.querySelector(".GSharp").style.boxShadow = "-1px -1px 2px rgba(255, 255, 255, 0.2) inset, 0 -2px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 1px 2px rgba(0, 0, 0, 0.5)";
      document.querySelector(".GSharp").style.background = "linear-gradient(to right, #444 0%, #222 100%)";

    } else if (keyCode === 72) {
      playNote("A");
      setNote("A");
      setSong([...song, "A"]);
      document.querySelector(".A").style.boxShadow = "2px 0 3px rgba(0, 0, 0, 0.1) inset, -5px 5px 20px rgba(0, 0, 0, 0.2) inset, 0 0 3px rgba(0, 0, 0, 0.2)";
      document.querySelector(".A").style.background = "linear-gradient(to bottom, #fff 0%, #e9e9e9 100%)";
    } else if (keyCode === 85) {
      playNote("ASharp");
      setNote("ASharp");
      setSong([...song, "ASharp"]);
      document.querySelector(".ASharp").style.boxShadow = "-1px -1px 2px rgba(255, 255, 255, 0.2) inset, 0 -2px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 1px 2px rgba(0, 0, 0, 0.5)";
      document.querySelector(".ASharp").style.background = "linear-gradient(to right, #444 0%, #222 100%)";

      
    } else if (keyCode === 74) {
      playNote("B");
      setNote("B");
      setSong([...song, "B"]);
      document.querySelector(".B").style.boxShadow = "2px 0 3px rgba(0, 0, 0, 0.1) inset, -5px 5px 20px rgba(0, 0, 0, 0.2) inset, 0 0 3px rgba(0, 0, 0, 0.2)";
      document.querySelector(".B").style.background = "linear-gradient(to bottom, #fff 0%, #e9e9e9 100%)";
    }
  }

  function handleKeyUp(evt) {
    let keyCode = evt.keyCode;
    if (keyCode === 65) {
      document.querySelector(".C").style.boxShadow = "-1px 0 0 rgba(255, 255, 255, 0.8) inset, 0 0 5px #ccc inset, 0 0 3px rgba(0, 0, 0, 0.2)";
      document.querySelector(".C").style.background = "linear-gradient(to bottom, #eee 0%, #fff 100%)";
    } else if (keyCode === 87) {
      document.querySelector(".CSharp").style.boxShadow = "-1px -1px 2px rgba(255, 255, 255, 0.2) inset, 0 -5px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 2px 4px rgba(0, 0, 0, 0.5)";
      document.querySelector(".CSharp").style.background = "linear-gradient(45deg, #222 0%, #555 100%)";
    } else if (keyCode === 83) {
      document.querySelector(".D").style.boxShadow = "-1px 0 0 rgba(255, 255, 255, 0.8) inset, 0 0 5px #ccc inset, 0 0 3px rgba(0, 0, 0, 0.2)";
      document.querySelector(".D").style.background = "linear-gradient(to bottom, #eee 0%, #fff 100%)";
    } else if (keyCode === 69) {
      document.querySelector(".DSharp").style.boxShadow = "-1px -1px 2px rgba(255, 255, 255, 0.2) inset, 0 -5px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 2px 4px rgba(0, 0, 0, 0.5)";
      document.querySelector(".DSharp").style.background = "linear-gradient(45deg, #222 0%, #555 100%)";
    } else if (keyCode === 68) {
      document.querySelector(".E").style.boxShadow = "-1px 0 0 rgba(255, 255, 255, 0.8) inset, 0 0 5px #ccc inset, 0 0 3px rgba(0, 0, 0, 0.2)";
      document.querySelector(".E").style.background = "linear-gradient(to bottom, #eee 0%, #fff 100%)";
    } else if (keyCode === 70) {
      document.querySelector(".F").style.boxShadow = "-1px 0 0 rgba(255, 255, 255, 0.8) inset, 0 0 5px #ccc inset, 0 0 3px rgba(0, 0, 0, 0.2)";
      document.querySelector(".F").style.background = "linear-gradient(to bottom, #eee 0%, #fff 100%)";
    } else if (keyCode === 84) {
      document.querySelector(".FSharp").style.boxShadow = "-1px -1px 2px rgba(255, 255, 255, 0.2) inset, 0 -5px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 2px 4px rgba(0, 0, 0, 0.5)";
      document.querySelector(".FSharp").style.background = "linear-gradient(45deg, #222 0%, #555 100%)";
    } else if (keyCode === 71) {
      document.querySelector(".G").style.boxShadow = "-1px 0 0 rgba(255, 255, 255, 0.8) inset, 0 0 5px #ccc inset, 0 0 3px rgba(0, 0, 0, 0.2)";
      document.querySelector(".G").style.background = "linear-gradient(to bottom, #eee 0%, #fff 100%)";
    } else if (keyCode === 89) {
      document.querySelector(".GSharp").style.boxShadow = "-1px -1px 2px rgba(255, 255, 255, 0.2) inset, 0 -5px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 2px 4px rgba(0, 0, 0, 0.5)";
      document.querySelector(".GSharp").style.background = "linear-gradient(45deg, #222 0%, #555 100%)";
    } else if (keyCode === 72) {
      document.querySelector(".A").style.boxShadow = "-1px 0 0 rgba(255, 255, 255, 0.8) inset, 0 0 5px #ccc inset, 0 0 3px rgba(0, 0, 0, 0.2)";
      document.querySelector(".A").style.background = "linear-gradient(to bottom, #eee 0%, #fff 100%)";
    } else if (keyCode === 85) {
      document.querySelector(".ASharp").style.boxShadow = "-1px -1px 2px rgba(255, 255, 255, 0.2) inset, 0 -5px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 2px 4px rgba(0, 0, 0, 0.5)";
      document.querySelector(".ASharp").style.background = "linear-gradient(45deg, #222 0%, #555 100%)";
    } else if (keyCode === 74) {
      document.querySelector(".B").style.boxShadow = "-1px 0 0 rgba(255, 255, 255, 0.8) inset, 0 0 5px #ccc inset, 0 0 3px rgba(0, 0, 0, 0.2)";
      document.querySelector(".B").style.background = "linear-gradient(to bottom, #eee 0%, #fff 100%)";
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
        <button className="key white C" value="C">
          A
        </button>
        <button className="key black CSharp" value="CSharp">
          W
        </button>
        <button className="key white D" value="D">
          S
        </button>
        <button className="key black DSharp" value="DSharp">
          E
        </button>
        <button className="key white E" value="E">
          D
        </button>
        <button className="key white F" value="F">
          F
        </button>
        <button className="key black FSharp" value="FSharp">
          T
        </button>
        <button className="key white G" value="G">
          G
        </button>
        <button className="key black GSharp" value="GSharp">
          Y
        </button>
        <button className="key white A" value="A">
          H
        </button>
        <button className="key black ASharp" value="ASharp">
          U
        </button>
        <button className="key white B" value="B">
          J
        </button>
      </div>
    </div>
  );
}
