import React, { Fragment, useEffect, useState } from "react";
import { Container, Row, Col, Modal, FloatingLabel, Button, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import Swal from "sweetalert2";

import '../../../globalStyles.css'


function ModalEditarRegistro(props) {

    /**modalIsOpen={modalTriggerEditar}//bandera para abrir cerrar la modal
                    handleModalState={handleModalChangeEditar}//handleState para abrir cerrar la modal */

    //we obtain the props
    const modalIsOpen = props.modalIsOpen;
    const handleModalState = props.handleModalState;
    const data = props.data;
    const index = props.index;
    const handleChangeAseguradorasEdit = props.handleChangeAseguradorasEdit;

    const [dataEdit, setDataEdit] = useState({});

    useEffect(() => {
        setDataEdit(data)
    }, [modalIsOpen])

    const handleChange = async (e) => {

        e.preventDefault();

        await setDataEdit(
            {
                ...dataEdit,
                [e.target.name]: e.target.value

            }
        )
    }

    /**
     * It's a function that updates the data of an insurance company
     * @param e - The event object
     */
    const updateAseguradora = async (e) => {

        e.preventDefault();
        e.stopPropagation();

        await Swal.fire({
            title: '¿Desea actualizar la aseguradora ' + dataEdit.nombre + '?',
            icon: 'warning',
            iconHtml: '?',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#157347',
            cancelButtonColor: '#d33',
            showCancelButton: true,
            showCloseButton: true
        }).then(async (result) => {
            if (result.isConfirmed) {
                await handleChangeAseguradorasEdit(index, dataEdit) ? handleModalState() : Swal.fire('Oooooops!', 'El nombre de la aseguradora ya esta registrado.', 'error');
                Swal.fire('Actualizada!', '', 'success')
            }
        })
    }

    return (
        <Modal show={modalIsOpen} backdrop="static" keyboard={false} size="sm" arial-labelledby="contained-modal-title-vcenter" onHide={handleModalState} centered>
            <Form onSubmit={updateAseguradora}>
                <Modal.Header className="modal-cmh-header-footer" closeButton>
                    <Modal.Title className="title-cmh">Editar Aseguradora</Modal.Title>
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
                                    value={dataEdit.nombre ? dataEdit.nombre : ''}
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
                                    value={dataEdit.numeroPacientes ? dataEdit.numeroPacientes : ''}
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
                                    value={dataEdit.ingresos ? dataEdit.ingresos : ''}
                                    name="ingresos"
                                    onChange={handleChange} />
                            </OverlayTrigger>
                        </FloatingLabel>
                    </Col>

                </Modal.Body>
                <Modal.Footer className="modal-cmh-header-footer">
                    <Button variant="danger" onClick={handleModalState}>Cancelar</Button>
                    <Button type="submit" variant="success">Guardar</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )

}

export default ModalEditarRegistro;