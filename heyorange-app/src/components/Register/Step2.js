import { Button, FormGroup } from "reactstrap"
import React from "react"
import Input from "../Input"

const Step2 = ({ prevStep, loading }) => {
    return (
        <div>
            <h2 className="Title">Conte um pouco mais sobre você</h2>
            <p></p>
            <br/>
            <h5><strong>Digite até 3 Habilidades que você possuí (Exemplo: UI, Java, UX, Wireframe, AI, Angular, etc...)</strong></h5><br/>

            <FormGroup>
                <Input
                    name="habilidade1"
                    className="mb-3"
                />
                <Input
                    name="habilidade2"
                    className="mb-3"
                />
                <Input
                    name="habilidade3"
                    className="mb-3"
                />
            </FormGroup>
            <Button onClick={prevStep} disabled={loading}>
                Voltar
            </Button>
            <Button type="submit" disabled={loading}>
                {loading ? "Carregando..." : "Próximo"}
            </Button>
        </div>
    )
}

export default Step2