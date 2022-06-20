import React, { Fragment } from "react";
import { Container, Col, Row, FloatingLabel, InputGroup, Form, OverlayTrigger, Tooltip, Alert } from "react-bootstrap";
import SelectorCantidad from "../selectors/SelectorCantidad";
import { faUserDoctor } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import OPTIONSPSPSE from "../../json/propiaSubrogadoPropioSubrogadoExterno.json"
import OPTIONS from "./json/yesOrNotOptionsTrueOrFalse.json";

//import axios from "axios"

//we import css
import "../../../globalStyles.css"

function SA(props) {

    //declared the variables, constants ans states for this module
    const { form, setForm } = props;

    const RHoTotalMedicos = 10 //FIXME: aqui se tiene que cap el valor de la encuesta 1

    //module's functions
    const handleChange = async (e) => {

        e.persist();

        let auxTotalMedicos = form.numeroTotalMedicosCredencializados ? form.numeroTotalMedicosCredencializados : 0;
        auxTotalMedicos = !isNaN(e.target.value) ? getTotalMedicos(e.target.value, e.target.name) : auxTotalMedicos;

        await setForm(
            {
                ...form,
                [e.target.name]: e.target.value,
                ['numeroTotalMedicosCredencializados']: auxTotalMedicos
            }
        );

    }

    /**
     * It takes two arguments, a value and a name, and returns the difference between the value and the
     * name
     * @param value - The value of the input
     * @param name - The name of the input field
     * @returns the value of the variable numeroMedicosTotal.
     */
    const getTotalMedicos = (value, name) => {

        let newValue = !isNaN(parseInt(value)) ? parseInt(value) : 0;
        let oldValue = !isNaN(parseInt(form[name])) ? parseInt(form[name]) : 0;
        let resOperation = oldValue - newValue;

        let numeroMedicosTotal = !isNaN(form.numeroTotalMedicosCredencializados) ? form.numeroTotalMedicosCredencializados - resOperation : resOperation;

        return numeroMedicosTotal;
    }

    const hasCredentials = () => {
        if (form.credencializacion === 'true') {
            return (
                <Fragment>
                    <OverlayTrigger
                        placement="top"
                        overlay={
                            <Tooltip id="tooltip-rinion">Seleccione y suba sus archivos</Tooltip>
                        }>
                        <Form.Group controlId="formFileMultiple" className="mb-3">
                            <Form.Control
                                placeholder="Ningún archivo seleccionado"
                                type="file"
                                value={form.credencializacionArchivos ? form.credencializacionArchivos : ''}
                                name="credencializacionArchivos"
                                onChange={handleChange}
                                multiple />
                        </Form.Group>
                    </OverlayTrigger>
                </Fragment>
            )

        } else {
            return null
        }
    }

    /**
     * It validates the total number of doctors in the hospital.
     * @returns the value of the variable variantColorAlert.
     */
    const validationTotalMedicos = () => {


        let variantColorAlert = null

        if (!isNaN(parseInt(RHoTotalMedicos))) {
            if (!isNaN(parseInt(form.numeroTotalMedicosCredencializados))) {
                variantColorAlert = parseInt(form.numeroTotalMedicosCredencializados) === parseInt(RHoTotalMedicos) ? 'success' : 'warning';

            } else {
                variantColorAlert = 'danger'
            }
        } else {
            variantColorAlert = 'danger'
        }

        return variantColorAlert;

    }

    /**
     * It compares the number of doctors in the current survey with the number of doctors in the
     * "Hospital Review" survey.
     * @returns A fragment of JSX.
     */
    const getContentTotalMedicos = () => {

        if (!isNaN(RHoTotalMedicos)) {

            if (parseInt(RHoTotalMedicos) === parseInt(form.numeroTotalMedicosCredencializados)) {

                return (
                    <Fragment>
                        <Row className="justify-content-center">

                            <Col xs={12} md={12}>
                                <p className="text-center">
                                    El Número total de Médicos credencializados hacen match.
                                </p>
                            </Col>

                            <Col xs={12} md={6} className="text-center align-items-center">

                                <Col xs={12} md={12}>
                                    <p>
                                        Número total de Médicos credencializados (presente)
                                    </p>
                                </Col>

                                <Col xs={12} md={12}>
                                    <Row className="justify-content-center">
                                        <Col xs={12} md={4}>
                                            <GetSelectTotalMedicos
                                                label="Número total de Médicos credencializados (presente)"
                                                value={form.numeroTotalMedicosCredencializados}
                                                name="numeroTotalMedicosCredencializados"
                                                handleChange={handleChange}
                                            />
                                        </Col>
                                    </Row>
                                </Col>

                            </Col>

                            <Col xs={12} md={6} className="text-center align-items-center">

                                <Col xs={12} md={12}>
                                    <p>
                                        Número total de Médicos credencializados (RHo)
                                    </p>
                                </Col>

                                <Col xs={12} md={12}>
                                    <Row className="justify-content-center">
                                        <Col xs={12} md={4}>
                                            <GetSelectTotalMedicos
                                                label="Número total de Médicos credencializados (RHo)"
                                                value={RHoTotalMedicos}
                                                name={null}
                                                handleChange={null}
                                            />
                                        </Col>
                                    </Row>
                                </Col>

                            </Col>

                        </Row>
                    </Fragment>
                )
            } else {
                return (
                    <Fragment>
                        <Col xs={12} md={12}>
                            <p className="text-center">
                                No coincide el número total de Médicos crendencializados de esta encuesta capturada con la encuesta de
                                "Reseña del Hospital", campo: "Número de Médicos credencializados".
                            </p>
                        </Col>
                        <Row className="justify-content-center">

                            <Col xs={12} md={6} className="text-center align-items-center">

                                <Col xs={12} md={12}>
                                    <p>
                                        Número total de Médicos credencializados (presente)
                                    </p>
                                </Col>

                                <Col xs={12} md={12}>
                                    <Row className="justify-content-center">
                                        <Col xs={12} md={4}>
                                            <GetSelectTotalMedicos
                                                label="Número total de Médicos credencializados (presente)"
                                                value={form.numeroTotalMedicosCredencializados}
                                                name="numeroTotalMedicosCredencializados"
                                                handleChange={handleChange}
                                            />
                                        </Col>
                                    </Row>
                                </Col>

                            </Col>

                            <Col xs={12} md={6} className="text-center align-items-center">

                                <Col xs={12} md={12}>
                                    <p>
                                        Número total de Médicos credencializados (RHo)
                                    </p>
                                </Col>

                                <Col xs={12} md={12}>
                                    <Row className="justify-content-center">
                                        <Col xs={12} md={4}>
                                            <GetSelectTotalMedicos
                                                label="Número total de Médicos credencializados (RHo)"
                                                value={RHoTotalMedicos}
                                                name={null}
                                                handleChange={null}
                                            />
                                        </Col>
                                    </Row>
                                </Col>

                            </Col>

                        </Row>

                    </Fragment>
                )
            }

        } else {
            return (
                <Fragment>
                    <Col xs={12} md={12}>
                        <p className="text-center">
                            No hay datos en la encuesta de "Reseña del Hospital", campo: "Número de Médicos credencializados".
                        </p>
                    </Col>
                    <Col xs={12} md={12}>
                        <p className="text-center">
                            Favor de regresar a la encuesta y llenarlo antes enviar los datos correctos.
                        </p>
                    </Col>
                </Fragment>
            )
        }
    }

    return (
        <Fragment>
            <Container className="mt-3">
                <Row>
                    <Col xs={12} md={12}>
                        <Row>

                            <Hospitalizacion form={form} handleChange={handleChange} />

                            <AreaCuneros form={form} handleChange={handleChange} />

                            <Quirofanos form={form} handleChange={handleChange} />

                            <ServicioImagenologia form={form} handleChange={handleChange} />

                            {/*Credencialización*/}
                            <Col xs={12} md={12} className="mt-3">
                                {/*¿Cuenta con credencialización?*/}
                                <Row className="align-items-center">

                                    {/*Selector*/}
                                    <Col xs={12} md={6} className="my-auto">

                                        <GetSelect
                                            label="¿Cuenta con Procedimiento de Credencialización de Médicos?"
                                            value={form.credencializacion}
                                            name="credencializacion"
                                            handleChange={handleChange}
                                        />

                                    </Col>

                                    {/*Adjuntar archivos de credencialización*/}
                                    <Col xs={12} md={6} className="my-auto pt-3">

                                        {
                                            hasCredentials()
                                        }

                                    </Col>
                                </Row>
                            </Col>

                            <Especialidad form={form} handleChange={handleChange} />

                            <EspecialidadesQuirurgicas form={form} handleChange={handleChange} />

                            <EspecialidadesMedicas form={form} handleChange={handleChange} />

                            <ServiciosSoporteTerapeutico form={form} handleChange={handleChange} />

                            {/*TODO: Hacer la validacion con la encuesta 1RHo, que sean exactos los medicos*/}
                            {/*Total medicos credencializados*/}
                            <Col xs={12} md={12} className="mt-3 mb-3">
                                <Alert variant={validationTotalMedicos()}>
                                    <Alert.Heading className="text-center">Número total de Médicos credencializados</Alert.Heading>
                                    <hr />
                                    {
                                        getContentTotalMedicos()
                                    }
                                </Alert>
                            </Col>

                            {/*Botón de enviar
                            <Col xs={12} md={12} className="mt-3 mb-5">
                                <Button variant="primary" onClick={prueba}> Enviar
                                </Button>
                            </Col>
                            */}

                        </Row>
                    </Col>
                </Row>
            </Container >
        </Fragment >
    )


}

