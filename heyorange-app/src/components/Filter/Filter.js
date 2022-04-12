import React from "react";

import "./Filter.css"
import { FormGroup, Button, Label } from "reactstrap";
import { Formik, Form } from "formik";
import Input from "../Input";



const Filter = () => {

    const handleSubmit = (values) => {
        console.log(values)
    }

    return (
        <Formik
            initialValues={{
                area: "",
                nivelExperiencia: "",
            }}
            onSubmit={handleSubmit}
        >
            {() => {
                return (
                    <Form
                        className="container"
                        id="form"
                    >
                        <FormGroup>
                            <h2>Bem Vindo ao Hey Orange!</h2>
                            <br />
                            <h5>Encontre um mentor: </h5><br />
                            <Label>Especialidade:</Label>
                            <Input
                                id="area"
                                name="area"
                                type="select"

                            >
                                <option value="" readOnly>
                                    Selecione
                                </option>
                                <option value="Design">
                                    Design
                                </option>
                                <option>
                                    Desenvolvedor
                                </option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Experiência:</Label>
                            <Input
                                id="nivelExperiencia"
                                name="nivelExperiencia"
                                type="select"

                            >
                                <option value="" readOnly>
                                    Selecione
                                </option>
                                <option value="Trainee">
                                    Trainee
                                </option>
                                <option value="Junior">
                                    Júnior
                                </option>
                                <option value="Pleno">
                                    Pleno
                                </option>
                                <option value="Sênior">
                                    Sênior
                                </option>
                            </Input>
                        </FormGroup>
                        <br />
                        <Button type="submit">
                            Realizar Busca
                        </Button>
                    </Form>
                )
            }}
        </Formik>

    )
}

export default Filter;

