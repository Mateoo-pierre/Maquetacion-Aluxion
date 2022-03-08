import React from "react";

//import css
import './menu.css';

export const Menu = () => {
    return(
        <>  
            <div className="menu">
                <ul className="ul">
                    <div className="collect-container">
                        <li className="li1 li"><a href="#">Collection</a></li>
                        <div className="bg1">
                            <ul>
                                <li className="li-furniture">Furniture</li>
                                <div className="bg1-forniture"></div>
                                <li>Lighting</li>
                                <li>Accessories</li>
                            </ul>
                        </div>
                    </div>
                    <li className="li2 li"><a href="#">Desing</a></li>
                    <li className="li3 li"><a href="#">Craftmanship</a></li>
                    <li className="li4 li"><a href="#">Ethics</a></li>
                </ul>
            </div>
        </>
    )
}