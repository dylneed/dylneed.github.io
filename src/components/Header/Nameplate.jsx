import React, {useRef, useMemo} from 'react';

import './Nameplate.css';

import {Link} from "react-router-dom";

import useCompareSize from '../../hooks/useCompareSize.js';


function Nameplate({nameplateRef: ref, header, burger}) {
  const fullname = useMemo(()=>{return {}},[])
  fullname.ref = useRef(null)

  const occupations = useMemo(()=>{return {}},[])
  occupations.ref = useRef(null)

  const lastname = useMemo(()=>{return {}},[])
  lastname.ref = useRef(null)

  const occupationsWide = useCompareSize(header,[occupations,burger],"width", 21)
  const occupationsTall = useCompareSize(header,[occupations,fullname],"height");

  const showOccupations = occupationsWide && occupationsTall
  const showFullName = useCompareSize(header,[fullname,burger],"width",20);
  const showLastName = useCompareSize(header,[lastname,burger],"width",21);

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