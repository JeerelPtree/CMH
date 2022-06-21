import React, { Fragment } from "react";
import { Container, Col, Row, FloatingLabel, InputGroup, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import { faUserDoctor } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import OPTIONSPSPSE from "../../json/propiaSubrogadoPropioSubrogadoExterno.json"
import OPTIONSAD from "../../json/analogoDigital.json"

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

        await setForm(
            {
                ...form,
                [e.target.name]: e.target.value,
            }
        );

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
                        <GetSelector
                            label="Radiología simple"
                            value={form.radiologiaSimplePSB}
                            tooltipDescrip={`Radiología simple`}
                            name="radiologiaSimplePSB"
                            handleChange={handleChange}
                            options={OPTIONSPSPSE}
                            show={true}
                            style={{ height: '90px' }}
                        />
                    </Col>

                    {/*Radiología simple (no considerar el área de urgencias) Análogo Digital*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetSelector
                            label="Radiología simple"
                            value={form.radiologiaSimpleAD}
                            tooltipDescrip={`Radiología simple`}
                            name="radiologiaSimpleAD"
                            handleChange={handleChange}
                            options={OPTIONSAD}
                            show={true}
                            style={{ height: '90px' }}
                        />
                    </Col>

                    {/*Sala de fluroscopia*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInput
                            label="Salas de fluroscopia"
                            value={form.salasFluroscopia}
                            name="salasFluroscopia"
                            handleChange={handleChange}
                            tooltipDescrip="Número de Salas de fluroscopia"
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />
                    </Col>

                    {/*Sala de fluroscopia Propia, Subrogado propio, Subrogado externo*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetSelector
                            label="Salas de fluroscopia"
                            value={form.salasFluroscopiaPSB}
                            tooltipDescrip={`Salas de fluroscopia`}
                            name="salasFluroscopiaPSB"
                            handleChange={handleChange}
                            options={OPTIONSPSPSE}
                            show={true}
                        />
                    </Col>

                    {/*Sala de fluroscopia Análogo Digital*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetSelector
                            label="Salas de fluroscopia"
                            value={form.salasFluroscopiaAD}
                            tooltipDescrip={`Salas de fluroscopia`}
                            name="salasFluroscopiaAD"
                            handleChange={handleChange}
                            options={OPTIONSAD}
                            show={true}
                        />
                    </Col>

                    {/*Tomografía axial computarizada (TAC)*/}
                    <Col xs={12} md={3} className="mb-3">
                        <GetInput
                            label="Tomografía axial computarizada (TAC)"
                            value={form.salasFluroscopia}
                            name="salasFluroscopia"
                            handleChange={handleChange}
                            tooltipDescrip="Número de Tomografía axial computarizada (TAC)"
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                            style={{ height: '90px' }}
                        />
                    </Col>

                    {/*Tomografía axial computarizada (TAC) Número de cortes*/}
                    <Col xs={12} md={3} className="mb-3">
                        <GetInput
                            label="Número de cortes Tomografía axial computarizada"
                            value={form.salasFluroscopia}
                            name="salasFluroscopia"
                            handleChange={handleChange}
                            tooltipDescrip="Número de cortes de Tomografía axial computarizada (TAC)"
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                            style={{ height: '90px' }}
                        />
                    </Col>

                    {/*Tomografía axial computarizada (TAC) Propia, Subrogado propio, Subrogado externo*/}
                    <Col xs={12} md={3} className="mb-3">
                        <GetSelector
                            label="Tomografía axial computarizada (TAC)"
                            value={form.salasFluroscopiaPSB}
                            tooltipDescrip={`Tomografía axial computarizada (TAC)`}
                            name="salasFluroscopiaPSB"
                            handleChange={handleChange}
                            options={OPTIONSPSPSE}
                            show={true}
                            style={{ height: '90px' }}
                        />
                    </Col>

                    {/*Tomografía axial computarizada (TAC) Análogo Digital*/}
                    <Col xs={12} md={3} className="mb-3">
                        <GetSelector
                            label="Tomografía axial computarizada (TAC)"
                            value={form.salasFluroscopiaAD}
                            tooltipDescrip={`Tomografía axial computarizada (TAC)`}
                            name="salasFluroscopiaAD"
                            handleChange={handleChange}
                            options={OPTIONSAD}
                            show={true}
                            style={{ height: '90px' }}
                        />
                    </Col>

                </Row>
            </Col>

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

function GetSelector(props) {

    //we obtain their props
    const { label, style = null, value, tooltipDescrip, name, handleChange, options, isRequired, show } = props

    if (show == true) {
        return (
            <Fragment>

                <OverlayTrigger
                    placement="top"
                    overlay={
                        <Tooltip id={`tooltip-${name}`}>{tooltipDescrip}</Tooltip>
                    }>
                    <FloatingLabel controlId="floatingSelect" label={label}>
                        <Form.Select
                            aria-label="Floating label"
                            value={value ? value : ''}
                            onChange={handleChange}
                            name={name}
                            required={isRequired}
                            style={style}
                        >
                            <option value="" disabled>Seleccione una opción</option>
                            {
                                options.map((option) => {
                                    return (
                                        <Fragment key={option.id}>
                                            <option value={option.name}>{option.name}</option>
                                        </Fragment>
                                    )
                                })
                            }
                        </Form.Select>
                    </FloatingLabel>
                </OverlayTrigger>

            </Fragment>
        )
    }
}

export default SA;