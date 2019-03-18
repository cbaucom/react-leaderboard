import styled from "styled-components";

const StyledApp = styled.div`
  background: rgba(0, 0, 0, 0.02);
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  text-align: center;
`;

const MainContainer = styled.section`
  margin: 0 auto;
  padding: 1rem 0.5rem;
  width: 90%;
  h1 {
    margin-top: 0.5rem;
  }
`;

export { StyledApp, MainContainer };
