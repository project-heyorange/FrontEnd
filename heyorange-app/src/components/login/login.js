import React, { useState } from "react";
import { Button, Input, Form, FormGroup } from "reactstrap";
import FloatingLabel from "react-bootstrap-floating-label";
import "./login.css"

const Login = () => {

    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')

    const handleChangeEmail = ({ target: { value } }) => {
        setEmail(value)
    }

    const handleChangePassword = ({ target: { value } }) => {
        setPassword(value)
    }

    const handleSubmit = (e) => {
        console.log('Deu certo')
        e.preventDefault();
    }

    return (
        <>
            <div className="container">
                <Form inline onSubmit={handleSubmit}>
                    {/* Login Nome */}
                    <FormGroup>
                        <FloatingLabel
                            label="Email"
                            className="input"
                            for="email"
                        >
                            <Input
                                // className="w-15"
                                id="email"
                                name="email"
                                type="email"
                                value={email}
                                onChange={handleChangeEmail}
                            />
                        </FloatingLabel><br/>
                    </FormGroup>
                    {/* Login Senha */}
                    <FormGroup floating className="mb-2 me-sm-2 mb-sm-0">
                        <FloatingLabel
                            label="Senha"
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

                        </FloatingLabel>
                    </FormGroup>
                    <br />
                    <Button outline className="button">Entrar</Button><br/><br/>

                    <a href="" target="_blank">Esqueceu a senha?</a>

                </Form>
            </div>
        </>
    )
}

export default Login;