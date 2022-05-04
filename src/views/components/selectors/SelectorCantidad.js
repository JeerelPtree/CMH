import React, { Fragment } from "react";
import { Form, FloatingLabel, Col, Row } from "react-bootstrap"
//import makeAnimated from 'react-select/animated';

//TODO: Volverlo un componente reutilizable

//const animatedComponents = makeAnimated();

function SelectorCantidad(props) {
    //we obtain the props for this component
    const { campoSelector, tituloSelector, handleChange, nombreSelector, campoCantidad, nombreCantidad } = props

    return (<Fragment>
        <Row className="align-items-center">
            {/*Selector*/}
            <Col xs={6} md={8} className="mb-3">
                <FloatingLabel controlId="floatingSelect" label={tituloSelector}>

                    <Form.Select value={campoSelector ? campoSelector : ''} onChange={handleChange} name={nombreSelector}
                    >
                        <option value="" disabled>Seleccione una opción</option>
                        <option value={true}>Si</option>
                        <option value={false}>No</option>
                    </Form.Select>
                </FloatingLabel>
            </Col>

            {/*Cantidad*/}
            <Col xs={6} md={4} className="mb-3">
                <FloatingLabel controlId="floatingSelect" label="Cantidad">

                    <Form.Control
                        type="number"
                        placeholder="Cantidad"
                        value={campoCantidad ? campoCantidad : ''}
                        name={nombreCantidad}
                        onChange={handleChange} />
                </FloatingLabel>

            </Col>
        </Row>
    </Fragment>)
}

export default SelectorCantidad;