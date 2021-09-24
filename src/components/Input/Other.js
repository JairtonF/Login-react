import React from 'react';

const Other = ({ type, id, className, placeholder, value, onChange}) => {

    return(

        <>
        
        <input
            type={type}
            className={className}
            id={id}
            name={id}
            value={value}
            placeholder={placeholder}
            onChange={onChange} />
        
        </>
    );
    
}

export default Other;