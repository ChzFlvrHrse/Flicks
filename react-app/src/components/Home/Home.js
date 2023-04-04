import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Nav from '../Nav/Nav';
import { getAllFlicksThunk, getOneFlickThunk, searchFlickThunk } from '../../store/flick'
import { getAllCategoriesThunk, getOneCategoryThunk } from '../../store/category';
import SliderComponent from '../Slick/slider';
import './Home.css';

export default function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategoriesThunk())
    }, [dispatch])

    const categories = useSelector(state => Object.values(state.category))

    return (
        <div className='home-container'>
            <div>

            </div>
            <div>
                <SliderComponent allCategories={categories} />
            </div>
        </div>
    )
}
