import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import "./Header.css";

import image1 from "../../../public/assets/data/image1.jpg";
import image2 from "../../../public/assets/data/image2.jpg";
import image3 from "../../../public/assets/data/image3.jpg";
import image4 from "../../../public/assets/data/image4.jpg";
import image5 from "../../../public/assets/data/image5.jpg";
import image6 from "../../../public/assets/data/image6.jpg";
import image7 from "../../../public/assets/data/image7.jpg";
import image8 from "../../../public/assets/data/image8.jpg";
import image9 from "../../../public/assets/data/image9.jpg";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
];

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex); // Обновляем активный индекс
  };

  return (
    <header className="header">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="header-swiper"
        onSlideChange={handleSlideChange}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="header-slide"
              style={{
                backgroundImage: `url(${image})`,
              }}
            >
              <div className="header-overlay"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Градиентный индикатор */}
      <div
        className="header-gradient-indicator"
        style={{
          background: `linear-gradient(to right, rgba(26, 26, 63, 1) 0%, rgba(0, 123, 255, 1) ${
            (activeIndex + 1) * 11.11
          }%, rgba(26, 26, 63, 1) ${
            (activeIndex + 2) * 11.11
          }%, rgba(26, 26, 63, 1) ${
            (activeIndex + 3) * 11.11
          }%, rgba(26, 26, 63, 1) ${
            (activeIndex + 4) * 11.11
          }%, rgba(26, 26, 63, 1) ${(activeIndex + 5) * 11.11}%)`,
        }}
      ></div>

      {/* Надпись поверх картинки */}
      <div className="header-text">
        Zespol Szkol Nr1 w Tarnobrzegu <br />
        im. Ks. Kard. Stefana Wyszynskiego
      </div>

      {/* Меню навигации с 7 кнопками */}
      <nav className="header-nav">
        <button className="header-nav-button">Aktualnosci</button>
        <button className="header-nav-button">Dla uczniow</button>
        <button className="header-nav-button">Dla rodzicow</button>
        <button className="header-nav-button">Rekrutacja</button>
        <button className="header-nav-button">Galeria</button>
        <button className="header-nav-button">Projekty</button>
        <button className="header-nav-button">O nas</button>
      </nav>
    </header>
  );
};

export default Header;
