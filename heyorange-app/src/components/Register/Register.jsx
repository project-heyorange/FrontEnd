import React, { useState } from "react"

import "./Register.css"

import { Formik, Form } from "formik"
import { object, string, ref, bool } from "yup";
import Input from "../Input";
import { Button, Progress } from "reactstrap"
import Checkbox from "../Checkbox";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

import Api from "../../services/api";




const Register = () => {
    const [showRegister, setShowRegister] = useState(true)
    const [step, setStep] = useState(0)
    const [loading, setLoading] = useState(false)

    const backToRegister = () => {
        setShowRegister(true)
    }

    const startSteps = () => {
        setShowRegister(false)
    }

    const prevStep = () => {
        setStep(step => step - 1)
    }

    const requestToBack = async () => {
        setLoading(true)
        await new Promise(resolve => setTimeout(resolve, 5000));
        setLoading(false)
    }

    const handleSubmit = async (values) => {
        // const new_user = await axios.post('https://heyorangedb.herokuapp.com/usuarios', values)      
        // console.log(new_user)
        values["habilidades"] = [values.habilidade1, values.habilidade2, values.habilidade3]
        delete values.habilidade1
        delete values.habilidade2
        delete values.habilidade3
        delete values.confirmarSenha

        if (showRegister) {
            startSteps()
            return
        }

        if (step === 1) {
            await requestToBack()
            // const register = await Api.post('/', values)      
            console.log(values)
        }

        setStep(step => step + 1)
    }

    const registerContainer = ({ isValid }) => (
        <>
            <h2 className="Title">
                Hey Orange!
            </h2>
            <h5 className="signin-subtitle">Crie sua conta para ter acesso aos melhores mentores.</h5>
            <Input name="nome" label="Nome" />
            <Input name="email" label="Email" />
            <Input name="senha" label="Senha" type="password" />
            <Input
                name="confirmarSenha"
                label="Confirmar Senha"
                type="password"
            />
            <Checkbox name="aceitar" label="Eu concordo com os Termos de Uso" />
            <div>
                <Button className="CreateAccBtn"
                    disabled={!isValid}
                    type="submit"
                >
                    CRIAR CONTA
                </Button>
            </div>
        </>
    )

    const RegisterValidation = object().shape({
        nome: string().required("Campo obrigatório"),
        email: string()
            .required("Digite seu email")
            .email("Email inválido"),
        senha: string().min(2, "Pelo menos 2 caracteres").required("Campo Obrigatório"),
        confirmarSenha: string()
            .required("Confirme sua senha")
            .oneOf([ref("senha")], "As senhas não conferem"),
        aceitar: bool().oneOf([true], 'Aceite os termos e condições'),
    });

    const StepsValidation = [object().shape({
        nivelExperiencia: string().required("Teste"),
        area: string().required("Teste"),
    }), object().shape({
        habilidade1 : string().required("Campo Obrigatório"),
        habilidade2: string(),
        habilidade3: string(),
    }), object().shape({})]

    return (
        <div className="register-container">
            <div className="Signup-image"></div>
            <Formik
                initialValues={{
                    nome: "",
                    email: "",
                    senha: "",
                    confirmarSenha: "",
                    aceitar: false,
                    nivelExperiencia: "",
                    area: "",
                    habilidade1: "",
                    habilidade2: "",
                    habilidade3: "",
            
                }}
                onSubmit={handleSubmit}
                validationSchema={showRegister ? RegisterValidation : StepsValidation[step]}
            >
                {({ isValid }) => {
                    return (
                        <Form className="form-container">
                            {showRegister && registerContainer({ isValid })}
                            {!showRegister && (
                                <div>

                                    <Progress className="orange-progressbar" color="danger" value={[33, 66, 100][step]} /><br /><br />

                                    {{
                                        0: <Step1 prevStep={backToRegister} />,
                                        1: <Step2 prevStep={prevStep} loading={loading} />,
                                        2: <Step3 />
                                    }[step]}
                                </div>)
                            }
                        </Form>
                    );
                }}
            </Formik>
        </div>
    )
}

export default Register