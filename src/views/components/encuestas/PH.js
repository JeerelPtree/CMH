import React, { Fragment, useState, useEffect } from "react";
import { Container, Col, Row, FloatingLabel, Button, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalAdd from "../modals/modals encuestas/PH/ModalAdd";

//we import css
import "../../../globalStyles.css"
import PHCrud from "../tables/PHCrud";

const currentYear = new Date().getFullYear();

function PH() {

    //declared the variables, constants ans states for this module
    const [form, setForm] = useState({ topDiagnosticos: [], topProcedimientos: [] })

    //module's functions
    const handleChange = async (e) => {

        e.persist();

        await setForm(
            {
                ...form,
                [e.target.name]: e.target.value
            }
        );

    }

    {/*Funciones para manejo del CRUD de Diagnósticos*/ }

    /**
     * It takes a diagnostic object and adds it to an array of diagnostic objects.
     * @param diagnostico - {
     */
    const handleChangeDiagnosticos = async (diagnostico) => {

        if (form.topDiagnosticos.length < 10) {
            if (form.topDiagnosticos.length > 0) {

                if (nameRegistroValidation(diagnostico.nombre, form.topDiagnosticos)) {

                    await setForm(
                        {
                            ...form,
                            topDiagnosticos: form.topDiagnosticos.concat(diagnostico)
                        }
                    );

                    return true
                } else {
                    return false
                }

            } else {

                await setForm(
                    {
                        ...form,
                        topDiagnosticos: form.topDiagnosticos.concat(diagnostico)
                    }
                );

                return true;

            }
        }

    }

    /**
     * We create an aux for our array, we remove the content for it index, we re asigned our aux to
     * diagnosticos array.
     * @param index - the index of the array that we want to remove
     */
    const handleChangeDiagnosticosDelete = async (index) => {

        //we create an aux for our array 
        let diagnosticosArray = form.topDiagnosticos;

        //we remove the content for it index
        diagnosticosArray.splice(index, 1);

        //we re asigned our aux to diagnosticos array
        setForm(
            {
                ...form,
                topDiagnosticos: diagnosticosArray
            }
        )

    }

    /**
     * It takes an index and a diagnostico object, and if the nameRegistroValidationEdit function
     * returns true, it replaces the content of the index of the topDiagnosticos array with the
     * diagnostico object.
     * @param index - the index of the array that we want to replace
     * @param diagnostico - {
     * @returns {
     *         ...form,
     *         topDiagnosticos: diagnosticosArray
     *     }
     */
    const handleChangeDiagnosticosEdit = async (index, diagnostico) => {

        if (nameRegistroValidationEdit(diagnostico.nombre, form.topDiagnosticos, index)) {

            //we create an aux for our array 
            let diagnosticosArray = form.topDiagnosticos;

            //we replaces the content for it index
            diagnosticosArray.splice(index, 1, diagnostico);

            await setForm(
                {
                    ...form,
                    topDiagnosticos: diagnosticosArray
                }
            );
            return true

        } else {
            return false;
        }

    }

    {/*Funciones para manejo del CRUD de Procedimientos*/ }

    /**
     * If the length of the array is less than 10, then check if the length of the array is greater
     * than 0, if it is, then check if the name of the object is already in the array, if it is not,
     * then add the object to the array, if it is, then return false. If the length of the array is 0,
     * then add the object to the array.
     * @param procedimiento - {
     * @returns return (
     *         &lt;div&gt;
     *             &lt;div className="row"&gt;
     *                 &lt;div className="col-md-12"&gt;
     *                     &lt;div className="card"&gt;
     *                         &lt;div className="card-header"&
     */
    const handleChangeProcedimientos = async (procedimiento) => {

        if (form.topProcedimientos.length < 10) {
            if (form.topProcedimientos.length > 0) {

                if (nameRegistroValidation(procedimiento.nombre, form.topProcedimientos)) {

                    await setForm(
                        {
                            ...form,
                            topProcedimientos: form.topProcedimientos.concat(procedimiento)
                        }
                    );

                    return true
                } else {
                    return false
                }

            } else {

                await setForm(
                    {
                        ...form,
                        topProcedimientos: form.topProcedimientos.concat(procedimiento)
                    }
                );

                return true;

            }
        }

    }

    /**
     * We create an aux for our array, we remove the content for it index, we re asigned our aux to
     * procedimientos array.
     * @param index - the index of the array that we want to remove
     */
    const handleChangeProcedimientosDelete = async (index) => {

        //we create an aux for our array 
        let procedimientosArray = form.topProcedimientos;

        //we remove the content for it index
        procedimientosArray.splice(index, 1);

        //we re asigned our aux to procedimientos array
        setForm(
            {
                ...form,
                topProcedimientos: procedimientosArray
            }
        )

    }

    /**
     * It takes an index and a procedimiento object, and then it replaces the content of the index with
     * the procedimiento object.
     * @param index - the index of the array that we want to change
     * @param procedimiento - {
     * @returns a boolean value.
     */
    const handleChangeProcedimientosEdit = async (index, procedimiento) => {

        if (nameRegistroValidationEdit(procedimiento.nombre, form.topProcedimientos, index)) {

            //we create an aux for our array 
            let procedimientosArray = form.topProcedimientos;

            //we replaces the content for it index
            procedimientosArray.splice(index, 1, procedimiento);

            await setForm(
                {
                    ...form,
                    topProcedimientos: procedimientosArray
                }
            );
            return true

        } else {
            return false;
        }

    }

    {/*Función para validar existencia de nombre para cuando se crea un registro*/ }
    /**
     * It takes a string and an array of objects as arguments and returns true if the string is not
     * found in the array of objects and false if it is found.
     * 
     * The function is not very efficient. It loops through the array of objects and compares the
     * string to the value of the nombre property of each object. If the string is found, the function
     * returns false. If the string is not found, the function returns true.
     * 
     * The function is not very efficient because it loops through the entire array of objects even if
     * the string is found in the first object.
     * 
     * The function can be made more efficient by using the Array.prototype.some() method. The some()
     * method loops through the array of objects and returns true if the callback function returns true
     * for any object in the array. The callback function returns true if the string is found in the
     * array of objects.
     * 
     * The some() method stops looping
     * @param name - the name that the user is trying to register
     * @param array - is an array of objects, each object has a property called nombre.
     * @returns A function that takes two parameters, name and array.
     */
    const nameRegistroValidation = (name, array) => {

        for (let i = 0; i < array.length; i++) {

            if (array[i].nombre.toLowerCase() === name.toLowerCase()) {

                return false; //the name exist

            } else if (i === array.length - 1) {

                return true; //doesnt exit the name

            }

        }

    }

    {/*Función para validar existencia de nombre para cuando se edita un registro*/ }
    /**
     * It checks if the name exists in the array, if it does, it returns false, if it doesn't, it
     * returns true.
     * @param name - the name of the new register
     * @param array - is the array of objects that I'm using to validate the name.
     * @param index - the index of the item in the array
     * @returns A boolean value.
     */
    const nameRegistroValidationEdit = (name, array, index) => {

        for (let i = 0; i < array.length; i++) {

            if (array[i].nombre.toLowerCase() === name.toLowerCase() && index != i) {

                return false; //the name exist

            } else if (i === array.length - 1) {

                return true; //doesnt exit the name

            }

        }

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

                            <T10Diagnosticos form={form} handleChange={handleChange} handleChangeDiagnosticos={handleChangeDiagnosticos} handleChangeDiagnosticosDelete={handleChangeDiagnosticosDelete} handleChangeDiagnosticosEdit={handleChangeDiagnosticosEdit} />

                            <T10Procedimientos form={form} handleChange={handleChange} handleChangeProcedimientos={handleChangeProcedimientos} handleChangeProcedimientosDelete={handleChangeProcedimientosDelete} handleChangeProcedimientosEdit={handleChangeProcedimientosEdit} />

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
    const form = props.form //Formulario
    const handleChange = props.handleChange //HandleChange del formulario
    const handleChangeDiagnosticos = props.handleChangeDiagnosticos;
    const handleChangeDiagnosticosDelete = props.handleChangeDiagnosticosDelete;
    const handleChangeDiagnosticosEdit = props.handleChangeDiagnosticosEdit;

    const [modalTriggerAdd, setModalTriggerAdd] = useState(false);


    const handleModalChangeAdd = () => {
        setModalTriggerAdd(!modalTriggerAdd);
    }

    return (
        <Fragment>

            <Col xs={12} md={12} className="mt-3">
                <Row className="justify-content-evenly align-items-center">

                    {/*Título de la sección*/}
                    <Col xs={12} md={12} className="mb-3">
                        <h4 className="text-center sub-title-cmh">Top 10 Diagnósticos</h4>
                    </Col>
                    <Col xs={12} md={12} className="mb-3">

                        <Row className="justify-content-center">

                            <Col xs={12} md={1} className="text-center">
                                <OverlayTrigger
                                    placement="right"
                                    overlay={
                                        <Tooltip id="tooltip-agregarDiagnostico">Agregar nuevo Diagnóstico</Tooltip>
                                    }>
                                    <Button variant="success" onClick={handleModalChangeAdd}><FontAwesomeIcon icon={faPlus} /></Button>
                                </OverlayTrigger>
                            </Col>

                        </Row>

                    </Col>

                    <PHCrud variableForm={form.topDiagnosticos} handleChange={handleChange} handleChangeRegistrosDelete={handleChangeDiagnosticosDelete} handleChangeRegistrosEdit={handleChangeDiagnosticosEdit} elemento={"Diagnóstico"} />

                </Row>
            </Col>
            <ModalAdd
                variableForm={form.topDiagnosticos}
                modalTriggerAdd={modalTriggerAdd}
                handleModalChangeAdd={handleModalChangeAdd}
                handleChangeRegistros={handleChangeDiagnosticos}
                elemento={"Diagnóstico"}
            />
        </Fragment>
    )

}

function T10Procedimientos(props) {

    //we obtain the props for this component
    const form = props.form //Formulario
    const handleChange = props.handleChange //HandleChange del formulario
    const handleChangeProcedimientos = props.handleChangeProcedimientos;
    const handleChangeProcedimientosDelete = props.handleChangeProcedimientosDelete;
    const handleChangeProcedimientosEdit = props.handleChangeProcedimientosEdit;

    const [modalTriggerAdd, setModalTriggerAdd] = useState(false);


    const handleModalChangeAdd = () => {
        setModalTriggerAdd(!modalTriggerAdd);
    }

    return (
        <Fragment>

            <Col xs={12} md={12} className="mt-3">
                <Row className="justify-content-evenly align-items-center">

                    {/*Título de la sección*/}
                    <Col xs={12} md={12} className="mb-3">
                        <h4 className="text-center sub-title-cmh">Top 10 Procedimientos</h4>
                    </Col>
                    <Col xs={12} md={12} className="mb-3">

                        <Row className="justify-content-center">

                            <Col xs={12} md={1} className="text-center">
                                <OverlayTrigger
                                    placement="right"
                                    overlay={
                                        <Tooltip id="tooltip-agregarProcedimiento">Agregar nuevo Procedimiento</Tooltip>
                                    }>
                                    <Button variant="success" onClick={handleModalChangeAdd}><FontAwesomeIcon icon={faPlus} /></Button>
                                </OverlayTrigger>
                            </Col>

                        </Row>

                    </Col>

                    <PHCrud variableForm={form.topProcedimientos} handleChange={handleChange} handleChangeRegistrosDelete={handleChangeProcedimientosDelete} handleChangeRegistrosEdit={handleChangeProcedimientosEdit} elemento={"Diagnóstico"} />

                </Row>
            </Col>
            <ModalAdd
                variableForm={form.topProcedimientos}
                modalTriggerAdd={modalTriggerAdd}
                handleModalChangeAdd={handleModalChangeAdd}
                handleChangeRegistros={handleChangeProcedimientos}
                elemento={"Procedimiento"}
            />
        </Fragment>
    )

}


export default PH;