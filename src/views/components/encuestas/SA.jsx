import React, { Fragment, useState, useEffect } from "react";
import { Container, Col, Row, FloatingLabel, InputGroup, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import { faUserDoctor } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import OPTIONSPSPSE from "../../json/propiaSubrogadoPropioSubrogadoExterno.json"
import OPTIONSAD from "../../json/analogoDigital.json"
import YESORNOTOPTIONS from "../../json/yesOrNot.json"

//import axios from "axios"

//we import css
import "../../../globalStyles.css"

function SA(props) {

    //declared the variables, constants ans states for this module
    const { form, setForm } = props;

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

                            <ServiciosApoyoDiagnosticoTerapeutico form={form} handleChange={handleChange} />

                            <Urgencias form={form} handleChange={handleChange} />

                            <OtrosServicios form={form} handleChange={handleChange} />

                            <Transplantes form={form} handleChange={handleChange} />

                            <Prueba form={form} handleChange={handleChange} setForm={setForm} />

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

                    <Col xs={12} md={12}>
                        <Row className="justify-content-center">

                            {/*Central de enfermerías*/}
                            <Col xs={12} md={4} className="mb-3">
                                <GetInput
                                    label="Centrales de enfermerías"
                                    value={form.centralesEnfermerias}
                                    name="centralesEnfermerias"
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

                        </Row>
                    </Col>

                    <Col xs={12} md={12}>
                        <Row className="justify-content-center">

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

                            {/*Subalmacenes Propia, Subrogado propio, Subrogado externo*/}
                            <Col xs={12} md={4} className="mb-3">
                                <GetSelector
                                    label="Subalmacenes"
                                    value={form.subAlmacenesPSB}
                                    tooltipDescrip={`Subalmacenes`}
                                    name="subAlmacenesPSB"
                                    handleChange={handleChange}
                                    options={OPTIONSPSPSE}
                                    show={true}
                                    isRequired={true}
                                />
                            </Col>

                        </Row>
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
                            isRequired={true}
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
                            isRequired={true}
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
                            isRequired={true}
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
                            isRequired={true}
                        />
                    </Col>

                    {/*Tomografía axial computarizada (TAC)*/}
                    <Col xs={12} md={3} className="mb-3">
                        <GetInput
                            label="Tomografía axial computarizada (TAC)"
                            value={form.tomografiaAxialComputarizada}
                            name="tomografiaAxialComputarizada"
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
                            label="Número de cortes de TAC"
                            value={form.tomografiaAxialComputarizadaCortes}
                            name="tomografiaAxialComputarizadaCortes"
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
                            value={form.tomografiaAxialComputarizadaPSB}
                            tooltipDescrip={`Tomografía axial computarizada (TAC)`}
                            name="tomografiaAxialComputarizadaPSB"
                            handleChange={handleChange}
                            options={OPTIONSPSPSE}
                            show={true}
                            style={{ height: '90px' }}
                            isRequired={true}
                        />
                    </Col>

                    {/*Tomografía axial computarizada (TAC) Análogo Digital*/}
                    <Col xs={12} md={3} className="mb-3">
                        <GetSelector
                            label="Tomografía axial computarizada (TAC)"
                            value={form.tomografiaAxialComputarizadaAD}
                            tooltipDescrip={`Tomografía axial computarizada (TAC)`}
                            name="tomografiaAxialComputarizadaAD"
                            handleChange={handleChange}
                            options={OPTIONSAD}
                            show={true}
                            isRequired={true}
                            style={{ height: '90px' }}
                        />
                    </Col>

                    {/*Ultrasonografo*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInput
                            label="Ultrasonografo"
                            value={form.ultrasonografo}
                            name="ultrasonografo"
                            handleChange={handleChange}
                            tooltipDescrip="Número de Ultrasonografo"
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />
                    </Col>

                    {/*Ultrasonografo Propia, Subrogado propio, Subrogado externo*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetSelector
                            label="Ultrasonografo"
                            value={form.ultrasonografoPSB}
                            tooltipDescrip={`Ultrasonografo`}
                            name="ultrasonografoPSB"
                            handleChange={handleChange}
                            options={OPTIONSPSPSE}
                            show={true}
                            isRequired={true}
                        />
                    </Col>

                    {/*Ultrasonografo Análogo Digital*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetSelector
                            label="Ultrasonografo"
                            value={form.ultrasonografoAD}
                            tooltipDescrip={`Ultrasonografo`}
                            name="ultrasonografoAD"
                            handleChange={handleChange}
                            options={OPTIONSAD}
                            show={true}
                            isRequired={true}
                        />
                    </Col>

                    {/*Mastografo*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInput
                            label="Mastografo"
                            value={form.mastografo}
                            name="mastografo"
                            handleChange={handleChange}
                            tooltipDescrip="Número de Mastografo"
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />
                    </Col>

                    {/*Mastografo Propia, Subrogado propio, Subrogado externo*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetSelector
                            label="Mastografo"
                            value={form.mastografoPSB}
                            tooltipDescrip={`Mastografo`}
                            name="mastografoPSB"
                            handleChange={handleChange}
                            options={OPTIONSPSPSE}
                            show={true}
                            isRequired={true}
                        />
                    </Col>

                    {/*Mastografo Análogo Digital*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetSelector
                            label="Mastografo"
                            value={form.mastografoAD}
                            tooltipDescrip={`Mastografo`}
                            name="mastografoAD"
                            handleChange={handleChange}
                            options={OPTIONSAD}
                            show={true}
                            isRequired={true}
                        />
                    </Col>

                    {/*Densitómetro*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInput
                            label="Densitómetro"
                            value={form.densitometro}
                            name="densitometro"
                            handleChange={handleChange}
                            tooltipDescrip="Número de Densitómetro"
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />
                    </Col>

                    {/*Densitómetro Propia, Subrogado propio, Subrogado externo*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetSelector
                            label="Densitómetro"
                            value={form.densitometroPSB}
                            tooltipDescrip={`Densitómetro`}
                            name="densitometroPSB"
                            handleChange={handleChange}
                            options={OPTIONSPSPSE}
                            show={true}
                            isRequired={true}
                        />
                    </Col>

                    {/*Densitómetro Análogo Digital*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetSelector
                            label="Densitómetro"
                            value={form.densitometroAD}
                            tooltipDescrip={`Densitómetro`}
                            name="densitometroAD"
                            handleChange={handleChange}
                            options={OPTIONSAD}
                            show={true}
                            isRequired={true}
                        />
                    </Col>

                    {/*Resonancia Magnética Nuclear (RM)*/}
                    <Col xs={12} md={3} className="mb-3">
                        <GetInput
                            label="Resonancia Magnética Nuclear (RM)"
                            value={form.resonanciaMagneticaNuclear}
                            name="resonanciaMagneticaNuclear"
                            handleChange={handleChange}
                            tooltipDescrip="Número de Resonancia Magnética Nuclear (RM)"
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                            style={{ height: '90px' }}
                        />
                    </Col>

                    {/*Resonancia Magnética Nuclear (RM) Número de cortes*/}
                    <Col xs={12} md={3} className="mb-3">
                        <GetInput
                            label="Número de cortes de RM"
                            value={form.resonanciaMagneticaNuclearCortes}
                            name="resonanciaMagneticaNuclearCortes"
                            handleChange={handleChange}
                            tooltipDescrip="Número de cortes de Resonancia Magnética Nuclear (RM)"
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                            style={{ height: '90px' }}
                        />
                    </Col>

                    {/*Resonancia Magnética Nuclear (RM) Propia, Subrogado propio, Subrogado externo*/}
                    <Col xs={12} md={3} className="mb-3">
                        <GetSelector
                            label="Resonancia Magnética Nuclear (RM)"
                            value={form.resonanciaMagneticaNuclearPSB}
                            tooltipDescrip={`Resonancia Magnética Nuclear (RM)`}
                            name="resonanciaMagneticaNuclearPSB"
                            handleChange={handleChange}
                            options={OPTIONSPSPSE}
                            show={true}
                            style={{ height: '90px' }}
                            isRequired={true}
                        />
                    </Col>

                    {/*Resonancia Magnética Nuclear (RM) Análogo Digital*/}
                    <Col xs={12} md={3} className="mb-3">
                        <GetSelector
                            label="Resonancia Magnética Nuclear (RM)"
                            value={form.resonanciaMagneticaNuclearAD}
                            tooltipDescrip={`Resonancia Magnética Nuclear (RM)`}
                            name="resonanciaMagneticaNuclearAD"
                            handleChange={handleChange}
                            options={OPTIONSAD}
                            show={true}
                            isRequired={true}
                            style={{ height: '90px' }}
                        />
                    </Col>

                    {/*Sala de Hemodinamia*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInput
                            label="Salas de Hemodinamia"
                            value={form.salasHemodinamia}
                            name="salasHemodinamia"
                            handleChange={handleChange}
                            tooltipDescrip="Número de Salas de Hemodinamia"
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />
                    </Col>

                    {/*Sala de Hemodinamia Propia, Subrogado propio, Subrogado externo*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetSelector
                            label="Salas de Hemodinamia"
                            value={form.salasHemodinamiaPSB}
                            tooltipDescrip={`Salas de Hemodinamia`}
                            name="salasHemodinamiaPSB"
                            handleChange={handleChange}
                            options={OPTIONSPSPSE}
                            show={true}
                            isRequired={true}
                        />
                    </Col>

                    {/*Sala de Hemodinamia Análogo Digital*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetSelector
                            label="Salas de Hemodinamia"
                            value={form.salasHemodinamiaAD}
                            tooltipDescrip={`Salas de Hemodinamia`}
                            name="salasHemodinamiaAD"
                            handleChange={handleChange}
                            options={OPTIONSAD}
                            show={true}
                            isRequired={true}
                        />
                    </Col>

                    {/*Gammacámara*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInput
                            label="Gammacámara"
                            value={form.gammacamara}
                            name="gammacamara"
                            handleChange={handleChange}
                            tooltipDescrip="Número de Gammacámara"
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />
                    </Col>

                    {/*Gammacámara Propia, Subrogado propio, Subrogado externo*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetSelector
                            label="Gammacámara"
                            value={form.gammacamaraPSB}
                            tooltipDescrip={`Gammacámara`}
                            name="gammacamaraPSB"
                            handleChange={handleChange}
                            options={OPTIONSPSPSE}
                            show={true}
                            isRequired={true}
                        />
                    </Col>

                    {/*Gammacámara Análogo Digital*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetSelector
                            label="Gammacámara"
                            value={form.gammacamaraAD}
                            tooltipDescrip={`Gammacámara`}
                            name="gammacamaraAD"
                            handleChange={handleChange}
                            options={OPTIONSAD}
                            show={true}
                            isRequired={true}
                        />
                    </Col>

                    {/*Tomografía por Emisión de Positrones (PET)*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInput
                            label="Tomografía por Emisión de Positrones (PET)"
                            value={form.tomografiaEmisionPositrones}
                            name="tomografiaEmisionPositrones"
                            handleChange={handleChange}
                            tooltipDescrip="Número de Tomografía por Emisión de Positrones (PET)"
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                            style={{ height: '90px' }}
                        />
                    </Col>

                    {/*Tomografía por Emisión de Positrones (PET) Propia, Subrogado propio, Subrogado externo*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetSelector
                            label="Tomografía por Emisión de Positrones (PET)"
                            value={form.tomografiaEmisionPositronesPSB}
                            tooltipDescrip={`Tomografía por Emisión de Positrones (PET)`}
                            name="tomografiaEmisionPositronesPSB"
                            handleChange={handleChange}
                            options={OPTIONSPSPSE}
                            show={true}
                            isRequired={true}
                            style={{ height: '90px' }}
                        />
                    </Col>

                    {/*Tomografía por Emisión de Positrones (PET) Análogo Digital*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetSelector
                            label="Tomografía por Emisión de Positrones (PET)"
                            value={form.tomografiaEmisionPositronesAD}
                            tooltipDescrip={`Tomografía por Emisión de Positrones (PET)`}
                            name="tomografiaEmisionPositronesAD"
                            handleChange={handleChange}
                            options={OPTIONSAD}
                            show={true}
                            isRequired={true}
                            style={{ height: '90px' }}
                        />
                    </Col>

                    {/*Radioterapia*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInput
                            label="Radioterapia"
                            value={form.radioterapia}
                            name="radioterapia"
                            handleChange={handleChange}
                            tooltipDescrip="Número de Radioterapia"
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />
                    </Col>

                    {/*Radioterapia Propia, Subrogado propio, Subrogado externo*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetSelector
                            label="Radioterapia"
                            value={form.radioterapiaPSB}
                            tooltipDescrip={`Radioterapia`}
                            name="radioterapiaPSB"
                            handleChange={handleChange}
                            options={OPTIONSPSPSE}
                            show={true}
                            isRequired={true}
                        />
                    </Col>

                    {/*Radioterapia Análogo Digital*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetSelector
                            label="Radioterapia"
                            value={form.radioterapiaAD}
                            tooltipDescrip={`Radioterapia`}
                            name="radioterapiaAD"
                            handleChange={handleChange}
                            options={OPTIONSAD}
                            show={true}
                            isRequired={true}
                        />
                    </Col>

                    {/*Rayos X rodable*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInput
                            label="Rayos X rodable"
                            value={form.rayosXRodable}
                            name="rayosXRodable"
                            handleChange={handleChange}
                            tooltipDescrip="Número de Rayos X rodable"
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />
                    </Col>

                    {/*Rayos X rodable Propia, Subrogado propio, Subrogado externo*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetSelector
                            label="Rayos X rodable"
                            value={form.rayosXRodablePSB}
                            tooltipDescrip={`Rayos X rodable`}
                            name="rayosXRodablePSB"
                            handleChange={handleChange}
                            options={OPTIONSPSPSE}
                            show={true}
                            isRequired={true}
                        />
                    </Col>

                    {/*Rayos X rodable Análogo Digital*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetSelector
                            label="Rayos X rodable"
                            value={form.rayosXRodableAD}
                            tooltipDescrip={`Rayos X rodable`}
                            name="rayosXRodableAD"
                            handleChange={handleChange}
                            options={OPTIONSAD}
                            show={true}
                            isRequired={true}
                        />
                    </Col>

                    {/*Arco en C*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInput
                            label="Arco en C"
                            value={form.ArcoC}
                            name="ArcoC"
                            handleChange={handleChange}
                            tooltipDescrip="Número de Arco en C"
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />
                    </Col>

                    {/*Arco en C Propia, Subrogado propio, Subrogado externo*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetSelector
                            label="Arco en C"
                            value={form.ArcoCPSB}
                            tooltipDescrip={`Arco en C`}
                            name="ArcoCPSB"
                            handleChange={handleChange}
                            options={OPTIONSPSPSE}
                            show={true}
                            isRequired={true}
                        />
                    </Col>

                    {/*Arco en C Análogo Digital*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetSelector
                            label="Arco en C"
                            value={form.ArcoCAD}
                            tooltipDescrip={`Arco en C`}
                            name="ArcoCAD"
                            handleChange={handleChange}
                            options={OPTIONSAD}
                            show={true}
                            isRequired={true}
                        />
                    </Col>

                    {/*Electromiografo*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInput
                            label="Electromiografo"
                            value={form.electromiografo}
                            name="electromiografo"
                            handleChange={handleChange}
                            tooltipDescrip="Número de Electromiografo"
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />
                    </Col>

                    {/*Electromiografo Propia, Subrogado propio, Subrogado externo*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetSelector
                            label="Electromiografo"
                            value={form.electromiografoPSB}
                            tooltipDescrip={`Electromiografo`}
                            name="electromiografoPSB"
                            handleChange={handleChange}
                            options={OPTIONSPSPSE}
                            show={true}
                            isRequired={true}
                        />
                    </Col>

                    {/*Electromiografo Análogo Digital*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetSelector
                            label="Electromiografo"
                            value={form.electromiografoAD}
                            tooltipDescrip={`Electromiografo`}
                            name="electromiografoAD"
                            handleChange={handleChange}
                            options={OPTIONSAD}
                            show={true}
                            isRequired={true}
                        />
                    </Col>

                    {/*Inmunoterapia de corta estancia*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInput
                            label="Inmunoterapia de corta estancia"
                            value={form.inmunoterapiaCortaEstancia}
                            name="inmunoterapiaCortaEstancia"
                            handleChange={handleChange}
                            tooltipDescrip="Número de Inmunoterapia de corta estancia"
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />
                    </Col>

                    {/*Inmunoterapia de corta estancia Propia, Subrogado propio, Subrogado externo*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetSelector
                            label="Inmunoterapia de corta estancia"
                            value={form.inmunoterapiaCortaEstanciaPSB}
                            tooltipDescrip={`Inmunoterapia de corta estancia`}
                            name="inmunoterapiaCortaEstanciaPSB"
                            handleChange={handleChange}
                            options={OPTIONSPSPSE}
                            show={true}
                            isRequired={true}
                        />
                    </Col>

                    {/*Inmunoterapia de corta estancia Análogo Digital*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetSelector
                            label="inmunoterapiaCortaEstancia"
                            value={form.inmunoterapiaCortaEstanciaAD}
                            tooltipDescrip={`Inmunoterapia de corta estancia`}
                            name="inmunoterapiaCortaEstanciaAD"
                            handleChange={handleChange}
                            options={OPTIONSAD}
                            show={true}
                            isRequired={true}
                        />
                    </Col>

                    {/*Laparoscopía*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetInput
                            label="Laparoscopía"
                            value={form.laparoscopia}
                            name="laparoscopia"
                            handleChange={handleChange}
                            tooltipDescrip="Número de Laparoscopía"
                            type="number"
                            min={0}
                            isRequired={true}
                            placement="top"
                            show={true}
                        />
                    </Col>

                    {/*Laparoscopía Propia, Subrogado propio, Subrogado externo*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetSelector
                            label="Laparoscopía"
                            value={form.laparoscopiaPSB}
                            tooltipDescrip={`Laparoscopía`}
                            name="laparoscopiaPSB"
                            handleChange={handleChange}
                            options={OPTIONSPSPSE}
                            show={true}
                            isRequired={true}
                        />
                    </Col>

                    {/*Laparoscopía Análogo Digital*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetSelector
                            label="Laparoscopía"
                            value={form.laparoscopiaAD}
                            tooltipDescrip={`Laparoscopía`}
                            name="laparoscopiaAD"
                            handleChange={handleChange}
                            options={OPTIONSAD}
                            show={true}
                            isRequired={true}
                        />
                    </Col>

                </Row>
            </Col>

        </Fragment>
    )
}

function ServiciosApoyoDiagnosticoTerapeutico(props) {

    const { handleChange, form } = props;

    return (
        <Fragment>

            {/*Servicios de Apoyo Diagnóstico-Terapéutico*/}
            <Col xs={12} md={12} className="mt-3">
                <Row>

                    <Col xs={12} md={12} className="mb-3">
                        <h4 className="text-center sub-title-cmh">Servicios de Apoyo Diagnóstico-Terapéutico</h4>
                    </Col>

                    {/*Laboratorio de análisis clínicos*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">

                            {/*Laboratorio de análisis clínicos*/}
                            <Col xs={12} md={4}>
                                <GetSelector
                                    label="Laboratorio de análisis clínicos"
                                    value={form.laboratorioAnalisisClinicos}
                                    tooltipDescrip={`¿Cuentas con el servicio de Laboratorio de análisis clínicos?`}
                                    name="laboratorioAnalisisClinicos"
                                    handleChange={handleChange}
                                    options={YESORNOTOPTIONS}
                                    show={true}
                                    isRequired={true}
                                />
                            </Col>

                            {

                                form.laboratorioAnalisisClinicos === "Si" ?
                                    <>
                                        {/*Laboratorio de análisis clínicos Propia, Subrogado propio, Subrogado externo*/}
                                        <Col xs={12} md={4} className="mb-3">
                                            <GetSelector
                                                label="Laboratorio de análisis clínicos"
                                                value={form.laboratorioAnalisisClinicosPSB}
                                                tooltipDescrip={`Laboratorio de análisis clínicos`}
                                                name="laboratorioAnalisisClinicosPSB"
                                                handleChange={handleChange}
                                                options={OPTIONSPSPSE}
                                                show={true}
                                                isRequired={true}
                                            />
                                        </Col>
                                    </> : null
                            }

                        </Row>
                    </Col>

                    {/*Banco de sangre*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">

                            {/*Banco de sangre*/}
                            <Col xs={12} md={4}>
                                <GetSelector
                                    label="Banco de sangre"
                                    value={form.bancoSangre}
                                    tooltipDescrip={`¿Cuentas con el servicio de Banco de sangre?`}
                                    name="bancoSangre"
                                    handleChange={handleChange}
                                    options={YESORNOTOPTIONS}
                                    show={true}
                                    isRequired={true}
                                />
                            </Col>

                            {

                                form.bancoSangre === "Si" ?
                                    <>
                                        {/*Banco de sangre Propia, Subrogado propio, Subrogado externo*/}
                                        <Col xs={12} md={4} className="mb-3">
                                            <GetSelector
                                                label="Banco de sangre"
                                                value={form.bancoSangrePSB}
                                                tooltipDescrip={`Banco de sangre`}
                                                name="bancoSangrePSB"
                                                handleChange={handleChange}
                                                options={OPTIONSPSPSE}
                                                show={true}
                                                isRequired={true}
                                            />
                                        </Col>
                                    </> : null
                            }

                        </Row>
                    </Col>

                    {/*Transfusión de hemo componentes*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">

                            {/*Transfusión de hemo componentes*/}
                            <Col xs={12} md={4}>
                                <GetSelector
                                    label="Transfusión de hemo componentes"
                                    value={form.transfusionHemoComponentes}
                                    tooltipDescrip={`¿Cuentas con el servicio de Transfusión de hemo componentes?`}
                                    name="transfusionHemoComponentes"
                                    handleChange={handleChange}
                                    options={YESORNOTOPTIONS}
                                    show={true}
                                    isRequired={true}
                                />
                            </Col>

                            {

                                form.transfusionHemoComponentes === "Si" ?
                                    <>
                                        {/*Transfusión de hemo componentes Propia, Subrogado propio, Subrogado externo*/}
                                        <Col xs={12} md={4} className="mb-3">
                                            <GetSelector
                                                label="Transfusión de hemo componentes"
                                                value={form.transfusionHemoComponentesPSB}
                                                tooltipDescrip={`Transfusión de hemo componentes`}
                                                name="transfusionHemoComponentesPSB"
                                                handleChange={handleChange}
                                                options={OPTIONSPSPSE}
                                                show={true}
                                                isRequired={true}
                                            />
                                        </Col>
                                    </> : null
                            }

                        </Row>
                    </Col>

                    {/*Aferesis plaquetarias*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">

                            {/*Aferesis plaquetarias*/}
                            <Col xs={12} md={4}>
                                <GetSelector
                                    label="Aferesis plaquetarias"
                                    value={form.aferesisPlaquetarias}
                                    tooltipDescrip={`¿Cuentas con el servicio de Aferesis plaquetarias?`}
                                    name="aferesisPlaquetarias"
                                    handleChange={handleChange}
                                    options={YESORNOTOPTIONS}
                                    show={true}
                                    isRequired={true}
                                />
                            </Col>

                            {

                                form.aferesisPlaquetarias === "Si" ?
                                    <>
                                        {/*Aferesis plaquetarias Propia, Subrogado propio, Subrogado externo*/}
                                        <Col xs={12} md={4} className="mb-3">
                                            <GetSelector
                                                label="Aferesis plaquetarias"
                                                value={form.aferesisPlaquetariasPSB}
                                                tooltipDescrip={`Aferesis plaquetarias`}
                                                name="aferesisPlaquetariasPSB"
                                                handleChange={handleChange}
                                                options={OPTIONSPSPSE}
                                                show={true}
                                                isRequired={true}
                                            />
                                        </Col>
                                    </> : null
                            }

                        </Row>
                    </Col>

                    {/*Patología*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">

                            {/*Patología*/}
                            <Col xs={12} md={4}>
                                <GetSelector
                                    label="Patología"
                                    value={form.patologia}
                                    tooltipDescrip={`¿Cuentas con el servicio de Patología?`}
                                    name="patologia"
                                    handleChange={handleChange}
                                    options={YESORNOTOPTIONS}
                                    show={true}
                                    isRequired={true}
                                />
                            </Col>

                            {

                                form.patologia === "Si" ?
                                    <>
                                        {/*Patología Propia, Subrogado propio, Subrogado externo*/}
                                        <Col xs={12} md={4} className="mb-3">
                                            <GetSelector
                                                label="Patología"
                                                value={form.patologiaPSB}
                                                tooltipDescrip={`Patología`}
                                                name="patologiaPSB"
                                                handleChange={handleChange}
                                                options={OPTIONSPSPSE}
                                                show={true}
                                                isRequired={true}
                                            />
                                        </Col>
                                    </> : null
                            }

                        </Row>
                    </Col>

                    {/*Pruebas genético moleculares*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">

                            {/*Pruebas genético moleculares*/}
                            <Col xs={12} md={4}>
                                <GetSelector
                                    label="Pruebas genético moleculares"
                                    value={form.pruebasGeneticoMoleculares}
                                    tooltipDescrip={`¿Cuentas con el servicio de Pruebas genético moleculares?`}
                                    name="pruebasGeneticoMoleculares"
                                    handleChange={handleChange}
                                    options={YESORNOTOPTIONS}
                                    show={true}
                                    isRequired={true}
                                />
                            </Col>

                            {

                                form.pruebasGeneticoMoleculares === "Si" ?
                                    <>
                                        {/*Pruebas genético moleculares Propia, Subrogado propio, Subrogado externo*/}
                                        <Col xs={12} md={4} className="mb-3">
                                            <GetSelector
                                                label="Pruebas genético moleculares"
                                                value={form.pruebasGeneticoMolecularesPSB}
                                                tooltipDescrip={`Pruebas genético moleculares`}
                                                name="pruebasGeneticoMolecularesPSB"
                                                handleChange={handleChange}
                                                options={OPTIONSPSPSE}
                                                show={true}
                                                isRequired={true}
                                            />
                                        </Col>
                                    </> : null
                            }

                        </Row>
                    </Col>

                    {/*Hemodiálisis*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">

                            {/*Hemodiálisis*/}
                            <Col xs={12} md={4}>
                                <GetSelector
                                    label="Hemodiálisis"
                                    value={form.hemodialisis}
                                    tooltipDescrip={`¿Cuentas con el servicio de Hemodiálisis?`}
                                    name="hemodialisis"
                                    handleChange={handleChange}
                                    options={YESORNOTOPTIONS}
                                    show={true}
                                    isRequired={true}
                                />
                            </Col>

                            {

                                form.hemodialisis === "Si" ?
                                    <>
                                        {/*Hemodiálisis Propia, Subrogado propio, Subrogado externo*/}
                                        <Col xs={12} md={4} className="mb-3">
                                            <GetSelector
                                                label="Hemodiálisis"
                                                value={form.hemodialisisPSB}
                                                tooltipDescrip={`Hemodiálisis`}
                                                name="hemodialisisPSB"
                                                handleChange={handleChange}
                                                options={OPTIONSPSPSE}
                                                show={true}
                                                isRequired={true}
                                            />
                                        </Col>
                                    </> : null
                            }

                        </Row>
                    </Col>

                    {/*Diálisis peritoneal*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">

                            {/*Diálisis peritoneal*/}
                            <Col xs={12} md={4}>
                                <GetSelector
                                    label="Diálisis peritoneal"
                                    value={form.dialisisPeritoneal}
                                    tooltipDescrip={`¿Cuentas con el servicio de Diálisis peritoneal?`}
                                    name="dialisisPeritoneal"
                                    handleChange={handleChange}
                                    options={YESORNOTOPTIONS}
                                    show={true}
                                    isRequired={true}
                                />
                            </Col>

                            {

                                form.dialisisPeritoneal === "Si" ?
                                    <>
                                        {/*Diálisis peritoneal Propia, Subrogado propio, Subrogado externo*/}
                                        <Col xs={12} md={4} className="mb-3">
                                            <GetSelector
                                                label="Diálisis peritoneal"
                                                value={form.dialisisPeritonealPSB}
                                                tooltipDescrip={`Diálisis peritoneal`}
                                                name="dialisisPeritonealPSB"
                                                handleChange={handleChange}
                                                options={OPTIONSPSPSE}
                                                show={true}
                                                isRequired={true}
                                            />
                                        </Col>
                                    </> : null
                            }

                        </Row>
                    </Col>

                    {/*Quimioterapia*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">

                            {/*Quimioterapia*/}
                            <Col xs={12} md={4}>
                                <GetSelector
                                    label="Quimioterapia"
                                    value={form.quimioterapia}
                                    tooltipDescrip={`¿Cuentas con el servicio de Quimioterapia?`}
                                    name="quimioterapia"
                                    handleChange={handleChange}
                                    options={YESORNOTOPTIONS}
                                    show={true}
                                    isRequired={true}
                                />
                            </Col>

                            {

                                form.quimioterapia === "Si" ?
                                    <>
                                        {/*Quimioterapia Propia, Subrogado propio, Subrogado externo*/}
                                        <Col xs={12} md={4} className="mb-3">
                                            <GetSelector
                                                label="Quimioterapia"
                                                value={form.quimioterapiaPSB}
                                                tooltipDescrip={`Quimioterapia`}
                                                name="quimioterapiaPSB"
                                                handleChange={handleChange}
                                                options={OPTIONSPSPSE}
                                                show={true}
                                                isRequired={true}
                                            />
                                        </Col>
                                    </> : null
                            }

                        </Row>
                    </Col>

                    {/*Unidad de quemados*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">

                            {/*Unidad de quemados*/}
                            <Col xs={12} md={4}>
                                <GetSelector
                                    label="Unidad de quemados"
                                    value={form.unidadQuemados}
                                    tooltipDescrip={`¿Cuentas con el servicio de Unidad de quemados?`}
                                    name="unidadQuemados"
                                    handleChange={handleChange}
                                    options={YESORNOTOPTIONS}
                                    show={true}
                                    isRequired={true}
                                />
                            </Col>

                            {

                                form.unidadQuemados === "Si" ?
                                    <>
                                        {/*Unidad de quemados Propia, Subrogado propio, Subrogado externo*/}
                                        <Col xs={12} md={4} className="mb-3">
                                            <GetSelector
                                                label="Unidad de quemados"
                                                value={form.unidadQuemadosPSB}
                                                tooltipDescrip={`Unidad de quemados`}
                                                name="unidadQuemadosPSB"
                                                handleChange={handleChange}
                                                options={OPTIONSPSPSE}
                                                show={true}
                                                isRequired={true}
                                            />
                                        </Col>
                                    </> : null
                            }

                        </Row>
                    </Col>

                    {/*Rehabilitación y fisiatría*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">

                            {/*Rehabilitación y fisiatría*/}
                            <Col xs={12} md={4}>
                                <GetSelector
                                    label="Rehabilitación y fisiatría"
                                    value={form.rehabilitacionFisiatria}
                                    tooltipDescrip={`¿Cuentas con el servicio de Rehabilitación y fisiatría?`}
                                    name="rehabilitacionFisiatria"
                                    handleChange={handleChange}
                                    options={YESORNOTOPTIONS}
                                    show={true}
                                    isRequired={true}
                                />
                            </Col>

                            {

                                form.rehabilitacionFisiatria === "Si" ?
                                    <>
                                        {/*Rehabilitación y fisiatría Propia, Subrogado propio, Subrogado externo*/}
                                        <Col xs={12} md={4} className="mb-3">
                                            <GetSelector
                                                label="Rehabilitación y fisiatría"
                                                value={form.rehabilitacionFisiatriaPSB}
                                                tooltipDescrip={`Rehabilitación y fisiatría`}
                                                name="rehabilitacionFisiatriaPSB"
                                                handleChange={handleChange}
                                                options={OPTIONSPSPSE}
                                                show={true}
                                                isRequired={true}
                                            />
                                        </Col>
                                    </> : null
                            }

                        </Row>
                    </Col>

                    {/*Rehabilitación cardiopulmonar*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">

                            {/*Rehabilitación cardiopulmonar*/}
                            <Col xs={12} md={4}>
                                <GetSelector
                                    label="Rehabilitación cardiopulmonar"
                                    value={form.rehabilitacionCardiopulmonar}
                                    tooltipDescrip={`¿Cuentas con el servicio de Rehabilitación cardiopulmonar?`}
                                    name="rehabilitacionCardiopulmonar"
                                    handleChange={handleChange}
                                    options={YESORNOTOPTIONS}
                                    show={true}
                                    isRequired={true}
                                />
                            </Col>

                            {

                                form.rehabilitacionCardiopulmonar === "Si" ?
                                    <>
                                        {/*Rehabilitación cardiopulmonar Propia, Subrogado propio, Subrogado externo*/}
                                        <Col xs={12} md={4} className="mb-3">
                                            <GetSelector
                                                label="Rehabilitación cardiopulmonar"
                                                value={form.rehabilitacionCardiopulmonarPSB}
                                                tooltipDescrip={`Rehabilitación cardiopulmonar`}
                                                name="rehabilitacionCardiopulmonarPSB"
                                                handleChange={handleChange}
                                                options={OPTIONSPSPSE}
                                                show={true}
                                                isRequired={true}
                                            />
                                        </Col>
                                    </> : null
                            }

                        </Row>
                    </Col>

                    {/*Colonoscopía*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">

                            {/*Colonoscopía*/}
                            <Col xs={12} md={4}>
                                <GetSelector
                                    label="Colonoscopía"
                                    value={form.colonoscopia}
                                    tooltipDescrip={`¿Cuentas con el servicio de Colonoscopía?`}
                                    name="colonoscopia"
                                    handleChange={handleChange}
                                    options={YESORNOTOPTIONS}
                                    show={true}
                                    isRequired={true}
                                />
                            </Col>

                            {

                                form.colonoscopia === "Si" ?
                                    <>
                                        {/*Colonoscopía Propia, Subrogado propio, Subrogado externo*/}
                                        <Col xs={12} md={4} className="mb-3">
                                            <GetSelector
                                                label="Colonoscopía"
                                                value={form.colonoscopiaPSB}
                                                tooltipDescrip={`Colonoscopía`}
                                                name="colonoscopiaPSB"
                                                handleChange={handleChange}
                                                options={OPTIONSPSPSE}
                                                show={true}
                                                isRequired={true}
                                            />
                                        </Col>
                                    </> : null
                            }

                        </Row>
                    </Col>

                    {/*Endoscopía*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">

                            {/*Endoscopía*/}
                            <Col xs={12} md={4}>
                                <GetSelector
                                    label="Endoscopía"
                                    value={form.endoscopia}
                                    tooltipDescrip={`¿Cuentas con el servicio de Endoscopía?`}
                                    name="endoscopia"
                                    handleChange={handleChange}
                                    options={YESORNOTOPTIONS}
                                    show={true}
                                    isRequired={true}
                                />
                            </Col>

                            {

                                form.endoscopia === "Si" ?
                                    <>
                                        {/*Endoscopía Propia, Subrogado propio, Subrogado externo*/}
                                        <Col xs={12} md={4} className="mb-3">
                                            <GetSelector
                                                label="Endoscopía"
                                                value={form.endoscopiaPSB}
                                                tooltipDescrip={`Endoscopía`}
                                                name="endoscopiaPSB"
                                                handleChange={handleChange}
                                                options={OPTIONSPSPSE}
                                                show={true}
                                                isRequired={true}
                                            />
                                        </Col>
                                    </> : null
                            }

                        </Row>
                    </Col>

                    {/*Centro de mezclas*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">

                            {/*Centro de mezclas*/}
                            <Col xs={12} md={4}>
                                <GetSelector
                                    label="Centro de mezclas"
                                    value={form.centroMezclas}
                                    tooltipDescrip={`¿Cuentas con el servicio de Centro de mezclas?`}
                                    name="centroMezclas"
                                    handleChange={handleChange}
                                    options={YESORNOTOPTIONS}
                                    show={true}
                                    isRequired={true}
                                />
                            </Col>

                            {

                                form.centroMezclas === "Si" ?
                                    <>
                                        {/*Centro de mezclas Propia, Subrogado propio, Subrogado externo*/}
                                        <Col xs={12} md={4} className="mb-3">
                                            <GetSelector
                                                label="Centro de mezclas"
                                                value={form.centroMezclasPSB}
                                                tooltipDescrip={`Centro de mezclas`}
                                                name="centroMezclasPSB"
                                                handleChange={handleChange}
                                                options={OPTIONSPSPSE}
                                                show={true}
                                                isRequired={true}
                                            />
                                        </Col>
                                    </> : null
                            }

                        </Row>
                    </Col>

                    {/*Neurofisiología*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">

                            {/*Neurofisiología*/}
                            <Col xs={12} md={4}>
                                <GetSelector
                                    label="Neurofisiología"
                                    value={form.neurofisiologia}
                                    tooltipDescrip={`¿Cuentas con el servicio de Neurofisiología?`}
                                    name="neurofisiologia"
                                    handleChange={handleChange}
                                    options={YESORNOTOPTIONS}
                                    show={true}
                                    isRequired={true}
                                />
                            </Col>

                            {

                                form.neurofisiologia === "Si" ?
                                    <>
                                        {/*Neurofisiología Propia, Subrogado propio, Subrogado externo*/}
                                        <Col xs={12} md={4} className="mb-3">
                                            <GetSelector
                                                label="Neurofisiología"
                                                value={form.neurofisiologiaPSB}
                                                tooltipDescrip={`Neurofisiología`}
                                                name="neurofisiologiaPSB"
                                                handleChange={handleChange}
                                                options={OPTIONSPSPSE}
                                                show={true}
                                                isRequired={true}
                                            />
                                        </Col>
                                    </> : null
                            }

                        </Row>
                    </Col>

                    {/*Servicio de Evaluaciones Médicas (Check up´s)*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">

                            {/*Servicio de Evaluaciones Médicas (Check up´s)*/}
                            <Col xs={12} md={5}>
                                <GetSelector
                                    label="Servicio de Evaluaciones Médicas (Check up´s)"
                                    value={form.servicioEvaluacionesMedicas}
                                    tooltipDescrip={`¿Cuentas con el servicio de Servicio de Evaluaciones Médicas (Check up´s)?`}
                                    name="servicioEvaluacionesMedicas"
                                    handleChange={handleChange}
                                    options={YESORNOTOPTIONS}
                                    show={true}
                                    isRequired={true}
                                />
                            </Col>

                            {

                                form.servicioEvaluacionesMedicas === "Si" ?
                                    <>
                                        {/*Servicio de Evaluaciones Médicas (Check up´s) Propia, Subrogado propio, Subrogado externo*/}
                                        <Col xs={12} md={5} className="mb-3">
                                            <GetSelector
                                                label="Servicio de Evaluaciones Médicas (Check up´s)"
                                                value={form.servicioEvaluacionesMedicasPSB}
                                                tooltipDescrip={`Servicio de Evaluaciones Médicas (Check up´s)`}
                                                name="servicioEvaluacionesMedicasPSB"
                                                handleChange={handleChange}
                                                options={OPTIONSPSPSE}
                                                show={true}
                                                isRequired={true}
                                            />
                                        </Col>
                                    </> : null
                            }

                        </Row>
                    </Col>

                </Row>
            </Col>
        </Fragment>
    )
}