function Hospitalizacion(props) {


    const { handleChange, form } = props;

    return (
        <Fragment>

            {/*Hospitalizacion*/}
            <Col xs={12} md={12} className="mt-3">
                <Row>

                    <Col xs={12} md={12} className="mb-3">
                        <h4 className="text-center sub-title-cmh">Hospitalización</h4>
                    </Col>

                    {/*Camas Hospitalización (Habitaciones)*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInput
                            label="Camas Hospitalización (Habitaciones)"
                            value={form.camasHospitalizacionHabitaciones}
                            name="camasHospitalizacionHabitaciones"
                            handleChange={handleChange}
                            tooltipDescrip="Número de Camas Hospitalización (Habitaciones)"
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                            style={{ height: '90px' }}
                        />
                    </Col>

                    {/*Camas en Unidad de Cuidados Intentivos Adultos (UCIA)*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInput
                            label="Camas en Unidad de Cuidados Intentivos Adultos (UCIA)"
                            value={form.camasUnidadCuidadosIntensivosAdultos}
                            name="camasUnidadCuidadosIntensivosAdultos"
                            handleChange={handleChange}
                            tooltipDescrip="Número de Camas en Unidad de Cuidados Intentivos Adultos (UCIA)"
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                            style={{ height: '90px' }}
                        />
                    </Col>

                    {/*Camas en Unidad de Cuidados Intensivos Pediátricos (UCIP)*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInput
                            label="Camas en Unidad de Cuidados Intensivos Pediátricos (UCIP)"
                            value={form.camasUnidadCuidadosIntensivosPediatricos}
                            name="camasUnidadCuidadosIntensivosPediatricos"
                            handleChange={handleChange}
                            tooltipDescrip=" Número de Camas en Unidad de Cuidados Intensivos Pediátricos (UCIP)"
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                            style={{ height: '90px' }}
                        />
                    </Col>

                    {/*Camas en Unidad de Cuidados Intensivos Neontal (UCIN)*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInput
                            label="Camas en Unidad de Cuidados Intensivos Neontal (UCIN)"
                            value={form.camasUnidadCuidadosIntensivosNeontal}
                            name="camasUnidadCuidadosIntensivosNeontal"
                            handleChange={handleChange}
                            tooltipDescrip=" Número de Camas en Unidad de Cuidados Intensivos Neontal (UCIN)"
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                            style={{ height: '90px' }}
                        />
                    </Col>

                    {/*Camas de Aislamiento*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInput
                            label="Camas de Aislamiento"
                            value={form.camasAislamiento}
                            name="camasAislamiento"
                            handleChange={handleChange}
                            tooltipDescrip="Número de Camas de Aislamiento"
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                            style={{ height: '90px' }}
                        />
                    </Col>

                    {/*Pisos de hospitalización*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInput
                            label="Pisos de hospitalización"
                            value={form.pisosHospitalizacion}
                            name="pisosHospitalizacion"
                            handleChange={handleChange}
                            tooltipDescrip="Número de Pisos de hospitalización"
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                            style={{ height: '90px' }}
                        />
                    </Col>

                    {/*Central de enfermerías*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInput
                            label="Centrales de enfermerías"
                            value={form.centralesEnfermerias}
                            name="centralEnfermerias"
                            handleChange={handleChange}
                            tooltipDescrip=" Número de Centrales de enfermerías"
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />
                    </Col>

                    {/*Almacenes*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInput
                            label="Almacenes"
                            value={form.almacenes}
                            name="almacenes"
                            handleChange={handleChange}
                            tooltipDescrip="Número de Almacenes"
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />
                    </Col>

                    {/*Subalmacenes*/}
                    <Col xs={12} md={4} className="">
                        <GetInput
                            label="Subalmacenes"
                            value={form.subAlmacenes}
                            name="subAlmacenes"
                            handleChange={handleChange}
                            tooltipDescrip="Número de Subalmacenes"
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />
                    </Col>

                </Row>
            </Col>
        </Fragment>
    )

}

