import React, { useEffect } from "react";
import { logoBlack, logoWhite } from "../../assets/images/images";
import { IntroStyle } from "./intro-style";
import Swiper from "swiper";
import "swiper/css/swiper.css";
import { useState } from "react";

//import component
import { Sliders } from "../sliders/sliders";
import { NavSlide } from "../navSlide/navSlide";
import { MenuButton } from "../menu button/menuButton";
import { Menu } from "../menu/menu";

const Intro = () => {
  let mySwiper: any = null;

  const [active, setActive] = useState(false);


  return (
    <IntroStyle>
      <div className={`header ${active ? "active" : ""}`}>
        <div className="logo">
          <a href="https://aluxion.com/#home" target="_blank">
          <img src={active ? logoWhite: logoBlack} alt="logo Aluxion" className="logoAluxion" />
          Aluxion
            </a>
        </div>
        <div className="header-menu" onClick={() => setActive(!active)}>
          <MenuButton />
        </div>
      </div>
          <Menu 
          active = {active}  
         />
      

      <div className="App">
        <div className="title">
          {/* <h1>FrontEnd Utils </h1> */}
        </div>
        <div className="container-buttons">
          {/* <p>--- boiler ReactJS ---</p> */}
        </div>

         <div className="slider-container">
         {/* <div className="swiper-container"> */}

            {/* <!-- Additional required wrapper --> */}

            {/* <div className="swiper-wrapper"> */}

              {/* <!-- Slides --> */}
              <Sliders />

            {/* </div> */}

            {/* <!-- If we need pagination --> */}

            <div className="swiper-pagination"></div>

            {/* <!-- If we need scrollbar --> */}

            <div className="swiper-scrollbar"></div>
           </div>
        </div> 
       {/* </div>  */}

      {/* <!-- If we need navigation buttons --> */}
      <NavSlide />
      {/* <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div> */}

    </IntroStyle>
  );
};

export default Intro;
