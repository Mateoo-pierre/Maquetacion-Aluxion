import styled from "styled-components";

export const MenuButtonStyle = styled.div`

    .container-btn{
        position: relative;
        border: 1px solid black;
        padding : 10px;
        margin-left: 300px;
        margin-right: 12px;
        cursor: pointer;
        z-index: 10;
        transition: 1s;
    }

    .container-btn.btn-2{
        border: 1px solid white;
        cursor: pointer;
        transition: 0.5s;
    }

    .fancy-burger{
        position: relative;
        width: 25px;
        height: 20px;
        border: 0;
        background: transparent;
        outline: none;
        cursor: pointer;
    }

    .rectangle{
        position: absolute;
        height: 2px;
        z-index: 3;
        background-color: black;    
        border-radius: 10px;
    }

    .rectangle--small{
        width: 10px;
    }

    .rectangle--top{
        top: 0;
        left: 0;
        width: 25px;   
        transform-origin: top right;
        transition: 1s;
    }

    .rectangle--middle{
        top: 50%;
        width: 15px;
        left: 0;
        transform-origin: bottom right;
        transition: 1s;
    }

    .rectangle--bottom{
        bottom: 0;
        right: 0;
        transform-origin: bottom right;
        transition: 1s;
    }

    .rectangle--top.active{
        transform: translateX(0px) rotate(-45deg);
        background-color: white;
        transition: 1s;

    }

    .rectangle--middle.active{
        transform: translateY(-2px) rotate(45deg);
        background-color: white;
        transition: 1s;

    }

    .rectangle--bottom.active{
        transform: translateY(0px) rotate(45deg);
        background-color: white;
        transition: 1s;
    }


    

    
    @media  screen and (max-width: 700px){
        .container-btn{
            position: absolute;
            margin-left: 74%;
        }
    }

`;