function AreaCuneros(props) {

    const { handleChange, form } = props;

    return (
        <Fragment>

            {/*Área de cuneros*/}
            <Col xs={12} md={12} className="mt-3">
                <Row>

                    <Col xs={12} md={12} className="mb-3">
                        <h4 className="text-center sub-title-cmh">Área de cuneros</h4>
                    </Col>

                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">


                            {/*Cunas*/}
                            <Col xs={12} md={4}>
                                <GetInput
                                    label="Cunas"
                                    value={form.cunas}
                                    name="cunas"
                                    handleChange={handleChange}
                                    tooltipDescrip="Número de Cunas"
                                    type="number"
                                    min={0}
                                    isRequired={true}
                                    placement="top"
                                    show={true}
                                />
                            </Col>

                            {/*Incubadoras*/}
                            <Col xs={12} md={4}>
                                <GetInput
                                    label="Incubadoras"
                                    value={form.incubadoras}
                                    name="incubadoras"
                                    handleChange={handleChange}
                                    tooltipDescrip="Número de Incubadoras"
                                    type="number"
                                    min={0}
                                    isRequired={true}
                                    placement="top"
                                    show={true}
                                />
                            </Col>

                        </Row>
                    </Col>

                </Row>
            </Col>

        </Fragment>
    )
}

function Quirofanos(props) {

    const { handleChange, form } = props;

    return (
        <Fragment>

            {/*Quirófanos*/}
            <Col xs={12} md={12} className="mt-3">
                <Row>

                    <Col xs={12} md={12} className="mb-3">
                        <h4 className="text-center sub-title-cmh">Quirófanos</h4>
                    </Col>

                    {/*Salas de cirugía convencional*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInput
                            label="Salas de cirugía convencional"
                            value={form.salasCirugiaConvencional}
                            name="salasCirugiaConvencional"
                            handleChange={handleChange}
                            tooltipDescrip="Número de Salas de cirugía convencional"
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                            style={{ height: '90px' }}
                        />
                    </Col>

                    {/*Salas de cirugía alta tecnología (trasplantes y cardio)*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInput
                            label="Salas de cirugía alta tecnología (trasplantes y cardio)"
                            value={form.salasCirugiaAltaTecnologia}
                            name="salasCirugiaAltaTecnologia"
                            handleChange={handleChange}
                            tooltipDescrip="Número de Salas de cirugía alta tecnología (trasplantes y cardio)"
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                            style={{ height: '90px' }}
                        />
                    </Col>

                    {/*Salas de tococirugía (sala de partos)*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInput
                            label="Salas de tococirugía (sala de partos)"
                            value={form.salasTococirugia}
                            name="salasTococirugia"
                            handleChange={handleChange}
                            tooltipDescrip="Número de Salas de tococirugía (sala de partos)"
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                            style={{ height: '90px' }}
                        />
                    </Col>

                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">


                            {/*Salas exclusivas de Cirugía Ambulatoria*/}
                            <Col xs={12} md={4}>
                                <GetInput
                                    label="Salas exclusivas de Cirugía Ambulatoria"
                                    value={form.salasExclusivasCirugiaAmbulatoria}
                                    name="salasExclusivasCirugiaAmbulatoria"
                                    handleChange={handleChange}
                                    tooltipDescrip="Número de Salas exclusivas de Cirugía Ambulatoria"
                                    type="number"
                                    min={0}
                                    isRequired={true}
                                    placement="top"
                                    show={true}
                                />
                            </Col>

                            {/*Camillas de recuperación*/}
                            <Col xs={12} md={4}>
                                <GetInput
                                    label="Camillas de recuperación"
                                    value={form.camillasRecuperacion}
                                    name="camillasRecuperacion"
                                    handleChange={handleChange}
                                    tooltipDescrip="Número de Camillas de recuperación"
                                    type="number"
                                    min={0}
                                    isRequired={true}
                                    placement="top"
                                    show={true}
                                />
                            </Col>

                        </Row>
                    </Col>

                </Row>
            </Col>

        </Fragment>
    )
}

