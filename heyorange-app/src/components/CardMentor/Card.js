import React from "react";
import { Card, CardBody, CardText } from "reactstrap";

const teste ={
    nome: "mentor",
    area: "front",
    nivel: 30,
    habilidades: "teste"
}

const CardMentor = () => {
    return (
        <div>
            <h4>Mentores Disponíveis:</h4>
            {
                JSON.parse(teste).then(
                    dados => dados.map(
                        (user,index) => {
                            <Card key={index}>
                                <CardBody>
                                    <CardText>
                                    {user.nome}
                                    </CardText>

                                    <CardText>
                                        {user.area}
                                    </CardText>

                                    <CardText>
                                        {user.nivel}
                                    </CardText>

                                    <CardText>
                                        {user.habilidades}
                                    </CardText>

                                </CardBody>
                            </Card>
                        }
                    )
                )
            }
                

        </div>

    )
}

export default CardMentor




