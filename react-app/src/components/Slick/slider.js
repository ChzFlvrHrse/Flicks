import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import Info from "../Info/Info";
import { Modal2 } from "../../context/Modal2";
import { Modal } from "../../context/Modal"
import { SampleNextArrow, SamplePrevArrow } from './arrowFunctions';
import "./slick-theme.css"
import "./slick.css"
import "./index.css"

export default function SliderComponent({ allCategories }) {
    const [showModal, setShowModal] = useState(false);
    const [flickKey, setFlickKey] = useState();

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

    let topTen = () => {
        let count = 0;
        let topTenObj = {flicks: '', id: 0, name: 'Top 15 Movies in the U.S. Today'};
        let topTenArr = [];
        let randCatIndex;
        let randCat;
        let randFlickIndex;
        let randFlick;

        while (count < 15) {
            randCatIndex = Math.floor(Math.random() * (allCategories.length - 1))
            randCat = allCategories[randCatIndex];
            randFlickIndex = Math.floor(Math.random() * (randCat?.flicks.length - 1));
            randFlick = randCat?.flicks[randFlickIndex];

            topTenArr.push(randFlick);
            count++;
        }

        topTenObj['flicks'] = topTenArr;
        return topTenObj;
    }


    let allFlicks = [topTen(), ...allCategories]

    let index = 0;
    const flicks = allFlicks.map((category) => {

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
                        {index < 10 ? <h3>{i + 1}</h3> : <></>}
                        {/* <p>{title}</p> */}
                        <img src={img} />
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
            {flicks}
        </div>
    );
}
