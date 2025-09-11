import React, {useState} from 'react';
import {Subtitle, Performance} from "./PieceListEntry.jsx"
import AudioFooter from "../../components/AudioFooter.js"
import "./index.css"
import "./Piece.css"
import playButton from "../../assets/img/playbutton.png"
import stopButton from "../../assets/img/stopbutton.png"
import downloadButton from "../../assets/img/downloadbutton.png"
import bandcampLogo from "../../assets/img/bandcamp.png"

function Piece({piece}) {
  const [audioSource,setAudioSource] = useState()

  return <div id="piece">
      <h1 className="header">{piece.title} ({piece.year})</h1>
      <p className="header"><Subtitle piece={piece} style={{fontSize:"1.3333rem"}} /></p>
      <p className="header" style={{fontSize:"1.3333rem",paddingBottom:"10px", }}>
        {piece.performances.map((performance) => <>
          {performance.mp3 && <img
            alt={(audioSource === performance.mp3) ? "Stop" : "Play"}
            className="performance-button"
            src={(audioSource === performance.mp3) ? stopButton : playButton}
            style={{height:"1.5rem",verticalAlign:"bottom"}}
            onClick={() => {if (audioSource === performance.mp3) {setAudioSource()} else {setAudioSource(performance.mp3)}}}
            />}
          {" "}
          <Performance performance={performance} />
          {" "}
          {performance.bandcampUrl && <a href={performance.bandcampUrl} target="_blank" rel="noreferrer">
            <img className="performance-button" alt="Bandcamp" src={bandcampLogo} style={{height:"1.5rem",verticalAlign:"bottom"}} />
          </a>}
          {" "}
          {performance.mp3 && <a href={performance.mp3} download>
            <img className="performance-button" alt="Download" src={downloadButton} style={{height:"1.5rem",verticalAlign:"bottom"}} />
          </a>}
          <br />
        </>)}
      </p>
      <embed src={piece.pdf}/>
      <AudioFooter source={audioSource} setSource={setAudioSource} autoplay/>
    </div>
}

export default Piece
