import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import ModalAddPerfil from "./modals perfiles/ModalAddPerfil";

function ModalGeneralAddCRUD(props) {

    const { handleModal, modalIsOpen, modalTitle, option, sizeModal, dataPrueba } = props

    const [form, setForm] = useState({})

    useEffect(() => {
        setForm({})
    }, [modalIsOpen])

    /**
     * A function that handles the change of the form.
     */
    const handleChangeForm = async (e) => {

        e.persist();

        const { name, value } = e.target
        await setForm({
            ...form,
            [name]: value
        })

    }

    /**
     * A function that returns a component depending on the value of the variable option.
     */
    const modalMenu = () => {

        switch (option) {

            case "perfil":
                return (<ModalAddPerfil form={form} handleChangeForm={handleChangeForm} />)

        }

    }

    const handleSubmit = async (e) => {

        e.preventDefault();
        e.stopPropagation();

        switch (option) {

            case "perfil":
                dataPrueba.push(form)
                break;

        }

        handleModal();

    }

    return (
        <Modal show={modalIsOpen} backdrop="static" keyboard={false} size={sizeModal} arial-labelledby="contained-modal-title-vcenter" onHide={handleModal} centered>
            <Form onSubmit={handleSubmit}>
                <Modal.Header className="modal-cmh-header-footer" closeButton>
                    <Modal.Title className="title-cmh">
                        {modalTitle}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        modalMenu()
                    }
                </Modal.Body>
                <Modal.Footer className="modal-cmh-header-footer">
                    <Button variant="danger" onClick={handleModal}>Cancelar</Button>
                    <Button variant="primary" type="submit">Guardar</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default ModalGeneralAddCRUD;