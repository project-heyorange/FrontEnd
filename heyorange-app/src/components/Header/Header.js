import React from "react";

import { Card, CardHeader, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from 'react-router-dom'

import "./Header.css";

const Header = () => {
    return (
        <Card>
            <CardHeader className="Header">
                {/* <Nav className="HeaderItems"> */}
                    <NavItem className="ProfileName">
                        <h5 className="ProfileTitle"> 👤 Olá Eduardo</h5>
                    </NavItem>

                    <NavItem className="header-links">
                        <Link to="/agendar"className="Nav-links" > Agenda</Link>
                        <Link to="/"className="Nav-links" >Sair</Link>
                    </NavItem>
                    {/* </Nav> */}
            </CardHeader>

        </Card>

    )
}




export default Header;