function ServicioImagenologia(props) {

    const { handleChange, form } = props;

    return (
        <Fragment>

            {/*Servicio de Imagenología*/}
            <Col xs={12} md={12} className="mt-3">
                <Row>

                    <Col xs={12} md={12} className="mb-3">
                        <h4 className="text-center sub-title-cmh">Servicio de Imagenología</h4>
                    </Col>

                    {/*Radiología simple (no considerar el área de urgencias)*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInput
                            label="Radiología simple (no considerar el área de urgencias)"
                            value={form.radiologiaSimple}
                            name="radiologiaSimple"
                            handleChange={handleChange}
                            tooltipDescrip="Número de Radiología simple (no considerar el área de urgencias)"
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                            style={{ height: '90px' }}
                        />
                    </Col>

                    {/*Radiología simple (no considerar el área de urgencias) Propia, Subrogado propio, Subrogado externo*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetSelect
                            label="Radiología simple"
                            value={form.radiologiaSimple}
                            name="null"
                            handleChange={handleChange}
                        />
                    </Col>

                </Row>
            </Col>

        </Fragment>
    )
}

function Especialidad(props) {

    //we obtain the props for this component
    const form = props.form
    const handleChange = props.handleChange

    return (
        <Fragment>

            {/*Especialidad*/}
            <Col xs={12} md={12}>
                <Row>

                    {/*Titulo de la sección*/}
                    <Col xs={12} md={12} className="mt-3 mb-3">
                        <h4 className="text-center sub-title-cmh">Especialidad</h4>
                    </Col>

                    {/*Anestesiología*/}
                    <Col xs={12} md={12} className="mt-3">

                        <Row className="align-items-center">
                            <SelectorCantidad
                                tituloSelector={"Anestesiología"}
                                campoSelector={form.especialidadAnestesiologia}
                                nombreSelector={"especialidadAnestesiologia"}
                                handleChange={handleChange}
                                campoCantidad={form.numeroMedicosAnestesiologia}
                                nombreCantidad={"numeroMedicosAnestesiologia"}
                            />
                        </Row>
                    </Col>

                    {/*Cirugía General*/}
                    <Col xs={12} md={12} className="mt-3">

                        <Row className="align-items-center">
                            <SelectorCantidad
                                tituloSelector={"Cirugía General"}
                                campoSelector={form.especialidadCirugiaGeneral}
                                nombreSelector={"especialidadCirugiaGeneral"}
                                handleChange={handleChange}
                                campoCantidad={form.numeroMedicosCirugiaGeneral}
                                nombreCantidad={"numeroMedicosCirugiaGeneral"}
                            />
                        </Row>
                    </Col>

                    {/*Ginecología y Obstetricia*/}
                    <Col xs={12} md={12} className="mt-3">

                        <Row className="align-items-center">
                            <SelectorCantidad
                                tituloSelector={"Ginecología y Obstetricia"}
                                campoSelector={form.especialidadGinecologiaObstetricia}
                                nombreSelector={"especialidadGinecologiaObstetricia"}
                                handleChange={handleChange}
                                campoCantidad={form.numeroMedicosGinecologiaObstetricia}
                                nombreCantidad={"numeroMedicosGinecologiaObstetricia"}
                            />
                        </Row>
                    </Col>

                    {/*Medicina Interna*/}
                    <Col xs={12} md={12} className="mt-3 mb-3">

                        <Row className="align-items-center">
                            <SelectorCantidad
                                tituloSelector={"Medicina Interna"}
                                campoSelector={form.especialidadMedicinaInterna}
                                nombreSelector={"especialidadMedicinaInterna"}
                                handleChange={handleChange}
                                campoCantidad={form.numeroMedicosMedicinaInterna}
                                nombreCantidad={"numeroMedicosMedicinaInterna"}
                            />
                        </Row>
                    </Col>

                    {/*Oftalmología*/}
                    <Col xs={12} md={12} className="mt-3 mb-3">

                        <Row className="align-items-center">
                            <SelectorCantidad
                                tituloSelector={"Oftalmología"}
                                campoSelector={form.especialidadOftalmologia}
                                nombreSelector={"especialidadOftalmologia"}
                                handleChange={handleChange}
                                campoCantidad={form.numeroMedicosOftalmologia}
                                nombreCantidad={"numeroMedicosOftalmologia"}
                            />
                        </Row>
                    </Col>

                    {/*Pediatría*/}
                    <Col xs={12} md={12} className="mt-3 mb-3">

                        <Row className="align-items-center">
                            <SelectorCantidad
                                tituloSelector={"Pediatría"}
                                campoSelector={form.especialidadPediatria}
                                nombreSelector={"especialidadPediatria"}
                                handleChange={handleChange}
                                campoCantidad={form.numeroMedicosPediatria}
                                nombreCantidad={"numeroMedicosPediatria"}
                            />
                        </Row>
                    </Col>

                    {/*Neonatología*/}
                    <Col xs={12} md={12} className="mt-3 mb-3">

                        <Row className="align-items-center">
                            <SelectorCantidad
                                tituloSelector={"Neonatología"}
                                campoSelector={form.especialidadNeonatologia}
                                nombreSelector={"especialidadNeonatologia"}
                                handleChange={handleChange}
                                campoCantidad={form.numeroMedicosNeonatologia}
                                nombreCantidad={"numeroMedicosNeonatologia"}
                            />
                        </Row>
                    </Col>

                    {/*Medicina Familiar*/}
                    <Col xs={12} md={12} className="mt-3 mb-3">

                        <Row className="align-items-center">
                            <SelectorCantidad
                                tituloSelector={"Medicina Familiar"}
                                campoSelector={form.especialidadMedicinaFamiliar}
                                nombreSelector={"especialidadMedicinaFamiliar"}
                                handleChange={handleChange}
                                campoCantidad={form.numeroMedicosMedicinaFamiliar}
                                nombreCantidad={"numeroMedicosMedicinaFamiliar"}
                            />
                        </Row>
                    </Col>
                </Row>
            </Col>

        </Fragment>
    )

}

