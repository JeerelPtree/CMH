import React, { Input, Fragment, useState, useEffect } from "react";
import { Stack, Container, Col, Row, FloatingLabel, Button, Form, OverlayTrigger, Tooltip, FormGroup, Table, InputGroup } from "react-bootstrap";
import { faPlus, faPerson, faHashtag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalAdd from "../modals/modals encuestas/TC/ModalAdd";
//import axios from "axios"


//we import css
import "../../../globalStyles.css"
import TCCrud from "../tables/TCCrud";
import listaAseguradoras from "./json/tipoClienteAseguradoras.json"
import listaGobierno from "./json/tipoClienteGobierno.json"
import listaEmpresas from "./json/tipoClienteEmpresas.json"


function TC(props) {

    const { modalIsOpen } = props

    //declared the variables, constants and states for this module
    const [form, setForm] = useState({})

    useEffect(() => {

        let dataAseguradoras = listaAseguradoras.map((aseguradora) => {
            aseguradora.numeroPacientes = ''
            aseguradora.ingresos = ''
            return aseguradora
        })

        let dataGobierno = listaGobierno.map((institucion) => {
            institucion.numeroPacientes = ''
            institucion.ingresos = ''
            return institucion
        })

        let dataEmpresas = listaEmpresas.map((empresa) => {
            empresa.numeroPacientes = ''
            empresa.ingresos = ''
            return empresa
        })

        setForm({
            aseguradoras: dataAseguradoras,
            gobierno: dataGobierno,
            empresas: dataEmpresas,
        })
    }, [modalIsOpen])

    //module's functions
    {/*Función para manejar el cambio en los campos del formulario de la modal*/ }
    const handleChange = async (e) => {

        e.persist();

        await setForm(
            {
                ...form,
                [e.target.name]: e.target.value
            }
        );
    }

    {/*Funciones para manejo del CRUD de Aseguradoras*/ }
    /**
     * If the form.aseguradoras array is empty, then add the aseguradora object to the array. If the
     * array is not empty, then check if the aseguradora object already exists in the array. If it
     * does, then return false. If it doesn't, then add the aseguradora object to the array.
     * @param aseguradora - {
     * @returns a boolean value.
     */
    /* const handleChangeAseguradoras = async (value, name, index, field) => {

        let auxArray = getArrayAseguradoras(value, index, name, field)

        console.log(form.aseguradoras);

        await setForm({
            ...form,
            aseguradoras: auxArray
        })

    } */

    const handleChangeTables = async (value, name, index, field, clientType) => {

        let auxArray = getArrayTables(value, index, name, field, clientType)

        switch (clientType) {
            case 'aseguradora':
                await setForm({
                    ...form,
                    aseguradoras: auxArray
                })
                break;
            case 'gobierno':
                await setForm({
                    ...form,
                    gobierno: auxArray
                })
                break;
            case 'empresas':
                await setForm({
                    ...form,
                    empresas: auxArray
                })
                break;

            default:
                break;
        }

    }

    const getArrayTables = (value, index, name, field, clientType) => {


        let arrayAux = clientType === 'aseguradora' ? listaAseguradoras :
            clientType === 'gobierno' ? listaGobierno :
                clientType === 'empresas' ? listaEmpresas : null;

        for (let i = 0; i < arrayAux.length; i++) {

            if (i === index && name === arrayAux[i].name && field === 'pacientes') {
                arrayAux[i].numeroPacientes = value;
                break
            } else if (i === index && name === arrayAux[i].name && field === 'ingresos') {
                arrayAux[i].ingresos = value;
                break
            }

        }

        return arrayAux

    }

    /*  const getArrayAseguradoras = (value, index, name, field) => {
 
 
         let arrayAux = listaAseguradoras;
 
         for (let i = 0; i < arrayAux.length; i++) {
 
             if (i === index && name === arrayAux[i].name && field === 'pacientes') {
                 arrayAux[i].numeroPacientes = value;
                 break
             } else if (i === index && name === arrayAux[i].name && field === 'ingresos') {
                 arrayAux[i].ingresos = value;
                 break
             }
 
         }
 
         return arrayAux
 
     } */

    {/*Funciones para manejo del CRUD de Gobierno*/ }
    /**
     * It takes an object as a parameter and adds it to an array in the state.
     * @param institucion - {
     * @returns {
     *         "id": "5e8f8f8f8f8f8f8f8f8f8f8f",
     *         "nombre": "Institucion 1",
     *         "tipo": "Gobierno"
     *     }
     */
    const handleChangeGobierno = async (institucion) => {

        if (form.gobierno.length > 0) {

            if (nameRegistroValidation(institucion.nombre, form.gobierno)) {

                await setForm(
                    {
                        ...form,
                        gobierno: form.gobierno.concat(institucion)
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
                    gobierno: form.gobierno.concat(institucion)
                }
            );

            return true;

        }

    }

    /**
     * We create an aux for our array, we remove the content for it index, we re asigned our aux to
     * gobierno array.
     * @param index - the index of the array you want to remove
     */
    const handleChangeGobiernoDelete = async (index) => {

        //we create an aux for our array 
        let gobiernoArray = form.gobierno;

        //we remove the content for it index
        gobiernoArray.splice(index, 1);

        //we re asigned our aux to gobierno array
        setForm(
            {
                ...form,
                gobierno: gobiernoArray
            }
        )

    }

    /**
     * It takes an index and an object, and replaces the object in the array at the given index.
     * @param index - the index of the array that we want to change
     * @param institucion - {
     * @returns {
     *         ...form,
     *         gobierno: gobiernoArray
     *     }
     */
    const handleChangeGobiernoEdit = async (index, institucion) => {


        if (nameRegistroValidationEdit(institucion.nombre, form.gobierno, index)) {

            //we create an aux for our array 
            let gobiernoArray = form.gobierno;

            //we replaces the content for it index
            gobiernoArray.splice(index, 1, institucion);

            await setForm(
                {
                    ...form,
                    gobierno: gobiernoArray
                }
            );

            return true

        } else {
            return false;
        }

    }

    {/*Funciones para manejo del CRUD de Empresas*/ }
    /**
     * It adds an object to an array, but only if the object doesn't already exist in the array.
     * @param empresa - {
     */
    const handleChangeEmpresas = async (empresa) => {

        if (form.empresas.length > 0) {

            if (nameRegistroValidation(empresa.nombre, form.empresas)) {

                await setForm(
                    {
                        ...form,
                        empresas: form.empresas.concat(empresa)
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
                    empresas: form.empresas.concat(empresa)
                }
            );

            return true;

        }

    }

    /**
     * We create an aux for our array, we remove the content for it index, we re asigned our aux to
     * empresas array.
     * @param index - the index of the array that we want to remove
     */
    const handleChangeEmpresasDelete = async (index) => {

        //we create an aux for our array 
        let empresasArray = form.empresas;

        //we remove the content for it index
        empresasArray.splice(index, 1);

        //we re asigned our aux to empresas array
        setForm(
            {
                ...form,
                empresas: empresasArray
            }
        )

    }

    /**
     * We create an aux for our array, we replaces the content for it index, and we set the state with
     * the new array.
     * @param index - the index of the array that we want to replace
     * @param empresa - {
     * @returns {
     *         ...form,
     *         empresas: empresasArray
     *     }
     */
    const handleChangeEmpresasEdit = async (index, empresa) => {


        if (nameRegistroValidationEdit(empresa.nombre, form.empresas, index)) {

            //we create an aux for our array 
            let empresasArray = form.empresas;

            //we replaces the content for it index
            empresasArray.splice(index, 1, empresa);

            await setForm(
                {
                    ...form,
                    empresas: empresasArray
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
     * for any of the objects. The callback function returns true if the string is found in the array
     * of objects.
     * 
     * The some() method stops looping through
     * @param name - the name that the user is trying to register
     * @param array - is an array of objects, each object has a property called nombre.
     * @returns A boolean value.
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
            <Container className="mt-3">
                <Row>
                    <Col xs={12} md={12}>
                        <Row>

                            <TotalAtendidos form={form} handleChange={handleChange} />

                            <Aseguradoras form={form} handleChange={handleChangeTables} />

                            <Gobierno form={form} handleChange={handleChangeTables} />

                            <Empresas form={form} handleChange={handleChangeTables} />

                            <Particulares form={form} handleChange={handleChange} />

                            {/* {/* Botón de enviar * /}
                            <Col xs={12} md={6} className="mt-3 mb-5">
                                <Button variant="primary" onClick={prueba}> Enviar
                                </Button>
                            </Col> */}


                        </Row>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )


}

function TotalAtendidos(props) {

    //we obtain the props for this component
    const form = props.form
    const handleChange = props.handleChange

    return (
        <Fragment>

            <Col xs={12} md={12} >
                <Row>

                    {/*Título de la sección*/}
                    <Col xs={12} md={12} className="mb-3">
                        <h4 className="text-center sub-title-cmh">Total de Pacientes Atendidos</h4>
                    </Col>

                    {/*Particulares*/}
                    <Col xs={12} md={6} className="mb-3">
                        <Row>
                            <Col xs={12} md={6}>
                                {/*Cantidad de pacientes*/}
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Particulares">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id="tooltip-habitaciones">Número de pacientes particulares atendidos</Tooltip>
                                        }>
                                        <Form.Control
                                            type="number"
                                            placeholder="Particulares"
                                            value={form.numeroPacientesParticulares ? form.numeroPacientesParticulares : ''}
                                            name="numeroPacientesParticulares"
                                            onChange={handleChange} />
                                    </OverlayTrigger>
                                </FloatingLabel>
                            </Col>

                            <Col xs={12} md={6}>
                                {/*Ingresos promedio*/}
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Ingresos">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id="tooltip-habitaciones">Ingresos promedio debido a pacientes particulares</Tooltip>
                                        }>
                                        <Form.Control
                                            type="number"
                                            placeholder="Ingresos"
                                            value={form.ingresosPacientesParticulares ? form.ingresosPacientesParticulares : ''}
                                            name="ingresosPacientesParticulares"
                                            onChange={handleChange} />
                                    </OverlayTrigger>
                                </FloatingLabel>
                            </Col>
                        </Row>
                    </Col>

                    {/*Aseguradora*/}
                    <Col xs={12} md={6} className="mb-3">

                        <Row>
                            <Col xs={12} md={6}>
                                {/*Cantidad de pacientes*/}
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Aseguradora">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id="tooltip-habitaciones">Número de pacientes atendidos con seguro privado</Tooltip>
                                        }>
                                        <Form.Control
                                            type="number"
                                            placeholder="Aseguradora"
                                            value={form.numeroPacientesAseguradora ? form.numeroPacientesAseguradora : ''}
                                            name="numeroPacientesAseguradora"
                                            onChange={handleChange} />
                                    </OverlayTrigger>
                                </FloatingLabel>
                            </Col>
                            <Col xs={12} md={6}>
                                {/*Ingresos promedio*/}
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Ingresos">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id="tooltip-habitaciones">Ingresos promedio debido a pacientes con seguro privado</Tooltip>
                                        }>
                                        <Form.Control
                                            type="number"
                                            placeholder="Ingresos"
                                            value={form.ingresosPacientesAseguradora ? form.ingresosPacientesAseguradora : ''}
                                            name="ingresosPacientesAseguradora"
                                            onChange={handleChange} />
                                    </OverlayTrigger>
                                </FloatingLabel>
                            </Col>
                        </Row>
                    </Col>

                    {/*Gobierno*/}
                    <Col xs={12} md={6} className="mb-3">

                        <Row>
                            <Col xs={12} md={6}>
                                {/*Cantidad de pacientes*/}
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Gobierno">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id="tooltip-habitaciones">Número de pacientes atendidos de Gobierno</Tooltip>
                                        }>
                                        <Form.Control
                                            type="number"
                                            placeholder="Gobierno"
                                            value={form.numeroPacientesGobierno ? form.numeroPacientesGobierno : ''}
                                            name="numeroPacientesGobierno"
                                            onChange={handleChange} />
                                    </OverlayTrigger>
                                </FloatingLabel>
                            </Col>
                            <Col xs={12} md={6}>
                                {/*Ingresos promedio*/}
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Ingresos">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id="tooltip-habitaciones">Ingresos promedio debido a pacientes del ambito gubernamental</Tooltip>
                                        }>
                                        <Form.Control
                                            type="number"
                                            placeholder="Ingresos"
                                            value={form.ingresosPacientesGobierno ? form.ingresosPacientesGobierno : ''}
                                            name="ingresosPacientesGobierno"
                                            onChange={handleChange} />
                                    </OverlayTrigger>
                                </FloatingLabel>
                            </Col>
                        </Row>
                    </Col>

                    {/*Empresas*/}
                    <Col xs={12} md={6} className="mb-3">
                        <Row>
                            <Col xs={12} md={6}>
                                {/*Cantidad de pacientes*/}
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Empresas">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id="tooltip-habitaciones">Número de pacientes atendidos de empresas privadas</Tooltip>
                                        }>
                                        <Form.Control
                                            type="number"
                                            placeholder="Empresas"
                                            value={form.numeroPacientesEmpresas ? form.numeroPacientesEmpresas : ''}
                                            name="numeroPacientesEmpresas"
                                            onChange={handleChange} />
                                    </OverlayTrigger>
                                </FloatingLabel>
                            </Col>
                            <Col xs={12} md={6}>
                                {/*Ingresos promedio*/}
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Ingresos">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id="tooltip-habitaciones">Ingresos promedio debido a pacientes de empresas privadas</Tooltip>
                                        }>
                                        <Form.Control
                                            type="number"
                                            placeholder="Ingresos"
                                            value={form.ingresosPacientesEmpresas ? form.ingresosPacientesEmpresas : ''}
                                            name="ingresosPacientesEmpresas"
                                            onChange={handleChange} />
                                    </OverlayTrigger>
                                </FloatingLabel>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Fragment>
    )

}

