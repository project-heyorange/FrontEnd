import React from "react";
import { Card, CardBody, CardText } from "reactstrap";
import "./ScheduleCards.css"

const ScheduleCards = () => {
    return (
        <div>

            {/* <Card className="container" color="light"> */}

                <CardBody className="body-container">

                    <CardText className="row">
                        <div className="col-4">
                            <p><strong >15/Abril<br />2022</strong></p>
                        </div>
                        <div className="col-6">
                            <strong className="row">Anna</strong>
                            <span className="hora">🕒 15:00 - 15:30</span>
                        </div>
                    </CardText>
                </CardBody>
            {/* </Card> */}


            {/* <Card className="container" color="light"> */}
                <CardBody className="body-container">

                    <CardText className="row">
                        <div className="col-4">
                            <p><strong >16/Abril<br />2022</strong></p>
                        </div>
                        <div className="col-6">
                            <strong className="row">Anna</strong>
                            <span className="hora">🕒 15:00 - 15:30</span>
                        </div>
                    </CardText>
                </CardBody>
            {/* </Card> */}

        </div>

    )
}

export default ScheduleCards