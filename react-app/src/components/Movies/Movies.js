import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoriesThunk } from '../../store/category';
import SliderComponent from '../Slick/slider';
import Info from '../Info/Info';
import DKT from '../Images/DKT.png';
import { Modal } from '../../context/Modal';
import './Movies.css';

export default function Movies() {
    const [showModalBanner, setShowModalBanner] = useState(false);
    const [genre, setGenre] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategoriesThunk())
    }, [dispatch])

    const categories = useSelector(state => Object.values(state.category))

    return (
        <div className='home-container'>
            <div className='banner'>
                <div className='banner-contents'>
                    <img className='banner-title' src={DKT}/>
                    <div className='synopsis'>
                        <p>
                            As Batman, Lt. Gordon and the district attorney continue
                            to dismantle Gotham's criminal underground, a new villain
                            threatens to undo their good work.
                        </p>
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
                        <Info title={'The Dark Knight'} setShowModal={setShowModalBanner} />
                    </Modal>
                )}
            </div>
            <div className='slider'>
                <SliderComponent allCategories={categories} vtype={'movie'}/>
            </div>
        </div>
    )
}