function Aseguradoras(props) {

    //we obtain the props for this component
    const form = props.form;
    const handleChange = props.handleChange

    const getTable = () => {

        return (
            <Fragment>
                {
                    form.aseguradoras && form.aseguradoras.map((aseguradora, index) => {
                        return (
                            <tr key={aseguradora.no}>
                                <td>{aseguradora.no}</td>
                                <td>{aseguradora.nombreAseguradora}</td>
                                <td>
                                    <GetInputGroup
                                        label={aseguradora.nombreAseguradora}
                                        value={aseguradora.numeroPacientes}
                                        name={aseguradora.name}
                                        handleChange={handleChange}
                                        index={index}
                                        icon={faPerson}
                                        placeholder="Nº Pxs"
                                        field='pacientes'
                                        tooltip='Numero total de pacientes'
                                        clientType='aseguradora'
                                    />
                                </td>
                                <td>
                                    <GetInputGroup
                                        label={aseguradora.nombreAseguradora}
                                        value={aseguradora.ingresos}
                                        name={aseguradora.name}
                                        handleChange={handleChange}
                                        index={index}
                                        icon={faHashtag}
                                        placeholder="Ingresos"
                                        field='ingresos'
                                        tooltip='Ingresos promedio'
                                        clientType='aseguradora'
                                    />
                                </td>
                            </tr>
                        )
                    })
                }
            </Fragment>
        )
    }

    return (
        <Fragment>

            {/*Título de la sección*/}
            <Col xs={12} md={12} className="mb-3 mt-3">
                <h4 className="text-center sub-title-cmh">Aseguradoras</h4>
            </Col>

            <Table className="text-center">
                <thead className="thead-cmh">
                    <tr>
                        <th className="col-md-2 col-xs-4">No.</th>
                        <th className="col-md-4 col-xs-4">Aseguradora</th>
                        <th className="col-md-3 col-xs-4">Total de pacientes</th>
                        <th className="col-md-3 col-xs-4">Ingresos promedio</th>
                    </tr>
                </thead>
                <tbody>

                    {

                        getTable()

                    }

                </tbody>
            </Table>

        </Fragment>
    )

}

