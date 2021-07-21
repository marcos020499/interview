import React from "react";
import {ContainerHeader, LogoBlanco, Linken, H1, Selector, H2, Icons} from './style'
import "font-awesome/css/font-awesome.min.css";
const Header =()=>{
    return(
        <ContainerHeader>
            <H1>Envios a todo México</H1>
            <div>
                <LogoBlanco src={'https://res.cloudinary.com/marcos020499/image/upload/v1626880896/logo_blanco_zmeczl.png'}/>
                <Selector>
                    <H2>Obras</H2>
                    <H2>Artistas</H2>
                </Selector>
                <Icons>
                    <Linken to="/" className="fa fa-search"></Linken>
                    <Linken to="/" className="fa fa-user"></Linken>
                    <Linken to="/" className="fa fa-heart"></Linken>
                    <Linken to="/" className="fa fa-shopping-cart"></Linken>
                </Icons>
            </div>
        </ContainerHeader>
    )
}
export default Header