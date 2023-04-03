import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getAllFlicksThunk, getOneFlickThunk, searchFlickThunk } from '../store/flick'
import "./Slick/slick-theme.css"
import "./Slick/slick.css"
import "../index.css"
import SliderComponent from './Slick/slider';

export default function Category() {
  const dispatch = useDispatch()

  return (
    <div>
      <SliderComponent />
    </div>
  );
}
