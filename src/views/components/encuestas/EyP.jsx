import React, { Input, Fragment, useState, useEffect } from "react";
import { Stack, Container, Col, Row, FloatingLabel, Button, Form, OverlayTrigger, Tooltip, FormGroup, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import OrganosCrud from "../tables/OrganosCrud";
import ModalAdd from "../modals/modals encuestas/EyP/ModalAdd";

//import axios from "axios"


//we import css
import "../../../globalStyles.css"

const currentYear = new Date().getFullYear();

function EyP() {

    //declared the variables, constants ans states for this module
    const [form, setForm] = useState({ organos: [] })
    const [viewFlags, setViewFlags] = useState({})

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

    /**
     * It adds an organ to the form.organos array if it doesn't already exist.
     * @returns {
     *         ...form,
     *         organos: form.organos.concat(organo)
     *     }
     */
    const handleChangeOrganos = async (organo) => {

        //if exists at least one organ
        if (form.organos.length > 0) {

            //validate if that organ is already exists
            if (nameRegistroValidation(organo.nombre, form.organos)) {

                await setForm(
                    {
                        ...form,
                        organos: form.organos.concat(organo)
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
                    organos: form.organos.concat(organo)
                }
            );

            return true;

        }

    }

    /**
     * We create an aux for our array, we remove the content for it index, we re asigned our aux to
     * organos array.
     */
    const handleChangeOrganosDelete = async (index) => {

        //we create an aux for our array 
        let organosArray = form.organos;

        //we remove the content for it index
        organosArray.splice(index, 1);

        //we re asigned our aux to organos array
        setForm(
            {
                ...form,
                organos: organosArray
            }
        )

    }

    /**
     * It takes an index and an object, and replaces the object at the index in the array.
     * @returns a boolean value.
     */
    const handleChangeOrganosEdit = async (index, organo) => {

        if (nameRegistroValidationEdit(organo.nombre, form.organos, index)) {

            //we create an aux for our array 
            let organosArray = form.organos;

            //we replaces the content for it index
            organosArray.splice(index, 1, organo);

            await setForm(
                {
                    ...form,
                    organos: organosArray
                }
            );
            return true

        } else {
            return false;
        }

    }

    /**
     * It takes a string and an array of objects, and returns true if the string is not found in the
     * array of objects, and false if it is found.
     * @returns A function that takes two parameters, name and array.
     */
    const nameRegistroValidation = (name, array) => {

        //Verifying the complete array
        for (let i = 0; i < array.length; i++) {

            //standarize our array elements and compare
            if (array[i].nombre.toLowerCase() === name.toLowerCase()) {

                return false; //the name exist

            } else if (i === array.length - 1) {

                return true; //doesnt exit the name

            }

        }

    }

    /**
     * It takes a name, an array of objects, and an index. It then loops through the array of objects
     * and compares the name to the name of each object in the array. If the name matches the name of
     * an object in the array, and the index of the object in the array is not the same as the index
     * passed to the function, it returns false. If the name does not match the name of any object in
     * the array, or if the index of the object in the array is the same as the index passed to the
     * function, it returns true.
     * @returns a boolean value.
     */
    const nameRegistroValidationEdit = (name, array, index) => {

        //validate our complete array
        for (let i = 0; i < array.length; i++) {

            //standarize the elements name and compare
            if (array[i].nombre.toLowerCase() === name.toLowerCase() && index != i) {

                return false; //the name exist

            } else if (i === array.length - 1) {

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

                            <Servicios form={form} handleChange={handleChange} />


                            <ServiciosInternamiento form={form} handleChange={handleChange} />


                            <ConsultaExterna form={form} handleChange={handleChange} />

                            <ServicioImagenologia form={form} handleChange={handleChange} />

                            <Transplantes form={form} handleChange={handleChange} viewFlags={viewFlags} handleChangeOrganos={handleChangeOrganos} handleChangeOrganosDelete={handleChangeOrganosDelete}
                                handleChangeOrganosEdit={handleChangeOrganosEdit} />

                            <ServiciosUrgencias form={form} handleChange={handleChange} />

                            <ServicioLaboratorio form={form} handleChange={handleChange} />

                            <ADT form={form} handleChange={handleChange} />

                            <OtrosServicios form={form} handleChange={handleChange} />


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
                                    onChange={handleChange}
                                    min={0} />
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
                                    onChange={handleChange}
                                    min={0} />
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
                                    onChange={handleChange}
                                    min={0} />
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
                                    onChange={handleChange}
                                    min={0} />
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
                                    onChange={handleChange}
                                    min={0} />
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
                                    onChange={handleChange}
                                    min={0} />
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
                                    onChange={handleChange}
                                    min={0} />
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
                                    onChange={handleChange}
                                    min={0} />
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
                                    onChange={handleChange}
                                    min={0} />
                            </OverlayTrigger>
                        </FloatingLabel>

                    </Col>

                    <Row className="justify-content-center">

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
                                        onChange={handleChange}
                                        min={0} />
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
                                        onChange={handleChange}
                                        min={0} />
                                </OverlayTrigger>
                            </FloatingLabel>

                        </Col>

                    </Row>


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
                                    onChange={handleChange}
                                    min={0} />
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
                                    onChange={handleChange}
                                    min={0} />
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
                                    onChange={handleChange}
                                    min={0} />
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
                                    onChange={handleChange}
                                    min={0} />
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
                                    onChange={handleChange}
                                    min={0} />
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
                                    onChange={handleChange}
                                    min={0} />
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
                                    onChange={handleChange}
                                    min={0} />
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
                                    onChange={handleChange}
                                    min={0} />
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
                                    onChange={handleChange}
                                    min={0} />
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
                                    onChange={handleChange}
                                    min={0} />
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
                                    onChange={handleChange}
                                    min={0} />
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
                                    onChange={handleChange}
                                    min={0} />
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
                                    onChange={handleChange}
                                    min={0} />
                            </OverlayTrigger>
                        </FloatingLabel>

                    </Col>

                    <Row className="justify-content-center">

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
                                        onChange={handleChange}
                                        min={0} />
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
                                        onChange={handleChange}
                                        min={0} />
                                </OverlayTrigger>
                            </FloatingLabel>

                        </Col>

                    </Row>

                </Row>
            </Col>
        </Fragment>
    )
}

function Transplantes(props) {
    const form = props.form
    const handleChange = props.handleChange
    const viewFlags = props.viewFlags
    const handleChangeOrganos = props.handleChangeOrganos;
    const handleChangeOrganosDelete = props.handleChangeOrganosDelete;
    const handleChangeOrganosEdit = props.handleChangeOrganosEdit;

    return (
        <Fragment>
            <Col xs={12} md={12} className="mt-3">
                <Row>
                    {/*Título de la sección de la encuesta*/}
                    <Col xs={12} md={12} className="mb-3">
                        <h4 className="text-center sub-title-cmh">Transplantes</h4>
                    </Col>

                    <Row className="justify-content-center">

                        {/*¿Realizan transplantes?*/}
                        <Col xs={12} md={6} className="mb-3">

                            <span>
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id="tooltip-rinion">¿Realizan Transplantes?</Tooltip>
                                    }>

                                    <FloatingLabel controlId="floatingSelect" label="¿Realizan Transplantes?">
                                        <Form.Select aria-label="Floating label" value={form.realizanTransplantes ? form.realizanTransplantes : ''} onChange={handleChange} name="realizanTransplantes"
                                            style={{ height: '70px' }}>
                                            <option value="" disabled>Seleccione una opción</option>
                                            <option value={true}>Si</option>
                                            <option value={false}>No</option>
                                        </Form.Select>
                                    </FloatingLabel>
                                </OverlayTrigger>
                            </span>

                        </Col>

                    </Row>

                    <TipoOrgano form={form} handleChange={handleChange} show={viewFlags} handleChangeOrganos={handleChangeOrganos} handleChangeOrganosDelete={handleChangeOrganosDelete}
                        handleChangeOrganosEdit={handleChangeOrganosEdit} />


                </Row>
            </Col>


        </Fragment>
    )
}

function TipoOrgano(props) {
    //we obtain the props for this component
    const form = props.form //Formulario
    const handleChange = props.handleChange //HandleChange del formulario
    const handleChangeOrganos = props.handleChangeOrganos;
    const handleChangeOrganosDelete = props.handleChangeOrganosDelete;
    const handleChangeOrganosEdit = props.handleChangeOrganosEdit;

    const [modalTriggerAdd, setModalTriggerAdd] = useState(false);
    const show = props.show;

    const handleModalChangeAdd = () => {
        setModalTriggerAdd(!modalTriggerAdd);
    }

    if (show.realizanTransplantes === 'true') {
        return (
            <Fragment>
                <Col xs={12} md={12} className="mt-3">
                    <Row>
                        {/*Título de la sección de la encuesta*/}
                        <Col xs={12} md={12} className="mb-3">
                            <h5 className="text-center title-cmh">Tipo de Organo Transplantado</h5>
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
                                        onChange={handleChange}
                                        min={0} />
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
                                        onChange={handleChange}
                                        min={0} />
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
                                        placeholder="Pulmón"
                                        value={form.numeroPulmones ? form.numeroPulmones : ''}
                                        name="numeroPulmones"
                                        onChange={handleChange}
                                        min={0} />
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
                                        placeholder="Corazón"
                                        value={form.numeroCorazones ? form.numeroCorazones : ''}
                                        name="numeroCorazones"
                                        onChange={handleChange}
                                        min={0} />
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
                                        onChange={handleChange}
                                        min={0} />
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
                                        onChange={handleChange}
                                        min={0} />
                                </OverlayTrigger>
                            </FloatingLabel>

                        </Col>

                        <Row className="justify-content-center">

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
                                            onChange={handleChange}
                                            min={0} />
                                    </OverlayTrigger>
                                </FloatingLabel>

                            </Col>

                            {/*TODO: Implementar como una tabla CRUD*/}
                            {/*Otro órgano (especifique)*/}
                            <Col xs={12} md={4} className="mb-3 d-flex align-items-center justify-content-center">
                                <Row className="align-items-center">
                                    <Col xs={12} md={10}>
                                        <p className="my-auto">
                                            Otro órgano (especifique)
                                        </p>
                                    </Col>
                                    <Col xs={12} md={2}>
                                        <OverlayTrigger
                                            placement="top"
                                            overlay={
                                                <Tooltip id="tooltip-otroOrgano">Agregar otro tipo de organo</Tooltip>
                                            }>
                                            <Button variant="success" onClick={handleModalChangeAdd}>
                                                <span> <FontAwesomeIcon icon={faPlus} /></span></Button>
                                        </OverlayTrigger>
                                    </Col>
                                </Row>
                            </Col>

                        </Row>
                        <Col xs={12} md={12} className="mb-3">
                            <OrganosCrud variableForm={form.organos} handleChange={handleChange} handleChangeRegistrosDelete={handleChangeOrganosDelete} handleChangeRegistrosEdit={handleChangeOrganosEdit} elemento={"Organo"} />
                        </Col>
                    </Row>
                </Col>
                <ModalAdd
                    modalTriggerAdd={modalTriggerAdd}
                    handleModalChangeAdd={handleModalChangeAdd}
                    handleChangeRegistros={handleChangeOrganos}
                    elemento={"Organo"}
                />
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
                                    onChange={handleChange}
                                    min={0} />
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
                                    onChange={handleChange}
                                    min={0} />
                            </OverlayTrigger>
                        </FloatingLabel>

                    </Col>

                    {/*TODO: Extraer el componente para hacerlo reutilizable*/}
                    {/*Tasa de Internamiento por Urgencias*/}
                    <Col xs={12} md={12} className="mb-3">

                        <Row className="align-items-center">

                            <Row className="justify-content-center">
                                <Col xs={12} md={12} className="text-center">
                                    <Form.Label>Tasa de Internamiento por Urgencias</Form.Label>
                                </Col>
                            </Row>

                            <Row className="justify-content-center">

                                {/*Input field*/}
                                <Col xs={12} md={2} className="my-auto">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id="tooltip-atencionesUrgencias">Porcentaje de internamientos por urgencias</Tooltip>
                                        }>
                                        <InputGroup>
                                            <InputGroup.Text id="percentage">%</InputGroup.Text>
                                            <Form.Control
                                                type="number"
                                                aria-describedby="percentage"
                                                name="numeroTasaInternamientoUrgencias"
                                                onChange={handleChange}
                                                min={0}
                                                value={
                                                    form.numeroTasaInternamientoUrgencias > 100 ? 100 :
                                                        form.numeroTasaInternamientoUrgencias < 0 ? 0 :
                                                            form.numeroTasaInternamientoUrgencias ? form.numeroTasaInternamientoUrgencias : ''
                                                } />
                                        </InputGroup>
                                    </OverlayTrigger>
                                </Col>
                            </Row>

                            {/*Slide bar*/}
                            <Col xs={12} md={12} className="my-auto">

                                <span>
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id="tooltip-rinion">Tasa de Internamiento por Urgencias: %{form.numeroTasaInternamientoUrgencias}</Tooltip>
                                        }>
                                        <Form.Range
                                            min="0"
                                            max="100"
                                            step="1"
                                            placeholder="Tasa de Internamiento por Urgencias"
                                            value={form.numeroTasaInternamientoUrgencias ? form.numeroTasaInternamientoUrgencias : ''}
                                            name="numeroTasaInternamientoUrgencias"
                                            onChange={handleChange} />
                                    </OverlayTrigger>
                                </span>

                            </Col>

                        </Row>
                    </Col>

                </Row>
            </Col>
        </Fragment>
    )
}

function ServicioLaboratorio(props) {
    const form = props.form
    const handleChange = props.handleChange

    return (
        <Fragment>
            <Col xs={12} md={12} className="mt-3">
                <Row>
                    {/*Título de la sección de la encuesta*/}
                    <Col xs={12} md={12} className="mb-3">
                        <h4 className="text-center sub-title-cmh">Servicio de Laboratorio</h4>
                    </Col>

                    <Row className="justify-content-center">

                        {/*Radiología simple*/}
                        <Col xs={12} md={4} className="mb-3">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Cantidad de Estudios realizados">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id="tooltip-numeroEstudios">Número de estudios de laboratorio realizados</Tooltip>
                                    }>
                                    <Form.Control
                                        type="number"
                                        placeholder="Cantidad de Estudios realizados"
                                        value={form.numeroEstudiosRealizados ? form.numeroEstudiosRealizados : ''}
                                        name="numeroEstudiosRealizados"
                                        onChange={handleChange}
                                        min={0} />
                                </OverlayTrigger>
                            </FloatingLabel>

                        </Col>

                    </Row>

                </Row>
            </Col>
        </Fragment>
    )
}

function ADT(props) {
    const form = props.form
    const handleChange = props.handleChange

    return (
        <Fragment>
            <Col xs={12} md={12} className="mt-3">
                <Row>
                    {/*Título de la sección de la encuesta*/}
                    <Col xs={12} md={12} className="mb-3">
                        <h4 className="text-center sub-title-cmh">Servicios de Apoyo Diagnóstico-Terapéutico</h4>
                    </Col>

                    {/*HEMODINAMIA*/}
                    <Col xs={12} md={4} className="mb-3">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="HEMODINAMIA">
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-HEMODINAMIA">Cantidad de pacientes atendidos en unidad de Hemodinamia</Tooltip>
                                }>
                                <Form.Control
                                    type="number"
                                    placeholder="HEMODINAMIA"
                                    value={form.numeroPacientesHemodinamia ? form.numeroPacientesHemodinamia : ''}
                                    name="numeroPacientesHemodinamia"
                                    onChange={handleChange}
                                    min={0} />
                            </OverlayTrigger>
                        </FloatingLabel>

                    </Col>

                    {/*HEMODIALISIS*/}
                    <Col xs={12} md={4} className="mb-3">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="HEMODIÁLISIS">
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-HEMODIALISIS">Cantidad de pacientes atendidos en unidad de Hemodiálisis</Tooltip>
                                }>
                                <Form.Control
                                    type="number"
                                    placeholder="HEMODIALISIS"
                                    value={form.numeroPacientesHemodialisis ? form.numeroPacientesHemodialisis : ''}
                                    name="numeroPacientesHemodialisis"
                                    onChange={handleChange}
                                    min={0} />
                            </OverlayTrigger>
                        </FloatingLabel>

                    </Col>


                    {/*QUIMIOTERAPIA*/}
                    <Col xs={12} md={4} className="mb-3">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="QUIMIOTERAPIA">
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-QUIMIOTERAPIA">Cantidad de pacientes atendidos en unidad de Quimioterapia</Tooltip>
                                }>
                                <Form.Control
                                    type="number"
                                    placeholder="QUIMIOTERAPIA"
                                    value={form.numeroPacientesQuimioterapia ? form.numeroPacientesQuimioterapia : ''}
                                    name="numeroPacientesQuimioterapia"
                                    onChange={handleChange}
                                    min={0} />
                            </OverlayTrigger>
                        </FloatingLabel>

                    </Col>

                    {/*ENDOSCOPIA*/}
                    <Col xs={12} md={4} className="mb-3">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="ENDOSCOPÍA">
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-ENDOSCOPIA">Cantidad de pacientes atendidos en unidad de Edoscopía</Tooltip>
                                }>
                                <Form.Control
                                    type="number"
                                    placeholder="ENDOSCOPIA"
                                    value={form.numeroPacientesEndoscopia ? form.numeroPacientesEndoscopia : ''}
                                    name="numeroPacientesEndoscopia"
                                    onChange={handleChange}
                                    min={0} />
                            </OverlayTrigger>
                        </FloatingLabel>

                    </Col>

                    {/*UNIDAD DE QUEMADOS*/}
                    <Col xs={12} md={4} className="mb-3">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="UNIDAD DE QUEMADOS">
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-UNIDAD DE QUEMADOS">Cantidad de pacientes atendidos en unidad de Quemados</Tooltip>
                                }>
                                <Form.Control
                                    type="number"
                                    placeholder="UNIDAD DE QUEMADOS"
                                    value={form.numeroPacientesQuemados ? form.numeroPacientesQuemados : ''}
                                    name="numeroPacientesQuemados"
                                    onChange={handleChange}
                                    min={0} />
                            </OverlayTrigger>
                        </FloatingLabel>

                    </Col>

                    {/*REHABILITACIÓN Y FISIATRIA*/}
                    <Col xs={12} md={4} className="mb-3">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="REHABILITACIÓN Y FISIATRíA">
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-ENDOSCOPIA">Cantidad de pacientes atendidos en unidad de Rehabilitación y Fisiatría</Tooltip>
                                }>
                                <Form.Control
                                    type="number"
                                    placeholder="REHABILITACIÓN Y FISIATRIA"
                                    value={form.numeroPacientesRehabilitacionFisiatria ? form.numeroPacientesRehabilitacionFisiatria : ''}
                                    name="numeroPacientesRehabilitacionFisiatria"
                                    onChange={handleChange}
                                    min={0} />
                            </OverlayTrigger>
                        </FloatingLabel>

                    </Col>

                    <Row className="justify-content-center">

                        {/*TRANSFUSIÓN DE HEMOCOMPONENTES*/}
                        <Col xs={12} md={5} className="mb-3">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="TRANSFUSIÓN DE HEMOCOMPONENTES">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id="tooltip-HEMOCOMPONENTES">Cantidad de pacientes atendidos en unidad de Transfusión de Hemocomponentes</Tooltip>
                                    }>
                                    <Form.Control
                                        type="number"
                                        placeholder="TRANSFUSIÓN DE HEMOCOMPONENTES"
                                        value={form.numeroPacientesTransfusionHemocomponentes ? form.numeroPacientesTransfusionHemocomponentes : ''}
                                        name="numeroPacientesTransfusionHemocomponentes"
                                        onChange={handleChange}
                                        min={0} />
                                </OverlayTrigger>
                            </FloatingLabel>

                        </Col>

                    </Row>

                </Row>
            </Col>

        </Fragment>
    )
}

