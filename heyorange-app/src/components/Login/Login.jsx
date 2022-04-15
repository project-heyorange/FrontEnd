import React from "react";
import { Formik, Form } from "formik"
import { object, string } from "yup";
import { Button } from "reactstrap";
import "./login.css";
import Input from "../Input";
import { Link } from "react-router-dom";

const LoginValidation = object().shape({
    email: string()
        .required("Digite seu email")
        .email("Email inválido"),
    senha: string().min(8, "Pelo menos 8 caracteres").required("Campo Obrigatório"),
});

const Login = () => {
    
    const handleSubmit = async (values) => { 
        console.log()
        
    }


    return (
        <Formik
            initialValues={{
                email: "",
                senha: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={LoginValidation}
        >
            {() => {
                return (
                 
                    <div className="register-container">
                    <div className="image"></div>
            
                    <Form className="LogIn-container">
                        <h2 className="Title">
                        Hey Orange!
                        </h2>
                        <h5 className="Subtitle">A plataforma de mentoria do Grupo FCamara.</h5>
                        <Input name="email" label="Email" />
                        <Input name="senha" label="Senha" type="password" />
                        <div>
                            <Link to="/feed"> <Button className="LogInBtn" outline type="submit">Entrar</Button></Link>
                        </div>
                        <a href="/" target="_blank"><center><br/>Esqueceu a senha?</center></a>
                        <hr />
                        <Link to="/register"><button className="CreateAcc">CRIAR CONTA</button></Link>

                    </Form></div>
                )
            }}
        </Formik>
    )

}

export default Login;