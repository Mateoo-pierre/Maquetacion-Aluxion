import React from "react";
import { logoBlack, logoWhite } from "../../assets/images/images";
import { IntroStyle } from "./intro-style";
// import Swiper from "swiper";
import "swiper/css/swiper.css";
import { useState } from "react";

//import component
import { Sliders } from "../sliders/sliders";
import { NavSlide } from "../navSlide/navSlide";
import { MenuButton } from "../menu button/menuButton";
import { Menu } from "../menu/menu";

const Intro = () => {
  // let mySwiper: any = null;

  const [active, setActive] = useState(false);


  return (
    <IntroStyle>

      <div className="bodyIntro">
        <div className={`header ${active ? "active" : ""}`}>
          <div className="logo">
            <a href="https://aluxion.com/#home" target="_blank" rel="noopener noreferrer">
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
          <div className="slider-container">
          
                <Sliders />

          </div>
        </div>

        <NavSlide />

      </div>

    </IntroStyle>
  );
};

export default Intro;
