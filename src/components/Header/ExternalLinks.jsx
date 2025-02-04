import React, {} from 'react';

import './ExternalLinks.css'

import bandcamp from '../../assets/img/bandcamp.png';
import github from '../../assets/img/github.png';
import linkedin from '../../assets/img/linkedin.png';

function ExternalLinks() {
  return (
    <div id="external-links">
      <a href="https://dylanneedleman.bandcamp.com" target="_blank" rel="noreferrer" className="external navigation">
        <img src={bandcamp} className="logos" alt="Bandcamp"/>
      </a>
      <a href="https://www.github.com/dylneed" target="_blank" rel="noreferrer" className="external navigation">
        <img src={github} alt="GitHub" className="logos"/>
      </a>
      <a href="https://www.linkedin.com/in/dylan-needleman-0a097a1b7/" target="_blank" rel="noreferrer" className="external navigation">
        <img src={linkedin} alt="LinkedIn" className="logos"/>
      </a>
    </div>
  );
}

export default ExternalLinks;
