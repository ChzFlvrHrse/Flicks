import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoriesThunk, getOneCategoryThunk } from '../store/category'

export default function Category() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllCategoriesThunk())
    }, [dispatch])

    useEffect(() => {
        dispatch(getOneCategoryThunk(1))
    }, [dispatch])

    return (
        <div>
            <div>
                Hello
            </div>
        </div>
    )
}
