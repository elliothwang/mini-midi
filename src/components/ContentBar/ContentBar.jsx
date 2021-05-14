import "./ContentBar.css";
import { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useInterval } from "../../hooks/useInterval";
import BPM120 from "../../assets/BPM/BPM120.mp3";

export default function ContentBar ({ note, setNote, song, setSong, userSongs, setUserSongs, isRecording, setIsRecording }) {
  const [seconds, setSeconds] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [completedRecording, setCompletedRecording] = useState(false);
  const BPM = useRef(new Audio(BPM120));
  const history = useHistory();

  useInterval(() => {
    setSeconds((currSeconds) => currSeconds - 1);
  }, seconds ? 1000 : null);

  useEffect(() => {
    if (!seconds) setIsRecording(false);
  })

  function recordSong() {
    setSeconds(10);
    if (!completedRecording) {
      setIsRecording(true);
      setCompletedRecording(true);
      setNote("");
      setSong([]);
    } else {
      if (song.length) {
        BPM.current.pause();
        setIsPlaying(false);
        setUserSongs([...userSongs, song]);
        history.push("/songs");
      } else {
        BPM.current.pause();
        setIsPlaying(false);
        setNote("Play a note!");
      }
    }
  }

  function playPauseMetronome () {
    isPlaying ? BPM.current.pause() : BPM.current.play();
    setIsPlaying(!isPlaying);
  }

  return (
    <div className="mainContainer">
      <div className="contentBar">
        <button className={ seconds ? "record glowingRed" : "record" } onClick={ recordSong }>{ seconds ? seconds : completedRecording ? "Save" : "Record" }</button>
        <div className="metronome">
          <button className={ isPlaying ? "playPauseMetronome glowingGreen" : "playPauseMetronome"} onClick={ playPauseMetronome } >{ isPlaying ? 'Pause' : 'Play' }<img src="https://img.icons8.com/ios/452/metronome.png" alt="metronome image" /></button>
        </div>
        <div className={ note ? "noteTrackerSelected" : "noteTrackerUnselected" }>{ note }</div>
      </div>
    </div>
  )
}