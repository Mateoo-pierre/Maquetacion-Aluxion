import React from "react";

//import style
import { MenuStyle } from "./menu-style";

//import css
import './menu.css';

export const Menu = ({active}) => {
    return(
        <>  
            <MenuStyle>

                <div className={`menu ${active ? 'open' : ''}`}>
                    <ul className={`ul ${active ? 'ul-translate' : ''}`}>
                        <div className="collect-container">
                            <li className="li1 li"><p>Collection</p></li>
                            <div className="bg1">
                                <ul>
                                    <li className="li-furniture">Furniture</li>
                                    <div className="bg1-forniture"></div>
                                    <li>Lighting</li>
                                    <li>Accessories</li>
                                </ul>
                            </div>
                        </div>
                        <li className="li2 li"><p href="#">Desing</p></li>
                        <li className="li3 li"><p href="#">Craftmanship</p></li>
                        <li className="li4 li"><p href="#">Ethics</p></li>
                    </ul>
                </div>
            
            </MenuStyle>
        </>
    )
}