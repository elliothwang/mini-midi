import "./MySongsPage.css";
import { useEffect, useState } from "react";
import "../../components/Staff/Staff.css";
import Staff from "../../components/Staff/Staff";
// import * as songsAPI from "../../utilities/songs-api";


export default function MySongsPage ({ userSongs }) {
  const [activeStaff, setActiveStaff] = useState(0);
  const [activeSong, setActiveSong] = useState(0);

  // useEffect(() => {
  //   async function index() {
  //     const userSongs = await songsAPI.index();
  //   }
  //   index();
  // }, []);

  function playUserSong (evt) {
    setActiveSong(evt.target.value);
    showStaff(evt);
  }

  function showStaff (evt) {
    setActiveStaff(evt.target.value);
  }

  return (
    <div className="mySongsPage">
      <div className="userSongsContainer">
        { userSongs.length ? 
          userSongs.map((userSong, idx) => 
            <div className={activeStaff === idx ? "userSingleSongContainerSelected" : "userSingleSongContainerUnselected"}>
              <div className="userSongInfo"><strong>{idx + 1}</strong> &nbsp;</div>
                { userSong.map(userSongNote => 
                  <div className="userSongNotes">{userSongNote} &nbsp;</div>
              )}
              <button value={ idx } className="playUserSongButton" onClick={playUserSong}>{activeSong === idx ? "Pause" : "Play"}</button>
              <button value={ idx } className="showStaffButton" onClick={showStaff}>{activeStaff === idx ? "Hide Staff" : "Show Staff"}</button>
              {/* <div className={activeStaff === idx ? "staffSelected" : "staffUnselected"}><Staff /></div> */}
            </div>
          )
          :
          "No songs yet!" }
      </div>
    </div>
  )
}
