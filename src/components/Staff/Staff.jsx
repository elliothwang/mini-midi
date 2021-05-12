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
            <div ><Sharp /></div>
            <div className="offsetLeft"><DownwardsQuarterNote /></div>
            <div ><DownwardsQuarterNote /></div>
            <div className="offsetLeft"><DownwardsQuarterNote /></div>
            <div ><DownwardsQuarterNote /></div>
            <div className="offsetLeft"><UpwardsQuarterNote /></div>
            <div ><UpwardsQuarterNote /></div>
            <div className="offsetLeft"><UpwardsQuarterNote /></div>
            <div ><UpwardsQuarterNote /></div>
            <div className="offsetLeft"><UpwardsQuarterNote /></div>
          </div>
          
        </div>
      </div>
  );
}
