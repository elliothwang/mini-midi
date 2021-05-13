import "./ContentBar.css";
import { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import BPM120 from "../../assets/BPM/BPM120.mp3";

export default function ContentBar ({ note, setNote, song, setSong, userSongs, setUserSongs }) {
  const [seconds, setSeconds] = useState(10);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const BPM = useRef(new Audio(BPM120));
  const history = useHistory();

  function reset () {
    BPM.current.pause();
    setIsPlaying(false);
    setIsRecording(false);
    setNote("");
    setSong([]);
    setSeconds(10);
  }

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000)
    } 
  });


  function recordSong() {
    // if (!isRecording === true) {
      if (seconds > 0) {
        console.log('recording!')
        BPM.current.play();
        setIsPlaying(true);
        setIsRecording(true);
      } if (seconds <= 0) {
        console.log('recording completed')
        setUserSongs([...userSongs, song]);
        reset();
        history.push('/songs');
      }
    // } else if (!isRecording === false) {
    //     console.log('user reset')
    //     reset();
    // }
  }

  function playPauseMetronome () {
    isPlaying ? BPM.current.pause() : BPM.current.play();
    setIsPlaying(!isPlaying);
  }

  return (
    <div className="mainContainer">
      <div className="contentBar">
        <button className={ isRecording ? "record glowingRed" : "record" } onClick={ recordSong }>{ isRecording ? seconds : "Record" }</button>
        <div className="metronome">
          <div>120 BPM &nbsp;</div>
          <button className={ isPlaying ? "playPauseMetronome glowingGreen" : "playPauseMetronome"} onClick={ playPauseMetronome } >{ isPlaying ? 'Pause' : 'Play' }</button>
        </div>
        <div className="noteTracker">Note: { note }</div>
      </div>
    </div>
  )
}
