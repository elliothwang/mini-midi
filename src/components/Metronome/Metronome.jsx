import './Metronome.css';
import { useState } from "react";
import BPM120 from '../../assets/BPM/BPM120.mp3';


export default function Metronome () {
  const [isPlaying, setIsPlaying] = useState(false);

  function playPauseMetronome () {
    const BPM = new Audio(BPM120);
    isPlaying ? BPM.pause() : BPM.play();
    setIsPlaying(!isPlaying);
  }

  return (
    <div className="metronome">
      <div>120 BPM</div>
      <button onClick={ playPauseMetronome }>{ isPlaying ? 'Pause' : 'Play' }</button>
    </div>
  )
}
