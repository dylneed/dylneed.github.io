import React, {useRef, useState, useEffect, useMemo} from 'react';

import './Nameplate.css';

import {Link} from "react-router-dom";

import useWindowSize from '../../hooks/useWindowSize.js';
import {getComponentHeight, getComponentWidth} from '../../utils/getComponentSize.js';


function Nameplate({nameplateRef: ref, header, burger}) {
  const windowSize = useWindowSize();

  const [showFullName, setShowFullName] = useState(true);
  const [showOccupations, setShowOccupations] = useState(true);
  const [showLastName, setShowLastName] = useState(true);

  const fullname = useMemo(()=>{return {}},[])
  fullname.ref = useRef(null)
  useEffect(() => {
    if (showFullName) {
      fullname.width = getComponentWidth(fullname.ref);
      fullname.height = getComponentHeight(fullname.ref);
    }
  },[showFullName,fullname])

  const occupations = useMemo(()=>{return {}},[])
  occupations.ref = useRef(null)
  useEffect(() => {
    if (showOccupations) {
      occupations.height = getComponentHeight(occupations.ref);
      occupations.width = getComponentWidth(occupations.ref);
    }
  },[occupations, showOccupations])

  const lastname = useMemo(()=>{return {}},[])
  lastname.ref = useRef(null)
  useEffect(() => {
    if(showLastName) {
      lastname.width = getComponentWidth(lastname.ref)
    }
  },[lastname, showLastName])

  burger.width = getComponentWidth(burger.ref, 50);

  useEffect(() => {
    setShowFullName(burger.width + Math.max(fullname.width, occupations.width) + 40 < windowSize.width)
  },[windowSize, burger,fullname,occupations])

  useEffect(() => {
    setShowOccupations(header.getHeight() > fullname.height + occupations.height);
  },[windowSize, fullname, occupations, header])

  useEffect(() => {
    setShowLastName(windowSize.width > lastname.width + burger.width)
  },[windowSize,lastname,burger])


  return (
    <Link id="nameplate" to='/' role="navigation" aria-label="to home page" ref={ref}>
      <div style={{textAlign:"center", margin:0}}>
        {showFullName
        ? <>
            <h1 id="fullname" ref={fullname.ref}>Dylan Needleman</h1>
            {
              showOccupations && 
              <h2 id="occupations" style={{margin:0}} ref={occupations.ref}>
                composer – producer – programmer
              </h2>
            }
          </>
        : showLastName && <h1 id="lastname" ref={lastname.ref}>Needleman</h1>}
      </div>
    </Link>
  );
}

export default Nameplate;