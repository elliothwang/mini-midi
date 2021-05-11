import { useState } from "react";
import Staff from "../../components/Staff/Staff";
import Keyboard from "../../components/Keyboard/Keyboard";
import ContentBar from "../../components/ContentBar/ContentBar";

export default function MainPage () {
  const [note, setNote] = useState("");
  const [song, setSong] = useState([]);

  return (
    <div className="mainPage">
      <h1>Main Page!</h1>
      <ContentBar note={ note } />
      <Staff song={ song} />
      <Keyboard setNote={ setNote } song={ song } setSong={ setSong } />
    </div>
  )
}
