import React, { Fragment } from "react";
import { Container, Row, Col, Modal, FloatingLabel, Button, Form, OverlayTrigger, Tooltip } from "react-bootstrap";

import '../../../globalStyles.css'


function ModalEditarRegistro(props) {

    //we obtain the props
    const modalIsOpen = props.modalIsOpen;
    const handleModalState = props.handleModalState;
    const tipo = props.tipo;
    const handleChange = props.handleChange;
    const data = props.data;

    console.log(data)

    const prueba = () => {
        console.log(data)
    }

    return (
        <Modal show={modalIsOpen} backdrop="static" keyboard={false} size="sm" arial-labelledby="contained-modal-title-vcenter" onHide={handleModalState} centered> {/*onHide={this.cleanModal} */}
            <Form>
                <Modal.Header closeButton>
                    <Modal.Title>Editar {tipo}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {/*Aseguradora*/}
                    <Col xs={12} md={12} className="mb-3">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Aseguradora">
                            <OverlayTrigger
                                placement="right"
                                overlay={
                                    <Tooltip id="tooltip-Aseguradora">Nombre de la aseguradora</Tooltip>
                                }>
                                <Form.Control
                                    type="text"
                                    placeholder="Aseguradora"
                                    value={data.nombre ? data.nombre : ''}
                                    name="nombre"
                                    onChange={handleChange} />
                            </OverlayTrigger>
                        </FloatingLabel>
                    </Col>

                    {/*No. Pacientes*/}
                    <Col xs={12} md={12} className="mb-3">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="No. Pacientes">
                            <OverlayTrigger
                                placement="right"
                                overlay={
                                    <Tooltip id="tooltip-NoPacientes">Número de pacientes atendidos</Tooltip>
                                }>
                                <Form.Control
                                    type="text"
                                    placeholder="No. Pacientes"
                                    value={data.numeroPacientes ? data.numeroPacientes : ''}
                                    name="numeroPacientes"
                                    onChange={handleChange} />
                            </OverlayTrigger>
                        </FloatingLabel>
                    </Col>

                    {/*Ingresos*/}
                    <Col xs={12} md={12} className="mb-3">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Ingresos">
                            <OverlayTrigger
                                placement="right"
                                overlay={
                                    <Tooltip id="tooltip-Ingresos">Ingresos promedio</Tooltip>
                                }>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingresos"
                                    value={data.ingresos ? data.ingresos : ''}
                                    name="ingresos"
                                    onChange={handleChange} />
                            </OverlayTrigger>
                        </FloatingLabel>
                    </Col>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleModalState}>Cancelar</Button>
                    <Button variant="success" onClick={prueba}>Guardar</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )

}

export default ModalEditarRegistro;