import "./MySongsPage.css";
import { useState } from "react";
import "../../components/Staff/Staff.css";
import Staff from "../../components/Staff/Staff";

export default function MySongsPage ({ userSongs }) {
  const [activeStaff, setActiveStaff] = useState(0);

  function showStaff (evt) {
    console.log('showing staff');
    setActiveStaff(evt.target.value);
    console.log(activeStaff);
  }

  return (
    <div className="mySongsPage">
      <div className="userSongsContainer">
        { userSongs.length ? 
          userSongs.map((userSong, idx) => 
            <div className={activeStaff === idx ? "userSingleSongContainerSelected" : "userSingleSongContainerUnselected"}>
              <div className="userSongInfo">Song {idx + 1}: &nbsp;</div>
                { userSong.map(userSongNote => 
                  <div className="userSongNotes">{userSongNote} &nbsp;</div>
              )}
              <button value={ idx } className="showStaffButton" onClick={showStaff}>{activeStaff === idx ? "Hide Staff" : "Show Staff"}</button>
              <div className={activeStaff === idx ? "staffSelected" : "staffUnselected"}><Staff /></div>
            </div>
          )
          :
          "No songs yet!" }
      </div>
    </div>
  )
}
