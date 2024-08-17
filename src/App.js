import React, {} from "react";
import {Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import {pages} from './pages';

import background from './assets/img/background.jpg';

function App() {

  return (
    <div className='App' style={{height:"100%", background:`url(${background})`}}>
      <Header pages={pages} />
      <div style={{minHeight:"100vh"}}>
        <Routes>
          <Route path="/">
            {pages.map((page) => page.route)}
          </Route>
        </Routes>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
