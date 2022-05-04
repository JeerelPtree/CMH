import React, { Fragment, useState, useEffect } from "react";
import { Container, Col, Row, FloatingLabel, Button, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import MultiSelect from "../../components/selectors/MultiSelect";
import SelectorCantidad from "../selectors/SelectorCantidad";

//import axios from "axios"


//we import css
import "../../../globalStyles.css"

const currentYear = new Date().getFullYear();
const lastYear = currentYear - 1;

function SA() {

    //declared the variables, constants ans states for this module
    const [form, setForm] = useState({})

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
            <Container className="mt-3">
                <Row>
                    <Col xs={12} md={12}>
                        <Row>

                            {/*Credencialización*/}
                            <Col xs={12} md={12} className="mt-3">
                                {/*¿Cuenta con credencialización?*/}
                                <Row className="align-items-center">
                                    {/*Etiqueta*/}
                                    <Col xs={9} md={6} className="my-auto">
                                        <Form.Label floatingInput>¿Cuenta con Procedimiento de Credencialización de Médicos?</Form.Label>
                                    </Col>

                                    {/*Selector*/}
                                    <Col xs={3} md={1} className="my-auto">
                                        <Form.Select aria-label="Floating label" value={form.credencializacion ? form.credencializacion : ''} onChange={handleChange} name="credencializacion"
                                        >
                                            <option value="" disabled>Seleccione una opción</option>
                                            <option value={true}>Si</option>
                                            <option value={false}>No</option>
                                        </Form.Select>
                                    </Col>

                                    {/*Adjuntar archivos de credencialización*/}
                                    <Col xs={12} md={5} className="my-auto pt-3">

                                        <Form.Group controlId="formFileMultiple" className="mb-3">
                                            <Form.Control
                                                placeholder="Ningún archivo seleccionado"
                                                type="file"
                                                value={form.credencializacionArchivos ? form.credencializacionArchivos : ''}
                                                name="credencializacionArchivos"
                                                onChange={handleChange}
                                                multiple />
                                        </Form.Group>

                                    </Col>
                                </Row>
                            </Col>

                            <Especialidad form={form} handleChange={handleChange} />

                            <EspecialidadesQuirurgicas form={form} handleChange={handleChange} />

                            <EspecialidadesMedicas form={form} handleChange={handleChange} />

                            <ServiciosSoporteTerapeutico form={form} handleChange={handleChange} />

                            {/*TODO: Hacer la suma de los médicos*/}
                            {/*Total medicos credencializados*/}
                            <Col xs={12} md={12} className="mt-3 mb-3">
                                <Row className="align-items-center">

                                    {/*Etiqueta*/}
                                    <Col xs={9} md={6} className="my-auto">
                                        <Form.Label floatingInput>Número total de Médicos credencializados:</Form.Label>
                                    </Col>

                                    {/*Input*/}
                                    <Col xs={3} md={6} className="my-auto">
                                        <Form.Control
                                            type="number"
                                            readOnly
                                            placeholder=""
                                            value={form.numeroTotalMedicosCredencializados ? form.numeroTotalMedicosCredencializados : ''}
                                            name="numeroTotalMedicosCredencializados"
                                            onChange={handleChange} />
                                    </Col>
                                </Row>
                            </Col>

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
                    <Col xs={12} md={6} className="mt-3">

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
                    <Col xs={12} md={6} className="mt-3">

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
                    <Col xs={12} md={6} className="mt-3">

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
                    <Col xs={12} md={6} className="mt-3 mb-3">

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
                    <Col xs={12} md={6} className="mt-3 mb-3">

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
                    <Col xs={12} md={6} className="mt-3 mb-3">

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
                    <Col xs={12} md={6} className="mt-3 mb-3">

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
                    <Col xs={12} md={6} className="mt-3 mb-3">

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
                    <Col xs={12} md={6} className="mt-3">

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
                    <Col xs={12} md={6} className="mt-3">

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
                    <Col xs={12} md={6} className="mt-3">

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
                    <Col xs={12} md={6} className="mt-3">

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
                    <Col xs={12} md={6} className="mt-3">

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
                    <Col xs={12} md={6} className="mt-3">

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
                    <Col xs={12} md={6} className="mt-3">

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
                    <Col xs={12} md={6} className="mt-3">

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
                    <Col xs={12} md={6} className="mt-3">

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
                    <Col xs={12} md={6} className="mt-3">

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
                    <Col xs={12} md={6} className="mt-3">

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
                    <Col xs={12} md={6} className="mt-3">

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
                    <Col xs={12} md={6} className="mb-3">
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
                    <Col xs={12} md={6} className="mb-3">

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
                    <Col xs={12} md={6} className="mb-3">

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
                    <Col xs={12} md={6} className="mb-3">

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
                    <Col xs={12} md={6} className="mb-3">

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
                    <Col xs={12} md={6} className="mb-3">

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
                    <Col xs={12} md={6} className="mt-3">

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
                    <Col xs={12} md={6} className="mt-3">
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
                    <Col xs={12} md={6} className="mt-3">

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
                    <Col xs={12} md={6} className="mt-3">

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
                    <Col xs={12} md={6} className="mt-3">

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
                    <Col xs={12} md={6} className="mt-3">

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
                    <Col xs={12} md={6} className="mt-3">

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
                    <Col xs={12} md={6} className="mt-3">

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
                    <Col xs={12} md={6} className="mt-3">

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
                    <Col xs={12} md={6} className="mt-3">

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
                    <Col xs={12} md={6} className="mt-3">

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
                    <Col xs={12} md={6} className="mt-3">

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
                    <Col xs={12} md={6} className="mt-3">

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
                    <Col xs={12} md={6} className="mb-3">
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
                    <Col xs={12} md={6} className="mb-3">

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
                    <Col xs={12} md={6} className="mb-3">

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
                    <Col xs={12} md={6} className="mb-3">

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

export default SA;