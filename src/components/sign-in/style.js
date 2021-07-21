import styled from "styled-components";
import CustomButton from "../custom-button/Custom-button";
import { Link } from 'react-router-dom'
export const ContainerSignIn = styled.div`
  margin: 2vw;
`;
export const GoogleButton = styled(CustomButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;
export const Linken = styled(Link)`
  padding: 2.5vw;
  font-weight: bold;
  font-size: 1.8vw;
  @media screen and (max-width: 768px) {
    font-size: 4.5vw;
  }
`;