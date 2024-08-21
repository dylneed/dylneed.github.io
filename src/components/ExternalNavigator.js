import React, {useEffect} from "react";

function ExternalNavigator({to, replace}) {

  useEffect(() => {
    if (replace) window.location.replace(to);
    else window.location.href = to;
  })
  return <></>;
}

export default ExternalNavigator;