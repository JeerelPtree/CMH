import React, { Fragment } from "react";
import { Form, FloatingLabel, Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap"
//import makeAnimated from 'react-select/animated';

//TODO: Volverlo un componente reutilizable

//const animatedComponents = makeAnimated();

function SelectorCantidad(props) {
    //we obtain the props for this component
    const { campoSelector, tituloSelector, handleChange, nombreSelector, campoCantidad, nombreCantidad } = props

    const HasCantidad = () => {
        if (campoSelector === 'true') {
            return (
                <Fragment>

                    <FloatingLabel controlId="floatingSelect" label="Cantidad">
                        <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip id="tooltip-rinion">Número de Médicos Credencializados en {tituloSelector}</Tooltip>
                            }>

                            <Form.Control
                                type="number"
                                placeholder="Cantidad"
                                value={campoCantidad ? campoCantidad : ''}
                                name={nombreCantidad}
                                onChange={handleChange}
                                min={0}
                                required={true}
                            />
                        </OverlayTrigger>
                    </FloatingLabel>

                </Fragment>
            )
        } else {

            return null;

        }
    }

    return (<Fragment>

        <Row className="justify-content-center">

            {/*Selector*/}
            <Col xs={12} md={6} className="mb-3">

                <span>
                    <OverlayTrigger
                        placement="top"
                        overlay={
                            <Tooltip id="tooltip-rinion">¿Cuenta con servicio en {tituloSelector}?</Tooltip>
                        }>

                        <FloatingLabel controlId="floatingSelect" label={`¿Cuentas con servicio en ${tituloSelector}?`}>

                            <Form.Select value={campoSelector ? campoSelector : ''} onChange={handleChange} name={nombreSelector} required={true}
                            >
                                <option value="" disabled>Seleccione una opción</option>
                                <option value={true}>Si</option>
                                <option value={false}>No</option>
                            </Form.Select>
                        </FloatingLabel>

                    </OverlayTrigger>
                </span>

            </Col>

            {/*Cantidad*/}
            < Col xs={12} md={2} className="mb-3">
                {

                    HasCantidad()
                }
            </Col>
        </Row>


    </Fragment >)
}

export default SelectorCantidad;