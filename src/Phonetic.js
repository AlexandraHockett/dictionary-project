import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} rel="noreferrer" target="_blank">
        🔊
      </a>
      <span className="text">
      {props.phonetic.text}
      </span>
    </div>
  );
}
