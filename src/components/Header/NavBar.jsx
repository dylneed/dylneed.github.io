import React, {} from 'react';

import './NavBar.css'

import ExternalLinks from './ExternalLinks';

function NavBar({navBarRef: ref, pages}) {
  return (
    <div id="navBar" ref={ref}>
      <nav aria-label="within the site">
        {pages.map((page) => page.navbarDisplay && page.link)}
      </nav>
      <nav aria-label="External links">
        <ExternalLinks />
      </nav>
    </div>
  )
}

export default NavBar;