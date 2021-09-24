import React from 'react';

const Button = ({ type, disabled, className, children}) => {

    return(

        <div className="posicaoBotao">

            <button type={type} disabled={disabled} className={className}> {children} </button>

        </div>
    );
    
}

export default Button;