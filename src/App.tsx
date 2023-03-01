import React from 'react';
import './App.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Mousewheel, Keyboard} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {ReactComponent as Arrow} from "./images/Vector.svg";
import house from "./images/img.png";
import house1 from "./images/img_1.png";
import house2 from "./images/img_2.png";
import house3 from "./images/img_3.png";
import house4 from "./images/img_4.png";
import house5 from "./images/img_5.png";


function App() {
    return (
        <div className={'app'}>
            {/*<div >*/}

            {/*    <Arrow className={'kukareku'} />*/}
            {/*</div>*/}
            <Swiper
                navigation={{
                    nextEl: '.arrow-next',
                    prevEl: '.arrow-prev',
                }}
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                pagination={true}
                className={'mySwiper'}
            >
                <SwiperSlide style={
                    {
                        width: "300px",
                        height: "400px",
                        border: "2px solid black"
                    }
                }>

                </SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <div>
                    <div className="arrow-prev ">
                        prev
                    </div>
                    <div className="arrow-next ">
                        next
                    </div>
                </div>
            </Swiper>

            {/*<Swiper*/}
            {/*    cssMode={true}*/}
            {/*    navigation={true}*/}
            {/*    slidesPerView={3}*/}
            {/*    spaceBetween={30}*/}
            {/*    slidesPerGroup={1}*/}
            {/*    initialSlide={0}*/}
            {/*    // centeredSlides={false}*/}
            {/*    pagination={{*/}
            {/*        // el:"swiper-pagination",*/}
            {/*        clickable: true,*/}
            {/*    }}*/}
            {/*    effect={"coverflow"}*/}
            {/*    coverflowEffect={{*/}
            {/*        stretch:50,*/}
            {/*        rotate:20,*/}
            {/*        slideShadows: true*/}
            {/*    }*/}
            {/*    }*/}
            {/*    mousewheel={true}*/}
            {/*    keyboard={true}*/}
            {/*    modules={[Navigation, Pagination, Mousewheel, Keyboard]}*/}
            {/*    className="mySwiper"*/}
            {/*    loop={true}*/}
            {/*>*/}
            {/*    <SwiperSlide>*/}
            {/*        <img src={house} alt="house" className={'house'}/>*/}
            {/*    </SwiperSlide>*/}
            {/*    <SwiperSlide>*/}
            {/*        <img src={house1} alt="house" className={'house'}/>*/}
            {/*    </SwiperSlide>*/}
            {/*    <SwiperSlide>*/}
            {/*        <img src={house2} alt="house" className={'house'}/>*/}
            {/*    </SwiperSlide>*/}
            {/*    <SwiperSlide>*/}
            {/*        <img src={house3} alt="house" className={'house'}/>*/}
            {/*    </SwiperSlide>*/}
            {/*    <SwiperSlide>*/}
            {/*        <img src={house4} alt="house" className={'house'}/>*/}
            {/*    </SwiperSlide>*/}
            {/*    <SwiperSlide>*/}
            {/*        <img src={house5} alt="house" className={'house'}/>*/}
            {/*    </SwiperSlide>*/}
            {/*</Swiper>*/}
        </div>
    );
}

export default App;
