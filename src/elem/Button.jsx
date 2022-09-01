import React from "react";
import styled, { css } from "styled-components";
import flex from "../lib/flex";

const Button = (props) => {
  return (
    <StButton {...props} disabled={props.disabled}>
      {props.children}
    </StButton>
  );
};

export default Button;

const StButton = styled.button`
  ${flex({})};
  border: 0px solid #C7F9CC;
  background-color: #38A3A5;
  height: 46px;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  font-weight: ${({ fw }) => fw};
  color: ${({ color }) => color};
  background-color: ${({ bgColor, disabled }) => (disabled ? "#ddd" : bgColor)};
  cursor: pointer;
  :hover {
    filter: brightness(95%);
    box-shadow: 2px 2px 1px #C7F9CC;
  }

  ${({ size }) => {
    switch (size) { 
      case "large":
        return css`
          width: 40%;
        `;
      case "medium":
        return css`
          width: 100px;
        `;
      case "small":
        return css`
          width: 50px;
          height: 30px !important;
        `;
      default:
        return css`
          width: 140px;
        `;
    }
  }}
`;
