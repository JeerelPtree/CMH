import React, { Fragment, useState, useEffect } from "react";
import { Container, Col, Row, FloatingLabel, Form, OverlayTrigger, Tooltip, InputGroup } from "react-bootstrap";
import YesOrNotOptions from "./json/yesOrNotOptionsTrueOrFalse.json"
import PropioProveedorOptions from "../../json/propioProvedor.json"
import ServidorPropioNubeOptions from "../../json/servidorPropioNube.json"
import ExpendienteClinicoOptions from "../../json/expedienteClinico.json"
import Select from "react-select";

//we import css
import "../../../globalStyles.css"

const currentYear = new Date().getFullYear();

function TI({ form, setForm }) {

    //module's functions
    const handleChange = async (e, childId) => {
        e.persist();

        if (childId != null) {

            const arrayChildrenids = childId.split(", ");

            await setNullChildren(e.target.name, e.target.value, arrayChildrenids)

        } else
            await setForm({
                ...form,
                [e.target.name]: e.target.value,
            });

    }

    /**
     * It takes in a name, value, and an array of children ids, and sets the value of the name to the
     * value, and sets the value of the children ids to null
     */
    const setNullChildren = async (name, value, arrayChildrenids) => {

        switch (arrayChildrenids.length) {
            case 1:

                await setForm(
                    {
                        ...form,
                        [name]: value,
                        [arrayChildrenids[0]]: null
                    }
                )
                break;

            case 2:

                await setForm(
                    {
                        ...form,
                        [name]: value,
                        [arrayChildrenids[0]]: null,
                        [arrayChildrenids[1]]: null
                    }
                )
                break;

            case 3:

                await setForm(
                    {
                        ...form,
                        [name]: value,
                        [arrayChildrenids[0]]: null,
                        [arrayChildrenids[1]]: null,
                        [arrayChildrenids[2]]: null
                    }
                )
                break;

            default:

                await setForm(
                    {
                        ...form,
                        [name]: value,
                        [arrayChildrenids[0]]: null,
                        [arrayChildrenids[1]]: null,
                        [arrayChildrenids[2]]: null,
                        [arrayChildrenids[3]]: null,
                    }
                )
                break;
        }

    }

    return (
        <Fragment>
            <Container className="mt-3">
                <Row>
                    <Col xs={12} md={12}>
                        <Row>

                            {/*Sistemas y Tecnologías de la información*/}
                            <Col xs={12} md={12} className="">
                                <h4 className="text-center title-cmh">Sistemas y Tecnologías de la información</h4>
                            </Col>

                            <ModuloTi1 form={form} handleChange={handleChange} />

                            <ModuloTi3 form={form} handleChange={handleChange} setForm={setForm} />

                        </Row>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )


}

