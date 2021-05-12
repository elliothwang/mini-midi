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
        <div className="staffColumn">
          <div className="ENoteImg"><Sharp /></div>
          <div className="DNoteImg offsetLeft"><DownwardsQuarterNote /></div>
          <div className="CNoteImg"><DownwardsQuarterNote /></div>
          <div className="BNoteImg offsetLeft"><DownwardsQuarterNote /></div>
          <div className="ANoteImg"><UpwardsQuarterNote /></div>
          <div className="GNoteImg offsetLeft"><UpwardsQuarterNote /></div>
          <div className="FNoteImg"><UpwardsQuarterNote /></div>
        </div>
        
      </div>
    </div>
  );
}
