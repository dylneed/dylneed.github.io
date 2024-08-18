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
    // let id = elements[0].ref.current && elements[0].ref.current.id
    // if (id) console.log(id, parent[dimension], elements[0][dimension], elements[1][dimension],totalSize,offset)
    setCompare(parent[dimension] >= totalSize + offset);
  }, [windowSize, parent, elements, dimension, offset]);

  useEffect(() => {
    compare && elements.forEach((el) => el[dimension] = getComponentSize(el.ref)[dimension]);
  }, [compare,elements,dimension]);

  return compare;
}

export default useCompareSize;