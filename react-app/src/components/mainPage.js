import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getAllFlicksThunk, getOneFlickThunk, searchFlickThunk } from '../store/flick'
import "./Slick/slick-theme.css"
import "./Slick/slick.css"
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from './Slick/arrowFunctions';
import "../index.css"

export default function Category() {
  const dispatch = useDispatch()

  var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "325px",
    slidesToShow: 1,
    speed: 500,
    dots: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className='slider-container'>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}
