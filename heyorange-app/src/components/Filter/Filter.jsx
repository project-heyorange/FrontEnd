import React, {useState } from "react";

import "./Filter.css"
import { FormGroup, Button } from "reactstrap";
import { Formik, Form } from "formik";
import Input from "../Input";
import { Navigate, useNavigate } from "react-router-dom";

import Api from "../../services/api";




const Filter = () => {
    const [redirectToMentores, setRedirectToMentores] = useState(false);
    const navigation = useNavigate()
    const filtroMentor = (data, filtro) =>{
        var mentoresFiltrados  = []
        data.forEach(element => {
            if(element.area === filtro.area && element.nivelExperiencia === filtro.nivelExperiencia)
                mentoresFiltrados = [...mentoresFiltrados, element];
        });
        return mentoresFiltrados;
    }

    const handleSubmit = (values) => {
        // Api.post("/usuarios", values).then(({data},values) => {
        //     let mentores = filtroMentor(data,values)
        //     setRedirectToMentores(!redirectToMentores)
        // })
        navigation(`/mentores?area=${values.area}&nivelExperiencia=${values.nivelExperiencia}`)
        console.log(values)
    }

    // if(redirectToMentores) return <Navigate to={`/mentores?area=${data.area}&nivelExperiencia=${data.nivelExperiencia}`}/>

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

