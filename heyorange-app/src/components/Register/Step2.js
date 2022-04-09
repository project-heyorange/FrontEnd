import { Button } from "reactstrap"
import React from "react"

const Step2 = ({ prevStep, nextStep }) => {
    return (
        <div>
            Step 2
            <Button onClick={prevStep}>
                Voltar
            </Button>
            <Button onClick={nextStep}>
                Prximo
            </Button>
        </div>
    )
}

export default Step2