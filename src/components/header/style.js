import styled from "styled-components";
import { Link } from 'react-router-dom'
export const ContainerHeader = styled.div`
    background-color: black;
    color: white;
    height: 6vw;
    @media screen and (max-width: 768px) {
        height: 12vw;
      }
`;
export const H1 = styled.h1`
    font-size: 1.3vw;
    font-weight: 100;
    text-align: center;
    @media screen and (max-width: 768px) {
        font-size: 2.7vw;
      }
`;
export const LogoBlanco = styled.img`
    width: 15vw;
    padding: 1vw 0 0 2vw;
    @media screen and (max-width: 768px) {
        width: 27vw;
      }
`;
export const LogoBlanco1 = styled.img`
    width: 4vw;
    padding: 2vw 1vw 0 2vw;
    @media screen and (max-width: 768px) {
        width: 10vw;
        height: 10vw;
      }
`;
export const Selector = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    top: -6vw;
    @media screen and (max-width: 768px) {
        position: relative;
        top: -8vw;
      }
`;

export const H2 = styled.h2`
    font-size: 1.3vw;
    font-weight: bolder;
    text-align: center;
    padding: 2vw;
    @media screen and (max-width: 768px) {
        font-size: 3vw;
      }
`;
export const Icons = styled.div`
    display: flex;
    text-align: right;
    justify-content: flex-end;
    position: relative;
    top: -10vw;
    padding: 0 2.5vw 0 0 ;
    @media screen and (max-width: 768px) {
        position: relative;
        top: -17vw;
      }
`;
export const Icons1 = styled.div`
    display: flex;
    text-align: right;
    justify-content: flex-end;
    position: relative;
    top: -10vw;
    padding: 0 2.5vw 0 0 ;
    @media screen and (max-width: 768px) {
        position: relative;
        top: -17vw;
      }
`;
export const Linken = styled(Link)`
  padding: 0.8vw;
  font-weight: 100;
  font-size: 1.5vw;
  text-decoration: none;
  color: white;
  @media screen and (max-width: 768px) {
    font-size: 4.5vw;
  }
`;
export const Linken1 = styled(Link)`
  padding: 0.8vw;
  font-weight: 100;
  font-size: 1.2vw;
  text-decoration: none;
  color: black;
  @media screen and (max-width: 768px) {
    font-size: 4.5vw;
  }
`;