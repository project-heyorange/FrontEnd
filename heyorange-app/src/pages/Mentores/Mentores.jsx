import Header from "../../components/Header/Header";
import "../Mentores/Mentores.css"
import CardMentor from "../../components/CardMentor"
import { Link } from "react-router-dom";
import Api from "../../services/api";
import { useEffect, useState } from "react";
import useQuery from "../../hooks/useQuery";


const Mentores = () => {
    const query = useQuery()
    const [mentores, setMentores]=useState([])
    const handleSubmit = () => {
        const area = query.get("area")
        const nivelExperiencia = query.get("nivelExperiencia")
        
        Api.get("/usuarios", {area, nivelExperiencia}).then(({data}) => {
            const mentores = data.filter(user => {
                return user.area ===area && user.nivelExperiencia ===nivelExperiencia
            })
            setMentores(mentores)

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
            <CardMentor users={mentores}/>
            
        </div>
     
    </div>
    </>
  }
  export default Mentores;