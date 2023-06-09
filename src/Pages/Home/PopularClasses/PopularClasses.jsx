
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
import { data } from "autoprefixer";
import useClasses from "../../../hooks/useClassses";


const PopularClasses = () => {
    const [classes] = useClasses();
    const popular = classes.filter(course => course.category === 'popular')

    return (
        <section>
            <SectionTitle
                heading={"Popular Classes"}
                subHeading={"Join our popular photography classes and embark on an inspiring journey to capture the world through your lens, from stunning landscapes to captivating portraits."}
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
                    popular.map((pCourse, index) => <SwiperSlide
                        key={index}
                        pCourse={pCourse}
                    >
                        <div className="mx-auto">
                            {/* CARD */}
                            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                                <figure>< img className="card-img" src={pCourse.course_img} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{pCourse.course_name}</h2>
                                    <p className="font-semibold">Students Joined: {pCourse.students_joined}</p>
                                   
                                    <div className="card-actions d-flex justify-between items-center">

                                        <img className="icon-img" src={pCourse.instructor_img} alt="" />
                                        <p className="font-semibold"> BY: {pCourse.instructor_name}</p>

                                        <button className="btn-green">View Course</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default PopularClasses;