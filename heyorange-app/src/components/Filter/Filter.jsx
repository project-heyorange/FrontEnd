import React from "react";

import "./Filter.css"
import { FormGroup, Button } from "reactstrap";
import { Formik, Form } from "formik";
import Input from "../Input";
import { useNavigate } from "react-router-dom";

const Filter = () => {
    const navigation = useNavigate()
    const handleSubmit = (values) => {
        navigation(`/mentores?area=${values.area.toLowerCase()}&nivelExperiencia=${values.nivelExperiencia.toLowerCase()}`)
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
                            className="form-container"
                            id="form"
                        >

                            <FormGroup>
                                <h2 className="FilterTitle">Hey Usuário!</h2>
                                <h5 className="FilterSubtitle">Seja muito bem-vindo a plataforma de mentoria do grupo FCamara.</h5>

                                <h5 className="FilterPhrase">Encontre um mentor: </h5>
                                <Input className="InputText"
                                    id="area"
                                    name="area"
                                    type="select"

                                >
                                    <option value="" disabled>
                                        Especialidade
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
                                <Input className="InputText"
                                    id="nivelExperiencia"
                                    name="nivelExperiencia"
                                    type="select"

                                >
                                    <option value="" disabled>
                                        Experiência
                                    </option>
                                    <option value="trainee">
                                        Trainee
                                    </option>
                                    <option value="junior">
                                        Júnior
                                    </option>
                                    <option value="pleno">
                                        Pleno
                                    </option>
                                    <option value="senior">
                                        Sênior
                                    </option>
                                </Input>
                            </FormGroup>
                            <br />
                            <Button className="SearchBtn" type="submit">
                                Realizar Busca
                            </Button>
                        </Form>
                    
                )
            }}
        </Formik>

    )
}

export default Filter;

