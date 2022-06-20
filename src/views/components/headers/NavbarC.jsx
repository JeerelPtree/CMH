import React, { Fragment } from "react"; //importamos la libreria react y sus componentes useState
import { Link } from "react-router-dom"; //importamos el componente Link de react-router-dom
//import Logo from "../../assets/cmhLogo.png"; //link or file for CMD logo
import Logo from "../../assets/img/Prospectiva_Digital0.png"
import { Navbar, Container, Nav, Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap'; //importamos los componentes de react-bootstrap
import './headersStyles.css';

const NavbarC = () => {

    const classLogo = window.screen.availWidth < 768 ? "responsive-logo" : "full-screen-logo";

    return (
        <Fragment>
            <Container>
                <Row>
                    <Col xs={12} md={12}>
                        <header className="navbar-header navbar-haslayaout">
                            <div className="navbar-navigationarea mt-4">
                                <Container>
                                    <Row>
                                        <Col sm={12} md={12} lg={12}>
                                            <div className="hidpi-logowrap">
                                                <strong className="navbar-logo">
                                                    <img className={classLogo} src={Logo} alt="" />
                                                </strong>
                                                <div className="navbar-rightarea">

                                                    <Navbar collapseOnSelect expand="lg">
                                                        <Container>


                                                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                                            <Navbar.Collapse id="responsive-navbar-nav">
                                                                <Nav className="me-auto">

                                                                    <NavItem
                                                                        label="Encuestas"
                                                                        path="encuestas" />

                                                                    <NavItem
                                                                        label="Perfiles"
                                                                        path="perfiles" />

                                                                    <NavItem
                                                                        label="Hospitales"
                                                                        path="hospitales" />

                                                                    <NavItem
                                                                        label="Pruebas"
                                                                        path="prueba" />


                                                                </Nav>
                                                            </Navbar.Collapse>
                                                        </Container>
                                                    </Navbar>

                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </header>

                    </Col>
                </Row>
            </Container>
        </Fragment>
    )

    /*} else {
        return <Fragment></Fragment>
    }*/

}

function NavItem(props) {

    const { label, path } = props

    return (
        <Fragment>
            <Nav.Item>
                <OverlayTrigger
                    placement="bottom"
                    overlay={
                        <Tooltip id="tooltip-rinion">Ir a {label}</Tooltip>
                    }>
                    <Link className="nav-link color-text" to={`/${path}`}>
                        <strong>{label}</strong>
                    </Link>
                </OverlayTrigger>
            </Nav.Item>
        </Fragment>
    )

}

export default NavbarC;