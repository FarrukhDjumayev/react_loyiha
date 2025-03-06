import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

import bigImage from "../assets/images/bigImage.svg";
import saleImage from "../assets/images/sale.svg";
import saleImage2 from "../assets/images/sale2.svg";
import saleImage3 from "../assets/images/sale3.svg";
import saleImage4 from "../assets/images/sale4.svg";

const images = [bigImage, saleImage, saleImage2, saleImage3, saleImage4];

export default function MainBody() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="container mx-auto p-5">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Thumbs]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        thumbs={{ swiper: thumbsSwiper }}
        className="w-4/5 mx-auto rounded-xl shadow-2xl"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-[400px] object-cover rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        watchSlidesProgress
        className="w-4/5 mx-auto mt-5"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-[100px] object-cover rounded-lg cursor-pointer hover:scale-105 transition"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
