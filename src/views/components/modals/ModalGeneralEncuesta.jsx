import React, { useState, useEffect } from "react";
import { Container, Row, Col, Modal, Button, Form } from "react-bootstrap";

import '../../../globalStyles.css'
import { RHo, E, SA, Outsourcing, PH, Ops_part1, TC, GP, CAP, SI, Com, Calidad, MKT } from '../encuestas/index_surveys';


function ModalGeneralEncuesta(props) {

    //we obtain the props
    const { modalIsOpen, handleModalState, dataEncuesta } = props
    const fullYear = new Date().getFullYear();
    const [form, setForm] = useState({})
    const dictionaryEncuestas = [
        {
            id: 1,
            content: <RHo form={form} setForm={setForm} />
        }, {
            id: 2,
            content: <SA form={form} setForm={setForm} />
        }, {
            id: 3,
            content: <E />
        }, {
            id: 4,
            content: <PH modalIsOpen={modalIsOpen} />
        }, {
            id: 5,
            content: <Ops_part1 />
        }, {
            id: 5.2,
            content: <RHo />
        }, {
            id: 6,
            content: <TC />
        }, {
            id: 7,
            content: <GP />
        }, {
            id: 8,
            content: <CAP />
        }, {
            id: 9,
            content: <SI />
        }, {
            id: 10,
            content: <Com />
        }, {
            id: 11,
            content: <Calidad />
        }, {
            id: 12,
            content: <RHo />
            //content: <MKT />
        }, {
            id: 13,
            content: <RHo />
        }, {
            id: 14,
            content: <RHo />
        }, {
            id: 15,
            content: <Outsourcing />
        }, {
            id: 16,
            content: <RHo />
        }, {
            id: 17,
            content: <RHo />
        }, {
            id: 18,
            content: <RHo />
        }, {
            id: 19,
            content: <RHo />
        }, {
            id: 20,
            content: <RHo />
        }
    ];

    useEffect(() => {
        setForm({})
    }, [modalIsOpen])


    const switchEncuesta = (idEncuesta) => {

        let content = null;

        for (let i = 0; i < dictionaryEncuestas.length; i++) {
            if (dictionaryEncuestas[i].id === idEncuesta) {
                content = dictionaryEncuestas[i].content;
                break;
            }

        }

        return content;
    }

    const prueba = (e) => {
        e.preventDefault();
        e.stopPropagation();

        console.log(form)
        //handleModalState()
    }

    const pruebaButton = () => {
        console.log('GUARDANDO ', form)
    }

    return (
        <Modal show={modalIsOpen} backdrop="static" keyboard={false} size="xl" arial-labelledby="contained-modal-title-vcenter" onHide={handleModalState} centered>
            <Form onSubmit={prueba}>
                <Modal.Header className="modal-cmh-header-footer" closeButton>
                    <Modal.Title className="title-cmh">
                        {`Prospectiva ${fullYear} - ${dataEncuesta.title}`}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>

                            <Col xs={12} md={12}>
                                {
                                    switchEncuesta(dataEncuesta.id) //we evaluate the id from encuesta and we pass to function 
                                }
                            </Col>

                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer className="modal-cmh-header-footer">
                    <Button variant="danger" onClick={handleModalState}>Cancelar</Button>
                    <Button variant="primary" onClick={prueba}>Guardar</Button>
                    <Button variant="success" type="submit">Enviar</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )

}

export default ModalGeneralEncuesta;