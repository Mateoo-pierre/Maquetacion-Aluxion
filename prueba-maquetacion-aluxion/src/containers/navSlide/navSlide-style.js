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

    .p-number{
        color: rgb(116, 116, 116);
    }

    
    `/* responsive */`


    @media screen and (max-width : 700px ){
        .nav-container{
            margin-left: -12%;
            justify-content: center;
            align-items: center;
            margin-top: 16%;
            height: 1px;
        }
    };

`;