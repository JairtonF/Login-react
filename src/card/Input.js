import React from "react";
import { useForm } from "react-hook-form";

import '../css/input.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from "../components/Button/Button";
import Other from "../components/Input/Other";

const Input = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => console.log(data);

    const [matricula, setMatricula] = React.useState('');

    const [senha, setSenha] = React.useState('');

    const matriculaEvento = (event) =>{
        setMatricula(event.target.value);
    }
    
    const senhaEvento = (event) =>{
        setSenha(event.target.value);
    }



    return (

        <form onSubmit = { handleSubmit(onSubmit) }>

            <div className="formulario">

                <FontAwesomeIcon icon="user-circle" size="lg" className="iconColor"/>

                <Other 
                    type="text"
                    className="Matricula" 
                    id="Matricula" 
                    name="Matricula"
                    value={matricula}
                    placeholder="Matricula/SiAPE/CPF"
                    onChange={matriculaEvento}
                     />

            </div>

            <div className="formulario">
    
                <FontAwesomeIcon icon="lock" size="lg" className="iconColor"/>

                <Other 
                    type="password"
                    className="Senha" 
                    id="Senha" 
                    name="Senha"
                    value={senha}
                    placeholder="Senha"
                    onChange={senhaEvento}
                     />

            </div>

            <Button type="submit" disabled={!matricula || !senha} className="botao"> <p> <b> Login </b> </p></Button>

        </form>
        
    );
}


export default Input;