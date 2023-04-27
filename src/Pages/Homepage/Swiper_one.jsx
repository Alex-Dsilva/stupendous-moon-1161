// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

import "./swiper-one.css"; // import your css file


export default function Swiper_One() {
  return (
    <>
      <Swiper
        navigation={true}
        pagination={{clickable:true}}
        loop={true}
        // style={{height:'80vh', width:'50%'}}
        modules={[Navigation, Pagination]}
        className="mySwiper1"
      >
        <SwiperSlide>
           <img src="https://img.gkbcdn.com/bn/2303/740x670-6426999f2b40c95014458299._p1_.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://img.gkbcdn.com/bn/2303/740x670-641429812b40c9341017a70a._p1_.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://img.gkbcdn.com/bn/2303/740x670-642699912b40c95014458298._p1_.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://img.gkbcdn.com/s3/bn/2212/740x670-639825612b40c93b1474bd0b.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://img.gkbcdn.com/bn/2211/740x670-6384700b2b40c916cc6fe91c._p1_.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
