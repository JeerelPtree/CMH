import React, { Fragment, useState, useEffect } from "react";
import { Container, Col, Row, FloatingLabel, Button, Form, OverlayTrigger, Tooltip, InputGroup } from "react-bootstrap";
import MultiSelect from "../selectors/MultiSelect";

//we import css
import "../../../globalStyles.css"

const currentYear = new Date().getFullYear();

function RHo() {

    //declared the variables, constants ans states for this module
    const [form, setForm] = useState({})
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

        console.log('entrando a hanldle change: ', e.target.name, e.target.value)
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

    return (
        <Fragment>
            <Container>
                <Row>
                    <Col xs={12} md={12}>
                        <Row>

                            <PerfilHospital form={form} handleChange={handleChange} />

                            <Caracteristicas form={form} handleChange={handleChange} dataMulti={dataMulti} handleMulti={handleMultiSelect} />

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


function PerfilHospital(props) {

    //we obtain the props for this component
    const form = props.form
    const handleChange = props.handleChange

    return (
        <Fragment>


            {/*Perfil del Hospital*/}
            <Col xs={12} md={12} className="mt-3">
                <Row>
                    <Col xs={12} md={12} className="mb-3">
                        <h4 className="text-center sub-title-cmh">Perfil del Hospital</h4>
                    </Col>
                    <Col xs={12} md={6}>

                        <GetInput
                            label="Razón Social"
                            value={form.razonSocial}
                            name="razonSocial"
                            handleChange={handleChange}
                            tooltipDescrip="Razón Social"
                            type="text"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />

                    </Col>

                    <Col xs={12} md={6}>

                        <GetInput
                            label="Nombre Comercial"
                            value={form.nombreComercial}
                            name="nombreComercial"
                            handleChange={handleChange}
                            tooltipDescrip="Nombre Comercial"
                            type="text"
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

function Caracteristicas(props) {

    //we obtain the props for this component
    const form = props.form
    const handleChange = props.handleChange
    const dataMulti = props.dataMulti
    const handleMulti = props.handleMulti

    return (
        <Fragment>
            {/*Características*/}
            <Col xs={12} md={12} className="mt-3">
                <Row>

                    {/*Titulo de la encuesta*/}
                    <Col xs={12} md={12} className="mt-3">
                        <h4 className="text-center sub-title-cmh">Características</h4>
                    </Col>

                    {/*Hospital asociado desde*/}
                    <Col xs={12} md={4} className="mt-3">

                        <GetInput
                            label="Hospital Asociado al CMH desde"
                            value={form.hospitalAsociadoCMHDesde}
                            name="hospitalAsociadoCMHDesde"
                            handleChange={handleChange}
                            tooltipDescrip="Hospital Asociado al CMH desde"
                            type="date"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />

                    </Col>

                    {/*Fecha de fundación*/}
                    <Col xs={12} md={4} className="mt-3">

                        <GetInput
                            label="Fecha de Fundación del Hospital"
                            value={form.fechaFundacionHospital}
                            name="fechaFundacionHospital"
                            handleChange={handleChange}
                            tooltipDescrip="Fecha de Fundación del Hospital"
                            type="date"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />

                    </Col>

                    {/*Área construida*/}
                    <Col xs={12} md={4} className="mt-3">

                        <GetInput
                            label="Área construida [m²]"
                            value={form.areaConstruida}
                            name="areaConstruida"
                            handleChange={handleChange}
                            tooltipDescrip="Área construida [m²]"
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />

                    </Col>

                    {/*Número de colaboradores*/}
                    <Col xs={12} md={4} className="mt-3">

                        <GetInput
                            label="Número de colaboradores"
                            value={form.numeroColaboradores}
                            name="numeroColaboradores"
                            handleChange={handleChange}
                            tooltipDescrip="Número de colaboradores"
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />

                    </Col>

                    {/*Número de camas de hospitalización*/}
                    <Col xs={12} md={4} className="mt-3">

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Nº de Camas de Hospitalización">
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-habitaciones">Nº de Camas de Hospitalización</Tooltip>
                                }>
                                <Form.Control
                                    type="number"
                                    placeholder="Nº de Camas de Hospitalización"
                                    value={form.numeroCamasHospitalizacion ? form.numeroCamasHospitalizacion : ''}
                                    name="numeroCamasHospitalizacion"
                                    onChange={handleChange}
                                    autoComplete="off"
                                    min={0} />
                            </OverlayTrigger>
                        </FloatingLabel>

                    </Col>

                    {/*Número de camas UCIA*/}
                    <Col xs={12} md={4} className="mt-3">

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Nº Camas UCIA">
                            <OverlayTrigger
                                placement="bottom"
                                overlay={
                                    <Tooltip id="tooltip-UCIA">Tooltip para UCIA</Tooltip>
                                }>
                                <Form.Control
                                    type="number"
                                    placeholder="Nº Camas UCIA"
                                    value={form.numeroCamasUCIA ? form.numeroCamasUCIA : ''}
                                    name="numeroCamasUCIA"
                                    onChange={handleChange}
                                    autoComplete="off"
                                    min={0} />
                            </OverlayTrigger>
                        </FloatingLabel>

                    </Col>

                    {/*Número de camas UCIN*/}
                    <Col xs={12} md={4} className="mt-3">

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Nº Camas UCIN">
                            <OverlayTrigger
                                placement="bottom"
                                overlay={
                                    <Tooltip id="tooltip-UCIA">Tooltip para UCIN</Tooltip>
                                }>
                                <Form.Control
                                    type="number"
                                    placeholder="Nº Camas UCIN"
                                    value={form.numeroCamasUCIN ? form.numeroCamasUCIN : ''}
                                    name="numeroCamasUCIN"
                                    onChange={handleChange}
                                    autoComplete="off"
                                    min={0} />
                            </OverlayTrigger>
                        </FloatingLabel>

                    </Col>

                    {/*Número de salas de cirugía*/}
                    <Col xs={12} md={4} className="mt-3">

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Nº Salas de Cirugía">
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-habitaciones">Nº Salas de Cirugía</Tooltip>
                                }>
                                <Form.Control
                                    type="number"
                                    placeholder="Nº Salas de Cirugía"
                                    value={form.numeroSalasCirugia ? form.numeroSalasCirugia : ''}
                                    name="numeroSalasCirugia"
                                    onChange={handleChange}
                                    autoComplete="off"
                                    min={0} />
                            </OverlayTrigger>
                        </FloatingLabel>

                    </Col>

                    {/*Número de médicos credencializados*/}
                    <Col xs={12} md={4} className="mt-3">

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Número de Médicos credencializados">
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-habitaciones">Número de Médicos credencializados</Tooltip>
                                }>
                                <Form.Control
                                    type="number"
                                    placeholder="Número de Médicos credencializados"
                                    value={form.numeroMedicosCredencializados ? form.numeroMedicosCredencializados : ''}
                                    name="numeroMedicosCredencializados"
                                    onChange={handleChange}
                                    autoComplete="off"
                                    min={0} />
                            </OverlayTrigger>
                        </FloatingLabel>

                    </Col>

                    {/*Nivel de atención hospitalaria*/}
                    <Col xs={12} md={6} className="mt-3">

                        <span>
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-habitaciones">Nivel de Atención Hospitalaria:</Tooltip>
                                }>
                                <FloatingLabel controlId="floatingSelect" label="Nivel de Atención Hospitalaria">
                                    <Form.Select aria-label="Floating label" value={form.nivelAtencionHospitalaria ? form.nivelAtencionHospitalaria : ''} onChange={handleChange} name="nivelAtencionHospitalaria"
                                        style={{ height: '70px' }}>
                                        <option value="" disabled>Seleccione el nivel de atención hospitalaria</option>
                                        <option value="Hospital General">Hospital General</option>
                                        <option value="Hospital Especializado">Hospital Especializado</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </OverlayTrigger>

                        </span>

                    </Col>

                    {/*Servicios de habilitados*/}
                    <Col xs={12} md={6} className="mt-3">

                        <Form.Group controlId="formFileMultiple" className="mb-3">
                            <Form.Label>Servicios habilitados en su Hospital:</Form.Label>
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-habitaciones">Servicios habilitados en su Hospital:</Tooltip>
                                }>
                                <Form.Control
                                    placeholder="Ningún archivo seleccionado"
                                    type="file"
                                    value={form.serviciosHabilitadosHospital ? form.serviciosHabilitadosHospital : ''}
                                    name="serviciosHabilitadosHospital"
                                    onChange={handleChange}
                                    multiple />
                            </OverlayTrigger>
                        </Form.Group>

                    </Col>

                    {/*Acreditaciones hospitalarias*/}
                    <Col xs={12} md={12} className="mt-3">

                        <span>
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-habitaciones">Acreditación(es) Hospitalaria(s):</Tooltip>
                                }>
                                <Form.Group className="mb-3">
                                    <Form.Label>Acreditación(es) Hospitalaria(s):</Form.Label>
                                    <MultiSelect
                                        options={dataMulti} form={form}
                                        valueName={"acreditacionesHospitalarias"}
                                        handleChange={handleMulti}
                                        controlId="formHospitalCertifications" />
                                </Form.Group>

                            </OverlayTrigger>
                        </span>

                    </Col>

                    {/*Reseña del hospital*/}
                    <Col xs={12} md={6} className="mt-3">

                        <FloatingLabel
                            controlId="floatingTextarea"
                            label="Reseña de Hospital">
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-habitaciones">Reseña de Hospital</Tooltip>
                                }>
                                <Form.Control
                                    as="textarea"
                                    placeholder="Reseña de Hospital"
                                    value={form.reseniaHospital ? form.reseniaHospital : ""}
                                    name="reseniaHospital"
                                    style={{ height: '100px' }}
                                    onChange={handleChange}
                                    autoComplete="off" />
                            </OverlayTrigger>
                        </FloatingLabel>

                    </Col>

                    {/*Lo destacado en el año*/}
                    <Col xs={12} md={6} className="mt-3">

                        <FloatingLabel
                            controlId="floatingTextarea"
                            label={`Lo Destacado del Hospital en el año ${currentYear}`}>
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-habitaciones">Lo Destacado del Hospital en el año {currentYear}</Tooltip>
                                }>
                                <Form.Control
                                    as="textarea"
                                    placeholder="Lo Destacado del Hospital en el año 2019"
                                    value={form.highlights ? form.highlights : ""}
                                    name="highlights"
                                    style={{ height: '100px' }}
                                    onChange={handleChange}
                                    autoComplete="off" />
                            </OverlayTrigger>
                        </FloatingLabel>

                    </Col>

                </Row>
            </Col>
        </Fragment>
    )
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

export default RHo;