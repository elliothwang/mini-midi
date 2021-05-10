export default function keyClick(key) {
  // if keyCode= " ", invoke handleClick correctly
  if (
    key === 65 ||
    key === 87 ||
    key === 83 ||
    key === 69 ||
    key === 68 ||
    key === 70 ||
    key === 84 ||
    key === 71 ||
    key === 89 ||
    key === 72 ||
    key === 85 ||
    key === 74
  ) {
    console.log("valid key has been pressed");
  }
  // "press down" key on page
  // document.querySelectorAll('.a').click();
}
