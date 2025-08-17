import React from 'react';

function PieceListEntry({piece}) {
  return <p className="piece" style={{fontSize:"1.333rem"}}>
    <b style={{fontVariant:"small-caps",fontSize:"1.667rem"}}>
    {piece.url
      ? <a href={piece.url} target="_blank" rel="noreferrer">{piece.title}</a>
      : piece.title
    }
    </b>
    {piece.year && ` (${piece.year})`}
    <br />
    {piece.ensemble && <i style={{fontSize:"1.167rem",fontStyle:""}}> {piece.ensemblePrefix ||"for"} {piece.ensemble}</i>}
      {piece.text && <><br /><i style={{fontSize:"1.167rem",fontStyle:""}}>
      {piece.text.prefix || "with text"}
      {piece.text.work && piece.text.work !== piece.title && <> {piece.text.workPrefix || "from"} <em>"{piece.text.work}"</em></>}
      {piece.text.author && <> {piece.text.authorPrefix || "by"} {piece.text.author}</>}
    </i></>}
    {piece.performances && piece.performances.map ((performance) =>
      performance.url
      ? <>
        <br />
        <a href={performance.url} style={{fontSize:"1.167rem"}} target="_blank" rel="noreferrer">
        {performance.performedOveride || "performed by"} {performance.ensemble} ({performance.year})
        </a>
      </>
      : <></>)}
    </p>
}

export default PieceListEntry;
