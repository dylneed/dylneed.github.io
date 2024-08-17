import React, {useRef, useState, useEffect, useMemo} from 'react';

import './index.css';

import Nameplate  from './Nameplate.jsx';
import NavBar from './NavBar.jsx';
import Burger from './Burger.jsx';
import Menu from './Menu.jsx';

import headerImg from '../../assets/img/header.png';

import useWindowSize from '../../hooks/useWindowSize.js';
import {getComponentWidth, getComponentHeight} from '../../utils/getComponentSize.js';


function Header({pages}) {
  const windowSize = useWindowSize();

  const [showMenu, setShowMenu] = useState(false);
  const [showNavBar, setShowNavBar] = useState(true);

  const header = {ref: useRef(null), img:headerImg}
  header.getHeight = () => getComponentHeight(header.ref)

  const nameplate = useMemo(() => {return{}},[]);
  nameplate.ref = useRef(null)
  nameplate.getWidth = (expected=426) => getComponentWidth(nameplate.ref,expected)
  useEffect(() => {
    nameplate.width = getComponentWidth(nameplate.ref)
  },[nameplate])

  const navBar = useMemo(()=>{return{}},[])
  navBar.ref = useRef(null)
  useEffect(() => {
    if (showNavBar) navBar.width = getComponentWidth(navBar.ref,468)
  },[showNavBar, navBar])

  const burger = {ref: useRef(null)}

  useEffect(() => {
    setShowNavBar(windowSize.width > navBar.width + nameplate.width + 30);
  },[navBar,nameplate,windowSize])

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