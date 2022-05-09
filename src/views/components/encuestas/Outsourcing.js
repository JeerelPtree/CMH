import React, { Fragment, useState, useEffect } from "react";
import { Container, Col, Row, FloatingLabel, Button, Form, OverlayTrigger, Tooltip, Alert } from "react-bootstrap";
import OPTIONS from "./json/outsourcingOptions.json"

//we import css
import "../../../globalStyles.css"

//TODO: PONER LOS TOOLTIPS EN ESTA SECC


function Outsourcing() {

    //declared the variables, constants ans states for this module
    const [form, setForm] = useState({})



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

    const prueba = () => {
        console.log(form)
        console.log(Object.keys(form).length)
    }

    return (
        <Fragment>
            <Container>
                <Row>
                    <Col xs={12} md={12}>
                        <Row>

                            <AreasAsistenciales form={form} handleChange={handleChange} />
                            <AreasApoyo form={form} handleChange={handleChange} />
                            <Administrativas form={form} handleChange={handleChange} />
                            <Otros form={form} handleChange={handleChange} />

                            <Button variant="primary" onClick={prueba}>
                            </Button>

                        </Row>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )


}

function AreasAsistenciales(props) {

    //we obtain the props for this component
    const form = props.form
    const handleChange = props.handleChange

    return (
        <Fragment>

            {/*Areas Asistenciales*/}
            <Col xs={12} md={12} className="mt-3">
                <Row>

                    <Col xs={12} md={12} className="mb-2">
                        <h4 className="text-center sub-title-cmh">Áreas Asistenciales</h4>
                    </Col>

                    <RadiologiaImagen form={form} handleChange={handleChange} />
                    <Laboratorio form={form} handleChange={handleChange} />
                    <AreasApoyoClinico form={form} handleChange={handleChange} />

                </Row>
            </Col>

        </Fragment>
    )

}

function RadiologiaImagen(props) {

    //we obtain their props
    const form = props.form;
    const handleChange = props.handleChange;

    return (
        <Fragment>

            <Col xs={12} md={12} className="mb-1">
                <h5 className="text-center title-cmh">Radiología e Imagen</h5>
            </Col>

            <Col xs={12} md={4} className="mb-3">

                <GetSelect
                    label="Radiología simple"
                    value={form.radiologiaSimple}
                    name="radiologiaSimple"
                    handleChange={handleChange}
                />

            </Col>

            <Col xs={12} md={4} className="mb-3">

                <GetSelect
                    label="Radiología contrastada"
                    value={form.radiologiaContrastada}
                    name="radiologiaContrastada"
                    handleChange={handleChange}
                />

            </Col>

            <Col xs={12} md={4} className="mb-3">

                <GetSelect
                    label="Tomografía"
                    value={form.tomografia}
                    name="tomografia"
                    handleChange={handleChange}
                />

            </Col>

            <Col xs={12} md={4} className="mb-3">

                <GetSelect
                    label="Ultrasonografía Diagnóstica (Ecografías)"
                    value={form.ultrasonografiaDiagnosticaEcografias}
                    name="ultrasonografiaDiagnosticaEcografias"
                    handleChange={handleChange}
                />

            </Col>

            <Col xs={12} md={4} className="mb-3">

                <GetSelect
                    label="Estudios Vasculares No Invasivos"
                    value={form.estudiosVascularesNoInvasivos}
                    name="estudiosVascularesNoInvasivos"
                    handleChange={handleChange}
                />

            </Col>

            <Col xs={12} md={4} className="mb-3">

                <GetSelect
                    label="Resonancia Magnética"
                    value={form.resonanciaMagnetica}
                    name="resonanciaMagnetica"
                    handleChange={handleChange}
                />

            </Col>

            <Col xs={12} md={4} className="mb-3">

                <GetSelect
                    label="Gammagrafía y Estudios Isotópicos"
                    value={form.gammagrafiaEstudiosIsotopicos}
                    name="gammagrafiaEstudiosIsotopicos"
                    handleChange={handleChange}
                />

            </Col>

            <Col xs={12} md={4} className="mb-3">

                <GetSelect
                    label="Mastógrafo"
                    value={form.mastografo}
                    name="mastografo"
                    handleChange={handleChange}
                />

            </Col>

            <Col xs={12} md={4} className="mb-3">

                <GetSelect
                    label="Densitómetro"
                    value={form.densitometro}
                    name="densitometro"
                    handleChange={handleChange}
                />

            </Col>

            <Col xs={12} md={12}>


                <Row className="justify-content-center">
                    <Col xs={12} md={5}>

                        <GetSelect
                            label="PET (Tomografía por Emisión de Positrones)"
                            value={form.pet}
                            name="pet"
                            handleChange={handleChange}
                        />

                    </Col>
                </Row>


            </Col>

        </Fragment>
    )

}

