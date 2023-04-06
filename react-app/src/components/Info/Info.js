import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Tooltip } from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import HdIcon from '@mui/icons-material/Hd';
import "./Info.css"

export default function Info({ info, genres }) {

    return (
        <div className='info-modal'>
            <div className='info-contents'>
                <div className='info-title'>
                    {info.title}
                </div>
                <div className='general-info'>
                    <div className='tech-details'>
                        <HdIcon />
                        <Tooltip className='audio' title='Subtitles for the deaf and hard of hearing are available' placement="top" arrow>
                            <AutoStoriesIcon />
                        </Tooltip>
                    </div>
                    <div className='sub-modal'>
                        <div className='modal-synopsis'>
                            {info.synopsis}
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
