import React from "react"
import { Link } from "react-router-dom"
import { Card, CardBody, CardText, CardTitle, Button } from "reactstrap"

import "./Mentory.css"

const Mentory = () => {
    return (
        <div>

            <div className="container-mentoria">
                <Card className="container-card">
                    <CardBody className="ScheduleContainer">
                        <CardTitle>
                            <h5>Confirmado!</h5>
                        </CardTitle>

                        <CardText>
                            Sua Mentoria será em<br />
                            18 DE ABRIL - SEGUNDA-FEIRA<br />
                            16:30 - 17:00
                        </CardText>

                        <CardText>
                            Você será mentorado(a) por
                        </CardText>

                        <div>

                        </div>

                        <CardText>
                            Lara<br />
                            UX Designer<br />
                            Sênior<br />
                            Research / Protórtipos / UI<br />
                            anna@FCamara.com<br />

                        </CardText>
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