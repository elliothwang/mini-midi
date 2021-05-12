export default function MySongsPage ({ userSongs }) {
  return (
    <div className="mySongsPage">
      <h1>My Songs Page!</h1>
      <div className="mySongsContainer">
        { userSongs.map((userSong, idx) => 
          <div>Song { idx + 1}: { userSong }</div>
          )}
      </div>
    </div>
  )
}