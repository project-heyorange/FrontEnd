import { Button } from "reactstrap"
import React from "react"
import Checkbox from "../Checkbox"

const Step1 = ({ prevStep, nextStep }) => {
    return (
        <div>
            <Checkbox/>
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