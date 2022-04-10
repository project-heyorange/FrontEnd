import { Button } from "reactstrap"
import React from "react"
import RadioButton from "../RadioButton"

const Step2 = ({ prevStep, loading }) => {
    return (
        <div>
            step 2
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