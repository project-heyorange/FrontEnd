import React, { useState } from "react";

import "./Filter.css"
import { FormGroup, Button} from "reactstrap";
import { Formik, Form } from "formik";
import Input from "../Input";
import { Link } from "react-router-dom";

// import Api from "../../services/api";




const Filter = () => {

    const [loading, setLoading] = useState(false)

    const requestToBack = async () => {
        setLoading(true)
        await new Promise(resolve => setTimeout(resolve, 5000));
        setLoading(false)
    }


    const handleSubmit = async (values) => {
        // Api.post("Rota de login no back", values).then(({data}) => {if(data == true){"Redireciona"}})
        await requestToBack()
        console.log(values)
    }

    return (
        <Formik
            initialValues={{
                area: "",
                nivelExperiencia: "",
            }}
            onSubmit={handleSubmit}
            loading={loading}
        >
            {() => {
                return (
                    <>

                        <Form
                            className="form-container"
                            id="form"
                        >

                            <FormGroup>
                                <h2 className="FilterTitle">Hey Eduardo!</h2>
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
                            <Button type="submit" disabled={loading}>
                                {loading ? "Carregando..." : "Realizar Busca"}
                            </Button>
                        </Form>
                    </>
                )
            }}
        </Formik>

    )
}

export default Filter;

