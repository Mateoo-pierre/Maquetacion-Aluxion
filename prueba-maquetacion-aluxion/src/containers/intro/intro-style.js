import styled from "styled-components";

export const IntroStyle = styled.div`
  background: white;
  margin-left: 15%;
  
  
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

    .logo{
      width: 100%;
      position: fixed ;
    }

  }
  
`;
