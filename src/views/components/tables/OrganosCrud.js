import React, { Fragment, useState } from "react";
import { Container, Col, Row, Button, Table, Alert } from "react-bootstrap";
import ModalEditarRegistro from "../modals/modals encuestas/Estructura/ModalEditarRegistro";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../globalStyles.css"
import Swal from "sweetalert2";

//TODO: hace falta poner tooltips en los botones

function OrganosCrud(props) {
    //Obtenemos las propiedades de la tabla
    const { variableForm, handleChangeRegistrosDelete, handleChangeRegistrosEdit, elemento } = props
    const [dataEdit, setDataEdit] = useState({})
    const [modalTriggerEditar, setModalTriggerEditar] = useState(false);
    const [indexEdit, setIndexEdit] = useState()

    const handleModalChangeEditar = () => {
        setModalTriggerEditar(!modalTriggerEditar);
    }

    const editarRegistro = async (index) => {

        setIndexEdit(index);
        await setDataEdit(variableForm[index])

        handleModalChangeEditar();
    }

    if (Object.keys(variableForm).length) {

        return (
            <Fragment>
                <Table striped hover responsive className="align-middle text-center overflow-hidden">
                    <thead className="thead-cmh">
                        <tr>
                            <th>{elemento}</th>
                            <th>Cantidad</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            variableForm && variableForm.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.nombre}</td>
                                    <td>{item.cantidad}</td>
                                    <td>
                                        <Row className="justify-content-center">
                                            <Col xs={3} md={3}>
                                                <Button variant="warning" onClick={() => { editarRegistro(index) }}><FontAwesomeIcon className="text-white" icon={faPen} />
                                                </Button>
                                            </Col>
                                            <Col xs={3} md={3} >
                                                <Button variant="danger" onClick={() => {

                                                    Swal.fire({
                                                        title: `¿Desea eliminar ${elemento.toLowerCase()} ` + item.nombre + '?',
                                                        icon: 'error',
                                                        iconHtml: '!',
                                                        confirmButtonText: 'Aceptar',
                                                        cancelButtonText: 'Cancelar',
                                                        confirmButtonColor: '#d33',
                                                        cancelButtonColor: '#3085d6',
                                                        showCancelButton: true,
                                                        showCloseButton: true
                                                    }).then((result) => {
                                                        if (result.isConfirmed) {
                                                            handleChangeRegistrosDelete(index)
                                                            Swal.fire('¡Registro eliminado!', '', 'success')
                                                        }
                                                    })

                                                }}> <FontAwesomeIcon icon={faTrash} />
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

                    modalIsOpen={modalTriggerEditar}//bandera para abrir cerrar la modal
                    handleModalState={handleModalChangeEditar}//handleState para abrir cerrar la modal
                    data={dataEdit}
                    index={indexEdit}
                    handleChangeRegistrosEdit={handleChangeRegistrosEdit}
                    elemento={elemento}
                //handleChange={handleChange}//handleChange del form

                />
            </Fragment>
        )
    } else {
        return (
            <Fragment>
            </Fragment>
        )
    }
}

export default OrganosCrud;