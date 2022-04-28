import React, { Fragment } from "react";
import { Container, Row, Col, Modal, FloatingLabel, Button, Form, OverlayTrigger, Tooltip } from "react-bootstrap";

import '../../../globalStyles.css'
import { RHo, EyP, SA } from '../../../index_surveys';



function ModalGeneralEncuesta(props) {

    //we obtain the props
    const modalIsOpen = props.modalIsOpen;
    const handleModalState = props.handleModalState;
    const dataEncuesta = props.dataEncuesta;
    //const surveyIndex = props.surveyIndex
    //const encuestas = props.encuestas

    //
    const dictionaryEncuestas = [
        {
            id: 1,
            content: <RHo />
        },
        {
            id: 2,
            content: <EyP />
        },
        {
            id: 3,
            content: <SA />
        }
    ]
    //


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
        <Modal show={modalIsOpen} backdrop="static" keyboard={false} size="xl" arial-labelledby="contained-modal-title-vcenter" onHide={handleModalState} centered> {/*onHide={this.cleanModal} */}
            <Form>
                <Modal.Header closeButton>
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
                <Modal.Footer>
                    <Button variant="danger" onClick={handleModalState}>Cancelar</Button>
                    <Button variant="primary">Guardar</Button>
                    <Button variant="success">Enviar</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )

}

export default ModalGeneralEncuesta;