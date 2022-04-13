import React from "react";
import { Card, CardBody, CardText } from "reactstrap";

const ScheduleCards = () => {
    return (
        <div>
            <h4>Horários Disponíveis:</h4>
                <Card>
                    <CardBody>

                        <CardText>
                           Data
                        </CardText>

                        <CardText>
                            Nome do mentor
                        </CardText>

                        <CardText>
                            Horário
                        </CardText>

                        <CardText>
                           icone de pendente
                        </CardText>

                    </CardBody>
                </Card>

        </div>

    )
}

export default ScheduleCards