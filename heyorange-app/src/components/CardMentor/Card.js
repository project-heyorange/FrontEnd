import React from "react";
import { useEffect, useState } from "react/cjs/react.production.min";
import { Card, CardBody, CardText } from "reactstrap";
import Api from "../../services/api";



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
            <h4>Mentores Disponíveis:</h4>
            {user?.map((user, index) => {
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
            })})

        </div>

    )
}

export default CardMentor;




