import React, { Fragment, useState, useEffect } from "react";
import { Container, Col, Row, FloatingLabel, Button, Form, OverlayTrigger, Tooltip, FormGroup, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import MultiSelect from "../../components/selectors/MultiSelect";
//import axios from "axios"


//we import css
import "../../../globalStyles.css"

const currentYear = new Date().getFullYear();
const lastYear = currentYear - 1;

function EyP() {

    //declared the variables, constants ans states for this module
    const [form, setForm] = useState({})
    const [viewFlags, setViewFlags] = useState({})

    /*Opciones para multiselector*/

    const dataMulti = [
        { value: 'ISO 9001', label: 'ISO 9001' },
        { value: 'CSG', label: 'CSG' },
        { value: 'CertCan', label: 'Certificación Canadiense' },
        { value: 'JCI', label: 'JCI' },
        { value: 'DistH', label: 'Distintivo "H"' },
    ]

    //module's functions
    const handleChange = async (e) => {

        e.persist();

        await setForm(
            {
                ...form,
                [e.target.name]: e.target.value
            }
        );

        await setViewFlags({
            ...viewFlags,
            [e.target.name]: e.target.value
        })


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

    const handleMultiSelect = async (a) => {

        await setForm(
            {
                ...form,
                acreditacionesHospitalarias: a
            }
        );
    }

    const prueba = () => {
        console.log(form)
    }

    function percentageFormat(num) {
        return num + '$';
    }

    return (
        <Fragment>
            <Container className="mt-3">
                <Row>
                    <Col xs={12} md={12}>
                        <Row>

                            <Servicios form={form} handleChange={handleChange} />

                            <ServiciosInternamiento form={form} handleChange={handleChange} />

                            <ConsultaExterna form={form} handleChange={handleChange} />

                            <ServicioImagenologia form={form} handleChange={handleChange} />

                            <Transplantes form={form} handleChange={handleChange} viewFlags={viewFlags} />

                            <ServiciosUrgencias form={form} handleChange={handleChange} format={percentageFormat} />

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


function Servicios(props) {

    //we obtain the props for this component
    const form = props.form
    const handleChange = props.handleChange

    return (
        <Fragment>
            {/*Servicios*/}
            <Col xs={12} md={12} >
                <Row>{/**/}

                    {/*Título de la sección de la encuesta*/}
                    <Col xs={12} md={12} className="mb-3">
                        <h4 className="text-center sub-title-cmh">Servicios</h4>
                    </Col>

                    {/*Camas de hospitalización*/}
                    <Col xs={12} md={4} className="mb-3">

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Habitaciones">
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-habitaciones">Número de camas de hospitalización</Tooltip>
                                }>
                                <Form.Control
                                    type="number"
                                    placeholder="Habitaciones"
                                    value={form.numeroCamasHospitalizacion ? form.numeroCamasHospitalizacion : ''}
                                    name="numeroCamasHospitalizacion"
                                    onChange={handleChange} />
                            </OverlayTrigger>
                        </FloatingLabel>

                    </Col>

                    {/*Camas UCIA*/}
                    <Col xs={12} md={4} className="mb-3">

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Camas UCIA">
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-UCIA">Número de camas en Unidad de Cuidados Intentivos Adultos</Tooltip>
                                }>
                                <Form.Control
                                    type="number"
                                    placeholder="Camas UCIA"
                                    value={form.numeroCamasUCIA ? form.numeroCamasUCIA : ''}
                                    name="numeroCamasUCIA"
                                    onChange={handleChange} />
                            </OverlayTrigger>
                        </FloatingLabel>

                    </Col>

                    {/*Camas UCIP*/}
                    <Col xs={12} md={4} className="mb-3">

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Camas UCIP">
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-UCIP">Número de camas en Unidad de Cuidados Intensivos Pediátricos</Tooltip>
                                }>
                                <Form.Control
                                    type="number"
                                    placeholder="Camas UCIP"
                                    value={form.numeroCamasUCIP ? form.numeroCamasUCIP : ''}
                                    name="numeroCamasUCIP"
                                    onChange={handleChange} />
                            </OverlayTrigger>
                        </FloatingLabel>

                    </Col>

                    {/*Camas UCIN*/}
                    <Col xs={12} md={4} className="mb-3">

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Camas UCIN">
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-UCIN">Número de camas en Unidad de Cuidados Intensivos Neontal</Tooltip>
                                }>
                                <Form.Control
                                    type="number"
                                    placeholder="Camas UCIN"
                                    value={form.numeroCamasUCIN ? form.numeroCamasUCIN : ''}
                                    name="numeroCamasUCIN"
                                    onChange={handleChange} />
                            </OverlayTrigger>
                        </FloatingLabel>

                    </Col>

                    {/*Camas o cubículos en urgencias*/}
                    <Col xs={12} md={4} className="mb-3">

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Camas en Urgencias">
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-Urgencias">Número de camas o cubículos en urgencias</Tooltip>
                                }>
                                <Form.Control
                                    type="number"
                                    placeholder="Camas en urgencias"
                                    value={form.numeroCamasUrgencias ? form.numeroCamasUrgencias : ''}
                                    name="numeroCamasUrgencias"
                                    onChange={handleChange} />
                            </OverlayTrigger>
                        </FloatingLabel>

                    </Col>

                    {/*Camas de aislamiento*/}
                    <Col xs={12} md={4} className="mb-3">

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Camas de Aislamiento">
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-aislamiento">Número de camas de aislamiento</Tooltip>
                                }>
                                <Form.Control
                                    type="number"
                                    placeholder="Camas de aislamiento"
                                    value={form.numeroCamasAislamiento ? form.numeroCamasAislamiento : ''}
                                    name="numeroCamasAislamiento"
                                    onChange={handleChange} />
                            </OverlayTrigger>
                        </FloatingLabel>

                    </Col>

                    {/*Cunas*/}
                    <Col xs={12} md={4} className="mb-3">

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Cunas">
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-cunas">Número de cunas</Tooltip>
                                }>
                                <Form.Control
                                    type="number"
                                    placeholder="Cunas"
                                    value={form.numeroCunas ? form.numeroCunas : ''}
                                    name="numeroCunas"
                                    onChange={handleChange} />
                            </OverlayTrigger>
                        </FloatingLabel>

                    </Col>

                    {/*Incubadoras*/}
                    <Col xs={12} md={4} className="mb-3">

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Incubadoras">
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-incubadoras">Número de incubadoras</Tooltip>
                                }>
                                <Form.Control
                                    type="number"
                                    placeholder="Incubadoras"
                                    value={form.numeroIncubadoras ? form.numeroIncubadoras : ''}
                                    name="numeroIncubadoras"
                                    onChange={handleChange} />
                            </OverlayTrigger>
                        </FloatingLabel>

                    </Col>

                    {/*Salas de cirugía*/}
                    <Col xs={12} md={4} className="mb-3">

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Quirófanos">
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-quirofanos">Número de salas de cirugía</Tooltip>
                                }>
                                <Form.Control
                                    type="number"
                                    placeholder="Quirofanos"
                                    value={form.numeroQuirofanos ? form.numeroQuirofanos : ''}
                                    name="numeroQuirofanos"
                                    onChange={handleChange} />
                            </OverlayTrigger>
                        </FloatingLabel>

                    </Col>

                    {/*Salas de Tococirugía*/}
                    <Col xs={12} md={4} className="mb-3">

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Salas de Partos">
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-partos">Número de salas de Tococirugía</Tooltip>
                                }>
                                <Form.Control
                                    type="number"
                                    placeholder="Salas de partos"
                                    value={form.numeroSalasPartos ? form.numeroSalasPartos : ''}
                                    name="numeroSalasPartos"
                                    onChange={handleChange} />
                            </OverlayTrigger>
                        </FloatingLabel>

                    </Col>

                    {/*Salas exclusivas de cirugía ambulatoria*/}
                    <Col xs={12} md={4} className="mb-3">

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Salas de Cirugía Ambulatoria">
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-ambulatoria">Número de salas exclusivas de Cirugía Ambulatoria</Tooltip>
                                }>
                                <Form.Control
                                    type="number"
                                    placeholder="Salas de Cirugía Ambulatoria"
                                    value={form.numeroSalasAmbulatoria ? form.numeroSalasAmbulatoria : ''}
                                    name="numeroSalasAmbulatoria"
                                    onChange={handleChange} />
                            </OverlayTrigger>
                        </FloatingLabel>

                    </Col>

                </Row>
            </Col>
        </Fragment>
    )

}

