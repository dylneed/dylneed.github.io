import React from 'react';
import PieceListEntry from './PieceListEntry.jsx'

function Type({workType}) {
  return <div id="works">
    <div id="works-list">
      <h1 className="header">{workType.title}</h1>
      {workType.works.map(piece => <PieceListEntry piece={piece}/>)}
      </div>
    </div>
}

export default Type;
