import Header from "../../components/Header/Header";
import "../Mentores/Mentores.css"
import CardMentor from "../../components/CardMentor"
import { Link, useLocation } from "react-router-dom";
import Api from "../../services/api";
import { useEffect } from "react";


const Mentores = () => {
    const location = useLocation()
    const filtroMentor = (data, filtro) =>{
        var mentoresFiltrados  = []
        data.forEach(element => {
            if(element.area === filtro.area && element.nivelExperiencia === filtro.nivelExperiencia)
                mentoresFiltrados = [...mentoresFiltrados, element];
        });
        return mentoresFiltrados;
    }
    const handleSubmit = () => {
        const area = location.search.area
        const nivelExperiencia = location.search.nivelExperiencia
        
        Api.get("/usuarios", {area, nivelExperiencia}).then(({data}) => {
            console.log(data)
            let mentores = filtroMentor(data,{area, nivelExperiencia})
            console.log(mentores)
        })
        
    }
    useEffect(() => {handleSubmit()}, [])
    return <>
    <Header />
    <div className = "MentoresWrapper">
        <div className="MentoresImg"></div>
        <div className="MentoresContainer">
            <Link className="LinkVoltar" to="/feed">❮ Voltar</Link>
            <h2 className="MentoresTitle">Mentores Disponíveis: </h2>
            <CardMentor />
            
        </div>
     
    </div>
    </>
  }
  export default Mentores;