function ServiciosInternamiento(props) {

    //we obtain the props for this component
    const form = props.form
    const handleChange = props.handleChange

    return (
        <Fragment>
            <Col xs={12} md={12} className="mt-3">
                <Row>

                    {/*Título de la sección de la encuesta*/}
                    <Col xs={12} md={12} className="mb-3">
                        <h4 className="text-center sub-title-cmh">Servicios de Internamiento</h4>
                    </Col>

                    {/*Pacientes adultos internados*/}
                    <Col xs={12} md={6} className="mb-3">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Pacientes Adultos internados">
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-pAudltos">Número de pacientes Adultos internados</Tooltip>
                                }>
                                <Form.Control
                                    type="number"
                                    placeholder="Pacientes Adultos internados"
                                    value={form.numeroPacientesAdultos ? form.numeroPacientesAdultos : ''}
                                    name="numeroPacientesAdultos"
                                    onChange={handleChange} />
                            </OverlayTrigger>
                        </FloatingLabel>

                    </Col>

                    {/*Pacientes pedriaticos internados*/}
                    <Col xs={12} md={6} className="mb-3">

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Pacientes Pediátricos internados">
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-pPedriaticos">Número de pacientes Pediátricos internados</Tooltip>
                                }>
                                <Form.Control
                                    type="number"
                                    placeholder="Pacientes Pediátricos internados"
                                    value={form.numeroPacientesPediátricos ? form.numeroPacientesPediátricos : ''}
                                    name="numeroPacientesPediátricos"
                                    onChange={handleChange} />
                            </OverlayTrigger>
                        </FloatingLabel>

                    </Col>
                </Row>
            </Col>
        </Fragment>
    )
}

