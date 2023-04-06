import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getAllFlicksThunk, getOneFlickThunk, searchFlickThunk } from '../../store/flick'
import { getAllCategoriesThunk, getOneCategoryThunk } from '../../store/category';
import SliderComponent from '../Slick/slider';
import Info from '../Info/Info';
import DKT from '../Images/DKT.png'
import { Modal } from '../../context/Modal';
import './Home.css';

export default function Home() {
    const [showModalBanner, setShowModalBanner] = useState(false)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategoriesThunk())
    }, [dispatch])

    useEffect(() => {
        dispatch(getOneFlickThunk('The Dark Knight'))
    }, [dispatch])

    const categories = useSelector(state => Object.values(state.category))
    const banner = useSelector(state => Object.values(state.flick))

    const genres = (banner) => banner.map(ban => ban.categoryName)

    return (
        <div className='home-container'>
            <div className='banner'>
                <div className='banner-contents'>
                    <img className='banner-title' src={DKT} />
                    <div className='synopsis'>
                        {banner[0]?.synopsis}
                        <div className='banner-buttons'>
                            <button className='banner-button play'><i class="fa-solid fa-play"></i> Play</button>
                            <button onClick={() => setShowModalBanner(true)} className='banner-button info'><i class="fa-solid fa-circle-info"></i> More Info</button>
                        </div>
                    </div>
                </div>
                <div className='banner-fade-bottom'></div>
            </div>
            <div>
                {showModalBanner && (
                    <Modal onClose={() => setShowModalBanner(false)}>
                        <Info info={banner[0]} genres={genres(banner)}/>
                    </Modal>
                )}
            </div>
            <div className='slider'>
                <SliderComponent allCategories={categories} />
            </div>
        </div>
    )
}
