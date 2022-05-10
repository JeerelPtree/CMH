import React, { Fragment, useState, useEffect } from "react";
import { Container, Col, Row, FloatingLabel, Button, Form, OverlayTrigger, Tooltip, InputGroup } from "react-bootstrap";

//import axios from "axios"


//we import css
import "../../../globalStyles.css"

const currentYear = new Date().getFullYear();
let totalEmpleados = 0;

function GP() {

    //declared the variables, constants ans states for this module
    const [form, setForm] = useState({})

    //module's functions
    const handleChange = async (e) => {

        e.persist();

        //TODO: Como acumular este total empleados mientras se van recibiendo desde los inputs?
        totalEmpleados += e.target.name.match(/escolaridad\w/) ? ~~e.target.value : 0;

        console.log(totalEmpleados);
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

                            {/*Titulo de la sección*/}
                            <Col xs={12} md={12} className="mt-3 mb-3">
                                <h5 className="text-center title-cmh">Indicadores</h5>
                            </Col>

                            {/*TODO: Hacer la suma del personal*/}
                            {/*Total de empleados*/}
                            <Col xs={12} md={12} className="mt-3 mb-3">
                                <Row>

                                    {/*Etiqueta*/}
                                    <Col xs={9} md={2} className="my-auto">
                                        <Form.Label floatingInput>Total de Empleados:</Form.Label>
                                    </Col>

                                    {/*Input*/}
                                    <Col xs={3} md={4} className="my-auto">
                                        <Form.Control
                                            type="number"
                                            readOnly
                                            placeholder=""
                                            value={form.numeroTotalEmpleados ? form.numeroTotalEmpleados : ''}
                                            name="numeroTotalEmpleados"
                                            onChange={handleChange} />
                                    </Col>
                                </Row>
                            </Col>

                            <NivelEscolaridad form={form} handleChange={handleChange} />

                            <RecursosHumanos form={form} handleChange={handleChange} />

                            <PersonalClinico form={form} handleChange={handleChange} />

                            <NivelProfesional form={form} handleChange={handleChange} />

                            <Sueldos form={form} handleChange={handleChange} />

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


function NivelEscolaridad(props) {

    //we obtain the props for this component
    const form = props.form
    const handleChange = props.handleChange

    return (
        <Fragment>

            <Col xs={12} md={12}>
                <Row>

                    {/*Titulo de la sección*/}
                    <Col xs={12} md={12} className="mt-3 mb-3">
                        <h4 className="text-center sub-title-cmh">Nivel de escolaridad</h4>
                    </Col>

                    {/*Escolaridad Básica incompleta*/}
                    <Col xs={12} md={4} className="mb-3">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Escolaridad Básica incompleta">
                            <Form.Control
                                type="number"
                                placeholder="Escolaridad Básica incompleta"
                                value={form.escolaridadBasicaIncompleta ? form.escolaridadBasicaIncompleta : ''}
                                name="escolaridadBasicaIncompleta"
                                onChange={handleChange} />
                        </FloatingLabel>
                    </Col>

                    {/*Escolaridad Básica completa*/}
                    <Col xs={12} md={4} className="mb-3">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Escolaridad Básica completa">
                            <Form.Control
                                type="number"
                                placeholder="Escolaridad Básica completa"
                                value={form.escolaridadBasicaCompleta ? form.escolaridadBasicaCompleta : ''}
                                name="escolaridadBasicaCompleta"
                                onChange={handleChange} />
                        </FloatingLabel>
                    </Col>

                    {/*Medio Superior /Tecnica Completo*/}
                    <Col xs={12} md={4} className="mb-3">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Medio Superior/Tecnica Completo">
                            <Form.Control
                                type="number"
                                placeholder="Medio Superior/Tecnica Completo"
                                value={form.escolaridadMedioSuperiorTecnica ? form.escolaridadMedioSuperiorTecnica : ''}
                                name="escolaridadMedioSuperiorTecnica"
                                onChange={handleChange} />
                        </FloatingLabel>
                    </Col>

                    {/*Profesional Completa*/}
                    <Col xs={12} md={4} className="mb-3">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Profesional Completa">
                            <Form.Control
                                type="number"
                                placeholder="Profesional Completa"
                                value={form.escolaridadMedioSuperiorTecnica ? form.escolaridadMedioSuperiorTecnica : ''}
                                name="escolaridadMedioSuperiorTecnica"
                                onChange={handleChange} />
                        </FloatingLabel>
                    </Col>

                    {/*Maestría o más*/}
                    <Col xs={12} md={4} className="mb-3">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Maestría o más">
                            <Form.Control
                                type="number"
                                placeholder="Maestría o más"
                                value={form.escolaridadMaestriaMas ? form.escolaridadMaestriaMas : ''}
                                name="escolaridadMaestriaMas"
                                onChange={handleChange} />
                        </FloatingLabel>
                    </Col>

                </Row>
            </Col>

        </Fragment>
    )

}

function RecursosHumanos(props) {

    //we obtain the props for this component
    const form = props.form
    const handleChange = props.handleChange

    return (
        <Fragment>

            <Col xs={12} md={12}>
                <Row>

                    {/*Titulo de la sección*/}
                    <Col xs={12} md={12} className="mt-3 mb-3">
                        <h4 className="text-center sub-title-cmh">Recursos Humanos</h4>
                    </Col>

                    {/*Tasa de Contratación*/}
                    <Col xs={12} md={4} className="mb-3">
                        <InputGroup className="justify-content-center">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Contratación">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id="tooltip-rinion">Tasa de Contratación</Tooltip>
                                    }>
                                    <Form.Control
                                        type="number"
                                        placeholder="Contratación"
                                        value={form.tasaContratacion ? form.tasaContratacion : ''}
                                        name="tasaContratacion"
                                        onChange={handleChange} />
                                </OverlayTrigger>
                            </FloatingLabel>
                            <InputGroup.Text id="percentage">%</InputGroup.Text>
                        </InputGroup>
                    </Col>

                    {/*Tasa de Despidos*/}
                    <Col xs={12} md={4} className="mb-3">
                        <InputGroup className="justify-content-center">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Despidos">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id="tooltip-rinion">Tasa de Despidos</Tooltip>
                                    }>
                                    <Form.Control
                                        type="number"
                                        placeholder="Despidos"
                                        value={form.tasaDespidos ? form.tasaDespidos : ''}
                                        name="tasaDespidos"
                                        onChange={handleChange} />
                                </OverlayTrigger>
                            </FloatingLabel>
                            <InputGroup.Text id="percentage">%</InputGroup.Text>
                        </InputGroup>
                    </Col>

                    {/*Tasa de Renuncias*/}
                    <Col xs={12} md={4} className="mb-3">
                        <InputGroup className="justify-content-center">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Renuncias">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id="tooltip-rinion">Tasa de Renuncias</Tooltip>
                                    }>
                                    <Form.Control
                                        type="number"
                                        placeholder="Renuncias"
                                        value={form.tasaRenuncias ? form.tasaRenuncias : ''}
                                        name="tasaRenuncias"
                                        onChange={handleChange} />
                                </OverlayTrigger>
                            </FloatingLabel>
                            <InputGroup.Text id="percentage">%</InputGroup.Text>
                        </InputGroup>
                    </Col>

                    {/*Tasa de Separación (Despido o Renuncia)*/}
                    <Col xs={12} md={4} className="mb-3">
                        <InputGroup className="justify-content-center">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Separación">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id="tooltip-rinion">Tasa de Separación (Despido o Renuncia)</Tooltip>
                                    }>
                                    <Form.Control
                                        type="number"
                                        placeholder="Separación"
                                        value={form.tasaSeparacion ? form.tasaSeparacion : ''}
                                        name="tasaSeparacion"
                                        onChange={handleChange} />
                                </OverlayTrigger>
                            </FloatingLabel>
                            <InputGroup.Text id="percentage">%</InputGroup.Text>
                        </InputGroup>
                    </Col>

                    {/*Indice General de Rotación */}
                    <Col xs={12} md={4} className="mb-3">
                        <InputGroup className="justify-content-center">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Rotación General">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id="tooltip-rinion">Indice General de Rotación</Tooltip>
                                    }>
                                    <Form.Control
                                        type="number"
                                        placeholder="Rotación General"
                                        value={form.indiceGeneralRotacion ? form.indiceGeneralRotacion : ''}
                                        name="indiceGeneralRotacion"
                                        onChange={handleChange} />
                                </OverlayTrigger>
                            </FloatingLabel>
                            <InputGroup.Text id="percentage">%</InputGroup.Text>
                        </InputGroup>
                    </Col>

                    {/*Indice de Rotación del Personal de Enfermería*/}
                    <Col xs={12} md={4} className="mb-3">
                        <InputGroup className="justify-content-center">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Rotación Enfermería">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id="tooltip-rinion">Indice de Rotación del Personal de Enfermería</Tooltip>
                                    }>
                                    <Form.Control
                                        type="number"
                                        placeholder="Rotación Enfermería"
                                        value={form.indiceRotacionEnfermeria ? form.indiceRotacionEnfermeria : ''}
                                        name="indiceRotacionEnfermeria"
                                        onChange={handleChange} />
                                </OverlayTrigger>
                            </FloatingLabel>
                            <InputGroup.Text id="percentage">%</InputGroup.Text>
                        </InputGroup>
                    </Col>

                    {/*Indice de Ausentismo*/}
                    <Col xs={12} md={4} className="mb-3">
                        <InputGroup className="justify-content-center">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Ausentismo">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id="tooltip-rinion">Indice de Ausentismo</Tooltip>
                                    }>
                                    <Form.Control
                                        type="number"
                                        placeholder="Ausentismo"
                                        value={form.indiceAusentismo ? form.indiceAusentismo : ''}
                                        name="indiceAusentismo"
                                        onChange={handleChange} />
                                </OverlayTrigger>
                            </FloatingLabel>
                            <InputGroup.Text id="percentage">%</InputGroup.Text>
                        </InputGroup>
                    </Col>

                    {/*Indice de Inactivos por alguna Incapacidad*/}
                    <Col xs={12} md={4} className="mb-3">
                        <InputGroup className="justify-content-center">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Incapacidad">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id="tooltip-rinion">Indice de Inactivos por alguna Incapacidad</Tooltip>
                                    }>
                                    <Form.Control
                                        type="number"
                                        placeholder="Incapacidad"
                                        value={form.indiceInactivosIncapacidad ? form.indiceInactivosIncapacidad : ''}
                                        name="indiceInactivosIncapacidad"
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

