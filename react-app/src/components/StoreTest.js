import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getAllFlicksThunk, getOneFlickThunk, searchFlickThunk } from '../store/flick'

export default function Category() {
    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(getAllFlicksThunk())
    // }, [dispatch])

    useEffect(() => {
        dispatch(getOneFlickThunk('zebra'))
    }, [dispatch])

    return (
        <div>
            <div>
                Test
            </div>
        </div>
    )
}
