import React from "react";



import { Card, CardHeader, Nav, NavItem, NavLink } from "reactstrap";

import "./Header.css"

const Header = () => {
    return (
        <Card className="header">
            <CardHeader>
                <Nav pills>

                    <NavItem>
                        <h5> 👨‍💻 Olá Eduardo</h5>
                    </NavItem>

                    <NavItem className="header-links">
                            <h5>Agenda</h5>
                    </NavItem>

                    <NavItem className="header-links"> 
                        <NavLink href="#">
                        <h5>Sair</h5>
                        </NavLink>
                    </NavItem>
    
                </Nav>

            </CardHeader>

        </Card>

    )
}




export default Header;