function ModuloTi1(props) {

    //we obtain their props 
    const { form, handleChange } = props;

    return (
        <>

            <Col xs={12} md={12} className="mt-3">
                <Row className="justify-content-center">

                    {/*¿Cuentan con Sistema de Gestión Hospitalaria?*/}
                    <GetSelector
                        md={3}
                        label='¿Cuentan con Sistema de Gestión Hospitalaria?'
                        style={{ height: '90px' }}
                        value={form.sistemaGestionHospitalaria}
                        name='sistemaGestionHospitalaria'
                        tooltipDescrip='¿Cuentan con Sistema de Gestión Hospitalaria?'
                        handleChange={handleChange}
                        options={YesOrNotOptions}
                        isRequired={true}
                        show={true}
                        childId='sistemaGestionHospitalariaPP, sistemaGestionHospitalariaProveedor, sistemaGestionHospitalariaPN'
                    />

                    {/*Gestión Hospitalaria Propio o Proveedor*/}
                    <GetSelector
                        md={3}
                        label='Gestión Hospitalaria'
                        style={{ height: '90px' }}
                        value={form.sistemaGestionHospitalariaPP}
                        name='sistemaGestionHospitalariaPP'
                        tooltipDescrip='Gestión Hospitalaria es propia o de un proveedor'
                        handleChange={handleChange}
                        options={PropioProveedorOptions}
                        isRequired={true}
                        show={form.sistemaGestionHospitalaria === "true" ? true : false}
                        childId='sistemaGestionHospitalariaProveedor, sistemaGestionHospitalariaPN'
                    />

                    {/*Gestión Hospitalaria Proveedor*/}
                    <GetInput
                        md={3}
                        label="Gestión Hospitalaria"
                        value={form.sistemaGestionHospitalariaProveedor}
                        name="sistemaGestionHospitalariaProveedor"
                        handleChange={handleChange}
                        tooltipDescrip="¿Quién es su proveedor?"
                        type="text"
                        min={0}
                        isRequired={true}
                        placement="top"
                        show={form.sistemaGestionHospitalariaPP === "proveedor" ? true : false}
                        style={{ height: "90px" }}
                    />

                    {/*Gestión Hospitalaria Proveedor*/}
                    <GetSelector
                        md={3}
                        label='Gestión Hospitalaria'
                        style={{ height: '90px' }}
                        value={form.sistemaGestionHospitalariaPN}
                        name='sistemaGestionHospitalariaPN'
                        tooltipDescrip='¿Su servidor es propio o se encuentra en la nube?'
                        handleChange={handleChange}
                        options={ServidorPropioNubeOptions}
                        isRequired={true}
                        show={form.sistemaGestionHospitalariaPP === "proveedor" ? true : false}
                    />

                </Row>
            </Col>

            <Col xs={12} md={12} className="mt-3">
                <Row className="justify-content-center">

                    {/*¿Cuentan con expediente clínico electrónico (ECE)?*/}
                    <GetSelector
                        md={3}
                        label='¿Cuentan con expediente clínico electrónico (ECE)?'
                        style={{ height: '90px' }}
                        value={form.expedienteClinicoElectronico}
                        name='expedienteClinicoElectronico'
                        tooltipDescrip='¿Cuentan con expediente clínico electrónico (ECE)?'
                        handleChange={handleChange}
                        options={YesOrNotOptions}
                        isRequired={true}
                        show={true}
                        childId='expedienteClinicoElectronicoPP, expedienteClinicoElectronicoProveedor, expedienteClinicoElectronicoPN'
                    />

                    {/*Expediente clínico electrónico Propio o Proveedor*/}
                    <GetSelector
                        md={3}
                        label='Expediente clínico electrónico'
                        style={{ height: '90px' }}
                        value={form.expedienteClinicoElectronicoPP}
                        name='expedienteClinicoElectronicoPP'
                        tooltipDescrip='Expediente clínico electrónico es propio o de un proveedor'
                        handleChange={handleChange}
                        options={PropioProveedorOptions}
                        isRequired={true}
                        show={form.expedienteClinicoElectronico === "true" ? true : false}
                        childId='expedienteClinicoElectronicoProveedor, expedienteClinicoElectronicoPN'
                    />

                    {/*Expediente clínico electrónico Proveedor*/}
                    <GetInput
                        md={3}
                        label="Expediente clínico electrónico"
                        value={form.expedienteClinicoElectronicoProveedor}
                        name="expedienteClinicoElectronicoProveedor"
                        handleChange={handleChange}
                        tooltipDescrip="¿Quién es su proveedor?"
                        type="text"
                        min={0}
                        isRequired={true}
                        placement="top"
                        show={form.expedienteClinicoElectronicoPP === "proveedor" ? true : false}
                        style={{ height: "90px" }}
                    />

                    {/*Expediente clínico electrónico Proveedor*/}
                    <GetSelector
                        md={3}
                        label='Expediente clínico electrónico'
                        style={{ height: '90px' }}
                        value={form.expedienteClinicoElectronicoPN}
                        name='expedienteClinicoElectronicoPN'
                        tooltipDescrip='¿Su servidor es propio o se encuentra en la nube?'
                        handleChange={handleChange}
                        options={ServidorPropioNubeOptions}
                        isRequired={true}
                        show={form.expedienteClinicoElectronicoPP === "proveedor" ? true : false}
                    />

                </Row>
            </Col>

            <Col xs={12} md={12} className="mt-3">
                <Row className="justify-content-center">

                    {/*¿Cuentan con sistema de administración integrado? */}
                    <GetSelector
                        md={3}
                        label='¿Cuentan con sistema de administración integrado?'
                        style={{ height: '90px' }}
                        value={form.sistemaAdministracionIntegrado}
                        name='sistemaAdministracionIntegrado'
                        tooltipDescrip='¿Cuentan con sistema de administración integrado?'
                        handleChange={handleChange}
                        options={YesOrNotOptions}
                        isRequired={true}
                        show={true}
                        childId='sistemaAdministracionIntegradoPP, sistemaAdministracionIntegradoProveedor, sistemaAdministracionIntegradoPN'
                    />

                    {/* Administración Integrado Propio o Proveedor*/}
                    <GetSelector
                        md={3}
                        label='Administración Integrado'
                        style={{ height: '90px' }}
                        value={form.sistemaAdministracionIntegradoPP}
                        name='sistemaAdministracionIntegradoPP'
                        tooltipDescrip='Sistema de administración integrado es propio o de un proveedor'
                        handleChange={handleChange}
                        options={PropioProveedorOptions}
                        isRequired={true}
                        show={form.sistemaAdministracionIntegrado === "true" ? true : false}
                        childId='sistemaAdministracionIntegradoProveedor, sistemaAdministracionIntegradoPN'
                    />

                    {/* Administración Integrado Proveedor*/}
                    <GetInput
                        md={3}
                        label="Administración Integrado"
                        value={form.sistemaAdministracionIntegradoProveedor}
                        name="sistemaAdministracionIntegradoProveedor"
                        handleChange={handleChange}
                        tooltipDescrip="¿Quién es su proveedor?"
                        type="text"
                        min={0}
                        isRequired={true}
                        placement="top"
                        show={form.sistemaAdministracionIntegradoPP === "proveedor" ? true : false}
                        style={{ height: "90px" }}
                    />

                    {/* Administración Integrado Proveedor*/}
                    <GetSelector
                        md={3}
                        label='Administración Integrado'
                        style={{ height: '90px' }}
                        value={form.sistemaAdministracionIntegradoPN}
                        name='sistemaAdministracionIntegradoPN'
                        tooltipDescrip='¿Su servidor es propio o se encuentra en la nube?'
                        handleChange={handleChange}
                        options={ServidorPropioNubeOptions}
                        isRequired={true}
                        show={form.sistemaAdministracionIntegradoPP === "proveedor" ? true : false}
                    />

                </Row>
            </Col>

            <Col xs={12} md={12} className="mt-3">
                <Row className="justify-content-center">

                    {/* ¿Cuentan con RIS? */}
                    <GetSelector
                        md={3}
                        label='¿Cuentan con RIS?'
                        style={{ height: '90px' }}
                        value={form.sistemaInformacionRadiologica}
                        name='sistemaInformacionRadiologica'
                        tooltipDescrip='¿Cuentan con sistema de información radiológica?'
                        handleChange={handleChange}
                        options={YesOrNotOptions}
                        isRequired={true}
                        show={true}
                    />

                    <GetSelector
                        md={3}
                        label='¿Cuentan con PACS?'
                        style={{ height: '90px' }}
                        value={form.sistemaComunicacionyArchivadoImagenes}
                        name='sistemaComunicacionyArchivadoImagenes'
                        tooltipDescrip='¿Cuentan con sistema de comunicación y archivado de imágenes?'
                        handleChange={handleChange}
                        options={YesOrNotOptions}
                        isRequired={true}
                        show={true}
                    />

                </Row>
            </Col>


        </>
    )

}