function Urgencias(props) {

    const { handleChange, form } = props;

    return (
        <Fragment>

            {/*Urgencias*/}
            <Col xs={12} md={12} className="mt-3">
                <Row>

                    <Col xs={12} md={12} className="mb-3">
                        <h4 className="text-center sub-title-cmh">Urgencias</h4>
                    </Col>

                    {/*Servicios de Urgencia*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">

                            {/*Servicios de Urgencia*/}
                            <Col xs={12} md={4}>
                                <GetSelector
                                    label="Servicios de Urgencia"
                                    value={form.serviciosUrgencia}
                                    tooltipDescrip={`¿Cuentas con el servicio de Servicios de Urgencia?`}
                                    name="serviciosUrgencia"
                                    handleChange={handleChange}
                                    options={YESORNOTOPTIONS}
                                    show={true}
                                    isRequired={true}
                                />
                            </Col>

                        </Row>
                    </Col>

                    {/*Camas de urgencias*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">

                            {/*Camas de urgencias*/}
                            <Col xs={12} md={5}>
                                <GetSelector
                                    label="¿Cuentas con el servicio de Camas de urgencias?"
                                    value={form.camasUrgencias}
                                    tooltipDescrip={`¿Cuentas con el servicio de Camas de urgencias?`}
                                    name="camasUrgencias"
                                    handleChange={handleChange}
                                    options={YESORNOTOPTIONS}
                                    show={true}
                                    isRequired={true}
                                />
                            </Col>

                            {

                                form.camasUrgencias === "Si" ?
                                    <>
                                        {/*Camas de urgencias Cantidad*/}
                                        <Col xs={12} md={5} className="mb-3">
                                            <GetInput
                                                label="Número de Camas de urgencias"
                                                value={form.camasUrgenciasCantidad}
                                                name="camasUrgenciasCantidad"
                                                handleChange={handleChange}
                                                tooltipDescrip="Número de Camas de urgencias"
                                                type="number"
                                                min={0}
                                                isRequired={true}
                                                placement="top"
                                                show={true}
                                            />
                                        </Col>
                                    </> : null
                            }

                        </Row>
                    </Col>

                    {/*Salas de observación*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">

                            {/*Salas de observación*/}
                            <Col xs={12} md={4}>
                                <GetSelector
                                    label="Salas de observación"
                                    value={form.salasObservacion}
                                    tooltipDescrip={`¿Cuentas con el servicio de Salas de observación?`}
                                    name="salasObservacion"
                                    handleChange={handleChange}
                                    options={YESORNOTOPTIONS}
                                    show={true}
                                    isRequired={true}
                                />
                            </Col>

                            {

                                form.salasObservacion === "Si" ?
                                    <>
                                        {/*Salas de observación Cantidad*/}
                                        <Col xs={12} md={4} className="mb-3">
                                            <GetInput
                                                label="Salas de observación"
                                                value={form.salasObservacionCantidad}
                                                name="salasObservacionCantidad"
                                                handleChange={handleChange}
                                                tooltipDescrip="Número de Salas de observación"
                                                type="number"
                                                min={0}
                                                isRequired={true}
                                                placement="top"
                                                show={true}
                                            />
                                        </Col>
                                    </> : null
                            }

                        </Row>
                    </Col>

                    {/*Salas de choque*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">

                            {/*Salas de choque*/}
                            <Col xs={12} md={4}>
                                <GetSelector
                                    label="Salas de choque"
                                    value={form.salasChoque}
                                    tooltipDescrip={`¿Cuentas con el servicio de Salas de choque?`}
                                    name="salasChoque"
                                    handleChange={handleChange}
                                    options={YESORNOTOPTIONS}
                                    show={true}
                                    isRequired={true}
                                />
                            </Col>

                            {

                                form.salasChoque === "Si" ?
                                    <>
                                        {/*Salas de choque Cantidad*/}
                                        <Col xs={12} md={4} className="mb-3">
                                            <GetInput
                                                label="Salas de choque"
                                                value={form.salasChoqueCantidad}
                                                name="salasChoqueCantidad"
                                                handleChange={handleChange}
                                                tooltipDescrip="Número de Salas de choque"
                                                type="number"
                                                min={0}
                                                isRequired={true}
                                                placement="top"
                                                show={true}
                                            />
                                        </Col>
                                    </> : null
                            }

                        </Row>
                    </Col>

                    {/*Salas de curaciones y yesos*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">

                            {/*Salas de curaciones y yesos*/}
                            <Col xs={12} md={4}>
                                <GetSelector
                                    label="Salas de curaciones y yesos"
                                    value={form.salasCuracionesYesos}
                                    tooltipDescrip={`¿Cuentas con el servicio de Salas de curaciones y yesos?`}
                                    name="salasCuracionesYesos"
                                    handleChange={handleChange}
                                    options={YESORNOTOPTIONS}
                                    show={true}
                                    isRequired={true}
                                />
                            </Col>

                            {

                                form.salasCuracionesYesos === "Si" ?
                                    <>
                                        {/*Salas de curaciones y yesos Cantidad*/}
                                        <Col xs={12} md={4} className="mb-3">
                                            <GetInput
                                                label="Salas de curaciones y yesos"
                                                value={form.salasCuracionesYesosCantidad}
                                                name="salasCuracionesYesosCantidad"
                                                handleChange={handleChange}
                                                tooltipDescrip="Número de Salas de curaciones y yesos"
                                                type="number"
                                                min={0}
                                                isRequired={true}
                                                placement="top"
                                                show={true}
                                            />
                                        </Col>
                                    </> : null
                            }

                        </Row>
                    </Col>

                    {/*Zona de triage*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">

                            {/*Zona de triage*/}
                            <Col xs={12} md={4}>
                                <GetSelector
                                    label="Zona de triage"
                                    value={form.ZonaTriage}
                                    tooltipDescrip={`¿Cuentas con el servicio de Zona de triage?`}
                                    name="ZonaTriage"
                                    handleChange={handleChange}
                                    options={YESORNOTOPTIONS}
                                    show={true}
                                    isRequired={true}
                                />
                            </Col>

                            {

                                form.ZonaTriage === "Si" ?
                                    <>
                                        {/*Zona de triage Cantidad*/}
                                        <Col xs={12} md={4} className="mb-3">
                                            <GetInput
                                                label="Zona de triage"
                                                value={form.ZonaTriageCantidad}
                                                name="ZonaTriageCantidad"
                                                handleChange={handleChange}
                                                tooltipDescrip="Número de Zona de triage"
                                                type="number"
                                                min={0}
                                                isRequired={true}
                                                placement="top"
                                                show={true}
                                            />
                                        </Col>
                                    </> : null
                            }

                        </Row>
                    </Col>

                    {/*Consultorios*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">

                            {/*Consultorios*/}
                            <Col xs={12} md={4}>
                                <GetSelector
                                    label="Consultorios"
                                    value={form.consultorios}
                                    tooltipDescrip={`¿Cuentas con el servicio de Consultorios?`}
                                    name="consultorios"
                                    handleChange={handleChange}
                                    options={YESORNOTOPTIONS}
                                    show={true}
                                    isRequired={true}
                                />
                            </Col>

                            {

                                form.consultorios === "Si" ?
                                    <>
                                        {/*Consultorios Cantidad*/}
                                        <Col xs={12} md={4} className="mb-3">
                                            <GetInput
                                                label="Consultorios"
                                                value={form.consultoriosCantidad}
                                                name="consultoriosCantidad"
                                                handleChange={handleChange}
                                                tooltipDescrip="Número de Consultorios"
                                                type="number"
                                                min={0}
                                                isRequired={true}
                                                placement="top"
                                                show={true}
                                            />
                                        </Col>
                                    </> : null
                            }

                        </Row>
                    </Col>

                    {/*Sala de rayos X*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">

                            {/*Sala de rayos X*/}
                            <Col xs={12} md={4}>
                                <GetSelector
                                    label="Sala de rayos X"
                                    value={form.salaRayosX}
                                    tooltipDescrip={`¿Cuentas con el servicio de Sala de rayos X?`}
                                    name="salaRayosX"
                                    handleChange={handleChange}
                                    options={YESORNOTOPTIONS}
                                    show={true}
                                    isRequired={true}
                                />
                            </Col>

                            {

                                form.salaRayosX === "Si" ?
                                    <>
                                        {/*Sala de rayos X Cantidad*/}
                                        <Col xs={12} md={4} className="mb-3">
                                            <GetInput
                                                label="Sala de rayos X"
                                                value={form.salaRayosXCantidad}
                                                name="salaRayosXCantidad"
                                                handleChange={handleChange}
                                                tooltipDescrip="Número de Sala de rayos X"
                                                type="number"
                                                min={0}
                                                isRequired={true}
                                                placement="top"
                                                show={true}
                                            />
                                        </Col>
                                    </> : null
                            }

                        </Row>
                    </Col>

                    {/*Ducha de emergencia*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">

                            {/*Ducha de emergencia*/}
                            <Col xs={12} md={4}>
                                <GetSelector
                                    label="Ducha de emergencia"
                                    value={form.duchaEmergencia}
                                    tooltipDescrip={`¿Cuentas con el servicio de Ducha de emergencia?`}
                                    name="duchaEmergencia"
                                    handleChange={handleChange}
                                    options={YESORNOTOPTIONS}
                                    show={true}
                                    isRequired={true}
                                />
                            </Col>

                            {

                                form.duchaEmergencia === "Si" ?
                                    <>
                                        {/*Ducha de emergencia Cantidad*/}
                                        <Col xs={12} md={4} className="mb-3">
                                            <GetInput
                                                label="Ducha de emergencia"
                                                value={form.duchaEmergenciaCantidad}
                                                name="duchaEmergenciaCantidad"
                                                handleChange={handleChange}
                                                tooltipDescrip="Número de Ducha de emergencia"
                                                type="number"
                                                min={0}
                                                isRequired={true}
                                                placement="top"
                                                show={true}
                                            />
                                        </Col>
                                    </> : null
                            }

                        </Row>
                    </Col>

                    {/*Estación para lavado de ojos*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">

                            {/*Estación para lavado de ojos*/}
                            <Col xs={12} md={4}>
                                <GetSelector
                                    label="Estación para lavado de ojos"
                                    value={form.estacionLavadoOjos}
                                    tooltipDescrip={`¿Cuentas con el servicio de Estación para lavado de ojos?`}
                                    name="estacionLavadoOjos"
                                    handleChange={handleChange}
                                    options={YESORNOTOPTIONS}
                                    show={true}
                                    isRequired={true}
                                />
                            </Col>

                            {

                                form.estacionLavadoOjos === "Si" ?
                                    <>
                                        {/*Estación para lavado de ojos Cantidad*/}
                                        <Col xs={12} md={4} className="mb-3">
                                            <GetInput
                                                label="Estación para lavado de ojos"
                                                value={form.estacionLavadoOjosCantidad}
                                                name="estacionLavadoOjosCantidad"
                                                handleChange={handleChange}
                                                tooltipDescrip="Número de Estación para lavado de ojos"
                                                type="number"
                                                min={0}
                                                isRequired={true}
                                                placement="top"
                                                show={true}
                                            />
                                        </Col>
                                    </> : null
                            }

                        </Row>
                    </Col>

                    {/*Carro rojo*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">

                            {/*Carro rojo*/}
                            <Col xs={12} md={4}>
                                <GetSelector
                                    label="Carro rojo"
                                    value={form.carroRojo}
                                    tooltipDescrip={`¿Cuentas con el servicio de Carro rojo?`}
                                    name="carroRojo"
                                    handleChange={handleChange}
                                    options={YESORNOTOPTIONS}
                                    show={true}
                                    isRequired={true}
                                />
                            </Col>

                            {

                                form.carroRojo === "Si" ?
                                    <>
                                        {/*Carro rojo Cantidad*/}
                                        <Col xs={12} md={4} className="mb-3">
                                            <GetInput
                                                label="Carro rojo"
                                                value={form.carroRojoCantidad}
                                                name="carroRojoCantidad"
                                                handleChange={handleChange}
                                                tooltipDescrip="Número de Carro rojo"
                                                type="number"
                                                min={0}
                                                isRequired={true}
                                                placement="top"
                                                show={true}
                                            />
                                        </Col>
                                    </> : null
                            }

                        </Row>
                    </Col>

                </Row>
            </Col >

        </Fragment >
    )
}