function Laboratorio(props) {

    //we obtain their props
    const form = props.form;
    const handleChange = props.handleChange;

    return (
        <Fragment>

            <Col xs={12} md={12} className="mb-1 mt-3">
                <h5 className="text-center title-cmh">Laboratorio</h5>
            </Col>

            <Col xs={12} md={3} className="mb-3">

                <GetSelect
                    label="Laboratorio Clínico"
                    value={form.laboratorioClinico}
                    name="laboratorioClinico"
                    handleChange={handleChange}
                />

            </Col>

            <Col xs={12} md={4}>

                <GetSelect
                    label="Laboratorio de Anatomía Patológica"
                    value={form.laboratorioAnatomiaPatologica}
                    name="laboratorioAnatomiaPatologica"
                    handleChange={handleChange}
                />

            </Col>

            <Col xs={12} md={5} className="mb-3">

                <GetSelect
                    label="Banco de Sangre y Servicio de Transfusión"
                    value={form.bancoSangreServicioTransfusion}
                    name="bancoSangreServicioTransfusion"
                    handleChange={handleChange}
                />

            </Col>


        </Fragment>
    )

}

function AreasApoyoClinico(props) {

    //we obtain their props
    const form = props.form;
    const handleChange = props.handleChange;

    return (
        <Fragment>

            <Col xs={12} md={12} className="mb-1 mt-3">
                <h5 className="text-center title-cmh">Areas de Apoyo Clínico</h5>
            </Col>

            <Col xs={12} md={4} className="mb-3">

                <GetSelect
                    label="Hemodinamia"
                    value={form.hemodinamia}
                    name="hemodinamia"
                    handleChange={handleChange}
                />

            </Col>

            <Col xs={12} md={4} className="mb-3">

                <GetSelect
                    label="Hemodiálisis"
                    value={form.hemodialisis}
                    name="hemodialisis"
                    handleChange={handleChange}
                />

            </Col>

            <Col xs={12} md={4} className="mb-3">

                <GetSelect
                    label="Diálisis Peritoneal"
                    value={form.dialisisPeritoneal}
                    name="dialisisPeritoneal"
                    handleChange={handleChange}
                />

            </Col>

            <Col xs={12} md={4} className="mb-3">

                <GetSelect
                    label="Quimioterapia"
                    value={form.quimioterapia}
                    name="quimioterapia"
                    handleChange={handleChange}
                />

            </Col>

            <Col xs={12} md={4} className="mb-3">

                <GetSelect
                    label="Inmunoterapia de corta estancia"
                    value={form.inmunoterapiaCortaEstancia}
                    name="inmunoterapiaCortaEstancia"
                    handleChange={handleChange}
                />

            </Col>

            <Col xs={12} md={4} className="mb-3">

                <GetSelect
                    label="Radioterapia"
                    value={form.radioterapia}
                    name="radioterapia"
                    handleChange={handleChange}
                />

            </Col>

            <Col xs={12} md={4} className="mb-3">

                <GetSelect
                    label="Endoscopía"
                    value={form.endoscopia}
                    name="endoscopia"
                    handleChange={handleChange}
                />

            </Col>

            <Col xs={12} md={4} className="mb-3">

                <GetSelect
                    label="Laparoscopía"
                    value={form.laparoscopia}
                    name="laparoscopia"
                    handleChange={handleChange}
                />

            </Col>

            <Col xs={12} md={4} className="mb-3">

                <GetSelect
                    label="Inhaloterapia"
                    value={form.inhaloterapia}
                    name="inhaloterapia"
                    handleChange={handleChange}
                />

            </Col>

            <Col xs={12} md={12} >

                <Row className="justify-content-center">
                    <Col xs={12} md={4}>

                        <GetSelect
                            label="Rehabilitación Física y Fisiatría"
                            value={form.rehabilitacionFisicaFisiatria}
                            name="rehabilitacionFisicaFisiatria"
                            handleChange={handleChange}
                        />

                    </Col>
                </Row>

            </Col>

        </Fragment>
    )

}

