import React from "react";
import { Card, CardHeader, NavItem } from "reactstrap";
import { Link } from 'react-router-dom'
import "./Header.css";

const Header = () => {
    return (
        <Card>
            <CardHeader className="Header">
                    <NavItem className="ProfileName">
                        <h5 className="ProfileTitle"> Olá Usuário</h5>
                    </NavItem>

                    <NavItem className="header-links">
                        <Link to="/agendar"className="Nav-links" > Agenda</Link>
                        <Link to="/"className="Nav-links" >Sair</Link>
                    </NavItem>
            </CardHeader>
        </Card>
    )
}

export default Header;