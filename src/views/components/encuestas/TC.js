import React, { Input, Fragment, useState, useEffect } from "react";
import { Stack, Container, Col, Row, FloatingLabel, Button, Form, OverlayTrigger, Tooltip, FormGroup, InputGroup } from "react-bootstrap";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
import ModalAdd from "../modals/modals encuestas/TC/ModalAdd";
//import axios from "axios"


//we import css
import "../../../globalStyles.css"
import CRUD from "../tables/CRUD";

function TC() {

    //declared the variables, constants ans states for this module
    const [form, setForm] = useState({ aseguradoras: [] })
    const [viewFlags, setViewFlags] = useState({})

    useEffect(() => {
        //setDataAseguradoras(listaAseguradoras);
    }, []);


    //module's functions
    {/*Función para manejar el cambio en los campos del formulario de la modal*/ }
    const handleChange = async (e) => {

        e.persist();

        await setForm(
            {
                ...form,
                [e.target.name]: e.target.value
            }
        );
    }

    {/*Función para agregar aseguradoras al arrays de aseguradoras*/ }

    /**
     * It takes an object as an argument, checks if the object's name property is already in the array,
     * and if it isn't, it adds it to the array
     * @param aseguradora - is the object that is going to be added to the array.
     */
    const handleChangeAseguradoras = async (aseguradora) => {

        if (form.aseguradoras.length > 0) {

            if (nameAseguradoraValidation(aseguradora.nombre)) {

                await setForm(
                    {
                        ...form,
                        aseguradoras: form.aseguradoras.concat(aseguradora)
                    }
                );

                return true
            } else {
                return false
            }

        } else {

            await setForm(
                {
                    ...form,
                    aseguradoras: form.aseguradoras.concat(aseguradora)
                }
            );

            return true;

        }

    }

    /**
     * We create an aux for our array, we remove the content for it index, we re asigned our aux to
     * aseguradoras array
     * @param index - the index of the array that we want to delete
     */
    const handleChangeAseguradorasDelete = async (index) => {

        //we create an aux for our array 
        let aseguradorasArray = form.aseguradoras;

        //we remove the content for it index
        aseguradorasArray.splice(index, 1);

        //we re asigned our aux to aseguradoras array
        setForm(
            {
                ...form,
                aseguradoras: aseguradorasArray
            }
        )

    }

    /**
     * It takes an index and an object as parameters, then it validates the object's name property, if
     * it's valid it replaces the object in the array at the given index, and returns true, if it's not
     * valid it returns false
     * @param index - the index of the array that we want to edit
     * @param aseguradora - is the object that contains the data of the aseguradora
     */
    const handleChangeAseguradorasEdit = async (index, aseguradora) => {

        if (nameAseguradoraValidation(aseguradora.nombre)) {

            //we create an aux for our array 
            let aseguradorasArray = form.aseguradoras;

            //we replaces the content for it index
            aseguradorasArray.splice(index, 1, aseguradora);

            await setForm(
                {
                    ...form,
                    aseguradoras: aseguradorasArray
                }
            );

            return true

        } else {
            return false;
        }

    }

    /**
     * It takes a string as an argument and returns true if the string is not found in the array of
     * objects, and false if it is found
     * @param name - The name of the insurance company.
     * @returns A boolean value.
     */
    const nameAseguradoraValidation = (name) => {

        for (let i = 0; i < form.aseguradoras.length; i++) {

            if (form.aseguradoras[i].nombre.toLowerCase() === name.toLowerCase()) {

                return false; //the name exist

            } else if (i === form.aseguradoras.length - 1) {

                return true; //doesnt exit the name

            }

        }

    }

    const prueba = () => {
        console.log(form)
    }

    return (
        <Fragment>
            <Container className="mt-3">
                <Row>
                    <Col xs={12} md={12}>
                        <Row>

                            <TotalAtendidos form={form} handleChange={handleChange} />

                            <Aseguradoras form={form} handleChange={handleChange} handleChangeAseguradoras={handleChangeAseguradoras} handleChangeAseguradorasDelete={handleChangeAseguradorasDelete} handleChangeAseguradorasEdit={handleChangeAseguradorasEdit} />

                            <Gobierno form={form} handleChange={handleChange} />

                            <Empresas form={form} handleChange={handleChange} />

                            <Particulares form={form} handleChange={handleChange} />

                            <Col xs={12} md={6} className="mt-3 mb-5">
                                <Button variant="primary" onClick={prueba}> Enviar
                                </Button>
                            </Col>

                            {/*Botón de enviar
                            <Col xs={12} md={6} className="mt-3 mb-5">
                                <Button variant="primary" onClick={prueba}> Enviar
                                </Button>
                            </Col>
                            */}

                        </Row>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )


}


