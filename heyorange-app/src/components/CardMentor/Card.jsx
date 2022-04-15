import React from "react";
import { Card, CardBody, CardText } from "reactstrap";
import "../CardMentor/Card.css"
import { Link } from "react-router-dom";



const CardMentor = ({users}) => {
    return (
        <div>
            {users.length > 0 && (
                <div>
                    {users?.map((user, index) => (
                        <Card key={index} className="CardContainer">
                            <Link className="LinkRota" to="/agendar">
                                <CardBody className="CardBody">
                                    <CardText className="MentorName">
                                        {user.nome}
                                    </CardText>

                                    <CardText className="MentorDetails">
                                        {user.nivelExperiencia}
                                    </CardText>

                                    <CardText className="MentorDetails">
                                        {user.area}
                                    </CardText>

                                    <CardText>
                                        {user.habilidades[0]}/{user.habilidades[1]}/{user.habilidades[2]}
                                        
                                    </CardText>

                                </CardBody></Link>
                        </Card>
                    ))}
                </div>
            )}

        </div>

    )
}

export default CardMentor;