function ConsultaExterna(props) {
    const form = props.form
    const handleChange = props.handleChange

    return (
        <Fragment>
            <Col xs={12} md={12} className="mt-3">
                <Row>

                    {/*Título de la sección de la encuesta*/}
                    <Col xs={12} md={12} className="mb-3">
                        <h4 className="text-center sub-title-cmh">Consulta Externa</h4>
                    </Col>

                    {/*General*/}
                    <Col xs={12} md={6} className="mb-3">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="General">
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-general">Número de consultas generales</Tooltip>
                                }>
                                <Form.Control
                                    type="number"
                                    placeholder="General"
                                    value={form.numeroConsultasGeneral ? form.numeroConsultasGeneral : ''}
                                    name="numeroConsultasGeneral"
                                    onChange={handleChange} />
                            </OverlayTrigger>
                        </FloatingLabel>

                    </Col>

                    {/*Especializada*/}
                    <Col xs={12} md={6} className="mb-3">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Especializada">
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-especializada">Número de consultas especializadas</Tooltip>
                                }>
                                <Form.Control
                                    type="number"
                                    placeholder="Especializada"
                                    value={form.numeroConsultasEspecializada ? form.numeroConsultasEspecializada : ''}
                                    name="numeroConsultasEspecializada"
                                    onChange={handleChange} />
                            </OverlayTrigger>
                        </FloatingLabel>

                    </Col>
                </Row>
            </Col>
        </Fragment>
    )
}

