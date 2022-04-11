import React from "react";

import { Card, CardHeader, Nav, NavItem, NavLink } from "reactstrap";

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
                        <a className="Nav-links" href="#"> Agenda</a>
                        <a className="Nav-links" href="#">Sair</a>
                    </NavItem>
                    {/* </Nav> */}
            </CardHeader>

        </Card>

    )
}




export default Header;