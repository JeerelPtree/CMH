import React, { Fragment, useEffect, useState } from "react";
import { Col, Modal, FloatingLabel, Button, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import Swal from "sweetalert2";

import '../../../../../globalStyles.css'

//TODO: pasar los inputs a los componentes, replicar este ejemplo en las encuestas que ya venimos haciendo

function ModalAdd(props) {

    //we obtain the props
    const modalIsOpen = props.modalTriggerAdd;
    const handleModalState = props.handleModalChangeAdd;
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
     * It takes an event, prevents the default behavior, stops the propagation of the event, and then
     * calls the handleChangeAseguradoras function, passing the form as an argument. If the
     * handleChangeAseguradoras function returns true, then the handleModalState function is called. If
     * the handleChangeAseguradoras function returns false, then a sweet alert is displayed
     * @param e - The event object
     */
    const saveAseguradora = async (e) => {

        e.preventDefault();
        e.stopPropagation();

        await handleChangeAseguradoras(form) ? handleModalState() : Swal.fire('Oooooops!', 'El nombre de la aseguradora ya esta registrado.', 'error');

    }

    /* A hook that is called when the component is mounted and when the modalIsOpen state changes. */
    useEffect(() => {
        setForm({})
    }, [modalIsOpen])

    return (
        <Modal show={modalIsOpen} backdrop="static" keyboard={false} size="sm" arial-labelledby="contained-modal-title-vcenter" onHide={handleModalState} centered>
            <Form onSubmit={saveAseguradora}>
                <Modal.Header className="modal-cmh-header-footer" closeButton>
                    <Modal.Title className="title-cmh">Agregar Aseguradora</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {/*Aseguradora*/}
                    <Col xs={12} md={12} className="mb-3">

                        <GetInput
                            label="Aseguradora"
                            value={form.nombre}
                            name="nombre"
                            handleChangeModal={handleChangeModal}
                            tooltipDescrip="Nombre de la aseguradora"
                            type="text"
                            isRequired={true}
                        />

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
                                    onChange={handleChangeModal} required autoComplete="off" />
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
                                    onChange={handleChangeModal} required autoComplete="off" />
                            </OverlayTrigger>
                        </FloatingLabel>
                    </Col>
                </Modal.Body>
                <Modal.Footer className="modal-cmh-header-footer">
                    <Button variant="danger" onClick={handleModalState}>Cancelar</Button>
                    <Button type="submit" variant="success" >Guardar</Button>
                    {/*onClick={saveAseguradora} */}
                </Modal.Footer>
            </Form>
        </Modal>
    )

}

function GetInput(props) {

    //we obtain their props
    const { label, value, name, handleChangeModal, tooltipDescrip, type, isRequired } = props

    return (
        <Fragment>
            <FloatingLabel
                controlId="floatingInput"
                label={label}>
                <OverlayTrigger
                    placement="right"
                    overlay={
                        <Tooltip id={`tooltip-${name}`}>{tooltipDescrip}</Tooltip>
                    }>
                    <Form.Control
                        type={type}
                        placeholder={label}
                        value={value ? value : ''}
                        name={name}
                        onChange={handleChangeModal} required={isRequired} autoComplete="off" />
                </OverlayTrigger>
            </FloatingLabel>
        </Fragment>
    )


}

export default ModalAdd;