function PersonalClinico(props) {

    //we obtain the props for this component
    const form = props.form
    const handleChange = props.handleChange

    return (
        <Fragment>

            <Col xs={12} md={12}>
                <Row>

                    {/*Titulo de la sección*/}
                    <Col xs={12} md={12} className="mt-3 mb-3">
                        <h4 className="text-center sub-title-cmh">Personal Clínico</h4>
                    </Col>

                    {/*Total de Enfermeras*/}
                    <Col xs={12} md={6} className="mb-3">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Total de Enfermeras">
                            <Form.Control
                                type="number"
                                placeholder="Total de Enfermeras"
                                value={form.totalEnfermeras ? form.totalEnfermeras : ''}
                                name="totalEnfermeras"
                                onChange={handleChange} />
                        </FloatingLabel>
                    </Col>

                    {/*Total de Personal Administrativo*/}
                    <Col xs={12} md={6} className="mb-3">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Total de Personal Administrativo">
                            <Form.Control
                                type="number"
                                placeholder="Total de Personal Administrativo"
                                value={form.totalPersonalAdministrativo ? form.totalPersonalAdministrativo : ''}
                                name="totalPersonalAdministrativo"
                                onChange={handleChange} />
                        </FloatingLabel>
                    </Col>

                    {/*Total de Personal Médico en Nómina*/}
                    <Col xs={12} md={6} className="mb-3">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Total de Personal Médico en Nómina">
                            <Form.Control
                                type="number"
                                placeholder="Total de Personal Médico en Nómina"
                                value={form.totalPersonalMedicoNomina ? form.totalPersonalMedicoNomina : ''}
                                name="totalPersonalMedicoNomina"
                                onChange={handleChange} />
                        </FloatingLabel>
                    </Col>

                    {/*Otros profesionales de la Salud (Nutrióloga, Apoyo diagnóstico-Radiología)*/}
                    <Col xs={12} md={6} className="mb-3">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Otros profesionales de la Salud">
                            <Form.Control
                                type="number"
                                placeholder="Otros profesionales de la Salud"
                                value={form.otrosProfesionalesSalud ? form.otrosProfesionalesSalud : ''}
                                name="otrosProfesionalesSalud"
                                onChange={handleChange} />
                        </FloatingLabel>
                    </Col>

                </Row>
            </Col>

        </Fragment>
    )

}

