import React, { Fragment, useState, useEffect } from "react";
import { Container, Col, Row, FloatingLabel, InputGroup, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
//import axios from "axios"

import OPTIONSPSPSE from "../../json/propiaSubrogadoPropioSubrogadoExterno.json";
import OPTIONSAD from "../../json/analogoDigital.json";
import YESORNOTOPTIONS from "../../json/yesOrNot.json";

//we import css
import "../../../globalStyles.css";

function SA(props)
{
    //declared the variables, constants ans states for this module
    const { form, setForm } = props;

    //module's functions

    const handleChange = async (e, childId) =>
    {
        e.persist();

        if (childId != null)

            childId === "transplantesChildren" ?
                await setForm(
                    {
                        ...form,
                        [e.target.name]: e.target.value,
                        ["rinion"]: null,
                        ["higado"]: null,
                        ["pulmon"]: null,
                        ["corazon"]: null,
                        ["corneas"]: null,
                        ["hueso"]: null,
                        ["celulasHematopoyeticas"]: null,
                        ["otroOrgano"]: null,
                    }
                ) :
                await setForm(
                    {
                        ...form,
                        [e.target.name]: e.target.value,
                        [childId]: null
                    }
                );
        else
            await setForm({
                ...form,
                [e.target.name]: e.target.value,
            });
    };

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

                            <ServiciosApoyoDiagnosticoTerapeutico
                                form={form}
                                handleChange={handleChange}
                            />

                            <Urgencias form={form} handleChange={handleChange} />

                            <OtrosServicios form={form} handleChange={handleChange} />

                            <Transplantes form={form} handleChange={handleChange} />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

function Hospitalizacion(props)
{
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
                            style={{ height: "90px" }}
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
                            style={{ height: "90px" }}
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
                            style={{ height: "90px" }}
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
                            style={{ height: "90px" }}
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
                            style={{ height: "90px" }}
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
                            style={{ height: "90px" }}
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
                            <Col xs={12} md={4} className="mb-3">
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
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Fragment>
    );
}

function AreaCuneros(props)
{
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
                            <Col xs={12} md={4} className="mb-3">
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
    );
}

function Quirofanos(props)
{
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
                            style={{ height: "90px" }}
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
                            style={{ height: "90px" }}
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
                            style={{ height: "90px" }}
                        />
                    </Col>

                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">
                            {/*Salas exclusivas de Cirugía Ambulatoria*/}
                            <Col xs={12} md={4} className="mb-3">
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
    );
}

function ServicioImagenologia(props)
{
    const { handleChange, form } = props;

    return (
        <Fragment>
            {/*Servicio de Imagenología*/}
            <Col xs={12} md={12} className="mt-3">
                <Row>
                    <Col xs={12} md={12} className="mb-3">
                        <h4 className="text-center sub-title-cmh">
                            Servicio de Imagenología
                        </h4>
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
                            style={{ height: "90px" }}
                        />
                    </Col>

                    {/*Radiología simple (no considerar el área de urgencias) Propia, Subrogado propio, Subrogado externo*/}
                    <GetSelector
                        label="Radiología simple"
                        value={form.radiologiaSimplePSB}
                        tooltipDescrip={`Radiología simple`}
                        name="radiologiaSimplePSB"
                        handleChange={handleChange}
                        options={OPTIONSPSPSE}
                        show={true}
                        style={{ height: "90px" }}
                        isRequired={true}
                    />

                    {/*Radiología simple (no considerar el área de urgencias) Análogo Digital*/}
                    <GetSelector
                        label="Radiología simple"
                        value={form.radiologiaSimpleAD}
                        tooltipDescrip={`Radiología simple`}
                        name="radiologiaSimpleAD"
                        handleChange={handleChange}
                        options={OPTIONSAD}
                        show={true}
                        style={{ height: "90px" }}
                        isRequired={true}
                    />

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

                    {/*Sala de fluroscopia Análogo Digital*/}
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
                            style={{ height: "90px" }}
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
                            style={{ height: "90px" }}
                        />
                    </Col>

                    {/*Tomografía axial computarizada (TAC) Propia, Subrogado propio, Subrogado externo*/}
                    <GetSelector
                        label="Tomografía axial computarizada (TAC)"
                        value={form.tomografiaAxialComputarizadaPSB}
                        tooltipDescrip={`Tomografía axial computarizada (TAC)`}
                        name="tomografiaAxialComputarizadaPSB"
                        handleChange={handleChange}
                        options={OPTIONSPSPSE}
                        show={true}
                        style={{ height: "90px" }}
                        isRequired={true}
                        md={3}
                    />

                    {/*Tomografía axial computarizada (TAC) Análogo Digital*/}
                    <GetSelector
                        label="Tomografía axial computarizada (TAC)"
                        value={form.tomografiaAxialComputarizadaAD}
                        tooltipDescrip={`Tomografía axial computarizada (TAC)`}
                        name="tomografiaAxialComputarizadaAD"
                        handleChange={handleChange}
                        options={OPTIONSAD}
                        show={true}
                        isRequired={true}
                        style={{ height: "90px" }}
                        md={3}
                    />

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

                    {/*Ultrasonografo Análogo Digital*/}
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

                    {/*Mastografo Análogo Digital*/}
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

                    {/*Densitómetro Análogo Digital*/}
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
                            style={{ height: "90px" }}
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
                            style={{ height: "90px" }}
                        />
                    </Col>

                    {/*Resonancia Magnética Nuclear (RM) Propia, Subrogado propio, Subrogado externo*/}
                    <GetSelector
                        label="Resonancia Magnética Nuclear (RM)"
                        value={form.resonanciaMagneticaNuclearPSB}
                        tooltipDescrip={`Resonancia Magnética Nuclear (RM)`}
                        name="resonanciaMagneticaNuclearPSB"
                        handleChange={handleChange}
                        options={OPTIONSPSPSE}
                        show={true}
                        style={{ height: "90px" }}
                        isRequired={true}
                        md={3}
                    />

                    {/*Resonancia Magnética Nuclear (RM) Análogo Digital*/}
                    <GetSelector
                        label="Resonancia Magnética Nuclear (RM)"
                        value={form.resonanciaMagneticaNuclearAD}
                        tooltipDescrip={`Resonancia Magnética Nuclear (RM)`}
                        name="resonanciaMagneticaNuclearAD"
                        handleChange={handleChange}
                        options={OPTIONSAD}
                        show={true}
                        isRequired={true}
                        style={{ height: "90px" }}
                        md={3}
                    />

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

                    {/*Sala de Hemodinamia Análogo Digital*/}
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

                    {/*Gammacámara Análogo Digital*/}
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
                            style={{ height: "90px" }}
                        />
                    </Col>

                    {/*Tomografía por Emisión de Positrones (PET) Propia, Subrogado propio, Subrogado externo*/}
                    <GetSelector
                        label="Tomografía por Emisión de Positrones (PET)"
                        value={form.tomografiaEmisionPositronesPSB}
                        tooltipDescrip={`Tomografía por Emisión de Positrones (PET)`}
                        name="tomografiaEmisionPositronesPSB"
                        handleChange={handleChange}
                        options={OPTIONSPSPSE}
                        show={true}
                        isRequired={true}
                        style={{ height: "90px" }}
                    />

                    {/*Tomografía por Emisión de Positrones (PET) Análogo Digital*/}
                    <GetSelector
                        label="Tomografía por Emisión de Positrones (PET)"
                        value={form.tomografiaEmisionPositronesAD}
                        tooltipDescrip={`Tomografía por Emisión de Positrones (PET)`}
                        name="tomografiaEmisionPositronesAD"
                        handleChange={handleChange}
                        options={OPTIONSAD}
                        show={true}
                        isRequired={true}
                        style={{ height: "90px" }}
                    />

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

                    {/*Radioterapia Análogo Digital*/}
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

                    {/*Rayos X rodable Análogo Digital*/}
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

                    {/*Arco en C Análogo Digital*/}
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

                    {/*Electromiografo Análogo Digital*/}
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

                    {/*Inmunoterapia de corta estancia Análogo Digital*/}
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

                    {/*Laparoscopía Análogo Digital*/}
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
                </Row>
            </Col>
        </Fragment>
    );
}

