import React from "react";
import {ContainerHeader, LogoBlanco, Linken} from './style'
import "font-awesome/css/font-awesome.min.css";
const Header =()=>{
    return(
        <ContainerHeader>
            <h1>Envios a todo México</h1>
            <div>
                <LogoBlanco src={'https://res.cloudinary.com/marcos020499/image/upload/v1626880896/logo_blanco_zmeczl.png'}/>
                <div>
                    <h2>Obras</h2>
                    <h2>Artistas</h2>
                </div>
                <div>
                <Linken to="/" className="fa fa-search"></Linken>
                <Linken to="/" className="fa fa-user"></Linken>
                <Linken to="/" className="fa fa-heart"></Linken>
                <Linken to="/" className="fa fa-shopping-cart"></Linken>
                </div>
            </div>
        </ContainerHeader>
    )
}
export default Header