import React from "react";
import logo from '../img/logo.png';
import bancoCentral from '../img/bancoCentral.svg';
import "../css/imagens.css"

const Imagens = () => {
    
    return (
        
        <div className="Imagens">

            <div className="borderLogo">

                <img className="LogoIfce" src={logo} alt="Logo IFCE" />   

            </div>         

            < div className="wrapper">

                <img className="LogoBD" src={bancoCentral} alt="Logo Banco Central" />

                <h1> Banco Central </h1>

            </div>

        </div>
        
    );
}


export default Imagens;