import React, { Fragment, useState, useEffect } from "react";
import { Container, Col, Row, Accordion, ProgressBar } from "react-bootstrap"

import Encuestas from './json/encuestas.json'

function PageEncuestas() {
    /*
    //we asigned the constans, variables and states
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
                        <h1>Encuestas</h1>
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
                                                            <ProgressBar animated now={encuesta.progress} />
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
        </Fragment>
    )

}

export default PageEncuestas;