function OtrosServicios(props) {

    const { handleChange, form } = props;

    return (
        <Fragment>

            {/*Otros Servicios*/}
            <Col xs={12} md={12} className="mt-3">
                <Row>

                    <Col xs={12} md={12} className="mb-3">
                        <h4 className="text-center sub-title-cmh">Otros Servicios</h4>
                    </Col>

                    {/*Servicio de Nutrición y Dietética (Alimentación) en Internamiento*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">

                            {/*Servicio de Nutrición y Dietética (Alimentación) en Internamiento*/}
                            <Col xs={12} md={6}>
                                <GetSelector
                                    label="Servicio de Nutrición y Dietética (Alimentación) en Internamiento"
                                    value={form.servicioNutricionDieteticaInternamiento}
                                    tooltipDescrip={`¿Cuentas con el servicio de Servicio de Nutrición y Dietética (Alimentación) en Internamiento?`}
                                    name="servicioNutricionDieteticaInternamiento"
                                    handleChange={handleChange}
                                    options={YESORNOTOPTIONS}
                                    show={true}
                                    isRequired={true}
                                />
                            </Col>

                            {

                                form.servicioNutricionDieteticaInternamiento === "Si" ?
                                    <>
                                        {/*Servicio de Nutrición y Dietética (Alimentación) en Internamiento Propia, Subrogado propio, Subrogado externo*/}
                                        <Col xs={12} md={6} className="mb-3">
                                            <GetSelector
                                                label="Servicio de Nutrición y Dietética (Alimentación) en Internamiento"
                                                value={form.servicioNutricionDieteticaInternamientoPSB}
                                                tooltipDescrip={`Servicio de Nutrición y Dietética (Alimentación) en Internamiento`}
                                                name="servicioNutricionDieteticaInternamientoPSB"
                                                handleChange={handleChange}
                                                options={OPTIONSPSPSE}
                                                show={true}
                                                isRequired={true}
                                            />
                                        </Col>
                                    </> : null
                            }

                        </Row>
                    </Col>

                    {/*Servicio de Banco de Leche*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">

                            {/*Servicio de Banco de Leche*/}
                            <Col xs={12} md={4}>
                                <GetSelector
                                    label="Servicio de Banco de Leche"
                                    value={form.servicioBancoLeche}
                                    tooltipDescrip={`¿Cuentas con el servicio de Servicio de Banco de Leche?`}
                                    name="servicioBancoLeche"
                                    handleChange={handleChange}
                                    options={YESORNOTOPTIONS}
                                    show={true}
                                    isRequired={true}
                                />
                            </Col>

                            {

                                form.servicioBancoLeche === "Si" ?
                                    <>
                                        {/*Servicio de Banco de Leche Propia, Subrogado propio, Subrogado externo*/}
                                        <Col xs={12} md={4} className="mb-3">
                                            <GetSelector
                                                label="Servicio de Banco de Leche"
                                                value={form.servicioBancoLechePSB}
                                                tooltipDescrip={`Servicio de Banco de Leche`}
                                                name="servicioBancoLechePSB"
                                                handleChange={handleChange}
                                                options={OPTIONSPSPSE}
                                                show={true}
                                                isRequired={true}
                                            />
                                        </Col>
                                    </> : null
                            }

                        </Row>
                    </Col>

                    {/*Farmacia Venta al Público*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">

                            {/*Farmacia Venta al Público*/}
                            <Col xs={12} md={4}>
                                <GetSelector
                                    label="Farmacia Venta al Público"
                                    value={form.farmaciaVentaPublico}
                                    tooltipDescrip={`¿Cuentas con el servicio de Farmacia Venta al Público?`}
                                    name="farmaciaVentaPublico"
                                    handleChange={handleChange}
                                    options={YESORNOTOPTIONS}
                                    show={true}
                                    isRequired={true}
                                />
                            </Col>

                            {

                                form.farmaciaVentaPublico === "Si" ?
                                    <>
                                        {/*Farmacia Venta al Público Propia, Subrogado propio, Subrogado externo*/}
                                        <Col xs={12} md={4} className="mb-3">
                                            <GetSelector
                                                label="Farmacia Venta al Público"
                                                value={form.farmaciaVentaPublicoPSB}
                                                tooltipDescrip={`Farmacia Venta al Público`}
                                                name="farmaciaVentaPublicoPSB"
                                                handleChange={handleChange}
                                                options={OPTIONSPSPSE}
                                                show={true}
                                                isRequired={true}
                                            />
                                        </Col>
                                    </> : null
                            }

                        </Row>
                    </Col>

                    {/*Clínica de oftalmología*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">

                            {/*Clínica de oftalmología*/}
                            <Col xs={12} md={4}>
                                <GetSelector
                                    label="Clínica de oftalmología"
                                    value={form.clinicaOftalmologia}
                                    tooltipDescrip={`¿Cuentas con el servicio de Clínica de oftalmología?`}
                                    name="clinicaOftalmologia"
                                    handleChange={handleChange}
                                    options={YESORNOTOPTIONS}
                                    show={true}
                                    isRequired={true}
                                />
                            </Col>

                            {

                                form.clinicaOftalmologia === "Si" ?
                                    <>
                                        {/*Clínica de oftalmología Propia, Subrogado propio, Subrogado externo*/}
                                        <Col xs={12} md={4} className="mb-3">
                                            <GetSelector
                                                label="Clínica de oftalmología"
                                                value={form.clinicaOftalmologiaPSB}
                                                tooltipDescrip={`Clínica de oftalmología`}
                                                name="clinicaOftalmologiaPSB"
                                                handleChange={handleChange}
                                                options={OPTIONSPSPSE}
                                                show={true}
                                                isRequired={true}
                                            />
                                        </Col>
                                    </> : null
                            }

                        </Row>
                    </Col>

                    {/*Clínica del sueño*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">

                            {/*Clínica del sueño*/}
                            <Col xs={12} md={4}>
                                <GetSelector
                                    label="Clínica del sueño"
                                    value={form.clinicaSuenio}
                                    tooltipDescrip={`¿Cuentas con el servicio de Clínica del sueño?`}
                                    name="clinicaSuenio"
                                    handleChange={handleChange}
                                    options={YESORNOTOPTIONS}
                                    show={true}
                                    isRequired={true}
                                />
                            </Col>

                            {

                                form.clinicaSuenio === "Si" ?
                                    <>
                                        {/*Clínica del sueño Propia, Subrogado propio, Subrogado externo*/}
                                        <Col xs={12} md={4} className="mb-3">
                                            <GetSelector
                                                label="Clínica del sueño"
                                                value={form.clinicaSuenioPSB}
                                                tooltipDescrip={`Clínica del sueño`}
                                                name="clinicaSuenioPSB"
                                                handleChange={handleChange}
                                                options={OPTIONSPSPSE}
                                                show={true}
                                                isRequired={true}
                                            />
                                        </Col>
                                    </> : null
                            }

                        </Row>
                    </Col>

                    {/*Clínica del dolor*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">

                            {/*Clínica del dolor*/}
                            <Col xs={12} md={4}>
                                <GetSelector
                                    label="Clínica del dolor"
                                    value={form.clinicaDolor}
                                    tooltipDescrip={`¿Cuentas con el servicio de Clínica del dolor?`}
                                    name="clinicaDolor"
                                    handleChange={handleChange}
                                    options={YESORNOTOPTIONS}
                                    show={true}
                                    isRequired={true}
                                />
                            </Col>

                            {

                                form.clinicaDolor === "Si" ?
                                    <>
                                        {/*Clínica del dolor Propia, Subrogado propio, Subrogado externo*/}
                                        <Col xs={12} md={4} className="mb-3">
                                            <GetSelector
                                                label="Clínica del dolor"
                                                value={form.clinicaDolorPSB}
                                                tooltipDescrip={`Clínica del dolor`}
                                                name="clinicaDolorPSB"
                                                handleChange={handleChange}
                                                options={OPTIONSPSPSE}
                                                show={true}
                                                isRequired={true}
                                            />
                                        </Col>
                                    </> : null
                            }

                        </Row>
                    </Col>

                    {/*Clínica de fertilidad*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">

                            {/*Clínica de fertilidad*/}
                            <Col xs={12} md={4}>
                                <GetSelector
                                    label="Clínica de fertilidad"
                                    value={form.clinicaFertilidad}
                                    tooltipDescrip={`¿Cuentas con el servicio de Clínica de fertilidad?`}
                                    name="clinicaFertilidad"
                                    handleChange={handleChange}
                                    options={YESORNOTOPTIONS}
                                    show={true}
                                    isRequired={true}
                                />
                            </Col>

                            {

                                form.clinicaFertilidad === "Si" ?
                                    <>
                                        {/*Clínica de fertilidad Propia, Subrogado propio, Subrogado externo*/}
                                        <Col xs={12} md={4} className="mb-3">
                                            <GetSelector
                                                label="Clínica de fertilidad"
                                                value={form.clinicaFertilidadPSB}
                                                tooltipDescrip={`Clínica de fertilidad`}
                                                name="clinicaFertilidadPSB"
                                                handleChange={handleChange}
                                                options={OPTIONSPSPSE}
                                                show={true}
                                                isRequired={true}
                                            />
                                        </Col>
                                    </> : null
                            }

                        </Row>
                    </Col>

                    {/*Clínica dental*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">

                            {/*Clínica dental*/}
                            <Col xs={12} md={4}>
                                <GetSelector
                                    label="Clínica dental"
                                    value={form.clinicaDental}
                                    tooltipDescrip={`¿Cuentas con el servicio de Clínica dental?`}
                                    name="clinicaDental"
                                    handleChange={handleChange}
                                    options={YESORNOTOPTIONS}
                                    show={true}
                                    isRequired={true}
                                />
                            </Col>

                            {

                                form.clinicaDental === "Si" ?
                                    <>
                                        {/*Clínica dental Propia, Subrogado propio, Subrogado externo*/}
                                        <Col xs={12} md={4} className="mb-3">
                                            <GetSelector
                                                label="Clínica dental"
                                                value={form.clinicaDentalPSB}
                                                tooltipDescrip={`Clínica dental`}
                                                name="clinicaDentalPSB"
                                                handleChange={handleChange}
                                                options={OPTIONSPSPSE}
                                                show={true}
                                                isRequired={true}
                                            />
                                        </Col>
                                    </> : null
                            }

                        </Row>
                    </Col>

                    {/*Clínica de la mujer*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">

                            {/*Clínica de la mujer*/}
                            <Col xs={12} md={4}>
                                <GetSelector
                                    label="Clínica de la mujer"
                                    value={form.clinicaMujer}
                                    tooltipDescrip={`¿Cuentas con el servicio de Clínica de la mujer?`}
                                    name="clinicaMujer"
                                    handleChange={handleChange}
                                    options={YESORNOTOPTIONS}
                                    show={true}
                                    isRequired={true}
                                />
                            </Col>

                            {

                                form.clinicaMujer === "Si" ?
                                    <>
                                        {/*Clínica de la mujer Propia, Subrogado propio, Subrogado externo*/}
                                        <Col xs={12} md={4} className="mb-3">
                                            <GetSelector
                                                label="Clínica de la mujer"
                                                value={form.clinicaMujerPSB}
                                                tooltipDescrip={`Clínica de la mujer`}
                                                name="clinicaMujerPSB"
                                                handleChange={handleChange}
                                                options={OPTIONSPSPSE}
                                                show={true}
                                                isRequired={true}
                                            />
                                        </Col>
                                    </> : null
                            }

                        </Row>
                    </Col>

                    {/*Asistencia en casa (home care)*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">

                            {/*Asistencia en casa (home care)*/}
                            <Col xs={12} md={4}>
                                <GetSelector
                                    label="Asistencia en casa (home care)"
                                    value={form.homeCare}
                                    tooltipDescrip={`¿Cuentas con el servicio de Asistencia en casa (home care)?`}
                                    name="homeCare"
                                    handleChange={handleChange}
                                    options={YESORNOTOPTIONS}
                                    show={true}
                                    isRequired={true}
                                />
                            </Col>

                            {

                                form.homeCare === "Si" ?
                                    <>
                                        {/*Asistencia en casa (home care) Propia, Subrogado propio, Subrogado externo*/}
                                        <Col xs={12} md={4} className="mb-3">
                                            <GetSelector
                                                label="Asistencia en casa (home care)"
                                                value={form.homeCarePSB}
                                                tooltipDescrip={`Asistencia en casa (home care)`}
                                                name="homeCarePSB"
                                                handleChange={handleChange}
                                                options={OPTIONSPSPSE}
                                                show={true}
                                                isRequired={true}
                                            />
                                        </Col>
                                    </> : null
                            }

                        </Row>
                    </Col>

                    {/*Cuidados paleativos*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">

                            {/*Cuidados paleativos*/}
                            <Col xs={12} md={4}>
                                <GetSelector
                                    label="Cuidados paleativos"
                                    value={form.cuidadosPaleativos}
                                    tooltipDescrip={`¿Cuentas con el servicio de Cuidados paleativos?`}
                                    name="cuidadosPaleativos"
                                    handleChange={handleChange}
                                    options={YESORNOTOPTIONS}
                                    show={true}
                                    isRequired={true}
                                />
                            </Col>

                            {

                                form.cuidadosPaleativos === "Si" ?
                                    <>
                                        {/*Cuidados paleativos Propia, Subrogado propio, Subrogado externo*/}
                                        <Col xs={12} md={4} className="mb-3">
                                            <GetSelector
                                                label="Cuidados paleativos"
                                                value={form.cuidadosPaleativosPSB}
                                                tooltipDescrip={`Cuidados paleativos`}
                                                name="cuidadosPaleativosPSB"
                                                handleChange={handleChange}
                                                options={OPTIONSPSPSE}
                                                show={true}
                                                isRequired={true}
                                            />
                                        </Col>
                                    </> : null
                            }

                        </Row>
                    </Col>

                </Row>
            </Col>

        </Fragment>
    )

}

