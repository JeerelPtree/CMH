import React, { Fragment, useState, useEffect } from "react";
import { Container, Col, Row, FloatingLabel, InputGroup, Button, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import YNOptions from "./json/yesOrNotOptions.json"
import ModalAdd from "../modals/modals encuestas/Com/ModalAdd";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ComCrud from "../tables/ComCrud";

//we import css
import "../../../globalStyles.css"

const currentYear = new Date().getFullYear();

function MKT() {

    //declared the variables, constants ans states for this module
    const [form, setForm] = useState({ proveedores: [] })


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


    {/*Funciones para manejo del CRUD de Proveedores*/ }

    /**
     * It checks if the name of the provider is already registered in the database
     * @param proveedor - {
     * @returns a boolean value.
     */
    const handleChangeProveedores = async (proveedor) => {

        if (form.proveedores.length < 8) {
            /* Checking if the name of the provider is already registered in the database. */
            if (form.proveedores.length > 0) {

                /* Checking if the name of the provider is already registered in the database. */
                if (nameRegistroValidation(proveedor.nombre, form.proveedores)) {

                    await setForm(
                        {
                            ...form,
                            proveedores: form.proveedores.concat(proveedor)
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
                        proveedores: form.proveedores.concat(proveedor)
                    }
                );

                return true;

            }
        }

    }

    /**
     * We create an aux for our array, we remove the content for it index, we re asigned our aux to
     * proveedores array.
     * @param index - the index of the array that we want to remove
     */
    const handleChangeProveedoresDelete = async (index) => {

        //we create an aux for our array 
        let proveedoresArray = form.proveedores;

        //we remove the content for it index
        proveedoresArray.splice(index, 1);

        //we re asigned our aux to proveedores array
        setForm(
            {
                ...form,
                proveedores: proveedoresArray
            }
        )

    }

    /**
     * We are replacing the content of an array for a specific index.
     * @param index - the index of the array that we want to replace.
     * @param proveedor - {
     * @returns a boolean value.
     * </code>
     */
    const handleChangeProveedoresEdit = async (index, proveedor) => {

        /* Replacing the content of an array for a specific index. */
        if (nameRegistroValidationEdit(proveedor.nombre, form.proveedores, index)) {

            //we create an aux for our array 
            let proveedoresArray = form.proveedores;

            //we replaces the content for it index
            proveedoresArray.splice(index, 1, proveedor);

            await setForm(
                {
                    ...form,
                    proveedores: proveedoresArray
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

                            <MarketingHospitalario form={form} handleChange={handleChange} />

                            <RedesSociales form={form} handleChange={handleChange} />

                            {
                                //<SitioWeb form={form} handleChange={handleChange} />


                                //<PromocionVentas form={form} handleChange={handleChange} />

                                //<InvestigacionMercado form={form} handleChange={handleChange} />
                            }

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

function MarketingHospitalario(props) {
    const form = props.form
    const handleChange = props.handleChange

    return (
        <Fragment>
            <Col xs={12} md={12} className="mt-3">
                <Row>
                    {/*Título de la sección de la encuesta*/}
                    <Col xs={12} md={12} className="mb-3">
                        <h4 className="text-center sub-title-cmh">Marketing Hospitalario</h4>
                    </Col>

                    {/*¿Cuentan con Área de Mercadotecnia?*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetSelector
                            label="¿Cuentan con Área de Mercadotecnia?"
                            value={form.areaMercadotecnia}
                            name={"areaMercadotecnia"}
                            handleChange={handleChange}
                            options={YNOptions}
                            isRequired={false}
                            show={true}
                        />
                    </Col>

                    {/*¿El área de Mercadotecnia es Propia?*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetSelector
                            label="¿El área de Mercadotecnia es Propia?"
                            value={form.areaMercadotecniaPropia}
                            name={"areaMercadotecniaPropia"}
                            handleChange={handleChange}
                            options={YNOptions}
                            isRequired={false}
                            show={true}
                        />
                    </Col>

                    {/*¿Elaboran un Plan de Mercadotecnia Anualmente?*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetSelector
                            label="¿Plan de Mercadotecnia Anual?"
                            value={form.planAnualMercadotecnia}
                            name={"planAnualMercadotecnia"}
                            handleChange={handleChange}
                            options={YNOptions}
                            isRequired={false}
                            show={true}
                        />
                    </Col>

                    <PlanMercadotecnia form={form} handleChange={handleChange} />

                </Row>
            </Col>

        </Fragment>
    )
}

function PlanMercadotecnia(props) {

    /* Destructuring the props object. */
    const form = props.form;
    const handleChange = props.handleChange;

    if (form.planAnualMercadotecnia == 1) {
        return (
            <Fragment>
                <Col xs={12} md={12} className="mt-3">
                    <Row className="justify-content-evenly">
                        {/*Título de la sección de la encuesta*/}
                        <Col xs={12} md={12} className="mb-3">
                            <h5 className="text-center title-cmh">¿Cuáles de las siguientes actividades son desarrolladas como parte del Plan Anual de Mercadotecnia?</h5>
                        </Col>
                        {/*Comunicación Digital/Redes Sociales*/}
                        <Col xs={12} md={4} className="mb-3">
                            <GetSelector
                                label="Comunicación Digital/Redes Sociales"
                                value={form.comunicacionDigital}
                                name={"comunicacionDigital"}
                                handleChange={handleChange}
                                options={YNOptions}
                                isRequired={false}
                                show={true}
                            />
                        </Col>

                        {/*Promoción de Ventas/Eventos/Congresos*/}
                        <Col xs={12} md={4} className="mb-3">
                            <GetSelector
                                label="Promoción de Ventas/Eventos/Congresos"
                                value={form.promocionVentas}
                                name={"promocionVentas"}
                                handleChange={handleChange}
                                options={YNOptions}
                                isRequired={false}
                                show={true}
                            />
                        </Col>

                        {/*Investigación de Mercados*/}
                        <Col xs={12} md={4} className="mb-3">
                            <GetSelector
                                label="Investigación de Mercados"
                                value={form.investigacionMercados}
                                name={"investigacionMercados"}
                                handleChange={handleChange}
                                options={YNOptions}
                                isRequired={false}
                                show={true}
                            />
                        </Col>
                    </Row>
                </Col>
            </Fragment>
        );
    }
}

function RedesSociales(props) {
    const form = props.form
    const handleChange = props.handleChange

    return (
        <Fragment>
            <Col xs={12} md={12} className="mt-3">
                <Row>
                    {/*Título de la sección de la encuesta*/}
                    <Col xs={12} md={12} className="mb-3">
                        <h4 className="text-center sub-title-cmh">Redes Sociales y Presencia Web</h4>
                    </Col>

                    {/*Facebook*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetSelector
                            label="Facebook"
                            value={form.facebook}
                            name={"facebook"}
                            handleChange={handleChange}
                            options={YNOptions}
                            isRequired={false}
                            show={true}
                        />
                    </Col>

                    {/*Twitter*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetSelector
                            label="Twitter"
                            value={form.twitter}
                            name={"twitter"}
                            handleChange={handleChange}
                            options={YNOptions}
                            isRequired={false}
                            show={true}
                        />
                    </Col>

                    {/*LinkedIn*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetSelector
                            label="LinkedIn"
                            value={form.linkedIn}
                            name={"linkedIn"}
                            handleChange={handleChange}
                            options={YNOptions}
                            isRequired={false}
                            show={true}
                        />
                    </Col>

                    {/*Instagram*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetSelector
                            label="Instagram"
                            value={form.instagram}
                            name={"instagram"}
                            handleChange={handleChange}
                            options={YNOptions}
                            isRequired={false}
                            show={true}
                        />
                    </Col>

                    {/*YouTube*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetSelector
                            label="YouTube"
                            value={form.youTube}
                            name={"youTube"}
                            handleChange={handleChange}
                            options={YNOptions}
                            isRequired={false}
                            show={true}
                        />
                    </Col>

                    {/*Otra*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInput
                            label="Otra, ¿Cuál?"
                            value={form.otraRedSocial}
                            name="otraRedSocial"
                            handleChange={handleChange}
                            tooltipDescrip="Especifique que otra red social utiliza"
                            placement="top"
                            type="text"
                            isRequired={false}
                            show={true}
                        />
                    </Col>

                </Row>
            </Col>

        </Fragment>
    )
}


function AspectosCompras(props) {

    /* Destructuring the props object. */
    const form = props.form;
    const handleChange = props.handleChange;
    const sustentoOptions = props.sustentoOptions;
    const inventarioOptions = props.inventarioOptions;

    return (
        <Fragment>
            <Col xs={12} md={12} className="mt-3">
                <Row className="justify-content-evenly">
                    {/*Título de la sección de la encuesta*/}
                    <Col xs={12} md={12} className="mb-3">
                        <h4 className="text-center sub-title-cmh">Aspectos Generales de Compras</h4>
                    </Col>

                    {/*¿Cuenta con plataforma electrónica de Compras?*/}
                    <Col xs={12} md={6} className="mb-3">
                        <GetSelector
                            label="¿Cuenta con plataforma electrónica de Compras?"
                            value={form.plataformaElectronicaCompras}
                            name={"plataformaElectronicaCompras"}
                            handleChange={handleChange}
                            options={YNOptions}
                            isRequired={false}
                            show={true}
                        />
                    </Col>

                    {/*Marca Actual*/}
                    <Col xs={12} md={6} className="mb-3">
                        <GetInput
                            label="Marca Actual"
                            value={form.marcaActualPEC}
                            name="marcaActualPEC"
                            handleChange={handleChange}
                            tooltipDescrip="Marca actual de la plataforma Electrónica de Compras"
                            placement="top"
                            type="text"
                            isRequired={false}
                            show={form.plataformaElectronicaCompras}
                        />
                    </Col>

                    {/*¿Cuenta con Planeación de compras?*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetSelector
                            label="¿Cuenta con Planeación de compras?"
                            value={form.planeacionCompras}
                            name={"planeacionCompras"}
                            handleChange={handleChange}
                            options={YNOptions}
                            isRequired={false}
                            show={true}
                        />
                    </Col>

                    {/*¿Cuántos pedidos promedio se emiten a la semana?*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInput
                            label="Pedidos por semana"
                            value={form.promedioPedidosSemanal}
                            name="promedioPedidosSemanal"
                            handleChange={handleChange}
                            tooltipDescrip="¿Cuántos pedidos promedio se emiten a la semana?"
                            placement="top"
                            type="number"
                            isRequired={false}
                            show={true}
                        />
                    </Col>

                    {/*Empleados en el Departamento de Compras*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInput
                            label="Empleados de Compras"
                            value={form.empleadosDepartamentoCompras}
                            name="empleadosDepartamentoCompras"
                            handleChange={handleChange}
                            tooltipDescrip="Cantidad de empleados en el Departamento de Compras"
                            placement="top"
                            type="number"
                            isRequired={false}
                            show={true}
                        />
                    </Col>

                    {/*Costo Anual del Departamento de Compras*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInput
                            label="Costo Anual Compras"
                            value={form.costoAnualDepartamentoCompras}
                            name="costoAnualDepartamentoCompras"
                            handleChange={handleChange}
                            tooltipDescrip="Costo Anual del Departamento de Compras"
                            placement="top"
                            type="number"
                            isRequired={false}
                            show={true}
                        />
                    </Col>

                    {/*Nº de Proveedores Activos*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInput
                            label="Proveedores Activos"
                            value={form.numeroProveedoresActivos}
                            name="numeroProveedoresActivos"
                            handleChange={handleChange}
                            tooltipDescrip="Número de Proveedores Activos"
                            placement="top"
                            type="number"
                            isRequired={false}
                            show={true}
                        />
                    </Col>

                    {/*¿Su Hospital lleva a cabo una supervisión de ahorros?*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetSelector
                            label="¿Se realiza supervisión de ahorros?"
                            value={form.supervisionAhorros}
                            name={"supervisionAhorros"}
                            handleChange={handleChange}
                            options={YNOptions}
                            isRequired={false}
                            show={true}
                        />
                    </Col>

                    {/*¿Cuál fue el ahorro real anual de las compras realizadas?*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInputFormat
                            label="Ahorro en compras"
                            value={form.ahorroAnualCompras}
                            name="ahorroAnualCompras"
                            handleChange={handleChange}
                            tooltipDescrip="¿Cuál fue el ahorro real anual de las compras realizadas?"
                            type="number"
                            isRequired={true}
                            placement="top"
                            show={true}
                            isRight={true}
                            rightSymbol="%"
                        />
                    </Col>

                    {/*% Compras de Electrónicas*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInputFormat
                            label="Compras de Electrónicas"
                            value={form.porcentajeComprasElectronicas}
                            name="porcentajeComprasElectronicas"
                            handleChange={handleChange}
                            tooltipDescrip="Porcentaje de compras de Electrónicas"
                            type="number"
                            isRequired={true}
                            placement="top"
                            show={true}
                            isRight={true}
                            rightSymbol="%"
                        />
                    </Col>

                    {/*% Compras de Urgencias promedio mensual*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInputFormat
                            label="Compras Urgencias"
                            value={form.porcentajeComprasUrgencias}
                            name="porcentajeComprasUrgencias"
                            handleChange={handleChange}
                            tooltipDescrip="Porcentaje de compras de Urgencias promedio mensual"
                            type="number"
                            isRequired={true}
                            placement="top"
                            show={true}
                            isRight={true}
                            rightSymbol="%"
                        />
                    </Col>

                    {/*¿Cómo sustenta el área de compras el ahorro obtenido?*/}
                    <Col xs={12} md={6} className="mb-3">
                        <GetSelector
                            label="¿Cómo sustenta el área de compras el ahorro obtenido?"
                            value={form.sustentoAhorroObtenido}
                            name={"sustentoAhorroObtenido"}
                            handleChange={handleChange}
                            options={sustentoOptions}
                            isRequired={false}
                            show={true}
                        />
                    </Col>

                    {/*Financiamiento de proveedores (días de crédito promedio)*/}
                    <Col xs={12} md={3} className="mb-3">
                        <GetInput
                            label="Días Financiamiento"
                            value={form.diasFinanciamientoProveedores}
                            name="diasFinanciamientoProveedores"
                            handleChange={handleChange}
                            tooltipDescrip="Días de crédito promedio de financiamiento de proveedores"
                            type="number"
                            isRequired={true}
                            placement="top"
                            show={true}
                        />
                    </Col>

                    {/*Rotación de Inventario*/}
                    <Col xs={12} md={3} className="mb-3">
                        <GetSelector
                            label="Rotación de Inventario"
                            value={form.rotacionInventario}
                            name={"rotacionInventario"}
                            handleChange={handleChange}
                            options={inventarioOptions}
                            isRequired={false}
                            show={true}
                        />
                    </Col>

                    {/*Describe brevemente cuáles son los criterios del márgen para venta de medicamentos*/}
                    <Col xs={12} md={6} className="mb-3">
                        <GetInput
                            label="Criterios del márgen para venta de medicamentos"
                            value={form.criteriosVentaMedicamentos}
                            name="criteriosVentaMedicamentos"
                            handleChange={handleChange}
                            tooltipDescrip="Describe brevemente cuáles son los criterios del márgen para venta de medicamentos"
                            type="text"
                            isRequired={true}
                            placement="top"
                            show={true}
                            isTextArea={true}
                            style={{ height: '150px' }}
                        />
                    </Col>

                    {/*Describe brevemente cuáles son los criterios del márgen en insumos médicos*/}
                    <Col xs={12} md={6} className="mb-3">
                        <GetInput
                            label="Criterios del márgen en insumos médicos"
                            value={form.criteriosInsumosMedicos}
                            name="criteriosInsumosMedicos"
                            handleChange={handleChange}
                            tooltipDescrip="Describe brevemente cuáles son los criterios del márgen en insumos médicos"
                            type="text"
                            isRequired={true}
                            placement="top"
                            show={true}
                            isTextArea={true}
                            style={{ height: '150px' }}
                        />
                    </Col>
                </Row>
            </Col>
        </Fragment>
    )
}

function CifrasMedicamentosInsumos(props) {

    //we obtain the props for this component
    const form = props.form //Formulario
    const handleChange = props.handleChange //HandleChange del formulario
    const handleChangeProveedores = props.handleChangeProveedores;
    const handleChangeProveedoresDelete = props.handleChangeProveedoresDelete;
    const handleChangeProveedoresEdit = props.handleChangeProveedoresEdit;

    const [modalTriggerAdd, setModalTriggerAdd] = useState(false);


    const handleModalChangeAdd = () => {
        setModalTriggerAdd(!modalTriggerAdd);
    }

    return (
        <Fragment>
            <Col xs={12} md={12} className="mt-3">
                <Row>

                    {/*Título de la sección*/}
                    <Col xs={12} md={12} className="mb-3">
                        <h4 className="text-center sub-title-cmh">Cifra de Negocios por Proveedores MEDICAMENTOS E INSUMOS MÉDICOS</h4>
                    </Col>
                    <Col xs={12} md={12} className="mb-3">

                        <Row className="justify-content-center">

                            <Col xs={12} md={1} className="text-center">
                                <OverlayTrigger
                                    placement="right"
                                    overlay={
                                        <Tooltip id="tooltip-agregarAseguradora">Agregar nuevo Proveedor</Tooltip>
                                    }>
                                    <Button variant="success" onClick={handleModalChangeAdd}><FontAwesomeIcon icon={faPlus} /></Button>
                                </OverlayTrigger>
                            </Col>

                        </Row>

                    </Col>
                    <Col xs={12} md={12} className="mb-3">
                        <ComCrud variableForm={form.proveedores} handleChange={handleChange} handleChangeRegistrosDelete={handleChangeProveedoresDelete} handleChangeRegistrosEdit={handleChangeProveedoresEdit} elemento={"Proveedor"} />
                    </Col>

                </Row>
            </Col>
            <ModalAdd
                variableForm={form.proveedores}
                modalTriggerAdd={modalTriggerAdd}
                handleModalChangeAdd={handleModalChangeAdd}
                handleChangeRegistros={handleChangeProveedores}
                elemento={"Proveedor"}
            />
        </Fragment>
    )

}

function GetInput(props) {

    //we obtain their props
    const { label, value, name, handleChange, tooltipDescrip, type, isRequired, placement, show, isReadOnly = false, isTextArea = false, style = null } = props

    if (show == true) {
        return (
            <Fragment>
                <FloatingLabel
                    controlId="floatingInput"
                    label={label}>
                    <OverlayTrigger
                        placement={placement}
                        overlay={
                            <Tooltip id={`tooltip-${name}`}>{tooltipDescrip}</Tooltip>
                        }>
                        <Form.Control
                            as={isTextArea ? "textarea" : "input"}
                            type={type}
                            placeholder={label}
                            value={value ? value : ''}
                            name={name}
                            onChange={handleChange}
                            required={isRequired}
                            autoComplete="off"
                            readOnly={isReadOnly}
                            style={style}
                        />
                    </OverlayTrigger>
                </FloatingLabel>
            </Fragment>
        )
    }
}

function GetInputFormat(props) {

    //we obtain their props
    const { label, value, name, handleChange, tooltipDescrip, type, isRequired, placement, show, isReadOnly = false, leftSymbol, rightSymbol, isLeft = false, isRight = false } = props

    if (show == true && isLeft == true) {
        return (
            <Fragment>
                <InputGroup className="justify-content-center">
                    <InputGroup.Text id="currency">{leftSymbol}</InputGroup.Text>
                    <FloatingLabel
                        controlId="floatingInput"
                        label={label}>
                        <OverlayTrigger
                            placement={placement}
                            overlay={
                                <Tooltip id={`tooltip-${name}`}>{tooltipDescrip}</Tooltip>
                            }>
                            <Form.Control
                                type={type}
                                placeholder={label}
                                value={value ? value : ''}
                                name={name}
                                onChange={handleChange}
                                required={isRequired}
                                autoComplete="off"
                                readOnly={isReadOnly}
                            />
                        </OverlayTrigger>
                    </FloatingLabel>
                </InputGroup>
            </Fragment>
        )
    } else if (show == true && isRight == true) {
        return (
            <Fragment>
                <InputGroup className="justify-content-center">
                    <FloatingLabel
                        controlId="floatingInput"
                        label={label}>
                        <OverlayTrigger
                            placement={placement}
                            overlay={
                                <Tooltip id={`tooltip-${name}`}>{tooltipDescrip}</Tooltip>
                            }>
                            <Form.Control
                                type={type}
                                placeholder={label}
                                value={value ? value : ''}
                                name={name}
                                onChange={handleChange}
                                required={isRequired}
                                autoComplete="off"
                                readOnly={isReadOnly}
                            />
                        </OverlayTrigger>
                    </FloatingLabel>
                    <InputGroup.Text id="currency">{rightSymbol}</InputGroup.Text>
                </InputGroup>
            </Fragment>
        )
    }
}

function GetSelector(props) {

    //we obtain their props
    const { label, value, name, handleChange, options, isRequired, show } = props

    if (show == true) {
        return (
            <Fragment>
                <FloatingLabel controlId="floatingSelect" label={label}>
                    <Form.Select
                        aria-label="Floating label"
                        value={value ? value : ''}
                        onChange={handleChange}
                        name={name}
                        required={isRequired}
                    >
                        <option value="" disabled>Seleccione una opción</option>
                        {
                            options.map((option) => {
                                return (
                                    <Fragment key={option.id}>
                                        <option value={option.value}>{option.name}</option>
                                    </Fragment>
                                )
                            })
                        }
                    </Form.Select>
                </FloatingLabel>
            </Fragment>
        )
    }
}

export default MKT;