function ServiciosApoyoDiagnosticoTerapeutico(props)
{
    const { handleChange, form } = props;

    return (
        <Fragment>
            {/*Servicios de Apoyo Diagnóstico-Terapéutico*/}
            <Col xs={12} md={12} className="mt-3">
                <Row>
                    <Col xs={12} md={12} className="mb-3">
                        <h4 className="text-center sub-title-cmh">
                            Servicios de Apoyo Diagnóstico-Terapéutico
                        </h4>
                    </Col>

                    {/*Laboratorio de análisis clínicos*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">
                            {/*Laboratorio de análisis clínicos*/}
                            <GetSelector
                                label="Laboratorio de análisis clínicos"
                                value={form.laboratorioAnalisisClinicos}
                                tooltipDescrip={`¿Cuentas con el servicio de Laboratorio de análisis clínicos?`}
                                name="laboratorioAnalisisClinicos"
                                handleChange={handleChange}
                                options={YESORNOTOPTIONS}
                                show={true}
                                isRequired={true}
                                childId="laboratorioAnalisisClinicosPSB"
                            />

                            {/*Laboratorio de análisis clínicos Propia, Subrogado propio, Subrogado externo*/}
                            <GetSelector
                                id="laboratorioAnalisisClinicosPSB"
                                label="Laboratorio de análisis clínicos"
                                value={form.laboratorioAnalisisClinicosPSB}
                                tooltipDescrip={`Laboratorio de análisis clínicos`}
                                name="laboratorioAnalisisClinicosPSB"
                                handleChange={handleChange}
                                options={OPTIONSPSPSE}
                                show={
                                    form.laboratorioAnalisisClinicos === "true" ? true : false
                                }
                                isRequired={true}
                            />
                        </Row>
                    </Col>

                    {/*Banco de sangre*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">
                            {/*Banco de sangre*/}
                            <GetSelector
                                label="Banco de sangre"
                                value={form.bancoSangre}
                                tooltipDescrip={`¿Cuentas con el servicio de Banco de sangre?`}
                                name="bancoSangre"
                                handleChange={handleChange}
                                options={YESORNOTOPTIONS}
                                show={true}
                                isRequired={true}
                                childId="bancoSangrePSB"
                            />

                            {/*Banco de sangre Propia, Subrogado propio, Subrogado externo*/}

                            <GetSelector
                                id="bancoSangrePSB"
                                label="Banco de sangre"
                                value={form.bancoSangrePSB}
                                tooltipDescrip={`Banco de sangre`}
                                name="bancoSangrePSB"
                                handleChange={handleChange}
                                options={OPTIONSPSPSE}
                                show={form.bancoSangre === "true" ? true : false}
                                isRequired={true}
                            />
                        </Row>
                    </Col>

                    {/*Transfusión de hemo componentes*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">
                            {/*Transfusión de hemo componentes*/}
                            <GetSelector
                                label="Transfusión de hemo componentes"
                                value={form.transfusionHemoComponentes}
                                tooltipDescrip={`¿Cuentas con el servicio de Transfusión de hemo componentes?`}
                                name="transfusionHemoComponentes"
                                handleChange={handleChange}
                                options={YESORNOTOPTIONS}
                                show={true}
                                isRequired={true}
                                childId="transfusionHemoComponentesPSB"
                            />

                            {/*Transfusión de hemo componentes Propia, Subrogado propio, Subrogado externo*/}

                            <GetSelector
                                id="transfusionHemoComponentesPSB"
                                label="Transfusión de hemo componentes"
                                value={form.transfusionHemoComponentesPSB}
                                tooltipDescrip={`Transfusión de hemo componentes`}
                                name="transfusionHemoComponentesPSB"
                                handleChange={handleChange}
                                options={OPTIONSPSPSE}
                                show={form.transfusionHemoComponentes === "true" ? true : false}
                                isRequired={true}
                            />
                        </Row>
                    </Col>

                    {/*Aferesis plaquetarias*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">
                            {/*Aferesis plaquetarias*/}

                            <GetSelector
                                label="Aferesis plaquetarias"
                                value={form.aferesisPlaquetarias}
                                tooltipDescrip={`¿Cuentas con el servicio de Aferesis plaquetarias?`}
                                name="aferesisPlaquetarias"
                                handleChange={handleChange}
                                options={YESORNOTOPTIONS}
                                show={true}
                                isRequired={true}
                                childId="aferesisPlaquetariasPSB"
                            />
                            {/*Aferesis plaquetarias Propia, Subrogado propio, Subrogado externo*/}

                            <GetSelector
                                id="aferesisPlaquetariasPSB"
                                label="Aferesis plaquetarias"
                                value={form.aferesisPlaquetariasPSB}
                                tooltipDescrip={`Aferesis plaquetarias`}
                                name="aferesisPlaquetariasPSB"
                                handleChange={handleChange}
                                options={OPTIONSPSPSE}
                                show={form.aferesisPlaquetarias === "true" ? true : false}
                                isRequired={true}
                            />
                        </Row>
                    </Col>

                    {/*Patología*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">
                            {/*Patología*/}
                            <GetSelector
                                label="Patología"
                                value={form.patologia}
                                tooltipDescrip={`¿Cuentas con el servicio de Patología?`}
                                name="patologia"
                                handleChange={handleChange}
                                options={YESORNOTOPTIONS}
                                show={true}
                                isRequired={true}
                                childId="patologiaPSB"
                            />

                            {/*Patología Propia, Subrogado propio, Subrogado externo*/}
                            <GetSelector
                                id="patologiaPSB"
                                label="Patología"
                                value={form.patologiaPSB}
                                tooltipDescrip={`Patología`}
                                name="patologiaPSB"
                                handleChange={handleChange}
                                options={OPTIONSPSPSE}
                                show={form.patologia === "true" ? true : false}
                                isRequired={true}
                            />
                        </Row>
                    </Col>

                    {/*Pruebas genético moleculares*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">
                            {/*Pruebas genético moleculares*/}

                            <GetSelector
                                label="Pruebas genético moleculares"
                                value={form.pruebasGeneticoMoleculares}
                                tooltipDescrip={`¿Cuentas con el servicio de Pruebas genético moleculares?`}
                                name="pruebasGeneticoMoleculares"
                                handleChange={handleChange}
                                options={YESORNOTOPTIONS}
                                show={true}
                                isRequired={true}
                                childId="pruebasGeneticoMolecularesPSB"
                            />

                            {/*Pruebas genético moleculares Propia, Subrogado propio, Subrogado externo*/}
                            <GetSelector
                                id="pruebasGeneticoMolecularesPSB"
                                label="Pruebas genético moleculares"
                                value={form.pruebasGeneticoMolecularesPSB}
                                tooltipDescrip={`Pruebas genético moleculares`}
                                name="pruebasGeneticoMolecularesPSB"
                                handleChange={handleChange}
                                options={OPTIONSPSPSE}
                                show={form.pruebasGeneticoMoleculares === "true" ? true : false}
                                isRequired={true}
                            />
                        </Row>
                    </Col>

                    {/*Hemodiálisis*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">
                            {/*Hemodiálisis*/}

                            <GetSelector
                                label="Hemodiálisis"
                                value={form.hemodialisis}
                                tooltipDescrip={`¿Cuentas con el servicio de Hemodiálisis?`}
                                name="hemodialisis"
                                handleChange={handleChange}
                                options={YESORNOTOPTIONS}
                                show={true}
                                isRequired={true}
                                childId="hemodialisisPSB"
                            />


                            {/*Hemodiálisis Propia, Subrogado propio, Subrogado externo*/}

                            <GetSelector
                                id="hemodialisisPSB"
                                label="Hemodiálisis"
                                value={form.hemodialisisPSB}
                                tooltipDescrip={`Hemodiálisis`}
                                name="hemodialisisPSB"
                                handleChange={handleChange}
                                options={OPTIONSPSPSE}
                                show={form.hemodialisis === "true" ? true : false}
                                isRequired={true}
                            />
                        </Row>
                    </Col>

                    {/*Diálisis peritoneal*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">
                            {/*Diálisis peritoneal*/}

                            <GetSelector
                                label="Diálisis peritoneal"
                                value={form.dialisisPeritoneal}
                                tooltipDescrip={`¿Cuentas con el servicio de Diálisis peritoneal?`}
                                name="dialisisPeritoneal"
                                handleChange={handleChange}
                                options={YESORNOTOPTIONS}
                                show={true}
                                isRequired={true}
                                childId="dialisisPeritonealPSB"
                            />


                            {/*Diálisis peritoneal Propia, Subrogado propio, Subrogado externo*/}

                            <GetSelector
                                id="dialisisPeritonealPSB"
                                label="Diálisis peritoneal"
                                value={form.dialisisPeritonealPSB}
                                tooltipDescrip={`Diálisis peritoneal`}
                                name="dialisisPeritonealPSB"
                                handleChange={handleChange}
                                options={OPTIONSPSPSE}
                                show={form.dialisisPeritoneal === "true" ? true : false}
                                isRequired={true}
                            />

                        </Row>
                    </Col>

                    {/*Quimioterapia*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">
                            {/*Quimioterapia*/}

                            <GetSelector
                                label="Quimioterapia"
                                value={form.quimioterapia}
                                tooltipDescrip={`¿Cuentas con el servicio de Quimioterapia?`}
                                name="quimioterapia"
                                handleChange={handleChange}
                                options={YESORNOTOPTIONS}
                                show={true}
                                isRequired={true}
                                childId="quimioterapiaPSB"
                            />


                            {/*Quimioterapia Propia, Subrogado propio, Subrogado externo*/}

                            <GetSelector
                                id="quimioterapiaPSB"
                                label="Quimioterapia"
                                value={form.quimioterapiaPSB}
                                tooltipDescrip={`Quimioterapia`}
                                name="quimioterapiaPSB"
                                handleChange={handleChange}
                                options={OPTIONSPSPSE}
                                show={form.quimioterapia === "true" ? true : false}
                                isRequired={true}
                            />

                        </Row>
                    </Col>

                    {/*Unidad de quemados*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">
                            {/*Unidad de quemados*/}

                            <GetSelector
                                label="Unidad de quemados"
                                value={form.unidadQuemados}
                                tooltipDescrip={`¿Cuentas con el servicio de Unidad de quemados?`}
                                name="unidadQuemados"
                                handleChange={handleChange}
                                options={YESORNOTOPTIONS}
                                show={true}
                                isRequired={true}
                                childId="unidadQuemadosPSB"
                            />


                            {/*Unidad de quemados Propia, Subrogado propio, Subrogado externo*/}

                            <GetSelector
                                id="unidadQuemadosPSB"
                                label="Unidad de quemados"
                                value={form.unidadQuemadosPSB}
                                tooltipDescrip={`Unidad de quemados`}
                                name="unidadQuemadosPSB"
                                handleChange={handleChange}
                                options={OPTIONSPSPSE}
                                show={form.unidadQuemados === "true" ? true : false}
                                isRequired={true}
                            />

                        </Row>
                    </Col>

                    {/*Rehabilitación y fisiatría*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">
                            {/*Rehabilitación y fisiatría*/}

                            <GetSelector
                                label="Rehabilitación y fisiatría"
                                value={form.rehabilitacionFisiatria}
                                tooltipDescrip={`¿Cuentas con el servicio de Rehabilitación y fisiatría?`}
                                name="rehabilitacionFisiatria"
                                handleChange={handleChange}
                                options={YESORNOTOPTIONS}
                                show={true}
                                isRequired={true}
                                childId="rehabilitacionFisiatriaPSB"
                            />


                            {/*Rehabilitación y fisiatría Propia, Subrogado propio, Subrogado externo*/}

                            <GetSelector
                                id="rehabilitacionFisiatriaPSB"
                                label="Rehabilitación y fisiatría"
                                value={form.rehabilitacionFisiatriaPSB}
                                tooltipDescrip={`Rehabilitación y fisiatría`}
                                name="rehabilitacionFisiatriaPSB"
                                handleChange={handleChange}
                                options={OPTIONSPSPSE}
                                show={form.rehabilitacionFisiatria === "true" ? true : false}
                                isRequired={true}
                            />

                        </Row>
                    </Col>

                    {/*Rehabilitación cardiopulmonar*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">
                            {/*Rehabilitación cardiopulmonar*/}

                            <GetSelector
                                label="Rehabilitación cardiopulmonar"
                                value={form.rehabilitacionCardiopulmonar}
                                tooltipDescrip={`¿Cuentas con el servicio de Rehabilitación cardiopulmonar?`}
                                name="rehabilitacionCardiopulmonar"
                                handleChange={handleChange}
                                options={YESORNOTOPTIONS}
                                show={true}
                                isRequired={true}
                                childId="rehabilitacionCardiopulmonarPSB"
                            />


                            {/*Rehabilitación cardiopulmonar Propia, Subrogado propio, Subrogado externo*/}

                            <GetSelector
                                id="rehabilitacionCardiopulmonarPSB"
                                label="Rehabilitación cardiopulmonar"
                                value={form.rehabilitacionCardiopulmonarPSB}
                                tooltipDescrip={`Rehabilitación cardiopulmonar`}
                                name="rehabilitacionCardiopulmonarPSB"
                                handleChange={handleChange}
                                options={OPTIONSPSPSE}
                                show={form.rehabilitacionCardiopulmonar === "true" ? true : false}
                                isRequired={true}
                            />

                        </Row>
                    </Col>

                    {/*Colonoscopía*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">
                            {/*Colonoscopía*/}

                            <GetSelector
                                label="Colonoscopía"
                                value={form.colonoscopia}
                                tooltipDescrip={`¿Cuentas con el servicio de Colonoscopía?`}
                                name="colonoscopia"
                                handleChange={handleChange}
                                options={YESORNOTOPTIONS}
                                show={true}
                                isRequired={true}
                                childId="colonoscopiaPSB"
                            />


                            {/*Colonoscopía Propia, Subrogado propio, Subrogado externo*/}

                            <GetSelector
                                id="colonoscopiaPSB"
                                label="Colonoscopía"
                                value={form.colonoscopiaPSB}
                                tooltipDescrip={`Colonoscopía`}
                                name="colonoscopiaPSB"
                                handleChange={handleChange}
                                options={OPTIONSPSPSE}
                                show={form.colonoscopia === "true" ? true : false}
                                isRequired={true}
                            />

                        </Row>
                    </Col>

                    {/*Endoscopía*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">
                            {/*Endoscopía*/}

                            <GetSelector
                                label="Endoscopía"
                                value={form.endoscopia}
                                tooltipDescrip={`¿Cuentas con el servicio de Endoscopía?`}
                                name="endoscopia"
                                handleChange={handleChange}
                                options={YESORNOTOPTIONS}
                                show={true}
                                isRequired={true}
                                childId="endoscopiaPSB"
                            />


                            {/*Endoscopía Propia, Subrogado propio, Subrogado externo*/}

                            <GetSelector
                                id="endoscopiaPSB"
                                label="Endoscopía"
                                value={form.endoscopiaPSB}
                                tooltipDescrip={`Endoscopía`}
                                name="endoscopiaPSB"
                                handleChange={handleChange}
                                options={OPTIONSPSPSE}
                                show={form.endoscopia === "true" ? true : false}
                                isRequired={true}
                            />

                        </Row>
                    </Col>

                    {/*Centro de mezclas*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">
                            {/*Centro de mezclas*/}

                            <GetSelector
                                label="Centro de mezclas"
                                value={form.centroMezclas}
                                tooltipDescrip={`¿Cuentas con el servicio de Centro de mezclas?`}
                                name="centroMezclas"
                                handleChange={handleChange}
                                options={YESORNOTOPTIONS}
                                show={true}
                                isRequired={true}
                                childId="centroMezclasPSB"
                            />

                            {/*Centro de mezclas Propia, Subrogado propio, Subrogado externo*/}

                            <GetSelector
                                id="centroMezclasPSB"
                                label="Centro de mezclas"
                                value={form.centroMezclasPSB}
                                tooltipDescrip={`Centro de mezclas`}
                                name="centroMezclasPSB"
                                handleChange={handleChange}
                                options={OPTIONSPSPSE}
                                show={form.centroMezclas === "true" ? true : false}
                                isRequired={true}
                            />

                        </Row>
                    </Col>

                    {/*Neurofisiología*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">
                            {/*Neurofisiología*/}

                            <GetSelector
                                label="Neurofisiología"
                                value={form.neurofisiologia}
                                tooltipDescrip={`¿Cuentas con el servicio de Neurofisiología?`}
                                name="neurofisiologia"
                                handleChange={handleChange}
                                options={YESORNOTOPTIONS}
                                show={true}
                                isRequired={true}
                                childId="neurofisiologiaPSB"
                            />


                            {/*Neurofisiología Propia, Subrogado propio, Subrogado externo*/}

                            <GetSelector
                                id="neurofisiologiaPSB"
                                label="Neurofisiología"
                                value={form.neurofisiologiaPSB}
                                tooltipDescrip={`Neurofisiología`}
                                name="neurofisiologiaPSB"
                                handleChange={handleChange}
                                options={OPTIONSPSPSE}
                                show={form.neurofisiologia === "true" ? true : false}
                                isRequired={true}
                            />

                        </Row>
                    </Col>

                    {/*Servicio de Evaluaciones Médicas (Check up´s)*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">
                            {/*Servicio de Evaluaciones Médicas (Check up´s)*/}

                            <GetSelector
                                label="Servicio de Evaluaciones Médicas (Check up´s)"
                                value={form.servicioEvaluacionesMedicas}
                                tooltipDescrip={`¿Cuentas con el servicio de Servicio de Evaluaciones Médicas (Check up´s)?`}
                                name="servicioEvaluacionesMedicas"
                                handleChange={handleChange}
                                options={YESORNOTOPTIONS}
                                show={true}
                                isRequired={true}
                                childId="servicioEvaluacionesMedicasPSB"
                                md={5}
                            />


                            {/*Servicio de Evaluaciones Médicas (Check up´s) Propia, Subrogado propio, Subrogado externo*/}

                            <GetSelector
                                id="servicioEvaluacionesMedicasPSB"
                                label="Servicio de Evaluaciones Médicas (Check up´s)"
                                value={form.servicioEvaluacionesMedicasPSB}
                                tooltipDescrip={`Servicio de Evaluaciones Médicas (Check up´s)`}
                                name="servicioEvaluacionesMedicasPSB"
                                handleChange={handleChange}
                                options={OPTIONSPSPSE}
                                show={form.servicioEvaluacionesMedicas === "true" ? true : false}
                                isRequired={true}
                                md={5}
                            />


                        </Row>
                    </Col>
                </Row>
            </Col>
        </Fragment>
    );
}

