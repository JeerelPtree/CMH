import React, { Input, Fragment, useState, useEffect } from "react";
import { Stack, Container, Col, Row, FloatingLabel, Button, Form, OverlayTrigger, Tooltip, FormGroup, InputGroup } from "react-bootstrap";
//import axios from "axios"


//we import css
import "../../../globalStyles.css"
import CRUD from "../tables/CRUD";

function TC() {

    {/*arreglo de aseguradoras con datos precargados*/ }
    const listaAseguradoras = [
        { id: 1, nombre: "GNP", numeroPacientes: 248, ingresos: '' }
    ]

    //declared the variables, constants ans states for this module
    const [form, setForm] = useState({})
    const [viewFlags, setViewFlags] = useState({})

    {/*Inicializamos dataAseguradoras con la información de listaAseguradoras*/ }
    const [dataAseguradoras, setDataAseguradoras] = useState()

    useEffect(() => {
        setDataAseguradoras(listaAseguradoras);
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

                            <Aseguradoras form={form} handleChange={handleChange} data={dataAseguradoras} setData={setDataAseguradoras} />

                            <Gobierno form={form} handleChange={handleChange} />

                            <Empresas form={form} handleChange={handleChange} />

                            <Particulares form={form} handleChange={handleChange} />

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
    const data = props.data //variable dataAseguradoras
    const setData = props.setData //metodo setDataAseguradoras

    return (
        <Fragment>

            <Col xs={12} md={12} >
                <Row>

                    {/*Título de la sección*/}
                    <Col xs={12} md={12} className="mb-3">
                        <h4 className="text-center sub-title-cmh">Aseguradoras</h4>
                    </Col>
                    <Col xs={12} md={12} className="mb-3">
                        <CRUD form={form} handleChange={handleChange} data={data} setData={setData} tipo={"Aseguradora"} />
                    </Col>

                </Row>
            </Col>
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