import React, { Fragment, useEffect, useState } from "react";
import { Col, Modal, FloatingLabel, Button, Form, InputGroup, OverlayTrigger, Tooltip } from "react-bootstrap";
import Swal from "sweetalert2";

import tipoInsumosOptions from "../../../encuestas/json/ComOptions/insumosOptions.json"

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

                    {/*Nombre*/}
                    <Col xs={12} md={12} className="mb-3">
                        <GetInput
                            label={elemento}
                            value={dataEdit.nombre}
                            name="nombre"
                            handleChangeModal={handleChange}
                            tooltipDescrip={`Nombre de ${elemento}`}
                            type="text"
                            isRequired={true}
                        />
                    </Col>

                    {/*Monto Anual de Compra*/}
                    <Col xs={12} md={12} className="mb-3">
                        <GetInputFormat
                            label="Monto Anual de Compra"
                            value={dataEdit.montoAnualCompra}
                            name="montoAnualCompra"
                            handleChange={handleChange}
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
                            value={dataEdit.tipoInsumos}
                            name="tipoInsumos"
                            handleChange={handleChange}
                            options={tipoInsumosOptions}
                            isRequired={false}
                            show={true}
                        />
                    </Col>

                    {/*Financiamiento del Proveedor (Días de Crédito Promedio)*/}
                    <Col xs={12} md={12} className="mb-3">
                        <GetInput
                            label="Días Financiamiento"
                            value={dataEdit.diasFinanciamientoProveedor}
                            name="diasFinanciamientoProveedor"
                            handleChangeModal={handleChange}
                            tooltipDescrip="Días de crédito promedio de financiamiento del proveedor"
                            type="text"
                            isRequired={true}
                        />
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

export default ModalEditarRegistro;