function Gobierno(props) {


    //we obtain the props for this component
    const form = props.form //Formulario
    const handleChange = props.handleChange //HandleChange del formulario

    const getTable = () => {

        return (
            <Fragment>
                {
                    form.gobierno && form.gobierno.map((institucion, index) => {
                        return (
                            <tr key={institucion.no}>
                                <td>{institucion.no}</td>
                                <td>{institucion.nombreInstitucion}</td>
                                <td>
                                    <GetInputGroup
                                        label={institucion.nombreInstitucion}
                                        value={institucion.numeroPacientes}
                                        name={institucion.name}
                                        handleChange={handleChange}
                                        index={index}
                                        icon={faPerson}
                                        placeholder="Nº Pxs"
                                        field='pacientes'
                                        tooltip='Numero total de pacientes'
                                        clientType='gobierno'
                                    />
                                </td>
                                <td>
                                    <GetInputGroup
                                        label={institucion.nombreInstitucion}
                                        value={institucion.ingresos}
                                        name={institucion.name}
                                        handleChange={handleChange}
                                        index={index}
                                        icon={faHashtag}
                                        placeholder="Ingresos"
                                        field='ingresos'
                                        tooltip='Ingresos promedio'
                                        clientType='gobierno'
                                    />
                                </td>
                            </tr>
                        )
                    })
                }
            </Fragment>
        )
    }

    return (
        <Fragment>

            {/*Título de la sección*/}
            <Col xs={12} md={12} className="mb-3 mt-3">
                <h4 className="text-center sub-title-cmh">Gobierno</h4>
            </Col>

            <Table className="text-center">
                <thead className="thead-cmh">
                    <tr>
                        <th className="col-md-2 col-xs-4">No.</th>
                        <th className="col-md-4 col-xs-4">Institución</th>
                        <th className="col-md-3 col-xs-4">Total de pacientes</th>
                        <th className="col-md-3 col-xs-4">Ingresos promedio</th>
                    </tr>
                </thead>
                <tbody>

                    {

                        getTable()

                    }

                </tbody>
            </Table>

        </Fragment>
    )

}

