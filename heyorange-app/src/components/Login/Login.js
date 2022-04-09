import React, { useState } from "react";

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
                    <Form>
                        <Input name="email" label="Email" />
                        <Input name="password" label="Password" type="password" />
                        <div>
                            <Button outline type="submit">Entrar</Button>
                        </div>
                        <a href="/" target="_blank">Esqueceu a senha?</a>

                    </Form>
                )
            }}
        </Formik>
    )
}

export default Login;