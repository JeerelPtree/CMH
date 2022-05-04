import React, { Fragment, useState, useEffect } from "react";
import { Container, Col, Row, FloatingLabel, Button, Form, OverlayTrigger, Tooltip, Table } from "react-bootstrap";
import ModalEditarRegistro from "../modals/ModalEditarRegistro";

function CRUD(props) {
    //Obtenemos las propiedades de la tabla
    const { handleChange, form, data, setData, tipo } = props

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [dataSelected, setDataSelected] = useState({
        id: '',
        nombre: '',
        numeroPacientes: '',
        ingresos: ''
    })

    //Función para manejar el cambio en un registro de la tabla
    const handleRegisterChange = async (e) => {

        e.persist();
        await setDataSelected(
            {
                ...dataSelected,
                [e.target.name]: e.target.value
            }
        );
    }

    const handleModalState = () => {

        //we modified the state modalIsOpen
        setModalIsOpen(!modalIsOpen);

    };

    const registerSelected = (item) => {
        setDataSelected(item)
        handleModalState()
    }

    return (
        <Fragment>
            <Table striped bordered hover className="align-middle text-center">
                <thead>
                    <tr>
                        <th>{tipo}</th>
                        <th>No. Pacientes</th>
                        <th>Ingresos</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map((elemento) => (
                            <tr key={elemento.id}>
                                <td>{elemento.nombre}</td>
                                <td>{elemento.numeroPacientes}</td>
                                <td>{elemento.ingresos}</td>
                                <td>
                                    <Row className="justify-content-center">
                                        <Col xs={3} md={3}>
                                            <Button variant="primary" onClick={() => { registerSelected(elemento) }}> Editar
                                            </Button>
                                        </Col>
                                        <Col xs={3} md={3} >
                                            <Button variant="danger" onClick={() => { }}> Eliminar
                                            </Button>
                                        </Col>
                                    </Row>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>

            <ModalEditarRegistro

                modalIsOpen={modalIsOpen}//bandera para abrir cerrar la modal
                handleModalState={handleModalState}//handleState para abrir cerrar la modal
                tipo={"Aseguradora"}//Titulo de la modal de editar
                handleChange={handleRegisterChange}//handleChange del registro de la aseguradora
                data={dataSelected}//registro a modificar (Aseguradora)

            />
        </Fragment>
    )
}

export default CRUD;