function TotalAtendidos(props) {

    //we obtain the props for this component
    const form = props.form
    const handleChange = props.handleChange

    return (
        <Fragment>

            <Col xs={12} md={12} >
                <Row>

                    {/*Título de la sección*/}
                    <Col xs={12} md={12} className="mb-3">
                        <h4 className="text-center sub-title-cmh">Total de Pacientes Atendidos</h4>
                    </Col>

                    {/*Particulares*/}
                    <Col xs={12} md={6} className="mb-3">
                        <Row>
                            <Col xs={12} md={6}>
                                {/*Cantidad de pacientes*/}
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Particulares">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id="tooltip-habitaciones">Número de pacientes particulares atendidos</Tooltip>
                                        }>
                                        <Form.Control
                                            type="number"
                                            placeholder="Particulares"
                                            value={form.numeroPacientesParticulares ? form.numeroPacientesParticulares : ''}
                                            name="numeroPacientesParticulares"
                                            onChange={handleChange} />
                                    </OverlayTrigger>
                                </FloatingLabel>
                            </Col>

                            <Col xs={12} md={6}>
                                {/*Ingresos promedio*/}
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Ingresos">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id="tooltip-habitaciones">Ingresos promedio debido a pacientes particulares</Tooltip>
                                        }>
                                        <Form.Control
                                            type="number"
                                            placeholder="Ingresos"
                                            value={form.ingresosPacientesParticulares ? form.ingresosPacientesParticulares : ''}
                                            name="ingresosPacientesParticulares"
                                            onChange={handleChange} />
                                    </OverlayTrigger>
                                </FloatingLabel>
                            </Col>
                        </Row>
                    </Col>

                    {/*Aseguradora*/}
                    <Col xs={12} md={6} className="mb-3">

                        <Row>
                            <Col xs={12} md={6}>
                                {/*Cantidad de pacientes*/}
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Aseguradora">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id="tooltip-habitaciones">Número de pacientes atendidos con seguro privado</Tooltip>
                                        }>
                                        <Form.Control
                                            type="number"
                                            placeholder="Aseguradora"
                                            value={form.numeroPacientesAseguradora ? form.numeroPacientesAseguradora : ''}
                                            name="numeroPacientesAseguradora"
                                            onChange={handleChange} />
                                    </OverlayTrigger>
                                </FloatingLabel>
                            </Col>
                            <Col xs={12} md={6}>
                                {/*Ingresos promedio*/}
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Ingresos">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id="tooltip-habitaciones">Ingresos promedio debido a pacientes con seguro privado</Tooltip>
                                        }>
                                        <Form.Control
                                            type="number"
                                            placeholder="Ingresos"
                                            value={form.ingresosPacientesAseguradora ? form.ingresosPacientesAseguradora : ''}
                                            name="ingresosPacientesAseguradora"
                                            onChange={handleChange} />
                                    </OverlayTrigger>
                                </FloatingLabel>
                            </Col>
                        </Row>
                    </Col>

                    {/*Gobierno*/}
                    <Col xs={12} md={6} className="mb-3">

                        <Row>
                            <Col xs={12} md={6}>
                                {/*Cantidad de pacientes*/}
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Gobierno">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id="tooltip-habitaciones">Número de pacientes atendidos de Gobierno</Tooltip>
                                        }>
                                        <Form.Control
                                            type="number"
                                            placeholder="Gobierno"
                                            value={form.numeroPacientesGobierno ? form.numeroPacientesGobierno : ''}
                                            name="numeroPacientesGobierno"
                                            onChange={handleChange} />
                                    </OverlayTrigger>
                                </FloatingLabel>
                            </Col>
                            <Col xs={12} md={6}>
                                {/*Ingresos promedio*/}
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Ingresos">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id="tooltip-habitaciones">Ingresos promedio debido a pacientes del ambito gubernamental</Tooltip>
                                        }>
                                        <Form.Control
                                            type="number"
                                            placeholder="Ingresos"
                                            value={form.ingresosPacientesGobierno ? form.ingresosPacientesGobierno : ''}
                                            name="ingresosPacientesGobierno"
                                            onChange={handleChange} />
                                    </OverlayTrigger>
                                </FloatingLabel>
                            </Col>
                        </Row>
                    </Col>

                    {/*Empresas*/}
                    <Col xs={12} md={6} className="mb-3">
                        <Row>
                            <Col xs={12} md={6}>
                                {/*Cantidad de pacientes*/}
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Empresas">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id="tooltip-habitaciones">Número de pacientes atendidos de empresas privadas</Tooltip>
                                        }>
                                        <Form.Control
                                            type="number"
                                            placeholder="Empresas"
                                            value={form.numeroPacientesEmpresas ? form.numeroPacientesEmpresas : ''}
                                            name="numeroPacientesEmpresas"
                                            onChange={handleChange} />
                                    </OverlayTrigger>
                                </FloatingLabel>
                            </Col>
                            <Col xs={12} md={6}>
                                {/*Ingresos promedio*/}
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Ingresos">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id="tooltip-habitaciones">Ingresos promedio debido a pacientes de empresas privadas</Tooltip>
                                        }>
                                        <Form.Control
                                            type="number"
                                            placeholder="Ingresos"
                                            value={form.ingresosPacientesEmpresas ? form.ingresosPacientesEmpresas : ''}
                                            name="ingresosPacientesEmpresas"
                                            onChange={handleChange} />
                                    </OverlayTrigger>
                                </FloatingLabel>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Fragment>
    )

}

