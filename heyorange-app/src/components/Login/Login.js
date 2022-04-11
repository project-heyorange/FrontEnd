import React from "react";

import { Navigate } from "react-router-dom";

import { Formik, Form } from "formik"
import { object, string } from "yup";
import { Button } from "reactstrap";
import "./login.css"
import Input from "../Input";

const LoginValidation = object().shape({
    email: string()
        .required("Digite seu email")
        .email("Email inválido"),
    password: string().min(8, "Pelo menos 8 caracteres").required("Campo Obrigatório"),
});

const Login = () => {
    const handleSubmit = (values) => {
        console.log(values)
    }

    return (
        <div className="container">
            <img src="https://via.placeholder.com/660" className="HomeImg" />
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

                        <Form className="form-container">
                            <h2 className="Title">
                                Bem-vindo!
                            </h2><br />
                            <Input name="email" label="Email" />
                            <Input name="password" label="Password" type="password" />
                            <div>
                                <Button outline
                                    className="LoginBtn"
                                    type="submit"
                                >Entrar
                                </Button>
                            </div>
                            <br /><a href="#" target="_blank">Esqueceu a senha?</a>
                            <hr />
                            <br />
                            <Button
                                href="#"
                                onClick={
                                    () => {
                                        <Navigate to="/Register" />
                                    }
                                }
                            >
                                CRIAR CONTA
                            </Button>

                        </Form>

                    )
                }}

            </Formik>

        </div>
    )

}

export default Login;