import React, { Fragment } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { Container, Col, Row } from "react-bootstrap";
import MultiSelect from "../components/selectors/MultiSelect";

const optionsCert = [
    { value: 'ISO 9001', label: 'ISO 9001' },
    { value: 'CSG', label: 'CSG' },
    { value: 'CertCan', label: 'Certificación Canadiense' },
    { value: 'JCI', label: 'JCI' },
    { value: 'DistH', label: 'Distintivo "H"' },
];
const optionsServ = [
    { value: 'Service 1', label: 'Service 1' },
    { value: 'Service 2', label: 'Service 2' },
    { value: 'Service 3', label: 'Service 3' },
];

const currentYear = new Date().getFullYear();
const lastYear = currentYear - 1;

class PagePrueba extends React.Component {

    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <h1>Encuesta RHo</h1>
                </Container>
                <Container className="mt-5 mb-5">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBusinessName">
                            <Form.Label>Razón Social</Form.Label>
                            <Form.Control type="text" placeholder="Ingresa razón social" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formCommercialName">
                            <Form.Label>Nombre Comercial</Form.Label>
                            <Form.Control type="text" placeholder="Ingresa nombre comercial" />
                        </Form.Group>

                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formAssociatedSince">
                                    <Form.Label>Hospital Asociado al CMH desde:</Form.Label>
                                    <Form.Control type="date" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-2 mt-4" controlId="formFoundationAssociated">
                                    <Form.Check type="checkbox" label="Socio Fundador CMH" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formFoundation">
                                    <Form.Label>Fecha de Fundación del Hospital:</Form.Label>
                                    <Form.Control type="date" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBuildingArea">
                                    <Form.Label>Área construida:</Form.Label>
                                    <Form.Control type="number" placeholder="En metros cuadrados" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formHospitalLevel">
                                    <Form.Label>Nivel de Atención Hospitalaria:</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Selecciona una opción</option>
                                        <option value="Hospital General">Hospital General</option>
                                        <option value="Hospital Especializado">Hospital Especializado</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBedsHospitalization">
                                    <Form.Label>No. Camas de Hospitalización:</Form.Label>
                                    <Form.Control type="number" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBedsUCIA">
                                    <Form.Label>No. Camas UCIA:</Form.Label>
                                    <Form.Control type="number" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBedsUCIN">
                                    <Form.Label>No. Camas UCIN:</Form.Label>
                                    <Form.Control type="number" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formSurgeryRooms">
                                    <Form.Label>No. Salas de Cirugía:</Form.Label>
                                    <Form.Control type="number" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formCertifiedDoctors">
                                    <Form.Label>Número de Médicos credencializados:</Form.Label>
                                    <Form.Control type="number" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formColaborators">
                                    <Form.Label>Número de colaboradores:</Form.Label>
                                    <Form.Control type="number" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group className="mb-3" controlId="formHospitalLevel">
                            <Form.Label>Acreditación(es) Hospitalaria(s):</Form.Label>
                            <MultiSelect options={optionsCert} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formHospitalServices">
                            <Form.Label>Servicios habilitados en su Hospital:</Form.Label>
                            <MultiSelect options={optionsServ} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formReview">
                            <Form.Label>Reseña de hospital</Form.Label>
                            <Form.Control type="text" as="textarea" rows={5} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formReview">
                            <Form.Label>Lo Destacado del Hospital en el año {lastYear}</Form.Label>
                            <Form.Control type="text" as="textarea" rows={5} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>
            </Fragment>
        )
    }

}

export default PagePrueba;