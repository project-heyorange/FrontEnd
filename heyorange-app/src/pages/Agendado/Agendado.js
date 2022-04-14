import React from "react";

import Header from "../../components/Header/Header";
import "./Agendado.css"
import Mentory from "../../components/Mentory/Mentory";

const Agendado = () => {

    return (
        <>
            <Header />
            <div className="DatesWrapper">
                <div className="DatesImg"></div>
                <div className="container">
                    <h2 className="DatesTitle">Uhuuuuuu!  </h2>
                    <Mentory/>
                </div>
            </div>
        </>
    )
}

export default Agendado