function NivelProfesional(props) {

    //we obtain the props for this component
    const form = props.form
    const handleChange = props.handleChange

    return (
        <Fragment>

            <Col xs={12} md={12}>
                <Row>

                    {/*Titulo de la sección*/}
                    <Col xs={12} md={12} className="mt-3 mb-3">
                        <h4 className="text-center sub-title-cmh">Nivel Profesional de Puestos Específicos</h4>
                    </Col>

                    {/*Recursos Humanos*/}
                    <Col xs={12} md={6} className="mb-3">
                        <FloatingLabel controlId="floatingSelect" label="Recursos Humanos">

                            <Form.Select
                                aria-label="Floating label"
                                value={form.recursosHumanos ? form.recursosHumanos : ''}
                                onChange={handleChange}
                                name="recursosHumanos"
                            >
                                <option value="" disabled>Seleccione una opción</option>
                                <option value={"Preparatoria"}>Preparatoria</option>
                                <option value={"Licenciatura"}>Licenciatura</option>
                                <option value={"Maestria"}>Maestría</option>
                                <option value={"Especialidad"}>Especialidad</option>
                                <option value={"Doctorado"}>Doctorado</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>

                    {/*Calidad*/}
                    <Col xs={12} md={6} className="mb-3">
                        <FloatingLabel controlId="floatingSelect" label="Calidad">

                            <Form.Select
                                aria-label="Floating label"
                                value={form.calidad ? form.calidad : ''}
                                onChange={handleChange}
                                name="calidad"
                            >
                                <option value="" disabled>Seleccione una opción</option>
                                <option value={"Preparatoria"}>Preparatoria</option>
                                <option value={"Licenciatura"}>Licenciatura</option>
                                <option value={"Maestria"}>Maestría</option>
                                <option value={"Especialidad"}>Especialidad</option>
                                <option value={"Doctorado"}>Doctorado</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>

                    {/*Compras*/}
                    <Col xs={12} md={6} className="mb-3">
                        <FloatingLabel controlId="floatingSelect" label="Compras">

                            <Form.Select
                                aria-label="Floating label"
                                value={form.compras ? form.compras : ''}
                                onChange={handleChange}
                                name="compras"
                            >
                                <option value="" disabled>Seleccione una opción</option>
                                <option value={"Preparatoria"}>Preparatoria</option>
                                <option value={"Licenciatura"}>Licenciatura</option>
                                <option value={"Maestria"}>Maestría</option>
                                <option value={"Especialidad"}>Especialidad</option>
                                <option value={"Doctorado"}>Doctorado</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>

                    {/*Comercial*/}
                    <Col xs={12} md={6} className="mb-3">
                        <FloatingLabel controlId="floatingSelect" label="Comercial">

                            <Form.Select
                                aria-label="Floating label"
                                value={form.comercial ? form.comercial : ''}
                                onChange={handleChange}
                                name="comercial"
                            >
                                <option value="" disabled>Seleccione una opción</option>
                                <option value={"Preparatoria"}>Preparatoria</option>
                                <option value={"Licenciatura"}>Licenciatura</option>
                                <option value={"Maestria"}>Maestría</option>
                                <option value={"Especialidad"}>Especialidad</option>
                                <option value={"Doctorado"}>Doctorado</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>

                    {/*Jefa de Enfermería*/}
                    <Col xs={12} md={6} className="mb-3">
                        <FloatingLabel controlId="floatingSelect" label="Jefa de Enfermería">

                            <Form.Select
                                aria-label="Floating label"
                                value={form.jefaEnfermeria ? form.jefaEnfermeria : ''}
                                onChange={handleChange}
                                name="jefaEnfermeria"
                            >
                                <option value="" disabled>Seleccione una opción</option>
                                <option value={"Preparatoria"}>Preparatoria</option>
                                <option value={"Licenciatura"}>Licenciatura</option>
                                <option value={"Maestria"}>Maestría</option>
                                <option value={"Especialidad"}>Especialidad</option>
                                <option value={"Doctorado"}>Doctorado</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>

                    {/*Sistemas*/}
                    <Col xs={12} md={6} className="mb-3">
                        <FloatingLabel controlId="floatingSelect" label="Sistemas">

                            <Form.Select
                                aria-label="Floating label"
                                value={form.sistemas ? form.sistemas : ''}
                                onChange={handleChange}
                                name="sistemas"
                            >
                                <option value="" disabled>Seleccione una opción</option>
                                <option value={"Preparatoria"}>Preparatoria</option>
                                <option value={"Licenciatura"}>Licenciatura</option>
                                <option value={"Maestria"}>Maestría</option>
                                <option value={"Especialidad"}>Especialidad</option>
                                <option value={"Doctorado"}>Doctorado</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>

                    {/*Dirección Médica */}
                    <Col xs={12} md={6} className="mb-3">
                        <FloatingLabel controlId="floatingSelect" label="Dirección Médica ">

                            <Form.Select
                                aria-label="Floating label"
                                value={form.direccionMedica ? form.direccionMedica : ''}
                                onChange={handleChange}
                                name="direccionMedica"
                            >
                                <option value="" disabled>Seleccione una opción</option>
                                <option value={"Preparatoria"}>Preparatoria</option>
                                <option value={"Licenciatura"}>Licenciatura</option>
                                <option value={"Maestria"}>Maestría</option>
                                <option value={"Especialidad"}>Especialidad</option>
                                <option value={"Doctorado"}>Doctorado</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>

                    {/*Dirección de Operaciones*/}
                    <Col xs={12} md={6} className="mb-3">
                        <FloatingLabel controlId="floatingSelect" label="Dirección de Operaciones">

                            <Form.Select
                                aria-label="Floating label"
                                value={form.direccionOperaciones ? form.direccionOperaciones : ''}
                                onChange={handleChange}
                                name="direccionOperaciones"
                            >
                                <option value="" disabled>Seleccione una opción</option>
                                <option value={"Preparatoria"}>Preparatoria</option>
                                <option value={"Licenciatura"}>Licenciatura</option>
                                <option value={"Maestria"}>Maestría</option>
                                <option value={"Especialidad"}>Especialidad</option>
                                <option value={"Doctorado"}>Doctorado</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>

                    {/*Dirección de Administración y Finanzas*/}
                    <Col xs={12} md={6} className="mb-3">
                        <FloatingLabel controlId="floatingSelect" label="Dirección de Administración y Finanzas">

                            <Form.Select
                                aria-label="Floating label"
                                value={form.direccionAdministracionFinanzas ? form.direccionAdministracionFinanzas : ''}
                                onChange={handleChange}
                                name="direccionAdministracionFinanzas"
                            >
                                <option value="" disabled>Seleccione una opción</option>
                                <option value={"Preparatoria"}>Preparatoria</option>
                                <option value={"Licenciatura"}>Licenciatura</option>
                                <option value={"Maestria"}>Maestría</option>
                                <option value={"Especialidad"}>Especialidad</option>
                                <option value={"Doctorado"}>Doctorado</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>

                    {/*Dirección General*/}
                    <Col xs={12} md={6} className="mb-3">
                        <FloatingLabel controlId="floatingSelect" label="Dirección General">

                            <Form.Select
                                aria-label="Floating label"
                                value={form.direccionGeneral ? form.direccionGeneral : ''}
                                onChange={handleChange}
                                name="direccionGeneral"
                            >
                                <option value="" disabled>Seleccione una opción</option>
                                <option value={"Preparatoria"}>Preparatoria</option>
                                <option value={"Licenciatura"}>Licenciatura</option>
                                <option value={"Maestria"}>Maestría</option>
                                <option value={"Especialidad"}>Especialidad</option>
                                <option value={"Doctorado"}>Doctorado</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>

                </Row>
            </Col>

        </Fragment>
    )

}

