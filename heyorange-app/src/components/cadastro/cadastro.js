import React, {Fragment, useState} from "react";
import {Button, Col, Label, Input, Form, FormGroup } from "reactstrap";

const Register = () =>{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleChangeName = (e) => setName(e.target.value)
    const handleChangeEmail = (e) => setEmail(e.target.value)
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
                    for="exampleEmail"
                    >
                    Email
                    </Label>
                    <Input
                    id="exampleEmail"
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
                    for="examplePassword"
                    >
                    Password
                    </Label>
                    <Input
                    id="examplePassword"
                    name="password"
                    placeholder="Insira sua senha"
                    type="password"
                    value={password}
                    onChange={handleChangePassword}
                    />
                </FormGroup>
                <FormGroup row tag="fieldset">
                        <legend className="col-form-label col-sm-2">
                            Escolha uma opção:
                        </legend>
                    <Col sm={5}>
                        <FormGroup check>
                        <Input
                            name="radio2"
                            type="radio"
                            />
                            {' '}
                            <Label check>Mentor</Label>
                        </FormGroup>
                        <FormGroup check>
                        <Input
                            name="radio2"
                            type="radio"
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
