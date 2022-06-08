import React, { Fragment } from "react"; //importamos la libreria react y sus componentes useState
import { Link } from "react-router-dom"; //importamos el componente Link de react-router-dom
//import Logo from "../../assets/cmhLogo.png"; //link or file for CMD logo
import Logo from "../../assets/img/Prospectiva_Digital0.png"
import { Navbar, Container, Nav, Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap'; //importamos los componentes de react-bootstrap
import './headersStyles.css';

const NavbarC = () => {

    //const [isOpen, setIsOpen] = useState(false); //collapse variable that indicate the state is open or close

    //const toggle = () => setIsOpen(!isOpen) //change the state value

    //if (window.location.pathname !== '/') { //we validate that just see the navbar content if the pathname doest'n root position

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
                                                    <img className="navbar-img" src={Logo} alt="" />
                                                </strong>
                                                <div className="navbar-rightarea">

                                                    <Navbar collapseOnSelect expand="lg">
                                                        <Container>


                                                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                                            <Navbar.Collapse id="responsive-navbar-nav">
                                                                <Nav className="me-auto">
                                                                    <Nav.Item>
                                                                        <OverlayTrigger
                                                                            placement="bottom"
                                                                            overlay={
                                                                                <Tooltip id="tooltip-rinion">Ir a encuestas</Tooltip>
                                                                            }>
                                                                            <Link className="nav-link color-text" to='/encuestas'>
                                                                                <strong>Encuestas</strong>
                                                                            </Link>
                                                                        </OverlayTrigger>
                                                                    </Nav.Item>
                                                                    <Nav.Item>
                                                                        <OverlayTrigger
                                                                            placement="bottom"
                                                                            overlay={
                                                                                <Tooltip id="tooltip-rinion">Ir a perfiles</Tooltip>
                                                                            }>
                                                                            <Link className="nav-link color-text" to='/perfiles'>
                                                                                <strong>Perfiles</strong>
                                                                            </Link>
                                                                        </OverlayTrigger>
                                                                    </Nav.Item>
                                                                    <Nav.Item>
                                                                        <Link className="nav-link color-text" to='/prueba'>
                                                                            <strong>Prueba</strong>
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

                    </Col>
                </Row>
            </Container>
        </Fragment>
    )

    /*} else {
        return <Fragment></Fragment>
    }*/

}

export default NavbarC;