function EspecialidadesQuirurgicas(props) {

    //we obtain the props for this component
    const form = props.form
    const handleChange = props.handleChange

    return (
        <Fragment>

            {/*Especialidades quirurgicas*/}
            <Col xs={12} md={12}>
                <Row>

                    {/*Titulo de la sección*/}
                    <Col xs={12} md={12} className="mt-3 mb-3">
                        <h4 className="text-center sub-title-cmh">Especialidades Quirúrgicas</h4>
                    </Col>

                    {/*Angiología y Cirugía Vascular*/}
                    <Col xs={12} md={12} className="mt-3">

                        <Row className="align-items-center">
                            <SelectorCantidad
                                tituloSelector={"Angiología y Cirugía Vascular"}
                                campoSelector={form.especialidadAngiologia}
                                nombreSelector={"especialidadAngiologia"}
                                handleChange={handleChange}
                                campoCantidad={form.numeroMedicosAngiologia}
                                nombreCantidad={"numeroMedicosAngiologia"}
                            />
                        </Row>
                    </Col>

                    {/*Cirugía Bariátrica*/}
                    <Col xs={12} md={12} className="mt-3">

                        <Row className="align-items-center">
                            <SelectorCantidad
                                tituloSelector={"Cirugía Bariátrica"}
                                campoSelector={form.especialidadCirugiaBariatrica}
                                nombreSelector={"especialidadCirugiaBariatrica"}
                                handleChange={handleChange}
                                campoCantidad={form.numeroMedicosCirugiaBariatrica}
                                nombreCantidad={"numeroMedicosCirugiaBariatrica"}
                            />

                        </Row>
                    </Col>

                    {/*Cirugía Cardiovascular*/}
                    <Col xs={12} md={12} className="mt-3">

                        <Row className="align-items-center">
                            <SelectorCantidad
                                tituloSelector={"Cirugía Cardiovascular"}
                                campoSelector={form.especialidadCirugiaCardiovascular}
                                nombreSelector={"especialidadCirugiaCardiovascular"}
                                handleChange={handleChange}
                                campoCantidad={form.numeroMedicosCirugiaCardiovascular}
                                nombreCantidad={"numeroMedicosCirugiaCardiovascular"}
                            />

                        </Row>
                    </Col>

                    {/*Cirugía Oncológica*/}
                    <Col xs={12} md={12} className="mt-3">

                        <Row className="align-items-center">
                            <SelectorCantidad
                                tituloSelector={"Cirugía Oncológica"}
                                campoSelector={form.especialidadCirugiaOncologica}
                                nombreSelector={"especialidadCirugiaOncologica"}
                                handleChange={handleChange}
                                campoCantidad={form.numeroMedicosCirugiaOncologica}
                                nombreCantidad={"numeroMedicosCirugiaOncologica"}
                            />


                        </Row>
                    </Col>

                    {/*Cirugía Oral y Maxilofacial */}
                    <Col xs={12} md={12} className="mt-3">

                        <Row className="align-items-center">
                            <SelectorCantidad
                                tituloSelector={"Cirugía Oral y Maxilofacial"}
                                campoSelector={form.especialidadCirugiaOral}
                                nombreSelector={"especialidadCirugiaOral"}
                                handleChange={handleChange}
                                campoCantidad={form.numeroMedicosCirugiaOral}
                                nombreCantidad={"numeroMedicosCirugiaOral"}
                            />

                        </Row>
                    </Col>

                    {/*Cirugía Pediátrica*/}
                    <Col xs={12} md={12} className="mt-3">

                        <Row className="align-items-center">
                            <SelectorCantidad
                                tituloSelector={"Cirugía Pediátrica"}
                                campoSelector={form.especialidadCirugiaPediatrica}
                                nombreSelector={"especialidadCirugiaPediatrica"}
                                handleChange={handleChange}
                                campoCantidad={form.numeroMedicosCirugiaPediatrica}
                                nombreCantidad={"numeroMedicosCirugiaPediatrica"}
                            />

                        </Row>
                    </Col>

                    {/*Cirugía Plástica y Reconstructiva*/}
                    <Col xs={12} md={12} className="mt-3">

                        <Row className="align-items-center">
                            <SelectorCantidad
                                tituloSelector={"Cirugía Plástica y Reconstructiva"}
                                campoSelector={form.especialidadCirugiaPlastica}
                                nombreSelector={"especialidadCirugiaPlastica"}
                                handleChange={handleChange}
                                campoCantidad={form.numeroMedicosCirugiaPlastica}
                                nombreCantidad={"numeroMedicosCirugiaPlastica"}
                            />

                        </Row>
                    </Col>

                    {/*Neurocirugía*/}
                    <Col xs={12} md={12} className="mt-3">

                        <Row className="align-items-center">
                            <SelectorCantidad
                                tituloSelector={"Neurocirugía"}
                                campoSelector={form.especialidadNeurocirugia}
                                nombreSelector={"especialidadNeurocirugia"}
                                handleChange={handleChange}
                                campoCantidad={form.numeroMedicosNeurocirugia}
                                nombreCantidad={"numeroMedicosNeurocirugia"}
                            />

                        </Row>
                    </Col>

                    {/*Ortopedia y Traumatología */}
                    <Col xs={12} md={12} className="mt-3">

                        <Row className="align-items-center">
                            <SelectorCantidad
                                tituloSelector={"Ortopedia y Traumatología"}
                                campoSelector={form.especialidadOrtopediaTraumatologia}
                                nombreSelector={"especialidadOrtopediaTraumatologia"}
                                handleChange={handleChange}
                                campoCantidad={form.numeroMedicosOrtopediaTraumatologia}
                                nombreCantidad={"numeroMedicosOrtopediaTraumatologia"}
                            />

                        </Row>
                    </Col>

                    {/*Otorrinolaringología */}
                    <Col xs={12} md={12} className="mt-3">

                        <Row className="align-items-center">
                            <SelectorCantidad
                                tituloSelector={"Otorrinolaringología"}
                                campoSelector={form.especialidadOtorrinolaringologia}
                                nombreSelector={"especialidadOtorrinolaringologia"}
                                handleChange={handleChange}
                                campoCantidad={form.numeroMedicosOtorrinolaringologia}
                                nombreCantidad={"numeroMedicosOtorrinolaringologia"}
                            />
                        </Row>
                    </Col>

                    {/*Proctología */}
                    <Col xs={12} md={12} className="mt-3">

                        <Row className="align-items-center">
                            <SelectorCantidad
                                tituloSelector={"Proctología"}
                                campoSelector={form.especialidadProctologia}
                                nombreSelector={"especialidadProctologia"}
                                handleChange={handleChange}
                                campoCantidad={form.numeroMedicosProctologia}
                                nombreCantidad={"numeroMedicosProctologia"}
                            />
                        </Row>
                    </Col>

                    {/*Urología  */}
                    <Col xs={12} md={12} className="mt-3">

                        <Row className="align-items-center">
                            <SelectorCantidad
                                tituloSelector={"Urología"}
                                campoSelector={form.especialidadUrologia}
                                nombreSelector={"especialidadUrologia"}
                                handleChange={handleChange}
                                campoCantidad={form.numeroMedicosUrologia}
                                nombreCantidad={"numeroMedicosUrologia"}
                            />
                        </Row>
                    </Col>

                </Row>
            </Col>

        </Fragment>
    )

}

