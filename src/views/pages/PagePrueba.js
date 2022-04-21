import React, { Fragment, useState, useEffect } from "react";
import { Container, Col, Row, FloatingLabel, Button, Form } from "react-bootstrap";
import MultiSelect from "../components/selectors/MultiSelect";


//we import css
import "../../globalStyles.css"

const currentYear = new Date().getFullYear();
const lastYear = currentYear - 1;

function PagePrueba() {

    //declared the variables, constants ans states for this module
    const [form, setForm] = useState({})
    const dataMulti = [
        { value: 'Seleccione las acreditaciones', selected: true },
        { value: 'ISO 9001', label: 'ISO 9001' },
        { value: 'CSG', label: 'CSG' },
        { value: 'CertCan', label: 'Certificación Canadiense' },
        { value: 'JCI', label: 'JCI' },
        { value: 'DistH', label: 'Distintivo "H"' },
    ]


    //module's functions
    const handleChange = async (e) => {

        e.persist();

        await setForm(
            {
                ...form,
                [e.target.name]: e.target.value
            }
        );

    }

    const prueba = () => {
        console.log(form)
    }

    return (
        <Fragment>
            <Container className="mt-5">
                <Row>
                    <Col xs={12} md={12}>
                        <Row>

                            <Col xs={12} md={12}>
                                <h1 className="title-cmh">Encuesta RHo</h1>
                            </Col>

                            <Col xs={12} md={12} className="mt-3">
                                <Row>
                                    <Col xs={12} md={12} className="mb-3">
                                        <h4 className="text-center sub-title-cmh">Perfil del Hospital</h4>
                                    </Col>
                                    <Col xs={12} md={6}>

                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Razón Social">
                                            <Form.Control
                                                type="text"
                                                placeholder="Razón Social"
                                                value={form.razonSocial ? form.razonSocial : ''}
                                                name="razonSocial"
                                                onChange={handleChange} />
                                        </FloatingLabel>

                                    </Col>

                                    <Col xs={12} md={6}>

                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Nombre Comercial">
                                            <Form.Control
                                                type="text"
                                                placeholder="Nombre Comercial"
                                                value={form.nombreComercial ? form.nombreComercial : ''}
                                                name="nombreComercial"
                                                onChange={handleChange} />
                                        </FloatingLabel>

                                    </Col>

                                    <Col xs={12} md={6}>
                                        <Button variant="primary" onClick={prueba}> HOLA
                                        </Button>
                                    </Col>

                                </Row>
                            </Col>

                            <Col xs={12} md={12} className="mt-3">
                                <Row>
                                    <Col xs={12} md={12} className="mt-3">
                                        <h4 className="text-center sub-title-cmh">Características</h4>
                                    </Col>

                                    <Col xs={12} md={4} className="mt-3">

                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Hospital Asociado al CMH desde">
                                            <Form.Control
                                                type="text"
                                                placeholder="Hospital Asociado al CMH desde"
                                                value={form.hospitalAsociadoCMHDesde ? form.hospitalAsociadoCMHDesde : ''}
                                                name="hospitalAsociadoCMHDesde"
                                                onChange={handleChange} />
                                        </FloatingLabel>

                                    </Col>

                                    <Col xs={12} md={4} className="mt-3">

                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Fecha de Fundación del Hospital">
                                            <Form.Control
                                                type="date"
                                                placeholder="Fecha de Fundación del Hospital"
                                                value={form.fechaFundacionHospital ? form.fechaFundacionHospital : ''}
                                                name="fechaFundacionHospital"
                                                onChange={handleChange} />
                                        </FloatingLabel>

                                    </Col>

                                    <Col xs={12} md={4} className="mt-3">

                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Área construida [m²]">
                                            <Form.Control
                                                type="number"
                                                placeholder="Área construida [m²]"
                                                value={form.areaConstruida ? form.areaConstruida : ''}
                                                name="areaConstruida"
                                                onChange={handleChange} />
                                        </FloatingLabel>

                                    </Col>

                                    <Col xs={12} md={4} className="mt-3">

                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Número de colaboradores">
                                            <Form.Control
                                                type="number"
                                                placeholder="Número de colaboradores"
                                                value={form.numeroColaboradores ? form.numeroColaboradores : ''}
                                                name="numeroColaboradores"
                                                onChange={handleChange} />
                                        </FloatingLabel>

                                    </Col>

                                    <Col xs={12} md={4} className="mt-3">

                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Nº de Camas de Hospitalización">
                                            <Form.Control
                                                type="number"
                                                placeholder="Nº de Camas de Hospitalización"
                                                value={form.numeroCamasHospitalizacion ? form.numeroCamasHospitalizacion : ''}
                                                name="numeroCamasHospitalizacion"
                                                onChange={handleChange} />
                                        </FloatingLabel>

                                    </Col>

                                    <Col xs={12} md={4} className="mt-3">

                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Nº Camas UCIA">
                                            <Form.Control
                                                type="number"
                                                placeholder="Nº Camas UCIA"
                                                value={form.numeroCamasUCIA ? form.numeroCamasUCIA : ''}
                                                name="numeroCamasUCIA"
                                                onChange={handleChange} />
                                        </FloatingLabel>

                                    </Col>

                                    <Col xs={12} md={4} className="mt-3">

                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Nº Camas UCIN">
                                            <Form.Control
                                                type="number"
                                                placeholder="Nº Camas UCIN"
                                                value={form.numeroCamasUCIN ? form.numeroCamasUCIN : ''}
                                                name="numeroCamasUCIN"
                                                onChange={handleChange} />
                                        </FloatingLabel>

                                    </Col>

                                    <Col xs={12} md={4} className="mt-3">

                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Nº Salas de Cirugía">
                                            <Form.Control
                                                type="number"
                                                placeholder="Nº Salas de Cirugía"
                                                value={form.numeroSalasCirugia ? form.numeroSalasCirugia : ''}
                                                name="numeroSalasCirugia"
                                                onChange={handleChange} />
                                        </FloatingLabel>

                                    </Col>

                                    <Col xs={12} md={4} className="mt-3">

                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Número de Médicos credencializados">
                                            <Form.Control
                                                type="number"
                                                placeholder="Número de Médicos credencializados"
                                                value={form.numeroMedicosCredencializados ? form.numeroMedicosCredencializados : ''}
                                                name="numeroMedicosCredencializados"
                                                onChange={handleChange} />
                                        </FloatingLabel>

                                    </Col>

                                    <Col xs={12} md={6} className="mt-3">

                                        <FloatingLabel controlId="floatingSelect" label="Nivel de Atención Hospitalaria">
                                            <Form.Select aria-label="Floating label" value={form.nivelAtencionHospitalaria ? form.nivelAtencionHospitalaria : ''} onChange={handleChange} name="nivelAtencionHospitalaria"
                                                style={{ height: '70px' }}>
                                                <option value="" disabled>Seleccione el nivel de atención hospitalaria</option>
                                                <option value="Hospital General">Hospital General</option>
                                                <option value="Hospital Especializado">Hospital Especializado</option>
                                            </Form.Select>
                                        </FloatingLabel>

                                    </Col>

                                    <Col xs={12} md={6} className="mt-3">

                                        <Form.Group controlId="formFileMultiple" className="mb-3">
                                            <Form.Label>Servicios habilitados en su Hospital:</Form.Label>
                                            <Form.Control
                                                type="file"
                                                value={form.serviciosHabilitadosHospital ? form.serviciosHabilitadosHospital : ''}
                                                name="serviciosHabilitadosHospital"
                                                onChange={handleChange}
                                                multiple />
                                        </Form.Group>

                                    </Col>

                                    <Col xs={12} md={12} className="mt-3">

                                        <Form.Group className="mb-3" controlId="formHospitalLevel">
                                            <Form.Label>Acreditación(es) Hospitalaria(s):</Form.Label>
                                            <MultiSelect options={dataMulti} />
                                        </Form.Group>

                                    </Col>

                                    <Col xs={12} md={6} className="mt-3">

                                        <FloatingLabel
                                            controlId="floatingTextarea"
                                            label="Reseña de Hospital">
                                            <Form.Control
                                                as="textarea"
                                                placeholder="Reseña de Hospital"
                                                value={form.reseniaHospital ? form.reseniaHospital : ""}
                                                name="reseniaHospital"
                                                style={{ height: '100px' }}
                                                onChange={handleChange} />
                                        </FloatingLabel>

                                    </Col>

                                    <Col xs={12} md={6} className="mt-3">

                                        <FloatingLabel
                                            controlId="floatingTextarea"
                                            label="Lo Destacado del Hospital en el año 2019">
                                            <Form.Control
                                                as="textarea"
                                                placeholder="Lo Destacado del Hospital en el año 2019"
                                                value={form.highlights ? form.highlights : ""}
                                                name="highlights"
                                                style={{ height: '100px' }}
                                                onChange={handleChange} />
                                        </FloatingLabel>

                                    </Col>

                                </Row>
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )


}


export default PagePrueba;