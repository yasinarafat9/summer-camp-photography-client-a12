import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../../assets/Images/Home/Banner/img (1).webp'
import img2 from '../../../assets/Images/Home/Banner/img (2).jpg'
import img3 from '../../../assets/Images/Home/Banner/img (3).webp'
import img4 from '../../../assets/Images/Home/Banner/img (4).webp'
import img5 from '../../../assets/Images/Home/Banner/img (5).jpg'

const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={img1} />
                {/* <p className="legend">Legend 1</p> */}
            </div>
            <div>
                <img src={img2} />
            </div>
            <div>
                <img src={img3} />
            </div>
            <div>
                <img src={img4} />
            </div>
            <div>
                <img src={img5} />
            </div>
        </Carousel>
    );
};

export default Banner;