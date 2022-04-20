import React, { Fragment, useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap"

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

                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )

}

export default PageEncuestas;