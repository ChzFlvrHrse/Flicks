import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getAllFlicksThunk, getOneFlickThunk, searchFlickThunk } from '../store/flick'
import { getAllCategoriesThunk, getOneCategoryThunk } from '../store/category';
import "../index.css"
import SliderComponent from './Slick/slider';

export default function Category() {
  const dispatch = useDispatch()

  // const allCagegories = useSelector(state => Object.values(state.Category))
  // console.log(allCagegories)
  useEffect(() => {
    dispatch(getAllCategoriesThunk())
  }, [dispatch])


  return (
    <div>
      <SliderComponent />
    </div>
  );
}