function EspecialidadesMedicas(props) {

    //we obtain the props for this component
    const form = props.form
    const handleChange = props.handleChange

    return (
        <Fragment>

            {/*Especialidades médicas*/}
            <Col xs={12} md={12}>
                <Row>

                    {/*Titulo de la sección*/}
                    <Col xs={12} md={12} className="mt-3 mb-3">
                        <h4 className="text-center sub-title-cmh">Especialidades Médicas</h4>
                    </Col>

                    {/*Alergología*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="align-items-center">
                            <SelectorCantidad
                                tituloSelector={"Alergología"}
                                campoSelector={form.especialidadAlergologia}
                                nombreSelector={"especialidadAlergologia"}
                                handleChange={handleChange}
                                campoCantidad={form.numeroMedicosAlergologia}
                                nombreCantidad={"numeroMedicosAlergologia"}
                            />
                        </Row>
                    </Col>

                    {/*Cardiología*/}
                    <Col xs={12} md={12} className="mb-3">

                        <Row className="align-items-center">
                            <SelectorCantidad
                                tituloSelector={"Cardiología"}
                                campoSelector={form.especialidadCardiologia}
                                nombreSelector={"especialidadCardiologia"}
                                handleChange={handleChange}
                                campoCantidad={form.numeroMedicosCardiologia}
                                nombreCantidad={"numeroMedicosCardiologia"}
                            />
                        </Row>
                    </Col>

                    {/*Electrofisiología*/}
                    <Col xs={12} md={12} className="mb-3">

                        <Row className="align-items-center">

                            <SelectorCantidad
                                tituloSelector={"Electrofisiología"}
                                campoSelector={form.especialidadElectrofisiologia}
                                nombreSelector={"especialidadElectrofisiologia"}
                                handleChange={handleChange}
                                campoCantidad={form.numeroMedicosElectrofisiologia}
                                nombreCantidad={"numeroMedicosElectrofisiologia"}
                            />
                        </Row>
                    </Col>

                    {/*Dermatología*/}
                    <Col xs={12} md={12} className="mb-3">

                        <Row className="align-items-center">

                            <SelectorCantidad
                                tituloSelector={"Dermatología"}
                                campoSelector={form.especialidadDermatologia}
                                nombreSelector={"especialidadDermatologia"}
                                handleChange={handleChange}
                                campoCantidad={form.numeroMedicosDermatologia}
                                nombreCantidad={"numeroMedicosDermatologia"}
                            />
                        </Row>
                    </Col>

                    {/*Endocrinología*/}
                    <Col xs={12} md={12} className="mb-3">

                        <Row className="align-items-center">
                            <SelectorCantidad
                                tituloSelector={"Endocrinología"}
                                campoSelector={form.especialidadEndocrinologia}
                                nombreSelector={"especialidadEndocrinologia"}
                                handleChange={handleChange}
                                campoCantidad={form.numeroMedicosEndocrinologia}
                                nombreCantidad={"numeroMedicosEndocrinologia"}
                            />
                        </Row>
                    </Col>

                    {/*Gastroenterología*/}
                    <Col xs={12} md={12} className="mb-3">

                        <Row className="align-items-center">
                            <SelectorCantidad
                                tituloSelector={"Gastroenterología"}
                                campoSelector={form.especialidadGastroenterologia}
                                nombreSelector={"especialidadGastroenterologia"}
                                handleChange={handleChange}
                                campoCantidad={form.numeroMedicosGastroenterologia}
                                nombreCantidad={"numeroMedicosGastroenterologia"}
                            />
                        </Row>
                    </Col>

                    {/*Genética Humana*/}
                    <Col xs={12} md={12} className="mt-3">

                        <Row className="align-items-center">

                            <SelectorCantidad
                                tituloSelector={"Genética Humana"}
                                campoSelector={form.especialidadGeneticaHumana}
                                nombreSelector={"especialidadGeneticaHumana"}
                                handleChange={handleChange}
                                campoCantidad={form.numeroMedicosGeneticaHumana}
                                nombreCantidad={"numeroMedicosGeneticaHumana"}
                            />
                        </Row>
                    </Col>

                    {/*Geriatría*/}
                    <Col xs={12} md={12} className="mt-3">
                        <Row className="align-items-center">
                            <SelectorCantidad
                                tituloSelector={"Geriatría"}
                                campoSelector={form.especialidadGeriatria}
                                nombreSelector={"especialidadGeriatria"}
                                handleChange={handleChange}
                                campoCantidad={form.numeroMedicosGeriatria}
                                nombreCantidad={"numeroMedicosGeriatria"}
                            />
                        </Row>
                    </Col>

                    {/*Hemodinamia*/}
                    <Col xs={12} md={12} className="mt-3">

                        <Row className="align-items-center">

                            <SelectorCantidad
                                tituloSelector={"Hemodinamia"}
                                campoSelector={form.especialidadHemodinamia}
                                nombreSelector={"especialidadHemodinamia"}
                                handleChange={handleChange}
                                campoCantidad={form.numeroMedicosHemodinamia}
                                nombreCantidad={"numeroMedicosHemodinamia"}
                            />
                        </Row>
                    </Col>

                    {/*Hematología */}
                    <Col xs={12} md={12} className="mt-3">

                        <Row className="align-items-center">
                            <SelectorCantidad
                                tituloSelector={"Hematología"}
                                campoSelector={form.especialidadHematologia}
                                nombreSelector={"especialidadHematologia"}
                                handleChange={handleChange}
                                campoCantidad={form.numeroMedicosHematologia}
                                nombreCantidad={"numeroMedicosHematologia"}
                            />
                        </Row>
                    </Col>

                    {/*Hepatología */}
                    <Col xs={12} md={12} className="mt-3">

                        <Row className="align-items-center">
                            <SelectorCantidad
                                tituloSelector={"Hepatología"}
                                campoSelector={form.especialidadHepatologia}
                                nombreSelector={"especialidadHepatologia"}
                                handleChange={handleChange}
                                campoCantidad={form.numeroMedicosHepatologia}
                                nombreCantidad={"numeroMedicosHepatologia"}
                            />
                        </Row>
                    </Col>

                    {/*Infectología*/}
                    <Col xs={12} md={12} className="mt-3">

                        <Row className="align-items-center">
                            <SelectorCantidad
                                tituloSelector={"Infectología"}
                                campoSelector={form.especialidadInfectologia}
                                nombreSelector={"especialidadInfectologia"}
                                handleChange={handleChange}
                                campoCantidad={form.numeroMedicosInfectologia}
                                nombreCantidad={"numeroMedicosInfectologia"}
                            />
                        </Row>
                    </Col>

                    {/*Medicina Crítica*/}
                    <Col xs={12} md={12} className="mt-3">

                        <Row className="align-items-center">
                            <SelectorCantidad
                                tituloSelector={"Medicina Crítica"}
                                campoSelector={form.especialidadMedicinaCritica}
                                nombreSelector={"especialidadMedicinaCritica"}
                                handleChange={handleChange}
                                campoCantidad={form.numeroMedicosMedicinaCritica}
                                nombreCantidad={"numeroMedicosMedicinaCritica"}
                            />
                        </Row>
                    </Col>

                    {/*Nefrología*/}
                    <Col xs={12} md={12} className="mt-3">

                        <Row className="align-items-center">
                            <SelectorCantidad
                                tituloSelector={"Nefrología"}
                                campoSelector={form.especialidadNefrologia}
                                nombreSelector={"especialidadNefrologia"}
                                handleChange={handleChange}
                                campoCantidad={form.numeroMedicosNefrologia}
                                nombreCantidad={"numeroMedicosNefrologia"}
                            />
                        </Row>
                    </Col>

                    {/*Neurología*/}
                    <Col xs={12} md={12} className="mt-3">

                        <Row className="align-items-center">
                            <SelectorCantidad
                                tituloSelector={"Neurología"}
                                campoSelector={form.especialidadNeurologia}
                                nombreSelector={"especialidadNeurologia"}
                                handleChange={handleChange}
                                campoCantidad={form.numeroMedicosNeurologia}
                                nombreCantidad={"numeroMedicosNeurologia"}
                            />
                        </Row>
                    </Col>

                    {/*Neumología*/}
                    <Col xs={12} md={12} className="mt-3">

                        <Row className="align-items-center">
                            <SelectorCantidad
                                tituloSelector={"Neumología"}
                                campoSelector={form.especialidadNeumologia}
                                nombreSelector={"especialidadNeumologia"}
                                handleChange={handleChange}
                                campoCantidad={form.numeroMedicosNeumologia}
                                nombreCantidad={"numeroMedicosNeumologia"}
                            />
                        </Row>
                    </Col>

                    {/*Psiquiatría*/}
                    <Col xs={12} md={12} className="mt-3">

                        <Row className="align-items-center">
                            <SelectorCantidad
                                tituloSelector={"Psiquiatría"}
                                campoSelector={form.especialidadPsiquiatria}
                                nombreSelector={"especialidadPsiquiatria"}
                                handleChange={handleChange}
                                campoCantidad={form.numeroMedicosPsiquiatria}
                                nombreCantidad={"numeroMedicosPsiquiatria"}
                            />
                        </Row>
                    </Col>

                    {/*Oncología*/}
                    <Col xs={12} md={12} className="mt-3">

                        <Row className="align-items-center">
                            <SelectorCantidad
                                tituloSelector={"Oncología"}
                                campoSelector={form.especialidadOncologia}
                                nombreSelector={"especialidadOncologia"}
                                handleChange={handleChange}
                                campoCantidad={form.numeroMedicosOncologia}
                                nombreCantidad={"numeroMedicosOncologia"}
                            />
                        </Row>
                    </Col>

                    {/*Reumatología*/}
                    <Col xs={12} md={12} className="mt-3">

                        <Row className="align-items-center">
                            <SelectorCantidad
                                tituloSelector={"Reumatología"}
                                campoSelector={form.especialidadReumatologia}
                                nombreSelector={"especialidadReumatologia"}
                                handleChange={handleChange}
                                campoCantidad={form.numeroMedicosReumatologia}
                                nombreCantidad={"numeroMedicosReumatologia"}
                            />
                        </Row>
                    </Col>

                </Row>
            </Col >

        </Fragment >
    )

}

