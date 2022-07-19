import React from 'react';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import {Autoplay} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import img1 from '../img/ad1.png';
import img2 from '../img/ad2.png';
import img3 from '../img/ad3.png';
import img4 from '../img/ad4.png';



class Caroursel extends React.Component {
    state = { 
        
     } 
    render() { 
        return (
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay ]}
              spaceBetween={50}
              // navigation
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              // onSlideChange={() => console.log('slide change')}
              style={{width:'95%',height:'50vh'}}
            >
              <SwiperSlide><img src={img1} alt="img1" style={{width:"100%",height:"50vh"}}/></SwiperSlide>
              <SwiperSlide><img src={img2} alt="img2" style={{width:"100%",height:"50vh"}}/></SwiperSlide>
              {/* <SwiperSlide><img src={img3} alt="img3" style={{width:"100%",height:"50vh"}}/></SwiperSlide>
              <SwiperSlide><img src={img4} alt="img4" style={{width:"100%",height:"50vh"}}/></SwiperSlide> */}
            </Swiper>
          );
    }
}

export default Caroursel;