function AreasApoyo(props) {

    //we obtain the props for this component
    const form = props.form
    const handleChange = props.handleChange

    return (
        <Fragment>

            {/*Areas de Apoyo*/}
            <Col xs={12} md={12} className="mt-3">
                <Row>

                    <Col xs={12} md={12} className="mb-2">
                        <h4 className="text-center sub-title-cmh">Áreas de Apoyo</h4>
                    </Col>

                    <Alimentacion form={form} handleChange={handleChange} />
                    <ServiciosGenerales form={form} handleChange={handleChange} />

                </Row>
            </Col>

        </Fragment>
    )

}

function Alimentacion(props) {

    //we obtain their props
    const form = props.form;
    const handleChange = props.handleChange;

    return (
        <Fragment>

            <Col xs={12} md={12} className="mb-1">
                <h5 className="text-center title-cmh">Alimentación</h5>
            </Col>

            <Col xs={12} md={3} className="mb-3">

                <GetSelect
                    label="Restaurante"
                    value={form.restaurante}
                    name="restaurante"
                    handleChange={handleChange}
                />

            </Col>

            <Col xs={12} md={3} className="mb-3">

                <GetSelect
                    label="Cafetería"
                    value={form.cafeteria}
                    name="cafeteria"
                    handleChange={handleChange}
                />

            </Col>

            <Col xs={12} md={6} className="mb-3">

                <GetSelect
                    label="Servicio de Nutrición y Dietética (Alimentación) en Internamiento"
                    value={form.servicioNutricionDieteticaAlimentacionInternamiento}
                    name="servicioNutricionDieteticaAlimentacionInternamiento"
                    handleChange={handleChange}
                />

            </Col>

        </Fragment>
    )

}

