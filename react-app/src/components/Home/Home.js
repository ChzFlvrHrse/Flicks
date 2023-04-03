import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Nav from '../Nav/Nav';
import { getAllFlicksThunk, getOneFlickThunk, searchFlickThunk } from '../../store/flick'
import { getAllCategoriesThunk, getOneCategoryThunk } from '../../store/category';

export default function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategoriesThunk())
    }, [dispatch])

    const categories = useSelector(state => state.category)
    const catKeys = Object.keys(categories)
    console.log(catKeys)

    return (
        <div>
            <div>
                <Nav />
            </div>
            <div>
                
            </div>
        </div>
    )
}
