import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Tooltip } from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import HdTwoToneIcon from '@mui/icons-material/HdTwoTone';
import { getOneFlickThunk } from '../../store/flick';
import "./Info.css"

export default function Info({ title, setShowModal }) {
    const dispatch = useDispatch();

    function secondsToHm(num) {
        num = Number(num);
        const h = Math.floor(num / 3600);
        const m = Math.floor(num % 3600 / 60);

        return h + "h " + m + "m"
    }

    useEffect(() => {
        dispatch(getOneFlickThunk(title))
    }, [dispatch])

    const flicks = useSelector(state => Object.values(state.flick));
    const genres = (flicks) => flicks.map(flick => flick.categoryName);
    const genreLen = genres(flicks).length

    return (
        <div className='info-modal' style={{backgroundImage: `url(${flicks[0]?.img})`}}>
            <img src={flicks[0]?.img} className='img'/>
            <div className='info-contents'>
                <div className='info-title'>
                    {flicks[0]?.title}
                </div>
                <div className='general-info'>
                    <div className='tech-details'>
                        <div className='detail'>
                            {flicks[0]?.year}
                        </div>
                        <div className='detail'>
                            {flicks[0]?.runtime === 0 ? secondsToHm(flicks[0]?.runtime) : <></>}
                        </div>
                        <div className='detail'>
                            <HdTwoToneIcon />
                        </div>
                        <div className='detail'>
                            <Tooltip className='audio' title='Subtitles for the deaf and hard of hearing are available' placement="top" arrow>
                                <AutoStoriesIcon />
                            </Tooltip>
                        </div>
                    </div>
                    <div className='sub-modal'>
                        <div className='modal-synopsis'>
                            {flicks[0]?.synopsis}
                        </div>
                        <div className='genres'>
                            {'Genres:'}
                            <div className='all-genres'>
                                {genres(flicks).map((genre, i) => (
                                    <Link key={i} className='genre'>
                                        {i === genreLen - 1 ? genre : `${genre}, `}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='info-fade-bottom'></div>
        </div>
    )
}