function ServiciosGenerales(props) {

    //we obtain their props
    const form = props.form;
    const handleChange = props.handleChange;

    const evaluateMantenimientoEquiposMedicosBiomedica = () => {


        if (form.mantenimientoEquiposMedicosBiomedica === 'subrogado') {

            return (
                <Col xs={12} md={12} className="mt-1 mb-1">

                    <Alert variant="warning">

                        <Row className="justify-content-center">

                            <Col xs={12} md={12} class="mb-2">
                                <Alert.Heading className="text-center">Mantenimiento de Equipos Médicos (Biomédica)</Alert.Heading>
                            </Col>

                            <Col xs={12} md={5}>

                                <FloatingLabel controlId="floatingSelect" label="Tipo de Mantenimiento">
                                    <Form.Select aria-label="Floating label"
                                        value={form.tipoMantenimiento ? form.tipoMantenimiento : ''}
                                        onChange={handleChange} name="tipoMantenimiento">
                                        <option value="" disabled>Seleccione una opción</option>
                                        <option value="preventivo">Preventivo</option>
                                        <option value="correctivo">Correctivo</option>
                                    </Form.Select>
                                </FloatingLabel>

                            </Col>

                            <Col xs={12} md={5}>

                                <FloatingLabel controlId="floatingSelect" label="Tipo de Mantenimiento">
                                    <Form.Select aria-label="Floating label"
                                        value={form.tipoMantenimiento2 ? form.tipoMantenimiento2 : ''}
                                        onChange={handleChange} name="tipoMantenimiento2">
                                        <option value="" disabled>Seleccione una opción</option>
                                        <option value="general">General</option>
                                        <option value="especializado">Especializado</option>
                                    </Form.Select>
                                </FloatingLabel>

                            </Col>

                        </Row>
                    </Alert>
                </Col>
            )
        } else {

            form.tipoMantenimiento = null;
            form.tipoMantenimiento2 = null;
            return null;
        }

    }

    return (
        <Fragment>

            <Col xs={12} md={12} className="mb-1">
                <h5 className="text-center title-cmh">Servicios Generales</h5>
            </Col>

            <Col xs={12} md={3} className="mb-3">

                <GetSelect
                    label="Aseo-Intendencia"
                    value={form.aseoIntendencia}
                    name="aseoIntendencia"
                    handleChange={handleChange}
                />

            </Col>

            <Col xs={12} md={4} className="mb-3">

                <GetSelect
                    label="Vigilancia y Seguridad"
                    value={form.vigilanciaSeguridad}
                    name="vigilanciaSeguridad"
                    handleChange={handleChange}
                />

            </Col>

            <Col xs={12} md={5} className="mb-3">

                <GetSelect
                    label="Mantenimiento de la Infraestructura Física"
                    value={form.mantenimientoInfraestructuraFisica}
                    name="mantenimientoInfraestructuraFisica"
                    handleChange={handleChange}
                />

            </Col>

            <Col xs={12} md={3} className="mb-3">

                <GetSelect
                    label="Call Center"
                    value={form.callCenter}
                    name="callCenter"
                    handleChange={handleChange}
                />

            </Col>

            <Col xs={12} md={4} className="mb-3">

                <GetSelect
                    label="Manejo de Residuos Hospitalarios (RPBI)"
                    value={form.manejoResiduosHospitalariosRPBI}
                    name="manejoResiduosHospitalariosRPBI"
                    handleChange={handleChange}
                />

            </Col>

            <Col xs={12} md={5} className="mb-3">

                <GetSelect
                    label="Central de Equipos y Esterilización (CEYE)"
                    value={form.centralEquiposEsterilizacionCEYE}
                    name="centralEquiposEsterilizacionCEYE"
                    handleChange={handleChange}
                />

            </Col>

            <Col xs={12} md={3} className="mb-3">

                <GetSelect
                    label="Desinfestación"
                    value={form.desinfestacion}
                    name="desinfestacion"
                    handleChange={handleChange}
                />

            </Col>

            <Col xs={12} md={4} className="mb-3">

                <GetSelect
                    label="Marketing y Publicidad"
                    value={form.marketingPublicidad}
                    name="marketingPublicidad"
                    handleChange={handleChange}
                />

            </Col>

            <Col xs={12} md={5} className="mb-3">

                <GetSelect
                    label="Mantenimiento de Equipos Médicos (Biomédica)"
                    value={form.mantenimientoEquiposMedicosBiomedica}
                    name="mantenimientoEquiposMedicosBiomedica"
                    handleChange={handleChange}
                />

            </Col>

            {evaluateMantenimientoEquiposMedicosBiomedica()}

        </Fragment>

    )

}

