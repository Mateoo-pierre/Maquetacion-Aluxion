import styled from 'styled-components';

export const MenuStyle = styled.div`

    .menu{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        z-index: 2;
        background-color: black;
        color: white;
        transform: translateX(100%);
        transition: 1s ease-in-out;
    }

    .open{
        opacity: 1;
        background-color: black;
        transform: translateX(0%);
    }

    .ul{
        opacity: 0;
        transform: translateY(100%);
        position: absolute;
        left: 200px;
        display: flex;
        width: 300px;
        top: 25%;
        flex-direction: column;
    }

    .ul-translate{
        opacity: 1;
        transform: translateY(0%);
        transition: 3s;
    }

    .collect-container{
        z-index: 5;
        transition: 1s ease-in-out;
        width: 150px;
    }

    .ul li{
        margin: 20px 0;
        z-index: 11;
        transition: 1s ease-in-out;
    }
    
    .ul li p{
        text-decoration: none;
        transition: 2s;
        font-size: 25px;
        font-weight: 550;
        mix-blend-mode: difference;
        cursor: pointer;
    }

    .bg1{
        position: absolute;
        color: rgba(255, 255, 255, 0.568);
        font-size: 13px;
        opacity: 0;
        width: 350px;
        transform: translateY(-60%);
        transition: 1s ease-in-out;
    }
    
    .bg1 li{
        margin: 15px 0;
        cursor: pointer;
    }

    .bg1-forniture{
        position: absolute;
        width: 100%;
        height: 320px;
        mix-blend-mode: difference;
        top: -50px;
        left: 450px;
        background: url(../../assets/images/files/Sofá\ blanco.png);
        background-size: cover;
        opacity: 0;
        transform: translateY(20%);
        transition: 1s ease-in-out;
    }

    .collect-container:hover > .bg1{
        opacity: 1;
        transform: translateY(0%);
        transition: 1s ease-in-out;
    }
    
    .collect-container:hover{
        transition: 1s ease-in-out;
        margin-bottom: 100px;
    }
    
    
    .li-furniture:hover ~ .bg1-forniture{
        opacity: 1;
        transform: translateY(0%);
        transition: 1s ease-in-out;
    }
    
    .li-furniture:hover{
        color: white;
    }

    @media screen and (max-width : 1000px){

        .ul{
            opacity: 0;
            transform: translateY(100%);
            position: absolute;
            left: 10%;
            text-align: left;
            display: flex;
            width: 300px;
            top: 20%;
            flex-direction: column;
        }

        .ul-translate{
            opacity: 1;
            transform: translateY(0%);
            transition: 3s;
        }

        .bg1-forniture{
            position: absolute;
            width: 100%;
            height: 320px;
            mix-blend-mode: difference;
            top: -50px;
            left: 330px;
            background: url(../../assets/images/files/Sofá\ blanco.png);
            background-size: cover;
            opacity: 0;
            transform: translateY(20%);
            transition: 1s ease-in-out;
        }

    }

    @media screen and (max-width : 700px ) {
   
        .ul{
            opacity: 0;
            transform: translateY(100%);
            position: absolute;
            left: 10%;
            text-align: left;
            display: flex;
            width: 300px;
            top: 12%;
            flex-direction: column;
        }
    
        .ul-translate{
            opacity: 1;
            transform: translateY(0%);
            transition: 3s;
        }
    
        .bg1{
            position: absolute;
            color: rgba(255, 255, 255, 0.568);
            font-size: 13px;
            text-align: left;
            left: 0%;
            width: 350px;
            transform: translateY(-80%);
            transition: 1s ease-in-out;
        }
    
        .bg1-forniture {
            width: 40%;
            height: 150px;    
            top: -20px;
            left: 180px;    
        }
    
        .bg1 ul li{
            margin-top: 10px;
        }
    
    }

`;