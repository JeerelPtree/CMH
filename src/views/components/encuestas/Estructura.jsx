import React, { Fragment, useState, useEffect } from "react";
import { Container, Col, Row, FloatingLabel, Form, OverlayTrigger, Tooltip, InputGroup } from "react-bootstrap";
import YesOrNotOptions from "./json/yesOrNotOptionsTrueOrFalse.json"
import SubrogadoOptions from "../../json/propiaSubrogadoPropioSubrogadoExterno.json"

//we import css
import "../../../globalStyles.css"

const currentYear = new Date().getFullYear();

function Estructura({ form, setForm }) {

    //declared the variables, constants ans states for this module
    //const [form, setForm] = useState({ organos: [] })

    //module's functions
    const handleChange = async (e, childId) => {

        e.persist();
        //let child = childId != null ? document.getElementById(childId) : null;
        //console.log("Selector hijo:", child)
        console.log("Formulario", form)


        if (childId != null)
            await setForm(
                {
                    ...form,
                    [e.target.name]: e.target.value,
                    [childId]: null
                }
            );
        else
            await setForm({
                ...form,
                [e.target.name]: e.target.value,
            });

        /* child && await setForm({
            ...form,
            [childId]: ""
        }); */



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

                    <Col xs={12} md={12}>
                        <Row className="justify-content-center">

                            {/*Servicio de Nutrición y Dietética (Alimentación) en Internamiento*/}
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
                                childId='alimentacionInternamientoPSB'
                            />

                            {/*Tipo*/}
                            <GetSelector
                                id='alimentacionInternamientoPSB'
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

                        </Row>
                    </Col>

                    <Col xs={12} md={12}>
                        <Row className="justify-content-center">

                            {/*Restaurante/cafetería al público*/}
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
                                childId='restauranteCafeteriaPSB'
                            />

                            {/*Tipo*/}
                            <GetSelector
                                id='restauranteCafeteriaPSB'
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
                        </Row>
                    </Col>

                    <Col xs={12} md={12}>
                        <Row className="justify-content-center">

                            {/*Descanso de médicos*/}
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
                                childId='descansoMedicosPSB'
                            />

                            {/*Tipo*/}
                            <GetSelector
                                id='descansoMedicosPSB'
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
                        </Row>
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

                    <Col xs={12} md={12}>
                        <Row className="justify-content-center">

                            {/*Aseo/Intendencia*/}

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
                                childId='aseoIntendenciaPSB'
                            />


                            {/*Tipo*/}
                            <GetSelector
                                id='aseoIntendenciaPSB'
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
                        </Row>
                    </Col>

                    <Col xs={12} md={12}>
                        <Row className="justify-content-center">

                            {/*Vigilancia y Seguridad*/}

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
                                childId='vigilanciaSeguridadPSB'
                            />


                            {/*Tipo*/}
                            <GetSelector
                                id='vigilanciaSeguridadPSB'
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
                        </Row>
                    </Col>

                    <Col xs={12} md={12}>
                        <Row className="justify-content-center">

                            {/*Mantenimiento de la Infraestructura Física*/}

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
                                childId='mantenimientoInfraestructuraFisicaPSB'
                            />


                            {/*Tipo*/}
                            <GetSelector
                                id='mantenimientoInfraestructuraFisicaPSB'
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

                        </Row>
                    </Col>

                    <Col xs={12} md={12}>
                        <Row className="justify-content-center">

                            {/*Mantenimiento de Equipos Médicos (Biomédica)*/}


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
                                childId='mantenimientoEquipoMedicoPSB'
                            />


                            {/*Tipo*/}
                            <GetSelector
                                id='mantenimientoEquipoMedicoPSB'
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
                        </Row>
                    </Col>

                    <Col xs={12} md={12}>
                        <Row className="justify-content-center">

                            {/*CEYE*/}

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
                                childId='ceyePSB'
                            />


                            {/*Tipo*/}
                            <GetSelector
                                id='ceyePSB'
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
                        </Row>
                    </Col>

                    <Col xs={12} md={12}>
                        <Row className="justify-content-center">

                            {/*RPBI*/}

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
                                childId='rpbiPSB'
                            />


                            {/*Tipo*/}
                            <GetSelector
                                id='rpbiPSB'
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
                        </Row>
                    </Col>

                    <Col xs={12} md={12}>
                        <Row className="justify-content-center">

                            {/*Servicio de Lavandería para Ropa Hospitalario*/}

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
                                childId='servicioLavanderiaPSB'
                            />


                            {/*Tipo*/}
                            <GetSelector
                                id='servicioLavanderiaPSB'
                                xs={12}
                                md={6}
                                containerClass="mb-3"
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
                        </Row>
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
    const { label, style = null, value, tooltipDescrip, name, handleChange, options, isRequired, show, xs = 12, md = 6, containerClass = "mb-3", childId = null, id = null } = props;

    /* const [flag, setFlag] = useState({ id: id, show: show });

    console.log("ID:", flag) */

    if (show == true) {
        return (
            <Fragment>
                <Col xs={xs} md={md} className={containerClass}>
                    <OverlayTrigger
                        placement="top"
                        overlay={
                            <Tooltip id={`tooltip-${name}`}>{tooltipDescrip}</Tooltip>
                        }>
                        <FloatingLabel controlId={id} label={label}>
                            <Form.Select
                                aria-label="Floating label"
                                value={value ? value : ''}
                                onChange={(e) => handleChange(e, childId)}
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
                </Col>
            </Fragment>
        )
    } else {

        /* id && clearSelector(id); */
        return null;
    }
}

/* function clearSelector(id) {
    console.log("ID:", id)
    let selector = document.getElementById(id)
    selector && (selector.options.selectedIndex = 0);
    selector && console.log("Valor", selector.value, "Indice elegido", selector.options.selectedIndex);
} */


export default Estructura;