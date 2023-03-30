import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Category from './components/StoreTest';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Category/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
