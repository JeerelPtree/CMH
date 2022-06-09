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

                        <GetInputFormat
                            label="Personal Capacitado"
                            value={form.personalCapacitado}
                            name="personalCapacitado"
                            handleChange={handleChange}
                            tooltipDescrip="Porcentaje de Personal Capacitado en el 2017 en su Hospital"
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={form.capacitacionAnual === 'true' ? true : false}
                            isRight={true}
                            rightSymbol="%"
                        />

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

                        <GetInputFormat
                            label="Capacitados CMH"
                            value={form.personalCapacitadoCMH}
                            name="personalCapacitadoCMH"
                            handleChange={handleChange}
                            tooltipDescrip="Porcentaje de Personal Capacitado en los Programas del CMH"
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={form.capacitacionAnual === 'true' ? true : false}
                            isRight={true}
                            rightSymbol="%"
                        />


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

                        <GetInput
                            label="Estudios producidos anualmente"
                            value={form.estudiosArticulosAnuales}
                            name="estudiosArticulosAnuales"
                            handleChange={handleChange}
                            tooltipDescrip="Indique el número de estudios o artículos que produce anualmente"
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={form.centroInvestigacion === 'true' ? true : false}
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

export default CAP;