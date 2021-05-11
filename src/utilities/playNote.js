import A from '../assets/Notes/A.mp3';
import ASharp from '../assets/Notes/ASharp.mp3';
import B from '../assets/Notes/B.mp3';
import C from '../assets/Notes/C.mp3';
import CSharp from '../assets/Notes/CSharp.mp3';
import D from '../assets/Notes/D.mp3';
import DSharp from '../assets/Notes/DSharp.mp3';
import E from '../assets/Notes/E.mp3';
import F from '../assets/Notes/F.mp3';
import FSharp from '../assets/Notes/FSharp.mp3';
import G from '../assets/Notes/G.mp3';
import GSharp from '../assets/Notes/GSharp.mp3';

export default function playNote(note) {
  // new Audio(`../assets/Notes/${note}.mp3`).play();
  if (note === "C") {
    new Audio(C).play();
  } else if (note === "CSharp") {
    new Audio(CSharp).play();
  } else if (note === "D") {
    new Audio(D).play();
  } else if (note === "DSharp") {
    new Audio(DSharp).play();
  } else if (note === "E") {
    new Audio(E).play();
  } else if (note === "F") {
    new Audio(F).play();
  } else if (note === "FSharp") {
    new Audio(FSharp).play();
  } else if (note === "G") {
    new Audio(G).play();
  } else if (note === "GSharp") {
    new Audio(GSharp).play();
  } else if (note === "A") {
    new Audio(A).play();
  } else if (note === "ASharp") {
    new Audio(ASharp).play();
  } else if (note === "B") {
    new Audio(B).play();
  }
}