function ServicioImagenologia(props) {
    const form = props.form;
    const handleChange = props.handleChange;

    return (
        <Fragment>
            <Col xs={12} md={12} className="mt-3">
                <Row>

                    {/*Título de la sección de la encuesta*/}
                    <Col xs={12} md={12} className="mb-3">
                        <h4 className="text-center sub-title-cmh">Servicio de Imagenología</h4>
                    </Col>

                    {/*Radiología simple*/}
                    <Col xs={12} md={4} className="mb-3">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Radiología Simple">
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-radiologia">Número de estudios de radiología simple</Tooltip>
                                }>
                                <Form.Control
                                    type="number"
                                    placeholder="Radiología Simple"
                                    value={form.numeroRadiologiaSimple ? form.numeroRadiologiaSimple : ''}
                                    name="numeroRadiologiaSimple"
                                    onChange={handleChange} />
                            </OverlayTrigger>
                        </FloatingLabel>

                    </Col>

                    {/*Radiología Contrastada*/}
                    <Col xs={12} md={4} className="mb-3">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Radiología Contrastada">
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-radiologiaC">Número de estudios de radiología contrastada</Tooltip>
                                }>
                                <Form.Control
                                    type="number"
                                    placeholder="Radiología Contrastada"
                                    value={form.numeroRadiologiaContrastada ? form.numeroRadiologiaContrastada : ''}
                                    name="numeroRadiologiaContrastada"
                                    onChange={handleChange} />
                            </OverlayTrigger>
                        </FloatingLabel>

                    </Col>

                    {/*Tomografía*/}
                    <Col xs={12} md={4} className="mb-3">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Tomografía">
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-tomografia">Número de estudios de tomografía</Tooltip>
                                }>
                                <Form.Control
                                    type="number"
                                    placeholder="Tomografía"
                                    value={form.numeroTomografia ? form.numeroTomografia : ''}
                                    name="numeroTomografia"
                                    onChange={handleChange} />
                            </OverlayTrigger>
                        </FloatingLabel>

                    </Col>

                    {/*Ecografía*/}
                    <Col xs={12} md={4} className="mb-3">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Ecografía">
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-ecografia">Número de ultrasonografías diagnósticas</Tooltip>
                                }>
                                <Form.Control
                                    type="number"
                                    placeholder="Ecografía"
                                    value={form.numeroEcografía ? form.numeroEcografía : ''}
                                    name="numeroEcografía"
                                    onChange={handleChange} />
                            </OverlayTrigger>
                        </FloatingLabel>

                    </Col>

                    {/*Estudios Vasculares No Invasivos*/}
                    <Col xs={12} md={4} className="mb-3">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Estudios Vasculares No Invasivos">
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-EVNI">Número de estudios vasculares no invasivos</Tooltip>
                                }>
                                <Form.Control
                                    type="number"
                                    placeholder="Estudios Vasculares No Invasivos"
                                    value={form.numeroEVNI ? form.numeroEVNI : ''}
                                    name="numeroEVNI"
                                    onChange={handleChange} />
                            </OverlayTrigger>
                        </FloatingLabel>

                    </Col>

                    {/*Resonancia Magnética*/}
                    <Col xs={12} md={4} className="mb-3">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Resonancia Magnética">
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-resonancia">Número de resonancias magnéticas</Tooltip>
                                }>
                                <Form.Control
                                    type="number"
                                    placeholder="Resonancia Magnética"
                                    value={form.numeroResonanciaMagnetica ? form.numeroResonanciaMagnetica : ''}
                                    name="numeroResonanciaMagnetica"
                                    onChange={handleChange} />
                            </OverlayTrigger>
                        </FloatingLabel>

                    </Col>

                    {/*Gammagrafía y Estudios Isotópicos */}
                    <Col xs={12} md={4} className="mb-3">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Gammagrafía y Estudios Isotópicos ">
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-Gammagrafia ">Número de gammagrafías y estudios isotópicos </Tooltip>
                                }>
                                <Form.Control
                                    type="number"
                                    placeholder="Gammagrafía y Estudios Isotópicos "
                                    value={form.numeroGammagrafia ? form.numeroGammagrafia : ''}
                                    name="numeroGammagrafia"
                                    onChange={handleChange} />
                            </OverlayTrigger>
                        </FloatingLabel>

                    </Col>

                    {/*PET*/}
                    <Col xs={12} md={4} className="mb-3">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="PET">
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-PET">Número de tomografías por emisión de positrones</Tooltip>
                                }>
                                <Form.Control
                                    type="number"
                                    placeholder="PET"
                                    value={form.numeroPET ? form.numeroPET : ''}
                                    name="numeroPET"
                                    onChange={handleChange} />
                            </OverlayTrigger>
                        </FloatingLabel>

                    </Col>

                    {/*RADIOTERAPIA*/}
                    <Col xs={12} md={4} className="mb-3">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="RADIOTERAPIA">
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-RADIOTERAPIA">Número de estudios de RADIOTERAPIA</Tooltip>
                                }>
                                <Form.Control
                                    type="number"
                                    placeholder="RADIOTERAPIA"
                                    value={form.numeroRADIOTERAPIA ? form.numeroRADIOTERAPIA : ''}
                                    name="numeroRADIOTERAPIA"
                                    onChange={handleChange} />
                            </OverlayTrigger>
                        </FloatingLabel>

                    </Col>

                    {/*Mastógrafía*/}
                    <Col xs={12} md={4} className="mb-3">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Mastógrafía">
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-mastografia">Número de mastógrafías</Tooltip>
                                }>
                                <Form.Control
                                    type="number"
                                    placeholder="Mastógrafía"
                                    value={form.numeroMastografia ? form.numeroMastografia : ''}
                                    name="numeroMastografia"
                                    onChange={handleChange} />
                            </OverlayTrigger>
                        </FloatingLabel>

                    </Col>

                    {/*Densitómetría*/}
                    <Col xs={12} md={4} className="mb-3">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Densitómetría">
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-densitometria">Número de estudios de densitómetría</Tooltip>
                                }>
                                <Form.Control
                                    type="number"
                                    placeholder="Densitómetría"
                                    value={form.numeroDensitometria ? form.numeroDensitometria : ''}
                                    name="numeroDensitometria"
                                    onChange={handleChange} />
                            </OverlayTrigger>
                        </FloatingLabel>

                    </Col>


                </Row>
            </Col>
        </Fragment>
    )
}

