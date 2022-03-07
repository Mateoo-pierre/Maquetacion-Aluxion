import React from "react";

//import css
import './sliders.css';

//import image
import {slider1, slider2} from '../../assets/images/images'

export const Sliders = () => {


 

    return(
        <>
            <div className="swiper-container" id="prueba">
                <div className="swiper-wrapper">
                    <div className="swiper-slide" id="slider-1">
                        <div className="slider-1 sections">
                        <div className="descrip">
                            <p>Michael W.Dreeben</p>
                            <h1>Shell Dining Chair</h1>
                            <p className="p-descript">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo magnam doloremque odit unde, doloribus est nobis porro sunt! Atque sit similique.</p>
                        </div>  
                        <img src={slider1} alt="" />  
                        </div>
                    </div>
                </div>
                    <div className="swiper-slide" id="slider-2">
                        <div className="slider-2 sections">
                        <div className="descrip">
                            <p>Jeaper K.Thomas</p>
                            <h1>Dunes Anthrazite Black</h1>
                            <p className="p-descript">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo magnam doloremque odit unde, doloribus est nobis porro sunt! Atque sit similique</p>
                        </div>  
                        <img src={slider2} alt="" />  
                        </div>
                    </div>
            </div>
                <div className="divButton">
                    <button >Product Details</button>
                </div>
        </>
    )
}