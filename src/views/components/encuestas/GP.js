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
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Director General"
                            value={form.sueldoDirectorGerenteGeneral}
                            name="sueldoDirectorGerenteGeneral"
                            handleChange={handleChange}
                            tooltipDescrip="Director/Gerente General"
                        />

                    </Col>

                    {/*Director/Gerente Administrativo*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Director Administrativo"
                            value={form.sueldoDirectorGerenteAdministrativo}
                            name="sueldoDirectorGerenteAdministrativo"
                            handleChange={handleChange}
                            tooltipDescrip="Director/Gerente Administrativo"
                        />

                    </Col>

                    {/*Director/ Gerente Médico*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Director Médico"
                            value={form.sueldoDirectorGerenteMedico}
                            name="sueldoDirectorGerenteMedico"
                            handleChange={handleChange}
                            tooltipDescrip="Director/Gerente Médico"
                        />

                    </Col>

                    {/*Gerente/Jefatura de Enfermería*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Gerente de Enfermería"
                            value={form.sueldoGerenteJefaturaEnfermeria}
                            name="sueldoGerenteJefaturaEnfermeria"
                            handleChange={handleChange}
                            tooltipDescrip="Gerente/Jefatura de Enfermería"
                        />

                    </Col>

                    {/*Jefe/Gerente/Coordinador de Calidad*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Jefe de Calidad"
                            value={form.sueldoJefeGerenteCoordinadorCalidad}
                            name="sueldoJefeGerenteCoordinadorCalidad"
                            handleChange={handleChange}
                            tooltipDescrip="Jefe/Gerente/Coordinador de Calidad"
                        />

                    </Col>

                    {/*Jefe/Gerente de Compras*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Jefe de Compras"
                            value={form.sueldoJefeGerenteCompras}
                            name="sueldoJefeGerenteCompras"
                            handleChange={handleChange}
                            tooltipDescrip="Jefe/Gerente de Compras"
                        />

                    </Col>

                    {/*Jefe/Gerente de Mercadotecnia*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Jefe de Mercadotecnia"
                            value={form.sueldoJefeGerenteMercadotecnia}
                            name="sueldoJefeGerenteMercadotecnia"
                            handleChange={handleChange}
                            tooltipDescrip="Jefe/Gerente de Mercadotecnia"
                        />

                    </Col>

                    {/*Jefe/Gerente de Recursos Humanos*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Jefe de RH"
                            value={form.sueldoJefeGerenteRecursosHumanos}
                            name="sueldoJefeGerenteRecursosHumanos"
                            handleChange={handleChange}
                            tooltipDescrip="Jefe/Gerente de Recursos Humanos"
                        />

                    </Col>

                    {/*Jefe de Contabilidad*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Jefe de Contabilidad"
                            value={form.sueldoJefeContabilidad}
                            name="sueldoJefeContabilidad"
                            handleChange={handleChange}
                            tooltipDescrip="Jefe de Contabilidad"
                        />

                    </Col>

                    {/*Jefe de Radiología*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Jefe de Radiología"
                            value={form.sueldoJefeRadiologia}
                            name="sueldoJefeRadiologia"
                            handleChange={handleChange}
                            tooltipDescrip="Jefe de Radiología- *propio"
                        />

                    </Col>

                    {/*Jefe de Laboratorio*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Jefe de Laboratorio"
                            value={form.sueldoJefeLaboratorio}
                            name="sueldoJefeLaboratorio"
                            handleChange={handleChange}
                            tooltipDescrip="Jefe de Laboratorio- *propio"
                        />

                    </Col>

                    {/*TODO: Falta por editar estos inputs hacia abajo*/}
                    {/*Jefe de Servicio Médico (Urgencias, UCI, UCIN, Quirófano, Hospitalización, etc.)*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Jefe de Servicio Médico"
                            value={form.sueldoJefeServicioMedico}
                            name="sueldoJefeServicioMedico"
                            handleChange={handleChange}
                            tooltipDescrip="Jefe de Servicio Médico (Urgencias, UCI, UCIN, Quirófano, Hospitalización, etc.)"
                        />

                    </Col>

                    {/*Médicos de Urgencias*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Médicos de Urgencias"
                            value={form.sueldoMedicosUrgencias}
                            name="sueldoMedicosUrgencias"
                            handleChange={handleChange}
                            tooltipDescrip="Médicos de Urgencias"
                        />

                    </Col>

                    {/*Supervisora de Enfermería*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Supervisora Enfermería"
                            value={form.sueldoSupervisoraEnfermeria}
                            name="sueldoSupervisoraEnfermeria"
                            handleChange={handleChange}
                            tooltipDescrip="Supervisora de Enfermería"
                        />

                    </Col>

                    {/*Enfermera Especialista*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Enfermera Especialista"
                            value={form.sueldoEnfermeraEspecialista}
                            name="sueldoEnfermeraEspecialista"
                            handleChange={handleChange}
                            tooltipDescrip="Enfermera Especialista"
                        />

                    </Col>

                    {/*Enfermera General*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Enfermera General"
                            value={form.sueldoEnfermeraGeneral}
                            name="sueldoEnfermeraGeneral"
                            handleChange={handleChange}
                            tooltipDescrip="Enfermera General"
                        />

                    </Col>

                    {/*Técnico en Enfermería*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Técnico en Enfermería"
                            value={form.sueldoTecnicoEnfermeria}
                            name="sueldoTecnicoEnfermeria"
                            handleChange={handleChange}
                            tooltipDescrip="Técnico en Enfermería"
                        />

                    </Col>

                    {/*Auxiliar de Enfermería*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Auxiliar de Enfermería"
                            value={form.sueldoAuxiliarEnfermeria}
                            name="sueldoAuxiliarEnfermeria"
                            handleChange={handleChange}
                            tooltipDescrip="Auxiliar de Enfermería"
                        />

                    </Col>

                    {/*Técnico de Laboratorio*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Técnico de Laboratorio"
                            value={form.sueldoTecnicoLaboratorio}
                            name="sueldoTecnicoLaboratorio"
                            handleChange={handleChange}
                            tooltipDescrip="Técnico de Laboratorio"
                        />

                    </Col>

                    {/*Técnico de Rayos X*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Técnico de Rayos X"
                            value={form.sueldoTecnicoRayosX}
                            name="sueldoTecnicoRayosX"
                            handleChange={handleChange}
                            tooltipDescrip="Técnico de Rayos X"
                        />

                    </Col>



                    {/*Camillero*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Camillero"
                            value={form.sueldoCamillero}
                            name="sueldoCamillero"
                            handleChange={handleChange}
                            tooltipDescrip="Camillero"
                        />

                    </Col>

                    {/*Admisión*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Admisión"
                            value={form.sueldoAdmision}
                            name="sueldoAdmision"
                            handleChange={handleChange}
                            tooltipDescrip="Admisión"
                        />

                    </Col>

                    {/*Jefe/Coordinador Intendencia*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Jefe Intendencia"
                            value={form.sueldoJefeIntendencia}
                            name="sueldoJefeIntendencia"
                            handleChange={handleChange}
                            tooltipDescrip="Jefe/Coordinador Intendencia"
                        />

                    </Col>

                    {/*Personal de Intendencia*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Personal de Intendencia"
                            value={form.sueldoPersonalIntendencia}
                            name="sueldoPersonalIntendencia"
                            handleChange={handleChange}
                            tooltipDescrip="Personal de Intendencia"
                        />

                    </Col>

                    {/*Jefe/Coordinador de Nutrición Hospitalaria*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Jefe de NH"
                            value={form.sueldoJefeNutricionHospitalaria}
                            name="sueldoJefeNutricionHospitalaria"
                            handleChange={handleChange}
                            tooltipDescrip="Jefe/Coordinador de Nutrición Hospitalaria"
                        />

                    </Col>

                    {/*Cocineros*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Cocineros"
                            value={form.sueldoCocineros}
                            name="sueldoCocineros"
                            handleChange={handleChange}
                            tooltipDescrip="Cocineros"
                        />

                    </Col>

                    {/*Jefe de Mantenimiento*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Jefe de Mantenimiento"
                            value={form.sueldoJefeMantenimiento}
                            name="sueldoJefeMantenimiento"
                            handleChange={handleChange}
                            tooltipDescrip="Jefe de Mantenimiento"
                        />

                    </Col>

                    {/*Personal de Mantenimiento*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Personal Mantenimiento"
                            value={form.sueldoPersonalMantenimiento}
                            name="sueldoPersonalMantenimiento"
                            handleChange={handleChange}
                            tooltipDescrip="Personal de Mantenimiento"
                        />

                    </Col>

                    {/*Personal de Lavanderia*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Personal de Lavanderia"
                            value={form.sueldoPersonalLavanderia}
                            name="sueldoPersonalLavanderia"
                            handleChange={handleChange}
                            tooltipDescrip="Personal de Lavanderia"
                        />

                    </Col>

                    {/*Jefe de Seguridad*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Jefe de Seguridad"
                            value={form.sueldoJefeSeguridad}
                            name="sueldoJefeSeguridad"
                            handleChange={handleChange}
                            tooltipDescrip="Jefe de Seguridad"
                        />

                    </Col>

                    {/*Vigilantes-Guardias de Seguridad*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Guardias de Seguridad"
                            value={form.sueldoVigilantesGuardiasSeguridad}
                            name="sueldoVigilantesGuardiasSeguridad"
                            handleChange={handleChange}
                            tooltipDescrip="Vigilantes-Guardias de Seguridad"
                        />

                    </Col>

                    {/*Otros Puestos Operativos*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Otros"
                            value={form.sueldoOtrosPuestosOperativos}
                            name="sueldoOtrosPuestosOperativos"
                            handleChange={handleChange}
                            tooltipDescrip="Otros Puestos Operativos"
                        />

                    </Col>

                    <Col xs={12} md={12} className="mb-3">

                        <InputGroup>
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
                                        onChange={handleChange}
                                        style={{ height: '100px' }} />
                                </OverlayTrigger>
                            </FloatingLabel>
                            <InputGroup.Text id="currency">$</InputGroup.Text>
                        </InputGroup>

                    </Col>

                    {/*Director/ Gerente de Operaciones*/}
                    <Col xs={12} md={12} className="mb-3">

                        <InputGroup>
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
                                        onChange={handleChange}
                                        style={{ height: '100px' }} />
                                </OverlayTrigger>
                            </FloatingLabel>
                            <InputGroup.Text id="currency">$</InputGroup.Text>
                        </InputGroup>

                    </Col>

                    {/*Jefe/Gerente de Comercialización-Ventas*/}
                    <Col xs={12} md={3} className="mb-3">

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
                                        onChange={handleChange}
                                        style={{ height: '100px' }} />
                                </OverlayTrigger>
                            </FloatingLabel>
                            <InputGroup.Text id="currency">$</InputGroup.Text>
                        </InputGroup>
                    </Col>

                    {/*Jefe de Nutrición Clínica*/}
                    <Col xs={12} md={3} className="mb-3">

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
                                        onChange={handleChange}
                                        style={{ height: '100px' }} />
                                </OverlayTrigger>
                            </FloatingLabel>
                            <InputGroup.Text id="currency">$</InputGroup.Text>
                        </InputGroup>
                    </Col>

                    {/*Coordinadora de Enfermería*/}
                    <Col xs={12} md={3} className="mb-3">
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
                                        onChange={handleChange}
                                        style={{ height: '100px' }} />
                                </OverlayTrigger>
                            </FloatingLabel>
                            <InputGroup.Text id="currency">$</InputGroup.Text>
                        </InputGroup>
                    </Col>

                    {/*Técnico en Inhaloterapia o Terapia Respiratoria*/}
                    <Col xs={12} md={3} className="mb-3">

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

                </Row>
            </Col>

        </Fragment>
    )

}

function GetSelectSueldos(props) {

    //we obtain their props
    const { label, value, name, handleChange, tooltipDescrip } = props

    return (
        <Fragment>
            <InputGroup>
                <FloatingLabel
                    controlId="floatingInput"
                    label={label}>
                    <OverlayTrigger
                        placement="right"
                        overlay={
                            <Tooltip id={`tooltip-${name}`}>{tooltipDescrip}</Tooltip>
                        }>
                        <Form.Control
                            type="number"
                            min={0}
                            placeholder={label}
                            value={value ? value : ''}
                            name={name}
                            onChange={handleChange}
                            autoComplete="off"
                        />
                    </OverlayTrigger>
                </FloatingLabel>
                <InputGroup.Text id="currency" className="input-group-text-currency">$</InputGroup.Text>
            </InputGroup>
        </Fragment>
    )
}


export default GP;