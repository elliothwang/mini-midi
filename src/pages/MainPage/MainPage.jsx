import './MainPage.css';
import { useState } from 'react';
import Staff from '../../components/Staff/Staff';
import Keyboard from '../../components/Keyboard/Keyboard';
import ContentBar from '../../components/ContentBar/ContentBar';

export default function MainPage({ userSongs, setUserSongs }) {
  const [note, setNote] = useState('');
  const [song, setSong] = useState([]);
  const [isRecording, setIsRecording] = useState(false);

  return (
    <div className="mainPage">
      <ContentBar
        note={note}
        setNote={setNote}
        song={song}
        setSong={setSong}
        userSongs={userSongs}
        setUserSongs={setUserSongs}
        isRecording={isRecording}
        setIsRecording={setIsRecording}
      />
      <Staff note={note} />
      <Keyboard
        setNote={setNote}
        song={song}
        setSong={setSong}
        isRecording={isRecording}
      />
    </div>
  );
}
