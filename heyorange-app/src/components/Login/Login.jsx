import React, {useState} from "react";

import Api from "../../services/api";

import { Formik, Form } from "formik"
import { object, string } from "yup";
import { Button } from "reactstrap";
import "./login.css";
import Input from "../Input";
import { Link,Navigate } from "react-router-dom";

const LoginValidation = object().shape({
    email: string()
        .required("Digite seu email")
        .email("Email inválido"),
    password: string().min(8, "Pelo menos 8 caracteres").required("Campo Obrigatório"),
});

const Login = () => {
    const [redirectToFeed, setRedirectToFeed] = useState(false);
    const requestToBack = async () => {
        await new Promise(resolve => setTimeout(resolve, 5000));
    }
    
    const handleSubmit = async (values) => {
        setRedirectToFeed(!redirectToFeed)
        const new_user = await Api.post('/', values)      
        console.log(values)
        
    }

    if(redirectToFeed == true) return <Navigate to="/feed"/>


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
                    <div className="image"></div>
            
                    <Form className="LogIn-container">
                        <h2 className="Title">
                        Hey Orange!
                        </h2>
                        <h5 className="Subtitle">A plataforma de mentoria do Grupo FCamara.</h5>
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