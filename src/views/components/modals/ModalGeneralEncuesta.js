import React, { Fragment } from "react";
import { Container, Row, Col, Modal, FloatingLabel, Button, Form, OverlayTrigger, Tooltip } from "react-bootstrap";

import '../../../globalStyles.css'
import RHo from "../../pages/RHo";



function ModalGeneralEncuesta(props) {

    //we obtain the props
    const modalIsOpen = props.modalIsOpen;
    const handleModalState = props.handleModalState
    const surveyIndex = props.surveyIndex
    const encuestas = props.encuestas

    const switchEncuesta = () => {
        //vamos a comparar el id 

        //switch
        switch (surveyIndex) {
            case 1:
                return (
                    <Fragment>
                        <RHo />
                    </Fragment>
                )
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
                break;
            case 6:
                break;
            case 7:
                break;
            case 8:
                break;
            case 9:
                break;
            case 10:
                break;
            case 11:
                break;
            case 12:
                break;
            case 13:
                break;
            case 14:
                break;
        }

        //return regresamos la encuesta
    }

    return (
        <Modal show={modalIsOpen} backdrop="static" keyboard={false} size="xl" arial-labelledby="contained-modal-title-vcenter" onHide={handleModalState} centered> {/*onHide={this.cleanModal} */}
            <Form>
                <Modal.Header closeButton>
                    <Modal.Title className="title-cmh">
                        {encuestas[0].title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>

                            <Col>
                                {switchEncuesta()}
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