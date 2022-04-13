import Header from "../../components/Header/Header";
import "../Mentores/Mentores.css"
import CardMentor from "../../components/CardMentor"


const Mentores = () => {
    return <>
    <Header />
    <div className = "MentoresWrapper">
        <div className="MentoresImg"></div>
        <div className="container">
            <h2 className="MentoresTitle">Mentores Disponíveis: </h2>
            <CardMentor />
            <CardMentor />
            <CardMentor />
            
        </div>
     
    </div>
    </>
  }
  export default Mentores;