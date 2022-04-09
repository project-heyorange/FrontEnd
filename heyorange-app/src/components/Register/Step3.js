import { Button } from "reactstrap"
import React from "react"

const Step3 = ({ prevStep, nextStep }) => {
    return (
        <div>
            Step 3
            <Button onClick={prevStep}>
                Voltar
            </Button>
            <Button onClick={nextStep}>
                Prximo
            </Button>
        </div>
    )
}

export default Step3