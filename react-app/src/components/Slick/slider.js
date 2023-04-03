import React from "react";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from './arrowFunctions';
import "./slick-theme.css"
import "./slick.css"
import "./index.css"

export default function SliderComponent({ allCategories }) {
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


    const tester = allCategories.map((category) => {

        let { flicks, name } = category
        let maxFlicks = flicks.slice(0, 15)

        if(maxFlicks.length < 14) return 

        let showComponent = maxFlicks.map((flick) => {
            let { img, title } = flick

            return (
                <div>
                    <p>{title}</p>
                    <img src={img}></img>
                </div>
            )
        })

        return (
            <>
                <div>
                    <h2>{name}</h2>
                    <Slider {...settings}>
                        <div className="content">
                            {showComponent[0]}
                        </div>
                        <div className="content">
                            {showComponent[1]}
                        </div>
                        <div className="content">
                            {showComponent[2]}
                        </div>
                        <div className="content">
                            {showComponent[3]}
                        </div>
                        <div className="content">
                            {showComponent[4]}
                        </div>
                        <div className="content">
                            {showComponent[5]}
                        </div>
                    </Slider>

                </div>
            </>
        )



    })



    return (
        <div className='slider-container'>
            {tester}
            <Slider {...settings}>
                <div className="content">
                    <h3>1</h3>
                </div>
                <div className="content">
                    <h3>2</h3>
                </div>
                <div className="content">
                    <h3>3</h3>
                </div>
                <div className="content">
                    <h3>4</h3>
                </div>
                <div className="content">
                    <h3>5</h3>
                </div>
                <div className="content">
                    <h3>6</h3>
                </div>
                <div className="content">
                    <h3>1</h3>
                </div>
                <div className="content">
                    <h3>2</h3>
                </div>
                <div className="content">
                    <h3>3</h3>
                </div>
                <div className="content">
                    <h3>4</h3>
                </div>
                <div className="content">
                    <h3>5</h3>
                </div>
                <div className="content">
                    <h3>6</h3>
                </div>
            </Slider>
        </div>
    );
}