function Transplantes(props) {

    const { handleChange, form } = props;

    const transplantesView = () => {
        if (form.trasplantes === "Si") {
            return (
                <>
                    {/*Riñon*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetSelector
                            label="¿Realizan Trasplantes de riñon? "
                            value={form.rinion}
                            tooltipDescrip={`¿Realizan Trasplantes de riñon? `}
                            name="rinion"
                            handleChange={handleChange}
                            options={YESORNOTOPTIONS}
                            show={true}
                            isRequired={true}
                        />
                    </Col>

                    {/*Hígado*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetSelector
                            label="¿Realizan Trasplantes de Hígado? "
                            value={form.higado}
                            tooltipDescrip={`¿Realizan Trasplantes de Hígado? `}
                            name="higado"
                            handleChange={handleChange}
                            options={YESORNOTOPTIONS}
                            show={true}
                            isRequired={true}
                        />
                    </Col>

                    {/*Pulmón*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetSelector
                            label="¿Realizan Trasplantes de Pulmón? "
                            value={form.pulmon}
                            tooltipDescrip={`¿Realizan Trasplantes de Pulmón? `}
                            name="pulmon"
                            handleChange={handleChange}
                            options={YESORNOTOPTIONS}
                            show={true}
                            isRequired={true}
                        />
                    </Col>

                    {/*Corazón*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetSelector
                            label="¿Realizan Trasplantes de Corazón? "
                            value={form.corazon}
                            tooltipDescrip={`¿Realizan Trasplantes de Corazón? `}
                            name="corazon"
                            handleChange={handleChange}
                            options={YESORNOTOPTIONS}
                            show={true}
                            isRequired={true}
                        />
                    </Col>

                    {/*Córneas*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetSelector
                            label="¿Realizan Trasplantes de Córneas? "
                            value={form.corneas}
                            tooltipDescrip={`¿Realizan Trasplantes de Córneas? `}
                            name="corneas"
                            handleChange={handleChange}
                            options={YESORNOTOPTIONS}
                            show={true}
                            isRequired={true}
                        />
                    </Col>

                    {/*Hueso*/}
                    <Col xs={12} md={4} className="mb-3">
                        <GetSelector
                            label="¿Realizan Trasplantes de Hueso? "
                            value={form.hueso}
                            tooltipDescrip={`¿Realizan Trasplantes de Hueso? `}
                            name="hueso"
                            handleChange={handleChange}
                            options={YESORNOTOPTIONS}
                            show={true}
                            isRequired={true}
                        />
                    </Col>

                    {/*Células hematopoyéticas (Médula ósea)*/}
                    <Col xs={12} md={7} className="mb-3">
                        <GetSelector
                            label="¿Realizan Trasplantes de Células hematopoyéticas (Médula ósea)? "
                            value={form.celulasHematopoyeticas}
                            tooltipDescrip={`¿Realizan Trasplantes de Células hematopoyéticas (Médula ósea)? `}
                            name="celulasHematopoyeticas"
                            handleChange={handleChange}
                            options={YESORNOTOPTIONS}
                            show={true}
                            isRequired={true}
                            style={{ height: '100px' }}
                        />
                    </Col>

                    {/*Otro órgano (especifique)*/}
                    <Col xs={12} md={5} className="mb-3">
                        <GetInput
                            label="Otro órgano (especifique)"
                            value={form.otroOrgano}
                            name="otroOrgano"
                            handleChange={handleChange}
                            tooltipDescrip="Especifique que otro tipo de órgano"
                            type="text"
                            min={0}
                            isRequired={false}
                            placement="top"
                            isTextArea={true}
                            show={true}
                            style={{ height: '100px' }}
                        />
                    </Col>
                </>
            )
        } else {
            return null
        }
    }

    return (
        <Fragment>

            {/*Trasplantes*/}
            <Col xs={12} md={12} className="mt-3">
                <Row>

                    <Col xs={12} md={12} className="mb-3">
                        <h4 className="text-center sub-title-cmh">Trasplantes</h4>
                    </Col>

                    {/*¿Realizan Trasplantes? */}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">
                            <Col xs={12} md={3}>
                                <GetSelector
                                    label="¿Realizan Trasplantes? "
                                    value={form.trasplantes}
                                    tooltipDescrip={`¿Realizan Trasplantes? `}
                                    name="trasplantes"
                                    handleChange={handleChange}
                                    options={YESORNOTOPTIONS}
                                    show={true}
                                    isRequired={true}
                                />
                            </Col>
                        </Row>
                    </Col>

                    {
                        transplantesView()
                    }

                </Row>
            </Col>

        </Fragment>
    )

}