function Urgencias(props)
{
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

                        </Row>
                    </Col>

                    {/*Camas de urgencias*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">
                            {/*Camas de urgencias*/}

                            <GetSelector
                                label="¿Cuentas con el servicio de Camas de urgencias?"
                                value={form.camasUrgencias}
                                tooltipDescrip={`¿Cuentas con el servicio de Camas de urgencias?`}
                                name="camasUrgencias"
                                handleChange={handleChange}
                                options={YESORNOTOPTIONS}
                                show={true}
                                isRequired={true}
                                md={5}
                                childId="camasUrgenciasCantidad"
                            />
                            {
                                form.camasUrgencias === "true" ?
                                    <>
                                        {/*Camas de urgencias Cantidad*/}
                                        <Col xs={12} md={5} className="mb-3">
                                            <GetInput
                                                id="camasUrgenciasCantidad"
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

                            <GetSelector
                                label="Salas de observación"
                                value={form.salasObservacion}
                                tooltipDescrip={`¿Cuentas con el servicio de Salas de observación?`}
                                name="salasObservacion"
                                handleChange={handleChange}
                                options={YESORNOTOPTIONS}
                                show={true}
                                isRequired={true}
                                childId="salasObservacionCantidad"
                            />

                            {
                                form.salasObservacion === "true" ?
                                    <>
                                        {/*Salas de observación Cantidad*/}
                                        <Col xs={12} md={4} className="mb-3">
                                            <GetInput
                                                id="salasObservacionCantidad"
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

                            <GetSelector
                                label="Salas de choque"
                                value={form.salasChoque}
                                tooltipDescrip={`¿Cuentas con el servicio de Salas de choque?`}
                                name="salasChoque"
                                handleChange={handleChange}
                                options={YESORNOTOPTIONS}
                                show={true}
                                isRequired={true}
                                childId="salasChoqueCantidad"
                            />

                            {
                                form.salasChoque === "true" ?
                                    <>
                                        {/*Salas de choque Cantidad*/}
                                        <Col xs={12} md={4} className="mb-3">
                                            <GetInput
                                                id="salasChoqueCantidad"
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

                            <GetSelector
                                label="Salas de curaciones y yesos"
                                value={form.salasCuracionesYesos}
                                tooltipDescrip={`¿Cuentas con el servicio de Salas de curaciones y yesos?`}
                                name="salasCuracionesYesos"
                                handleChange={handleChange}
                                options={YESORNOTOPTIONS}
                                show={true}
                                isRequired={true}
                                childId="salasCuracionesYesosCantidad"
                            />
                            {
                                form.salasCuracionesYesos === "true" ?
                                    <>
                                        {/*Salas de curaciones y yesos Cantidad*/}
                                        <Col xs={12} md={4} className="mb-3">
                                            <GetInput
                                                id="salasCuracionesYesosCantidad"
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

                            <GetSelector
                                label="Zona de triage"
                                value={form.ZonaTriage}
                                tooltipDescrip={`¿Cuentas con el servicio de Zona de triage?`}
                                name="ZonaTriage"
                                handleChange={handleChange}
                                options={YESORNOTOPTIONS}
                                show={true}
                                isRequired={true}
                                childId="ZonaTriageCantidad"
                            />
                            {
                                form.ZonaTriage === "true" ?
                                    <>
                                        {/*Zona de triage Cantidad*/}
                                        <Col xs={12} md={4} className="mb-3">
                                            <GetInput
                                                id="ZonaTriageCantidad"
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

                            <GetSelector
                                label="Consultorios"
                                value={form.consultorios}
                                tooltipDescrip={`¿Cuentas con el servicio de Consultorios?`}
                                name="consultorios"
                                handleChange={handleChange}
                                options={YESORNOTOPTIONS}
                                show={true}
                                isRequired={true}
                                childId="consultoriosCantidad"
                            />

                            {
                                form.consultorios === "true" ?
                                    <>
                                        {/*Consultorios Cantidad*/}
                                        <Col xs={12} md={4} className="mb-3">
                                            <GetInput
                                                id="consultoriosCantidad"
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

                            <GetSelector
                                label="Sala de rayos X"
                                value={form.salaRayosX}
                                tooltipDescrip={`¿Cuentas con el servicio de Sala de rayos X?`}
                                name="salaRayosX"
                                handleChange={handleChange}
                                options={YESORNOTOPTIONS}
                                show={true}
                                isRequired={true}
                                childId="salaRayosXCantidad"
                            />

                            {
                                form.salaRayosX === "true" ?
                                    <>
                                        {/*Sala de rayos X Cantidad*/}
                                        <Col xs={12} md={4} className="mb-3">
                                            <GetInput
                                                id="salaRayosXCantidad"
                                                label="Sala de rayos X"
                                                value={form.salaRayosXCantidad}
                                                name="salaRayosXCantidad"
                                                handleChange={handleChange}
                                                tooltipDescrip="Número de Sala de rayos X"
                                                type="number"
                                                min={0}
                                                isRequired={true}
                                                placement="top"
                                                show={form.salaRayosX === "true" ? true : false}
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

                            <GetSelector
                                label="Ducha de emergencia"
                                value={form.duchaEmergencia}
                                tooltipDescrip={`¿Cuentas con el servicio de Ducha de emergencia?`}
                                name="duchaEmergencia"
                                handleChange={handleChange}
                                options={YESORNOTOPTIONS}
                                show={true}
                                isRequired={true}
                                childId="duchaEmergenciaCantidad"
                            />

                            {

                                form.duchaEmergencia === "true" ?
                                    <>
                                        {/*Ducha de emergencia Cantidad*/}
                                        < Col xs={12} md={4} className="mb-3">
                                            <GetInput
                                                id="duchaEmergenciaCantidad"
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
                                    </>
                                    : null

                            }

                        </Row>
                    </Col>

                    {/*Estación para lavado de ojos*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">
                            {/*Estación para lavado de ojos*/}

                            <GetSelector
                                label="Estación para lavado de ojos"
                                value={form.estacionLavadoOjos}
                                tooltipDescrip={`¿Cuentas con el servicio de Estación para lavado de ojos?`}
                                name="estacionLavadoOjos"
                                handleChange={handleChange}
                                options={YESORNOTOPTIONS}
                                show={true}
                                isRequired={true}
                                childId="estacionLavadoOjosCantidad"
                            />

                            {
                                form.estacionLavadoOjos === "true" ?
                                    <>
                                        {/*Estación para lavado de ojos Cantidad*/}
                                        <Col xs={12} md={4}>
                                            <GetInput
                                                id="estacionLavadoOjosCantidad"
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

                            <GetSelector
                                label="Carro rojo"
                                value={form.carroRojo}
                                tooltipDescrip={`¿Cuentas con el servicio de Carro rojo?`}
                                name="carroRojo"
                                handleChange={handleChange}
                                options={YESORNOTOPTIONS}
                                show={true}
                                isRequired={true}
                                childId="carroRojoCantidad"
                            />

                            {
                                form.carroRojo === "true" ?
                                    <>
                                        {/*Carro rojo Cantidad*/}
                                        <Col xs={12} md={4} className="mb-3">
                                            <GetInput
                                                id="carroRojoCantidad"
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
    );
}

function OtrosServicios(props)
{
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

                            <GetSelector
                                label="Servicio de Nutrición y Dietética (Alimentación) en Internamiento"
                                value={form.servicioNutricionDieteticaInternamiento}
                                tooltipDescrip={`¿Cuentas con el servicio de Servicio de Nutrición y Dietética (Alimentación) en Internamiento?`}
                                name="servicioNutricionDieteticaInternamiento"
                                handleChange={handleChange}
                                options={YESORNOTOPTIONS}
                                show={true}
                                isRequired={true}
                                md={6}
                                childId="servicioNutricionDieteticaInternamientoPSB"
                            />

                            {/*Servicio de Nutrición y Dietética (Alimentación) en Internamiento Propia, Subrogado propio, Subrogado externo*/}
                            <GetSelector
                                id="servicioNutricionDieteticaInternamientoPSB"
                                label="Servicio de Nutrición y Dietética (Alimentación) en Internamiento"
                                value={form.servicioNutricionDieteticaInternamientoPSB}
                                tooltipDescrip={`Servicio de Nutrición y Dietética (Alimentación) en Internamiento`}
                                name="servicioNutricionDieteticaInternamientoPSB"
                                handleChange={handleChange}
                                options={OPTIONSPSPSE}
                                show={form.servicioNutricionDieteticaInternamiento === "true" ? true : false}
                                isRequired={true}
                                md={6}
                            />

                        </Row>
                    </Col>

                    {/*Servicio de Banco de Leche*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">
                            {/*Servicio de Banco de Leche*/}

                            <GetSelector
                                label="Servicio de Banco de Leche"
                                value={form.servicioBancoLeche}
                                tooltipDescrip={`¿Cuentas con el servicio de Servicio de Banco de Leche?`}
                                name="servicioBancoLeche"
                                handleChange={handleChange}
                                options={YESORNOTOPTIONS}
                                show={true}
                                isRequired={true}
                                childId="servicioBancoLechePSB"
                            />

                            {/*Servicio de Banco de Leche Propia, Subrogado propio, Subrogado externo*/}

                            <GetSelector
                                id="servicioBancoLechePSB"
                                label="Servicio de Banco de Leche"
                                value={form.servicioBancoLechePSB}
                                tooltipDescrip={`Servicio de Banco de Leche`}
                                name="servicioBancoLechePSB"
                                handleChange={handleChange}
                                options={OPTIONSPSPSE}
                                show={form.servicioBancoLeche === "true" ? true : false}
                                isRequired={true}
                            />
                        </Row>
                    </Col>

                    {/*Farmacia Venta al Público*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">
                            {/*Farmacia Venta al Público*/}

                            <GetSelector
                                label="Farmacia Venta al Público"
                                value={form.farmaciaVentaPublico}
                                tooltipDescrip={`¿Cuentas con el servicio de Farmacia Venta al Público?`}
                                name="farmaciaVentaPublico"
                                handleChange={handleChange}
                                options={YESORNOTOPTIONS}
                                show={true}
                                isRequired={true}
                                childId="farmaciaVentaPublicoPSB"
                            />

                            {/*Farmacia Venta al Público Propia, Subrogado propio, Subrogado externo*/}

                            <GetSelector
                                id="farmaciaVentaPublicoPSB"
                                label="Farmacia Venta al Público"
                                value={form.farmaciaVentaPublicoPSB}
                                tooltipDescrip={`Farmacia Venta al Público`}
                                name="farmaciaVentaPublicoPSB"
                                handleChange={handleChange}
                                options={OPTIONSPSPSE}
                                show={form.farmaciaVentaPublico === "true" ? true : false}
                                isRequired={true}
                            />
                        </Row>
                    </Col>

                    {/*Clínica de oftalmología*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">
                            {/*Clínica de oftalmología*/}
                            <GetSelector
                                label="Clínica de oftalmología"
                                value={form.clinicaOftalmologia}
                                tooltipDescrip={`¿Cuentas con el servicio de Clínica de oftalmología?`}
                                name="clinicaOftalmologia"
                                handleChange={handleChange}
                                options={YESORNOTOPTIONS}
                                show={true}
                                isRequired={true}
                                childId="clinicaOftalmologiaPSB"
                            />

                            {/*Clínica de oftalmología Propia, Subrogado propio, Subrogado externo*/}
                            <GetSelector
                                label="Clínica de oftalmología"
                                value={form.clinicaOftalmologiaPSB}
                                tooltipDescrip={`Clínica de oftalmología`}
                                name="clinicaOftalmologiaPSB"
                                handleChange={handleChange}
                                options={OPTIONSPSPSE}
                                show={form.clinicaOftalmologia === "true" ? true : false}
                                isRequired={true}
                            />

                        </Row>
                    </Col>

                    {/*Clínica del sueño*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">
                            {/*Clínica del sueño*/}
                            <GetSelector
                                label="Clínica del sueño"
                                value={form.clinicaSuenio}
                                tooltipDescrip={`¿Cuentas con el servicio de Clínica del sueño?`}
                                name="clinicaSuenio"
                                handleChange={handleChange}
                                options={YESORNOTOPTIONS}
                                show={true}
                                isRequired={true}
                                childId="clinicaSuenioPSB"
                            />

                            {/*Clínica del sueño Propia, Subrogado propio, Subrogado externo*/}
                            <GetSelector
                                label="Clínica del sueño"
                                value={form.clinicaSuenioPSB}
                                tooltipDescrip={`Clínica del sueño`}
                                name="clinicaSuenioPSB"
                                handleChange={handleChange}
                                options={OPTIONSPSPSE}
                                show={form.clinicaSuenio === "true" ? true : false}
                                isRequired={true}
                            />

                        </Row>
                    </Col>

                    {/*Clínica del dolor*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">
                            {/*Clínica del dolor*/}
                            <GetSelector
                                label="Clínica del dolor"
                                value={form.clinicaDolor}
                                tooltipDescrip={`¿Cuentas con el servicio de Clínica del dolor?`}
                                name="clinicaDolor"
                                handleChange={handleChange}
                                options={YESORNOTOPTIONS}
                                show={true}
                                isRequired={true}
                                childId="clinicaDolorPSB"
                            />

                            {/*Clínica del dolor Propia, Subrogado propio, Subrogado externo*/}
                            <GetSelector
                                label="Clínica del dolor"
                                value={form.clinicaDolorPSB}
                                tooltipDescrip={`Clínica del dolor`}
                                name="clinicaDolorPSB"
                                handleChange={handleChange}
                                options={OPTIONSPSPSE}
                                show={form.clinicaDolor === "true" ? true : false}
                                isRequired={true}
                            />

                        </Row>
                    </Col>

                    {/*Clínica de fertilidad*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">
                            {/*Clínica de fertilidad*/}
                            <GetSelector
                                label="Clínica de fertilidad"
                                value={form.clinicaFertilidad}
                                tooltipDescrip={`¿Cuentas con el servicio de Clínica de fertilidad?`}
                                name="clinicaFertilidad"
                                handleChange={handleChange}
                                options={YESORNOTOPTIONS}
                                show={true}
                                isRequired={true}
                                childId="clinicaFertilidadPSB"
                            />

                            {/*Clínica de fertilidad Propia, Subrogado propio, Subrogado externo*/}
                            <GetSelector
                                id="clinicaFertilidadPSB"
                                label="Clínica de fertilidad"
                                value={form.clinicaFertilidadPSB}
                                tooltipDescrip={`Clínica de fertilidad`}
                                name="clinicaFertilidadPSB"
                                handleChange={handleChange}
                                options={OPTIONSPSPSE}
                                show={form.clinicaFertilidad === "true" ? true : false}
                                isRequired={true}
                            />

                        </Row>
                    </Col>

                    {/*Clínica dental*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">
                            {/*Clínica dental*/}
                            <GetSelector
                                label="Clínica dental"
                                value={form.clinicaDental}
                                tooltipDescrip={`¿Cuentas con el servicio de Clínica dental?`}
                                name="clinicaDental"
                                handleChange={handleChange}
                                options={YESORNOTOPTIONS}
                                show={true}
                                isRequired={true}
                                childId="clinicaDentalPSB"
                            />

                            {/*Clínica dental Propia, Subrogado propio, Subrogado externo*/}
                            <GetSelector
                                id="clinicaDentalPSB"
                                label="Clínica dental"
                                value={form.clinicaDentalPSB}
                                tooltipDescrip={`Clínica dental`}
                                name="clinicaDentalPSB"
                                handleChange={handleChange}
                                options={OPTIONSPSPSE}
                                show={form.clinicaDental === "true" ? true : false}
                                isRequired={true}
                            />

                        </Row>
                    </Col>

                    {/*Clínica de la mujer*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">
                            {/*Clínica de la mujer*/}
                            <GetSelector
                                label="Clínica de la mujer"
                                value={form.clinicaMujer}
                                tooltipDescrip={`¿Cuentas con el servicio de Clínica de la mujer?`}
                                name="clinicaMujer"
                                handleChange={handleChange}
                                options={YESORNOTOPTIONS}
                                show={true}
                                isRequired={true}
                                childId="clinicaMujerPSB"
                            />

                            {/*Clínica de la mujer Propia, Subrogado propio, Subrogado externo*/}
                            <GetSelector
                                id="clinicaMujerPSB"
                                label="Clínica de la mujer"
                                value={form.clinicaMujerPSB}
                                tooltipDescrip={`Clínica de la mujer`}
                                name="clinicaMujerPSB"
                                handleChange={handleChange}
                                options={OPTIONSPSPSE}
                                show={form.clinicaMujer === "true" ? true : false}
                                isRequired={true}
                            />

                        </Row>
                    </Col>

                    {/*Asistencia en casa (home care)*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">
                            {/*Asistencia en casa (home care)*/}
                            <GetSelector
                                label="Asistencia en casa (home care)"
                                value={form.homeCare}
                                tooltipDescrip={`¿Cuentas con el servicio de Asistencia en casa (home care)?`}
                                name="homeCare"
                                handleChange={handleChange}
                                options={YESORNOTOPTIONS}
                                show={true}
                                isRequired={true}
                                childId="homeCarePSB"
                            />

                            {/*Asistencia en casa (home care) Propia, Subrogado propio, Subrogado externo*/}
                            <GetSelector
                                id="homeCarePSB"
                                label="Asistencia en casa (home care)"
                                value={form.homeCarePSB}
                                tooltipDescrip={`Asistencia en casa (home care)`}
                                name="homeCarePSB"
                                handleChange={handleChange}
                                options={OPTIONSPSPSE}
                                show={form.homeCare === "true" ? true : false}
                                isRequired={true}
                            />

                        </Row>
                    </Col>

                    {/*Cuidados paleativos*/}
                    <Col xs={12} md={12} className="mb-3">
                        <Row className="justify-content-center">
                            {/*Cuidados paleativos*/}
                            <GetSelector
                                label="Cuidados paleativos"
                                value={form.cuidadosPaleativos}
                                tooltipDescrip={`¿Cuentas con el servicio de Cuidados paleativos?`}
                                name="cuidadosPaleativos"
                                handleChange={handleChange}
                                options={YESORNOTOPTIONS}
                                show={true}
                                isRequired={true}
                                childId="cuidadosPaleativosPSB"
                            />

                            {/*Cuidados paleativos Propia, Subrogado propio, Subrogado externo*/}
                            <GetSelector
                                id="cuidadosPaleativosPSB"
                                label="Cuidados paleativos"
                                value={form.cuidadosPaleativosPSB}
                                tooltipDescrip={`Cuidados paleativos`}
                                name="cuidadosPaleativosPSB"
                                handleChange={handleChange}
                                options={OPTIONSPSPSE}
                                show={form.cuidadosPaleativos === "true" ? true : false}
                                isRequired={true}
                            />

                        </Row>
                    </Col>
                </Row>
            </Col >

        </Fragment >
    )

}

function Transplantes(props)
{
    const { handleChange, form } = props;

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

                            <GetSelector
                                label="¿Realizan Trasplantes? "
                                value={form.trasplantes}
                                tooltipDescrip={`¿Realizan Trasplantes? `}
                                name="trasplantes"
                                handleChange={handleChange}
                                options={YESORNOTOPTIONS}
                                show={true}
                                isRequired={true}
                                childId="transplantesChildren"
                            />

                        </Row>
                    </Col>

                    {/*Riñon*/}
                    <GetSelector
                        id="rinion"
                        label="¿Realizan Trasplantes de riñon? "
                        value={form.rinion}
                        tooltipDescrip={`¿Realizan Trasplantes de riñon? `}
                        name="rinion"
                        handleChange={handleChange}
                        options={YESORNOTOPTIONS}
                        show={form.trasplantes === "true" ? true : false}
                        isRequired={true}
                    />

                    {/*Hígado*/}
                    <GetSelector
                        id="higado"
                        label="¿Realizan Trasplantes de Hígado? "
                        value={form.higado}
                        tooltipDescrip={`¿Realizan Trasplantes de Hígado? `}
                        name="higado"
                        handleChange={handleChange}
                        options={YESORNOTOPTIONS}
                        show={form.trasplantes === "true" ? true : false}
                        isRequired={true}
                    />

                    {/*Pulmón*/}
                    <GetSelector
                        id="pulmon"
                        label="¿Realizan Trasplantes de Pulmón? "
                        value={form.pulmon}
                        tooltipDescrip={`¿Realizan Trasplantes de Pulmón? `}
                        name="pulmon"
                        handleChange={handleChange}
                        options={YESORNOTOPTIONS}
                        show={form.trasplantes === "true" ? true : false}
                        isRequired={true}
                    />

                    {/*Corazón*/}
                    <GetSelector
                        id="corazon"
                        label="¿Realizan Trasplantes de Corazón? "
                        value={form.corazon}
                        tooltipDescrip={`¿Realizan Trasplantes de Corazón? `}
                        name="corazon"
                        handleChange={handleChange}
                        options={YESORNOTOPTIONS}
                        show={form.trasplantes === "true" ? true : false}
                        isRequired={true}
                    />

                    {/*Córneas*/}
                    <GetSelector
                        id="corneas"
                        label="¿Realizan Trasplantes de Córneas? "
                        value={form.corneas}
                        tooltipDescrip={`¿Realizan Trasplantes de Córneas? `}
                        name="corneas"
                        handleChange={handleChange}
                        options={YESORNOTOPTIONS}
                        show={form.trasplantes === "true" ? true : false}
                        isRequired={true}
                    />

                    {/*Hueso*/}
                    <GetSelector
                        id="hueso"
                        label="¿Realizan Trasplantes de Hueso? "
                        value={form.hueso}
                        tooltipDescrip={`¿Realizan Trasplantes de Hueso? `}
                        name="hueso"
                        handleChange={handleChange}
                        options={YESORNOTOPTIONS}
                        show={form.trasplantes === "true" ? true : false}
                        isRequired={true}
                    />

                    {/*Células hematopoyéticas (Médula ósea)*/}
                    <GetSelector
                        id="celulasHematopoyeticas"
                        label="¿Realizan Trasplantes de Células hematopoyéticas (Médula ósea)? "
                        value={form.celulasHematopoyeticas}
                        tooltipDescrip={`¿Realizan Trasplantes de Células hematopoyéticas (Médula ósea)? `}
                        name="celulasHematopoyeticas"
                        handleChange={handleChange}
                        options={YESORNOTOPTIONS}
                        show={form.trasplantes === "true" ? true : false}
                        isRequired={true}
                        style={{ height: '100px' }}
                    />

                    {/*Otro órgano (especifique)*/}
                    <Col xs={12} md={5} className="mb-3">
                        <GetInput
                            id="otroOrgano"
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
                            show={form.trasplantes === "true" ? true : false}
                            style={{ height: '100px' }}
                        />
                    </Col>

                </Row>
            </Col>
        </Fragment>
    );
}

function GetInput(props)
{
    //we obtain their props
    const { label, value, name, handleChange, tooltipDescrip, min, type, isRequired, placement, show, isReadOnly = false, isTextArea = false, style = null } = props;

    if (show === true) {
        return (
            <Fragment>
                <FloatingLabel controlId="floatingInput" label={label}>
                    <OverlayTrigger
                        placement={placement}
                        overlay={<Tooltip id={`tooltip-${name}`}>{tooltipDescrip}</Tooltip>}
                    >
                        <Form.Control
                            as={isTextArea ? "textarea" : "input"}
                            type={type}
                            placeholder={label}
                            value={value ? value : ""}
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
        );
    }
}

function GetSelector(props)
{
    //we obtain their props
    const { label, style = null, value, tooltipDescrip, name, handleChange, options, isRequired, show, xs = 12, md = 4, containerClass = "mb-3", childId = null, id = null } = props;

    if (show == true) {
        return (
            <Fragment>
                <Col xs={xs} md={md} className={containerClass}>
                    <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip id={`tooltip-${name}`}>{tooltipDescrip}</Tooltip>}
                    >
                        <FloatingLabel controlId={id} label={label}>
                            <Form.Select
                                aria-label="Floating label"
                                value={value ? value : ""}
                                onChange={(e) => handleChange(e, childId)}
                                name={name}
                                required={isRequired}
                                style={style}
                            >
                                <option value="" disabled>
                                    Seleccione una opción
                                </option>
                                {options.map((option) =>
                                {
                                    return (
                                        <Fragment key={option.id}>
                                            <option value={option.value}>{option.name}</option>
                                        </Fragment>
                                    );
                                })}
                            </Form.Select>
                        </FloatingLabel>
                    </OverlayTrigger>
                </Col>
            </Fragment>
        );
    } else {
        return null;
    }
}

export default SA;
