import React, { Fragment, useEffect, useState } from "react";
import { Col, Modal, FloatingLabel, Button, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import Swal from "sweetalert2";
//TODO: Investigar como hacer validaciones con Yup o con Formik para que no pongan campos vacios y replicarlo en los cuestionarios
//https://www.npmjs.com/package/yup
//https://formik.org/
//No puede haber seguradoras con el mismo nombre
import { useFormik } from 'formik';
import * as yup from 'yup'

import '../../../../../globalStyles.css'



function ModalAdd(props) {

    //we obtain the props
    const modalIsOpen = props.modalTriggerAdd;
    const handleModalState = props.handleModalChangeAdd;
    const handleChange = props.handleChange;
    const handleChangeAseguradoras = props.handleChangeAseguradoras;

    const [form, setForm] = useState({});

    const handleChangeModal = async (e) => {

        e.persist()

        await setForm(
            {
                ...form,
                [e.target.name]: e.target.value

            }
        )

    }


    /**
     * It saves the data of the form to the database
     */
    const saveAseguradora = async () => {

        await handleChangeAseguradoras(form) ? handleModalState() : Swal.fire('Oooooops!', 'El nombre de la aseguradora ya esta registrado.', 'error');

    }

    /* A hook that is called when the component is mounted and when the modalIsOpen state changes. */
    useEffect(() => {
        setForm({})
    }, [modalIsOpen])

    return (
        <Modal show={modalIsOpen} backdrop="static" keyboard={false} size="sm" arial-labelledby="contained-modal-title-vcenter" onHide={handleModalState} centered>
            <Form>
                <Modal.Header closeButton>
                    <Modal.Title className="title-cmh">Agregar Aseguradora</Modal.Title>
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
                                    value={form.nombre ? form.nombre : ''}
                                    name="nombre"
                                    onChange={handleChangeModal} />
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
                                    type="number"
                                    placeholder="No. Pacientes"
                                    value={form.numeroPacientes ? form.numeroPacientes : ''}
                                    name="numeroPacientes"
                                    onChange={handleChangeModal} />
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
                                    type="number"
                                    placeholder="Ingresos"
                                    value={form.ingresos ? form.ingresos : ''}
                                    name="ingresos"
                                    onChange={handleChangeModal} />
                            </OverlayTrigger>
                        </FloatingLabel>
                    </Col>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleModalState}>Cancelar</Button>
                    <Button variant="success" onClick={saveAseguradora}>Guardar</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )

}

export default ModalAdd;