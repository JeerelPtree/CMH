import React, { Fragment, useState, useEffect } from "react";
import { Container, Col, Row, FloatingLabel, InputGroup, Button, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import YNOptions from "./json/yesOrNotOptions.json"

//we import css
import "../../../globalStyles.css"

const currentYear = new Date().getFullYear();

function Calidad() {

    /* Creating a state variable called form and setting it to an empty object. */
    const [form, setForm] = useState({})


    /**
     * It takes an event, persists it, then sets the form state to the event target name and value.
     * @param e - the event object
     */
    const handleChange = async (e) => {

        e.persist();

        await setForm(
            {
                ...form,
                [e.target.name]: e.target.value
            }
        );

    }

    /**
     * It takes the form, and then it logs it to the console.
     */
    const prueba = () => {
        console.log(form)
    }

    return (
        <Fragment>
            <Container className="mt-3">
                <Row>
                    <Col xs={12} md={12}>
                        <Row>

                            <CalidadHospitalaria form={form} handleChange={handleChange} />

                            <EficienciaHospitalaria form={form} handleChange={handleChange} />

                            <Satisfaccion form={form} handleChange={handleChange} />

                            <ProduccionSH form={form} handleChange={handleChange} />

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

function CalidadHospitalaria(props) {
    const form = props.form
    const handleChange = props.handleChange

    return (
        <Fragment>
            <Col xs={12} md={12} className="mt-3">
                <Row className="">
                    {/*Título de la sección de la encuesta*/}
                    <Col xs={12} md={12} className="mb-3">
                        <h4 className="text-center sub-title-cmh">Indicadores de Calidad Hospitalaria</h4>
                    </Col>

                    {/*Tasa de Reingresos en Hospitalización*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInputFormat
                            label="Tasa de Reingresos"
                            value={form.tasaReingresosHospitalizacion}
                            name="tasaReingresosHospitalizacion"
                            handleChange={handleChange}
                            tooltipDescrip="
                            Proporción de pacientes que vuelven a ingresar en el hospital por un diagnóstico similar. 

                            Nº de Reingresos por misma enfermedad* x 100 / Nº Egresos en el mismo período
                            
                            *Reingresos en hospitalización a 30 días del alta."
                            type="number"
                            isRequired={true}
                            placement="right"
                            show={true}
                            isRight={true}
                            rightSymbol="%"
                        />
                    </Col>

                    {/*Tasa de Mortalidad Hospitalaria General por 100 Egresos*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInputFormat
                            label="Tasa de Mortalidad"
                            value={form.tasaMortalidadHospitalariaGeneral100}
                            name="tasaMortalidadHospitalariaGeneral100"
                            handleChange={handleChange}
                            tooltipDescrip="
                            Proporción de fallecidos en el hospital respecto al total de egresos durante un mismo período, considerando sólo las muertes que ocurrieron a partir de las 48 horas de ingresado el paciente.

                            Nº de Defunciones Hospitalarias* x 100 / Nº Egresos en el mismo período

                           *Fallecidos a partir de 48 horas de Admisión al Hospital, Servicio o Especialidad en un período."
                            type="number"
                            isRequired={true}
                            placement="right"
                            show={true}
                            isRight={true}
                            rightSymbol="%"
                        />
                    </Col>

                    {/*Porcentaje de pacientes hospitalizados en quienes se registró al menos un Evento Adverso*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInputFormat
                            label="Evento Adverso"
                            value={form.porcentajePacientesEventoAdverso}
                            name="porcentajePacientesEventoAdverso"
                            handleChange={handleChange}
                            tooltipDescrip="
                            Porcentaje de pacientes hospitalizados en quienes se registró al menos un Evento Adverso

                            Pacientes Hospitalizados en quienes se registró al menos un Evento Adverso x 100 / Total de Pacientes Hospitalizados"
                            type="number"
                            isRequired={true}
                            placement="right"
                            show={true}
                            isRight={true}
                            rightSymbol="%"
                        />
                    </Col>

                    {/*Eventos Centinela*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInputFormat
                            label="Eventos Centinela"
                            value={form.numeroEventosCentinela}
                            name="numeroEventosCentinela"
                            handleChange={handleChange}
                            tooltipDescrip="
                            Número de Eventos Centinela  que se presentaron en el Servicio de Hospitalización.

                            Nº Eventos Centinela"
                            type="number"
                            isRequired={true}
                            placement="right"
                            show={true}
                            isRight={true}
                            rightSymbol="%"
                        />
                    </Col>

                    {/*Tasa Anual de Infecciones Asociadas a la Atención de la Salud (IAAS)*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInputFormat
                            label="Tasa anual IAAS"
                            value={form.tasaAnualIAAS}
                            name="tasaAnualIAAS"
                            handleChange={handleChange}
                            tooltipDescrip="
                            Se define como Infecciones Intrahospitalarias (Infecciones Asociadas a la Atención de Salud) a aquellos procesos infecciosos que ocurren durante la hospitalización de un paciente entre las 48-72 horas posteriores al ingreso o después del egreso que no se encontraban presentes ni en incubación en el momento de la Admisión; cualquiera que fuera la causa que motivó la hospitalización.
                            
                            Total de infecciones Intrahospitalarias x 100 / Nº de días paciente en el año"
                            type="number"
                            isRequired={true}
                            placement="right"
                            show={true}
                            isRight={true}
                            rightSymbol="%"
                        />
                    </Col>

                    {/*Porcentaje de Accidentes/Incidentes Quirúrgicos*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInputFormat
                            label="Accidentes Quirúrgicos"
                            value={form.porcentajeAccidentesQuirurgicos}
                            name="porcentajeAccidentesQuirurgicos"
                            handleChange={handleChange}
                            tooltipDescrip="
                            Proporción de procedimientos quirúrgicos que presentan accidentes o incidentes.
                            
                            Nº de Accidentes e incidentes Quirúrgicos x 100 / Nº Intervenciones Quirúrgicas realizadas"
                            type="number"
                            isRequired={true}
                            placement="right"
                            show={true}
                            isRight={true}
                            rightSymbol="%"
                        />
                    </Col>

                    {/*Porcentaje de llenado correcto del Expediente Clínico*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInputFormat
                            label="Llenado Correcto EC"
                            value={form.porcentajeLlenadoEC}
                            name="porcentajeLlenadoEC"
                            handleChange={handleChange}
                            tooltipDescrip="
                            Proporción de expedientes clínicos con llenado correcto.
                            
                            Número de expedientes clínicos completos x 100 / Número de expedientes revisados"
                            type="number"
                            isRequired={true}
                            placement="right"
                            show={true}
                            isRight={true}
                            rightSymbol="%"
                        />
                    </Col>

                </Row>
            </Col>
        </Fragment>
    );
}

function EficienciaHospitalaria(props) {
    const form = props.form
    const handleChange = props.handleChange

    return (
        <Fragment>
            <Col xs={12} md={12} className="mt-3">
                <Row className="">
                    {/*Título de la sección de la encuesta*/}
                    <Col xs={12} md={12} className="mb-3">
                        <h4 className="text-center sub-title-cmh">Indicadores de Eficiencia Hospitalaria</h4>
                    </Col>

                    {/*Promedio de Días Estancia Hospitalaria*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInput
                            label="Dias Estancia Hospitalaria"
                            value={form.promedioDiasEstancia}
                            name="promedioDiasEstancia"
                            handleChange={handleChange}
                            tooltipDescrip="
                            Determinar el promedio de días de permanencia de los pacientes que egresaron en un período.

                            Total días estancia de egresos / Nº Egresos Hospitalarios"
                            type="number"
                            isRequired={true}
                            placement="right"
                            show={true}
                        />
                    </Col>

                    {/*Giro cama total por mes*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInput
                            label="Giro cama total por mes"
                            value={form.giroCamaTotalMes}
                            name="giroCamaTotalMes"
                            handleChange={handleChange}
                            tooltipDescrip="Número de veces que una cama es ocupada por un paciente por mes."
                            type="number"
                            isRequired={true}
                            placement="right"
                            show={true}
                        />
                    </Col>

                    {/*Intervalo de Sustitución Cama*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInput
                            label="Intervalo de sustitución Cama"
                            value={form.intervaloSustitucionCama}
                            name="intervaloSustitucionCama"
                            handleChange={handleChange}
                            tooltipDescrip="
                            Determinar el tiempo en que permanece la cama vacía entre un egreso y el subsiguiente ingreso a la misma cama. 

                            Nº Días cama disponibles - Nº Pacientes Día / Nº Egresos Hospitalarios"
                            type="number"
                            isRequired={true}
                            placement="right"
                            show={true}
                        />
                    </Col>

                    {/*Porcentaje de Ocupación Cama*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInputFormat
                            label="Ocupación Cama"
                            value={form.porcentajeOcupacionCama}
                            name="porcentajeOcupacionCama"
                            handleChange={handleChange}
                            tooltipDescrip="
                            Conocido también como grado de uso o índice ocupacional. Es un índice que mide el porcentaje de camas ocupadas, en relación al total de las disponibles en un año. Por ejemplo, si un hospital tiene 100 camas, y en un día están ocupadas 81 camas, significa que tiene una ocupación del 81% en ese día.

                            Nº Pacientes-Día x 100 / Nº Días-camas disponibles"
                            type="number"
                            isRequired={true}
                            placement="right"
                            show={true}
                            isRight={true}
                            rightSymbol="%"
                        />
                    </Col>

                    {/*Rendimiento de Sala de Operaciones.*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInput
                            label="Rendimiento de Sala de Operaciones"
                            value={form.rendimientoSalaOperaciones}
                            name="rendimientoSalaOperaciones"
                            handleChange={handleChange}
                            tooltipDescrip="
                            Determinar el número promedio de intervenciones quirúrgicas realizadas por cada sala de operación.
                            
                            Nº Intervenciones Quirúrgicas Ejecutadas / Nº Sala de Operaciones"
                            type="number"
                            isRequired={true}
                            placement="right"
                            show={true}
                        />
                    </Col>

                    {/*Rendimiento de Sala de Operaciones (Cirugías Ambulatorias)*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInput
                            label="Rendimiento de Sala de Operaciones CA"
                            value={form.rendimientoSalaOperacionesCA}
                            name="rendimientoSalaOperacionesCA"
                            handleChange={handleChange}
                            tooltipDescrip="
                            Es el número de intervenciones quirúrgicas (en sala de cirugía ambulatoria), en relación a los turnos quirúrgicos ejecutados por unidad de tiempo (año).
                            
                            Nº Intervenciones Quirúrgicas Ambulatorias Ejecutadas / Nº Salas de Operaciones"
                            type="number"
                            isRequired={true}
                            placement="right"
                            show={true}
                        />
                    </Col>

                    {/*Porcentaje de cancelación de cirugía programada*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInputFormat
                            label="Cancelación Cirugía"
                            value={form.porcentajeCancelacionCirugia}
                            name="porcentajeCancelacionCirugia"
                            handleChange={handleChange}
                            tooltipDescrip="
                            Proporción de pacientes que presentan cancelación de su procedimiento quirúrgico por diversas causas.
                            
                            Nº de Cancelaciones Quirúrgicas x 100 / Nº Cirugías Programadas"
                            type="number"
                            isRequired={true}
                            placement="right"
                            show={true}
                            isRight={true}
                            rightSymbol="%"
                        />
                    </Col>

                </Row>
            </Col>
        </Fragment>
    );
}

function Satisfaccion(props) {
    const form = props.form
    const handleChange = props.handleChange

    return (
        <Fragment>
            <Col xs={12} md={12} className="mt-3">
                <Row className="">
                    {/*Título de la sección de la encuesta*/}
                    <Col xs={12} md={12} className="mb-3">
                        <h4 className="text-center sub-title-cmh">Indicadores de Satisfacción</h4>
                    </Col>

                    {/*Satisfacción de la Atención Médica (Encuesta a Pacientes)*/}
                    <Col xs={12} md={6} className="mb-3">
                        <GetInputFormat
                            label="Satisfacción AM"
                            value={form.satisfaccionAtencionMedica}
                            name="satisfaccionAtencionMedica"
                            handleChange={handleChange}
                            tooltipDescrip="
                            Tasa global de satisfacción de usuarios 

                            Número de usuarios con satisfacción alta x 100 / Número de encuestados"
                            type="number"
                            isRequired={true}
                            placement="right"
                            show={true}
                            isRight={true}
                            rightSymbol="%"
                        />
                    </Col>

                    {/*Satisfacción del Médico (Encuesta Satisfacción de Médicos y Staff)*/}
                    <Col xs={12} md={6} className="mb-3">
                        <GetInputFormat
                            label="Satisfacción del Médico"
                            value={form.satisfaccionMedico}
                            name="satisfaccionMedico"
                            handleChange={handleChange}
                            tooltipDescrip="
                            Tasa global de satisfacción de médicos y staff

                            Número de médicos y staff con satisfacción alta x 100 / Número de encuestados"
                            type="number"
                            isRequired={true}
                            placement="right"
                            show={true}
                            isRight={true}
                            rightSymbol="%"
                        />
                    </Col>

                </Row>
            </Col>
        </Fragment>
    );
}

function ProduccionSH(props) {
    const form = props.form
    const handleChange = props.handleChange

    return (
        <Fragment>
            <Col xs={12} md={12} className="mt-3">
                <Row className="">
                    {/*Título de la sección de la encuesta*/}
                    <Col xs={12} md={12} className="mb-3">
                        <h4 className="text-center sub-title-cmh">Indicadores de Producción de Servicios Hospitalarios</h4>
                    </Col>

                    {/*Total Anual de Egresos Hospitalarios*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInput
                            label="Egresos Hospitalarios"
                            value={form.totalAnualEgresosHospitalarios}
                            name="totalAnualEgresosHospitalarios"
                            handleChange={handleChange}
                            tooltipDescrip="Total Anual Egresos Hospitalarios"
                            type="number"
                            isRequired={true}
                            placement="right"
                            show={true}
                        />
                    </Col>

                    {/*Total de Intervenciones Quirúrgicas Electivas*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInput
                            label="Intervenciones Quirúrgicas Electivas"
                            value={form.totalAnualIntervencionesElectivas}
                            name="totalAnualIntervencionesElectivas"
                            handleChange={handleChange}
                            tooltipDescrip="Total Anual de Intervenciones Quirúrgicas Electivas"
                            type="number"
                            isRequired={true}
                            placement="right"
                            show={true}
                        />
                    </Col>

                    {/*Total de Intervenciones Quirúrgicas Urgentes*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInput
                            label="Intervenciones Quirúrgicas Urgentes"
                            value={form.totalAnualIntervencionesUrgentes}
                            name="totalAnualIntervencionesUrgentes"
                            handleChange={handleChange}
                            tooltipDescrip="Total Anual de Intervenciones Quirúrgicas Urgentes"
                            type="number"
                            isRequired={true}
                            placement="right"
                            show={true}
                        />
                    </Col>

                    {/*Total de Partos Atendidos*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInput
                            label="Partos Atendidos "
                            value={form.totalAnualPartosAtendidos}
                            name="totalAnualPartosAtendidos"
                            handleChange={handleChange}
                            tooltipDescrip="Total Anual de Partos Atendidos "
                            type="number"
                            isRequired={true}
                            placement="right"
                            show={true}
                        />
                    </Col>

                    {/*Total de Cesáreas realizadas.*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInput
                            label="Cesáreas realizadas"
                            value={form.totalAnualCesareasRealizadas}
                            name="totalAnualCesareasRealizadas"
                            handleChange={handleChange}
                            tooltipDescrip="Total Anual de Cesáreas Realizadas"
                            type="number"
                            isRequired={true}
                            placement="right"
                            show={true}
                        />
                    </Col>

                    {/*Total de Consultas de Urgencias Realizadas.*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInput
                            label="Consultas de Urgencias"
                            value={form.totalAnualConsultasUrgencias}
                            name="totalAnualConsultasUrgencias"
                            handleChange={handleChange}
                            tooltipDescrip="Total Anual de Consultas de Urgencias Realizadas"
                            type="number"
                            isRequired={true}
                            placement="right"
                            show={true}
                        />
                    </Col>

                    {/*Total de Consultas Externas Realizadas.*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInput
                            label="Consultas Externas"
                            value={form.totalAnualConsultasExternas}
                            name="totalAnualConsultasExternas"
                            handleChange={handleChange}
                            tooltipDescrip="Total Anual de Consultas Externas Realizadas."
                            type="number"
                            isRequired={true}
                            placement="right"
                            show={true}
                        />
                    </Col>
                </Row>
            </Col>
        </Fragment>
    );
}

function GetInput(props) {

    //we obtain their props
    const { label, value, name, handleChange, tooltipDescrip, type, isRequired, placement, show, isReadOnly = false, isTextArea = false, style = null } = props

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
                            as={isTextArea ? "textarea" : "input"}
                            type={type}
                            placeholder={label}
                            value={value ? value : ''}
                            name={name}
                            onChange={handleChange}
                            required={isRequired}
                            autoComplete="off"
                            readOnly={isReadOnly}
                            style={style}
                        />
                    </OverlayTrigger>
                </FloatingLabel>
            </Fragment>
        )
    }
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

export default Calidad;