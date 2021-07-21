import styled from "styled-components";
import { Link } from 'react-router-dom'
export const ContainerHeader = styled.div`
    color: black;
`;
export const LogoBlanco = styled.img`
    width: 10vw;
`;
export const Linken = styled(Link)`
  padding: 2.5vw;
  font-weight: bold;
  font-size: 1.8vw;
  text-decoration: none;
  @media screen and (max-width: 768px) {
    font-size: 4.5vw;
  }
`;