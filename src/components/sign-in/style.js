import styled from "styled-components";
import CustomButton from "../custom-button/Custom-button";
import { Link } from 'react-router-dom'
export const ContainerSignIn = styled.div`
  display: flex;
  justify-content: center;
  padding: 10vw 0 5vw 0;
  
  border-bottom: 1px solid gray;
  @media screen and (max-width: 768px) {
    margin: 0 10vw 0 10vw;
  }
`;
export const Span = styled.span`
  font-size: 1.9vw;
  text-align: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    font-size: 4.2vw;
  }
`;
export const Bolder = styled.span`
  font-size: 1.9vw;
  font-weight: bolder;
  text-align: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    font-size: 4.2vw;
  }
`;
export const GoogleButton = styled(CustomButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;
export const H2 = styled.div`
    margin: 6vw 0 0 0;
    text-align: center;
`;
export const Linken = styled(Link)`
  font-weight: bold;
  font-size: 1.4vw;
  color: rgb(227, 83, 193);
  @media screen and (max-width: 768px) {
    font-size: 2.4vw;
  }
`;