import React from "react"
import { Card, CardBody, CardText, CardTitle, Button, CardImg } from "reactstrap"
import "./Mentory.css"

const Mentory = () => {
    return (
        <div className="row">
            <div className="col-6"><p>Olá</p></div>
            <div className="col-6 container">
            <h5>Agendamento</h5>
            <Card className="container-card">
                <CardBody>
                    <CardTitle>
                        <h5>Confirmado!</h5>
                    </CardTitle>

                    <CardText>
                        Sua Mentoria será em<br/>
                        18 DE ABRIL - SEGUNDA-FEIRA<br/>
                        16:30 - 17:00
                    </CardText>

                    <CardText>
                        Você será mentorado(a) por
                    </CardText>

                   <div>
                       
                   </div>

                   

                    <CardText>
                    Lara<br/>
                    UX Designer<br/>
                    Sênior<br/>
                    Research / Protórtipos / UI<br/>
                    anna@FCamara.com<br/>

                    </CardText>
                </CardBody>
            </Card>
            <Button className="botao">Home</Button>
            </div>
        </div>
    )
}


export default Mentory