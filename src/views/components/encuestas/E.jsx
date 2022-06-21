import React, { Input, Fragment, useState, useEffect } from "react";
import { Stack, Container, Col, Row, FloatingLabel, Button, Form, OverlayTrigger, Tooltip, FormGroup, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import OrganosCrud from "../tables/OrganosCrud";
import ModalAdd from "../modals/modals encuestas/E/ModalAdd";
import YesOrNotOptions from "./json/yesOrNotOptionsTrueOrFalse.json"
import SubrogadoOptions from "../../json/propiaSubrogadoPropioSubrogadoExterno.json"

//import axios from "axios"


//we import css
import "../../../globalStyles.css"

const currentYear = new Date().getFullYear();

function E() {

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

                            {/*Título de la sección de la encuesta*/}
                            <Col xs={12} md={12} className="">
                                <h4 className="text-center title-cmh">Áreas de Apoyo</h4>
                            </Col>

                            <Alimentacion form={form} handleChange={handleChange} />

                            <ServiciosGenerales form={form} handleChange={handleChange} />

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

function Alimentacion(props) {
    const form = props.form
    const handleChange = props.handleChange

    return (
        <Fragment>
            <Col xs={12} md={12} className="mt-3">
                <Row>
                    {/*Título de la sección de la encuesta*/}
                    <Col xs={12} md={12} className="mb-3">
                        <h4 className="text-center sub-title-cmh">Alimentación</h4>
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

                    {/*Tipo*/}
                    <Col xs={12} md={6} className="mb-3">
                        <GetSelector
                            label='Tipo'
                            style={{ height: '70px' }}
                            value={form.alimentacionInternamientoPSB}
                            name='alimentacionInternamientoPSB'
                            tooltipDescrip='Tipo'
                            handleChange={handleChange}
                            options={SubrogadoOptions}
                            isRequired={true}
                            show={form.alimentacionInternamiento == 'true' ? true : false}
                        />
                    </Col>

                    {/*Restaurante/cafetería al público*/}
                    <Col xs={12} md={6} className="mb-3">
                        <GetSelector
                            label='Restaurante/cafetería al público'
                            style={{ height: '70px' }}
                            value={form.restauranteCafeteria}
                            name='restauranteCafeteria'
                            tooltipDescrip='Restaurante/cafetería al público'
                            handleChange={handleChange}
                            options={YesOrNotOptions}
                            isRequired={true}
                            show={true}
                        />
                    </Col>

                    {/*Tipo*/}
                    <Col xs={12} md={6} className="mb-3">
                        <GetSelector
                            label='Tipo'
                            style={{ height: '70px' }}
                            value={form.restauranteCafeteriaPSB}
                            name='restauranteCafeteriaPSB'
                            tooltipDescrip='Tipo'
                            handleChange={handleChange}
                            options={SubrogadoOptions}
                            isRequired={true}
                            show={form.restauranteCafeteria == 'true' ? true : false}
                        />
                    </Col>

                    {/*Descanso de médicos*/}
                    <Col xs={12} md={6} className="mb-3">
                        <GetSelector
                            label='Descanso de médicos'
                            style={{ height: '70px' }}
                            value={form.descansoMedicos}
                            name='descansoMedicos'
                            tooltipDescrip='Descanso de médicos'
                            handleChange={handleChange}
                            options={YesOrNotOptions}
                            isRequired={true}
                            show={true}
                        />
                    </Col>

                    {/*Tipo*/}
                    <Col xs={12} md={6} className="mb-3">
                        <GetSelector
                            label='Tipo'
                            style={{ height: '70px' }}
                            value={form.descansoMedicosPSB}
                            name='descansoMedicosPSB'
                            tooltipDescrip='Tipo'
                            handleChange={handleChange}
                            options={SubrogadoOptions}
                            isRequired={true}
                            show={form.descansoMedicos == 'true' ? true : false}
                        />
                    </Col>
                </Row>
            </Col>
        </Fragment>
    )
}

function ServiciosGenerales(props) {
    const form = props.form
    const handleChange = props.handleChange

    return (
        <Fragment>
            <Col xs={12} md={12} className="mt-3">
                <Row>
                    {/*Título de la sección de la encuesta*/}
                    <Col xs={12} md={12} className="mb-3">
                        <h4 className="text-center sub-title-cmh">Servicios Generales</h4>
                    </Col>

                    {/*Aseo/Intendencia*/}
                    <Col xs={12} md={6} className="mb-3">

                        <GetSelector
                            label='Aseo/Intendencia'
                            style={{ height: '70px' }}
                            value={form.aseoIntendencia}
                            name='aseoIntendencia'
                            tooltipDescrip='Aseo/Intendencia'
                            handleChange={handleChange}
                            options={YesOrNotOptions}
                            isRequired={true}
                            show={true}
                        />

                    </Col>

                    {/*Tipo*/}
                    <Col xs={12} md={6} className="mb-3">
                        <GetSelector
                            label='Tipo'
                            style={{ height: '70px' }}
                            value={form.aseoIntendenciaPSB}
                            name='aseoIntendenciaPSB'
                            tooltipDescrip='Tipo'
                            handleChange={handleChange}
                            options={SubrogadoOptions}
                            isRequired={true}
                            show={form.aseoIntendencia == 'true' ? true : false}
                        />
                    </Col>

                    {/*Vigilancia y Seguridad*/}
                    <Col xs={12} md={6} className="mb-3">

                        <GetSelector
                            label='Vigilancia y Seguridad'
                            style={{ height: '70px' }}
                            value={form.vigilanciaSeguridad}
                            name='vigilanciaSeguridad'
                            tooltipDescrip='Vigilancia y Seguridad'
                            handleChange={handleChange}
                            options={YesOrNotOptions}
                            isRequired={true}
                            show={true}
                        />

                    </Col>

                    {/*Tipo*/}
                    <Col xs={12} md={6} className="mb-3">
                        <GetSelector
                            label='Tipo'
                            style={{ height: '70px' }}
                            value={form.vigilanciaSeguridadPSB}
                            name='vigilanciaSeguridadPSB'
                            tooltipDescrip='Tipo'
                            handleChange={handleChange}
                            options={SubrogadoOptions}
                            isRequired={true}
                            show={form.vigilanciaSeguridad == 'true' ? true : false}
                        />
                    </Col>

                    {/*Mantenimiento de la Infraestructura Física*/}
                    <Col xs={12} md={6} className="mb-3">

                        <GetSelector
                            label='Mantenimiento de la Infraestructura Física'
                            style={{ height: '70px' }}
                            value={form.mantenimientoInfraestructuraFisica}
                            name='mantenimientoInfraestructuraFisica'
                            tooltipDescrip='Mantenimiento de la Infraestructura Física'
                            handleChange={handleChange}
                            options={YesOrNotOptions}
                            isRequired={true}
                            show={true}
                        />

                    </Col>

                    {/*Tipo*/}
                    <Col xs={12} md={6} className="mb-3">
                        <GetSelector
                            label='Tipo'
                            style={{ height: '70px' }}
                            value={form.mantenimientoInfraestructuraFisicaPSB}
                            name='mantenimientoInfraestructuraFisicaPSB'
                            tooltipDescrip='Tipo'
                            handleChange={handleChange}
                            options={SubrogadoOptions}
                            isRequired={true}
                            show={form.mantenimientoInfraestructuraFisica == 'true' ? true : false}
                        />
                    </Col>

                    {/*Mantenimiento de Equipos Médicos (Biomédica)*/}

                    <Col xs={12} md={6} className="mb-3">

                        <GetSelector
                            label='Mantenimiento de Equipos Médicos (Biomédica)'
                            style={{ height: '70px' }}
                            value={form.mantenimientoEquipoMedico}
                            name='mantenimientoEquipoMedico'
                            tooltipDescrip='Mantenimiento de Equipos Médicos (Biomédica)'
                            handleChange={handleChange}
                            options={YesOrNotOptions}
                            isRequired={true}
                            show={true}
                        />

                    </Col>

                    {/*Tipo*/}
                    <Col xs={12} md={6} className="mb-3">
                        <GetSelector
                            label='Tipo'
                            style={{ height: '70px' }}
                            value={form.mantenimientoEquipoMedicoPSB}
                            name='mantenimientoEquipoMedicoPSB'
                            tooltipDescrip='Tipo'
                            handleChange={handleChange}
                            options={SubrogadoOptions}
                            isRequired={true}
                            show={form.mantenimientoEquipoMedico == 'true' ? true : false}
                        />
                    </Col>

                    {/*CEYE*/}
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

                    {/*Tipo*/}
                    <Col xs={12} md={6} className="mb-3">
                        <GetSelector
                            label='Tipo'
                            style={{ height: '70px' }}
                            value={form.ceyePSB}
                            name='ceyePSB'
                            tooltipDescrip='Tipo'
                            handleChange={handleChange}
                            options={SubrogadoOptions}
                            isRequired={true}
                            show={form.ceye == 'true' ? true : false}
                        />
                    </Col>

                    {/*RPBI*/}
                    <Col xs={12} md={6} className="mb-3">

                        <GetSelector
                            label='Manejo de Residuos Hospitalarios (RPBI)'
                            style={{ height: '70px' }}
                            value={form.rpbi}
                            name='rpbi'
                            tooltipDescrip='Manejo de Residuos Hospitalarios (RPBI)'
                            handleChange={handleChange}
                            options={YesOrNotOptions}
                            isRequired={true}
                            show={true}
                        />

                    </Col>

                    {/*Tipo*/}
                    <Col xs={12} md={6} className="mb-3">
                        <GetSelector
                            label='Tipo'
                            style={{ height: '70px' }}
                            value={form.rpbiPSB}
                            name='rpbiPSB'
                            tooltipDescrip='Tipo'
                            handleChange={handleChange}
                            options={SubrogadoOptions}
                            isRequired={true}
                            show={form.rpbi == 'true' ? true : false}
                        />
                    </Col>

                    {/*Servicio de Lavandería para Ropa Hospitalario*/}
                    <Col xs={12} md={6} className="mb-3">

                        <GetSelector
                            label='Servicio de Lavandería para Ropa Hospitalario'
                            style={{ height: '70px' }}
                            value={form.servicioLavanderia}
                            name='servicioLavanderia'
                            tooltipDescrip='Servicio de Lavandería para Ropa Hospitalario'
                            handleChange={handleChange}
                            options={YesOrNotOptions}
                            isRequired={true}
                            show={true}
                        />

                    </Col>

                    {/*Tipo*/}
                    <Col xs={12} md={6} className="mb-3">
                        <GetSelector
                            label='Tipo'
                            style={{ height: '70px' }}
                            value={form.servicioLavanderiaPSB}
                            name='servicioLavanderiaPSB'
                            tooltipDescrip='Tipo'
                            handleChange={handleChange}
                            options={SubrogadoOptions}
                            isRequired={true}
                            show={form.servicioLavanderia == 'true' ? true : false}
                        />
                    </Col>
                </Row>
            </Col>
        </Fragment>
    )
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


export default E;