function Sueldos(props) {

    //we obtain the props for this component
    const form = props.form
    const handleChange = props.handleChange

    return (
        <Fragment>

            <Col xs={12} md={12}>
                <Row>

                    {/*Titulo de la sección*/}
                    <Col xs={12} md={12} className="mt-3 mb-3">
                        <h4 className="text-center sub-title-cmh">Sueldos</h4>
                    </Col>

                    {/*Director/ Gerente General*/}
                    <Col xs={12} md={4} className="mb-3">

                        <InputGroup className="justify-content-center">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Director General">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id="tooltip-rinion">Director/Gerente General</Tooltip>
                                    }>
                                    <Form.Control
                                        type="number"
                                        placeholder="Director General"
                                        value={form.sueldoDirectorGerenteGeneral ? form.sueldoDirectorGerenteGeneral : ''}
                                        name="sueldoDirectorGerenteGeneral"
                                        onChange={handleChange} />
                                </OverlayTrigger>
                            </FloatingLabel>
                            <InputGroup.Text id="currency">$</InputGroup.Text>
                        </InputGroup>
                    </Col>

                    {/*Director/Gerente Administrativo*/}
                    <Col xs={12} md={4} className="mb-3">
                        <InputGroup className="justify-content-center">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Director Administrativo">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id="tooltip-rinion">Director/Gerente Administrativo</Tooltip>
                                    }>
                                    <Form.Control
                                        type="number"
                                        placeholder="Director Administrativo"
                                        value={form.sueldoDirectorGerenteAdministrativo ? form.sueldoDirectorGerenteAdministrativo : ''}
                                        name="sueldoDirectorGerenteAdministrativo"
                                        onChange={handleChange} />
                                </OverlayTrigger>
                            </FloatingLabel>
                            <InputGroup.Text id="currency">$</InputGroup.Text>
                        </InputGroup>
                    </Col>

                    {/*Director/ Gerente Médico*/}
                    <Col xs={12} md={4} className="mb-3">
                        <InputGroup className="justify-content-center">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Director Médico">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id="tooltip-rinion">Director/Gerente Médico</Tooltip>
                                    }>
                                    <Form.Control
                                        type="number"
                                        placeholder="Director Médico"
                                        value={form.sueldoDirectorGerenteMedico ? form.sueldoDirectorGerenteMedico : ''}
                                        name="sueldoDirectorGerenteMedico"
                                        onChange={handleChange} />
                                </OverlayTrigger>
                            </FloatingLabel>
                            <InputGroup.Text id="currency">$</InputGroup.Text>
                        </InputGroup>
                    </Col>

                    {/*Director/ Gerente de Operaciones*/}
                    <Col xs={12} md={4} className="mb-3">
                        <InputGroup className="justify-content-center">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Director de Operaciones">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id="tooltip-rinion">Director/Gerente de Operaciones</Tooltip>
                                    }>
                                    <Form.Control
                                        type="number"
                                        placeholder="Director de Operaciones"
                                        value={form.sueldoDirectorGerenteOperaciones ? form.sueldoDirectorGerenteOperaciones : ''}
                                        name="sueldoDirectorGerenteOperaciones"
                                        onChange={handleChange} />
                                </OverlayTrigger>
                            </FloatingLabel>
                            <InputGroup.Text id="currency">$</InputGroup.Text>
                        </InputGroup>
                    </Col>

                    {/*Gerente/Jefatura de Enfermería*/}
                    <Col xs={12} md={4} className="mb-3">
                        <InputGroup className="justify-content-center">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Gerente de Enfermería">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id="tooltip-rinion">Gerente/Jefatura de Enfermería</Tooltip>
                                    }>
                                    <Form.Control
                                        type="number"
                                        placeholder="Gerente de Enfermería"
                                        value={form.sueldoGerenteJefaturaEnfermeria ? form.sueldoGerenteJefaturaEnfermeria : ''}
                                        name="sueldoGerenteJefaturaEnfermeria"
                                        onChange={handleChange} />
                                </OverlayTrigger>
                            </FloatingLabel>
                            <InputGroup.Text id="currency">$</InputGroup.Text>
                        </InputGroup>
                    </Col>

                    {/*Jefe/Gerente/Coordinador de Calidad*/}
                    <Col xs={12} md={4} className="mb-3">
                        <InputGroup className="justify-content-center">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Jefe de Calidad">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id="tooltip-rinion">Jefe/Gerente/Coordinador de Calidad</Tooltip>
                                    }>
                                    <Form.Control
                                        type="number"
                                        placeholder="Jefe de Calidad"
                                        value={form.sueldoJefeGerenteCoordinadorCalidad ? form.sueldoJefeGerenteCoordinadorCalidad : ''}
                                        name="sueldoJefeGerenteCoordinadorCalidad"
                                        onChange={handleChange} />
                                </OverlayTrigger>
                            </FloatingLabel>
                            <InputGroup.Text id="currency">$</InputGroup.Text>
                        </InputGroup>
                    </Col>

                    {/*Jefe/Gerente de Compras*/}
                    <Col xs={12} md={4} className="mb-3">
                        <InputGroup className="justify-content-center">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Jefe de Compras">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id="tooltip-rinion">Jefe/Gerente de Compras</Tooltip>
                                    }>
                                    <Form.Control
                                        type="number"
                                        placeholder="Jefe de Compras"
                                        value={form.sueldoJefeGerenteCompras ? form.sueldoJefeGerenteCompras : ''}
                                        name="sueldoJefeGerenteCompras"
                                        onChange={handleChange} />
                                </OverlayTrigger>
                            </FloatingLabel>
                            <InputGroup.Text id="currency">$</InputGroup.Text>
                        </InputGroup>
                    </Col>

                    {/*Jefe/Gerente de Mercadotecnia*/}
                    <Col xs={12} md={4} className="mb-3">
                        <InputGroup className="justify-content-center">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Jefe de Mercadotecnia">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id="tooltip-rinion">Jefe/Gerente de Mercadotecnia</Tooltip>
                                    }>
                                    <Form.Control
                                        type="number"
                                        placeholder="Jefe de Mercadotecnia"
                                        value={form.sueldoJefeGerenteMercadotecnia ? form.sueldoJefeGerenteMercadotecnia : ''}
                                        name="sueldoJefeGerenteMercadotecnia"
                                        onChange={handleChange} />
                                </OverlayTrigger>
                            </FloatingLabel>
                            <InputGroup.Text id="currency">$</InputGroup.Text>
                        </InputGroup>
                    </Col>

                    {/*Jefe/Gerente de Comercialización-Ventas*/}
                    <Col xs={12} md={4} className="mb-3">
                        <InputGroup className="justify-content-center">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Jefe de Comercialización">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id="tooltip-rinion">Jefe/Gerente de Comercialización-Ventas</Tooltip>
                                    }>
                                    <Form.Control
                                        type="number"
                                        placeholder="Jefe de Comercialización"
                                        value={form.sueldoJefeGerenteComercializaciónVentas ? form.sueldoJefeGerenteComercializaciónVentas : ''}
                                        name="sueldoJefeGerenteComercializaciónVentas"
                                        onChange={handleChange} />
                                </OverlayTrigger>
                            </FloatingLabel>
                            <InputGroup.Text id="currency">$</InputGroup.Text>
                        </InputGroup>
                    </Col>

                    {/*Jefe/Gerente de Recursos Humanos*/}
                    <Col xs={12} md={4} className="mb-3">
                        <InputGroup className="justify-content-center">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Jefe de RH">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id="tooltip-rinion">Jefe/Gerente de Recursos Humanos</Tooltip>
                                    }>
                                    <Form.Control
                                        type="number"
                                        placeholder="Jefe de RH"
                                        value={form.sueldoJefeGerenteRecursosHumanos ? form.sueldoJefeGerenteRecursosHumanos : ''}
                                        name="sueldoJefeGerenteRecursosHumanos"
                                        onChange={handleChange} />
                                </OverlayTrigger>
                            </FloatingLabel>
                            <InputGroup.Text id="currency">$</InputGroup.Text>
                        </InputGroup>
                    </Col>

                    {/*Jefe de Contabilidad*/}
                    <Col xs={12} md={4} className="mb-3">
                        <InputGroup className="justify-content-center">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Jefe de Contabilidad">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id="tooltip-rinion">Jefe de Contabilidad</Tooltip>
                                    }>
                                    <Form.Control
                                        type="number"
                                        placeholder="Jefe de Contabilidad"
                                        value={form.sueldoJefeContabilidad ? form.sueldoJefeContabilidad : ''}
                                        name="sueldoJefeContabilidad"
                                        onChange={handleChange} />
                                </OverlayTrigger>
                            </FloatingLabel>
                            <InputGroup.Text id="currency">$</InputGroup.Text>
                        </InputGroup>
                    </Col>

                    {/*Jefe de Radiología*/}
                    <Col xs={12} md={4} className="mb-3">
                        <InputGroup className="justify-content-center">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Jefe de Radiología">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id="tooltip-rinion">Jefe de Radiología- *propio</Tooltip>
                                    }>
                                    <Form.Control
                                        type="number"
                                        placeholder="Jefe de Radiología"
                                        value={form.sueldoJefeRadiologia ? form.sueldoJefeRadiologia : ''}
                                        name="sueldoJefeRadiologia"
                                        onChange={handleChange} />
                                </OverlayTrigger>
                            </FloatingLabel>
                            <InputGroup.Text id="currency">$</InputGroup.Text>
                        </InputGroup>
                    </Col>

                    {/*Jefe de Laboratorio*/}
                    <Col xs={12} md={4} className="mb-3">
                        <InputGroup className="justify-content-center">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Jefe de Laboratorio">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id="tooltip-rinion">Jefe de Laboratorio- *propio</Tooltip>
                                    }>
                                    <Form.Control
                                        type="number"
                                        placeholder="Jefe de Laboratorio"
                                        value={form.sueldoJefeLaboratorio ? form.sueldoJefeLaboratorio : ''}
                                        name="sueldoJefeLaboratorio"
                                        onChange={handleChange} />
                                </OverlayTrigger>
                            </FloatingLabel>
                            <InputGroup.Text id="currency">$</InputGroup.Text>
                        </InputGroup>
                    </Col>

                    {/*TODO: Falta por editar estos inputs hacia abajo*/}
                    {/*Jefe de Servicio Médico (Urgencias, UCI, UCIN, Quirófano, Hospitalización, etc.)*/}
                    <Col xs={12} md={4} className="mb-3">
                        <InputGroup className="justify-content-center">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Jefe de Servicio Médico">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id="tooltip-rinion">Jefe de Servicio Médico (Urgencias, UCI, UCIN, Quirófano, Hospitalización, etc.)</Tooltip>
                                    }>
                                    <Form.Control
                                        type="number"
                                        placeholder="Jefe de Servicio Médico"
                                        value={form.sueldoJefeServicioMedico ? form.sueldoJefeServicioMedico : ''}
                                        name="sueldoJefeServicioMedico"
                                        onChange={handleChange} />
                                </OverlayTrigger>
                            </FloatingLabel>
                            <InputGroup.Text id="currency">$</InputGroup.Text>
                        </InputGroup>
                    </Col>

                    {/*Médicos de Urgencias*/}
                    <Col xs={12} md={4} className="mb-3">
                        <InputGroup className="justify-content-center">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Médicos de Urgencias">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id="tooltip-rinion">Médicos de Urgencias</Tooltip>
                                    }>
                                    <Form.Control
                                        type="number"
                                        placeholder="Médicos de Urgencias"
                                        value={form.sueldoMedicosUrgencias ? form.sueldoMedicosUrgencias : ''}
                                        name="sueldoMedicosUrgencias"
                                        onChange={handleChange} />
                                </OverlayTrigger>
                            </FloatingLabel>
                            <InputGroup.Text id="currency">$</InputGroup.Text>
                        </InputGroup>
                    </Col>

                    {/*Jefe de Nutrición Clínica*/}
                    <Col xs={12} md={4} className="mb-3">
                        <InputGroup className="justify-content-center">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Jefe de Nutrición Clínica">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id="tooltip-rinion">Jefe de Nutrición Clínica</Tooltip>
                                    }>
                                    <Form.Control
                                        type="number"
                                        placeholder="Contratación"
                                        value={form.sueldoJefeNutricionClinica ? form.sueldoJefeNutricionClinica : ''}
                                        name="sueldoJefeNutricionClinica"
                                        onChange={handleChange} />
                                </OverlayTrigger>
                            </FloatingLabel>
                            <InputGroup.Text id="currency">$</InputGroup.Text>
                        </InputGroup>
                    </Col>

                    {/*Supervisora de Enfermería*/}
                    <Col xs={12} md={4} className="mb-3">
                        <InputGroup className="justify-content-center">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Supervisora Enfermería">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id="tooltip-rinion">Supervisora de Enfermería</Tooltip>
                                    }>
                                    <Form.Control
                                        type="number"
                                        placeholder="Supervisora Enfermería"
                                        value={form.sueldoSupervisoraEnfermeria ? form.sueldoSupervisoraEnfermeria : ''}
                                        name="sueldoSupervisoraEnfermeria"
                                        onChange={handleChange} />
                                </OverlayTrigger>
                            </FloatingLabel>
                            <InputGroup.Text id="currency">$</InputGroup.Text>
                        </InputGroup>
                    </Col>

                    {/*Coordinadora de Enfermería*/}
                    <Col xs={12} md={4} className="mb-3">
                        <InputGroup className="justify-content-center">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Coordinadora Enfermería">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id="tooltip-rinion">Coordinadora de Enfermería</Tooltip>
                                    }>
                                    <Form.Control
                                        type="number"
                                        placeholder="Coordinadora Enfermería"
                                        value={form.sueldoCoordinadoraEnfermeria ? form.sueldoCoordinadoraEnfermeria : ''}
                                        name="sueldoCoordinadoraEnfermeria"
                                        onChange={handleChange} />
                                </OverlayTrigger>
                            </FloatingLabel>
                            <InputGroup.Text id="currency">$</InputGroup.Text>
                        </InputGroup>
                    </Col>

                    {/*Enfermera Especialista*/}
                    <Col xs={12} md={4} className="mb-3">
                        <InputGroup className="justify-content-center">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Enfermera Especialista">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id="tooltip-rinion">Enfermera Especialista</Tooltip>
                                    }>
                                    <Form.Control
                                        type="number"
                                        placeholder="Enfermera Especialista"
                                        value={form.sueldoEnfermeraEspecialista ? form.sueldoEnfermeraEspecialista : ''}
                                        name="sueldoEnfermeraEspecialista"
                                        onChange={handleChange} />
                                </OverlayTrigger>
                            </FloatingLabel>
                            <InputGroup.Text id="currency">$</InputGroup.Text>
                        </InputGroup>
                    </Col>

                    {/*Enfermera General*/}
                    <Col xs={12} md={4} className="mb-3">
                        <InputGroup className="justify-content-center">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Enfermera General">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id="tooltip-rinion">Enfermera General</Tooltip>
                                    }>
                                    <Form.Control
                                        type="number"
                                        placeholder="Enfermera General"
                                        value={form.sueldoEnfermeraGeneral ? form.sueldoEnfermeraGeneral : ''}
                                        name="sueldoEnfermeraGeneral"
                                        onChange={handleChange} />
                                </OverlayTrigger>
                            </FloatingLabel>
                            <InputGroup.Text id="currency">$</InputGroup.Text>
                        </InputGroup>
                    </Col>

                    {/*Técnico en Enfermería*/}
                    <Col xs={12} md={4} className="mb-3">
                        <InputGroup className="justify-content-center">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Técnico en Enfermería">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id="tooltip-rinion">Técnico en Enfermería</Tooltip>
                                    }>
                                    <Form.Control
                                        type="number"
                                        placeholder="Técnico en Enfermería"
                                        value={form.sueldoTecnicoEnfermeria ? form.sueldoTecnicoEnfermeria : ''}
                                        name="sueldoTecnicoEnfermeria"
                                        onChange={handleChange} />
                                </OverlayTrigger>
                            </FloatingLabel>
                            <InputGroup.Text id="currency">$</InputGroup.Text>
                        </InputGroup>
                    </Col>

                    {/*Auxiliar de Enfermería*/}
                    <Col xs={12} md={4} className="mb-3">
                        <InputGroup className="justify-content-center">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Auxiliar de Enfermería">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id="tooltip-rinion">Auxiliar de Enfermería</Tooltip>
                                    }>
                                    <Form.Control
                                        type="number"
                                        placeholder="Auxiliar de Enfermería"
                                        value={form.sueldoAuxiliarEnfermeria ? form.sueldoAuxiliarEnfermeria : ''}
                                        name="sueldoAuxiliarEnfermeria"
                                        onChange={handleChange} />
                                </OverlayTrigger>
                            </FloatingLabel>
                            <InputGroup.Text id="currency">$</InputGroup.Text>
                        </InputGroup>
                    </Col>

                    {/*Técnico de Laboratorio*/}
                    <Col xs={12} md={4} className="mb-3">
                        <InputGroup className="justify-content-center">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Técnico de Laboratorio">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id="tooltip-rinion">Técnico de Laboratorio</Tooltip>
                                    }>
                                    <Form.Control
                                        type="number"
                                        placeholder="Técnico de Laboratorio"
                                        value={form.sueldoTecnicoLaboratorio ? form.sueldoTecnicoLaboratorio : ''}
                                        name="sueldoTecnicoLaboratorio"
                                        onChange={handleChange} />
                                </OverlayTrigger>
                            </FloatingLabel>
                            <InputGroup.Text id="currency">$</InputGroup.Text>
                        </InputGroup>
                    </Col>

                    {/*Técnico de Rayos X*/}
                    <Col xs={12} md={4} className="mb-3">
                        <InputGroup className="justify-content-center">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Técnico de Rayos X">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id="tooltip-rinion">Técnico de Rayos X</Tooltip>
                                    }>
                                    <Form.Control
                                        type="number"
                                        placeholder="Técnico de Rayos X"
                                        value={form.sueldoTecnicoRayosX ? form.sueldoTecnicoRayosX : ''}
                                        name="sueldoTecnicoRayosX"
                                        onChange={handleChange} />
                                </OverlayTrigger>
                            </FloatingLabel>
                            <InputGroup.Text id="currency">$</InputGroup.Text>
                        </InputGroup>
                    </Col>

                    {/*Técnico en Inhaloterapia o Terapia Respiratoria*/}
                    <Col xs={12} md={4} className="mb-3">
                        <InputGroup className="justify-content-center">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Técnico en Inhaloterapia">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id="tooltip-rinion">Técnico en Inhaloterapia o Terapia Respiratoria</Tooltip>
                                    }>
                                    <Form.Control
                                        type="number"
                                        placeholder="Técnico en Inhaloterapia"
                                        value={form.sueldoTecnicoInhaloterapia ? form.sueldoTecnicoInhaloterapia : ''}
                                        name="sueldoTecnicoInhaloterapia"
                                        onChange={handleChange} />
                                </OverlayTrigger>
                            </FloatingLabel>
                            <InputGroup.Text id="currency">$</InputGroup.Text>
                        </InputGroup>
                    </Col>

                    {/*Camillero*/}
                    <Col xs={12} md={4} className="mb-3">
                        <InputGroup className="justify-content-center">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Camillero">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id="tooltip-rinion">Camillero</Tooltip>
                                    }>
                                    <Form.Control
                                        type="number"
                                        placeholder="Camillero"
                                        value={form.sueldoCamillero ? form.sueldoCamillero : ''}
                                        name="sueldoCamillero"
                                        onChange={handleChange} />
                                </OverlayTrigger>
                            </FloatingLabel>
                            <InputGroup.Text id="currency">$</InputGroup.Text>
                        </InputGroup>
                    </Col>

                    {/*Admisión*/}
                    <Col xs={12} md={4} className="mb-3">
                        <InputGroup className="justify-content-center">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Admisión">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id="tooltip-rinion">Admisión</Tooltip>
                                    }>
                                    <Form.Control
                                        type="number"
                                        placeholder="Admisión"
                                        value={form.sueldoAdmision ? form.sueldoAdmision : ''}
                                        name="sueldoAdmision"
                                        onChange={handleChange} />
                                </OverlayTrigger>
                            </FloatingLabel>
                            <InputGroup.Text id="currency">$</InputGroup.Text>
                        </InputGroup>
                    </Col>

                    {/*Jefe/Coordinador Intendencia*/}
                    <Col xs={12} md={4} className="mb-3">
                        <InputGroup className="justify-content-center">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Jefe Intendencia">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id="tooltip-rinion">Jefe/Coordinador Intendencia</Tooltip>
                                    }>
                                    <Form.Control
                                        type="number"
                                        placeholder="Jefe Intendencia"
                                        value={form.sueldoJefeIntendencia ? form.sueldoJefeIntendencia : ''}
                                        name="sueldoJefeIntendencia"
                                        onChange={handleChange} />
                                </OverlayTrigger>
                            </FloatingLabel>
                            <InputGroup.Text id="currency">$</InputGroup.Text>
                        </InputGroup>
                    </Col>

                    {/*Personal de Intendencia*/}
                    <Col xs={12} md={4} className="mb-3">
                        <InputGroup className="justify-content-center">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Personal de Intendencia">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id="tooltip-rinion">Personal de Intendencia</Tooltip>
                                    }>
                                    <Form.Control
                                        type="number"
                                        placeholder="Personal de Intendencia"
                                        value={form.sueldoPersonalIntendencia ? form.sueldoPersonalIntendencia : ''}
                                        name="sueldoPersonalIntendencia"
                                        onChange={handleChange} />
                                </OverlayTrigger>
                            </FloatingLabel>
                            <InputGroup.Text id="currency">$</InputGroup.Text>
                        </InputGroup>
                    </Col>

                    {/*Jefe/Coordinador de Nutrición Hospitalaria*/}
                    <Col xs={12} md={4} className="mb-3">
                        <InputGroup className="justify-content-center">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Jefe de NH">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id="tooltip-rinion">Jefe/Coordinador de Nutrición Hospitalaria</Tooltip>
                                    }>
                                    <Form.Control
                                        type="number"
                                        placeholder="Jefe de NH"
                                        value={form.sueldoJefeNutricionHospitalaria ? form.sueldoJefeNutricionHospitalaria : ''}
                                        name="sueldoJefeNutricionHospitalaria"
                                        onChange={handleChange} />
                                </OverlayTrigger>
                            </FloatingLabel>
                            <InputGroup.Text id="currency">$</InputGroup.Text>
                        </InputGroup>
                    </Col>

                    {/*Cocineros*/}
                    <Col xs={12} md={4} className="mb-3">
                        <InputGroup className="justify-content-center">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Cocineros">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id="tooltip-rinion">Cocineros</Tooltip>
                                    }>
                                    <Form.Control
                                        type="number"
                                        placeholder="Cocineros"
                                        value={form.sueldoCocineros ? form.sueldoCocineros : ''}
                                        name="sueldoCocineros"
                                        onChange={handleChange} />
                                </OverlayTrigger>
                            </FloatingLabel>
                            <InputGroup.Text id="currency">$</InputGroup.Text>
                        </InputGroup>
                    </Col>

                    {/*Jefe de Mantenimiento*/}
                    <Col xs={12} md={4} className="mb-3">
                        <InputGroup className="justify-content-center">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Jefe de Mantenimiento">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id="tooltip-rinion">Jefe de Mantenimiento</Tooltip>
                                    }>
                                    <Form.Control
                                        type="number"
                                        placeholder="Jefe de Mantenimiento"
                                        value={form.sueldoJefeMantenimiento ? form.sueldoJefeMantenimiento : ''}
                                        name="sueldoJefeMantenimiento"
                                        onChange={handleChange} />
                                </OverlayTrigger>
                            </FloatingLabel>
                            <InputGroup.Text id="currency">$</InputGroup.Text>
                        </InputGroup>
                    </Col>

                    {/*Personal de Mantenimiento*/}
                    <Col xs={12} md={4} className="mb-3">
                        <InputGroup className="justify-content-center">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Personal Mantenimiento">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id="tooltip-rinion">Personal de Mantenimiento</Tooltip>
                                    }>
                                    <Form.Control
                                        type="number"
                                        placeholder="Personal Mantenimiento"
                                        value={form.sueldoPersonalMantenimiento ? form.sueldoPersonalMantenimiento : ''}
                                        name="sueldoPersonalMantenimiento"
                                        onChange={handleChange} />
                                </OverlayTrigger>
                            </FloatingLabel>
                            <InputGroup.Text id="currency">$</InputGroup.Text>
                        </InputGroup>
                    </Col>

                    {/*Personal de Lavanderia*/}
                    <Col xs={12} md={4} className="mb-3">
                        <InputGroup className="justify-content-center">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Personal de Lavanderia">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id="tooltip-rinion">Personal de Lavanderia</Tooltip>
                                    }>
                                    <Form.Control
                                        type="number"
                                        placeholder="Personal de Lavanderia"
                                        value={form.sueldoPersonalLavanderia ? form.sueldoPersonalLavanderia : ''}
                                        name="sueldoPersonalLavanderia"
                                        onChange={handleChange} />
                                </OverlayTrigger>
                            </FloatingLabel>
                            <InputGroup.Text id="currency">$</InputGroup.Text>
                        </InputGroup>
                    </Col>

                    {/*Jefe de Seguridad*/}
                    <Col xs={12} md={4} className="mb-3">
                        <InputGroup className="justify-content-center">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Jefe de Seguridad">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id="tooltip-rinion">Jefe de Seguridad</Tooltip>
                                    }>
                                    <Form.Control
                                        type="number"
                                        placeholder="Jefe de Seguridad"
                                        value={form.sueldoJefeSeguridad ? form.sueldoJefeSeguridad : ''}
                                        name="sueldoJefeSeguridad"
                                        onChange={handleChange} />
                                </OverlayTrigger>
                            </FloatingLabel>
                            <InputGroup.Text id="currency">$</InputGroup.Text>
                        </InputGroup>
                    </Col>

                    {/*Vigilantes-Guardias de Seguridad*/}
                    <Col xs={12} md={4} className="mb-3">
                        <InputGroup className="justify-content-center">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Guardias de Seguridad">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id="tooltip-rinion">Vigilantes-Guardias de Seguridad</Tooltip>
                                    }>
                                    <Form.Control
                                        type="number"
                                        placeholder="Guardias de Seguridad"
                                        value={form.sueldoVigilantesGuardiasSeguridad ? form.sueldoVigilantesGuardiasSeguridad : ''}
                                        name="sueldoVigilantesGuardiasSeguridad"
                                        onChange={handleChange} />
                                </OverlayTrigger>
                            </FloatingLabel>
                            <InputGroup.Text id="currency">$</InputGroup.Text>
                        </InputGroup>
                    </Col>

                    {/*Otros Puestos Operativos*/}
                    <Col xs={12} md={4} className="mb-3">
                        <InputGroup className="justify-content-center">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Otros">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id="tooltip-rinion">Otros Puestos Operativos</Tooltip>
                                    }>
                                    <Form.Control
                                        type="number"
                                        placeholder="Otros"
                                        value={form.sueldoOtrosPuestosOperativos ? form.sueldoOtrosPuestosOperativos : ''}
                                        name="sueldoOtrosPuestosOperativos"
                                        onChange={handleChange} />
                                </OverlayTrigger>
                            </FloatingLabel>
                            <InputGroup.Text id="currency">$</InputGroup.Text>
                        </InputGroup>
                    </Col>

                </Row>
            </Col>

        </Fragment>
    )

}


export default GP;