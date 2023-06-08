import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import imgTokyo from '../../../assets/Images/Home/PopularClasses/tokyo photography.webp'
import imgNature from '../../../assets/Images/Home/PopularClasses/nature.jpg'
import imgDistance from '../../../assets/Images/Home/PopularClasses/long distance.jpg'
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const PopularClasses = () => {
    return (
        <section>
            <SectionTitle
            heading={"Popular Classes"}
            subHeading={"Join our popular photography classes and embark on an inspiring journey to capture the world through your lens, from stunning landscapes to captivating portraits."}
            ></SectionTitle>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src='' alt="" />
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </section>
    );
};

export default PopularClasses;