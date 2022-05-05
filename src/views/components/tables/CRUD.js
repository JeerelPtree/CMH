import React, { Fragment, useState, useEffect } from "react";
import { Container, Col, Row, Button, Form, OverlayTrigger, Tooltip, Table, Alert } from "react-bootstrap";
import ModalEditarRegistro from "../modals/ModalEditarRegistro";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../globalStyles.css"

function CRUD(props) {
    //Obtenemos las propiedades de la tabla
    const { handleChange, form, handleChangeAseguradorasDelete } = props

    const [modalTriggerEditar, setModalTriggerEditar] = useState(false);


    const handleModalChangeEditar = () => {
        setModalTriggerEditar(!modalTriggerEditar);
    }

    const editarAseguradora = (index) => {
        return null;
    }

    console.log('AQUI', form, typeof form.aseguradoras)

    if (Object.keys(form.aseguradoras).length) {

        return (
            <Fragment>
                <Table striped hover responsive className="align-middle text-center ">
                    <thead className="thead-cmh">
                        <tr>
                            <th>Aseguradora</th>
                            <th>No. Pacientes</th>
                            <th>Ingresos</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            form.aseguradoras && form.aseguradoras.map((aseguradora, index) => (
                                <tr key={index}>
                                    <td>{aseguradora.nombre}</td>
                                    <td>{aseguradora.numeroPacientes}</td>
                                    <td>{aseguradora.ingresos}</td>
                                    <td>
                                        <Row className="justify-content-center">
                                            <Col xs={3} md={3}>
                                                <Button variant="warning" onClick={() => { editarAseguradora(index) }}><FontAwesomeIcon className="text-white" icon={faPen} />
                                                </Button>
                                            </Col>
                                            <Col xs={3} md={3} >
                                                <Button variant="danger" onClick={() => { handleChangeAseguradorasDelete(index) }}> <FontAwesomeIcon icon={faTrash} />
                                                </Button>
                                            </Col>
                                        </Row>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>

                {
                /*<ModalEditarRegistro

                modalIsOpen={modalTriggerEditar}//bandera para abrir cerrar la modal
                handleModalState={handleModalChangeEditar}//handleState para abrir cerrar la modal
                handleChange={handleChange}//handleChange del form

            />*/}
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <Container>
                    <Row className="justify-content-center">
                        <Col xs={12} md={8}>
                            <Alert variant="danger">
                                <Alert.Heading className="text-center">
                                    No hay ninguna aseguradora que mostrar.
                                </Alert.Heading>
                                <hr />
                                <p className="text-center">favor de agregar una nueva haciendo click en el botón de arriba.</p>
                            </Alert>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default CRUD;