import React, {useRef, useEffect, useState} from 'react';

import './Menu.css'
import ExternalLinks from './ExternalLinks';
import {getComponentWidth, getComponentHeight} from '../../utils/getComponentSize.js';

function Menu({pages, setShowMenu}) {
  const menuRef = useRef();
  const [menuHeight, setMenuHeight] = useState(0);
  const [menuWidth, setMenuWidth] = useState(0);

  useEffect(() => {
    setMenuHeight(getComponentHeight(menuRef));
    setMenuWidth(getComponentWidth(menuRef));
  },[menuRef])

  return (
    <div id="menu" onClick={() => setShowMenu(false)}>
      <div
        id="menu-options"
        ref={menuRef}
        style={{
          marginTop:`${menuHeight / -2}px`,
          marginLeft: `${menuWidth / -2}px`,
          position:"fixed",
        }}
      >
        {pages.map((page, i) => 
          <div key={i} className="menu-item">{page.menuDisplay && page.link}</div>
        )}
        <div className='menu-item'><ExternalLinks /></div>
      </div>
    </div>
  );
}

export default Menu;