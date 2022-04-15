import { Button, FormGroup } from "reactstrap"
import React from "react"
import Input from "../Input"

const Step2 = ({ prevStep, loading }) => {
    return (
        <div>
            <h2 className="Title-Signup">Conte um pouco mais sobre você</h2>
            <p></p>
            <br/>
            <h6><strong>Digite até 3 Habilidades que você possuí (Exemplo: UI, Java, UX, Wireframe, AI, Angular, etc...)</strong></h6><br/>

            <FormGroup>
                <Input
                    name="habilidade1"
                    className="input"
                />
                <Input
                    name="habilidade2"
                    className="input"
                />
                <Input
                    name="habilidade3"
                    className="input"
                />
            </FormGroup>
            <Button className="PrevBtn" onClick={prevStep}>
                Voltar
            </Button>
            <Button className="NextBtn" type="submit">
               Próximo
            </Button>
        </div>
    )
}

export default Step2