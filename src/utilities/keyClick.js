import playNote from "../utilities/playNote";

export default function keyClick(keyCode) {
  if (keyCode === 65) {
    playNote("C");
    // "press down" key on page
  } else if (keyCode === 87) {
    playNote("C#");
  } else if (keyCode === 83) {
    playNote("D");
  } else if (keyCode === 69) {
    playNote("D#");
  } else if (keyCode === 68) {
    playNote("E");
  } else if (keyCode === 70) {
    playNote("F");
  } else if (keyCode === 84) {
    playNote("F#");
  } else if (keyCode === 71) {
    playNote("G");
  } else if (keyCode === 89) {
    playNote("G#");
  } else if (keyCode === 72) {
    playNote("A");
  } else if (keyCode === 85) {
    playNote("A#");
  } else if (keyCode === 74) {
    playNote("B");
  }
  // "press down" key on page
  // document.querySelectorAll('.a').click();
}
