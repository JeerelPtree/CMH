import React, { Input, Fragment, useState, useEffect } from "react";
import { Stack, Container, Col, Row, FloatingLabel, Button, Form, OverlayTrigger, Tooltip, FormGroup, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import OrganosCrud from "../tables/OrganosCrud";
import ModalAdd from "../modals/modals encuestas/EyP/ModalAdd";
import YesOrNotOptions from "./json/yesOrNotOptionsTrueOrFalse.json"

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
                                handleChangeOrganosEdit={handleChangeOrganosEdit} yesOrNotOptions={YesOrNotOptions} />

                            <ServiciosUrgencias form={form} handleChange={handleChange} />

                            <ServicioLaboratorio form={form} handleChange={handleChange} />

                            <ADT form={form} handleChange={handleChange} />

                            <OtrosServicios form={form} handleChange={handleChange} />


                            {/* {/* Botón de enviar * /}
                            <Col xs={12} md={6} className="mt-3 mb-5">
                                <Button variant="primary" onClick={prueba}> Enviar
                                </Button>
                            </Col> */}


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

                        <GetInput
                            label="Habitaciones"
                            value={form.numeroCamasHospitalizacion}
                            name="numeroCamasHospitalizacion"
                            handleChange={handleChange}
                            tooltipDescrip='Número de camas de hospitalización'
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />

                    </Col>

                    {/*Camas UCIA*/}
                    <Col xs={12} md={4} className="mb-3">

                        <GetInput
                            label="Camas UCIA"
                            value={form.numeroCamasUCIA}
                            name="numeroCamasUCIA"
                            handleChange={handleChange}
                            tooltipDescrip='Número de camas en Unidad de Cuidados Intentivos Adultos'
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />

                    </Col>

                    {/*Camas UCIP*/}
                    <Col xs={12} md={4} className="mb-3">

                        <GetInput
                            label="Camas UCIP"
                            value={form.numeroCamasUCIP}
                            name="numeroCamasUCIP"
                            handleChange={handleChange}
                            tooltipDescrip='Número de camas en Unidad de Cuidados Intensivos Pediátricos'
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />

                    </Col>

                    {/*Camas UCIN*/}
                    <Col xs={12} md={4} className="mb-3">

                        <GetInput
                            label="Camas UCIN"
                            value={form.numeroCamasUCIN}
                            name="numeroCamasUCIN"
                            handleChange={handleChange}
                            tooltipDescrip='Número de camas en Unidad de Cuidados Intensivos Neonatal'
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />

                    </Col>

                    {/*Camas o cubículos en urgencias*/}
                    <Col xs={12} md={4} className="mb-3">

                        <GetInput
                            label="Camas en Urgencias"
                            value={form.numeroCamasUrgencias}
                            name="numeroCamasUrgencias"
                            handleChange={handleChange}
                            tooltipDescrip='Número de camas o cubículos en urgencias'
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />

                    </Col>

                    {/*Camas de aislamiento*/}
                    <Col xs={12} md={4} className="mb-3">

                        <GetInput
                            label="Camas en Aislamiento"
                            value={form.numeroCamasAislamiento}
                            name="numeroCamasAislamiento"
                            handleChange={handleChange}
                            tooltipDescrip='Número de camas de aislamiento'
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />

                    </Col>

                    {/*Cunas*/}
                    <Col xs={12} md={4} className="mb-3">

                        <GetInput
                            label="Cunas"
                            value={form.numeroCunas}
                            name="numeroCunas"
                            handleChange={handleChange}
                            tooltipDescrip='Número de cunas'
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />

                    </Col>

                    {/*Incubadoras*/}
                    <Col xs={12} md={4} className="mb-3">

                        <GetInput
                            label="Incubadoras"
                            value={form.numeroIncubadoras}
                            name="numeroIncubadoras"
                            handleChange={handleChange}
                            tooltipDescrip='Número de incubadoras'
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />

                    </Col>

                    {/*Salas de cirugía*/}
                    <Col xs={12} md={4} className="mb-3">

                        <GetInput
                            label="Quirófanos"
                            value={form.numeroQuirofanos}
                            name="numeroQuirofanos"
                            handleChange={handleChange}
                            tooltipDescrip='Número de salas de cirugía'
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />

                    </Col>

                    <Row className="justify-content-center">

                        {/*Salas de Tococirugía*/}
                        <Col xs={12} md={4} className="mb-3">

                            <GetInput
                                label="Salas de Partos"
                                value={form.numeroSalasPartos}
                                name="numeroSalasPartos"
                                handleChange={handleChange}
                                tooltipDescrip='Número de salas de Tococirugía'
                                type="number"
                                min={0}
                                isRequired={true}
                                placement="top"
                                show={true}
                            />

                        </Col>

                        {/*Salas exclusivas de cirugía ambulatoria*/}
                        <Col xs={12} md={4} className="mb-3">

                            <GetInput
                                label="Salas de Cirugía Ambulatoria"
                                value={form.numeroSalasAmbulatoria}
                                name="numeroSalasAmbulatoria"
                                handleChange={handleChange}
                                tooltipDescrip='Número de salas exclusivas de Cirugía Ambulatoria'
                                type="number"
                                min={0}
                                isRequired={true}
                                placement="top"
                                show={true}
                            />

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

                        <GetInput
                            label="Pacientes Adultos internados"
                            value={form.numeroPacientesAdultos}
                            name="numeroPacientesAdultos"
                            handleChange={handleChange}
                            tooltipDescrip='Número de pacientes Adultos internados'
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />

                    </Col>

                    {/*Pacientes pedriaticos internados*/}
                    <Col xs={12} md={6} className="mb-3">

                        <GetInput
                            label="Pacientes Pediátricos internados"
                            value={form.numeroPacientesPediátricos}
                            name="numeroPacientesPediátricos"
                            handleChange={handleChange}
                            tooltipDescrip='Número de pacientes Pediátricos internados'
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />

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

                        <GetInput
                            label="General"
                            value={form.numeroConsultasGeneral}
                            name="numeroConsultasGeneral"
                            handleChange={handleChange}
                            tooltipDescrip='Número de consultas generales'
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />

                    </Col>

                    {/*Especializada*/}
                    <Col xs={12} md={6} className="mb-3">

                        <GetInput
                            label="Especializada"
                            value={form.numeroConsultasEspecializada}
                            name="numeroConsultasEspecializada"
                            handleChange={handleChange}
                            tooltipDescrip='Número de consultas especializadas'
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />

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

                        <GetInput
                            label="Radiología Simple"
                            value={form.numeroRadiologiaSimple}
                            name="numeroRadiologiaSimple"
                            handleChange={handleChange}
                            tooltipDescrip='Número de estudios de radiología simple'
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />

                    </Col>

                    {/*Radiología Contrastada*/}
                    <Col xs={12} md={4} className="mb-3">

                        <GetInput
                            label="Radiología Contrastada"
                            value={form.numeroRadiologiaContrastada}
                            name="numeroRadiologiaContrastada"
                            handleChange={handleChange}
                            tooltipDescrip='Número de estudios de radiología contrastada'
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />

                    </Col>

                    {/*Tomografía*/}
                    <Col xs={12} md={4} className="mb-3">

                        <GetInput
                            label="Tomografía"
                            value={form.numeroTomografia}
                            name="numeroTomografia"
                            handleChange={handleChange}
                            tooltipDescrip='Número de estudios de tomografía'
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />

                    </Col>

                    {/*Ecografía*/}
                    <Col xs={12} md={4} className="mb-3">

                        <GetInput
                            label="Ecografía"
                            value={form.numeroEcografía}
                            name="numeroEcografía"
                            handleChange={handleChange}
                            tooltipDescrip='Número de ultrasonografías diagnósticas'
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />

                    </Col>

                    {/*Estudios Vasculares No Invasivos*/}
                    <Col xs={12} md={4} className="mb-3">

                        <GetInput
                            label="Estudios Vasculares No Invasivos"
                            value={form.numeroEVNI}
                            name="numeroEVNI"
                            handleChange={handleChange}
                            tooltipDescrip='Número de estudios vasculares no invasivos'
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />

                    </Col>

                    {/*Resonancia Magnética*/}
                    <Col xs={12} md={4} className="mb-3">

                        <GetInput
                            label="Resonancia Magnética"
                            value={form.numeroResonanciaMagnetica}
                            name="numeroResonanciaMagnetica"
                            handleChange={handleChange}
                            tooltipDescrip='Número de resonancias magnéticas'
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />

                    </Col>

                    {/*Gammagrafía y Estudios Isotópicos */}
                    <Col xs={12} md={4} className="mb-3">

                        <GetInput
                            label="Gammagrafía y Estudios Isotópicos"
                            value={form.numeroGammagrafia}
                            name="numeroGammagrafia"
                            handleChange={handleChange}
                            tooltipDescrip='Número de gammagrafías y estudios isotópicos'
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />

                    </Col>

                    {/*PET*/}
                    <Col xs={12} md={4} className="mb-3">

                        <GetInput
                            label="PET"
                            value={form.numeroPET}
                            name="numeroPET"
                            handleChange={handleChange}
                            tooltipDescrip='Número de tomografías por emisión de positrones'
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />

                    </Col>

                    {/*RADIOTERAPIA*/}
                    <Col xs={12} md={4} className="mb-3">

                        <GetInput
                            label="RADIOTERAPIA"
                            value={form.numeroRADIOTERAPIA}
                            name="numeroRADIOTERAPIA"
                            handleChange={handleChange}
                            tooltipDescrip='Número de estudios de RADIOTERAPIA'
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />

                    </Col>

                    <Row className="justify-content-center">

                        {/*Mastógrafía*/}
                        <Col xs={12} md={4} className="mb-3">

                            <GetInput
                                label="Mastógrafía"
                                value={form.numeroMastografia}
                                name="numeroMastografia"
                                handleChange={handleChange}
                                tooltipDescrip='Número de mastógrafías'
                                type="number"
                                min={0}
                                isRequired={true}
                                placement="top"
                                show={true}
                            />

                        </Col>

                        {/*Densitómetría*/}
                        <Col xs={12} md={4} className="mb-3">

                            <GetInput
                                label="Densitómetría"
                                value={form.numeroDensitometria}
                                name="numeroDensitometria"
                                handleChange={handleChange}
                                tooltipDescrip='Número de estudios de densitómetría'
                                type="number"
                                min={0}
                                isRequired={true}
                                placement="top"
                                show={true}
                            />

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
    const YesOrNotOptions = props.yesOrNotOptions;

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

                            <GetSelector
                                label='¿Realizan Transplantes?'
                                style={{ height: '70px' }}
                                value={form.realizanTransplantes}
                                tooltipDescrip='¿Realizan Transplantes?'
                                name='realizanTransplantes'
                                handleChange={handleChange}
                                options={YesOrNotOptions}
                                isRequired={true}
                                show={true}
                            />

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

                            <GetInput
                                label="Riñon"
                                value={form.numeroRiniones}
                                name="numeroRiniones"
                                handleChange={handleChange}
                                tooltipDescrip='Cantidad de riñones transplantados'
                                type="number"
                                min={0}
                                isRequired={true}
                                placement="top"
                                show={true}
                            />

                        </Col>

                        {/*Higado*/}
                        <Col xs={12} md={4} className="mb-3">

                            <GetInput
                                label="Higado"
                                value={form.numeroHigados}
                                name="numeroHigados"
                                handleChange={handleChange}
                                tooltipDescrip='Cantidad de higados transplantados'
                                type="number"
                                min={0}
                                isRequired={true}
                                placement="top"
                                show={true}
                            />

                        </Col>

                        {/*Pulmón*/}
                        <Col xs={12} md={4} className="mb-3">

                            <GetInput
                                label="Pulmón"
                                value={form.numeroPulmones}
                                name="numeroPulmones"
                                handleChange={handleChange}
                                tooltipDescrip='Cantidad de pulmones transplantados'
                                type="number"
                                min={0}
                                isRequired={true}
                                placement="top"
                                show={true}
                            />

                        </Col>

                        {/*Corazón*/}
                        <Col xs={12} md={4} className="mb-3">

                            <GetInput
                                label="Corazón"
                                value={form.numeroCorazones}
                                name="numeroCorazones"
                                handleChange={handleChange}
                                tooltipDescrip='Cantidad de corazones transplantados'
                                type="number"
                                min={0}
                                isRequired={true}
                                placement="top"
                                show={true}
                            />

                        </Col>

                        {/*Córneas*/}
                        <Col xs={12} md={4} className="mb-3">

                            <GetInput
                                label="Córnea"
                                value={form.numeroCorneas}
                                name="numeroCorneas"
                                handleChange={handleChange}
                                tooltipDescrip='Cantidad de córneas transplantados'
                                type="number"
                                min={0}
                                isRequired={true}
                                placement="top"
                                show={true}
                            />

                        </Col>

                        {/*Hueso*/}
                        <Col xs={12} md={4} className="mb-3">

                            <GetInput
                                label="Hueso"
                                value={form.numeroHuesos}
                                name="numeroHuesos"
                                handleChange={handleChange}
                                tooltipDescrip='Cantidad de huesos transplantados'
                                type="number"
                                min={0}
                                isRequired={true}
                                placement="top"
                                show={true}
                            />

                        </Col>

                        <Row className="justify-content-center">

                            {/*Medula ósea*/}
                            <Col xs={12} md={4} className="mb-3">

                                <GetInput
                                    label="Médula ósea"
                                    value={form.numeroMedulas}
                                    name="numeroMedulas"
                                    handleChange={handleChange}
                                    tooltipDescrip='Cantidad de Células hematopoyéticas transplantadas'
                                    type="number"
                                    min={0}
                                    isRequired={true}
                                    placement="top"
                                    show={true}
                                />

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

                        <GetInput
                            label="Nº de Salas de Observación"
                            value={form.numeroSalasObservacionUrgencias}
                            name="numeroSalasObservacionUrgencias"
                            handleChange={handleChange}
                            tooltipDescrip='Número de salas de observación de urgencias'
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />

                    </Col>

                    {/*Atenciones Médicas de Urgencias*/}
                    <Col xs={12} md={6} className="mb-3">

                        <GetInput
                            label="Atenciones Médicas de Urgencias"
                            value={form.numeroAtencionesMedicasUrgencias}
                            name="numeroAtencionesMedicasUrgencias"
                            handleChange={handleChange}
                            tooltipDescrip='Número de pacientes atendidos en urgencias'
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />

                    </Col>

                    {/*TODO: Extraer el componente para hacerlo reutilizable*/}
                    {/*Tasa de Internamiento por Urgencias*/}
                    <Col xs={12} md={12} className="mb-3">

                        <Row className="align-items-center">

                            <Row className="justify-content-center">

                                <GetInputFormat
                                    label="TIU"
                                    value={form.numeroTasaInternamientoUrgencias > 100 ? 100 :
                                        form.numeroTasaInternamientoUrgencias < 0 ? 0 :
                                            form.numeroTasaInternamientoUrgencias ? form.numeroTasaInternamientoUrgencias : ''}
                                    name="numeroTasaInternamientoUrgencias"
                                    handleChange={handleChange}
                                    tooltipDescrip="Tasa de Internamientos por Urgencias"
                                    type="number"
                                    isRequired={true}
                                    placement="top"
                                    show={true}
                                    isRight={true}
                                    rightSymbol="%"
                                />

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

                            <GetInput
                                label="Cantidad de Estudios realizados"
                                value={form.numeroEstudiosRealizados}
                                name="numeroEstudiosRealizados"
                                handleChange={handleChange}
                                tooltipDescrip='Número de estudios de laboratorio realizados'
                                type="number"
                                min={0}
                                isRequired={true}
                                placement="top"
                                show={true}
                            />

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

                        <GetInput
                            label="HEMODINAMIA"
                            value={form.numeroPacientesHemodinamia}
                            name="numeroPacientesHemodinamia"
                            handleChange={handleChange}
                            tooltipDescrip='Cantidad de pacientes atendidos en unidad de Hemodinamia'
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />

                    </Col>

                    {/*HEMODIALISIS*/}
                    <Col xs={12} md={4} className="mb-3">

                        <GetInput
                            label="HEMODIÁLISIS"
                            value={form.numeroPacientesHemodialisis}
                            name="numeroPacientesHemodialisis"
                            handleChange={handleChange}
                            tooltipDescrip='Cantidad de pacientes atendidos en unidad de Hemodiálisis'
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />

                    </Col>


                    {/*QUIMIOTERAPIA*/}
                    <Col xs={12} md={4} className="mb-3">

                        <GetInput
                            label="QUIMIOTERAPIA"
                            value={form.numeroPacientesQuimioterapia}
                            name="numeroPacientesQuimioterapia"
                            handleChange={handleChange}
                            tooltipDescrip='Cantidad de pacientes atendidos en unidad de Quimioterapia'
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />

                    </Col>

                    {/*ENDOSCOPIA*/}
                    <Col xs={12} md={4} className="mb-3">

                        <GetInput
                            label="ENDOSCOPÍA"
                            value={form.numeroPacientesEndoscopia}
                            name="numeroPacientesEndoscopia"
                            handleChange={handleChange}
                            tooltipDescrip='Cantidad de pacientes atendidos en unidad de Edoscopía'
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />

                    </Col>

                    {/*UNIDAD DE QUEMADOS*/}
                    <Col xs={12} md={4} className="mb-3">

                        <GetInput
                            label="UNIDAD DE QUEMADOS"
                            value={form.numeroPacientesQuemados}
                            name="numeroPacientesQuemados"
                            handleChange={handleChange}
                            tooltipDescrip='Cantidad de pacientes atendidos en unidad de Quemados'
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />

                    </Col>

                    {/*REHABILITACIÓN Y FISIATRIA*/}
                    <Col xs={12} md={4} className="mb-3">

                        <GetInput
                            label="REHABILITACIÓN Y FISIATRíA"
                            value={form.numeroPacientesRehabilitacionFisiatria}
                            name="numeroPacientesRehabilitacionFisiatria"
                            handleChange={handleChange}
                            tooltipDescrip='Cantidad de pacientes atendidos en unidad de Rehabilitación y Fisiatría'
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />


                    </Col>

                    <Row className="justify-content-center">

                        {/*TRANSFUSIÓN DE HEMOCOMPONENTES*/}
                        <Col xs={12} md={5} className="mb-3">

                            <GetInput
                                label="TRANSFUSIÓN DE HEMOCOMPONENTES"
                                value={form.numeroPacientesTransfusionHemocomponentes}
                                name="numeroPacientesTransfusionHemocomponentes"
                                handleChange={handleChange}
                                tooltipDescrip='Cantidad de pacientes atendidos en unidad de Transfusión de Hemocomponentes'
                                type="number"
                                min={0}
                                isRequired={true}
                                placement="top"
                                show={true}
                            />

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

                        <GetSelector
                            label='Servicio de Nutrición y Dietética (Alimentación) en Internamiento'
                            style={{ height: '70px' }}
                            value={form.alimentacionInternamiento}
                            name='alimentacionInternamiento'
                            tooltipDescrip='Servicio de Nutrición y Dietética (Alimentación) en Internamiento'
                            handleChange={handleChange}
                            options={YesOrNotOptions}
                            isRequired={true}
                            show={true}
                        />

                    </Col>

                    {/*Servicio de Banco de Leche*/}
                    <Col xs={12} md={6} className="mb-3">

                        <GetSelector
                            label='Servicio de Banco de Leche'
                            style={{ height: '70px' }}
                            value={form.bancoDeLeche}
                            name='bancoDeLeche'
                            tooltipDescrip='Servicio de Banco de Leche'
                            handleChange={handleChange}
                            options={YesOrNotOptions}
                            isRequired={true}
                            show={true}
                        />

                    </Col>

                    {/*Servicio de Lavandería para Ropa Hospitalaria*/}
                    <Col xs={12} md={6} className="mb-3">

                        <GetSelector
                            label='Servicio de Lavandería para Ropa Hospitalaria'
                            style={{ height: '70px' }}
                            value={form.servicioLavanderia}
                            name='servicioLavanderia'
                            tooltipDescrip='Servicio de Lavandería para Ropa Hospitalaria'
                            handleChange={handleChange}
                            options={YesOrNotOptions}
                            isRequired={true}
                            show={true}
                        />

                    </Col>

                    {/*Central de Equipos y Esterilización (CEYE)*/}
                    <Col xs={12} md={6} className="mb-3">

                        <GetSelector
                            label='Central de Equipos y Esterilización (CEYE)'
                            style={{ height: '70px' }}
                            value={form.ceye}
                            name='ceye'
                            tooltipDescrip='Central de Equipos y Esterilización (CEYE)'
                            handleChange={handleChange}
                            options={YesOrNotOptions}
                            isRequired={true}
                            show={true}
                        />

                    </Col>

                    {/*Servicio de Evaluaciones Médicas (Check up´s)*/}

                    <Col xs={12} md={6} className="mb-3">

                        <GetSelector
                            label='Servicio de Evaluaciones Médicas (Check up´s)'
                            style={{ height: '70px' }}
                            value={form.evaluacionesMedicasCheckUps}
                            name='evaluacionesMedicasCheckUps'
                            tooltipDescrip='Servicio de Evaluaciones Médicas (Check up´s)'
                            handleChange={handleChange}
                            options={YesOrNotOptions}
                            isRequired={true}
                            show={true}
                        />

                    </Col>

                    {/*Farmacia Venta al Público*/}
                    <Col xs={12} md={6} className="mb-3">

                        <GetSelector
                            label='Farmacia Venta al Público'
                            style={{ height: '70px' }}
                            value={form.farmaciaVentaPublico}
                            name='farmaciaVentaPublico'
                            tooltipDescrip='Farmacia Venta al Público'
                            handleChange={handleChange}
                            options={YesOrNotOptions}
                            isRequired={true}
                            show={true}
                        />

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

function GetInput(props) {

    //we obtain their props
    const { label, value, name, handleChange, tooltipDescrip, min, type, isRequired, placement, show, isReadOnly = false, isTextArea = false, style = null } = props

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
                            min={min}
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
    const { label, value, name, handleChange, tooltipDescrip, type, min, isRequired, placement, show, isReadOnly = false, leftSymbol, rightSymbol, isLeft = false, isRight = false } = props

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
                                min={min}
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
                                min={min}
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
    const { label, style = null, value, tooltipDescrip, name, handleChange, options, isRequired, show } = props

    if (show == true) {
        return (
            <Fragment>

                <OverlayTrigger
                    placement="top"
                    overlay={
                        <Tooltip id={`tooltip-${name}`}>{tooltipDescrip}</Tooltip>
                    }>
                    <FloatingLabel controlId="floatingSelect" label={label}>
                        <Form.Select
                            aria-label="Floating label"
                            value={value ? value : ''}
                            onChange={handleChange}
                            name={name}
                            required={isRequired}
                            style={style}
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
                </OverlayTrigger>

            </Fragment>
        )
    }
}


export default EyP;