function Administrativas(props) {

    //we obtain the props for this component
    const form = props.form
    const handleChange = props.handleChange

    return (
        <Fragment>

            {/*Administrativas*/}
            <Col xs={12} md={12} className="mt-3">
                <Row>

                    <Col xs={12} md={12} className="mb-2">
                        <h4 className="text-center sub-title-cmh">Administrativas</h4>
                    </Col>


                    <Col xs={12} md={4} className="mb-3">

                        <GetSelect
                            label="Sistemas"
                            value={form.sistemas}
                            name="sistemas"
                            handleChange={handleChange}
                        />

                    </Col>

                    <Col xs={12} md={4} className="mb-3">

                        <GetSelect
                            label="Asesoría Jurídica"
                            value={form.asesoriaJuridica}
                            name="asesoriaJuridica"
                            handleChange={handleChange}
                        />

                    </Col>

                    <Col xs={12} md={4} className="mb-3">

                        <GetSelect
                            label="Contabilidad"
                            value={form.contabilidad}
                            name="contabilidad"
                            handleChange={handleChange}
                        />

                    </Col>

                    <Col xs={12} md={4} className="mb-3">

                        <GetSelect
                            label="Facturación"
                            value={form.facturacion}
                            name="facturacion"
                            handleChange={handleChange}
                        />

                    </Col>

                    <Col xs={12} md={4} className="mb-3">

                        <GetSelect
                            label="Recuperación de Cartera"
                            value={form.recuperacionCartera}
                            name="recuperacionCartera"
                            handleChange={handleChange}
                        />

                    </Col>

                    <Col xs={12} md={4} className="mb-3">

                        <GetSelect
                            label="Auditoría"
                            value={form.auditoria}
                            name="auditoria"
                            handleChange={handleChange}
                        />

                    </Col>

                </Row>
            </Col>

        </Fragment>
    )

}

function Otros(props) {

    //we obtain the props for this component
    const form = props.form
    const handleChange = props.handleChange

    return (

        <Fragment>

            {/*Otros*/}
            <Col xs={12} md={12} className="mt-3">
                <Row>

                    <Col xs={12} md={12} className="mb-2">
                        <h4 className="text-center sub-title-cmh">Otros</h4>
                    </Col>

                    <Col xs={12} md={4} className="mb-3">

                        <GetSelect
                            label="Calibración de instrumentos de medición"
                            value={form.calibracionInstrumentosMedicion}
                            name="calibracionInstrumentosMedicion"
                            handleChange={handleChange}
                        />

                    </Col>

                    <Col xs={12} md={4} className="mb-3">

                        <GetSelect
                            label="Farmacia Venta al Público"
                            value={form.farmaciaVentaPublico}
                            name="farmaciaVentaPublico"
                            handleChange={handleChange}
                        />

                    </Col>

                    <Col xs={12} md={4} className="mb-3">

                        <GetSelect
                            label="Servicio de Banco de Leche"
                            value={form.servicioBancoLeche}
                            name="servicioBancoLeche"
                            handleChange={handleChange}
                        />

                    </Col>

                    <Col xs={12} md={12}>

                        <Row className="justify-content-center">

                            <Col xs={12} md={5} className="mb-3">

                                <GetSelect
                                    label="Servicio de Evaluaciones Médicas (Check up´s)"
                                    value={form.servicioEvaluacionesMedicasCheckups}
                                    name="servicioEvaluacionesMedicasCheckups"
                                    handleChange={handleChange}
                                />

                            </Col>

                            <Col xs={12} md={5} className="mb-3">

                                <GetSelect
                                    label="Servicio de Lavandería para Ropa Hospitalaria"
                                    value={form.servicioLavanderiaRopaHospitalaria}
                                    name="servicioLavanderiaRopaHospitalaria"
                                    handleChange={handleChange}
                                />

                            </Col>

                        </Row>

                    </Col>

                </Row>
            </Col>

        </Fragment>
    )

}

function GetSelect(props) {

    //we obtain their props
    const label = props.label;
    const value = props.value;
    const name = props.name;
    const handleChange = props.handleChange;

    return (
        <Fragment>

            <FloatingLabel controlId="floatingSelect" label={label}>
                <Form.Select aria-label="Floating label"
                    value={value ? value : ''}
                    onChange={handleChange} name={name}>
                    <option value="" disabled>Seleccione una opción</option>
                    {//TODO: REPLICAR EN TODOS LOS SELECTORES
                        OPTIONS.map((option) => {
                            return (
                                <Fragment key={option.id}>
                                    <option value={option.value}>{option.name}</option>
                                </Fragment>
                            )
                        })
                    }
                </Form.Select>
            </FloatingLabel>

        </Fragment>
    )
}

export default Outsourcing;