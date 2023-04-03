import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Nav from '../Nav/Nav';
import { getAllFlicksThunk, getOneFlickThunk, searchFlickThunk } from '../../store/flick'
import { getAllCategoriesThunk, getOneCategoryThunk } from '../../store/category';
import SliderComponent from '../Slick/slider';

export default function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategoriesThunk())
    }, [dispatch])

    const categories = useSelector(state => Object.values(state.category))

    return (
        <div>
            <div>
                <Nav />
            </div>
            <div>
                <SliderComponent allCategories={categories} />
            </div>
        </div>
    )
}
