import React, { Fragment, useState } from "react";
import { Button, Input, Form, FormGroup } from "reactstrap";
import FloatingLabel from "react-bootstrap-floating-label";

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
        <Fragment>
            <Form inline onSubmit={handleSubmit}>
                {/* Login Nome */}
                <FormGroup>
                    <FloatingLabel
                        label="Email"
                        className="me-sm-2"
                        for="email"
                    >
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={email}
                            onChange={handleChangeEmail}
                        />
                    </FloatingLabel>
                </FormGroup>
                {/* Login Senha */}
                <FormGroup floating className="mb-2 me-sm-2 mb-sm-0">
                    <FloatingLabel
                        label="Senha"
                        className="me-sm-2"
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
                <br/>
                <Button>Login</Button>
            </Form>
        </Fragment>
    )
}

export default Login;