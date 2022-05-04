import React, { Fragment, useState, useEffect } from "react";
import { Container, Col, Row, FloatingLabel, Button, Form, OverlayTrigger, Tooltip } from "react-bootstrap";


//we import css
import "../../../globalStyles.css"
import PHTable from "../tables/PHTable";

const currentYear = new Date().getFullYear();

function PH() {

    const pruebaDiagnosticos = [
        { name: 'Embarazo', value: 135 },
        { name: 'Hiperplasia Prostatica', value: 6 },
        { name: 'Litiasis Renal', value: 23 },
        { name: 'Fracturas de radio', value: 8 },
        { name: 'Hipertesion Arterial', value: 22 }
    ]
    //declared the variables, constants ans states for this module
    const [form, setForm] = useState({})
    const [diagnosticos, setDiagnosticos] = useState(pruebaDiagnosticos)

    //module's functions
    const handleChange = async (e) => {

        e.persist();

        console.log('entrando a hanldle change: ', e.target.name, e.target.value)
        await setForm(
            {
                ...form,
                [e.target.name]: e.target.value
            }
        );

        /*Falta por subir los archivos en forma de enlace a una API o base de datos, o asignarlos al campo de 
        serviciosHabilitadosHospital para posteriormente subirlos*/

        /*
        let reader = new FileReader();

        reader.readAsDataURL(e.target.files[0]);
        console.log(typeof (reader));
        reader.onload = (e) => {
            console.log("ing data ", e.target.result);
        }
        */



    }

    const prueba = () => {
        console.log(form)
    }

    return (
        <Fragment>
            <Container>
                <Row>
                    <Col xs={12} md={12}>
                        <Row>

                            <T10Diagnosticos form={form} handleChange={handleChange} filas={diagnosticos} />

                            <T10Procedimientos form={form} handleChange={handleChange} />

                            {/*Botón de enviar
                            <Col xs={12} md={6} className="mt-3 mb-5">
                                <Button variant="primary" onClick={prueba}> Enviar
                                </Button>
                            </Col>
                            */}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )


}


function T10Diagnosticos(props) {

    //we obtain the props for this component
    const form = props.form
    const handleChange = props.handleChange
    const diagnosticos = props.filas

    return (
        <Fragment>

            <Col xs={12} md={12} className="mt-3">
                <Row className="justify-content-evenly align-items-center">

                    {/*Titulo sección*/}
                    <Col xs={12} md={12} className="mb-3">
                        <h4 className="text-center sub-title-cmh">Top 10 Diagnósticos</h4>
                    </Col>

                    <PHTable handleChange={handleChange} form={form} />

                </Row>
            </Col>
        </Fragment>
    )

}

function T10Procedimientos(props) {

    //we obtain the props for this component
    const form = props.form
    const handleChange = props.handleChange

    return (
        <Fragment>

            <Col xs={12} md={12} className="mt-3">
                <Row>

                    {/*Titulo de sección*/}
                    <Col xs={12} md={12} className="mt-3">
                        <h4 className="text-center sub-title-cmh">Top 10 Procedimientos Quirúrgicos</h4>
                    </Col>

                </Row>
            </Col>
        </Fragment>
    )
}

export default PH;