import React from "react";

import { Navigate } from "react-router-dom";

import { Formik, Form } from "formik"
import { object, string } from "yup";
import { Button } from "reactstrap";
import "./login.css";
import Input from "../Input";
import { Link } from "react-router-dom";
import MainImage from "../MainImage";

const LoginValidation = object().shape({
    email: string()
        .required("Digite seu email")
        .email("Email inválido"),
    password: string().min(8, "Pelo menos 8 caracteres").required("Campo Obrigatório"),
});

const Login = () => {
    const handleSubmit = (values) => {
        var url = "caminho Do Back"
        var headerLogin = new Headers();
        var initLogin = {
            method: 'POST',
            headers: headerLogin,
            mode: 'cors',
            body: values,
            cache: 'default'
        }

        fetch(url, initLogin)
        .then(function(response){
            return response.json();
        }) 
        .then(function(dadosDaResposta){
            var dadosLogin = JSON.parse(dadosDaResposta)
            //Fazer o redirect para a página inicial
        })
    }

    return (
        <Formik
            initialValues={{
                email: "",
                password: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={LoginValidation}
        >
            {() => {
                return (
                 
                    <div className="register-container">
                  
            {/* <img src="https://via.placeholder.com/660" className="HomeImg" /> */}
            <MainImage/>
            
                    <Form>
                    <h2 className="Title">
                Bem-vindo!
                    </h2>
                        <Input name="email" label="Email" />
                        <Input name="password" label="Senha" type="password" />
                        <div>
                            <Button className="LogInBtn" outline type="submit">Entrar</Button>
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