function Empresas(props) {


    //we obtain the props for this component
    const form = props.form //Formulario
    const handleChange = props.handleChange //HandleChange del formulario

    const getTable = () => {

        return (
            <Fragment>
                {
                    form.empresas && form.empresas.map((empresa, index) => {
                        return (
                            <tr key={empresa.no}>
                                <td>{empresa.no}</td>
                                <td>{empresa.nombreEmpresa}</td>
                                <td>
                                    <GetInputGroup
                                        label={empresa.nombreEmpresa}
                                        value={empresa.numeroPacientes}
                                        name={empresa.name}
                                        handleChange={handleChange}
                                        index={index}
                                        icon={faPerson}
                                        placeholder="Nº Pxs"
                                        field='pacientes'
                                        tooltip='Numero total de pacientes'
                                        clientType='empresas'
                                    />
                                </td>
                                <td>
                                    <GetInputGroup
                                        label={empresa.nombreEmpresa}
                                        value={empresa.ingresos}
                                        name={empresa.name}
                                        handleChange={handleChange}
                                        index={index}
                                        icon={faHashtag}
                                        placeholder="Ingresos"
                                        field='ingresos'
                                        tooltip='Ingresos promedio'
                                        clientType='empresas'
                                    />
                                </td>
                            </tr>
                        )
                    })
                }
            </Fragment>
        )
    }

    return (
        <Fragment>

            {/*Título de la sección*/}
            <Col xs={12} md={12} className="mb-3 mt-3">
                <h4 className="text-center sub-title-cmh">Empresas</h4>
            </Col>

            <Table className="text-center">
                <thead className="thead-cmh">
                    <tr>
                        <th className="col-md-2 col-xs-4">No.</th>
                        <th className="col-md-4 col-xs-4">Empresa</th>
                        <th className="col-md-3 col-xs-4">Total de pacientes</th>
                        <th className="col-md-3 col-xs-4">Ingresos promedio</th>
                    </tr>
                </thead>
                <tbody>

                    {

                        getTable()

                    }

                </tbody>
            </Table>

        </Fragment>
    )

}

