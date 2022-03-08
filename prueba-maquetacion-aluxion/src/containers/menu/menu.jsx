import React from "react";

//import css
import './menu.css';

export const Menu = () => {
    return(
        <>  
            <div className="menu">
                <ul className="ul">
                    <li className="li1 li"><a href="#">Collection</a></li>
                    <div className="bg1">
                        <ul>
                            <li>Furniture</li>
                            <li>Lighting</li>
                            <li>Accessories</li>
                        </ul>
                    </div>
                    <li className="li2 li"><a href="#">Desing</a></li>
                    <li className="li3 li"><a href="#">Craftmanship</a></li>
                    <li className="li4 li"><a href="#">Ethics</a></li>
                </ul>
            </div>
        </>
    )
}