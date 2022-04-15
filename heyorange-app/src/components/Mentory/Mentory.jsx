import React from "react"
import { Link } from "react-router-dom"
import { Card, CardBody, CardTitle, Button } from "reactstrap"

import "./Mentory.css"

const Mentory = () => {
    return (
        <div>

            <div className="container-mentoria">
                <Card className="container-card">
                    <CardBody className="ScheduleContainer">
                        <CardTitle>
                            <h5 className="MentoryTitle">Confirmado!</h5>
                        </CardTitle>

                    <CardTitle>
                        <h3>Mentoria Marcada com Sucesso!</h3>
                    </CardTitle>

                    
                    </CardBody>
                </Card>
                <div className="botoes">
                    <Link to="/feed"><Button className="BtnBusca">Busca</Button></Link>
                    <Link to="/agendar"><Button className="BtnAgenda" >Agenda</Button></Link>
                </div>

            </div>
        </div>
    )
}


export default Mentory