function Aseguradoras(props) {

    //we obtain the props for this component
    const form = props.form //Formulario
    const handleChange = props.handleChange //HandleChange del formulario
    const handleChangeAseguradoras = props.handleChangeAseguradoras;
    const handleChangeAseguradorasDelete = props.handleChangeAseguradorasDelete;
    const handleChangeAseguradorasEdit = props.handleChangeAseguradorasEdit;

    const [modalTriggerAdd, setModalTriggerAdd] = useState(false);


    const handleModalChangeAdd = () => {
        setModalTriggerAdd(!modalTriggerAdd);
    }

    return (
        <Fragment>

            <Col xs={12} md={12} >
                <Row>

                    {/*Título de la sección*/}
                    <Col xs={12} md={12} className="mb-3">
                        <h4 className="text-center sub-title-cmh">Aseguradoras</h4>
                    </Col>
                    <Col xs={12} md={12} className="mb-3">

                        <Row className="justify-content-center">

                            <Col xs={12} md={1} className="text-center">
                                {/*TODO: Agregar tooltip y si quieres cambiar el icon o dejar el icon mas un texto de agregar aseguradora */}
                                <Button variant="success" onClick={handleModalChangeAdd}><FontAwesomeIcon icon={faPlus} /></Button>

                            </Col>

                        </Row>

                    </Col>
                    <Col xs={12} md={12} className="mb-3">
                        <CRUD form={form} handleChange={handleChange} handleChangeAseguradorasDelete={handleChangeAseguradorasDelete} handleChangeAseguradorasEdit={handleChangeAseguradorasEdit} />
                    </Col>

                </Row>
            </Col>
            <ModalAdd
                modalTriggerAdd={modalTriggerAdd}
                handleModalChangeAdd={handleModalChangeAdd}
                handleChangeAseguradoras={handleChangeAseguradoras}
            />
        </Fragment>
    )

}

