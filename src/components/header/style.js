import styled from "styled-components";
import { Link } from 'react-router-dom'
export const ContainerHeader = styled.div`
    background-color: black;
    color: white;
    height: 6vw;
`;
export const H1 = styled.h1`
    font-size: 1.3vw;
    font-weight: 100;
    text-align: center;
`;
export const LogoBlanco = styled.img`
    width: 15vw;
    padding: 1vw 0 0 2vw;
`;
export const Selector = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    top: -6vw;
`;
export const H2 = styled.h2`
    font-size: 1.3vw;
    font-weight: bolder;
    text-align: center;
    padding: 2vw;
`;
export const Icons = styled.div`
    display: flex;
    text-align: right;
    justify-content: flex-end;
    position: relative;
    top: -12vw;
`;
export const Linken = styled(Link)`
  padding: 2vw;
  font-weight: bold;
  font-size: 1.5vw;
  text-decoration: none;
  color: white;
  @media screen and (max-width: 768px) {
    font-size: 4.5vw;
  }
`;