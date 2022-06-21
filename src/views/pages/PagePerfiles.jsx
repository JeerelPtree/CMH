import React, { Fragment, useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap"
import GeneralCRUD from "../components/CRUD/GeneralCRUD";
import AddButton from "../components/CRUD/addButton/AddButton";
import ModalGeneralAddCRUD from "../components/modals/ModalGeneralAddCRUD";

import DATAPERFILES from "../pages/json/perfiles.json"

function PagePerfiles() {

    //we asigned the constans, variables and states
    const [dataPerfiles, setDataPerfiles] = useState(DATAPERFILES)
    const tableHeaders = ['Nombre', 'Correo', 'Rol', 'Hospital']
    const [modalIsOpen, setModalIsOpen] = useState(false)

    //este hook se borrara
    const [triggerDelete, setTriggerDelete] = useState(false)
    //este useEffect sera diferente
    useEffect(() => {
        setDataPerfiles(DATAPERFILES)
    }, [triggerDelete])

    /**
     * If the modal is open, close it. If the modal is closed, open it
     */
    const handleModal = () => {

        setModalIsOpen(!modalIsOpen);

    }

    const onClickDelete = async (index) => {

        DATAPERFILES.splice(index, 1)
        await setDataPerfiles(DATAPERFILES)
        setTriggerDelete(!triggerDelete)

    }

    return (
        <Fragment>

            <Container className="mt-3">
                <Row>
                    <Col xs={12} md={12}>

                        <h1 className="title-cmh mb-3">Perfiles</h1>

                        <Row>

                            <Col xs={12} md={12} className="mb-3">
                                {
                                    //FILTERS
                                }
                            </Col>
                            <Col xs={12} md={12} className="mb-3">

                                {/*CRUD PERFILES*/}
                                <GeneralCRUD
                                    data={dataPerfiles}
                                    tableHeaders={tableHeaders}
                                    pageOrigin='perfiles'
                                    onClickDelete={onClickDelete}
                                />

                            </Col>
                        </Row>
                    </Col>
                </Row>

                <AddButton handleModal={handleModal} tooltipLabel='Agregar perfil' />
                <ModalGeneralAddCRUD handleModal={handleModal} modalIsOpen={modalIsOpen} modalTitle="Nuevo Perfil" option="perfil" sizeModal="lg" dataPrueba={dataPerfiles} />

            </Container>

        </Fragment>
    )

}

export default PagePerfiles;