function ModuloTi3(props) {

    //we obtain their props 
    const { form, handleChange, setForm } = props;

    const handleMultiSelectExpedienteClinicoElectronico = async (a) => {

        console.log('a: ', a)

        await setForm(
            {
                ...form,
                expedienteClinicoElectronico: a
            }
        );
    }

    const prueba = () => {
        console.log(form)
    }

    return (
        <>

            {/*Expediente Clínico Electrónico*/}
            <Col xs={12} md={12} className="mt-4">
                <h4 className="text-center title-cmh">Expediente Clínico Electrónico</h4>

                <Row className="justify-content-center">

                    <MultiSelect
                        options={ExpendienteClinicoOptions}
                        form={form}
                        label="Expediente Clínico Electrónico"
                        name={"expedienteClinicoElectronico"}
                        handleChange={handleMultiSelectExpedienteClinicoElectronico}
                        tooltipDescrip={`Seleccione de la lista los Expediente Clínico Electrónico`}
                    />

                </Row>

                <Row className="justify-content-center">
                    <GetCheckBox
                        type="checkbox"
                        label="Admisión"
                        value={form.admision}
                        name="admision"
                        handleChange={handleChange}
                        show={true}
                    />

                    <GetCheckBox
                        type="checkbox"
                        label="Expediente Clínico"
                        value={form.expedienteClinico}
                        name="expedienteClinico"
                        handleChange={handleChange}
                        show={true}
                    />

                    <GetCheckBox
                        type="checkbox"
                        label="Laboratorio"
                        value={form.laboratorio}
                        name="laboratorio"
                        handleChange={handleChange}
                        show={true}
                    />

                    <GetCheckBox
                        type="checkbox"
                        label="Imagenología"
                        value={form.imagenologia}
                        name="imagenologia"
                        handleChange={handleChange}
                        show={true}
                    />

                    <GetCheckBox
                        type="checkbox"
                        label="Receta Electrónica"
                        value={form.recetaElectronica}
                        name="recetaElectronica"
                        handleChange={handleChange}
                        show={true}
                    />

                    <GetCheckBox
                        type="checkbox"
                        label="Nutrición"
                        value={form.nutricion}
                        name="nutricion"
                        handleChange={handleChange}
                        show={true}
                    />

                </Row>
            </Col>

            {/*Contabilidad*/}
            <Col xs={12} md={12} className="mt-4">
                <h4 className="text-center title-cmh">Contabilidad</h4>

                <Row className="justify-content-center">
                    <GetCheckBox
                        //md={2}
                        type="checkbox"
                        label="Inventarios"
                        value={form.inventarios}
                        name="inventarios"
                        handleChange={handleChange}
                        show={true}
                    />

                    <GetCheckBox
                        type="checkbox"
                        label="Cuentas por Cobrar"
                        value={form.cuentasCobrar}
                        name="cuentasCobrar"
                        handleChange={handleChange}
                        show={true}
                    />

                    <GetCheckBox
                        type="checkbox"
                        label="Cuentas por Pagar"
                        value={form.laboratorio}
                        name="laboratorio"
                        handleChange={handleChange}
                        show={true}
                    />

                    <GetCheckBox
                        type="checkbox"
                        label="Caja"
                        value={form.caja}
                        name="caja"
                        handleChange={handleChange}
                        show={true}
                    />

                    <GetCheckBox
                        type="checkbox"
                        label="Presupuestos"
                        value={form.presupuestos}
                        name="presupuestos"
                        handleChange={handleChange}
                        show={true}
                    />

                    <GetCheckBox
                        type="checkbox"
                        label="Compras"
                        value={form.compras}
                        name="compras"
                        handleChange={handleChange}
                        show={true}
                    />

                </Row>
            </Col>

            {/*Recursos humanos*/}
            <Col xs={12} md={4} className="mt-4">
                <h4 className="text-center title-cmh">Recursos Humanos</h4>

                <Row>
                    <GetCheckBox
                        md={6}
                        type="checkbox"
                        label="Recursos Humanos"
                        value={form.recursosHumanos}
                        name="recursosHumanos"
                        handleChange={handleChange}
                        show={true}
                    />

                    <GetCheckBox
                        md={6}
                        type="checkbox"
                        label="Nomina"
                        value={form.nomina}
                        name="nomina"
                        handleChange={handleChange}
                        show={true}
                    />

                </Row>
            </Col>

            {/*Gestión de Quirófanos*/}
            <Col xs={12} md={4} className="mt-4">
                <h4 className="text-center title-cmh">Gestión de Quirófanos</h4>

                <Row className="justify-content-center">
                    <GetCheckBox
                        md={12}
                        type="checkbox"
                        label="Tabla Pre-Quirúrgica y Quirúrgica"
                        value={form.tablaPrequirúrgicaQuirúrgica}
                        name="tablaPrequirúrgicaQuirúrgica"
                        handleChange={handleChange}
                        show={true}
                    />
                </Row>
            </Col>

            {/*Modulo Urgencias*/}
            <Col xs={12} md={4} className="mt-4">
                <h4 className="text-center title-cmh">Modulo Urgencias</h4>

                <Row className="justify-content-center">
                    <GetCheckBox
                        md={12}
                        type="checkbox"
                        label="Traige Categorización Pacientes"
                        value={form.traigeCategorizacionPacientes}
                        name="traigeCategorizacionPacientes"
                        handleChange={handleChange}
                        show={true}
                    />
                </Row>
            </Col>

            {/*Varios*/}
            <Col xs={12} md={12} className="mt-4">
                <h4 className="text-center title-cmh">Varios</h4>

                <Row className="justify-content-center">
                    <GetCheckBox
                        type="checkbox"
                        label="Administración de Citas y Agenda"
                        value={form.administracionCitasAgenda}
                        name="administracionCitasAgenda"
                        handleChange={handleChange}
                        show={true}
                    />

                    <GetCheckBox
                        type="checkbox"
                        label="Banco de Sangre"
                        value={form.bancoSangre}
                        name="bancoSangre"
                        handleChange={handleChange}
                        show={true}
                    />

                    <GetCheckBox
                        type="checkbox"
                        label="Sistemas de Seguridad"
                        value={form.sistemasSeguridad}
                        name="sistemasSeguridad"
                        handleChange={handleChange}
                        show={true}
                    />

                    <GetCheckBox
                        type="checkbox"
                        label="Reportes, Estadística y/o Análisis "
                        value={form.reportesEstadísticaAnalisis}
                        name="traigeCategorizacionPacientes"
                        handleChange={handleChange}
                        show={true}
                    />

                    <GetCheckBox
                        type="checkbox"
                        label="Gestión de Camas"
                        value={form.gestionCamas}
                        name="gestionCamas"
                        handleChange={handleChange}
                        show={true}
                    />

                    <GetCheckBox
                        type="checkbox"
                        label="Módulo Referencia y Contra-Referencia"
                        value={form.moduloReferenciaContraReferencia}
                        name="moduloReferenciaContraReferencia"
                        handleChange={handleChange}
                        show={true}
                    />

                    <GetCheckBox
                        type="checkbox"
                        label="Módulo Enfermería"
                        value={form.moduloEnfermeria}
                        name="traigeCategorizacionPacientes"
                        handleChange={handleChange}
                        show={true}
                    />

                </Row>
            </Col>

        </>
    )

}

