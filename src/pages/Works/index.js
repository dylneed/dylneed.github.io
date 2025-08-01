import "./index.css"
import React from 'react';
import {worksList} from './worksList.jsx'

function displayPiece(piece) {
  return <p className="piece" style={{fontSize:"1.333rem"}}>
    <b style={{fontVariant:"small-caps",fontSize:"1.5rem"}}>
      {piece.url
        ? <a href={piece.url} target="_blank" rel="norefferer">{piece.title}</a>
        : piece.title
      }
    </b>
    {piece.year && ` (${piece.year})`}
    <br />
    <i style={{fontSize:"1.167rem",fontStyle:""}}> for {piece.ensemble}</i>
    {piece.performances && piece.performances.map ((performance) => {
      if (performance.url) return <>
        <br />
        <a href={performance.url} style={{fontSize:"1.167rem"}} target="_blank" rel="norefferer">
          {performance.performedOveride || "Performed by"} {performance.ensemble} ({performance.year})
        </a>
    </>})}
  </p>
}


function Works() {
  return <div id="works">
    <div id="works-list">
      <h1 className="header">Works</h1>
      <h2 className="ensemble-type">Chamber Music</h2>
      {worksList.chamber.map(piece => displayPiece(piece))}
      <h2 className="ensemble-type">Solos and Duets</h2>
      {worksList.soloDuet.map(piece => displayPiece(piece))}
      <h2 className="ensemble-type">Large Ensembles</h2>
      {worksList.largeEnsemble.map(piece => displayPiece(piece))}
      <h2 className="ensemble-type">Electronic Works</h2>
      {worksList.electronic.map(piece => displayPiece(piece))}
    </div>
  </div>
}

export default Works;
