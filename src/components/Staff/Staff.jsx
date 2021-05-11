import "./Staff.css";
import Metronome from "../../components/Metronome/Metronome";

export default function Keyboard({ note }) {
  return (
    <div className="mainContainer">
      <div className="contentBar">
        <Metronome />
        <div className="noteTracker">Note: { note }</div>
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
