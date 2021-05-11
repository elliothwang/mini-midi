import "./Staff.css";
import Metronome from "../../components/Metronome/Metronome";

export default function Keyboard({ note, song }) {
  console.log(song);
  return (
    <div className="mainContainer">
      <div className="contentBar">
        <Metronome />
        <div className="noteTracker">Note: { note }</div>
        <div className="songTracker">Song: { song }</div>
      </div>
      <div className="staffContainer">
        {/* <div className="trebleClefImgContainer"><div className="trebleClefImg"></div></div> */}
        <div className="staff">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
}
