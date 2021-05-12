export default function MySongsPage ({ userSongs }) {
  return (
    <div className="mySongsPage">
      <h1>My Songs Page!</h1>
      <div className="mySongsContainer">
        { userSongs.length ? 
          userSongs.map((userSong, idx) => 
            <div className="songLine">Song {idx + 1}: { userSong }</div>
          )
          : 
          "No songs yet!" }
      </div>
    </div>
  )
}
