import React from 'react';
import './index.css'
import worksList from './works'
import PieceListEntry from './PieceListEntry.jsx'
import {Link} from "react-router-dom";

function Home() {
  return <div id="works">
    <div id="works-list">
      <h1 className="header">Selected Works</h1>
      {worksList.map((type,i) => <>
        <Link
          to={type.url}
          onClick={() => window && window.scroll(0,0)}
          key={i}
        >
          <h2 className="ensemble-type works-link">{type.title}</h2>
        </Link>
        {type.works.map(piece => piece.selected
            ? <PieceListEntry piece={piece}/>
            : <></>
        )}
      </>)}
    </div>
  </div>
}

export default Home;