function GetInput(props) {

    //we obtain their props
    const { label, value, name, handleChange, tooltipDescrip, min, type, isRequired, placement, show, isReadOnly = false, isTextArea = false, style = null,
        xs = 12, md = 6, containerClass = "mb-3" } = props

    if (show == true) {
        return (
            <Fragment>
                <Col xs={xs} md={md} className={containerClass}>
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
                </Col>
            </Fragment>
        )
    }
}

function GetInputFormat(props) {

    //we obtain their props
    const { label, value, name, handleChange, tooltipDescrip, type, min, isRequired, placement, show, isReadOnly = false, leftSymbol, rightSymbol, isLeft = false, isRight = false } = props

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
                                min={min}
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
                                min={min}
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
    const { label, style = null, value, tooltipDescrip, name, handleChange, options, isRequired, show, xs = 12, md = 6, containerClass = "mb-3", childId = null, id = null } = props;

    /* const [flag, setFlag] = useState({id: id, show: show });

            console.log("ID:", flag) */

    if (show == true) {
        return (
            <Fragment>
                <Col xs={xs} md={md} className={containerClass}>
                    <OverlayTrigger
                        placement="top"
                        overlay={
                            <Tooltip id={`tooltip-${name}`}>{tooltipDescrip}</Tooltip>
                        }>
                        <FloatingLabel controlId={id} label={label}>
                            <Form.Select
                                aria-label="Floating label"
                                value={value ? value : ''}
                                onChange={(e) => handleChange(e, childId)}
                                name={name}
                                required={isRequired}
                                style={style}
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
                    </OverlayTrigger>
                </Col>
            </Fragment>
        )
    } else {

        /* id && clearSelector(id); */
        return null;
    }
}

