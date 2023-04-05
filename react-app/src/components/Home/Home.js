import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getAllFlicksThunk, getOneFlickThunk, searchFlickThunk } from '../../store/flick'
import { getAllCategoriesThunk, getOneCategoryThunk } from '../../store/category';
import SliderComponent from '../Slick/slider';
import dkt from '../Images/dkt.png'
import './Home.css';

export default function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategoriesThunk())
    }, [dispatch])

    useEffect(() => {
        dispatch(getOneFlickThunk('The Dark Knight'))
    }, [dispatch])

    const categories = useSelector(state => Object.values(state.category))
    const banner = useSelector(state => Object.values(state.flick))

    return (
        <div className='home-container'>
            <div className='banner'>
                <div className='banner-contents'>
                    <img className='banner-title' src={dkt}/>
                    <div className='synopsis'>
                        {banner[0]?.synopsis}
                    </div>
                    <div className='banner-buttons'>
                        <button className='banner-button play'><i class="fa-solid fa-play"></i> Play</button>
                        <button className='banner-button info'><i class="fa-solid fa-circle-info"></i> More Info</button>
                    </div>
                </div>
                <div className='banner-fade-bottom'></div>
            </div>
            <div>
                <SliderComponent allCategories={categories} />
            </div>
        </div>
    )
}
