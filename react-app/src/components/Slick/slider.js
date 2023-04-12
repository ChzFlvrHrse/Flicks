import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import Info from "../Info/Info";
import { getAllMoviesThunk, getAllShowsThunk } from '../../store/flick'
import { Modal2 } from "../../context/Modal2";
import { Modal } from "../../context/Modal"
import { SampleNextArrow, SamplePrevArrow } from './arrowFunctions';
import One from '../Images/1.png'
import Two from '../Images/2.png'
import Three from '../Images/3.png'
import Four from '../Images/4.png'
import Five from '../Images/5.png'
import Six from '../Images/6.png'
import Seven from '../Images/7.png'
import Eight from '../Images/8.png'
import Nine from '../Images/9.png'
import Ten from '../Images/10.png'
import "./slick-theme.css"
import "./slick.css"
import "./index.css"

export default function SliderComponent({ allCategories, vtype }) {
    const [showModal, setShowModal] = useState(false);
    const [showTopTen, setTopTen] = useState(false);
    const [topTenKey, setTopTenKey] = useState();
    const [flickKey, setFlickKey] = useState();

    const dispatch = useDispatch();

    let numbers = [One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten];

    useEffect(() => {
        dispatch(getAllMoviesThunk());
    }, [dispatch])

    // useEffect(() => {
    //     dispatch(getAllShowsThunk());
    // }, [dispatch])

    const movies = useSelector(state => Object.values(state.flick))
    console.log(movies)
    // const tv = useSelector(state => Object.values(state.flick))


    let settings = {
        // className: "center",
        // centerMode: true,
        // centerPadding: "70px",
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        speed: 500,
        dots: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    const topTenHome = () => {
        let count = 0;
        let topTenArr = [];
        let randCatIndex;
        let randCat;
        let randFlickIndex;
        let randFlick;

        while (count < 10) {
            randCatIndex = Math.floor(Math.random() * (allCategories.length - 1));
            randCat = allCategories[randCatIndex];
            randFlickIndex = Math.floor(Math.random() * (randCat?.flicks.length - 1));
            randFlick = randCat?.flicks[randFlickIndex];

            topTenArr.push(randFlick);
            count++;
        }

        return (
            <div>
                <h2 className="cat-title">Top 10 Movies in the U.S. Today</h2>
                <Slider {...settings}>
                    {topTenArr.map((top, i) => (
                        <div>
                            <div onClick={() => {
                                setTopTen(true)
                                setTopTenKey(i)
                            }} key={i} className="content"
                            >
                                <img className="num-img" src={numbers[i]}/>
                                <img className="content-img" src={top?.img} />
                            </div>
                            {showTopTen && topTenKey === i && (
                                <Modal2 onClose={() => setTopTen(false)}>
                                    <Info title={top?.title} setShowModal={setShowModal} />
                                </Modal2>
                            )}
                        </div>
                    ))}
                </Slider>
            </div>
        )
    }

    const topTenMovies = () => {
        let count = 0;
        let topTenMovies = [];
        let randIndex;
        let randFlick;

        while (count < 10) {
            randIndex = Math.floor(Math.random() * (movies?.length - 1));
            randFlick = movies[randIndex];

            topTenMovies.push(randFlick);
            count++;
        }

        return (
            <div>
                <h2 className="cat-title">Top 10 Movies in the U.S. Today</h2>
                <Slider {...settings}>
                    {topTenMovies.map((top, i) => (
                        <div>
                            <div onClick={() => {
                                setTopTen(true)
                                setTopTenKey(i)
                            }} key={i} className="content"
                            >
                                <img className="num-img" src={numbers[i]}/>
                                <img className="content-img" src={top?.img} />
                            </div>
                            {showTopTen && topTenKey === i && (
                                <Modal2 onClose={() => setTopTen(false)}>
                                    <Info title={top?.title} setShowModal={setShowModal} />
                                </Modal2>
                            )}
                        </div>
                    ))}
                </Slider>
            </div>
        )
    }

    // const topTenShows = () => {
    //     let count = 0;
    //     let topTenShows = [];
    //     let randIndex;
    //     let randShow;

    //     while (count < 10) {
    //         randIndex = Math.floor(Math.random() * (tv?.length - 1));
    //         randShow = tv[randIndex];

    //         topTenShows.push(randShow);
    //         count++;
    //     }

    //     return (
    //         <div>
    //             <h2 className="cat-title">Top 10 TV Shows in the U.S. Today</h2>
    //             <Slider {...settings}>
    //                 {topTenShows.map((top, i) => (
    //                     <div>
    //                         <div onClick={() => {
    //                             setTopTen(true)
    //                             setTopTenKey(i)
    //                         }} key={i} className="content"
    //                         >
    //                             <img className="num-img" src={numbers[i]}/>
    //                             <img className="content-img" src={top?.img} />
    //                         </div>
    //                         {showTopTen && topTenKey === i && (
    //                             <Modal2 onClose={() => setTopTen(false)}>
    //                                 <Info title={top?.title} setShowModal={setShowModal} />
    //                             </Modal2>
    //                         )}
    //                     </div>
    //                 ))}
    //             </Slider>
    //         </div>
    //     )
    // }

    let index = 0;
    const flicks = allCategories.map((category) => {

        let { flicks, name } = category
        let maxFlicks = flicks.slice(0, 15)

        if (maxFlicks.length < 14) return

        let showComponent = maxFlicks.map((flick, i) => {
            let { img, title } = flick;
            let keyVal = index++;

            return (
                <div>
                    <div onClick={() => {
                        setShowModal(true)
                        setFlickKey(keyVal)
                    }} key={keyVal} className="content">
                        <img className="content-img" src={img} />
                    </div>
                    {showModal && flickKey === keyVal && (
                        <Modal2 onClose={() => setShowModal(false)}>
                            <Info title={title} setShowModal={setShowModal} />
                        </Modal2>
                    )}
                </div>
            )
        })

        return (
            <>
                <h2 className="cat-title">{name}</h2>
                <Slider {...settings}>
                    {showComponent}
                </Slider>
            </>
        )

    })



    return (
        <div className='slider-container'>
            {topTenMovies()}
            {flicks}
        </div>
    );
}