function Gobierno(props) {

    //we obtain the props for this component
    const form = props.form
    const handleChange = props.handleChange

    return (
        <Fragment>

            <Col xs={12} md={12} >
                <Row>

                    {/*Título de la sección*/}
                    <Col xs={12} md={12} className="mb-3">
                        <h4 className="text-center sub-title-cmh">Gobierno</h4>
                    </Col>

                    {/*Particulares*/}
                    <Col xs={12} md={6} className="mb-3">
                        <Row>
                            <Col xs={12} md={6}>
                                {/*Cantidad de pacientes*/}
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Particulares">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id="tooltip-habitaciones">Número de pacientes particulares atendidos</Tooltip>
                                        }>
                                        <Form.Control
                                            type="number"
                                            placeholder="Particulares"
                                            value={form.numeroPacientesParticulares ? form.numeroPacientesParticulares : ''}
                                            name="numeroPacientesParticulares"
                                            onChange={handleChange} />
                                    </OverlayTrigger>
                                </FloatingLabel>
                            </Col>

                            <Col xs={12} md={6}>
                                {/*Ingresos promedio*/}
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Ingresos">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id="tooltip-habitaciones">Ingresos promedio debido a pacientes particulares</Tooltip>
                                        }>
                                        <Form.Control
                                            type="number"
                                            placeholder="Ingresos"
                                            value={form.ingresosPacientesParticulares ? form.ingresosPacientesParticulares : ''}
                                            name="ingresosPacientesParticulares"
                                            onChange={handleChange} />
                                    </OverlayTrigger>
                                </FloatingLabel>
                            </Col>
                        </Row>
                    </Col>

                    {/*Aseguradora*/}
                    <Col xs={12} md={6} className="mb-3">

                        <Row>
                            <Col xs={12} md={6}>
                                {/*Cantidad de pacientes*/}
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Aseguradora">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id="tooltip-habitaciones">Número de pacientes atendidos con seguro privado</Tooltip>
                                        }>
                                        <Form.Control
                                            type="number"
                                            placeholder="Aseguradora"
                                            value={form.numeroPacientesAseguradora ? form.numeroPacientesAseguradora : ''}
                                            name="numeroPacientesAseguradora"
                                            onChange={handleChange} />
                                    </OverlayTrigger>
                                </FloatingLabel>
                            </Col>
                            <Col xs={12} md={6}>
                                {/*Ingresos promedio*/}
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Ingresos">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id="tooltip-habitaciones">Ingresos promedio debido a pacientes con seguro privado</Tooltip>
                                        }>
                                        <Form.Control
                                            type="number"
                                            placeholder="Ingresos"
                                            value={form.ingresosPacientesAseguradora ? form.ingresosPacientesAseguradora : ''}
                                            name="ingresosPacientesAseguradora"
                                            onChange={handleChange} />
                                    </OverlayTrigger>
                                </FloatingLabel>
                            </Col>
                        </Row>
                    </Col>

                    {/*Gobierno*/}
                    <Col xs={12} md={6} className="mb-3">

                        <Row>
                            <Col xs={12} md={6}>
                                {/*Cantidad de pacientes*/}
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Gobierno">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id="tooltip-habitaciones">Número de pacientes atendidos de Gobierno</Tooltip>
                                        }>
                                        <Form.Control
                                            type="number"
                                            placeholder="Gobierno"
                                            value={form.numeroPacientesGobierno ? form.numeroPacientesGobierno : ''}
                                            name="numeroPacientesGobierno"
                                            onChange={handleChange} />
                                    </OverlayTrigger>
                                </FloatingLabel>
                            </Col>
                            <Col xs={12} md={6}>
                                {/*Ingresos promedio*/}
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Ingresos">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id="tooltip-habitaciones">Ingresos promedio debido a pacientes del ambito gubernamental</Tooltip>
                                        }>
                                        <Form.Control
                                            type="number"
                                            placeholder="Ingresos"
                                            value={form.ingresosPacientesGobierno ? form.ingresosPacientesGobierno : ''}
                                            name="ingresosPacientesGobierno"
                                            onChange={handleChange} />
                                    </OverlayTrigger>
                                </FloatingLabel>
                            </Col>
                        </Row>
                    </Col>

                    {/*Empresas*/}
                    <Col xs={12} md={6} className="mb-3">
                        <Row>
                            <Col xs={12} md={6}>
                                {/*Cantidad de pacientes*/}
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Empresas">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id="tooltip-habitaciones">Número de pacientes atendidos de empresas privadas</Tooltip>
                                        }>
                                        <Form.Control
                                            type="number"
                                            placeholder="Empresas"
                                            value={form.numeroPacientesEmpresas ? form.numeroPacientesEmpresas : ''}
                                            name="numeroPacientesEmpresas"
                                            onChange={handleChange} />
                                    </OverlayTrigger>
                                </FloatingLabel>
                            </Col>
                            <Col xs={12} md={6}>
                                {/*Ingresos promedio*/}
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Ingresos">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id="tooltip-habitaciones">Ingresos promedio debido a pacientes de empresas privadas</Tooltip>
                                        }>
                                        <Form.Control
                                            type="number"
                                            placeholder="Ingresos"
                                            value={form.ingresosPacientesEmpresas ? form.ingresosPacientesEmpresas : ''}
                                            name="ingresosPacientesEmpresas"
                                            onChange={handleChange} />
                                    </OverlayTrigger>
                                </FloatingLabel>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Fragment>
    )

}