function Transplantes(props) {
    const form = props.form
    const handleChange = props.handleChange
    const viewFlags = props.viewFlags

    return (
        <Fragment>

            {/*Título de la sección de la encuesta*/}
            <Col xs={12} md={12} className="mb-3">
                <h4 className="text-center sub-title-cmh">Transplantes</h4>
            </Col>

            {/*¿Realizan transplantes?*/}
            <Col xs={12} md={6} className="mb-3">
                <FloatingLabel controlId="floatingSelect" label="¿Realizan Transplantes?">
                    <Form.Select aria-label="Floating label" value={form.realizanTransplantes ? form.realizanTransplantes : ''} onChange={handleChange} name="realizanTransplantes"
                        style={{ height: '70px' }}>
                        <option value="" disabled>Seleccione una opción</option>
                        <option value={true}>Si</option>
                        <option value={false}>No</option>
                    </Form.Select>
                </FloatingLabel>
            </Col>


            <TipoOrgano form={form} handleChange={handleChange} show={viewFlags} />


        </Fragment>
    )
}

function TipoOrgano(props) {
    const form = props.form;
    const handleChange = props.handleChange;
    const show = props.show;

    if (show.realizanTransplantes === 'true') {
        return (
            <Fragment>

                {/*Título de la sección de la encuesta*/}
                <Col xs={12} md={12} className="mb-3">
                    <h4 className="text-center sub-title-cmh">Tipo de Organo Transplantado</h4>
                </Col>

                {/*Riñon*/}
                <Col xs={12} md={4} className="mb-3">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Riñon">
                        <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip id="tooltip-rinion">Cantidad de riñones transplantados</Tooltip>
                            }>
                            <Form.Control
                                type="number"
                                placeholder="Riñon"
                                value={form.numeroRiniones ? form.numeroRiniones : ''}
                                name="numeroRiniones"
                                onChange={handleChange} />
                        </OverlayTrigger>
                    </FloatingLabel>

                </Col>

                {/*Higado*/}
                <Col xs={12} md={4} className="mb-3">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Higado">
                        <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip id="tooltip-higado">Cantidad de higados transplantados</Tooltip>
                            }>
                            <Form.Control
                                type="number"
                                placeholder="Higado"
                                value={form.numeroHigados ? form.numeroHigados : ''}
                                name="numeroHigados"
                                onChange={handleChange} />
                        </OverlayTrigger>
                    </FloatingLabel>

                </Col>

                {/*Pulmón*/}
                <Col xs={12} md={4} className="mb-3">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Pulmón">
                        <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip id="tooltip-pulmon">Cantidad de pulmones transplantados</Tooltip>
                            }>
                            <Form.Control
                                type="number"
                                placeholder="Riñon"
                                value={form.numeroPulmones ? form.numeroPulmones : ''}
                                name="numeroPulmones"
                                onChange={handleChange} />
                        </OverlayTrigger>
                    </FloatingLabel>

                </Col>

                {/*Corazón*/}
                <Col xs={12} md={4} className="mb-3">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Corazón">
                        <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip id="tooltip-corazon">Cantidad de corazones transplantados</Tooltip>
                            }>
                            <Form.Control
                                type="number"
                                placeholder="Riñon"
                                value={form.numeroCorazones ? form.numeroCorazones : ''}
                                name="numeroCorazones"
                                onChange={handleChange} />
                        </OverlayTrigger>
                    </FloatingLabel>

                </Col>

                {/*Córneas*/}
                <Col xs={12} md={4} className="mb-3">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Córnea">
                        <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip id="tooltip-cornea">Cantidad de córneas transplantadas</Tooltip>
                            }>
                            <Form.Control
                                type="number"
                                placeholder="Córnea"
                                value={form.numeroCorneas ? form.numeroCorneas : ''}
                                name="numeroCorneas"
                                onChange={handleChange} />
                        </OverlayTrigger>
                    </FloatingLabel>

                </Col>

                {/*Hueso*/}
                <Col xs={12} md={4} className="mb-3">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Hueso">
                        <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip id="tooltip-hueso">Cantidad de huesos transplantados</Tooltip>
                            }>
                            <Form.Control
                                type="number"
                                placeholder="Hueso"
                                value={form.numeroHuesos ? form.numeroHuesos : ''}
                                name="numeroHuesos"
                                onChange={handleChange} />
                        </OverlayTrigger>
                    </FloatingLabel>

                </Col>

                {/*Medula ósea*/}
                <Col xs={12} md={4} className="mb-3">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Médula ósea">
                        <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip id="tooltip-medula">Cantidad de Células hematopoyéticas transplantadas</Tooltip>
                            }>
                            <Form.Control
                                type="number"
                                placeholder="Médula ósea"
                                value={form.numeroMedulas ? form.numeroMedulas : ''}
                                name="numeroMedulas"
                                onChange={handleChange} />
                        </OverlayTrigger>
                    </FloatingLabel>

                </Col>

                {/*TODO: Aún no se especifica como implementar esta opción*/}
                {/*Otro órgano (especifique)*/}
                <Col xs={12} md={4} className="mb-3">
                    <Row>
                        <Col xs={12} md={8}>
                            <p>
                                Otro órgano (especifique)
                            </p>
                        </Col>
                        <Col xs={12} md={4}>
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-otroOrgano">Agregar otro tipo de organo</Tooltip>
                                }>
                                <Button variant="success" onClick={() => { }}>
                                    <span> <FontAwesomeIcon icon={faPlus} /></span></Button>
                            </OverlayTrigger>
                        </Col>
                    </Row>
                </Col>
            </Fragment>
        )
    } else {
        return (
            <Fragment>
            </Fragment>
        )
    }
}

