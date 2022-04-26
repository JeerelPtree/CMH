import React from "react";
import { Container, Row, Col, Modal, FloatingLabel, Button, Form, OverlayTrigger, Tooltip } from "react-bootstrap";

import '../../../globalStyles.css'



function ModalGeneralEncuesta(props) {

    //we obtain the props
    const modalIsOpen = props.modalIsOpen;
    const handleModalState = props.handleModalState

    const switchEncuesta = () => {
        //vamos a comparar el id 

        //switch

        //return regresamos la encuesta
    }

    return (
        <Modal show={modalIsOpen} backdrop="static" keyboard={false} size="xl" arial-labelledby="contained-modal-title-vcenter" onHide={handleModalState} centered> {/*onHide={this.cleanModal} */}
            <Form>
                <Modal.Header closeButton>
                    <Modal.Title className="title-cmh">
                        AQUI TITULO
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>

                            <Col>
                                Contenido
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