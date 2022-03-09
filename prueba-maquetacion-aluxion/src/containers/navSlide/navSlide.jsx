import React from "react";

//import style
import { NavSlideStyle, PNavStyle } from "./navSlide-style";

//import css
//import './navSlide.css';

export const NavSlide = () => {
    return(
        <>
            <NavSlideStyle>

            <div className="nav-container">
                <div className="navSlideOne">
                    <a href="#slider-1">
                        <PNavStyle>01</PNavStyle>
                        <p>Shell Dining Chair</p>
                    </a>
                </div>

                <div className="navSlideTwo">
                    <a href="#slider-2">
                        <PNavStyle>02</PNavStyle>
                        <p>Dunes Anthrazite Black</p>
                    </a>
                </div>
            </div>

            </NavSlideStyle>
        </>
    )
}