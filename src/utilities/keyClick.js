import playkeyCode from "../../utilities/playkeyCode";

export default function keyClick(keyCode) {
  if (keyCode === 65) {
    playkeyCode("C");
    // "press down" key on page
  } else if (keyCode === 87) {
    playkeyCode("C#");
  } else if (keyCode === 83) {
    playkeyCode("D");
  } else if (keyCode === 69) {
    playkeyCode("D#");
  } else if (keyCode === 68) {
    playkeyCode("E");
  } else if (keyCode === 70) {
    playkeyCode("F");
  } else if (keyCode === 84) {
    playkeyCode("F#");
  } else if (keyCode === 71) {
    playkeyCode("G");
  } else if (keyCode === 89) {
    playkeyCode("G#");
  } else if (keyCode === 72) {
    playkeyCode("A");
  } else if (keyCode === 85) {
    playkeyCode("A#");
  } else if (keyCode === 74) {
    playkeyCode("B");
  }
  // "press down" key on page
  // document.querySelectorAll('.a').click();
}
