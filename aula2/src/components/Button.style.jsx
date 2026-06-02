import { styled } from "styled-components";


export const StyledButton = styled.button`
  width: 100px;
  height: 90px;
  background-color: brown;

  &:hover {
    background-color: green;
  }
`;
export const BlueButton = styled.button`
  width: 100px;
  height: 90px;
  background-color: blue;

  &:hover {
    background-color: orange;
  }
`;

export const GreenButton = styled.button`
  width: 100px;
  height: 90px;
  background-color: green;

  &:hover {
    background-color: red;
  }
`;

export const Card = styled.div `
    padding: 20px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
`