function ServiciosSoporteTerapeutico(props) {

    //we obtain the props for this component
    const form = props.form
    const handleChange = props.handleChange

    return (
        <Fragment>

            {/*Especialidades médicas*/}
            <Col xs={12} md={12}>
                <Row>

                    {/*Titulo de la sección*/}
                    <Col xs={12} md={12} className="mt-3 mb-3">
                        <h4 className="text-center sub-title-cmh">Servicios de Soporte Terapéutico</h4>
                    </Col>

                    {/*Patología*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="align-items-center">
                            <SelectorCantidad
                                tituloSelector={"Patología"}
                                campoSelector={form.especialidadPatologia}
                                nombreSelector={"especialidadPatologia"}
                                handleChange={handleChange}
                                campoCantidad={form.numeroMedicosPatologia}
                                nombreCantidad={"numeroMedicosPatologia"}
                            />
                        </Row>
                    </Col>

                    {/*Radiología e Imagen*/}
                    <Col xs={12} md={12} className="mb-3">

                        <Row className="align-items-center">
                            <SelectorCantidad
                                tituloSelector={"Radiología e Imagen"}
                                campoSelector={form.especialidadRadiologiaImagen}
                                nombreSelector={"especialidadRadiologiaImagen"}
                                handleChange={handleChange}
                                campoCantidad={form.numeroMedicosRadiologiaImagen}
                                nombreCantidad={"numeroMedicosRadiologiaImagen"}
                            />
                        </Row>
                    </Col>

                    {/*Electrofisiología*/}
                    <Col xs={12} md={12} className="mb-3">

                        <Row className="align-items-center">

                            <SelectorCantidad
                                tituloSelector={"Medicina Física"}
                                campoSelector={form.especialidadMedicinaFisica}
                                nombreSelector={"especialidadMedicinaFisica"}
                                handleChange={handleChange}
                                campoCantidad={form.numeroMedicosMedicinaFisica}
                                nombreCantidad={"numeroMedicosMedicinaFisica"}
                            />
                        </Row>
                    </Col>

                    {/*Rehabilitación*/}
                    <Col xs={12} md={12} className="mb-3">

                        <Row className="align-items-center">

                            <SelectorCantidad
                                tituloSelector={"Rehabilitación"}
                                campoSelector={form.especialidadRehabilitacion}
                                nombreSelector={"especialidadRehabilitacion"}
                                handleChange={handleChange}
                                campoCantidad={form.numeroMedicosRehabilitacion}
                                nombreCantidad={"numeroMedicosRehabilitacion"}
                            />
                        </Row>
                    </Col>

                </Row>
            </Col >

        </Fragment >
    )

}

