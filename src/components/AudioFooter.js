import React, {useEffect, useRef, useState} from 'react';

function AudioFooter({source,setSource,autoplay=true}) {
  const audioRef = useRef()

  useEffect(() => {
    if (source) audioRef.current.play()
    else audioRef.current.pause()
  },[source])

  return <audio
           controls={source != undefined}
           style={{width:"94%",paddingLeft:"3%", bottom:"1.5vh", zIndex:1, position:"fixed"}}
           onEnded={() => setSource()}
           autoplay={autoplay}
           src={source}
           ref={audioRef}>
         </audio>
}

export default AudioFooter;
