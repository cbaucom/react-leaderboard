import React from "react";
import styled from "styled-components";
import logo from "../pga_logo.png";

const StyledHeader = styled.header`
  background-color: #032448;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  .App-logo {
    height: 70px;
  }
`;

const Header = () => (
  <StyledHeader>
    <img src={logo} className="App-logo" alt="logo" />
  </StyledHeader>
);

export default Header;
