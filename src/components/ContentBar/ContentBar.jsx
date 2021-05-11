import "./ContentBar.css";
import Metronome from "../../components/Metronome/Metronome";

export default function ContentBar ({ note, newSong, setNewSong }) {

  function recordSong() {
    
  }

  return (
    <div className="mainContainer">
      <div className="contentBar">
        <button className="record" onClick={ recordSong }>Record</button>
        <Metronome />
        <div className="noteTracker">Note: { note }</div>
      </div>
    </div>
  )
}