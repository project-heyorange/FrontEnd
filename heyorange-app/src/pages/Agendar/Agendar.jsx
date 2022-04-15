import React from "react"
import Header from "../../components/Header/Header";
import "../Agendar/Agendar.css"
import ScheduleCards from "../../components/ScheduleCards"
import { Link } from "react-router-dom";

const Agendar = () => {
  return <>
  <Header />
  <div className = "DatesWrapper">
        <div className="DatesImg"></div>
        <div className="container">
            <Link className="LinkVoltar" to="/feed">❮ Voltar</Link>
            <h2 className="DatesTitle">Datas Disponíveis: </h2>
            <ScheduleCards />
            
        </div>
    </div>
  
  </>
}
export default Agendar;