import "./Staff.css";

export default function Keyboard({ song }) {
  return (
      <div className="staffContainer">
        {/* <div className="trebleClefImgContainer"><div className="trebleClefImg"></div></div> */}
        <div className="songTracker">Song: { song }</div>
        <div className="staff">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
  );
}
