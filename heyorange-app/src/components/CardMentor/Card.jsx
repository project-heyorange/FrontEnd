import React from "react";
import { useEffect, useState } from "react";
import { Card, CardBody, CardText } from "reactstrap";
import Api from "../../services/api";
import "../CardMentor/Card.css"
import { Link } from "react-router-dom";



const CardMentor = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        Api.get("/").then(({ data }) => {
            setUsers([data])
        })
        // eslint-desable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        console.log(users)
    }, [users])



    return (
        <div>
            {users.length > 0 && (
                <div>
                    {users?.map((user, index) => (
                        <Card key={index} className="CardContainer">
                            <Link className="LinkRota" to="/agendar">
                                <CardBody className="CardBody">
                                    <CardText className="MentorName">
                                        {user.name}
                                    </CardText>

                                    <CardText className="MentorDetails">
                                        {user.nivelExperiencia}
                                    </CardText>

                                    <CardText className="MentorDetails">
                                        {user.area}
                                    </CardText>

                                    <CardText>
                                        {user.habilidades}
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




