import playNote from "../utilities/playNote";
import setNote from "../components/Keyboard/Keyboard";

export default function keyClick(keyCode) {
  if (keyCode === 65) {
    playNote("C");
    setNote("C");
    // "depress" key on page
  } else if (keyCode === 87) {
    playNote("C#");
    setNote("C#");
  } else if (keyCode === 83) {
    playNote("D");
    setNote("D");
  } else if (keyCode === 69) {
    playNote("D#");
    setNote("D#");
  } else if (keyCode === 68) {
    playNote("E");
    setNote("E");
  } else if (keyCode === 70) {
    playNote("F");
    setNote("F");
  } else if (keyCode === 84) {
    playNote("F#");
    setNote("F#");
  } else if (keyCode === 71) {
    playNote("G");
    setNote("G");
  } else if (keyCode === 89) {
    playNote("G#");
    setNote("G#");
  } else if (keyCode === 72) {
    playNote("A");
    setNote("A");
  } else if (keyCode === 85) {
    playNote("A#");
    setNote("A#");
  } else if (keyCode === 74) {
    playNote("B");
    setNote("B");
  }
}