function Particulares(props) {

    //we obtain the props for this component
    const form = props.form
    const handleChange = props.handleChange

    return (
        <Fragment>

            <Col xs={12} md={12} >
                <Row>

                    {/*Título de la sección*/}
                    <Col xs={12} md={12} className="mb-3 mt-3">
                        <h4 className="text-center sub-title-cmh">Particulares</h4>
                    </Col>

                    {/*Crédito Hospital*/}
                    <Col xs={12} md={6} className="mb-3">
                        <Row>
                            <Col xs={12} md={12} className="mb-3">
                                <h5 className="text-center title-cmh">Crédito Hospital</h5>
                            </Col>
                            <Col xs={12} md={6}>
                                {/*Cantidad de pacientes*/}
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Número de Pacientes">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id="tooltip-habitaciones">Número de pacientes con crédito hospital</Tooltip>
                                        }>
                                        <Form.Control
                                            type="number"
                                            placeholder="Número de Pacientes"
                                            value={form.pacientesCreditoHospital ? form.pacientesCreditoHospital : ''}
                                            name="pacientesCreditoHospital"
                                            onChange={handleChange} />
                                    </OverlayTrigger>
                                </FloatingLabel>
                            </Col>

                            <Col xs={12} md={6}>
                                {/*Ingresos promedio*/}
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Ingresos">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id="tooltip-habitaciones">Ingresos promedio debido a pacientes con crédito hospital</Tooltip>
                                        }>
                                        <Form.Control
                                            type="number"
                                            placeholder="Ingresos"
                                            value={form.ingresosCreditoHospital ? form.ingresosCreditoHospital : ''}
                                            name="ingresosCreditoHospital"
                                            onChange={handleChange} />
                                    </OverlayTrigger>
                                </FloatingLabel>
                            </Col>
                        </Row>
                    </Col>

                    {/*Alivio Capital*/}
                    <Col xs={12} md={6} className="mb-3">
                        <Row>
                            <Col xs={12} md={12} className="mb-3">
                                <h5 className="text-center title-cmh">Alivio Capital</h5>
                            </Col>
                            <Col xs={12} md={6}>
                                {/*Cantidad de pacientes*/}
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Número de Pacientes">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id="tooltip-habitaciones">Número de pacientes de alivio capital</Tooltip>
                                        }>
                                        <Form.Control
                                            type="number"
                                            placeholder="Número de Pacientes"
                                            value={form.pacientesAlivioCapital ? form.pacientesAlivioCapital : ''}
                                            name="pacientesAlivioCapital"
                                            onChange={handleChange} />
                                    </OverlayTrigger>
                                </FloatingLabel>
                            </Col>

                            <Col xs={12} md={6}>
                                {/*Ingresos promedio*/}
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Ingresos">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id="tooltip-habitaciones">Ingresos promedio debido a pacientes de alivio capital</Tooltip>
                                        }>
                                        <Form.Control
                                            type="number"
                                            placeholder="Ingresos"
                                            value={form.ingresosAlivioCapital ? form.ingresosAlivioCapital : ''}
                                            name="ingresosAlivioCapital"
                                            onChange={handleChange} />
                                    </OverlayTrigger>
                                </FloatingLabel>
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </Col>
        </Fragment>
    )

}

function GetInputGroup(props) {

    const { label, value, name, handleChange, index, icon, placeholder, field, tooltip, clientType } = props;

    const handleChangeInput = async (e) => {

        await handleChange(e.target.value, e.target.name, index, field, clientType)

    }

    return (
        <Fragment>

            <span>
                <OverlayTrigger
                    placement="top"
                    overlay={
                        <Tooltip id="tooltip-rinion">{`${tooltip}`}</Tooltip>
                    }>

                    <InputGroup>
                        <InputGroup.Text className="input-group-text-primary"><FontAwesomeIcon icon={icon} /></InputGroup.Text>
                        <Form.Control type="number" min={0} placeholder={placeholder}
                            value={value ? value : ''}
                            name={name}
                            onChange={handleChangeInput} />

                    </InputGroup>
                </OverlayTrigger>
            </span>

        </Fragment>
    )

}

export default TC;