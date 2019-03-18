import styledProps from "styled-props";
import styled from "styled-components";
import { darken } from "polished";

const background = {
  primary: "#0366ee",
  danger: "#D81103",
};

const Button = styled.button`
  display: inline-block;
  border: 1px solid ${styledProps(background)};
  border-radius: 4px;
  background: ${styledProps(background)};
  color: #ffffff;
  font-weight: 600;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
    Arial, sans-serif;
  font-size: 1rem;
  text-transform: none;
  padding: 0.5rem;
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  line-height: 1;

  &:hover {
    border: 1px solid ${props => darken(0.2, styledProps(background)(props))};
    background: ${props => darken(0.1, styledProps(background)(props))};
    color: #ffffff;
    text-decoration: none;
  }
`;

export default Button;
