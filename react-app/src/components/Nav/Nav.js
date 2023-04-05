import React, { useEffect, useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import flicks from './flicks.png'
import { getAllCategoriesThunk, getOneCategoryThunk } from '../../store/category';
import styled from "styled-components";
import Search from '../Search/Search';
import "./Nav.css"
// import "./styles.css";

const Title = styled.p`
  font-size: 2rem;
  color: #eeeeee;
  letter-spacing: 0.15em;
  line-height: 2em;
`;

export default function Nav() {
    const [scrollTop, setScrollTop] = useState(true);

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
                {/* <div className='search'>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div> */}
                <div className='search-bar'>
                    <Search />
                </div>
            </div>
        </nav>
    )
}
