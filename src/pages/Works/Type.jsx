import React, {useState} from 'react';
import PieceListEntry from './PieceListEntry.jsx'
import AudioFooter from "../../components/AudioFooter.js"

function Type({workType}) {
  const [audioSource, setAudioSource] = useState()
  console.log(workType)
  const loadAudio = workType.url==="electronic"

  return <div id="works">
    <div id="works-list">
      <h1 className="header">{workType.title}</h1>
      {workType.works.map(piece =>
        <PieceListEntry piece={piece} showPlayerTitle={loadAudio} audioSource={audioSource} setAudioSource={setAudioSource} />
      )}
    </div>
    {loadAudio && <AudioFooter source={audioSource} setSource={setAudioSource} />}
  </div>
}

export default Type;
