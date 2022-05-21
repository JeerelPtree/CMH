import React, { Fragment } from "react";
import { Container, Row, Col, Modal, FloatingLabel, Button, Form, OverlayTrigger, Tooltip } from "react-bootstrap";

import '../../../globalStyles.css'
import { RHo, EyP, SA, Outsourcing, PH, Ops_part1, TC, GP, CAP, SI, Com, Calidad, MKT } from '../encuestas/index_surveys';


function ModalGeneralEncuesta(props) {

    //we obtain the props
    const modalIsOpen = props.modalIsOpen;
    const handleModalState = props.handleModalState;
    const dataEncuesta = props.dataEncuesta;
    const dictionaryEncuestas = [
        {
            id: 1,
            content: <RHo />
        }, {
            id: 2,
            content: <EyP />
        }, {
            id: 3,
            content: <SA />
        }, {
            id: 4,
            content: <PH />
        }, {
            id: 5,
            content: <Ops_part1 />
        }, {
            id: 5.2,
            content: <RHo />
        }, {
            id: 6,
            content: <TC />
        }, {
            id: 7,
            content: <GP />
        }, {
            id: 8,
            content: <CAP />
        }, {
            id: 9,
            content: <SI />
        }, {
            id: 10,
            content: <Com />
        }, {
            id: 11,
            content: <Calidad />
        }, {
            id: 12,
            content: <RHo />
            //content: <MKT />
        }, {
            id: 13,
            content: <RHo />
        }, {
            id: 14,
            content: <RHo />
        }, {
            id: 15,
            content: <Outsourcing />
        }, {
            id: 16,
            content: <RHo />
        }, {
            id: 17,
            content: <RHo />
        }, {
            id: 18,
            content: <RHo />
        }, {
            id: 19,
            content: <RHo />
        }, {
            id: 20,
            content: <RHo />
        }
    ];


    const switchEncuesta = (idEncuesta) => {

        let content = null;

        for (let i = 0; i < dictionaryEncuestas.length; i++) {
            if (dictionaryEncuestas[i].id === idEncuesta) {
                content = dictionaryEncuestas[i].content;
                break;
            }

        }

        return content;
    }

    return (
        <Modal show={modalIsOpen} backdrop="static" keyboard={false} size="xl" arial-labelledby="contained-modal-title-vcenter" onHide={handleModalState} centered>
            <Form>
                <Modal.Header className="modal-cmh-header-footer" closeButton>
                    <Modal.Title className="title-cmh">
                        {dataEncuesta.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>

                            <Col xs={12} md={12}>
                                {
                                    switchEncuesta(dataEncuesta.id) //we evaluate the id from encuesta and we pass to function 
                                }
                            </Col>

                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer className="modal-cmh-header-footer">
                    <Button variant="danger" onClick={handleModalState}>Cancelar</Button>
                    <Button variant="primary">Guardar</Button>
                    <Button variant="success">Enviar</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )

}

export default ModalGeneralEncuesta;