function OtrosServicios(props) {
    const form = props.form
    const handleChange = props.handleChange

    return (
        <Fragment>
            <Col xs={12} md={12} className="mt-3">
                <Row>
                    {/*Título de la sección de la encuesta*/}
                    <Col xs={12} md={12} className="mb-3">
                        <h4 className="text-center sub-title-cmh">Otros Servicios</h4>
                    </Col>

                    {/*Servicio de Nutrición y Dietética (Alimentación) en Internamiento*/}
                    <Col xs={12} md={6} className="mb-3">

                        <span>
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-rinion">Servicio de Nutrición y Dietética (Alimentación) en Internamiento</Tooltip>
                                }>
                                <FloatingLabel controlId="floatingSelect" label="Servicio de Nutrición y Dietética (Alimentación) en Internamiento">

                                    <Form.Select aria-label="Floating label" value={form.alimentacionInternamiento ? form.alimentacionInternamiento : ''} onChange={handleChange} name="alimentacionInternamiento"
                                    >
                                        <option value="" disabled>Seleccione una opción</option>
                                        <option value={true}>Si</option>
                                        <option value={false}>No</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </OverlayTrigger>
                        </span>

                    </Col>

                    {/*Servicio de Banco de Leche*/}
                    <Col xs={12} md={6} className="mb-3">

                        <span>
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-rinion">Servicio de Banco de Leche</Tooltip>
                                }>
                                <FloatingLabel controlId="floatingSelect" label="Servicio de Banco de Leche">
                                    <Form.Select aria-label="Floating label" value={form.bancoDeLeche ? form.bancoDeLeche : ''} onChange={handleChange} name="bancoDeLeche"
                                    >
                                        <option value="" disabled>Seleccione una opción</option>
                                        <option value={true}>Si</option>
                                        <option value={false}>No</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </OverlayTrigger>
                        </span>

                    </Col>

                    {/*Servicio de Lavandería para Ropa Hospitalaria*/}
                    <Col xs={12} md={6} className="mb-3">

                        <span>
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-rinion">Servicio de Lavandería para Ropa Hospitalaria</Tooltip>
                                }>
                                <FloatingLabel controlId="floatingSelect" label="Servicio de Lavandería para Ropa Hospitalaria">

                                    <Form.Select aria-label="Floating label" value={form.servicioLavanderia ? form.servicioLavanderia : ''} onChange={handleChange} name="servicioLavanderia"
                                    >
                                        <option value="" disabled>Seleccione una opción</option>
                                        <option value={true}>Si</option>
                                        <option value={false}>No</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </OverlayTrigger>
                        </span>

                    </Col>

                    {/*Central de Equipos y Esterilización (CEYE)*/}
                    <Col xs={12} md={6} className="mb-3">

                        <span>
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-rinion">Central de Equipos y Esterilización (CEYE)</Tooltip>
                                }>
                                <FloatingLabel controlId="floatingSelect" label="Central de Equipos y Esterilización (CEYE)">
                                    <Form.Select aria-label="Floating label" value={form.ceye ? form.ceye : ''} onChange={handleChange} name="ceye"
                                    >
                                        <option value="" disabled>Seleccione una opción</option>
                                        <option value={true}>Si</option>
                                        <option value={false}>No</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </OverlayTrigger>
                        </span>
                    </Col>

                    {/*Servicio de Evaluaciones Médicas (Check up´s)*/}

                    <Col xs={12} md={6} className="mb-3">

                        <span>
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-rinion">Servicio de Evaluaciones Médicas (Check up´s)</Tooltip>
                                }>
                                <FloatingLabel controlId="floatingSelect" label="Servicio de Evaluaciones Médicas (Check up´s)">

                                    <Form.Select aria-label="Floating label" value={form.evaluacionesMedicasCheckUps ? form.evaluacionesMedicasCheckUps : ''} onChange={handleChange} name="evaluacionesMedicasCheckUps"
                                    >
                                        <option value="" disabled>Seleccione una opción</option>
                                        <option value={true}>Si</option>
                                        <option value={false}>No</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </OverlayTrigger>
                        </span>

                    </Col>

                    {/*Farmacia Venta al Público*/}
                    <Col xs={12} md={6} className="mb-3">

                        <span>
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-rinion">Farmacia Venta al Público</Tooltip>
                                }>
                                <FloatingLabel controlId="floatingSelect" label="Farmacia Venta al Público">

                                    <Form.Select aria-label="Floating label" value={form.farmaciaVentaPublico ? form.farmaciaVentaPublico : ''} onChange={handleChange} name="farmaciaVentaPublico"
                                    >
                                        <option value="" disabled>Seleccione una opción</option>
                                        <option value={true}>Si</option>
                                        <option value={false}>No</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </OverlayTrigger>
                        </span>

                    </Col>
                </Row>
            </Col>
        </Fragment>
    )
}

{/*TODO: Implementar como una lista dinámica*/ }
function EquiposInversion(props) {
    const form = props.form
    const handleChange = props.handleChange
}


export default EyP;