import "./Staff.css";

export default function Keyboard({ note }) {
  return (
    <div className="mainContainer">
      <h1 className="noteTracker">Note: { note }</h1>
      <div className="staffContainer">
        {/* <div className="trebleClefImgContainer"><div className="trebleClefImg"></div></div> */}
        <div className="staff">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
}
