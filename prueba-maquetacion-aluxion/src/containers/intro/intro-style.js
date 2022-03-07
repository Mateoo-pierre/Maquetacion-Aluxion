import styled from "styled-components";

export const IntroStyle = styled.div`
  background: white;
  margin-left: 200px;

  .logo{
    margin-top: 20px;
    font-family: 'Roboto Condensed', sans-serif;
  }

  .logoAluxion {
    width: 3%;
    margin-right: 15px;
  }

  .header {
    border: 1px solid white;
    padding: 20px 0px;
    background: white;
    color: black;
    display: flex;

    &.active {
      background: white;
      color: black;
      border: 1px solid black;

      .header-menu {
        border: 1px solid black;
      }
    }
  }

  .header-menu {
    border: 1px solid white;
    margin-left: 300px;
    padding: 20px;
    margin-right: 12px;
  }
`;
