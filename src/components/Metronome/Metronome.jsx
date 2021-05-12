import './Metronome.css';
import { useState, useRef } from "react";
import BPM120 from '../../assets/BPM/BPM120.mp3';


export default function Metronome () {
  const [isPlaying, setIsPlaying] = useState(false);
  const BPM = useRef(new Audio(BPM120));

  function playPauseMetronome () {
    isPlaying ? BPM.current.pause() : BPM.current.play();
    setIsPlaying(!isPlaying);
  }

  return (
    <div className="metronome">
      <div>120 BPM &nbsp;</div>
      <button onClick={ playPauseMetronome }>{ isPlaying ? 'Pause' : 'Play' }</button>
    </div>
  )
}
