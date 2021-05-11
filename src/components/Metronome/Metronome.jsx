import './Metronome.css';

export default function Metronome () {
  let bpm = 120;
  let playing = false;

  return (
    <div className="metronome">
      <div>{ bpm } BPM</div>
      <button>{ playing ? 'Stop' : 'Start' }</button>
    </div>
  )
}