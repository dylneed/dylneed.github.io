import React from 'react';
import {Link} from "react-router-dom";

function Title({piece, link=true}) {
  return <>
    <b style={{fontVariant:"small-caps",fontSize:"1.667rem"}}>
      {link && piece.page
        ? <Link to={`/works/${piece.workTypeUrl}/${piece.id}`} onClick={() => window && window.scroll(0,0)}>
            {piece.title}
          </Link>
        : piece.title
      }
    </b>
    {piece.year && ` (${piece.year})`}
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

function PieceListEntry({piece, performances=false}) {
  return <p className="piece" style={{fontSize:"1.333rem"}}>
    <Title piece={piece} />
    <br />
    <Subtitle piece={piece} />
    {performances && <Performances piece={piece} />}
    </p>
}

export default PieceListEntry;
export { Title, Subtitle, Performance, Performances }