function Prueba({ handleChange, form, setForm }) {

    const prueba = async (opcion1, opcion2) => {

        console.log(1)

        if (form[opcion1] === "No") {

            console.log(2)

            setTimeout(() => {

                setForm(
                    {
                        ...form,
                        [opcion2]: null
                    }
                )

            }, 5000)
        }
        /* setForm(
            {
                ...form,
                []
            }
        ) */
    }

    return (
        <>
            {/*PRUEBA*/}
            < Col xs={12} md={12} className="mb-3" >
                <Row className="justify-content-center">

                    {/*PRUEBA*/}
                    <Col xs={12} md={4}>
                        <GetSelector
                            label="PRUEBA"
                            value={form.prueba}
                            tooltipDescrip={`¿PRUEBA?`}
                            name="prueba"
                            handleChange={handleChange}
                            onBlur={prueba}
                            options={YESORNOTOPTIONS}
                            show={true}
                            isRequired={true}
                        />
                    </Col>

                    {

                        form.prueba === "Si" ?
                            <>
                                {/*PRUEBAPSB*/}
                                <Col xs={12} md={4} className="mb-3">
                                    <GetSelector
                                        label="PRUEBA PSB"
                                        value={form.pruebaPSB}
                                        tooltipDescrip={`PRUEBA PSB`}
                                        name="pruebaPSB"
                                        handleChange={handleChange}
                                        options={OPTIONSPSPSE}
                                        show={true}
                                        isRequired={true}
                                    />
                                </Col>
                            </> : null
                    }

                </Row>
            </Col >
        </>
    )

}

function GetInput(props) {

    //we obtain their props
    const { label, value, name, handleChange, tooltipDescrip, min, type, isRequired, placement, show, isReadOnly = false, isTextArea = false, style = null } = props

    if (show === true) {
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

    return (
        show ?
            <>
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
            </> : null
    )

}

export default SA;