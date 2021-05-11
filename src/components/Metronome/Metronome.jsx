export default function Metronome () {
  let bpm = 120;
  let playing = false;

  render (
    <div className="metronome">
      <div>{ bpm } BPM</div>
      <button>{ playing ? 'Stop' : 'Start' }</button>
    </div>
  )
}