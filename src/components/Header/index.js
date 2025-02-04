import React, {useRef, useState, useMemo} from 'react';

import './index.css';

import Nameplate  from './Nameplate.jsx';
import NavBar from './NavBar.jsx';
import Burger from './Burger.jsx';
import Menu from './Menu.jsx';

import headerImg from '../../assets/img/header.png';

import useCompareSize from '../../hooks/useCompareSize.js';
import {getComponentHeight} from '../../utils/getComponentSize.js';


function Header({pages}) {
  const [showMenu, setShowMenu] = useState(false);

  const header = {ref: useRef(null), img:headerImg}
  header.getHeight = () => getComponentHeight(header.ref)

  const nameplate = useMemo(() => {return{}},[]);
  nameplate.ref = useRef(null)

  const navBar = useMemo(()=>{return{}},[])
  navBar.ref = useRef(null)

  const burger = useMemo(()=>{return{}},[])
  burger.ref = useRef(null)

  const showNavBar = useCompareSize(header,[navBar,nameplate],"width")

  return (
    <header id="header" style={{backgroundImage:`url(${header.img})`}} ref={header.ref}>
      {showMenu && <Menu pages={pages} setShowMenu={setShowMenu} />}
      <Nameplate nameplateRef={nameplate.ref} header={header} burger={burger}/>
      {showNavBar
        ? <NavBar navBarRef={navBar.ref} pages={pages} /> 
        : <Burger burgerRef={burger.ref} setShowMenu={setShowMenu} />
      }
    </header>
  );
}

export default Header;