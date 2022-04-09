import React, { useState } from "react"

import "./Register.css"

import { Formik, Form } from "formik"
import { object, string, ref, bool } from "yup";
import Input from "../Input";
import { Button } from "reactstrap"
import Checkbox from "../Checkbox";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const RegisterValidation = object().shape({
    name: string().required("Campo obrigatório"),
    email: string()
        .required("Digite seu email")
        .email("Email inválido"),
    password: string().min(8, "Pelo menos 8 caracteres").required("Campo Obrigatório"),
    confirmPassword: string()
        .required("Confirme sua senha")
        .oneOf([ref("password")], "As senhas não conferem"),
    accepted: bool().oneOf([true], 'Aceite os termos e condições')
});

const Register = () => {
    const [showRegister, setShowRegister] = useState(true)
    const [step, setStep] = useState(0)

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

    const handleSubmit = (values) => {
        console.log(values)
    }

    const registerContainer = ({ isValid, validateForm, setTouched , submitForm}) => (
        <>
            <h2>
                Bem-vindo!
            </h2>
            <Input name="name" label="Name" />
            <Input name="email" label="Email" />
            <Input name="password" label="Password" type="password" />
            <Input
                name="confirmPassword"
                label="Confirm Password"
                type="password"
            />
            <Checkbox name="accepted" label="Aceito os termos e condições." />
            <div>
                <Button
                    onClick={() => {
                        // submitForm()
                        //     .then((errors) => {
                        //         console.log("teste", errors)
                        //     })
                        // console.log(setTouched)
                        // setTouched()
                        // validateForm().then((errors) => {
                        //     if (Object.keys(errors).length === 0 && errors.constructor === Object) {
                        //         startSteps()
                        //     }
                        // })
                        startSteps()
                    }}
                    disabled={!isValid}
                    type="button"
                >
                    CRIAR CONTA
                </Button>
            </div>
        </>
    )

    return (
        <div className="register-container">
            <img src="https://via.placeholder.com/660" />
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                    accepted: false
                }}
                onSubmit={handleSubmit}
                validationSchema={RegisterValidation}
            >
                {({ isValid, validateForm, setTouched, submitForm }) => {
                    return (
                        <Form className="form-container">
                            {showRegister && registerContainer({ isValid })}
                            {!showRegister && {
                                0: <Step1 prevStep={backToRegister} nextStep={nextStep} />,
                                1: <Step2 prevStep={prevStep} nextStep={nextStep} />,
                                2: <Step3 prevStep={prevStep} nextStep={nextStep} />
                            }[step]}
                        </Form>
                    );
                }}
            </Formik>
        </div>
    )
}

export default Register