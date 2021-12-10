import './Staff.scss';
import QtrNote from '../QtrNote/QtrNote';
import SharpNote from '../SharpNote/SharpNote';

export default function Staff({ note }) {
  return (
    <div className="staffContainer">
      <div className="staff">
        <div className="staffLines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="ENoteContainer">
          <div className={note === 'E' ? 'played' : 'notPlayed'}>
            <QtrNote />
          </div>
        </div>
        <div className="DNoteContainer offsetLeft">
          <div className={note === 'D' ? 'played' : 'notPlayed'}>
            <QtrNote />
          </div>
          <div className={note === 'DSharp' ? 'played' : 'notPlayed'}>
            <SharpNote />
          </div>
        </div>
        <div className="CNoteContainer">
          <div className={note === 'C' ? 'played' : 'notPlayed'}>
            <QtrNote />
          </div>
          <div className={note === 'CSharp' ? 'played' : 'notPlayed'}>
            <SharpNote />
          </div>
        </div>
        <div className="BNoteContainer offsetLeft">
          <div className={note === 'B' ? 'played' : 'notPlayed'}>
            <QtrNote />
          </div>
        </div>
        <div className="ANoteContainer">
          <div className={note === 'A' ? 'played' : 'notPlayed'}>
            <QtrNote />
          </div>
          <div className={note === 'ASharp' ? 'played' : 'notPlayed'}>
            <SharpNote />
          </div>
        </div>
        <div className="GNoteContainer offsetLeft">
          <div className={note === 'G' ? 'played' : 'notPlayed'}>
            <QtrNote />
          </div>
          <div className={note === 'GSharp' ? 'played' : 'notPlayed'}>
            <SharpNote />
          </div>
        </div>
        <div className="FNoteContainer">
          <div className={note === 'F' ? 'played' : 'notPlayed'}>
            <QtrNote />
          </div>
          <div className={note === 'FSharp' ? 'played' : 'notPlayed'}>
            <SharpNote />
          </div>
        </div>
      </div>
    </div>
  );
}
