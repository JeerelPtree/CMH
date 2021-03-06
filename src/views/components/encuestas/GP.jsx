import React, { Fragment, useState, useEffect } from "react";
import { Popover, Badge, Container, Col, Row, FloatingLabel, Button, Form, OverlayTrigger, Tooltip, InputGroup } from "react-bootstrap";
import { faPeopleLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfesionalOptions from "./json/GPOptions/profesionalOptions.json"
import formulas from "../../assets/img/formulas.png"

//import axios from "axios"


//we import css
import "../../../globalStyles.css"

const currentYear = new Date().getFullYear();
let totalEmpleados = 0;

function GP() {

    //declared the variables, constants ans states for this module
    const [form, setForm] = useState({ numeroTotalEmpleados: 0 })

    //TODO:cuando se utilice el fetch hacia el backend inicializar numeroTotalEmpleados en 0 si no hay dato en el useEffect

    //module's functions

    /**
     * It takes the value of the input and the name of the input and then it sets the value of the
     * input to the state.
     */
    const handleChangeEmpleados = async (e) => {

        e.persist();

        let auxTotalEmpleados = form.numeroTotalEmpleados ? form.numeroTotalEmpleados : 0;

        auxTotalEmpleados = !isNaN(e.target.value) ? getTotalEmpleados(e.target.value, e.target.name) : auxTotalEmpleados;

        await setForm(
            {
                ...form,
                [e.target.name]: e.target.value,
                ['numeroTotalEmpleados']: auxTotalEmpleados
            }
        );
    }

    const handleChange = async (e) => {

        e.persist();

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

    /**
     * It takes a value and a name, and returns the total number of employees
     * @returns the value of the variable numeroEmpleadosTotal.
     */
    const getTotalEmpleados = (value, name) => {

        let newValue = !isNaN(parseInt(value)) ? parseInt(value) : 0;
        let oldValue = !isNaN(parseInt(form[name])) ? parseInt(form[name]) : 0;
        let resOperation = oldValue - newValue;

        let numeroEmpleadosTotal = !isNaN(form.numeroTotalEmpleados) ? form.numeroTotalEmpleados - resOperation : resOperation;

        return numeroEmpleadosTotal;
    }

    const prueba = () => {
        console.log(form)
    }

    return (
        <Fragment>
            <Container className="mt-3 px-2">
                <Row >
                    <Col xs={12} md={12}>
                        <Row>

                            {/*Titulo de la secci??n*/}
                            <Col xs={12} md={12} className="mt-3 mb-3">
                                <h5 className="text-center title-cmh">Indicadores</h5>
                            </Col>

                            {/*TODO: Hacer la suma del personal*/}
                            {/*Total de empleados*/}
                            <Col xs={12} md={12} className="mt-3 mb-3">
                                <Row className="justify-content-center">

                                    {/*Input*/}
                                    <Col xs={12} md={3}>

                                        <span>
                                            <OverlayTrigger
                                                placement="top"
                                                overlay={
                                                    <Tooltip id="tooltip-rinion">{`Total de Empleados ${currentYear}`}</Tooltip>
                                                }>

                                                <InputGroup>

                                                    <InputGroup.Text id="totalMedicosCredencializados" className="input-group-text-primary"><FontAwesomeIcon icon={faPeopleLine} /></InputGroup.Text>
                                                    <Form.Control
                                                        type="number"
                                                        readOnly
                                                        placeholder={`Total de Empleados`}
                                                        value={form.numeroTotalEmpleados ? form.numeroTotalEmpleados : ''}
                                                        name="numeroTotalEmpleados"
                                                        onChange={handleChange} />

                                                </InputGroup>
                                            </OverlayTrigger>
                                        </span>

                                    </Col>

                                </Row>
                            </Col>

                            <NivelEscolaridad form={form} handleChange={handleChangeEmpleados} />

                            <RecursosHumanos form={form} handleChange={handleChange} formulas={formulas} />

                            <PersonalClinico form={form} handleChange={handleChange} />

                            <NivelProfesional form={form} handleChange={handleChange} profesionalOptions={ProfesionalOptions} />

                            <Sueldos form={form} handleChange={handleChange} />

                            {/*Bot??n de enviar
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


function NivelEscolaridad(props) {

    //we obtain the props for this component
    const form = props.form
    const handleChange = props.handleChange

    return (
        <Fragment>

            <Col xs={12} md={12}>
                <Row className="justify-content-evenly">

                    {/*Titulo de la secci??n*/}
                    <Col xs={12} md={12} className="mt-3 mb-3">
                        <h4 className="text-center sub-title-cmh">Nivel de escolaridad</h4>
                    </Col>

                    {/*Escolaridad B??sica incompleta*/}
                    <Col xs={12} md={4} className="mb-3">

                        <GetSelectEmpleados
                            label="Escolaridad B??sica incompleta"
                            value={form.escolaridadBasicaIncompleta}
                            name="escolaridadBasicaIncompleta"
                            handleChange={handleChange}
                        />

                    </Col>

                    {/*Escolaridad B??sica completa*/}
                    <Col xs={12} md={4} className="mb-3">

                        <GetSelectEmpleados
                            label="Escolaridad B??sica completa"
                            value={form.escolaridadBasicaCompleta}
                            name="escolaridadBasicaCompleta"
                            handleChange={handleChange}
                        />

                    </Col>

                    {/*Maestr??a o m??s*/}
                    <Col xs={12} md={4} className="mb-3">

                        <GetSelectEmpleados
                            label="Escolaridad Maestr??a o m??s"
                            value={form.escolaridadMaestriaMas}
                            name="escolaridadMaestriaMas"
                            handleChange={handleChange}
                        />

                    </Col>

                    <Row className="justify-content-center">

                        {/*Medio Superior /Tecnica Completo*/}
                        <Col xs={12} md={5} className="mb-3">

                            <GetSelectEmpleados
                                label="Escolaridad Medio Superior/Tecnica Completo"
                                value={form.escolaridadMedioSuperiorTecnica}
                                name="escolaridadMedioSuperiorTecnica"
                                handleChange={handleChange}
                            />

                        </Col>

                        {/*Profesional Completa*/}
                        <Col xs={12} md={5} className="mb-3">

                            <GetSelectEmpleados
                                label="Escolaridad Profesional Completa"
                                value={form.profesionalCompleta}
                                name="profesionalCompleta"
                                handleChange={handleChange}
                            />

                        </Col>

                    </Row>


                </Row>
            </Col>

        </Fragment>
    )

}

function RecursosHumanos(props) {

    //we obtain the props for this component
    const form = props.form
    const handleChange = props.handleChange
    const formulas = props.formulas

    return (
        <Fragment>

            <Col xs={12} md={12}>
                <Row className="justify-content-evenly">

                    {/*Titulo de la secci??n*/}
                    <Col xs={12} md={12} className="mt-3 mb-3">
                        <Row className="justify-content-center">
                            {/* <Col xs={3} md={3}>
                                <h4 className="text-center sub-title-cmh">
                                    Recursos Humanos <OverlayTrigger
                                        placement="right"
                                        overlay={
                                            <Tooltip>
                                                {
                                                    `Formulas para obtener tasas e indices.`
                                                }
                                            </Tooltip>
                                        }>
                                        <Badge pill bg="secondary">?</Badge>
                                    </OverlayTrigger>
                                </h4>
                            </Col> */}
                            <Col xs={3} md={3}>
                                <h4 className="text-center sub-title-cmh">
                                    Recursos Humanos <OverlayTrigger
                                        placement="right"
                                        overlay={
                                            <Popover>
                                                <Popover.Header as="h3">Formulas de ayuda</Popover.Header>
                                                <Popover.Body>
                                                    <img src={formulas} />
                                                </Popover.Body>
                                            </Popover>
                                        }
                                    >
                                        <Badge pill bg="secondary">?</Badge>
                                    </OverlayTrigger>
                                </h4>
                            </Col>
                        </Row>
                    </Col>

                    {/*Tasa de Contrataci??n*/}
                    <Col xs={12} md={3} className="mb-3">
                        <GetInputRate
                            label='Contrataci??n'
                            value={form.tasaContratacion}
                            name='tasaContratacion'
                            handleChange={handleChange}
                            tooltipDescrip='Tasa de Contrataci??n'
                        />
                    </Col>

                    {/*Tasa de Despidos*/}
                    <Col xs={12} md={3} className="mb-3">
                        <GetInputRate
                            label='Despidos'
                            value={form.tasaDespidos}
                            name='tasaDespidos'
                            handleChange={handleChange}
                            tooltipDescrip='Tasa de Despidos'
                        />

                    </Col>

                    {/*Tasa de Renuncias*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetInputRate
                            label='Renuncias'
                            value={form.tasaRenuncias}
                            name='tasaRenuncias'
                            handleChange={handleChange}
                            tooltipDescrip='Tasa de Renuncias'
                        />

                    </Col>

                    {/*Tasa de Separaci??n (Despido o Renuncia)*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetInputRate
                            label='Separaci??n'
                            value={form.tasaSeparacion}
                            name='tasaSeparacion'
                            handleChange={handleChange}
                            tooltipDescrip='Tasa de Separaci??n (Despido o Renuncia)'
                        />

                    </Col>

                    {/*Indice General de Rotaci??n */}
                    <Col xs={12} md={3} className="mb-3">

                        <GetInputRate
                            label='Rotaci??n General'
                            value={form.indiceGeneralRotacion}
                            name='indiceGeneralRotacion'
                            handleChange={handleChange}
                            tooltipDescrip='Indice General de Rotaci??n'
                        />

                    </Col>

                    {/*Indice de Rotaci??n del Personal de Enfermer??a*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetInputRate
                            label='Rotaci??n Enfermer??a'
                            value={form.indiceRotacionEnfermeria}
                            name='indiceRotacionEnfermeria'
                            handleChange={handleChange}
                            tooltipDescrip='Indice de Rotaci??n del Personal de Enfermer??a'
                        />

                    </Col>

                    {/*Indice de Ausentismo*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetInputRate
                            label='Ausentismo'
                            value={form.indiceAusentismo}
                            name='indiceAusentismo'
                            handleChange={handleChange}
                            tooltipDescrip='Indice de Ausentismo'
                        />

                    </Col>

                    {/*Indice de Inactivos por alguna Incapacidad*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetInputRate
                            label='Incapacidad'
                            value={form.indiceInactivosIncapacidad}
                            name='indiceInactivosIncapacidad'
                            handleChange={handleChange}
                            tooltipDescrip='Indice de Inactivos por alguna Incapacidad'
                        />

                    </Col>

                </Row>
            </Col>

        </Fragment>
    )

}

function PersonalClinico(props) {

    //we obtain the props for this component
    const form = props.form
    const handleChange = props.handleChange

    return (
        <Fragment>

            <Col xs={12} md={12}>
                <Row className="justify-content-evenly">

                    {/*Titulo de la secci??n*/}
                    <Col xs={12} md={12} className="mt-3 mb-3">
                        <h4 className="text-center sub-title-cmh">Personal Cl??nico</h4>
                    </Col>

                    {/*Total de Enfermeras*/}
                    <Col xs={12} md={6} className="mb-3">
                        <GetInputPersonal
                            label="Total de Enfermeras"
                            value={form.totalEnfermeras}
                            name="totalEnfermeras"
                            handleChange={handleChange}
                        />
                    </Col>

                    {/*Total de Personal Administrativo*/}
                    <Col xs={12} md={6} className="mb-3">

                        <GetInputPersonal
                            label="Total de Personal Administrativo"
                            value={form.totalPersonalAdministrativo}
                            name="totalPersonalAdministrativo"
                            handleChange={handleChange}
                        />

                    </Col>

                    {/*Total de Personal M??dico en N??mina*/}
                    <Col xs={12} md={6} className="mb-3">

                        <GetInputPersonal
                            label="Total de Personal M??dico en N??mina"
                            value={form.totalPersonalMedicoNomina}
                            name="totalPersonalMedicoNomina"
                            handleChange={handleChange}
                        />

                    </Col>

                    {/*Otros profesionales de la Salud (Nutri??loga, Apoyo diagn??stico-Radiolog??a)*/}
                    <Col xs={12} md={6} className="mb-3">

                        <GetInputPersonal
                            label="Otros profesionales de la Salud"
                            value={form.otrosProfesionalesSalud}
                            name="otrosProfesionalesSalud"
                            handleChange={handleChange}
                        />

                    </Col>

                </Row>
            </Col>

        </Fragment>
    )

}

function NivelProfesional(props) {

    //we obtain the props for this component
    const form = props.form
    const handleChange = props.handleChange
    const ProfesionalOptions = props.profesionalOptions

    return (
        <Fragment>

            <Col xs={12} md={12}>
                <Row className="justify-content-evenly">

                    {/*Titulo de la secci??n*/}
                    <Col xs={12} md={12} className="mt-3 mb-3">
                        <h4 className="text-center sub-title-cmh">Nivel Profesional de Puestos Espec??ficos</h4>
                    </Col>

                    {/*Recursos Humanos*/}
                    <Col xs={12} md={6} className="mb-3">

                        <GetSelectProfesional
                            label="Recursos Humanos"
                            name="recursosHumanos"
                            value={form.recursosHumanos}
                            handleChange={handleChange}
                            options={ProfesionalOptions}
                        />

                    </Col>

                    {/*Calidad*/}
                    <Col xs={12} md={6} className="mb-3">

                        <GetSelectProfesional
                            label="Calidad"
                            name="calidad"
                            value={form.calidad}
                            handleChange={handleChange}
                            options={ProfesionalOptions}
                        />

                    </Col>

                    {/*Compras*/}
                    <Col xs={12} md={6} className="mb-3">

                        <GetSelectProfesional
                            label="Compras"
                            name="compras"
                            value={form.compras}
                            handleChange={handleChange}
                            options={ProfesionalOptions}
                        />

                    </Col>

                    {/*Comercial*/}
                    <Col xs={12} md={6} className="mb-3">

                        <GetSelectProfesional
                            label="Comercial"
                            name="comercial"
                            value={form.comercial}
                            handleChange={handleChange}
                            options={ProfesionalOptions}
                        />

                    </Col>

                    {/*Jefa de Enfermer??a*/}
                    <Col xs={12} md={6} className="mb-3">

                        <GetSelectProfesional
                            label="Jefa de Enfermer??a"
                            name="jefaEnfermeria"
                            value={form.jefaEnfermeria}
                            handleChange={handleChange}
                            options={ProfesionalOptions}
                        />

                    </Col>

                    {/*Sistemas*/}
                    <Col xs={12} md={6} className="mb-3">

                        <GetSelectProfesional
                            label="Sistemas"
                            name="sistemas"
                            value={form.sistemas}
                            handleChange={handleChange}
                            options={ProfesionalOptions}
                        />

                    </Col>

                    {/*Direcci??n M??dica */}
                    <Col xs={12} md={6} className="mb-3">

                        <GetSelectProfesional
                            label="Direcci??n M??dica"
                            name="direccionMedica"
                            value={form.direccionMedica}
                            handleChange={handleChange}
                            options={ProfesionalOptions}
                        />

                    </Col>

                    {/*Direcci??n de Operaciones*/}
                    <Col xs={12} md={6} className="mb-3">

                        <GetSelectProfesional
                            label="Direcci??n de Operaciones"
                            name="direccionOperaciones"
                            value={form.direccionOperaciones}
                            handleChange={handleChange}
                            options={ProfesionalOptions}
                        />

                    </Col>

                    {/*Direcci??n de Administraci??n y Finanzas*/}
                    <Col xs={12} md={6} className="mb-3">

                        <GetSelectProfesional
                            label="Direcci??n de Administraci??n y Finanzas"
                            name="direccionAdministracionFinanzas"
                            value={form.direccionAdministracionFinanzas}
                            handleChange={handleChange}
                            options={ProfesionalOptions}
                        />

                    </Col>

                    {/*Direcci??n General*/}
                    <Col xs={12} md={6} className="mb-3">

                        <GetSelectProfesional
                            label="Direcci??n General"
                            name="direccionGeneral"
                            value={form.direccionGeneral}
                            handleChange={handleChange}
                            options={ProfesionalOptions}
                        />

                    </Col>

                </Row>
            </Col>

        </Fragment>
    )

}

function Sueldos(props) {

    //we obtain the props for this component
    const form = props.form
    const handleChange = props.handleChange

    return (
        <Fragment>

            <Col xs={12} md={12}>
                <Row className="justify-content-evenly">

                    {/*Titulo de la secci??n*/}
                    <Col xs={12} md={12} className="mt-3 mb-3">
                        <h4 className="text-center sub-title-cmh">Sueldos</h4>
                    </Col>

                    {/*Director/ Gerente General*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Director General"
                            value={form.sueldoDirectorGerenteGeneral}
                            name="sueldoDirectorGerenteGeneral"
                            handleChange={handleChange}
                            tooltipDescrip="Director/Gerente General"
                        />

                    </Col>

                    {/*Director/Gerente Administrativo*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Director Administrativo"
                            value={form.sueldoDirectorGerenteAdministrativo}
                            name="sueldoDirectorGerenteAdministrativo"
                            handleChange={handleChange}
                            tooltipDescrip="Director/Gerente Administrativo"
                        />

                    </Col>

                    {/*Director/ Gerente M??dico*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Director M??dico"
                            value={form.sueldoDirectorGerenteMedico}
                            name="sueldoDirectorGerenteMedico"
                            handleChange={handleChange}
                            tooltipDescrip="Director/Gerente M??dico"
                        />

                    </Col>

                    {/*Gerente/Jefatura de Enfermer??a*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Gerente de Enfermer??a"
                            value={form.sueldoGerenteJefaturaEnfermeria}
                            name="sueldoGerenteJefaturaEnfermeria"
                            handleChange={handleChange}
                            tooltipDescrip="Gerente/Jefatura de Enfermer??a"
                        />

                    </Col>

                    {/*Jefe/Gerente/Coordinador de Calidad*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Jefe de Calidad"
                            value={form.sueldoJefeGerenteCoordinadorCalidad}
                            name="sueldoJefeGerenteCoordinadorCalidad"
                            handleChange={handleChange}
                            tooltipDescrip="Jefe/Gerente/Coordinador de Calidad"
                        />

                    </Col>

                    {/*Jefe/Gerente de Compras*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Jefe de Compras"
                            value={form.sueldoJefeGerenteCompras}
                            name="sueldoJefeGerenteCompras"
                            handleChange={handleChange}
                            tooltipDescrip="Jefe/Gerente de Compras"
                        />

                    </Col>

                    {/*Jefe/Gerente de Mercadotecnia*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Jefe de Mercadotecnia"
                            value={form.sueldoJefeGerenteMercadotecnia}
                            name="sueldoJefeGerenteMercadotecnia"
                            handleChange={handleChange}
                            tooltipDescrip="Jefe/Gerente de Mercadotecnia"
                        />

                    </Col>

                    {/*Jefe/Gerente de Recursos Humanos*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Jefe de RH"
                            value={form.sueldoJefeGerenteRecursosHumanos}
                            name="sueldoJefeGerenteRecursosHumanos"
                            handleChange={handleChange}
                            tooltipDescrip="Jefe/Gerente de Recursos Humanos"
                        />

                    </Col>

                    {/*Jefe de Contabilidad*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Jefe de Contabilidad"
                            value={form.sueldoJefeContabilidad}
                            name="sueldoJefeContabilidad"
                            handleChange={handleChange}
                            tooltipDescrip="Jefe de Contabilidad"
                        />

                    </Col>

                    {/*Jefe de Radiolog??a*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Jefe de Radiolog??a"
                            value={form.sueldoJefeRadiologia}
                            name="sueldoJefeRadiologia"
                            handleChange={handleChange}
                            tooltipDescrip="Jefe de Radiolog??a- *propio"
                        />

                    </Col>

                    {/*Jefe de Laboratorio*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Jefe de Laboratorio"
                            value={form.sueldoJefeLaboratorio}
                            name="sueldoJefeLaboratorio"
                            handleChange={handleChange}
                            tooltipDescrip="Jefe de Laboratorio- *propio"
                        />

                    </Col>

                    {/*TODO: Falta por editar estos inputs hacia abajo*/}
                    {/*Jefe de Servicio M??dico (Urgencias, UCI, UCIN, Quir??fano, Hospitalizaci??n, etc.)*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Jefe de Servicio M??dico"
                            value={form.sueldoJefeServicioMedico}
                            name="sueldoJefeServicioMedico"
                            handleChange={handleChange}
                            tooltipDescrip="Jefe de Servicio M??dico (Urgencias, UCI, UCIN, Quir??fano, Hospitalizaci??n, etc.)"
                        />

                    </Col>

                    {/*M??dicos de Urgencias*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="M??dicos de Urgencias"
                            value={form.sueldoMedicosUrgencias}
                            name="sueldoMedicosUrgencias"
                            handleChange={handleChange}
                            tooltipDescrip="M??dicos de Urgencias"
                        />

                    </Col>

                    {/*Supervisora de Enfermer??a*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Supervisora Enfermer??a"
                            value={form.sueldoSupervisoraEnfermeria}
                            name="sueldoSupervisoraEnfermeria"
                            handleChange={handleChange}
                            tooltipDescrip="Supervisora de Enfermer??a"
                        />

                    </Col>

                    {/*Enfermera Especialista*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Enfermera Especialista"
                            value={form.sueldoEnfermeraEspecialista}
                            name="sueldoEnfermeraEspecialista"
                            handleChange={handleChange}
                            tooltipDescrip="Enfermera Especialista"
                        />

                    </Col>

                    {/*Enfermera General*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Enfermera General"
                            value={form.sueldoEnfermeraGeneral}
                            name="sueldoEnfermeraGeneral"
                            handleChange={handleChange}
                            tooltipDescrip="Enfermera General"
                        />

                    </Col>

                    {/*T??cnico en Enfermer??a*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="T??cnico en Enfermer??a"
                            value={form.sueldoTecnicoEnfermeria}
                            name="sueldoTecnicoEnfermeria"
                            handleChange={handleChange}
                            tooltipDescrip="T??cnico en Enfermer??a"
                        />

                    </Col>

                    {/*Auxiliar de Enfermer??a*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Auxiliar de Enfermer??a"
                            value={form.sueldoAuxiliarEnfermeria}
                            name="sueldoAuxiliarEnfermeria"
                            handleChange={handleChange}
                            tooltipDescrip="Auxiliar de Enfermer??a"
                        />

                    </Col>

                    {/*T??cnico de Laboratorio*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="T??cnico de Laboratorio"
                            value={form.sueldoTecnicoLaboratorio}
                            name="sueldoTecnicoLaboratorio"
                            handleChange={handleChange}
                            tooltipDescrip="T??cnico de Laboratorio"
                        />

                    </Col>

                    {/*T??cnico de Rayos X*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="T??cnico de Rayos X"
                            value={form.sueldoTecnicoRayosX}
                            name="sueldoTecnicoRayosX"
                            handleChange={handleChange}
                            tooltipDescrip="T??cnico de Rayos X"
                        />

                    </Col>



                    {/*Camillero*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Camillero"
                            value={form.sueldoCamillero}
                            name="sueldoCamillero"
                            handleChange={handleChange}
                            tooltipDescrip="Camillero"
                        />

                    </Col>

                    {/*Admisi??n*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Admisi??n"
                            value={form.sueldoAdmision}
                            name="sueldoAdmision"
                            handleChange={handleChange}
                            tooltipDescrip="Admisi??n"
                        />

                    </Col>

                    {/*Jefe/Coordinador Intendencia*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Jefe Intendencia"
                            value={form.sueldoJefeIntendencia}
                            name="sueldoJefeIntendencia"
                            handleChange={handleChange}
                            tooltipDescrip="Jefe/Coordinador Intendencia"
                        />

                    </Col>

                    {/*Personal de Intendencia*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Personal de Intendencia"
                            value={form.sueldoPersonalIntendencia}
                            name="sueldoPersonalIntendencia"
                            handleChange={handleChange}
                            tooltipDescrip="Personal de Intendencia"
                        />

                    </Col>

                    {/*Jefe/Coordinador de Nutrici??n Hospitalaria*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Jefe de NH"
                            value={form.sueldoJefeNutricionHospitalaria}
                            name="sueldoJefeNutricionHospitalaria"
                            handleChange={handleChange}
                            tooltipDescrip="Jefe/Coordinador de Nutrici??n Hospitalaria"
                        />

                    </Col>

                    {/*Cocineros*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Cocineros"
                            value={form.sueldoCocineros}
                            name="sueldoCocineros"
                            handleChange={handleChange}
                            tooltipDescrip="Cocineros"
                        />

                    </Col>

                    {/*Jefe de Mantenimiento*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Jefe de Mantenimiento"
                            value={form.sueldoJefeMantenimiento}
                            name="sueldoJefeMantenimiento"
                            handleChange={handleChange}
                            tooltipDescrip="Jefe de Mantenimiento"
                        />

                    </Col>

                    {/*Personal de Mantenimiento*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Personal Mantenimiento"
                            value={form.sueldoPersonalMantenimiento}
                            name="sueldoPersonalMantenimiento"
                            handleChange={handleChange}
                            tooltipDescrip="Personal de Mantenimiento"
                        />

                    </Col>

                    {/*Personal de Lavanderia*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Personal de Lavanderia"
                            value={form.sueldoPersonalLavanderia}
                            name="sueldoPersonalLavanderia"
                            handleChange={handleChange}
                            tooltipDescrip="Personal de Lavanderia"
                        />

                    </Col>

                    {/*Jefe de Seguridad*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Jefe de Seguridad"
                            value={form.sueldoJefeSeguridad}
                            name="sueldoJefeSeguridad"
                            handleChange={handleChange}
                            tooltipDescrip="Jefe de Seguridad"
                        />

                    </Col>

                    {/*Vigilantes-Guardias de Seguridad*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Guardias de Seguridad"
                            value={form.sueldoVigilantesGuardiasSeguridad}
                            name="sueldoVigilantesGuardiasSeguridad"
                            handleChange={handleChange}
                            tooltipDescrip="Vigilantes-Guardias de Seguridad"
                        />

                    </Col>

                    {/*Otros Puestos Operativos*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Otros"
                            value={form.sueldoOtrosPuestosOperativos}
                            name="sueldoOtrosPuestosOperativos"
                            handleChange={handleChange}
                            tooltipDescrip="Otros Puestos Operativos"
                        />

                    </Col>

                    {/*Director/ Gerente de Operaciones*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Director de Operaciones"
                            value={form.sueldoDirectorGerenteOperaciones}
                            name="sueldoDirectorGerenteOperaciones"
                            handleChange={handleChange}
                            tooltipDescrip="Director/Gerente de Operaciones"
                        />

                    </Col>

                    {/*Jefe/Gerente de Comercializaci??n-Ventas*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Jefe de Comercializaci??n"
                            value={form.sueldoJefeGerenteComercializaci??nVentas}
                            name="sueldoJefeGerenteComercializaci??nVentas"
                            handleChange={handleChange}
                            tooltipDescrip="Jefe/Gerente de Comercializaci??n-Ventas"
                        />

                    </Col>

                    {/*Jefe de Nutrici??n Cl??nica*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Jefe de Nutrici??n Cl??nica"
                            value={form.sueldoJefeNutricionClinica}
                            name="sueldoJefeNutricionClinica"
                            handleChange={handleChange}
                            tooltipDescrip="Jefe de Nutrici??n Cl??nica"
                        />

                    </Col>

                    {/*Coordinadora de Enfermer??a*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="Coordinadora Enfermer??a"
                            value={form.sueldoCoordinadoraEnfermeria}
                            name="sueldoCoordinadoraEnfermeria"
                            handleChange={handleChange}
                            tooltipDescrip="Coordinadora Enfermer??a"
                        />

                    </Col>

                    {/*T??cnico en Inhaloterapia o Terapia Respiratoria*/}
                    <Col xs={12} md={3} className="mb-3">

                        <GetSelectSueldos
                            label="T??cnico en Inhaloterapia"
                            value={form.sueldoTecnicoInhaloterapia}
                            name="sueldoTecnicoInhaloterapia"
                            handleChange={handleChange}
                            tooltipDescrip="T??cnico en Inhaloterapia o Terapia Respiratoria"
                        />

                    </Col>

                </Row>
            </Col>

        </Fragment>
    )

}

function GetInputRate(props) {

    //we obtain their props
    const { label, value, name, handleChange, tooltipDescrip } = props;

    return <Fragment>
        <InputGroup className="justify-content-center">
            <FloatingLabel
                controlId="floatingInput"
                label={label}>
                <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip id={`tooltip-${name}`}>{tooltipDescrip}</Tooltip>}>
                    <Form.Control
                        type="number"
                        placeholder={label}
                        min={0}
                        value={value ? value : ''}
                        name={name}
                        onChange={handleChange}
                        required
                        autoComplete="off" />
                </OverlayTrigger>
            </FloatingLabel>
            <InputGroup.Text id="percentage">%</InputGroup.Text>
        </InputGroup>
    </Fragment>;
}

function GetInputPersonal(props) {

    //we obtain their props
    const { label, value, name, handleChange } = props;

    return <Fragment>
        <FloatingLabel
            controlId="floatingInput"
            label={label}>
            <Form.Control
                type="number"
                min={0}
                placeholder={label}
                value={value ? value : ''}
                name={name}
                required
                onChange={handleChange} />
        </FloatingLabel>
    </Fragment>;
}

function GetSelectProfesional(props) {
    const { label, name, value, handleChange, options } = props;
    return <Fragment>
        <FloatingLabel controlId="floatingSelect" label={label}>

            <Form.Select
                aria-label="Floating label"
                value={value ? value : ''}
                onChange={handleChange}
                name={name}
            >
                <option value="" disabled>Seleccione una opci??n</option>
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
    </Fragment>;
}

function GetSelectSueldos(props) {

    //we obtain their props
    const { label, value, name, handleChange, tooltipDescrip } = props

    return (
        <Fragment>
            <InputGroup>
                <FloatingLabel
                    controlId="floatingInput"
                    label={label}>
                    <OverlayTrigger
                        placement="right"
                        overlay={
                            <Tooltip id={`tooltip-${name}`}>{tooltipDescrip}</Tooltip>
                        }>
                        <Form.Control
                            type="number"
                            min={0}
                            placeholder={label}
                            value={value ? value : ''}
                            name={name}
                            onChange={handleChange}
                            required
                            autoComplete="off"
                        />
                    </OverlayTrigger>
                </FloatingLabel>
                <InputGroup.Text id="currency" className="input-group-text-currency">$</InputGroup.Text>
            </InputGroup>
        </Fragment>
    )
}

function GetSelectEmpleados(props) {

    //we obtain their props
    const { label, value, name, handleChange } = props;

    return (
        <Fragment>

            <FloatingLabel
                controlId="floatingInput"
                label={label}>
                <OverlayTrigger
                    placement="top"
                    overlay={
                        <Tooltip>{`Empleados que cuentan con ${label}`}</Tooltip>
                    }>
                    <Form.Control
                        type="number"
                        min={0}
                        placeholder={label}
                        value={value ? value : ''}
                        name={name}
                        onChange={handleChange}
                        required={true}
                        autoComplete="off" />
                </OverlayTrigger>
            </FloatingLabel>

        </Fragment>
    )

}

export default GP;