import React, { Fragment, useState, useEffect } from "react";
import { Container, Col, Row, FloatingLabel, Button, Form, OverlayTrigger, Tooltip, InputGroup } from "react-bootstrap";
import MultiSelect from "../selectors/MultiSelect";
import HospitalOptions from "./json/RHo/hospitalOptions.json";

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

                            <Caracteristicas form={form} handleChange={handleChange} dataMulti={dataMulti} handleMulti={handleMultiSelect} hospitalOptions={HospitalOptions} />

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
    const HospitalOptions = props.hospitalOptions

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

                        <GetInput
                            label="Nº de Camas de Hospitalización"
                            value={form.numeroCamasHospitalizacion}
                            name="numeroCamasHospitalizacion"
                            handleChange={handleChange}
                            tooltipDescrip="Nº de Camas de Hospitalización"
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />

                    </Col>

                    {/*Número de camas UCIA*/}
                    <Col xs={12} md={4} className="mt-3">

                        <GetInput
                            label="Nº de Camas UCIA"
                            value={form.numeroCamasUCIA}
                            name="numeroCamasUCIA"
                            handleChange={handleChange}
                            tooltipDescrip="Nº de Camas de Unidad de Cuidados Intensivos Adultos"
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />

                    </Col>

                    {/*Número de camas UCIN*/}
                    <Col xs={12} md={4} className="mt-3">

                        <GetInput
                            label="Nº Camas UCIN"
                            value={form.numeroCamasUCIN}
                            name="numeroCamasUCIN"
                            handleChange={handleChange}
                            tooltipDescrip="Nº Camas Unidad de Cuidados Intensivos Neonatales"
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />

                    </Col>

                    {/*Número de salas de cirugía*/}
                    <Col xs={12} md={4} className="mt-3">

                        <GetInput
                            label="Nº Salas de Cirugía"
                            value={form.numeroSalasCirugia}
                            name="numeroSalasCirugia"
                            handleChange={handleChange}
                            tooltipDescrip="Nº Salas de Cirugía"
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />

                    </Col>

                    {/*Número de médicos credencializados*/}
                    <Col xs={12} md={4} className="mt-3">

                        <GetInput
                            label="Número de Médicos credencializados"
                            value={form.numeroMedicosCredencializados}
                            name="numeroMedicosCredencializados"
                            handleChange={handleChange}
                            tooltipDescrip="Número de Médicos credencializados"
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />

                    </Col>

                    {/*Nivel de atención hospitalaria*/}
                    <Col xs={12} md={6} className="mt-3">

                        <GetSelector
                            label='Nivel de Atención Hospitalaria'
                            style={{ height: '70px' }}
                            value={form.nivelAtencionHospitalaria}
                            tooltipDescrip='Nivel de Atención Hospitalaria:'
                            name='nivelAtencionHospitalaria'
                            handleChange={handleChange}
                            options={HospitalOptions}
                            isRequired={true}
                            show={true}
                        />

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

                        <GetInput
                            label="Reseña de Hospital"
                            value={form.reseniaHospital}
                            name="reseniaHospital"
                            handleChange={handleChange}
                            tooltipDescrip="Reseña de Hospital"
                            type="text"
                            isTextArea={true}
                            style={{ height: '100px' }}
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />

                    </Col>

                    {/*Lo destacado en el año*/}
                    <Col xs={12} md={6} className="mt-3">

                        <GetInput
                            label={`Lo Destacado del Hospital en el año ${currentYear}`}
                            value={form.highlights}
                            name="highlights"
                            handleChange={handleChange}
                            tooltipDescrip={`Lo Destacado del Hospital en el año ${currentYear}`}
                            type="text"
                            isTextArea={true}
                            style={{ height: '100px' }}
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

export default RHo;