function ServiciosUrgencias(props) {
    //we obtain the props for this component
    const form = props.form
    const handleChange = props.handleChange
    const format = props.format

    return (
        <Fragment>
            <Col xs={12} md={12} className="mt-3">
                <Row>

                    {/*Título de la sección de la encuesta*/}
                    <Col xs={12} md={12} className="mb-3">
                        <h4 className="text-center sub-title-cmh">Servicios de Urgencia</h4>
                    </Col>

                    {/*Nº de Salas de Observación (Urgencias)*/}
                    <Col xs={12} md={6} className="mb-3">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Nº de Salas de Observación">
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-observacionUrgencias">Número de salas de observación de urgencias</Tooltip>
                                }>
                                <Form.Control
                                    type="number"
                                    placeholder="Nº de Salas de Observación"
                                    value={form.numeroSalasObservacionUrgencias ? form.numeroSalasObservacionUrgencias : ''}
                                    name="numeroSalasObservacionUrgencias"
                                    onChange={handleChange} />
                            </OverlayTrigger>
                        </FloatingLabel>

                    </Col>

                    {/*Atenciones Médicas de Urgencias*/}
                    <Col xs={12} md={6} className="mb-3">

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Atenciones Médicas de Urgencias">
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-atencionesUrgencias">Número de pacientes atendidos en urgencias</Tooltip>
                                }>
                                <Form.Control
                                    type="number"
                                    placeholder="Atenciones Médicas de Urgencias"
                                    value={form.numeroAtencionesMedicasUrgencias ? form.numeroAtencionesMedicasUrgencias : ''}
                                    name="numeroAtencionesMedicasUrgencias"
                                    onChange={handleChange} />
                            </OverlayTrigger>
                        </FloatingLabel>

                    </Col>

                    {/*Tasa de Internamiento por Urgencias*/}
                    <Col xs={12} md={6} className="mb-3">
                        <FormGroup>
                            <Form.Label floatingInput>Tasa de Internamiento por Urgencias</Form.Label>
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-internamientoUrgencias">Porcentaje de pacientes internados por urgencias</Tooltip>
                                }>
                                <Form.Control
                                    type="range"
                                    min="50000"
                                    max="500000"
                                    step="100"
                                    placeholder="Tasa de Internamiento por Urgencias"
                                    value={form.numeroTasaInternamientoUrgencias ? form.numeroTasaInternamientoUrgencias : ''}
                                    name="numeroTasaInternamientoUrgencias"
                                    onChange={handleChange} />
                            </OverlayTrigger>
                        </FormGroup>
                    </Col>
                </Row>
            </Col>
        </Fragment>
    )
}

function ServicioLaboratorio(props) {
    const form = props.form
    const handleChange = props.handleChange
}

function ADT(props) {
    const form = props.form
    const handleChange = props.handleChange
}

function Otros(props) {
    const form = props.form
    const handleChange = props.handleChange
}

function EquiposInversion(props) {
    const form = props.form
    const handleChange = props.handleChange
}

export default EyP;