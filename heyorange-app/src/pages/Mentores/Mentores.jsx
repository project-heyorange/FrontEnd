import Header from "../../components/Header/Header";
import "../Mentores/Mentores.css"
import CardMentor from "../../components/CardMentor"
import { Link } from "react-router-dom";


const Mentores = () => {
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