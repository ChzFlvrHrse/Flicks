import React, { useEffect } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import flicks from './flicks-PhotoRoom.png'
import "./Nav.css"
import { getAllCategoriesThunk, getOneCategoryThunk } from '../../store/category';

export default function Nav() {

    return (
        <nav id='nav'>
            <div id='left-nav'>
                <NavLink id="home"  to='/' exact={true}>
                    <img src={flicks} alt="Flicks" className='logo' />
                </NavLink>
                <NavLink className='links'>
                    Home
                </NavLink>
                <NavLink className='links'>
                    TV Shows
                </NavLink>
                <NavLink className='links'>
                    Movies
                </NavLink>
                <NavLink className='links'>
                    New & Popular
                </NavLink>
                <NavLink className='links'>
                    My List
                </NavLink>
            </div>
            <div id='right-nav'>

            </div>
        </nav>
    )
}
