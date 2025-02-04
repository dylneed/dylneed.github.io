const getComponentHeight = (ref, defaultHeight=0) => 
  ref.current ? ref.current.offsetHeight : defaultHeight

const getComponentWidth = (ref, defaultWidth=0) =>
  ref.current ? ref.current.offsetWidth : defaultWidth

function getComponentSize(ref, defaultHeight=0, defaultWidth=0) {
  return {
    height: getComponentHeight(ref,defaultHeight),
    width: getComponentWidth(ref,defaultWidth),
  }
}

export {getComponentWidth, getComponentHeight};
export default getComponentSize;