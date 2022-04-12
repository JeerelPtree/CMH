import React, { Fragment, useState } from "react"; //importamos la libreria react y sus componentes
import { Link } from "react-router-dom"; //importamos el componente Link de react-router-dom
import Logo from "../../assets/cmhLogo.png"; //link or file for CMD logo
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap'; //importamos los componentes de react-bootstrap
import './headersStyles.css';

const NavbarC = () => {

    //const [isOpen, setIsOpen] = useState(false); //collapse variable that indicate the state is open or close

    //const toggle = () => setIsOpen(!isOpen) //change the state value

    if (window.location.pathname !== '/') { //we validate that just see the navbar content if the pathname doest'n root position

        return (
            <header className="navbar-header navbar-haslayaout">
                <div className="navbar-navigationarea">
                    <Container>
                        <Row>
                            <Col sm={12} md={12} lg={12}>
                                <div className="hidpi-logowrap">
                                    <strong className="navbar-logo">
                                        <img className="navbar-img" src={Logo} alt="" />
                                    </strong>
                                    <div className="navbar-rightarea">

                                        <Navbar collapseOnSelect expand="lg">
                                            <Container>


                                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                                <Navbar.Collapse id="responsive-navbar-nav">
                                                    <Nav className="me-auto">
                                                        <Nav.Item>
                                                            <Link className="nav-link color-text" to='/Encuestas'>
                                                                <strong>Encuestas</strong>
                                                            </Link>
                                                        </Nav.Item>
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
        )

    } else {
        return <Fragment></Fragment>
    }

}

export default NavbarC;