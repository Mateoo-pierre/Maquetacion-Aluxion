import styled from 'styled-components';

export const NavSlideStyle = styled.div`

    .nav-container{
        display: flex;
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 14px;
    }

    .navSlideOne{
        margin-right: 50px;
    }
    
    @media screen and (max-width : 1000px ){

        .nav-container{
            margin-left: -4%;
            justify-content: center;
            align-items: center;
            margin-top: 8%;
            height: 1px;
        }

        .navSlideOne{
            margin-right: 10px;
            border: 1px solid black;
            padding: 12px 100px;
        }

        .navSlideTwo{
            border: 1px solid black;
            padding: 12px 100px;
        }

    };

    @media screen and (max-width : 700px ){
        .nav-container{
            margin-left: -12%;
            justify-content: center;
            align-items: center;
            margin-top: 16%;
            height: 1px;
        }

        .navSlideOne{
            margin-right: 50px;
            border: none;
            padding: 0;
        }

        .navSlideTwo{
            border: none;
            padding: 0;
        }
    };



`;

export const PNavStyle = styled.p`

    color: rgb(116, 116, 116);

`;