import { Button } from "reactstrap"
import React from "react"


const Step3 = ({ }) => {
    const onFinish = () => {
        console.log('acabou')
    }
    return (
        <div>
            <legend>
                Hey Orange!
                Cadastro Realizado com Sucesso!
            </legend>
            <Button onClick={onFinish}>
                Concluir
            </Button>
        </div>
    )
}

export default Step3