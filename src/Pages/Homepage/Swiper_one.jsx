// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";

export default function Swiper_One() {
  return (
    <>
      <Swiper
        pagination={{clickable:true}}
        loop={true}
        autoplay={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper1"
      >
        <SwiperSlide>
           <img src="https://img.gkbcdn.com/bn/2211/740x670-6384410a2b40c94178577f9b._p1_.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://img.gkbcdn.com/bn/2212/740x670-6396ff032b40c9401069edf5._p1_.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://img.gkbcdn.com/bn/2212/740x670-639688752b40c948ecac5d23._p1_.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://img.gkbcdn.com/s3/bn/2212/740x670-639825612b40c93b1474bd0b.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://img.gkbcdn.com/bn/2211/740x670-6384700b2b40c916cc6fe91c._p1_.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://img.gkbcdn.com/bn/2212/740x670-6391ab6d2b40c932e0963f16._p1_.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
