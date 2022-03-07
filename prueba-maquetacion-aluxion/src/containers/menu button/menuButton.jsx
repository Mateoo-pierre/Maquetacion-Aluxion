import React from "react";
import { useState } from "react";

//import css
import './menuButton.css'

export const MenuButton = () => {

    const [animated, setAnimated] = useState(false);

    return (
        <>
            <button className="fancy-burger" onClick={() => setAnimated(!animated)}>
                <span className="box">
                    <span className={`rectangle rectangle--top rectangle--small ${animated ? "active" : ""}`}></span>
                    <span className={`rectangle rectangle--middle ${animated ? 'active' : ''}`}></span>
                    <span className={`rectangle rectangle--bottom rectangle--small ${animated ? 'active' : ''}`}></span>
                </span>    
            </button>
        </>
    )
}