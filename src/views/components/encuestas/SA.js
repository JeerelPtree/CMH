import React, { Fragment, useState, useEffect } from "react";
import { Container, Col, Row, FloatingLabel, Button, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import MultiSelect from "../../components/selectors/MultiSelect";
//import axios from "axios"


//we import css
import "../../../globalStyles.css"

const currentYear = new Date().getFullYear();
const lastYear = currentYear - 1;

function SA() {

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
            <Container className="mt-3">
                <Row>
                    <Col xs={12} md={12}>
                        <Row>

                            <Especialidad form={form} handleChange={handleChange} />

                            <EspecialidadesQuirurgicas form={form} handleChange={handleChange} />

                            <EspecialidadesMedicas form={form} handleChange={handleChange} />

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


function Especialidad(props) {

    //we obtain the props for this component
    const form = props.form
    const handleChange = props.handleChange

    return (
        <Fragment>

            {/*Especialidad*/}
            <Col xs={12} md={12}>
                <Row>

                    {/*Credencialización*/}
                    <Col xs={12} md={12} className="mt-3">
                        {/*¿Cuenta con credencialización?*/}
                        <Row className="align-items-center">
                            {/*Etiqueta*/}
                            <Col xs={9} md={6} className="my-auto">
                                <Form.Label floatingInput>¿Cuenta con Procedimiento de Credencialización de Médicos?</Form.Label>
                            </Col>

                            {/*Selector*/}
                            <Col xs={3} md={1} className="my-auto">
                                <Form.Select aria-label="Floating label" value={form.credencializacion ? form.credencializacion : ''} onChange={handleChange} name="credencializacion"
                                >
                                    <option value="" disabled>Seleccione una opción</option>
                                    <option value={true}>Si</option>
                                    <option value={false}>No</option>
                                </Form.Select>
                            </Col>

                            {/*Adjuntar archivos de credencialización*/}
                            <Col xs={12} md={5} className="my-auto pt-3">

                                <Form.Group controlId="formFileMultiple" className="mb-3">
                                    <Form.Control
                                        placeholder="Ningún archivo seleccionado"
                                        type="file"
                                        value={form.credencializacionArchivos ? form.credencializacionArchivos : ''}
                                        name="credencializacionArchivos"
                                        onChange={handleChange}
                                        multiple />
                                </Form.Group>

                            </Col>
                        </Row>
                    </Col>

                    {/*Titulo de la sección*/}
                    <Col xs={12} md={12} className="mt-3 mb-3">
                        <h4 className="text-center sub-title-cmh">Especialidad</h4>
                    </Col>

                    {/*Anestesiología*/}
                    <Col xs={12} md={4} className="mt-3">

                        <Row className="align-items-center">

                            {/*Etiqueta*/}
                            <Col xs={9} md={5} className="my-auto">
                                <Form.Label floatingInput>Anestesiología</Form.Label>
                            </Col>

                            {/*Selector*/}
                            <Col xs={3} md={4} className="my-auto">
                                <Form.Select value={form.especialidadAnestesiologia ? form.especialidadAnestesiologia : ''} onChange={handleChange} name="especialidadAnestesiologia"
                                >
                                    <option value="" disabled>Seleccione una opción</option>
                                    <option value={true}>Si</option>
                                    <option value={false}>No</option>
                                </Form.Select>
                            </Col>

                            {/*Cantidad Anestesiología*/}
                            <Col xs={12} md={3} className="my-auto">


                                <Form.Control
                                    type="number"
                                    value={form.numeroMedicosAnestesiologia ? form.numeroMedicosAnestesiologia : ''}
                                    name="numeroMedicosAnestesiologia"
                                    onChange={handleChange} />


                            </Col>
                        </Row>
                    </Col>

                    {/*Cirugía General*/}
                    <Col xs={12} md={4} className="mt-3">

                        <Row className="align-items-center">

                            {/*Etiqueta*/}
                            <Col xs={9} md={5} className="my-auto">
                                <Form.Label floatingInput>Cirugía General</Form.Label>
                            </Col>

                            {/*Selector*/}
                            <Col xs={3} md={4} className="my-auto">
                                <Form.Select value={form.especialidadCirugiaGeneral ? form.especialidadCirugiaGeneral : ''} onChange={handleChange} name="especialidadCirugiaGeneral"
                                >
                                    <option value="" disabled>Seleccione una opción</option>
                                    <option value={true}>Si</option>
                                    <option value={false}>No</option>
                                </Form.Select>
                            </Col>

                            {/*Cantidad Cirugía General*/}
                            <Col xs={12} md={3} className="my-auto">
                                <Form.Control
                                    type="number"
                                    value={form.numeroMedicosCirugiaGeneral ? form.numeroMedicosCirugiaGeneral : ''}
                                    name="numeroMedicosCirugiaGeneral"
                                    onChange={handleChange} />


                            </Col>
                        </Row>
                    </Col>

                    {/*Ginecología y Obstetricia*/}
                    <Col xs={12} md={4} className="mt-3">

                        <Row className="align-items-center">

                            {/*Etiqueta*/}
                            <Col xs={9} md={5} className="my-auto">
                                <Form.Label floatingInput>Ginecología y Obstetricia</Form.Label>
                            </Col>

                            {/*Selector*/}
                            <Col xs={3} md={4} className="mb-3">
                                <Form.Select value={form.especialidadGinecologiaObstetricia ? form.especialidadGinecologiaObstetricia : ''} onChange={handleChange} name="especialidadGinecologiaObstetricia"
                                >
                                    <option value="" disabled>Seleccione una opción</option>
                                    <option value={true}>Si</option>
                                    <option value={false}>No</option>
                                </Form.Select>
                            </Col>

                            {/*Cantidad Ginecología y Obstetricia*/}
                            <Col xs={12} md={3} className="mb-3">


                                <Form.Control
                                    type="number"
                                    value={form.numeroMedicosGinecologiaObstetricia ? form.numeroMedicosGinecologiaObstetricia : ''}
                                    name="numeroMedicosGinecologiaObstetricia"
                                    onChange={handleChange} />


                            </Col>
                        </Row>
                    </Col>

                    {/*Medicina Interna*/}
                    <Col xs={12} md={4} className="mt-3 mb-3">

                        <Row className="align-items-center">

                            {/*Etiqueta*/}
                            <Col xs={9} md={5} className="my-auto">
                                <Form.Label floatingInput>Medicina Interna</Form.Label>
                            </Col>

                            {/*Selector*/}
                            <Col xs={3} md={4} className="my-auto">
                                <Form.Select value={form.especialidadMedicinaInterna ? form.especialidadMedicinaInterna : ''} onChange={handleChange} name="especialidadMedicinaInterna"
                                >
                                    <option value="" disabled>Seleccione una opción</option>
                                    <option value={true}>Si</option>
                                    <option value={false}>No</option>
                                </Form.Select>
                            </Col>

                            {/*Cantidad Medicina Interna*/}
                            <Col xs={12} md={3} className="my-auto">


                                <Form.Control
                                    type="number"
                                    value={form.numeroMedicosMedicinaInterna ? form.numeroMedicosMedicinaInterna : ''}
                                    name="numeroMedicosMedicinaInterna"
                                    onChange={handleChange} />


                            </Col>
                        </Row>
                    </Col>

                    {/*Oftalmología*/}
                    <Col xs={12} md={4} className="mt-3 mb-3">

                        <Row className="align-items-center">

                            {/*Etiqueta*/}
                            <Col xs={9} md={5} className="my-auto">
                                <Form.Label floatingInput>Oftalmología</Form.Label>
                            </Col>

                            {/*Selector*/}
                            <Col xs={3} md={4} className="my-auto">
                                <Form.Select value={form.especialidadOftalmologia ? form.especialidadOftalmologia : ''} onChange={handleChange} name="especialidadOftalmologia"
                                >
                                    <option value="" disabled>Seleccione una opción</option>
                                    <option value={true}>Si</option>
                                    <option value={false}>No</option>
                                </Form.Select>
                            </Col>

                            {/*Cantidad Oftalmología*/}
                            <Col xs={12} md={3} className="my-auto">


                                <Form.Control
                                    type="number"
                                    value={form.numeroMedicosOftalmologia ? form.numeroMedicosOftalmologia : ''}
                                    name="numeroMedicosOftalmologia"
                                    onChange={handleChange} />


                            </Col>
                        </Row>
                    </Col>

                    {/*Pediatría*/}
                    <Col xs={12} md={4} className="mt-3 mb-3">

                        <Row className="align-items-center">

                            {/*Etiqueta*/}
                            <Col xs={9} md={5} className="my-auto">
                                <Form.Label floatingInput>Pediatría</Form.Label>
                            </Col>

                            {/*Selector*/}
                            <Col xs={3} md={4} className="my-auto">
                                <Form.Select value={form.especialidadPediatria ? form.especialidadPediatria : ''} onChange={handleChange} name="especialidadPediatria"
                                >
                                    <option value="" disabled>Seleccione una opción</option>
                                    <option value={true}>Si</option>
                                    <option value={false}>No</option>
                                </Form.Select>
                            </Col>

                            {/*Cantidad Pediatría*/}
                            <Col xs={12} md={3} className="my-auto">


                                <Form.Control
                                    type="number"
                                    value={form.numeroMedicosPediatria ? form.numeroMedicosPediatria : ''}
                                    name="numeroMedicosPediatria"
                                    onChange={handleChange} />


                            </Col>
                        </Row>
                    </Col>

                    {/*Neonatología*/}
                    <Col xs={12} md={4} className="mt-3 mb-3">

                        <Row className="align-items-center">

                            {/*Etiqueta*/}
                            <Col xs={9} md={5} className="my-auto">
                                <Form.Label floatingInput>Neonatología</Form.Label>
                            </Col>

                            {/*Selector*/}
                            <Col xs={3} md={4} className="my-auto">
                                <Form.Select value={form.especialidadNeonatologia ? form.especialidadNeonatologia : ''} onChange={handleChange} name="especialidadNeonatologia"
                                >
                                    <option value="" disabled>Seleccione una opción</option>
                                    <option value={true}>Si</option>
                                    <option value={false}>No</option>
                                </Form.Select>
                            </Col>

                            {/*Cantidad Neonatología*/}
                            <Col xs={12} md={3} className="my-auto">


                                <Form.Control
                                    type="number"
                                    value={form.numeroMedicosNeonatologia ? form.numeroMedicosNeonatologia : ''}
                                    name="numeroMedicosNeonatologia"
                                    onChange={handleChange} />


                            </Col>
                        </Row>
                    </Col>

                    {/*Medicina Familiar*/}
                    <Col xs={12} md={4} className="mt-3 mb-3">

                        <Row className="align-items-center">

                            {/*Etiqueta*/}
                            <Col xs={9} md={5} className="my-auto">
                                <Form.Label floatingInput>Medicina Familiar</Form.Label>
                            </Col>

                            {/*Selector*/}
                            <Col xs={3} md={4} className="mb-3">
                                <Form.Select value={form.especialidadMedicinaFamiliar ? form.especialidadMedicinaFamiliar : ''} onChange={handleChange} name="especialidadMedicinaFamiliar"
                                >
                                    <option value="" disabled>Seleccione una opción</option>
                                    <option value={true}>Si</option>
                                    <option value={false}>No</option>
                                </Form.Select>
                            </Col>

                            {/*Cantidad Medicina Familiar*/}
                            <Col xs={12} md={3} className="mb-3">


                                <Form.Control
                                    type="number"
                                    value={form.numeroMedicosMedicinaFamiliar ? form.numeroMedicosMedicinaFamiliar : ''}
                                    name="numeroMedicosMedicinaFamiliar"
                                    onChange={handleChange} />


                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>

        </Fragment>
    )

}

function EspecialidadesQuirurgicas(props) {

    //we obtain the props for this component
    const form = props.form
    const handleChange = props.handleChange

    return (
        <Fragment>

            {/*Especialidad*/}
            <Col xs={12} md={12}>
                <Row>

                    {/*Titulo de la sección*/}
                    <Col xs={12} md={12} className="mt-3 mb-3">
                        <h4 className="text-center sub-title-cmh">Especialidades Quirúrgicas</h4>
                    </Col>

                    {/*Angiología y Cirugía Vascular*/}
                    <Col xs={12} md={4} className="mt-3">

                        <Row className="align-items-center">

                            {/*Etiqueta*/}
                            <Col xs={9} md={5} className="my-auto">
                                <Form.Label floatingInput>Angiología y Cirugía Vascular</Form.Label>
                            </Col>

                            {/*Selector*/}
                            <Col xs={3} md={4} className="mb-3">
                                <Form.Select value={form.especialidadAngiologia ? form.especialidadAngiologia : ''} onChange={handleChange} name="especialidadAngiologia"
                                >
                                    <option value="" disabled>Seleccione una opción</option>
                                    <option value={true}>Si</option>
                                    <option value={false}>No</option>
                                </Form.Select>
                            </Col>

                            {/*Cantidad Angiología y Cirugía Vascular*/}
                            <Col xs={12} md={3} className="mb-3">


                                <Form.Control
                                    type="number"
                                    value={form.numeroMedicosAngiologia ? form.numeroMedicosAngiologia : ''}
                                    name="numeroMedicosAngiologia"
                                    onChange={handleChange} />


                            </Col>
                        </Row>
                    </Col>

                    {/*Cirugía Bariátrica*/}
                    <Col xs={12} md={4} className="mt-3">

                        <Row className="align-items-center">

                            {/*Etiqueta*/}
                            <Col xs={9} md={5} className="my-auto">
                                <Form.Label floatingInput>Cirugía Bariátrica</Form.Label>
                            </Col>

                            {/*Selector*/}
                            <Col xs={3} md={4} className="my-auto">
                                <Form.Select value={form.especialidadCirugiaBariatrica ? form.especialidadCirugiaBariatrica : ''} onChange={handleChange} name="especialidadCirugiaBariatrica"
                                >
                                    <option value="" disabled>Seleccione una opción</option>
                                    <option value={true}>Si</option>
                                    <option value={false}>No</option>
                                </Form.Select>
                            </Col>

                            {/*Cantidad Cirugía Bariátrica*/}
                            <Col xs={12} md={3} className="my-auto">


                                <Form.Control
                                    type="number"
                                    value={form.numeroMedicosCirugiaBariatrica ? form.numeroMedicosCirugiaBariatrica : ''}
                                    name="numeroMedicosCirugiaBariatrica"
                                    onChange={handleChange} />


                            </Col>
                        </Row>
                    </Col>

                    {/*Cirugía Cardiovascular*/}
                    <Col xs={12} md={4} className="mt-3">

                        <Row className="align-items-center">

                            {/*Etiqueta*/}
                            <Col xs={9} md={5} className="my-auto">
                                <Form.Label floatingInput>Cirugía Cardiovascular</Form.Label>
                            </Col>

                            {/*Selector*/}
                            <Col xs={3} md={4} className="mb-3">
                                <Form.Select value={form.especialidadCirugiaCardiovascular ? form.especialidadCirugiaCardiovascular : ''} onChange={handleChange} name="especialidadCirugiaCardiovascular"
                                >
                                    <option value="" disabled>Seleccione una opción</option>
                                    <option value={true}>Si</option>
                                    <option value={false}>No</option>
                                </Form.Select>
                            </Col>

                            {/*Cantidad Cirugía Cardiovascular*/}
                            <Col xs={12} md={3} className="mb-3">


                                <Form.Control
                                    type="number"
                                    value={form.numeroMedicosCirugiaCardiovascular ? form.numeroMedicosCirugiaCardiovascular : ''}
                                    name="numeroMedicosCirugiaCardiovascular"
                                    onChange={handleChange} />


                            </Col>
                        </Row>
                    </Col>

                    {/*Cirugía Oncológica*/}
                    <Col xs={12} md={4} className="mt-3">

                        <Row className="align-items-center">

                            {/*Etiqueta*/}
                            <Col xs={9} md={5} className="my-auto">
                                <Form.Label floatingInput>Cirugía Oncológica</Form.Label>
                            </Col>

                            {/*Selector*/}
                            <Col xs={3} md={4} className="mb-3">
                                <Form.Select value={form.especialidadCirugiaOncologica ? form.especialidadCirugiaOncologica : ''} onChange={handleChange} name="especialidadCirugiaOncologica"
                                >
                                    <option value="" disabled>Seleccione una opción</option>
                                    <option value={true}>Si</option>
                                    <option value={false}>No</option>
                                </Form.Select>
                            </Col>

                            {/*Cantidad Cirugía Oncológica*/}
                            <Col xs={12} md={3} className="mb-3">


                                <Form.Control
                                    type="number"
                                    value={form.numeroMedicosCirugiaOncologica ? form.numeroMedicosCirugiaOncologica : ''}
                                    name="numeroMedicosCirugiaOncologica"
                                    onChange={handleChange} />


                            </Col>
                        </Row>
                    </Col>

                    {/*Cirugía Oral y Maxilofacial */}
                    <Col xs={12} md={4} className="mt-3">

                        <Row className="align-items-center">

                            {/*Etiqueta*/}
                            <Col xs={9} md={5} className="my-auto">
                                <Form.Label floatingInput>Cirugía Oral y Maxilofacial </Form.Label>
                            </Col>

                            {/*Selector*/}
                            <Col xs={3} md={4} className="mb-3">
                                <Form.Select value={form.especialidadCirugiaOral ? form.especialidadCirugiaOral : ''} onChange={handleChange} name="especialidadCirugiaOral"
                                >
                                    <option value="" disabled>Seleccione una opción</option>
                                    <option value={true}>Si</option>
                                    <option value={false}>No</option>
                                </Form.Select>
                            </Col>

                            {/*Cirugía Oral y Maxilofacial*/}
                            <Col xs={12} md={3} className="mb-3">


                                <Form.Control
                                    type="number"
                                    value={form.numeroMedicosCirugiaOral ? form.numeroMedicosCirugiaOral : ''}
                                    name="numeroMedicosCirugiaOral"
                                    onChange={handleChange} />


                            </Col>
                        </Row>
                    </Col>

                    {/*Cirugía Pediátrica*/}
                    <Col xs={12} md={4} className="mt-3">

                        <Row className="align-items-center">

                            {/*Etiqueta*/}
                            <Col xs={9} md={5} className="my-auto">
                                <Form.Label floatingInput>Cirugía Pediátrica</Form.Label>
                            </Col>

                            {/*Selector*/}
                            <Col xs={3} md={4} className="my-auto">
                                <Form.Select value={form.especialidadCirugiaPediatrica ? form.especialidadCirugiaPediatrica : ''} onChange={handleChange} name="especialidadCirugiaPediatrica"
                                >
                                    <option value="" disabled>Seleccione una opción</option>
                                    <option value={true}>Si</option>
                                    <option value={false}>No</option>
                                </Form.Select>
                            </Col>

                            {/*Cirugía Pediátrica*/}
                            <Col xs={12} md={3} className="my-auto">


                                <Form.Control
                                    type="number"
                                    value={form.numeroMedicosCirugiaPediatrica ? form.numeroMedicosCirugiaPediatrica : ''}
                                    name="numeroMedicosCirugiaPediatrica"
                                    onChange={handleChange} />


                            </Col>
                        </Row>
                    </Col>

                    {/*Cirugía Plástica y Reconstructiva*/}
                    <Col xs={12} md={4} className="mt-3">

                        <Row className="align-items-center">

                            {/*Etiqueta*/}
                            <Col xs={9} md={5} className="my-auto">
                                <Form.Label floatingInput>Cirugía Plástica y Reconstructiva</Form.Label>
                            </Col>

                            {/*Selector*/}
                            <Col xs={3} md={4} className="mb-3">
                                <Form.Select value={form.especialidadCirugiaPlastica ? form.especialidadCirugiaPlastica : ''} onChange={handleChange} name="especialidadCirugiaPlastica"
                                >
                                    <option value="" disabled>Seleccione una opción</option>
                                    <option value={true}>Si</option>
                                    <option value={false}>No</option>
                                </Form.Select>
                            </Col>

                            {/*Cirugía Plastica*/}
                            <Col xs={12} md={3} className="mb-3">
                                <Form.Control
                                    type="number"
                                    value={form.numeroMedicosCirugiaPlastica ? form.numeroMedicosCirugiaPlastica : ''}
                                    name="numeroMedicosCirugiaPlastica"
                                    onChange={handleChange} />


                            </Col>
                        </Row>
                    </Col>

                    {/*Neurocirugía*/}
                    <Col xs={12} md={4} className="mt-3">

                        <Row className="align-items-center">

                            {/*Etiqueta*/}
                            <Col xs={9} md={5} className="my-auto">
                                <Form.Label floatingInput>Neurocirugía</Form.Label>
                            </Col>

                            {/*Selector*/}
                            <Col xs={3} md={4} className="my-auto">
                                <Form.Select value={form.especialidadNeurocirugia ? form.especialidadNeurocirugia : ''} onChange={handleChange} name="especialidadNeurocirugia"
                                >
                                    <option value="" disabled>Seleccione una opción</option>
                                    <option value={true}>Si</option>
                                    <option value={false}>No</option>
                                </Form.Select>
                            </Col>

                            {/*Cantidad Neurocirugía*/}
                            <Col xs={12} md={3} className="my-auto">


                                <Form.Control
                                    type="number"
                                    value={form.numeroMedicosNeurocirugia ? form.numeroMedicosNeurocirugia : ''}
                                    name="numeroMedicosNeurocirugia"
                                    onChange={handleChange} />


                            </Col>
                        </Row>
                    </Col>

                    {/*Ortopedia y Traumatología */}
                    <Col xs={12} md={4} className="mt-3">

                        <Row className="align-items-center">

                            {/*Etiqueta*/}
                            <Col xs={9} md={5} className="my-auto">
                                <Form.Label floatingInput>Ortopedia y Traumatología </Form.Label>
                            </Col>

                            {/*Selector*/}
                            <Col xs={3} md={4} className="mb-3">
                                <Form.Select value={form.especialidadOrtopediaTraumatologia ? form.especialidadOrtopediaTraumatologia : ''} onChange={handleChange} name="especialidadOrtopediaTraumatologia"
                                >
                                    <option value="" disabled>Seleccione una opción</option>
                                    <option value={true}>Si</option>
                                    <option value={false}>No</option>
                                </Form.Select>
                            </Col>

                            {/*Ortopedia y Traumatología*/}
                            <Col xs={12} md={3} className="mb-3">


                                <Form.Control
                                    type="number"
                                    value={form.numeroMedicosOrtopediaTraumatologia ? form.numeroMedicosOrtopediaTraumatologia : ''}
                                    name="numeroMedicosOrtopediaTraumatologia"
                                    onChange={handleChange} />


                            </Col>
                        </Row>
                    </Col>

                    {/*Otorrinolaringología */}
                    <Col xs={12} md={4} className="mt-3">

                        <Row className="align-items-center">

                            {/*Etiqueta*/}
                            <Col xs={9} md={5} className="my-auto">
                                <Form.Label floatingInput>Otorrinolaringología</Form.Label>
                            </Col>

                            {/*Selector*/}
                            <Col xs={3} md={4} className="my-auto">
                                <Form.Select value={form.especialidadOtorrinolaringologia ? form.especialidadOtorrinolaringologia : ''} onChange={handleChange} name="especialidadOtorrinolaringologia"
                                >
                                    <option value="" disabled>Seleccione una opción</option>
                                    <option value={true}>Si</option>
                                    <option value={false}>No</option>
                                </Form.Select>
                            </Col>

                            {/*Cantidad Otorrinolaringología*/}
                            <Col xs={12} md={3} className="my-auto">


                                <Form.Control
                                    type="number"
                                    value={form.numeroMedicosOtorrinolaringologia ? form.numeroMedicosOtorrinolaringologia : ''}
                                    name="numeroMedicosOtorrinolaringologia"
                                    onChange={handleChange} />


                            </Col>
                        </Row>
                    </Col>

                    {/*Proctología */}
                    <Col xs={12} md={4} className="mt-3">

                        <Row className="align-items-center">

                            {/*Etiqueta*/}
                            <Col xs={9} md={5} className="my-auto">
                                <Form.Label floatingInput>Proctología</Form.Label>
                            </Col>

                            {/*Selector*/}
                            <Col xs={3} md={4} className="my-auto">
                                <Form.Select value={form.especialidadProctologia ? form.especialidadProctologia : ''} onChange={handleChange} name="especialidadProctologia"
                                >
                                    <option value="" disabled>Seleccione una opción</option>
                                    <option value={true}>Si</option>
                                    <option value={false}>No</option>
                                </Form.Select>
                            </Col>

                            {/*Cantidad Proctología*/}
                            <Col xs={12} md={3} className="my-auto">
                                <Form.Control
                                    type="number"
                                    value={form.numeroMedicosProctologia ? form.numeroMedicosProctologia : ''}
                                    name="numeroMedicosProctologia"
                                    onChange={handleChange} />


                            </Col>
                        </Row>
                    </Col>

                    {/*Urología  */}
                    <Col xs={12} md={4} className="mt-3">

                        <Row className="align-items-center">

                            {/*Etiqueta*/}
                            <Col xs={9} md={5} className="my-auto">
                                <Form.Label floatingInput>Urología</Form.Label>
                            </Col>

                            {/*Selector*/}
                            <Col xs={3} md={4} className="my-auto">
                                <Form.Select value={form.especialidadUrologia ? form.especialidadUrologia : ''} onChange={handleChange} name="especialidadUrologia"
                                >
                                    <option value="" disabled>Seleccione una opción</option>
                                    <option value={true}>Si</option>
                                    <option value={false}>No</option>
                                </Form.Select>
                            </Col>

                            {/*Cantidad Urología*/}
                            <Col xs={12} md={3} className="my-auto">
                                <Form.Control
                                    type="number"
                                    value={form.numeroMedicosUrologia ? form.numeroMedicosUrologia : ''}
                                    name="numeroMedicosUrologia"
                                    onChange={handleChange} />


                            </Col>
                        </Row>
                    </Col>

                </Row>
            </Col>

        </Fragment>
    )

}

function EspecialidadesMedicas(props) {

    //we obtain the props for this component
    const form = props.form
    const handleChange = props.handleChange

    return (
        <Fragment>

            {/*Especialidad*/}
            <Col xs={12} md={12}>
                <Row>

                    {/*Titulo de la sección*/}
                    <Col xs={12} md={12} className="mt-3 mb-3">
                        <h4 className="text-center sub-title-cmh">Especialidades Quirúrgicas</h4>
                    </Col>

                    {/*Angiología y Cirugía Vascular*/}
                    <Col xs={12} md={4} className="mt-3">

                        <Row className="align-items-center">

                            {/*Etiqueta*/}
                            <Col xs={9} md={5} className="my-auto">
                                <Form.Label floatingInput>Angiología y Cirugía Vascular</Form.Label>
                            </Col>

                            {/*Selector*/}
                            <Col xs={3} md={4} className="mb-3">
                                <Form.Select value={form.especialidadAngiologia ? form.especialidadAngiologia : ''} onChange={handleChange} name="especialidadAngiologia"
                                >
                                    <option value="" disabled>Seleccione una opción</option>
                                    <option value={true}>Si</option>
                                    <option value={false}>No</option>
                                </Form.Select>
                            </Col>

                            {/*Cantidad Angiología y Cirugía Vascular*/}
                            <Col xs={12} md={3} className="mb-3">


                                <Form.Control
                                    type="number"
                                    value={form.numeroMedicosAngiologia ? form.numeroMedicosAngiologia : ''}
                                    name="numeroMedicosAngiologia"
                                    onChange={handleChange} />


                            </Col>
                        </Row>
                    </Col>

                    {/*Cirugía Bariátrica*/}
                    <Col xs={12} md={4} className="mt-3">

                        <Row className="align-items-center">

                            {/*Etiqueta*/}
                            <Col xs={9} md={5} className="my-auto">
                                <Form.Label floatingInput>Cirugía Bariátrica</Form.Label>
                            </Col>

                            {/*Selector*/}
                            <Col xs={3} md={4} className="my-auto">
                                <Form.Select value={form.especialidadCirugiaBariatrica ? form.especialidadCirugiaBariatrica : ''} onChange={handleChange} name="especialidadCirugiaBariatrica"
                                >
                                    <option value="" disabled>Seleccione una opción</option>
                                    <option value={true}>Si</option>
                                    <option value={false}>No</option>
                                </Form.Select>
                            </Col>

                            {/*Cantidad Cirugía Bariátrica*/}
                            <Col xs={12} md={3} className="my-auto">


                                <Form.Control
                                    type="number"
                                    value={form.numeroMedicosCirugiaBariatrica ? form.numeroMedicosCirugiaBariatrica : ''}
                                    name="numeroMedicosCirugiaBariatrica"
                                    onChange={handleChange} />


                            </Col>
                        </Row>
                    </Col>

                    {/*Cirugía Cardiovascular*/}
                    <Col xs={12} md={4} className="mt-3">

                        <Row className="align-items-center">

                            {/*Etiqueta*/}
                            <Col xs={9} md={5} className="my-auto">
                                <Form.Label floatingInput>Cirugía Cardiovascular</Form.Label>
                            </Col>

                            {/*Selector*/}
                            <Col xs={3} md={4} className="mb-3">
                                <Form.Select value={form.especialidadCirugiaCardiovascular ? form.especialidadCirugiaCardiovascular : ''} onChange={handleChange} name="especialidadCirugiaCardiovascular"
                                >
                                    <option value="" disabled>Seleccione una opción</option>
                                    <option value={true}>Si</option>
                                    <option value={false}>No</option>
                                </Form.Select>
                            </Col>

                            {/*Cantidad Cirugía Cardiovascular*/}
                            <Col xs={12} md={3} className="mb-3">


                                <Form.Control
                                    type="number"
                                    value={form.numeroMedicosCirugiaCardiovascular ? form.numeroMedicosCirugiaCardiovascular : ''}
                                    name="numeroMedicosCirugiaCardiovascular"
                                    onChange={handleChange} />


                            </Col>
                        </Row>
                    </Col>

                    {/*Cirugía Oncológica*/}
                    <Col xs={12} md={4} className="mt-3">

                        <Row className="align-items-center">

                            {/*Etiqueta*/}
                            <Col xs={9} md={5} className="my-auto">
                                <Form.Label floatingInput>Cirugía Oncológica</Form.Label>
                            </Col>

                            {/*Selector*/}
                            <Col xs={3} md={4} className="mb-3">
                                <Form.Select value={form.especialidadCirugiaOncologica ? form.especialidadCirugiaOncologica : ''} onChange={handleChange} name="especialidadCirugiaOncologica"
                                >
                                    <option value="" disabled>Seleccione una opción</option>
                                    <option value={true}>Si</option>
                                    <option value={false}>No</option>
                                </Form.Select>
                            </Col>

                            {/*Cantidad Cirugía Oncológica*/}
                            <Col xs={12} md={3} className="mb-3">


                                <Form.Control
                                    type="number"
                                    value={form.numeroMedicosCirugiaOncologica ? form.numeroMedicosCirugiaOncologica : ''}
                                    name="numeroMedicosCirugiaOncologica"
                                    onChange={handleChange} />


                            </Col>
                        </Row>
                    </Col>

                    {/*Cirugía Oral y Maxilofacial */}
                    <Col xs={12} md={4} className="mt-3">

                        <Row className="align-items-center">

                            {/*Etiqueta*/}
                            <Col xs={9} md={5} className="my-auto">
                                <Form.Label floatingInput>Cirugía Oral y Maxilofacial </Form.Label>
                            </Col>

                            {/*Selector*/}
                            <Col xs={3} md={4} className="mb-3">
                                <Form.Select value={form.especialidadCirugiaOral ? form.especialidadCirugiaOral : ''} onChange={handleChange} name="especialidadCirugiaOral"
                                >
                                    <option value="" disabled>Seleccione una opción</option>
                                    <option value={true}>Si</option>
                                    <option value={false}>No</option>
                                </Form.Select>
                            </Col>

                            {/*Cirugía Oral y Maxilofacial*/}
                            <Col xs={12} md={3} className="mb-3">


                                <Form.Control
                                    type="number"
                                    value={form.numeroMedicosCirugiaOral ? form.numeroMedicosCirugiaOral : ''}
                                    name="numeroMedicosCirugiaOral"
                                    onChange={handleChange} />


                            </Col>
                        </Row>
                    </Col>

                    {/*Cirugía Pediátrica*/}
                    <Col xs={12} md={4} className="mt-3">

                        <Row className="align-items-center">

                            {/*Etiqueta*/}
                            <Col xs={9} md={5} className="my-auto">
                                <Form.Label floatingInput>Cirugía Pediátrica</Form.Label>
                            </Col>

                            {/*Selector*/}
                            <Col xs={3} md={4} className="my-auto">
                                <Form.Select value={form.especialidadCirugiaPediatrica ? form.especialidadCirugiaPediatrica : ''} onChange={handleChange} name="especialidadCirugiaPediatrica"
                                >
                                    <option value="" disabled>Seleccione una opción</option>
                                    <option value={true}>Si</option>
                                    <option value={false}>No</option>
                                </Form.Select>
                            </Col>

                            {/*Cirugía Pediátrica*/}
                            <Col xs={12} md={3} className="my-auto">


                                <Form.Control
                                    type="number"
                                    value={form.numeroMedicosCirugiaPediatrica ? form.numeroMedicosCirugiaPediatrica : ''}
                                    name="numeroMedicosCirugiaPediatrica"
                                    onChange={handleChange} />


                            </Col>
                        </Row>
                    </Col>

                    {/*Cirugía Plástica y Reconstructiva*/}
                    <Col xs={12} md={4} className="mt-3">

                        <Row className="align-items-center">

                            {/*Etiqueta*/}
                            <Col xs={9} md={5} className="my-auto">
                                <Form.Label floatingInput>Cirugía Plástica y Reconstructiva</Form.Label>
                            </Col>

                            {/*Selector*/}
                            <Col xs={3} md={4} className="mb-3">
                                <Form.Select value={form.especialidadCirugiaPlastica ? form.especialidadCirugiaPlastica : ''} onChange={handleChange} name="especialidadCirugiaPlastica"
                                >
                                    <option value="" disabled>Seleccione una opción</option>
                                    <option value={true}>Si</option>
                                    <option value={false}>No</option>
                                </Form.Select>
                            </Col>

                            {/*Cirugía Plastica*/}
                            <Col xs={12} md={3} className="mb-3">
                                <Form.Control
                                    type="number"
                                    value={form.numeroMedicosCirugiaPlastica ? form.numeroMedicosCirugiaPlastica : ''}
                                    name="numeroMedicosCirugiaPlastica"
                                    onChange={handleChange} />


                            </Col>
                        </Row>
                    </Col>

                    {/*Neurocirugía*/}
                    <Col xs={12} md={4} className="mt-3">

                        <Row className="align-items-center">

                            {/*Etiqueta*/}
                            <Col xs={9} md={5} className="my-auto">
                                <Form.Label floatingInput>Neurocirugía</Form.Label>
                            </Col>

                            {/*Selector*/}
                            <Col xs={3} md={4} className="my-auto">
                                <Form.Select value={form.especialidadNeurocirugia ? form.especialidadNeurocirugia : ''} onChange={handleChange} name="especialidadNeurocirugia"
                                >
                                    <option value="" disabled>Seleccione una opción</option>
                                    <option value={true}>Si</option>
                                    <option value={false}>No</option>
                                </Form.Select>
                            </Col>

                            {/*Cantidad Neurocirugía*/}
                            <Col xs={12} md={3} className="my-auto">


                                <Form.Control
                                    type="number"
                                    value={form.numeroMedicosNeurocirugia ? form.numeroMedicosNeurocirugia : ''}
                                    name="numeroMedicosNeurocirugia"
                                    onChange={handleChange} />


                            </Col>
                        </Row>
                    </Col>

                    {/*Ortopedia y Traumatología */}
                    <Col xs={12} md={4} className="mt-3">

                        <Row className="align-items-center">

                            {/*Etiqueta*/}
                            <Col xs={9} md={5} className="my-auto">
                                <Form.Label floatingInput>Ortopedia y Traumatología </Form.Label>
                            </Col>

                            {/*Selector*/}
                            <Col xs={3} md={4} className="mb-3">
                                <Form.Select value={form.especialidadOrtopediaTraumatologia ? form.especialidadOrtopediaTraumatologia : ''} onChange={handleChange} name="especialidadOrtopediaTraumatologia"
                                >
                                    <option value="" disabled>Seleccione una opción</option>
                                    <option value={true}>Si</option>
                                    <option value={false}>No</option>
                                </Form.Select>
                            </Col>

                            {/*Ortopedia y Traumatología*/}
                            <Col xs={12} md={3} className="mb-3">


                                <Form.Control
                                    type="number"
                                    value={form.numeroMedicosOrtopediaTraumatologia ? form.numeroMedicosOrtopediaTraumatologia : ''}
                                    name="numeroMedicosOrtopediaTraumatologia"
                                    onChange={handleChange} />


                            </Col>
                        </Row>
                    </Col>

                    {/*Otorrinolaringología */}
                    <Col xs={12} md={4} className="mt-3">

                        <Row className="align-items-center">

                            {/*Etiqueta*/}
                            <Col xs={9} md={5} className="my-auto">
                                <Form.Label floatingInput>Otorrinolaringología</Form.Label>
                            </Col>

                            {/*Selector*/}
                            <Col xs={3} md={4} className="my-auto">
                                <Form.Select value={form.especialidadOtorrinolaringologia ? form.especialidadOtorrinolaringologia : ''} onChange={handleChange} name="especialidadOtorrinolaringologia"
                                >
                                    <option value="" disabled>Seleccione una opción</option>
                                    <option value={true}>Si</option>
                                    <option value={false}>No</option>
                                </Form.Select>
                            </Col>

                            {/*Cantidad Otorrinolaringología*/}
                            <Col xs={12} md={3} className="my-auto">


                                <Form.Control
                                    type="number"
                                    value={form.numeroMedicosOtorrinolaringologia ? form.numeroMedicosOtorrinolaringologia : ''}
                                    name="numeroMedicosOtorrinolaringologia"
                                    onChange={handleChange} />


                            </Col>
                        </Row>
                    </Col>

                    {/*Proctología */}
                    <Col xs={12} md={4} className="mt-3">

                        <Row className="align-items-center">

                            {/*Etiqueta*/}
                            <Col xs={9} md={5} className="my-auto">
                                <Form.Label floatingInput>Proctología</Form.Label>
                            </Col>

                            {/*Selector*/}
                            <Col xs={3} md={4} className="my-auto">
                                <Form.Select value={form.especialidadProctologia ? form.especialidadProctologia : ''} onChange={handleChange} name="especialidadProctologia"
                                >
                                    <option value="" disabled>Seleccione una opción</option>
                                    <option value={true}>Si</option>
                                    <option value={false}>No</option>
                                </Form.Select>
                            </Col>

                            {/*Cantidad Proctología*/}
                            <Col xs={12} md={3} className="my-auto">
                                <Form.Control
                                    type="number"
                                    value={form.numeroMedicosProctologia ? form.numeroMedicosProctologia : ''}
                                    name="numeroMedicosProctologia"
                                    onChange={handleChange} />


                            </Col>
                        </Row>
                    </Col>

                    {/*Urología  */}
                    <Col xs={12} md={4} className="mt-3">

                        <Row className="align-items-center">

                            {/*Etiqueta*/}
                            <Col xs={9} md={5} className="my-auto">
                                <Form.Label floatingInput>Urología</Form.Label>
                            </Col>

                            {/*Selector*/}
                            <Col xs={3} md={4} className="my-auto">
                                <Form.Select value={form.especialidadUrologia ? form.especialidadUrologia : ''} onChange={handleChange} name="especialidadUrologia"
                                >
                                    <option value="" disabled>Seleccione una opción</option>
                                    <option value={true}>Si</option>
                                    <option value={false}>No</option>
                                </Form.Select>
                            </Col>

                            {/*Cantidad Urología*/}
                            <Col xs={12} md={3} className="my-auto">
                                <Form.Control
                                    type="number"
                                    value={form.numeroMedicosUrologia ? form.numeroMedicosUrologia : ''}
                                    name="numeroMedicosUrologia"
                                    onChange={handleChange} />


                            </Col>
                        </Row>
                    </Col>

                </Row>
            </Col>

        </Fragment>
    )

}

export default SA;