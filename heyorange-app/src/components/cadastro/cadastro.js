import React, {Fragment, useState} from "react";
import {Button, Col, Label, Input, Form, FormGroup } from "reactstrap";

const Register = () =>{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [option, setOption] = useState('')


    const handleChangeName = (e) => setName(e.target.value)
    const handleChangeEmail = (e) => setEmail(e.target.value)
    const handleChangePassword = (e) => setPassword(e.target.value)
    const handleChangeOption = (e) => {setOption(e.target.value)}
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
                    for="name"
                    >
                    Nome Completo
                    </Label>
                    <Input
                    id="name"
                    name="name"
                    placeholder="Insira seu nome"
                    type="text"
                    value={name}
                    onChange={handleChangeName}
                    />
                </FormGroup>
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
                    placeholder="Digite seu email"
                    type="email"
                    value={email}
                    onChange={handleChangeEmail}
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
                    placeholder="Insira sua senha"
                    type="password"
                    value={password}
                    onChange={handleChangePassword}
                    />
                </FormGroup>

                {/* Seleção de Mentor ou Mentorando */}
                <FormGroup row tag="fieldset">
                        <legend className="col-form-label col-sm-2">
                            Escolha uma opção:
                        </legend>
                    <Col sm={5}>
                        <FormGroup check>
                        <Input
                            name="option"
                            type="radio"
                            value={option}
                            />
                            {' '}
                            <Label check>Mentor</Label>
                        </FormGroup>
                        <FormGroup check>
                        <Input
                            name="option"
                            type="radio"
                            value={option}
                            />
                            {' '}
                            <Label check>Mentorando</Label>
                        </FormGroup>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Button>Cadastrar</Button>
                </FormGroup>  
            </Form>
        </Fragment>
    )
    
}

export default Register;
