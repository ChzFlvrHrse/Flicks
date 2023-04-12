import React, { useEffect, useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import flicks from './flicks.png'
import { getAllCategoriesThunk, getOneCategoryThunk } from '../../store/category';
import styled from "styled-components";
import Search from '../Search/Search';
import "./Nav.css"

export default function Nav() {
    const [scrollTop, setScrollTop] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        const handleScroll = event => {
            setScrollTop(window.scrollY === 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <nav className={scrollTop ? 'nav-top' : 'nav-not-top'}>
            <div id='left-nav'>
                <NavLink className="home" to='/' exact='true'>
                    <img src={flicks} alt="Flicks" className='logo' />
                </NavLink>
                <NavLink className='links' to='/'>
                    Home
                </NavLink>
                <NavLink className='links' to='/tv'>
                    TV Shows
                </NavLink>
                <NavLink className='links' to='/movies'>
                    Movies
                </NavLink>
                <NavLink className='links' to='/latest'>
                    New & Popular
                </NavLink>
                <NavLink className='links' to='list'>
                    My List
                </NavLink>
            </div>
            <div id='right-nav'>
                <div className='search-bar'>
                    <Search />
                </div>
            </div>
        </nav>
    )
}
