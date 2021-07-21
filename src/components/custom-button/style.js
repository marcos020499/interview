import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: rgb(174, 36, 142);;
  color: white;
  font-weight: 100;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    font-size: 12px;
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
