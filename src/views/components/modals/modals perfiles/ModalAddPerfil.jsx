import React, { Fragment } from "react";
import { Container, Row, Col, Modal, Button, Form, OverlayTrigger, Tooltip, FloatingLabel } from "react-bootstrap";
import ROLES from "./json/rol.json"

import HOSPITALS from "./json/hospitales.json"

function ModalAddPerfil(props) {

    const { form, handleChangeForm } = props


    return (
        <Container>
            <Row>
                <Col xs={12} md={12}>

                    <Row>

                        {/* PRIMER NOMBRE */}
                        <Col xs={12} md={6} className="mt-3">
                            <GetInputText
                                label="Primer Nombre"
                                value={form.firstName}
                                name="firstName"
                                handleChange={handleChangeForm}
                                isRequired={true}
                                inputType="text"
                            />
                        </Col>

                        {/* SEGUNDO NOMBRE */}
                        <Col xs={12} md={6} className="mt-3">
                            <GetInputText
                                label="Segundo Nombre"
                                value={form.middleName}
                                name="middleName"
                                handleChange={handleChangeForm}
                                isRequired={false}
                                inputType="text"
                            />
                        </Col>

                        {/* PRIMER APELLIDO */}
                        <Col xs={12} md={6} className="mt-3">
                            <GetInputText
                                label="Primer Apellido"
                                value={form.lastName}
                                name="lastName"
                                handleChange={handleChangeForm}
                                isRequired={true}
                                inputType="text"
                            />
                        </Col>

                        {/* SEGUNDO APELLIDO */}
                        <Col xs={12} md={6} className="mt-3">
                            <GetInputText
                                label="Segundo Apellido"
                                value={form.lastNameM}
                                name="lastNameM"
                                handleChange={handleChangeForm}
                                isRequired={false}
                                inputType="text"
                            />
                        </Col>

                        {/* CORREO */}
                        <Col xs={12} md={6} className="mt-3">
                            <GetInputText
                                label="Correo Electrónico"
                                value={form.email}
                                name="email"
                                handleChange={handleChangeForm}
                                isRequired={true}
                                inputType="email"
                            />
                        </Col>

                        {/* ROL */}
                        <Col xs={12} md={6} className="mt-3">
                            <GetSelect
                                tooltipLabel="Seleccione un rol para este perfil"
                                label="Tipo de perfil"
                                value={form.rol}
                                handleChangeForm={handleChangeForm}
                                name="rol"
                            />
                        </Col>

                        <Row className="justify-content-center">
                            {/* ROL */}
                            <Col xs={12} md={6} className="mt-3">
                                <GetSelect
                                    tooltipLabel="Seleccione el hospital al que pertenece"
                                    label="Hospital procedencia"
                                    value={form.hospital}
                                    handleChangeForm={handleChangeForm}
                                    name="hospital"
                                />
                            </Col>
                        </Row>

                    </Row>

                </Col>
            </Row>
        </Container>
    )
}

function GetInputText(props) {

    const { label, value, name, handleChange, isRequired, inputType } = props;

    return (
        <Fragment>

            <span>
                <OverlayTrigger
                    placement="top"
                    overlay={
                        <Tooltip id="tooltip-rinion">{label}</Tooltip>
                    }>
                    <FloatingLabel
                        controlId="floatingInput"
                        label={label}
                    >
                        <Form.Control
                            type={inputType}
                            placeholder={label}
                            required={isRequired}
                            value={value ? value : ""}
                            onChange={handleChange}
                            name={name}
                            autoComplete="off"
                        />
                    </FloatingLabel>
                </OverlayTrigger>
            </span>

        </Fragment>
    )
}

function GetSelect(props) {

    const { tooltipLabel, label, value, handleChangeForm, name } = props

    const menuSelect = () => {

        switch (name) {

            case "rol":
                return (
                    ROLES.map((rol, index) => {
                        return (
                            <Fragment key={index}>
                                <option value={rol.value}>{rol.name}</option>
                            </Fragment>
                        )
                    })
                )
                break;

            case "hospital":
                return (
                    HOSPITALS.map((hospital) => {
                        return (
                            <Fragment key={hospital.id}>
                                <option value={hospital.name}>{hospital.name}</option>
                            </Fragment>
                        )
                    })
                )
                break;

        }

    }

    return (
        <Fragment>
            <span>
                <OverlayTrigger
                    placement="top"
                    overlay={
                        <Tooltip id="tooltip-rinion">{tooltipLabel}</Tooltip>
                    }>
                    <FloatingLabel controlId="floatingSelect" label={label}>
                        <Form.Select aria-label="Floating label"
                            value={value ? value : ''}
                            onChange={handleChangeForm}
                            required={true}
                            name={name}>
                            <option value="" disabled>Seleccione una opción</option>
                            {
                                menuSelect()
                            }
                        </Form.Select>
                    </FloatingLabel>
                </OverlayTrigger>
            </span>
        </Fragment>
    )
}

export default ModalAddPerfil;