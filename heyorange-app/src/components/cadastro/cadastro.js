import React, {Fragment, useState} from "react";
import {Label, Input, Form, FormGroup } from "reactstrap";

const Cadastro= () =>{
    
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
           <Form>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                    id="email"
                    name="email"
                    placeholder="Digite seu Email"
                    type="email"
                    value={email}
                    onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Senha</Label>
                    <Input
                    id="password"
                    name="password"
                    placeholder="Insira sua senha"
                    type="password"
                    value={password}
                    onChange={handleChangePassword}
                    />
                </FormGroup>
                <Input type="submit" onSubmit={handleSubmit}/>
            </Form>
        </Fragment>
    )
}

export default Cadastro;
