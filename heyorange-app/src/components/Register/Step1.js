import { Button, FormGroup, Progress} from "reactstrap"
import React from "react"
import RadioButton from "../RadioButton"
import "./Register.css";

const Step1 = ({ prevStep }) => {
    return (
        <div>
            <FormGroup>
                <h2 className="Title">Conte um pouco mais sobre você</h2>
                <p></p><br/>
                <legend>
                    <strong>Qual seu nivel de experiência?</strong>
                </legend>
               
                <RadioButton name="nivelExperiencia" label="Trainee" value="trainee" />
                <RadioButton name="nivelExperiencia" label="Junior" value="junior" />
                <RadioButton name="nivelExperiencia" label="Pleno" value="pleno" />
                <RadioButton name="nivelExperiencia" label="Senior" value="senior" />
            </FormGroup>
            <FormGroup>
                <legend>
                    <strong>Que área você atua?</strong>
                </legend>
                <RadioButton name="area" label="Desenvolvedor" value="desenvolvedor" />
                <RadioButton name="area" label="Design" value="design" />
            </FormGroup>
            <Button onClick={prevStep}>
                Voltar
            </Button>
            <Button type="submit">
                Próximo
            </Button>
        </div>
    )
}

export default Step1