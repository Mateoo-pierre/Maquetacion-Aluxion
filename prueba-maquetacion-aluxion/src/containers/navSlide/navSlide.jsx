import React from "react";

//import css
import './navSlide.css'

export const NavSlide = () => {
    return(
        <>
            <div className="nav-container">
                <div className="navSlideOne">
                    <a href="#slider-1">
                        <p className="p-number">01</p>
                        <p>Shell Dining Chair</p>
                    </a>
                </div>
                <div className="navSlideTwo">
                    <a href="#slider-2">
                        <p className="p-number">02</p>
                        <p>Dunes Anthrazite Black</p>
                    </a>
                </div>
            </div>
        </>
    )
}