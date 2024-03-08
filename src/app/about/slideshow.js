import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Image } from 'react-bootstrap';

const SlideShow = () => {
    return (
        <div className='px-6 py-6'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <div className='flex items-center justify-center'>
                        <Image src="/assets/vjti1.jpg" alt="Slide 1" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex items-center justify-center'>
                        <Image src="/assets/vjti2.jpg" alt="Slide 1" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex items-center justify-center'>
                        <Image src="/assets/vjti3.jpg" alt="Slide 1" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex items-center justify-center'>
                        <Image src="/assets/vjti4.jpg" alt="Slide 1" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SlideShow;
