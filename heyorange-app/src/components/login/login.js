import React, {Fragment, useState} from "react";
import {Button, Label, Input, Form, FormGroup } from "reactstrap";

const Login = () =>{
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleChange = (e) => setEmail(e.target.value)
    const handleChangePassword = (e) => setPassword(e.target.value)
    const handleSubmit = (e) =>{
        console.log('Deu certo')
        e.preventDefault();
    } 

    return(
        <Fragment>
            <Form inline onSubmit={handleSubmit}>
                <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                    <Label
                    className="me-sm-2"
                    for="email"
                    >
                    Email
                    </Label>
                    <Input
                    id="email"
                    name="email"
                    placeholder="Digite seu Email"
                    type="email"
                    value={email}
                    onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                    <Label
                    className="me-sm-2"
                    for="password"
                    >
                    Password
                    </Label>
                    <Input
                    id="password"
                    name="password"
                    placeholder="Insira sua senha aqui"
                    type="password"
                    value={password}
                    onChange={handleChangePassword}
                    />
                </FormGroup>
                <Button>Login</Button>
            </Form>
        </Fragment>
    )
}

export default Login;