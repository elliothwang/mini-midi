import "./Staff.css";
import UpwardsQuarterNote from "../NoteImages/UpwardsQuarterNote/UpwardsQuarterNote";
import DownwardsQuarterNote from "../NoteImages/DownwardsQuarterNote/DownwardsQuarterNote";
import Sharp from "../NoteImages/Sharp/Sharp";

export default function Keyboard({ note, song }) {
  return (
    <div className="staffContainer">
      {/* <div className="trebleClefImgContainer"><div className="trebleClefImg"></div></div> */}
      <div className="songTracker">Song: { song }</div>
      <div className="staff">
        <div className="ENoteContainer"><Sharp /></div>
        <div className="DNoteContainer offsetLeft"><DownwardsQuarterNote /></div>
        <div className="CNoteContainer"><DownwardsQuarterNote /></div>
        <div className="BNoteContainer offsetLeft"><DownwardsQuarterNote /></div>
        <div className="ANoteContainer"><UpwardsQuarterNote /></div>
        <div className="GNoteContainer offsetLeft"><UpwardsQuarterNote /></div>
        <div className="FNoteContainer"><UpwardsQuarterNote /></div>
      </div>
    </div>
  );
}
