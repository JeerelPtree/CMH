import React, { Fragment, useEffect, useState } from "react";
import { Col, Modal, FloatingLabel, Button, Form, OverlayTrigger, InputGroup, Tooltip } from "react-bootstrap";
import Swal from "sweetalert2";

import tipoInsumosOptions from "../../../encuestas/json/ComOptions/insumosOptions.json"

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

    /**
     * It takes an event, persists it, and then sets the form state to the event target name and value.
     * @param e - the event
     */
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
            variableForm.length < 8 ?
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

                    {/*Nombre*/}
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

                    {/*Monto Anual de Compra*/}
                    <Col xs={12} md={12} className="mb-3">
                        <GetInputFormat
                            label="Monto Anual de Compra"
                            value={form.montoAnualCompra}
                            name="montoAnualCompra"
                            handleChange={handleChangeModal}
                            tooltipDescrip="Monto Anual de Compra"
                            type="number"
                            isRequired={true}
                            show={true}
                            placement="right"
                            isLeft={true}
                            leftSymbol="$"
                        />
                    </Col>

                    {/*Tipo de Insumos*/}
                    <Col xs={12} md={12} className="mb-3">
                        <GetSelector
                            label="Tipo de Insumos"
                            value={form.tipoInsumos}
                            name="tipoInsumos"
                            handleChange={handleChangeModal}
                            options={tipoInsumosOptions}
                            isRequired={false}
                            show={true}
                        />
                    </Col>

                    {/*Financiamiento del Proveedor (Días de Crédito Promedio)*/}
                    <Col xs={12} md={12} className="mb-3">
                        <GetInput
                            label="Días Financiamiento"
                            value={form.diasFinanciamientoProveedor}
                            name="diasFinanciamientoProveedor"
                            handleChangeModal={handleChangeModal}
                            tooltipDescrip="Días de crédito promedio de financiamiento del proveedor"
                            type="text"
                            isRequired={true}
                        />
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

function GetInputFormat(props) {

    //we obtain their props
    const { label, value, name, handleChange, tooltipDescrip, type, isRequired, placement, show, isReadOnly = false, leftSymbol, rightSymbol, isLeft = false, isRight = false } = props

    if (show == true && isLeft == true) {
        return (
            <Fragment>
                <InputGroup className="justify-content-center">
                    <InputGroup.Text id="currency">{leftSymbol}</InputGroup.Text>
                    <FloatingLabel
                        controlId="floatingInput"
                        label={label}>
                        <OverlayTrigger
                            placement={placement}
                            overlay={
                                <Tooltip id={`tooltip-${name}`}>{tooltipDescrip}</Tooltip>
                            }>
                            <Form.Control
                                type={type}
                                placeholder={label}
                                value={value ? value : ''}
                                name={name}
                                onChange={handleChange}
                                required={isRequired}
                                autoComplete="off"
                                readOnly={isReadOnly}
                            />
                        </OverlayTrigger>
                    </FloatingLabel>
                </InputGroup>
            </Fragment>
        )
    } else if (show == true && isRight == true) {
        return (
            <Fragment>
                <InputGroup className="justify-content-center">
                    <FloatingLabel
                        controlId="floatingInput"
                        label={label}>
                        <OverlayTrigger
                            placement={placement}
                            overlay={
                                <Tooltip id={`tooltip-${name}`}>{tooltipDescrip}</Tooltip>
                            }>
                            <Form.Control
                                type={type}
                                placeholder={label}
                                value={value ? value : ''}
                                name={name}
                                onChange={handleChange}
                                required={isRequired}
                                autoComplete="off"
                                readOnly={isReadOnly}
                            />
                        </OverlayTrigger>
                    </FloatingLabel>
                    <InputGroup.Text id="currency">{rightSymbol}</InputGroup.Text>
                </InputGroup>
            </Fragment>
        )
    }
}

function GetSelector(props) {

    //we obtain their props
    const { label, value, name, handleChange, options, isRequired, show } = props

    if (show == true) {
        return (
            <Fragment>
                <FloatingLabel controlId="floatingSelect" label={label}>
                    <Form.Select
                        aria-label="Floating label"
                        value={value ? value : ''}
                        onChange={handleChange}
                        name={name}
                        required={isRequired}
                    >
                        <option value="" disabled>Seleccione una opción</option>
                        {
                            options.map((option) => {
                                return (
                                    <Fragment key={option.id}>
                                        <option value={option.value}>{option.name}</option>
                                    </Fragment>
                                )
                            })
                        }
                    </Form.Select>
                </FloatingLabel>
            </Fragment>
        )
    }
}

export default ModalAdd;