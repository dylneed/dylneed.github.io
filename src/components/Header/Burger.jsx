import React from 'react';

import './Burger.css';

function Burger({burgerRef: ref, setShowMenu}) {
  return (
    <button id="burger" ref={ref} onClick={() => setShowMenu(true)}>
      <div className="top bun" />
      <div className="meat" />
      <div className="middle bun" />
      <div className="meat" />
      <div className="bottom bun" />
    </button>
  )
}

export default Burger