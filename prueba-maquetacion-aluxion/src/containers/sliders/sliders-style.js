import styled from 'styled-components';

export const SliderStyle = styled.div`

    @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap');

    .swiper-container{
        margin-top: 30px;
        scroll-snap-type: y mandatory;
        height: 70vh;
        overflow-y: scroll;
        scroll-behavior: smooth;
    }
    
    .sections{
        display: flex;
        scroll-snap-align: start;
        height: 70vh;
    }
    
    .sections img{
        margin-left: 300px;
        height: 70%;
        width: 25%;
    }
    
    .slider-1 {
        height: 70vh;
        width: 100%;
    }
    
    .slider-2{
        height: 70vh;
        width: 100%;
    }
    
    .descrip{
        margin-top: 50px;
        width: 30%;
        font-family: 'Roboto Condensed', sans-serif;
    }
    
    .descrip h1{
        font-size: 22px;
        font-weight: bold;
        margin: 20px 0;
        font-weight: 200px;
    }
    
    .descrip p{
        color: rgb(88, 88, 88);
    }
    
    .p-descript{
        margin-top: 35px;
    }



    @media screen and (max-width : 700px ) {

        .swiper-container{
            margin-top: 60px;
        }
    
        .sections{
            display: inline-block;
            scroll-snap-align: start;
            height: 70vh;
        }
    
        .sections img{
            top: 0;
            margin-top: 0%;
            margin-left: 0%;
            height: 70%;
            width: 90%;
        }
    
        .descrip{
            text-align: center;
            margin-top: 0%;
            margin-bottom: 20px;
            width: 90%;
            font-family: 'Roboto Condensed', sans-serif;
        }

        .slider-2{
            margin-top: 40px;
        }
    }


    @media screen and (max-width : 1000px ) {

        .swiper-container{
            margin-top: 60px;
        }
    
        .sections{
            display: inline-block;
            scroll-snap-align: start;
            height: 70vh;
        }
    
        .sections img{
            top: 0;
            margin-top: 0%;
            margin-left: 0%;
            height: 70%;
            width: 90%;
        }
    
        .descrip{
            text-align: center;
            margin-top: 0%;
            margin-bottom: 20px;
            width: 90%;
            font-family: 'Roboto Condensed', sans-serif;
        }

        .slider-2{
            margin-top: 40px;
        }
    }


    @media screen and (max-width : 380px){

        .swiper-container{
            margin-top: 40px;
        }
    }

`;


export const ButtonOne = styled.div`

    .divButton {
        display: flex;
        position: absolute;
        justify-content: center;
        align-items: center;    
        top: 60%;
        z-index: 1;
    }

    .divButton button{
        cursor: pointer;
        padding: 10px 15px;
        border: 1px solid black;
        color: white;
        background-color: black;
        font-weight: 500;
    }

    
    @media screen and (max-width : 1000px ) {

        .divButton {
            margin-top: 10px;
            margin-left: -5%;
            position: relative;   
            top: -100px;
        }
        
        .divButton button{
            cursor: pointer;
            padding: 10px 35%;
            border: 1px solid black;
            color: white;
            background-color: black;
            font-weight: 500;
        }

    }
    
    @media screen and (max-width : 700px ) {

        .divButton {
            margin-top: 10px;
            margin-left: -10%;
            position: relative;
            justify-content: center;
            align-items: center;    
            top: 80%;
            z-index: 1;
        }
        
        .divButton button{
            cursor: pointer;
            padding: 10px 20%;
            border: 1px solid black;
            color: white;
            background-color: black;
            font-weight: 500;
        }
    }




    @media screen and (max-width : 380px){

        .divButton {
            margin-left: -10%;    
            top: 20px;
        }
    }
        
`;