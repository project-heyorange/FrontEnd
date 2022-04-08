import React, { useState } from "react";
import { Button, Col, Label, Input, Form, FormGroup } from "reactstrap";
import FloatingLabel from "react-bootstrap-floating-label";

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
            <h1>Cadastre-se!</h1><br/>
            {/* Input para o Nome */}
            <Form inline onSubmit={handleSubmit}>
                <FormGroup floating>
                    <FloatingLabel
                        label="Nome"
                        className="me-sm-2"
                        for="name"
                    >
                        <Input
                            id="name"
                            name="name"
                            type="text"
                            value={name}
                            onChange={handleChangeName}
                        />
                    </FloatingLabel>
                </FormGroup>

                {/* Input para o Email */}
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
                {/* Confirmação de Email */}
                <FormGroup>
                    <FloatingLabel
                        label="Confirmar Email"
                        className="me-sm-2"
                        for="confirmeEmail"
                    >
                        <Input
                            id="confirmeEmail"
                            name="confirmeEmail"
                            type="confirmeEmail"
                            
                            
                        />
                    </FloatingLabel>
                </FormGroup>


                <FormGroup floating className="mb-2 me-sm-2 mb-sm-0">
                    <FloatingLabel
                        label="Crie sua Senha"
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
                                value={"Mentor"}
                                onChange={handleChangeOption}
                            />
                            {' '}
                            <Label check>Mentor</Label>
                        </FormGroup>
                        <FormGroup check>
                            <Input
                                name="option"
                                type="radio"
                                value={"Mentorando"}
                                onChange={handleChangeOption}
                            />
                            {' '}
                            <Label check>Mentorando</Label>
                        </FormGroup>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <br/>
                    <Button>Cadastrar</Button>
                </FormGroup>
            </Form>
        </>
    )

}

export default Register;
