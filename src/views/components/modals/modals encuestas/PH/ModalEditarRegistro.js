import React, { Fragment, useEffect, useState } from "react";
import { Container, Row, Col, Modal, FloatingLabel, Button, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import Swal from "sweetalert2";

import '../../../../../globalStyles.css'


function ModalEditarRegistro(props) {

    /**modalIsOpen={modalTriggerEditar}//bandera para abrir cerrar la modal
                    handleModalState={handleModalChangeEditar}//handleState para abrir cerrar la modal */

    //we obtain the props
    const modalIsOpen = props.modalIsOpen;
    const handleModalState = props.handleModalState;
    const data = props.data;
    const index = props.index;
    const handleChangeRegistrosEdit = props.handleChangeRegistrosEdit;
    const elemento = props.elemento;

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
    const updateRegistro = async (e) => {

        e.preventDefault();
        e.stopPropagation();

        await Swal.fire({
            title: `¿Desea actualizar ${elemento.toLowerCase()} ` + dataEdit.nombre + '?',
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
                if (await handleChangeRegistrosEdit(index, dataEdit)) {
                    handleModalState();
                    Swal.fire('¡Registro actualizado!', '', 'success');
                } else {
                    Swal.fire('Oooooops!', `El nombre de ${elemento.toLowerCase()} ya esta registrado.`, 'error');
                }
            }
        })
    }

    return (
        <Modal show={modalIsOpen} backdrop="static" keyboard={false} size="sm" arial-labelledby="contained-modal-title-vcenter" onHide={handleModalState} centered>
            <Form onSubmit={updateRegistro}>
                <Modal.Header className="modal-cmh-header-footer" closeButton>
                    <Modal.Title className="title-cmh">Editar {elemento}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {/*Tipo de elemento*/}
                    <Col xs={12} md={12} className="mb-3">
                        <FloatingLabel
                            controlId="floatingInput"
                            label={elemento}>
                            <OverlayTrigger
                                placement="right"
                                overlay={
                                    <Tooltip id={`tooltip-${elemento}`}>Nombre de {elemento}</Tooltip>
                                }>
                                <Form.Control
                                    type="text"
                                    placeholder={elemento}
                                    value={dataEdit.nombre ? dataEdit.nombre : ''}
                                    name="nombre"
                                    onChange={handleChange} />
                            </OverlayTrigger>
                        </FloatingLabel>
                    </Col>

                    {/*Total Pacientes*/}
                    <Col xs={12} md={12} className="mb-3">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Total Pacientes">
                            <OverlayTrigger
                                placement="right"
                                overlay={
                                    <Tooltip id="tooltip-TotalPacientes">Número total de pacientes con {elemento}</Tooltip>
                                }>
                                <Form.Control
                                    type="text"
                                    placeholder="Total Pacientes"
                                    value={dataEdit.totalPacientes ? dataEdit.totalPacientes : ''}
                                    name="totalPacientes"
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