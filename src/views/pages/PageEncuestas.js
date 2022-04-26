import React, { Fragment, useState, useEffect } from "react";
import { Container, Col, Row, Accordion, ProgressBar, Button } from "react-bootstrap"
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import Encuestas from './json/encuestas.json'
import ModalGeneralEncuesta from "../components/modals/ModalGeneralEncuesta";

//import styles from css
import '../../globalStyles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PageEncuestas() {

    //we asigned the constans, variables and states
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const handleModalState = () => {

        //we modified the state modalIsOpen
        setModalIsOpen(!modalIsOpen);

    }

    /*
    const [encuestas, setEncuestas] = useState([])

    useEffect(() => {
        getContentEncuestas();
    }, []);

    const getContentEncuestas = async () => {
        const url = "" //end point of encuestas
        let config = {
            method: "GET",
            url: url,
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.is_security,
                "Content-Type": "application/json",
            },
        };
    }*/

    return (
        <Fragment>
            <Container className="mt-3">
                <Row>
                    <Col xs={12} md={12}>

                        <h1 className="title-cmh mb-3">Encuestas</h1>

                        <Row>
                            <Col xs={12} md={12}>
                                <Accordion>
                                    {
                                        Encuestas.map((encuesta) => {
                                            return (
                                                <Fragment>
                                                    <Accordion.Item eventKey={encuesta.id} key={encuesta.id}>
                                                        <Accordion.Header>{encuesta.title}</Accordion.Header>
                                                        <Accordion.Body>
                                                            <Container>
                                                                <Row>
                                                                    <Col xs={12} md={12}>
                                                                        <p className="text-center title-cmh">Progreso: <strong>{encuesta.progress}%</strong></p>
                                                                    </Col>
                                                                    <Col xs={12} md={12}>
                                                                        <ProgressBar animated now={encuesta.progress} />
                                                                    </Col>
                                                                    <Col xs={12} md={12} className="mt-3">
                                                                        <Button variant="primary" onClick={handleModalState}>
                                                                            <span className="margin-right"> <FontAwesomeIcon icon={faClipboard} /></span> Ver / Responder</Button>
                                                                    </Col>
                                                                </Row>
                                                            </Container>

                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                </Fragment>
                                            )
                                        })
                                    }
                                </Accordion>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <ModalGeneralEncuesta
                modalIsOpen={modalIsOpen}
                handleModalState={handleModalState}
            />
        </Fragment>
    )

}

export default PageEncuestas;