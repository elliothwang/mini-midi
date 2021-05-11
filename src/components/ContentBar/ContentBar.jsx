import "./ContentBar.css";
import Metronome from "../../components/Metronome/Metronome";

export default function ContentBar ({ note, song }) {
  return (
    <div className="mainContainer">
      <div className="contentBar">
        <button className="record">Record</button>
        <Metronome />
        <div className="noteTracker">Note: { note }</div>
      </div>
    </div>
  )
}