import React, { Fragment } from "react";
import { Container, Col, Row, FloatingLabel, Form, OverlayTrigger, Tooltip } from "react-bootstrap";

import PROPIETARIOSOPTIONS from "../../json/rho.json"
import HOSPITALES from "../../json/hospitales.json"

//we import css
import "../../../globalStyles.css"

const currentYear = new Date().getFullYear();

function RHo(props) {

    //declared the variables, constants ans states for this module
    const { form, setForm } = props;
    //const [form, setForm] = useState({})


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

                            <Caracteristicas form={form} handleChange={handleChange} />

                            <PropiedadHospital form={form} handleChange={handleChange} />

                            <CargaImagenes form={form} handleChange={handleChange} />

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

    //DEMO
    // Retorna un entero aleatorio entre min (incluido) y max (excluido)
    // ¡Usando Math.round() te dará una distribución no-uniforme!
    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    const randomHospitalId = getRandomInt(2201, 2252)
    const randomHospital = HOSPITALES.filter(hospital => parseInt(hospital.id) === randomHospitalId)
    form.razonSocial = randomHospital[0].hospital;
    form.nombreComercial = randomHospital[0].hospital;
    //FIN DEMO

    return (
        <Fragment>


            {/*Perfil del Hospital*/}
            <Col xs={12} md={12} className="mt-3">
                <Row>
                    <Col xs={12} md={12} className="mb-3">
                        <h4 className="text-center sub-title-cmh">Perfil del Hospital</h4>
                    </Col>
                    <Col xs={12} md={6} className="mb-3">

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
                            isReadOnly={true}
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
                            isReadOnly={true}
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

    //DEMO
    form.fechaFundacionHospital = "1978-02-21"
    form.hospitalAsociadoCMHDesde = "2005-08-20"
    //FIN DEMO

    return (
        <Fragment>
            {/*Características*/}
            <Col xs={12} md={12} className="mt-3">
                <Row>

                    {/*Titulo de la encuesta*/}
                    <Col xs={12} md={12} className="mt-3">
                        <h4 className="text-center sub-title-cmh">Características</h4>
                    </Col>

                    <Row className="justify-content-center">

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
                                isReadOnly={true}
                            />

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
                                isReadOnly={true}
                            />

                        </Col>
                    </Row>

                    {/*Observaciones*/}
                    <Col xs={12} md={12} className="mt-3">

                        <GetInput
                            label="Observaciones"
                            value={form.observaciones}
                            name="observaciones"
                            handleChange={handleChange}
                            tooltipDescrip="Escriba sus observaciones"
                            type="text"
                            isTextArea={true}
                            style={{ height: '100px' }}
                            min={0}
                            isRequired={false}
                            placement="top"
                            show={true}
                        />

                    </Col>

                </Row>
            </Col>
        </Fragment>
    )
}

function PropiedadHospital(props) {

    const { form, handleChange } = props

    //DEMO
    // Retorna un entero aleatorio entre min (incluido) y max (excluido)
    // ¡Usando Math.round() te dará una distribución no-uniforme!
    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    const randomPropietarioHospitalId = getRandomInt(1, 6)
    const randomOropietarioHospital = PROPIETARIOSOPTIONS.filter(propietario => parseInt(propietario.id) === randomPropietarioHospitalId)
    form.propietarioHospital = randomOropietarioHospital[0].name
    //FIN DEMO

    return (
        <Fragment>

            {/*Propietario del Hospital*/}
            <Col xs={12} md={12} className="mt-3">
                <Row>
                    <Col xs={12} md={12} className="mb-3">
                        <h4 className="text-center sub-title-cmh">Propietario del Hospital</h4>
                    </Col>

                    {/*select*/}
                    <Col xs={12} md={6} className="mt-3">
                        <GetSelector
                            label="El Hospital es propiedad de:"
                            value={form.propietarioHospital}
                            tooltipDescrip={`El Hospital es propiedad de: ${form.propietarioHospital ? form.propietarioHospital : ''}`}
                            name="propietarioHospital"
                            handleChange={handleChange}
                            options={PROPIETARIOSOPTIONS}
                            show={true}

                        />
                    </Col>

                    {/*OTRO*/}
                    <Col xs={12} md={6} className="mt-3">
                        <GetInput
                            label="Otro ¿Cuál?, Especifique"
                            value={form.otro}
                            name="otro"
                            handleChange={handleChange}
                            tooltipDescrip="Especifique si el hospital no corresponde a la opción anteriormente señalada"
                            type="text"
                            min={0}
                            isRequired={false}
                            placement="top"
                            show={true}
                            isReadOnly={false}
                        />
                    </Col>
                </Row>
            </Col>

        </Fragment>
    )

}

function CargaImagenes(props) {

    const { form, handleChange } = props

    return (
        <Fragment>

            {/*Carga de Imagenes para la encuesta*/}
            <Col xs={12} md={12} className="mt-3">
                <Row>
                    <Col xs={12} md={12} className="mb-3">
                        <h4 className="text-center sub-title-cmh">Carga de Archivos</h4>
                    </Col>

                    {/*Logo*/}
                    <Col xs={12} md={6} className="mt-3">

                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Logo:</Form.Label>
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-habitaciones">Subir el logo del Hospital (el formato debe del archivo debe de ser mayor o igual a 1000px de ancho)</Tooltip>
                                }>
                                <Form.Control
                                    placeholder="Ningún archivo seleccionado"
                                    type="file"
                                    value={form.logoHospital ? form.logoHospital : ''}
                                    name="logoHospital"
                                    onChange={handleChange}
                                    required={true} />
                            </OverlayTrigger>
                        </Form.Group>

                    </Col>

                    {/*Fachada principal del Hospital*/}
                    <Col xs={12} md={6} className="mt-3">

                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Fachada principal del Hospital:</Form.Label>
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-habitaciones">Subir la fachada principal del Hospital (el formato debe del archivo debe de ser mayor o igual a 1000px de ancho)</Tooltip>
                                }>
                                <Form.Control
                                    placeholder="Ningún archivo seleccionado"
                                    type="file"
                                    value={form.fachadaPrincipalHospital ? form.fachadaPrincipalHospital : ''}
                                    name="fachadaPrincipalHospital"
                                    onChange={handleChange}
                                    required={true} />
                            </OverlayTrigger>
                        </Form.Group>

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
                            disabled={true}
                        >
                            <option value="" disabled>Seleccione una opción</option>
                            {
                                options.map((option) => {
                                    return (
                                        <Fragment key={option.id}>
                                            <option value={option.name}>{option.name}</option>
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