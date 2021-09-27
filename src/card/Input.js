import React from "react";
import { useForm } from "react-hook-form";

import '../css/input.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Other from "../components/Input/Other";
import Botao from "../components/Button/Botao";

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

            <div className="form-group input-group flex-nowrap formulario">

                {/*<FontAwesomeIcon icon="user-circle" size="lg" className="iconColor"/> */}

                <span class="input-group-text iconChange" id="addon-wrapping"> {/*<FontAwesomeIcon icon="lock" size="xs" className="input-group-text iconChange iconColor" id="addon-wrapping"/> */}</span>                

                <Other 
                    type="text"
                    className="form-control Matricula" 
                    id="Matricula" 
                    name="Matricula"
                    value={matricula}
                    placeholder="Matricula/SiAPE/CPF"
                    onChange={matriculaEvento}
                     />

            </div>

            <div className="form-group input-group flex-nowrap formulario">
    
                {/*<FontAwesomeIcon icon="lock" size="lg" className="iconColor"/>*/}

                <span class="input-group-text iconChange" id="addon-wrapping"> @ </span>

                <Other 
                    type="password"
                    className="form-control Senha" 
                    id="Senha" 
                    name="Senha"
                    value={senha}
                    placeholder=" Senha"
                    onChange={senhaEvento}
                     />

            </div>

            <Botao type="submit" disabled={!matricula || !senha} className="btn botao"> <p> Login </p> </Botao>

        </form>
        
    );
}


export default Input;