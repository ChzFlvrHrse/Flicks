import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getAllFlicksThunk, getOneFlickThunk, searchFlickThunk } from '../store/flick'
import { getAllCategoriesThunk, getOneCategoryThunk } from '../store/category';

export default function Category() {
    const dispatch = useDispatch()



    return (
        <>
            <div>
                Test
            </div>
        </>
    )
}
