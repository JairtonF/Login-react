import React from 'react';

const Botao = ({ type, disabled, className, children}) => {

    return(

        <div className="posicaoBotao">

            <button type={type} disabled={disabled} className={className}> {children} </button>

        </div>
    );
    
}

export default Botao;