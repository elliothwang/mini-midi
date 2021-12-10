import './MySongsPage.scss';
import { useEffect, useState } from 'react';
import Staff from '../../components/Staff/Staff';
import { ReactComponent as Play } from '../../assets/Icons/play.svg';
import { ReactComponent as Pause } from '../../assets/Icons/pause.svg';

// import * as songsAPI from "../../utilities/songs-api";

// TODO: add CRUD functionality;
export default function MySongsPage({ songs }) {
  const [activeSong, setActiveSong] = useState(0);

  // useEffect(() => {
  //   async function index() {
  //     const userSongs = await songsAPI.index();
  //   }
  //   index();
  // }, []);

  function playSong(evt) {
    setActiveSong(evt.target.value);
  }

  return (
    <div>
      <div className="songsPage">
        {songs.map((song, idx) => (
          <div className="song">
            <div className="songHeader">
              <div
                className={
                  idx % 2 === 0 ? 'songTitle blue' : 'songTitle purple'
                }
              >
                {idx + 1}
              </div>
            </div>
            <div className="mainSec">
              {/* {song.map((notes) => (
                <div className="songNotes">{notes}</div>
              ))} */}
              <div className="playbutton" value={idx} onClick={playSong}>
                {activeSong ? <Pause /> : <Play />}
              </div>
              <div className="songStaff">
                <Staff />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
