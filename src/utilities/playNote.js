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
  switch (note) {
  case "C":
    new Audio(C).play();
    break;
  case "CSharp":
    new Audio(CSharp).play();
    break;
  case "D":
    new Audio(D).play();
    break;
  case "DSharp":
    new Audio(DSharp).play();
    break;
  case "E":
    new Audio(E).play();
    break;
  case "F":
    new Audio(F).play();
    break;
  case "FSharp":
    new Audio(FSharp).play();
    break;
  case "G":
    new Audio(G).play();
    break;
  case "GSharp":
    new Audio(GSharp).play();
    break;
  case "A":
    new Audio(A).play();
    break;
  case "ASharp":
    new Audio(ASharp).play();
    break;
  case "B":
    new Audio(B).play();
    break;
  }
}
