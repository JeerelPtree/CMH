import React, { Fragment, useEffect, useState } from "react";
import { Col, Modal, FloatingLabel, Button, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import Swal from "sweetalert2";

import '../../../../../globalStyles.css'

//TODO: pasar los inputs a los componentes, replicar este ejemplo en las encuestas que ya venimos haciendo

function ModalAdd(props) {

    //we obtain the props
    const modalIsOpen = props.modalTriggerAdd;
    const handleModalState = props.handleModalChangeAdd;
    const handleChangeRegistros = props.handleChangeRegistros;
    const elemento = props.elemento;
    const variableForm = props.variableForm;

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
     * calls the handleChangeRegistros function, passing the form as an argument. If the
     * handleChangeRegistros function returns true, then the handleModalState function is called. If
     * the handleChangeRegistros function returns false, then a sweet alert is displayed
     * @param e - The event object
     */
    const saveRegistro = async (e) => {

        e.preventDefault();
        e.stopPropagation();

        await handleChangeRegistros(form) ?
            handleModalState()
            :
            variableForm.length < 10 ?
                Swal.fire('Oooooops!', `El nombre de ${elemento.toLowerCase()} ya esta registrado.`, 'error')
                :
                Swal.fire('Oooooops!', 'No es posible agregar un regsitro más a la tabla', 'error');

    }

    /* A hook that is called when the component is mounted and when the modalIsOpen state changes. */
    useEffect(() => {
        setForm({})
    }, [modalIsOpen])

    return (
        <Modal show={modalIsOpen} backdrop="static" keyboard={false} size="sm" arial-labelledby="contained-modal-title-vcenter" onHide={handleModalState} centered>
            <Form onSubmit={saveRegistro}>
                <Modal.Header className="modal-cmh-header-footer" closeButton>
                    <Modal.Title className="title-cmh">Agregar {elemento}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {/*Elemento*/}
                    <Col xs={12} md={12} className="mb-3">

                        <GetInput
                            label={elemento}
                            value={form.nombre}
                            name="nombre"
                            handleChangeModal={handleChangeModal}
                            tooltipDescrip={`Nombre de ${elemento}`}
                            type="text"
                            isRequired={true}
                        />

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
                                    type="number"
                                    placeholder="Total Pacientes"
                                    value={form.totalPacientes ? form.totalPacientes : ''}
                                    name="totalPacientes"
                                    onChange={handleChangeModal} required autoComplete="off" />
                            </OverlayTrigger>
                        </FloatingLabel>
                    </Col>
                </Modal.Body>
                <Modal.Footer className="modal-cmh-header-footer">
                    <Button variant="danger" onClick={handleModalState}>Cancelar</Button>
                    <Button type="submit" variant="success" >Guardar</Button>
                    {/*onClick={saveRegistro} */}
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