import React, { Fragment, useState, useEffect } from "react";
import { Container, Col, Row, FloatingLabel, Form, OverlayTrigger, Tooltip, InputGroup } from "react-bootstrap";

//import axios from "axios"


//we import css
import "../../../globalStyles.css"

const currentYear = new Date().getFullYear();

function CAP() {

    //declared the variables, constants ans states for this module
    const [form, setForm] = useState({})

    //module's functions
    const handleChange = async (e) => {

        e.persist();
        await setForm(
            {
                ...form,
                [e.target.name]: e.target.value
            }
        );

        /*Falta por subir los archivos en forma de enlace a una API o base de datos, o asignarlos al campo de 
        serviciosHabilitadosHospital para posteriormente subirlos*/

        /*
        let reader = new FileReader();

        reader.readAsDataURL(e.target.files[0]);
        console.log(typeof (reader));
        reader.onload = (e) => {
            console.log("ing data ", e.target.result);
        }
        */
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

                            <Capacitacion form={form} handleChange={handleChange} />

                            <Investigacion form={form} handleChange={handleChange} />

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


function Capacitacion(props) {

    //we obtain the props for this component
    const form = props.form
    const handleChange = props.handleChange

    return (
        <Fragment>

            <Col xs={12} md={12}>
                <Row className="justify-content-evenly">

                    {/*Titulo de la sección*/}
                    <Col xs={12} md={12} className="mt-3 mb-3">
                        <h4 className="text-center sub-title-cmh">Capacitación</h4>
                    </Col>

                    {/*Cuenta con un Programa Anual de Capacitación:*/}
                    <Col xs={12} md={6} className="mb-3 mt-3">
                        <FloatingLabel controlId="floatingSelect" label="Programa Anual de Capacitación">
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-personalCap">¿Cuenta con un Programa Anual de Capacitación?</Tooltip>
                                }>
                                <Form.Select
                                    aria-label="Floating label"
                                    value={form.capacitacionAnual ? form.capacitacionAnual : ''}
                                    onChange={handleChange}
                                    name="capacitacionAnual"
                                >
                                    <option value="" disabled>Seleccione una opción</option>
                                    <option value={true}>Si</option>
                                    <option value={false}>No</option>
                                </Form.Select>
                            </OverlayTrigger>
                        </FloatingLabel>
                    </Col>

                    {/*Porcentaje de Personal Capacitado en el 2017 en su Hospital:*/}
                    <Col xs={12} md={4} className="mb-3 mt-3">
                        <InputGroup className="justify-content-center">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Personal Capacitado">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id="tooltip-personalCap">Porcentaje de Personal Capacitado en el 2017 en su Hospital</Tooltip>
                                    }>
                                    <Form.Control
                                        type="number"
                                        placeholder="Personal Capacitado"
                                        value={form.personalCapacitado ? form.personalCapacitado : ''}
                                        name="personalCapacitado"
                                        onChange={handleChange} />
                                </OverlayTrigger>
                            </FloatingLabel>
                            <InputGroup.Text id="percentage">%</InputGroup.Text>
                        </InputGroup>
                    </Col>

                    {/*Cuenta con reportes estadísticos de capacitación de su personal*/}
                    <Col xs={12} md={6} className="mb-3 mt-3">
                        <FloatingLabel controlId="floatingSelect" label="Reportes estadísticos de capacitación">
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-personalCap">¿Cuenta con reportes estadísticos de capacitación de su personal?</Tooltip>
                                }>
                                <Form.Select
                                    aria-label="Floating label"
                                    value={form.reportesCapacitacion ? form.reportesCapacitacion : ''}
                                    onChange={handleChange}
                                    name="reportesCapacitacion"
                                >
                                    <option value="" disabled>Seleccione una opción</option>
                                    <option value={true}>Si</option>
                                    <option value={false}>No</option>
                                </Form.Select>
                            </OverlayTrigger>
                        </FloatingLabel>
                    </Col>

                    {/*Porcentaje de Personal Capacitado en los Programas del CMH:*/}
                    <Col xs={12} md={4} className="mb-3 mt-3">
                        <InputGroup className="justify-content-center">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Capacitados CMH">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id="tooltip-personalCap">Porcentaje de Personal Capacitado en los Programas del CMH</Tooltip>
                                    }>
                                    <Form.Control
                                        type="number"
                                        placeholder="Capacitados CMH"
                                        value={form.personalCapacitadoCMH ? form.personalCapacitadoCMH : ''}
                                        name="personalCapacitadoCMH"
                                        onChange={handleChange} />
                                </OverlayTrigger>
                            </FloatingLabel>
                            <InputGroup.Text id="percentage">%</InputGroup.Text>
                        </InputGroup>
                    </Col>

                </Row>
            </Col>

        </Fragment>
    )

}

function Investigacion(props) {

    //we obtain the props for this component
    const form = props.form
    const handleChange = props.handleChange

    return (
        <Fragment>

            <Col xs={12} md={12}>
                <Row className="justify-content-evenly">

                    {/*Titulo de la sección*/}
                    <Col xs={12} md={12} className="mt-3 mb-3">
                        <h4 className="text-center sub-title-cmh">Investigación</h4>
                    </Col>

                    {/*¿Posee su Institución un Centro de Investigación?*/}
                    <Col xs={12} md={6} className="mb-3 mt-3">
                        <FloatingLabel controlId="floatingSelect" label="Centro de Investigación">
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-personalCap">¿Posee su Institución un Centro de Investigación?</Tooltip>
                                }>
                                <Form.Select
                                    aria-label="Floating label"
                                    value={form.centroInvestigacion ? form.centroInvestigacion : ''}
                                    onChange={handleChange}
                                    name="centroInvestigacion"
                                >
                                    <option value="" disabled>Seleccione una opción</option>
                                    <option value={true}>Si</option>
                                    <option value={false}>No</option>
                                </Form.Select>
                            </OverlayTrigger>
                        </FloatingLabel>
                    </Col>

                    {/*Indique el número de estudios o artículos que produce anualmente*/}
                    <Col xs={12} md={4} className="mb-3 mt-3">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Estudios producidos anualmente">
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-articulos anuales">Indique el número de estudios o artículos que produce anualmente</Tooltip>
                                }>
                                <Form.Control
                                    type="number"
                                    placeholder="Estudios o artículos producidos anualmente"
                                    value={form.estudiosArticulosAnuales ? form.estudiosArticulosAnuales : ''}
                                    name="estudiosArticulosAnuales"
                                    onChange={handleChange} />
                            </OverlayTrigger>
                        </FloatingLabel>
                    </Col>

                </Row>
            </Col>

        </Fragment>
    )

}

export default CAP;