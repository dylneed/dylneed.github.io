import React, {useEffect} from "react";

function TitleUpdater({pageTitle}) {
  if (pageTitle !== "") pageTitle += " — ";
  useEffect(() => {
    document.title = pageTitle + "Dylan Needleman";
  }, [pageTitle])
  return <></>
}

export default TitleUpdater;
