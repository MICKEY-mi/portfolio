import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Byteshop from "../../img/byteshop.png";
import Pendown from "../../img/pendown.png";
import HOC from "../../img/hoc.png";
import ichat from "../../img/ichat.png";
import portfolio from "../../img/port.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Events management system</span>

      {/* slider */}
      
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://pendown23.netlify.app/">
          <img src={Pendown} alt="" />
          <h1 align="center">pendown-for college profile management</h1>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/ShivamKumar-mnnit/BETA-TECHS">
          <img src={Byteshop} alt="" />
          <h1 align="center">Ecommerce website</h1>
          </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://github.com/ShivamKumar-mnnit/Galactic-ichat.github.io">
          <img src={ichat} alt="" />
          <h1 align="center">A realtime chat website</h1>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/">
          <img src={portfolio} alt="" />
          <h1 align="center">A github pages hosted Portfolio</h1>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/Avtech04/robotics">
          <img src={HOC} alt="" />
          <h1 align="center">Events management system-using Django</h1>
          </a>
        </SwiperSlide>
       

      </Swiper>
    </div>
  );
};

export default Portfolio;