function GetSelect(props) {
    const { label, value, name, handleChange, options } = props;

    return (
        <Fragment>

            <span>
                <OverlayTrigger
                    placement="top"
                    overlay={
                        <Tooltip id="tooltip-rinion">{label}</Tooltip>
                    }>
                    <FloatingLabel controlId="floatingSelect" label={label}>
                        <Form.Select aria-label="Floating label"
                            value={value ? value : ''}
                            onChange={handleChange} name={name}>
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
                </OverlayTrigger>
            </span>

        </Fragment>
    )

}

function GetSelectTotalMedicos(props) {

    const { label, value, name, handleChange } = props;

    return (
        <Fragment>
            <span>
                <OverlayTrigger
                    placement="top"
                    overlay={
                        <Tooltip id="tooltip-rinion">{label}</Tooltip>
                    }>

                    <InputGroup>

                        <InputGroup.Text id="totalMedicosCredencializados" className="input-group-text-primary"><FontAwesomeIcon icon={faUserDoctor} /></InputGroup.Text>
                        <Form.Control
                            type="number"
                            readOnly
                            placeholder="Nº. Méd."
                            value={value ? value : ''}
                            name={name}
                            onChange={handleChange} />

                    </InputGroup>
                </OverlayTrigger>
            </span>
        </Fragment>
    )

}

function GetInput(props) {

    //we obtain their props
    const { label, value, name, handleChange, tooltipDescrip, min, type, isRequired, placement, show, isReadOnly = false, isTextArea = false, style = null } = props

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
                            min={min}
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

export default SA;