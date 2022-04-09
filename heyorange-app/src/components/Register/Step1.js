import { Button } from "reactstrap"
import React from "react"

const Step1 = ({ prevStep, nextStep }) => {
    return (
        <div>
            Step 1
            <Button onClick={prevStep}>
                Voltar
            </Button>
            <Button onClick={nextStep}>
                Prximo
            </Button>
        </div>
    )
}

export default Step1