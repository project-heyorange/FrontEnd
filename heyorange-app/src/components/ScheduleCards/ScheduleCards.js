import React from "react";
import { Card, CardBody, CardText } from "reactstrap";

const ScheduleCards = () => {
    return (
        <div>
            <h4>Horários Disponíveis:</h4>
            <Card className="container" color="light">
                
                <CardBody className="body-container">

                    <CardText>
                        <p><strong>15/Abril</strong></p>
                        <p><strong>2022</strong></p>
                    </CardText>

                    <CardText>
                        <strong>Anna</strong>
                    </CardText>

                    <CardText>
                        🕒 15:00 - 15:30
                    </CardText>

                    <CardText>
                        ⚠️ Pendente
                    </CardText>

                </CardBody>


            </Card>

            <Card className="container" color="light">
                <CardBody className="body-container">

                    <CardText>
                        <p><strong>16/Abril</strong></p>
                        <p><strong>2022</strong></p>
                    </CardText>

                    <CardText>
                        <strong>Henrique</strong>
                    </CardText>

                    <CardText>
                        🕒 15:00 - 15:30
                    </CardText>

                    <CardText>
                        ⚠️ Pendente
                    </CardText>

                </CardBody>


            </Card>

        </div>

    )
}

export default ScheduleCards