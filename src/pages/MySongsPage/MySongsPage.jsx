import "./MySongsPage.css";
import "../../components/Staff/Staff.css";
import Staff from "../../components/Staff/Staff";

export default function MySongsPage ({ userSongs }) {

  // function showStaff () {
  //   console.log()
  // }

  return (
    <div className="mySongsPage">
      <h1>My Songs Page!</h1>
      <div className="mySongsContainer">
        { userSongs.length ? 
          userSongs.map((userSong, idx) => 
            <div className="songLine">
              Song {idx + 1}: { userSong }
              <button className="showStaff" onClick={() => console.log({ userSong })}>Show Staff</button>
            </div>
          )
          :
          "No songs yet!" }
      </div>
    </div>
  )
}