function Empresas(props) {

    //we obtain the props for this component
    const form = props.form
    const handleChange = props.handleChange

    return (
        <Fragment>

            <Col xs={12} md={12} >
                <Row>

                    {/*Título de la sección*/}
                    <Col xs={12} md={12} className="mb-3">
                        <h4 className="text-center sub-title-cmh">Empresas</h4>
                    </Col>

                    {/*Particulares*/}
                    <Col xs={12} md={6} className="mb-3">
                        <Row>
                            <Col xs={12} md={6}>
                                {/*Cantidad de pacientes*/}
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Particulares">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id="tooltip-habitaciones">Número de pacientes particulares atendidos</Tooltip>
                                        }>
                                        <Form.Control
                                            type="number"
                                            placeholder="Particulares"
                                            value={form.numeroPacientesParticulares ? form.numeroPacientesParticulares : ''}
                                            name="numeroPacientesParticulares"
                                            onChange={handleChange} />
                                    </OverlayTrigger>
                                </FloatingLabel>
                            </Col>

                            <Col xs={12} md={6}>
                                {/*Ingresos promedio*/}
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Ingresos">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id="tooltip-habitaciones">Ingresos promedio debido a pacientes particulares</Tooltip>
                                        }>
                                        <Form.Control
                                            type="number"
                                            placeholder="Ingresos"
                                            value={form.ingresosPacientesParticulares ? form.ingresosPacientesParticulares : ''}
                                            name="ingresosPacientesParticulares"
                                            onChange={handleChange} />
                                    </OverlayTrigger>
                                </FloatingLabel>
                            </Col>
                        </Row>
                    </Col>

                    {/*Aseguradora*/}
                    <Col xs={12} md={6} className="mb-3">

                        <Row>
                            <Col xs={12} md={6}>
                                {/*Cantidad de pacientes*/}
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Aseguradora">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id="tooltip-habitaciones">Número de pacientes atendidos con seguro privado</Tooltip>
                                        }>
                                        <Form.Control
                                            type="number"
                                            placeholder="Aseguradora"
                                            value={form.numeroPacientesAseguradora ? form.numeroPacientesAseguradora : ''}
                                            name="numeroPacientesAseguradora"
                                            onChange={handleChange} />
                                    </OverlayTrigger>
                                </FloatingLabel>
                            </Col>
                            <Col xs={12} md={6}>
                                {/*Ingresos promedio*/}
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Ingresos">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id="tooltip-habitaciones">Ingresos promedio debido a pacientes con seguro privado</Tooltip>
                                        }>
                                        <Form.Control
                                            type="number"
                                            placeholder="Ingresos"
                                            value={form.ingresosPacientesAseguradora ? form.ingresosPacientesAseguradora : ''}
                                            name="ingresosPacientesAseguradora"
                                            onChange={handleChange} />
                                    </OverlayTrigger>
                                </FloatingLabel>
                            </Col>
                        </Row>
                    </Col>

                    {/*Gobierno*/}
                    <Col xs={12} md={6} className="mb-3">

                        <Row>
                            <Col xs={12} md={6}>
                                {/*Cantidad de pacientes*/}
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Gobierno">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id="tooltip-habitaciones">Número de pacientes atendidos de Gobierno</Tooltip>
                                        }>
                                        <Form.Control
                                            type="number"
                                            placeholder="Gobierno"
                                            value={form.numeroPacientesGobierno ? form.numeroPacientesGobierno : ''}
                                            name="numeroPacientesGobierno"
                                            onChange={handleChange} />
                                    </OverlayTrigger>
                                </FloatingLabel>
                            </Col>
                            <Col xs={12} md={6}>
                                {/*Ingresos promedio*/}
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Ingresos">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id="tooltip-habitaciones">Ingresos promedio debido a pacientes del ambito gubernamental</Tooltip>
                                        }>
                                        <Form.Control
                                            type="number"
                                            placeholder="Ingresos"
                                            value={form.ingresosPacientesGobierno ? form.ingresosPacientesGobierno : ''}
                                            name="ingresosPacientesGobierno"
                                            onChange={handleChange} />
                                    </OverlayTrigger>
                                </FloatingLabel>
                            </Col>
                        </Row>
                    </Col>

                    {/*Empresas*/}
                    <Col xs={12} md={6} className="mb-3">
                        <Row>
                            <Col xs={12} md={6}>
                                {/*Cantidad de pacientes*/}
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Empresas">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id="tooltip-habitaciones">Número de pacientes atendidos de empresas privadas</Tooltip>
                                        }>
                                        <Form.Control
                                            type="number"
                                            placeholder="Empresas"
                                            value={form.numeroPacientesEmpresas ? form.numeroPacientesEmpresas : ''}
                                            name="numeroPacientesEmpresas"
                                            onChange={handleChange} />
                                    </OverlayTrigger>
                                </FloatingLabel>
                            </Col>
                            <Col xs={12} md={6}>
                                {/*Ingresos promedio*/}
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Ingresos">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id="tooltip-habitaciones">Ingresos promedio debido a pacientes de empresas privadas</Tooltip>
                                        }>
                                        <Form.Control
                                            type="number"
                                            placeholder="Ingresos"
                                            value={form.ingresosPacientesEmpresas ? form.ingresosPacientesEmpresas : ''}
                                            name="ingresosPacientesEmpresas"
                                            onChange={handleChange} />
                                    </OverlayTrigger>
                                </FloatingLabel>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Fragment>
    )

}

