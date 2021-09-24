import React from "react";

import '../css/cardLogin.css';
import "../css/botao.css";

import Input from "./Input";
import Adicional from "./Adicional";
import Titulo from "./Titulo";
import Imagens from "./Imagens";

const Card = () => {
    
    return (

        <div className="cardLogin">

            <div className="ifceLogin">

                <Imagens />

                <div className="cardContent">

                    <Titulo />

                    <Input />

                    <Adicional />

                </div>      
                
            </div>

        </div>
        

    );
}


export default Card;