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

    const nextStep = () => {
        setStep(step => step + 1)
    }

    const requestToBack = async () => {
        setLoading(true)
        await new Promise(resolve => setTimeout(resolve, 5000));
        setLoading(false)
    }

    const handleSubmit = async (values) => {
        console.log(values)
        if (showRegister) {
            startSteps()
            return
        }

        if (step === 1) {
            await requestToBack()
            console.log("Ultimo step ", values)
        }

        setStep(step => step + 1)
    }

    const registerContainer = ({ isValid }) => (
        <>
            <h2 className="Title">
                Bem-vindo!
            </h2>
            <Input name="name" label="Nome" />
            <Input name="email" label="Email" />
            <Input name="password" label="Senha" type="password" />
            <Input
                name="confirmPassword"
                label="Confirmar Senha"
                type="password"
            />
            <Checkbox name="accepted" label="Eu concordo com os Termos de Uso" />
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
        name: string().required("Campo obrigatório"),
        email: string()
            .required("Digite seu email")
            .email("Email inválido"),
        password: string().min(2, "Pelo menos 2 caracteres").required("Campo Obrigatório"),
        confirmPassword: string()
            .required("Confirme sua senha")
            .oneOf([ref("password")], "As senhas não conferem"),
        accepted: bool().oneOf([true], 'Aceite os termos e condições'),
    });

    const StepsValidation = [object().shape({
        nivelExperiencia: string().required("Teste"),
        area: string().required("Teste"),
    }), object().shape({
        habilidade1: string().required("Teste"),
        habilidade2: string().required("teste"),
        habilidade3: string().required("teste"),
    }), object().shape({})]

    return (
        <div className="register-container">
            <img src="https://via.placeholder.com/660" className="HomeImg" />
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                    accepted: false,
                    nivelExperiencia: "",
                    area: "",
                    habilidade1: "",
                    habilidade2: "",
                    habilidade3: ""
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

                                    <Progress color="warning" value={[33, 66, 100][step]} /><br />

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