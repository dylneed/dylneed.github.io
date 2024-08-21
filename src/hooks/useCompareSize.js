import { useState, useEffect } from "react";
import useWindowSize from './useWindowSize.js';
import getComponentSize from '../utils/getComponentSize.js';

const useCompareSize = (parent, elements, dimension, offset=0) => {
  const windowSize = useWindowSize();

  const [compare, setCompare] = useState(true);

  useEffect(() => {
    parent[dimension] = getComponentSize(parent.ref)[dimension];
  },[windowSize, parent, dimension])
  
  useEffect(() => {
    let totalSize = 0;
    elements.forEach((el) => totalSize += el[dimension]);
    let sizes = ""
    elements.forEach((el) => sizes += el[dimension] + " ");
    setCompare(parent[dimension] >= totalSize + offset);
  }, [windowSize, parent, elements, dimension, offset]);

  useEffect(() => {
    compare && elements.forEach((el) => el[dimension] = getComponentSize(el.ref)[dimension]);
  }, [compare,elements,dimension]);

  return compare;
}

export default useCompareSize;