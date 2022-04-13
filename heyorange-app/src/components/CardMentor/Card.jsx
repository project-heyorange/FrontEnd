import React from "react";
import { useEffect, useState } from "react";
import { Card, CardBody, CardText } from "reactstrap";
import Api from "../../services/api";
import "../CardMentor/Card.css"
import { Link } from "react-router-dom";



const CardMentor = () => {

    const [user, setUser] = useState([]);

    useEffect(() => {
        Api.get("filter").then(({ data }) => {
            setUser(data)
        })
        // eslint-desable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <div>
            {/* <Card className="CardContainer"> */}
                    <CardBody className="CardBody">
                        <CardText className="MentorName">
                            Eduardo
                        </CardText>

                        <CardText className="MentorDetails">
                            Desenvolvedor
                        </CardText>

                        <CardText className="MentorDetails">
                            Pleno
                        </CardText>

                        <CardText className="MentorDetails">
                            Java / Python / React
                        </CardText>

                    </CardBody>
                {/* </Card> */}

            {/* {user?.map((user, index) => {
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
            })}) */}

        </div>

    )
}

export default CardMentor;




