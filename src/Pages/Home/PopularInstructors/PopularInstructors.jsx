import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useInstructors from "../../../hooks/useInstructors";

const PopularInstructors = () => {
    const [instructors] = useInstructors();
    const populerInstractors = instructors.filter(pInstractors => pInstractors.category === 'popular')

    return (
        <section>
            <SectionTitle
                heading={"Popular Instructors"}
                subHeading={"Discover the secrets of the trade from our popular photography instructors, who bring a wealth of expertise, artistic vision, and a passion for teaching to every class."}
            ></SectionTitle>

            {/* TODO */}
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

                {
                    populerInstractors.map((pInstractor, index) => <SwiperSlide
                        key={index}
                        pInstractor = {pInstractor}
                    >
                         <p>{pInstractor.length}</p>
                        <div>
                            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                                <figure>< img className="card-img" src={pInstractor.instructor_img} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{pInstractor.instructor_name}</h2>
                                    <p className="font-semibold">Profession: {pInstractor.job}</p>
                                    <p className="font-semibold">Experience: {pInstractor.experience}</p>
                                    <p className="font-semibold">Age: {pInstractor.age}</p>
                                    
                                    <div className="card-actions d-flex justify-between items-center">
                                        <button className="btn-green">Learn More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p>{pInstractor.length}</p>
                    </SwiperSlide>)
                }
              
            </Swiper>
        </section>
    );
};

export default PopularInstructors;