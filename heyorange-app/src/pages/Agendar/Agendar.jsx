import React from "react"
import Header from "../../components/Header/Header";
import "../Agendar/Agendar.css"
import ScheduleCards from "../../components/ScheduleCards"

const Agendar = () => {
  return <>
  <Header />
  <div className = "DatesWrapper">
        <div className="DatesImg"></div>
        <div className="container">
            <h2 className="DatesTitle">Datas Disponíveis: </h2>
            {/* <CardMentor />
            <CardMentor />
            <CardMentor /> */}
            <ScheduleCards />
            
        </div>
     
    </div>
  
  </>
}
export default Agendar;