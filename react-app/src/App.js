import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Home from './components/Home/Home.js';
import Nav from './components/Nav/Nav.js';
import Movies from './components/Movies/Movies.js';

function App() {
  return (
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path='/movies' element={<Movies />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