function Particulares(props) {

    //we obtain the props for this component
    const form = props.form
    const handleChange = props.handleChange

    return (
        <Fragment>

            <Col xs={12} md={12} >
                <Row>

                    {/*Título de la sección*/}
                    <Col xs={12} md={12} className="mb-3">
                        <h4 className="text-center sub-title-cmh">Particulares</h4>
                    </Col>

                    {/*Particulares*/}
                    <Col xs={12} md={6} className="mb-3">
                        <Row>
                            <Col xs={12} md={6}>
                                {/*Cantidad de pacientes*/}
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Particulares">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id="tooltip-habitaciones">Número de pacientes particulares atendidos</Tooltip>
                                        }>
                                        <Form.Control
                                            type="number"
                                            placeholder="Particulares"
                                            value={form.numeroPacientesParticulares ? form.numeroPacientesParticulares : ''}
                                            name="numeroPacientesParticulares"
                                            onChange={handleChange} />
                                    </OverlayTrigger>
                                </FloatingLabel>
                            </Col>

                            <Col xs={12} md={6}>
                                {/*Ingresos promedio*/}
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Ingresos">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id="tooltip-habitaciones">Ingresos promedio debido a pacientes particulares</Tooltip>
                                        }>
                                        <Form.Control
                                            type="number"
                                            placeholder="Ingresos"
                                            value={form.ingresosPacientesParticulares ? form.ingresosPacientesParticulares : ''}
                                            name="ingresosPacientesParticulares"
                                            onChange={handleChange} />
                                    </OverlayTrigger>
                                </FloatingLabel>
                            </Col>
                        </Row>
                    </Col>

                    {/*Aseguradora*/}
                    <Col xs={12} md={6} className="mb-3">

                        <Row>
                            <Col xs={12} md={6}>
                                {/*Cantidad de pacientes*/}
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Aseguradora">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id="tooltip-habitaciones">Número de pacientes atendidos con seguro privado</Tooltip>
                                        }>
                                        <Form.Control
                                            type="number"
                                            placeholder="Aseguradora"
                                            value={form.numeroPacientesAseguradora ? form.numeroPacientesAseguradora : ''}
                                            name="numeroPacientesAseguradora"
                                            onChange={handleChange} />
                                    </OverlayTrigger>
                                </FloatingLabel>
                            </Col>
                            <Col xs={12} md={6}>
                                {/*Ingresos promedio*/}
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Ingresos">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id="tooltip-habitaciones">Ingresos promedio debido a pacientes con seguro privado</Tooltip>
                                        }>
                                        <Form.Control
                                            type="number"
                                            placeholder="Ingresos"
                                            value={form.ingresosPacientesAseguradora ? form.ingresosPacientesAseguradora : ''}
                                            name="ingresosPacientesAseguradora"
                                            onChange={handleChange} />
                                    </OverlayTrigger>
                                </FloatingLabel>
                            </Col>
                        </Row>
                    </Col>

                    {/*Gobierno*/}
                    <Col xs={12} md={6} className="mb-3">

                        <Row>
                            <Col xs={12} md={6}>
                                {/*Cantidad de pacientes*/}
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Gobierno">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id="tooltip-habitaciones">Número de pacientes atendidos de Gobierno</Tooltip>
                                        }>
                                        <Form.Control
                                            type="number"
                                            placeholder="Gobierno"
                                            value={form.numeroPacientesGobierno ? form.numeroPacientesGobierno : ''}
                                            name="numeroPacientesGobierno"
                                            onChange={handleChange} />
                                    </OverlayTrigger>
                                </FloatingLabel>
                            </Col>
                            <Col xs={12} md={6}>
                                {/*Ingresos promedio*/}
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Ingresos">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id="tooltip-habitaciones">Ingresos promedio debido a pacientes del ambito gubernamental</Tooltip>
                                        }>
                                        <Form.Control
                                            type="number"
                                            placeholder="Ingresos"
                                            value={form.ingresosPacientesGobierno ? form.ingresosPacientesGobierno : ''}
                                            name="ingresosPacientesGobierno"
                                            onChange={handleChange} />
                                    </OverlayTrigger>
                                </FloatingLabel>
                            </Col>
                        </Row>
                    </Col>

                    {/*Empresas*/}
                    <Col xs={12} md={6} className="mb-3">
                        <Row>
                            <Col xs={12} md={6}>
                                {/*Cantidad de pacientes*/}
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Empresas">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id="tooltip-habitaciones">Número de pacientes atendidos de empresas privadas</Tooltip>
                                        }>
                                        <Form.Control
                                            type="number"
                                            placeholder="Empresas"
                                            value={form.numeroPacientesEmpresas ? form.numeroPacientesEmpresas : ''}
                                            name="numeroPacientesEmpresas"
                                            onChange={handleChange} />
                                    </OverlayTrigger>
                                </FloatingLabel>
                            </Col>
                            <Col xs={12} md={6}>
                                {/*Ingresos promedio*/}
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Ingresos">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id="tooltip-habitaciones">Ingresos promedio debido a pacientes de empresas privadas</Tooltip>
                                        }>
                                        <Form.Control
                                            type="number"
                                            placeholder="Ingresos"
                                            value={form.ingresosPacientesEmpresas ? form.ingresosPacientesEmpresas : ''}
                                            name="ingresosPacientesEmpresas"
                                            onChange={handleChange} />
                                    </OverlayTrigger>
                                </FloatingLabel>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Fragment>
    )

}

export default TC;