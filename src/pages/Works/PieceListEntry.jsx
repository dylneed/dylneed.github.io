import React from 'react';
import {Link} from "react-router-dom";
import playButton from "../../assets/img/playbutton.png"
import stopButton from "../../assets/img/stopbutton.png"
import downloadButton from "../../assets/img/downloadbutton.png"
import bandcampLogo from "../../assets/img/bandcamp.png"

function Title({piece, link=true}) {
  return <>
    <b style={{fontVariant:"small-caps",fontSize:"1.667rem"}}>
      {link && piece.page
        ? <Link to={piece.internalUrl} onClick={() => window && window.scroll(0,0)}>
            {piece.title}
          </Link>
        : piece.title
      }
    </b>
    {piece.year && ` (${piece.year})`}
  </>
}

function PlayerTitle({piece, link=true, audioSource, setAudioSource, mp3}) {
  return <>
    {piece.mp3 && <img
      alt={(audioSource === piece.mp3) ? "Stop" : "Play"}
      className="performance-button"
      src={(audioSource === piece.mp3) ? stopButton : playButton}
      style={{height:"1.875rem",verticalAlign:"bottom"}}
      onClick={() => {if (audioSource === piece.mp3) {setAudioSource()} else {setAudioSource(piece.mp3)}}}
    />}
    {" "}
    <Title piece={piece} link={link} />
    {" "}
    {piece.bandcampUrl && <a href={piece.bandcampUrl} target="_blank" rel="noreferrer">
    <img className="performance-button" alt="Bandcamp" src={bandcampLogo} style={{height:"1.875rem",verticalAlign:"bottom"}} />
    </a>}
    {" "}
    {piece.mp3 && <a href={piece.mp3} download>
    <img className="performance-button" alt="Download" src={downloadButton} style={{height:"1.875rem",verticalAlign:"bottom"}} />
    </a>}
  </>
}

function Subtitle({piece, style={fontSize:"1.167rem",fontStyle:""}}) {
  return <>
    {piece.ensemble && <i style={style}> {piece.ensemblePrefix ||"for"} {piece.ensemble}</i>}
    {piece.text && <><br /><i style={style}>
      {piece.text.prefix || "with text"}
      {piece.text.work && piece.text.work !== piece.title && <> {piece.text.workPrefix || "from"} <em>"{piece.text.work}"</em></>}
      {piece.text.author && <> {piece.text.authorPrefix || "by"} {piece.text.author}</>}
    </i></>}
  </>
}

function Performance({performance, link=false}) {
  const performanceStr = performance.midiRealization
    ? "MIDI Realization"
    : `${performance.performedOveride || "performed by"} ${performance.ensemble} (${performance.year})`
  return link
    ? <a href={performance.url} target="_blank" rel="noreferrer">{performanceStr}</a>
    : <>{performanceStr}</>

}

function Performances({piece, link=false, showMidi=false }) {
  return piece.performances && piece.performances.map ((performance,i) =>
  (!performance.midiRealization || showMidi) &&
    <>
      <br />
      <Performance performance={performance} link={link} />
    </>)
}

function PieceListEntry({piece, performances, showPlayerTitle, audioSource, setAudioSource}) {
  console.log(showPlayerTitle)
  return <p className="piece" style={{fontSize:"1.333rem"}}>
    {showPlayerTitle
      ? <PlayerTitle piece={piece} audioSource={audioSource} setAudioSource={setAudioSource} />
      : <Title piece={piece} />
    }
    <br />
    <Subtitle piece={piece} />
    {performances && <Performances piece={piece} />}
    </p>
}

export default PieceListEntry;
export { Title, Subtitle, Performance, Performances }