function GetCheckBox(props) {

    const { label, value, name, handleChange, type, isRequired = false, show,
        xs = 12, md = 3, containerClass = "mt-3" } = props

    if (show === true) {
        return (
            <Fragment>
                <Col xs={xs} md={md} className={containerClass}>
                    <Row className="justify-content-center">
                        <Col xs={12} md={12}>
                            <Form.Check
                                type={type}
                                label={label}
                                value={value}
                                name={name}
                                onChange={handleChange}
                                required={isRequired}
                            />
                        </Col>
                    </Row>
                </Col>
            </Fragment>
        )
    } else {
        return null;
    }

}

function MultiSelect(props) {

    //we obtain their props
    const { label, tooltipDescrip, name, handleChange, options, xs = 12, md = 6, containerClass = "mb-3", dataSelector = null } = props;

    return (
        <>
            <Col xs={xs} md={md} className={containerClass}>
                <OverlayTrigger
                    placement="top"
                    overlay={
                        <Tooltip>{tooltipDescrip}</Tooltip>
                    }>
                    <span>
                        <Select
                            placeholder={label}
                            name={name}
                            onChange={handleChange}
                            closeMenuOnSelect={false}
                            isMulti
                            defaultValue={dataSelector}
                            options={options}
                            styles={{
                                multiValueLabel: (base) => ({
                                    ...base,
                                    backgroundColor: "#C6D602",
                                    color: '#004976',
                                    fontWeight: "bold",
                                    hover: "none"
                                }),
                            }}
                        />
                    </span>
                </OverlayTrigger>
            </Col>
        </>
    )
}


export default TI;