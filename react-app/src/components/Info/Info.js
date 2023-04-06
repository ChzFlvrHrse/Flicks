import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Tooltip } from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import HdTwoToneIcon from '@mui/icons-material/HdTwoTone';
import "./Info.css"

export default function Info({ info, genres }) {
    const first = info[0]

    function secondsToHm(d) {
        d = Number(d);
        const h = Math.floor(d / 3600);
        const m = Math.floor(d % 3600 / 60);

        return h + "h " + m + "m"
    }

    return (
        <div className='info-modal'>
            <div className='info-contents'>
                <div className='info-title'>
                    {first.title}
                </div>
                <div className='general-info'>
                    <div className='tech-details'>
                        <div className='detail'>
                            {first.year}
                        </div>
                        <div className='detail'>
                            {secondsToHm(first.runtime)}
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
                            {first.synopsis}
                        </div>
                        <div className='genres'>
                            {'Genres:'}
                            <div className='all-genres'>
                                {genres.map((genre, i) => (
                                    <Link key={i} className='genre'>
                                        {i === genres.length - 1 ? genre : `${genre}, `}
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
