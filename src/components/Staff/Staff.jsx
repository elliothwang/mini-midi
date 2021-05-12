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
        <div className="ENoteContainer">
          <div className={ note === "E" ? "played" : "notPlayed" }><DownwardsQuarterNote /></div>
        </div>
        <div className="DNoteContainer offsetLeft">
          <div className={ note === "D" ? "played" : "notPlayed" }><DownwardsQuarterNote /></div>
          <div className={ note === "DSharp" ? "played" : "notPlayed" }><Sharp /></div>
        </div>
        <div className="CNoteContainer">
          <div className={ note === "C" ? "played" : "notPlayed" }><DownwardsQuarterNote /></div>
          <div className={ note === "CSharp" ? "played" : "notPlayed" }><Sharp /></div>
        </div>
        <div className="BNoteContainer offsetLeft">
          <div className={ note === "B" ? "played" : "notPlayed" }><DownwardsQuarterNote /></div>
        </div>
        <div className="ANoteContainer">
          <div className={ note === "A" ? "played" : "notPlayed" }><UpwardsQuarterNote /></div>
          <div className={ note === "ASharp" ? "played" : "notPlayed" }><Sharp /></div>
        </div>
        <div className="GNoteContainer offsetLeft">
          <div className={ note === "G" ? "played" : "notPlayed" }><UpwardsQuarterNote /></div>
          <div className={ note === "GSharp" ? "played" : "notPlayed" }><Sharp /></div>
        </div>
        <div className="FNoteContainer">
          <div className={ note === "F" ? "played" : "notPlayed" }><UpwardsQuarterNote /></div>
          <div className={ note === "FSharp" ? "played" : "notPlayed" }><Sharp /></div>
        </div>
      </div>
    </div>
  );
}
