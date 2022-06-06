import React, { Fragment, useState } from "react";
import { Container, Col, Row, Button, Table, Alert, OverlayTrigger, Tooltip } from "react-bootstrap";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../globalStyles.css"
import Swal from "sweetalert2";

function GeneralCRUD(props) {

    //we obtain their props
    const { data, tableHeaders, pageOrigin, onClickDelete } = props

    /**
     * It returns a component based on the value of the variable pageOrigin
     * @returns A component that is being rendered.
     */
    const CRUDMenu = () => {

        switch (pageOrigin) {

            case "perfiles":

                return <CRUDPerfiles perfiles={data} onClickDelete={onClickDelete} />

        }

    }

    return (
        <Fragment>

            <Table striped hover responsive className="align-middle text-center ">
                <thead>
                    <tr>
                        {
                            tableHeaders.map((header, index) => {
                                return (
                                    <th key={index}>{header}</th>
                                )
                            })
                        }
                        <th>Acciones</th>
                    </tr>
                </thead>
                {
                    CRUDMenu()
                }
            </Table>

        </Fragment>
    )

}

function CRUDPerfiles(props) {

    //we obtaint their props
    const { perfiles, onClickDelete } = props

    return (
        <Fragment>
            <tbody>

                {

                    perfiles && perfiles.map((perfil, index) => {
                        return (

                            <tr key={index}>
                                <td>{`${perfil.firstName} ${perfil.middleName ? perfil.middleName : ''} ${perfil.lastName} ${perfil.lastNameM ? perfil.lastNameM : ''}`}</td>
                                <td>{perfil.email}</td>
                                <td>{perfil.rol}</td>
                                <td>{perfil.hospital}</td>
                                <td>
                                    <Row className="justify-content-center">
                                        <Col xs={6} md={3}>
                                            <ButtonEdit
                                                tooltip={`Editar a ${perfil.firstName} ${perfil.lastName}`}
                                            />
                                        </Col>
                                        <Col xs={6} md={3}>
                                            <ButtonDelete
                                                onClickDelete={onClickDelete}
                                                index={index}
                                                title={`a ${perfil.firstName} ${perfil.lastName}`}
                                                register="Perfil"
                                                tooltip={`Eliminar a ${perfil.firstName} ${perfil.lastName}`}
                                            />
                                        </Col>
                                    </Row>
                                </td>
                            </tr>
                        )
                    })
                }

            </tbody>


        </Fragment>
    )


}

function ButtonEdit(props) {

    //we obtain their props
    const { tooltip } = props

    return (
        <Fragment>

            <OverlayTrigger
                placement="top"
                overlay={
                    <Tooltip id="tooltip-rinion">{tooltip}</Tooltip>
                }>
                <Button variant="warning" size="sm">
                    <FontAwesomeIcon icon={faPen} className="text-white"></FontAwesomeIcon>
                </Button>
            </OverlayTrigger>

        </Fragment>
    )

}

function ButtonDelete(props) {

    //we obtain their props
    const { tooltip, onClickDelete, index, title, register } = props

    return (
        <Fragment>

            <OverlayTrigger
                placement="top"
                overlay={
                    <Tooltip id="tooltip-rinion">{tooltip}</Tooltip>
                }>
                <Button variant="danger" size="sm" onClick={() => {
                    Swal.fire({
                        title: `¿Desea eliminar ${title} ?`,
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
                            onClickDelete(index)
                            Swal.fire(`¡${register} eliminado!`, '', 'success')
                        }
                    })
                }}>
                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </Button>
            </OverlayTrigger>

        </Fragment>
    )

}

export default GeneralCRUD;