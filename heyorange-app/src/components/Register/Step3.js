import { Button } from "reactstrap"
import React from "react"
import "./Register.css"
import { Link, Navigate } from "react-router-dom"




const Step3 = ({ }) => {
    // const onFinish = () => {
    //     return <Link to="/feed"/>
    // }
    return (
        <div>
            
            <h2 className="Title-Signup">Hey Orange! <br/></h2>
                <h3><strong>Cadastro Realizado com Sucesso!</strong></h3>
            
                <Link to="/feed"><Button className="CreateAccBtn">
                    Concluir 
                </Button></Link>
        </div>
    )
}

export default Step3