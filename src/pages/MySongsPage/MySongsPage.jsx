import "./MySongsPage.css";
import { useState } from "react";
import "../../components/Staff/Staff.css";
import Staff from "../../components/Staff/Staff";

export default function MySongsPage ({ userSongs }) {
  const [activeStaff, setActiveStaff] = useState("");

  function showStaff (idx) {
    document.querySelector(".userSongStaff").style.display = "block";
  }

  return (
    <div className="mySongsPage">
      <div className="userSongsContainer">
        { userSongs.length ? 
          userSongs.map((userSong, idx) => 
            <div className="userSongContainer">
              <div className="userSongInfo">Song {idx + 1}: { userSong }</div>
              <button className="showStaffButton" onClick={showStaff}>Show Staff</button>
              <div className="userSongStaff"><Staff /></div>
            </div>
          )
          :
          "No songs yet!" }
      </div>
    </div>
  )
}
