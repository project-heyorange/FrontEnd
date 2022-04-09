import React, { useState } from "react";
import { Button, Col, Label, Input, Form, FormGroup } from "reactstrap";
import FloatingLabel from "react-bootstrap-floating-label";
import "./cadastro.css"

const Register = () => {

    const [name, setName] = useState('')

    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')

    const [option, setOption] = useState('')


    const handleChangeName = ({ target: { value } }) => {
        setName(value)
    }
    const handleChangeEmail = ({ target: { value } }) => {
        setEmail(value)
    }
    const handleChangePassword = ({ target: { value } }) => {
        setPassword(value)
    }
    const handleChangeOption = ({ target: { value } }) => {
        setOption(value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, password, option)

    }

    return (
        <>
            <div className="container">
                {/* Input para o Nome */}
                <Form inline onSubmit={handleSubmit}>
                    <FormGroup floating>
                        <FloatingLabel
                            label="Nome"
                            className="input"
                            for="name"
                        >
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                value={name}
                                onChange={handleChangeName}
                            />
                        </FloatingLabel><br />
                    </FormGroup>

                    {/* Input para o Email */}
                    <FormGroup>
                        <FloatingLabel
                            label="E-mail FCamara"
                            className="input"
                            for="email"
                        >
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                value={email}
                                onChange={handleChangeEmail}
                            />
                        </FloatingLabel><br />
                    </FormGroup>

                    <FormGroup floating className="mb-2 me-sm-2 mb-sm-0">
                        <FloatingLabel
                            label="Crie sua Senha"
                            className="input"
                            for="password"
                        >
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                value={password}
                                onChange={handleChangePassword}
                            />

                        </FloatingLabel><br />
                    </FormGroup>
                    {/* Confirmação de Senha */}
                    <FormGroup>
                        <FloatingLabel
                            label="Confirmar senha"
                            className="input"
                            for="confirmeSenha"
                        >
                            <Input
                                id="confirmeSenha"
                                name="confirmeSenha"
                                type="confirmeSenha"
                            />
                        </FloatingLabel><br />
                    </FormGroup>

                    <FormGroup check inline>
                        <Input type="checkbox" />
                        <Label check>
                            <a href="" target="_blank">Aceitar os termos e condições</a>
                        </Label><br />
                    </FormGroup>

                    <FormGroup>
                        <br />
                        <Button>Cadastrar</Button>
                    </FormGroup>
                </Form>
            </div>
        </>
    )

}

export default Register;


