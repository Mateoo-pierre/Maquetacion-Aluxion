import styled from "styled-components";

export const IntroStyle = styled.div`

  .bodyIntro{ 
    background: white;
    margin-left: 15%;
    height: 100vh;
  }
  
  
  .logo{
    margin-top: 20px;
    font-family: 'Roboto Condensed', sans-serif;
    z-index: 3;
    transition: 0.5s ease-in-out;
    text-decoration: none;

  }

  .logoAluxion {
    width: 3%;
    margin-right: 15px;
  }
  
  .header {
    border: 1px solid white;
    padding: 20px 0px;
    color: black;
    width: 90%;
    display: flex;

    
    &.active {
      
      .logo {
        color: white;
        transition: 1.5s ease-in-out;
        text-decoration: none;
      }
    }
  }

  @media (max-width : 700px){

    .bodyIntro{ 
      margin-left: 8%;
    }

    .logo{
      width: 100%;
      position: fixed ;
    }

  }

  @media screen and (max-width : 1000px){

    .bodyIntro{ 
      background: white;
      margin-left: 5%;
      height: 100vh;
    }
  }
  
`;
