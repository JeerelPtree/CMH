import React, { Fragment, useState, useEffect } from "react";
import { Container, Col, Row, FloatingLabel, Button, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import YNOptions from "./json/yesOrNotOptions.json"
//import axios from "axios"


//we import css
import "../../../globalStyles.css"

const currentYear = new Date().getFullYear();

function SI() {

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

                            <SistemaIntegralHospitalario form={form} handleChange={handleChange} />

                            <SistemaERP form={form} handleChange={handleChange} />

                            <SistemaEMR form={form} handleChange={handleChange} />

                            <SistemaBIA form={form} handleChange={handleChange} />

                            <OtraInformacion form={form} handleChange={handleChange} />

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

function SistemaIntegralHospitalario(props) {
    const form = props.form
    const handleChange = props.handleChange

    return (
        <Fragment>
            <Col xs={12} md={12} className="mt-3">
                <Row>
                    {/*Título de la sección de la encuesta*/}
                    <Col xs={12} md={12} className="mb-3">
                        <h4 className="text-center sub-title-cmh">Sistema Integral Hospitalario</h4>
                    </Col>

                    {/*¿Cuenta su hospital con Sistema Integral Hospitalario?*/}
                    <Col xs={12} md={6} className="mb-3">
                        <GetSelector
                            label="¿Cuenta su hospital con Sistema Integral Hospitalario?"
                            value={form.sistemaIntegralHospitalario}
                            name={"sistemaIntegralHospitalario"}
                            handleChange={handleChange}
                            options={YNOptions}
                            isRequired={false}
                            show={true}
                        />
                    </Col>

                    <Col xs={12} md={6} className="mb-3">
                        {/*Marca Actual*/}
                        <GetInput
                            label="Marca Actual"
                            value={form.marcaActualSIH}
                            name="marcaActualSIH"
                            handleChange={handleChange}
                            tooltipDescrip="Marca actual del Sistema Integral Hospitalario"
                            placement="top"
                            type="text"
                            isRequired={false}
                            show={form.sistemaIntegralHospitalario}
                        />
                        {/*¿Tiene planes de adquisición?*/}
                        <GetSelector
                            label="¿Tiene planes de adquisición?"
                            value={form.planesAdquisicionSIH}
                            name={"planesAdquisicionSIH"}
                            handleChange={handleChange}
                            options={YNOptions}
                            isRequired={false}
                            show={form.sistemaIntegralHospitalario != true}
                        />
                    </Col>
                    <ModulosSIH form={form} handleChange={handleChange} show={form.sistemaIntegralHospitalario} />
                </Row>
            </Col>


        </Fragment>
    )
}

function ModulosSIH(props) {
    const form = props.form;
    const handleChange = props.handleChange;
    const show = props.show;

    if (show == true) {
        return (
            <Fragment>
                <Col xs={12} md={12} className="mt-3">
                    <Row>
                        {/*Título de la sección de la encuesta*/}
                        <Col xs={12} md={12} className="mb-3">
                            <h5 className="text-center title-cmh">Qué Módulos/Áreas abarca:</h5>
                        </Col>

                        {/*Admisión y Registro*/}
                        <Col xs={12} md={3} className="mb-3">
                            <GetSelector
                                label="Admisión y Registro"
                                value={form.admisionRegistroSIH}
                                name={"admisionRegistroSIH"}
                                handleChange={handleChange}
                                options={YNOptions}
                                isRequired={false}
                                show={true}
                            />
                        </Col>

                        {/*Índice de Pacientes*/}
                        <Col xs={12} md={3} className="mb-3">
                            <GetSelector
                                label="Índice de Pacientes"
                                value={form.indicePacientesSIH}
                                name={"indicePacientesSIH"}
                                handleChange={handleChange}
                                options={YNOptions}
                                isRequired={false}
                                show={true}
                            />
                        </Col>

                        {/*Enfermería */}
                        <Col xs={12} md={3} className="mb-3">
                            <GetSelector
                                label="Enfermería "
                                value={form.enfermeriaSIH}
                                name={"enfermeriaSIH"}
                                handleChange={handleChange}
                                options={YNOptions}
                                isRequired={false}
                                show={true}
                            />
                        </Col>

                        {/*Farmacia*/}
                        <Col xs={12} md={3} className="mb-3">
                            <GetSelector
                                label="Farmacia"
                                value={form.farmaciaSIH}
                                name={"farmaciaSIH"}
                                handleChange={handleChange}
                                options={YNOptions}
                                isRequired={false}
                                show={true}
                            />
                        </Col>

                        {/*Laboratorio */}
                        <Col xs={12} md={3} className="mb-3">
                            <GetSelector
                                label="Laboratorio"
                                value={form.laboratorioSIH}
                                name={"laboratorioSIH"}
                                handleChange={handleChange}
                                options={YNOptions}
                                isRequired={false}
                                show={true}
                            />
                        </Col>

                        {/*Imagen*/}
                        <Col xs={12} md={3} className="mb-3">
                            <GetSelector
                                label="Imagen"
                                value={form.imagenSIH}
                                name={"imagenSIH"}
                                handleChange={handleChange}
                                options={YNOptions}
                                isRequired={false}
                                show={true}
                            />
                        </Col>

                        {/*Urgencias*/}
                        <Col xs={12} md={3} className="mb-3">
                            <GetSelector
                                label="Urgencias"
                                value={form.urgenciasSIH}
                                name={"urgenciasSIH"}
                                handleChange={handleChange}
                                options={YNOptions}
                                isRequired={false}
                                show={true}
                            />
                        </Col>

                        {/*Hospitalización*/}
                        <Col xs={12} md={3} className="mb-3">
                            <GetSelector
                                label="Hospitalización"
                                value={form.hospitalizacionSIH}
                                name={"hospitalizacionSIH"}
                                handleChange={handleChange}
                                options={YNOptions}
                                isRequired={false}
                                show={true}
                            />
                        </Col>

                        {/*Quirófanos*/}
                        <Col xs={12} md={3} className="mb-3">
                            <GetSelector
                                label="Quirófanos"
                                value={form.quirofanosSIH}
                                name={"quirofanosSIH"}
                                handleChange={handleChange}
                                options={YNOptions}
                                isRequired={false}
                                show={true}
                            />
                        </Col>

                        {/*Unidad Cuidados Intensivos*/}
                        <Col xs={12} md={3} className="mb-3">
                            <GetSelector
                                label="Unidad Cuidados Intensivos"
                                value={form.unidadCuidadosIntensivosSIH}
                                name={"unidadCuidadosIntensivosSIH"}
                                handleChange={handleChange}
                                options={YNOptions}
                                isRequired={false}
                                show={true}
                            />
                        </Col>

                        {/*Dietología*/}
                        <Col xs={12} md={3} className="mb-3">
                            <GetSelector
                                label="Dietología"
                                value={form.dietologiaSIH}
                                name={"dietologiaSIH"}
                                handleChange={handleChange}
                                options={YNOptions}
                                isRequired={false}
                                show={true}
                            />
                        </Col>
                    </Row>
                </Col>
            </Fragment>
        )
    }
}

function SistemaERP(props) {
    const form = props.form
    const handleChange = props.handleChange

    return (
        <Fragment>
            <Col xs={12} md={12} className="mt-3">
                <Row>
                    {/*Título de la sección de la encuesta*/}
                    <Col xs={12} md={12} className="mb-3">
                        <h4 className="text-center sub-title-cmh">Sistema de Gestión ERP</h4>
                    </Col>

                    {/*¿Su Hospital cuenta con ERP?*/}
                    <Col xs={12} md={6} className="mb-3">
                        <GetSelector
                            label="¿Su Hospital cuenta con ERP?"
                            value={form.sistemaERP}
                            name={"sistemaERP"}
                            handleChange={handleChange}
                            options={YNOptions}
                            isRequired={false}
                            show={true}
                        />
                    </Col>

                    <Col xs={12} md={6} className="mb-3">
                        {/*Marca Actual*/}
                        <GetInput
                            label="Marca Actual"
                            value={form.marcaActualERP}
                            name="marcaActualERP"
                            handleChange={handleChange}
                            tooltipDescrip="Marca actual del Sistema de Gestión ERP"
                            placement="top"
                            type="text"
                            isRequired={false}
                            show={form.sistemaERP}
                        />
                        {/*¿Tiene planes de adquisición?*/}
                        <GetSelector
                            label="¿Tiene planes de adquisición?"
                            value={form.planesAdquisicionERP}
                            name={"planesAdquisicionERP"}
                            handleChange={handleChange}
                            options={YNOptions}
                            isRequired={false}
                            show={form.sistemaERP != true}
                        />
                    </Col>
                    <ModulosERP form={form} handleChange={handleChange} show={form.sistemaERP} />
                </Row>
            </Col>


        </Fragment>
    )
}

function ModulosERP(props) {
    const form = props.form;
    const handleChange = props.handleChange;
    const show = props.show;

    if (show == true) {
        return (
            <Fragment>
                <Col xs={12} md={12} className="mt-3">
                    <Row>
                        {/*Título de la sección de la encuesta*/}
                        <Col xs={12} md={12} className="mb-3">
                            <h5 className="text-center title-cmh">Qué Módulos abarca:</h5>
                        </Col>

                        {/*Gobierno Corporativo*/}
                        <Col xs={12} md={3} className="mb-3">
                            <GetSelector
                                label="Gobierno Corporativo"
                                value={form.gobiernoCorporativoERP}
                                name={"gobiernoCorporativoERP"}
                                handleChange={handleChange}
                                options={YNOptions}
                                isRequired={false}
                                show={true}
                            />
                        </Col>

                        {/*RH/Nómina*/}
                        <Col xs={12} md={3} className="mb-3">
                            <GetSelector
                                label="RH/Nómina"
                                value={form.rhNominaERP}
                                name={"rhNominaERP"}
                                handleChange={handleChange}
                                options={YNOptions}
                                isRequired={false}
                                show={true}
                            />
                        </Col>

                        {/*Contabilidad*/}
                        <Col xs={12} md={3} className="mb-3">
                            <GetSelector
                                label="Contabilidad"
                                value={form.contabilidadERP}
                                name={"contabilidadERP"}
                                handleChange={handleChange}
                                options={YNOptions}
                                isRequired={false}
                                show={true}
                            />
                        </Col>

                        {/*CXC*/}
                        <Col xs={12} md={3} className="mb-3">
                            <GetSelector
                                label="CXC"
                                value={form.cxcERP}
                                name={"cxcERP"}
                                handleChange={handleChange}
                                options={YNOptions}
                                isRequired={false}
                                show={true}
                            />
                        </Col>

                        {/*CXP*/}
                        <Col xs={12} md={3} className="mb-3">
                            <GetSelector
                                label="CXP"
                                value={form.cxpERP}
                                name={"cxpERP"}
                                handleChange={handleChange}
                                options={YNOptions}
                                isRequired={false}
                                show={true}
                            />
                        </Col>

                        {/*Caja/Facturación*/}
                        <Col xs={12} md={3} className="mb-3">
                            <GetSelector
                                label="Caja/Facturación"
                                value={form.cajaFacturacionERP}
                                name={"cajaFacturacionERP"}
                                handleChange={handleChange}
                                options={YNOptions}
                                isRequired={false}
                                show={true}
                            />
                        </Col>

                        {/*CRM (Customer Relationship Management)*/}
                        <Col xs={12} md={3} className="mb-3">
                            <GetSelector
                                label="CRM"
                                value={form.crmERP}
                                name={"crmERP"}
                                handleChange={handleChange}
                                options={YNOptions}
                                isRequired={false}
                                show={true}
                            />
                        </Col>

                        {/*Ventas*/}
                        <Col xs={12} md={3} className="mb-3">
                            <GetSelector
                                label="Ventas"
                                value={form.ventasERP}
                                name={"ventasERP"}
                                handleChange={handleChange}
                                options={YNOptions}
                                isRequired={false}
                                show={true}
                            />
                        </Col>

                        {/*Compras*/}
                        <Col xs={12} md={3} className="mb-3">
                            <GetSelector
                                label="Compras"
                                value={form.comprasERP}
                                name={"comprasERP"}
                                handleChange={handleChange}
                                options={YNOptions}
                                isRequired={false}
                                show={true}
                            />
                        </Col>

                        {/*Almacén*/}
                        <Col xs={12} md={3} className="mb-3">
                            <GetSelector
                                label="Almacén"
                                value={form.almacenERP}
                                name={"almacenERP"}
                                handleChange={handleChange}
                                options={YNOptions}
                                isRequired={false}
                                show={true}
                            />
                        </Col>

                    </Row>
                </Col>
            </Fragment>
        )
    }
}

function SistemaEMR(props) {
    const form = props.form
    const handleChange = props.handleChange

    return (
        <Fragment>
            <Col xs={12} md={12} className="mt-3">
                <Row>
                    {/*Título de la sección de la encuesta*/}
                    <Col xs={12} md={12} className="mb-3">
                        <h4 className="text-center sub-title-cmh">Expediente Clínico Electrónico (EMR)</h4>
                    </Col>

                    {/*¿Su Hospital cuenta con EMR?*/}
                    <Col xs={12} md={6} className="mb-3">
                        <GetSelector
                            label="¿Su Hospital cuenta con EMR?"
                            value={form.sistemaEMR}
                            name={"sistemaEMR"}
                            handleChange={handleChange}
                            options={YNOptions}
                            isRequired={false}
                            show={true}
                        />
                    </Col>

                    <Col xs={12} md={6} className="mb-3">
                        {/*Marca Actual*/}
                        <GetInput
                            label="Marca Actual"
                            value={form.marcaActualEMR}
                            name="marcaActualEMR"
                            handleChange={handleChange}
                            tooltipDescrip="Marca actual del Sistema de Gestión EMR"
                            placement="top"
                            type="text"
                            isRequired={false}
                            show={form.sistemaEMR}
                        />
                        {/*¿Tiene planes de adquisición?*/}
                        <GetSelector
                            label="¿Tiene planes de adquisición?"
                            value={form.planesAdquisicionEMR}
                            name={"planesAdquisicionEMR"}
                            handleChange={handleChange}
                            options={YNOptions}
                            isRequired={false}
                            show={form.sistemaEMR != true}
                        />
                    </Col>
                    <ModulosEMR form={form} handleChange={handleChange} show={form.sistemaEMR} />
                </Row>
            </Col>


        </Fragment>
    )
}

function ModulosEMR(props) {
    const form = props.form;
    const handleChange = props.handleChange;
    const show = props.show;

    if (show == true) {
        return (
            <Fragment>
                <Col xs={12} md={12} className="mt-3">
                    <Row>
                        {/*Título de la sección de la encuesta*/}
                        <Col xs={12} md={12} className="mb-3">
                            <h5 className="text-center title-cmh">Qué Servicios que abarca</h5>
                        </Col>

                        {/*Urgencias*/}
                        <Col xs={12} md={3} className="mb-3">
                            <GetSelector
                                label="Urgencias"
                                value={form.urgenciasEMR}
                                name={"urgenciasEMR"}
                                handleChange={handleChange}
                                options={YNOptions}
                                isRequired={false}
                                show={true}
                            />
                        </Col>

                        {/*Hospitalización*/}
                        <Col xs={12} md={3} className="mb-3">
                            <GetSelector
                                label="Hospitalización"
                                value={form.hospitalizacionEMR}
                                name={"hospitalizacionEMR"}
                                handleChange={handleChange}
                                options={YNOptions}
                                isRequired={false}
                                show={true}
                            />
                        </Col>

                        {/*Unidad Cuidados Intensivos*/}
                        <Col xs={12} md={3} className="mb-3">
                            <GetSelector
                                label="Unidad Cuidados Intensivos"
                                value={form.unidadCuidadosIntensivosEMR}
                                name={"unidadCuidadosIntensivosEMR"}
                                handleChange={handleChange}
                                options={YNOptions}
                                isRequired={false}
                                show={true}
                            />
                        </Col>

                        {/*Consulta Externa*/}
                        <Col xs={12} md={3} className="mb-3">
                            <GetSelector
                                label="Consulta Externa"
                                value={form.consultaExternaEMR}
                                name={"consultaExternaEMR"}
                                handleChange={handleChange}
                                options={YNOptions}
                                isRequired={false}
                                show={true}
                            />
                        </Col>

                        {/*Quirófano*/}
                        <Col xs={12} md={3} className="mb-3">
                            <GetSelector
                                label="Quirófano"
                                value={form.quirofanoEMR}
                                name={"quirofanoEMR"}
                                handleChange={handleChange}
                                options={YNOptions}
                                isRequired={false}
                                show={true}
                            />
                        </Col>

                        {/*Dietología*/}
                        <Col xs={12} md={3} className="mb-3">
                            <GetSelector
                                label="Dietología"
                                value={form.dietologiaEMR}
                                name={"dietologiaEMR"}
                                handleChange={handleChange}
                                options={YNOptions}
                                isRequired={false}
                                show={true}
                            />
                        </Col>

                        {/*Historial Clínico*/}
                        <Col xs={12} md={3} className="mb-3">
                            <GetSelector
                                label="Historial Clínico"
                                value={form.historialClinicoEMR}
                                name={"historialClinicoEMR"}
                                handleChange={handleChange}
                                options={YNOptions}
                                isRequired={false}
                                show={true}
                            />
                        </Col>

                        {/*Programas de Prevención*/}
                        <Col xs={12} md={3} className="mb-3">
                            <GetSelector
                                label="Programas de Prevención"
                                value={form.programasPrevencionEMR}
                                name={"programasPrevencionEMR"}
                                handleChange={handleChange}
                                options={YNOptions}
                                isRequired={false}
                                show={true}
                            />
                        </Col>

                    </Row>
                </Col>
            </Fragment>
        )
    }
}

function SistemaBIA(props) {
    const form = props.form
    const handleChange = props.handleChange

    return (
        <Fragment>
            <Col xs={12} md={12} className="mt-3">
                <Row>
                    {/*Título de la sección de la encuesta*/}
                    <Col xs={12} md={12} className="mb-3">
                        <h4 className="text-center sub-title-cmh">Business Intelligence o Analytics</h4>
                    </Col>

                    {/*¿Su Hospital cuenta con Business Intelligence o Analytics?*/}
                    <Col xs={12} md={6} className="mb-3">
                        <GetSelector
                            label="¿Su Hospital cuenta con Business Intelligence o Analytics?"
                            value={form.sistemaBIA}
                            name={"sistemaBIA"}
                            handleChange={handleChange}
                            options={YNOptions}
                            isRequired={false}
                            show={true}
                        />
                    </Col>

                    <Col xs={12} md={6} className="mb-3">
                        {/*Marca Actual*/}
                        <GetInput
                            label="Marca Actual"
                            value={form.marcaActualBIA}
                            name="marcaActualBIA"
                            handleChange={handleChange}
                            tooltipDescrip="Marca actual del Sistema de Business Intelligence o Analytics"
                            placement="top"
                            type="text"
                            isRequired={false}
                            show={form.sistemaBIA}
                        />
                        {/*¿Tiene planes de adquisición?*/}
                        <GetSelector
                            label="¿Tiene planes de adquisición?"
                            value={form.planesAdquisicionBIA}
                            name={"planesAdquisicionBIA"}
                            handleChange={handleChange}
                            options={YNOptions}
                            isRequired={false}
                            show={form.sistemaBIA != true}
                        />
                    </Col>
                </Row>
            </Col>


        </Fragment>
    )
}

function OtraInformacion(props) {
    const form = props.form
    const handleChange = props.handleChange

    return (
        <Fragment>
            <Col xs={12} md={12} className="mt-3">
                <Row>
                    {/*Título de la sección de la encuesta*/}
                    <Col xs={12} md={12} className="mb-3">
                        <h4 className="text-center sub-title-cmh">Otra Información</h4>
                    </Col>

                    {/*¿Cuenta con Servidor Propio o Rentado?*/}
                    <Col xs={12} md={6} className="mb-3">
                        <GetSelector
                            label="¿Cuenta con Servidor Propio o Rentado?"
                            value={form.servidor}
                            name={"servidor"}
                            handleChange={handleChange}
                            options={[
                                { "value": "propio", "name": "PROPIO", "id": 1 },
                                { "value": "rentado", "name": "RENTADO", "id": 2 }]}
                            isRequired={false}
                            show={true}
                        />
                    </Col>

                    {/*Capacidad*/}
                    <Col xs={12} md={6} className="mb-3">
                        <GetInput
                            label="Capacidad del Servidor"
                            value={form.capacidadServidor}
                            name="capacidadServidor"
                            handleChange={handleChange}
                            tooltipDescrip="¿Cuál es la capacidad del Servidor para el Almacenamiento y Resguardo de su Información? (en años)"
                            placement="top"
                            type="number"
                            isRequired={false}
                            show={true}
                        />
                    </Col>

                    {/*Características Principales del Servidor*/}
                    <Col xs={12} md={6} className="mb-3">
                        <GetInput
                            label="Características Principales del Servidor"
                            value={form.caracteristicasServidor}
                            name="caracteristicasServidor"
                            handleChange={handleChange}
                            tooltipDescrip="Características Principales del Servidor"
                            placement="top"
                            type="text"
                            isRequired={false}
                            show={true}
                        />
                    </Col>

                    {/*¿Cuentan con Personal de Sistemas?*/}
                    <Col xs={12} md={6} className="mb-3">
                        <GetSelector
                            label="¿Cuentan con Personal de Sistemas?"
                            value={form.personalSistemas}
                            name={"personalSistemas"}
                            handleChange={handleChange}
                            options={YNOptions}
                            isRequired={false}
                            show={true}
                        />
                    </Col>

                    {/*Cantidad de personas con acceso a computadora*/}
                    <Col xs={12} md={6} className="mb-3">
                        <GetInput
                            label="Personas con acceso a internet"
                            value={form.personasAccesoComputadoras}
                            name="personasAccesoComputadoras"
                            handleChange={handleChange}
                            tooltipDescrip="¿Qué cantidad de personal tiene acceso a un equipo de computo e internet?"
                            placement="top"
                            type="number"
                            isRequired={false}
                            show={true}
                        />
                    </Col>

                    {/*¿Con qué capacidad de Internet cuenta el Hospital? Velocidad de Navegación:*/}
                    <Col xs={12} md={6} className="mb-3">
                        <GetInput
                            label="Velocidad de navegación"
                            value={form.velocidadNavegacion}
                            name="velocidadNavegacion"
                            handleChange={handleChange}
                            tooltipDescrip="¿Con qué capacidad de Internet cuenta el Hospital? (Velocidad de Navegación)"
                            placement="top"
                            type="number"
                            isRequired={false}
                            show={true}
                        />
                    </Col>
                </Row>
            </Col>


        </Fragment>
    )
}

function GetInput(props) {

    //we obtain their props
    const { label, value, name, handleChange, tooltipDescrip, type, isRequired, placement, show } = props

    if (show == true) {
        return (
            <Fragment>
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
                            onChange={handleChange} required={isRequired} autoComplete="off" />
                    </OverlayTrigger>
                </FloatingLabel>
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

export default SI;