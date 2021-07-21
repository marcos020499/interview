import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  margin: 3vw 0vw 0 4vw;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: rgb(198, 51, 163);
  color: white;
  font-weight: 100;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 12px;
    margin: 3vw 0vw 0 10vw;
  }
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

    &:hover {
      background-color: #357ae8;
      border: none;
    }
  }
  &.Inverted {
    background-color:  color: rgb(174, 36, 142);;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
  }
`;
export const Inverted = styled.button``;