import "./ContentBar.css";
import Metronome from "../../components/Metronome/Metronome";

export default function ContentBar ({ note, setNote, song, setSong, userSongs, setUserSongs }) {

  function recordSong() {
    console.log(song);
    setUserSongs([...userSongs, song]);
    setNote("");
    setSong([]);
    console.log(userSongs);
    // might have to bring Metronome component into ContentBar component to pause metronome
  }

  return (
    <div className="mainContainer">
      <div className="contentBar">
        <button className="record" onClick={ recordSong }>Record</button>
        <div className="metronome"><Metronome /></div>
        <div className="noteTracker">Note: { note }</div>
      </div>
    </div>
  )
}