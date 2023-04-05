import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from './arrowFunctions';
import { getOneFlickThunk } from "../../store/flick";
import "./slick-theme.css"
import "./slick.css"
import "./index.css"

export default function SliderComponent({ allCategories }) {
    const dispatch = useDispatch();


    var settings = {
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

    let topSettings = {
        // className: "center",
        // centerMode: true,
        // centerPadding: "70px",
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 5,
        speed: 500,
        dots: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    let topTen = () => {
        let count = 0;
        let topTenArr = [];
        let randCatIndex;
        let randCat;
        let randFlickIndex;
        let randFlick;

        while (count < 10) {
            randCatIndex = Math.floor(Math.random() * (allCategories.length - 1))
            randCat = allCategories[randCatIndex];
            randFlickIndex = Math.floor(Math.random() * (randCat?.flicks.length - 1));
            randFlick = randCat?.flicks[randFlickIndex];

            topTenArr.push(randFlick);
            count++;
        }

        return (
            <div>
                <h2 className="cat-title">Top 10 Movies in the U.S. Today</h2>
                <Slider {...topSettings}>
                    {topTenArr.map((top, i) => (
                        <div key={i} className="content">
                            <h3>{i + 1}</h3>
                            <p>{top?.title}</p>
                            <img src={top?.img} />
                        </div>
                    ))}
                </Slider>
            </div>
        )
    }

    const tester = allCategories.map((category) => {

        let { flicks, name } = category
        let maxFlicks = flicks.slice(0, 15)

        if (maxFlicks.length < 14) return

        let showComponent = maxFlicks.map((flick, i) => {
            let { img, title } = flick

            return (
                <div key={i} className="content">
                    <p>{title}</p>
                    <img src={img}></img>
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
            {topTen()}
            {tester}
        </div>
    );
}
