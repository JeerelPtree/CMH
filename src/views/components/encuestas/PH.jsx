import React, { Fragment, useState, useEffect } from "react";
import { Container, Col, Row, InputGroup, Button, Form, OverlayTrigger, Tooltip, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson } from "@fortawesome/free-solid-svg-icons";

//we import css
import "../../../globalStyles.css"

//top
import TOPDIAGNOSTICOS from "./json/perfilHospitalarioTopDiagnosticos.json"
import TOPPROCEDIMIENTOS from "./json/perfilHospitalarioTopProcedimientos.json"

const currentYear = new Date().getFullYear();

function PH(props) {

    const { modalIsOpen } = props

    //declared the variables, constants ans states for this module
    const [form, setForm] = useState({})

    useEffect(() => {
        //we have validate if has data
        if (false) {
            //aqui asignaremos la data
        } else {

            let dataTopDiagnosticos = TOPDIAGNOSTICOS.map((diagnostic) => {
                diagnostic.totalPacientes = ''
                return diagnostic
            })
            let dataTopProcedimientos = TOPPROCEDIMIENTOS.map((procedimiento) => {
                procedimiento.totalPacientes = ''
                return procedimiento
            });

            setForm({
                topDiagnosticos: dataTopDiagnosticos,
                topProcedimientos: dataTopProcedimientos
            })
        }
    }, [modalIsOpen])


    /**
     * It takes in a value, name, index, and topTenOption, and then it sets the state of the form with
     * the new value
     */
    const handleChange = async (value, name, index, topTenOption) => {

        let auxArrayTop = getArrayTop(value, index, name, topTenOption)

        if (topTenOption === 1) {
            await setForm({
                ...form,
                topDiagnosticos: auxArrayTop
            })
        } else {
            await setForm({
                ...form,
                topProcedimientos: auxArrayTop
            })
        }

    }

    /**
     * It takes in a value, index, name, and topTenOption, and returns an array of objects
     * @returns The array of the top ten of the selected option.
     */
    const getArrayTop = (value, index, name, topTenOption) => {

        let arrayAuxTop = topTenOption === 1 ? TOPDIAGNOSTICOS : TOPPROCEDIMIENTOS;

        for (let i = 0; i < arrayAuxTop.length; i++) {

            if (i === index && name === arrayAuxTop[i].name) {
                arrayAuxTop[i].totalPacientes = value;
                break
            }

        }

        return arrayAuxTop

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

                            <Col xs={12} md={12} className="mb-3">
                                <h4 className="text-center sub-title-cmh">Perfil del Hospital</h4>
                            </Col>

                            <TableTopTen
                                form={form}
                                handleChange={handleChange}
                                topTen={1}
                            />

                            <TableTopTen
                                form={form}
                                handleChange={handleChange}
                                topTen={2}
                            />


                        </Row>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )


}

function TableTopTen(props) {

    //we obtain the props for this component
    const form = props.form;
    const handleChange = props.handleChange
    const topTen = props.topTen;

    /**
     * It returns a table with the top ten diagnoses or procedures depending on the value of the
     * variable topTen
     * @returns A table with the top 10 diagnosticos or procedimientos.
     */
    const getTable = () => {

        if (topTen === 1) {
            return (
                <Fragment>
                    {
                        form.topDiagnosticos && form.topDiagnosticos.map((diagnostic, index) => {
                            return (
                                <tr key={diagnostic.no}>
                                    <td>{diagnostic.no}</td>
                                    <td>{diagnostic.diagnostico}</td>
                                    <td>
                                        <GetInputGroupPacientes
                                            label={diagnostic.diagnostico}
                                            value={diagnostic.totalPacientes}
                                            name={diagnostic.name}
                                            handleChange={handleChange}
                                            index={index}
                                            topTen={topTen}
                                        />
                                    </td>
                                </tr>
                            )
                        })
                    }
                </Fragment>
            )
        } else {

            return (
                <Fragment>
                    {
                        form.topProcedimientos && form.topProcedimientos.map((procedimiento, index) => {
                            return (
                                <tr key={procedimiento.no}>
                                    <td>{procedimiento.no}</td>
                                    <td>{procedimiento.procedimiento}</td>
                                    <td>
                                        <GetInputGroupPacientes
                                            label={procedimiento.diagnostico}
                                            value={procedimiento.totalPacientes}
                                            name={procedimiento.name}
                                            handleChange={handleChange}
                                            index={index}
                                            topTen={topTen}
                                        />
                                    </td>
                                </tr>
                            )
                        })
                    }
                </Fragment>
            )
        }
    }

    return (
        <Fragment>

            <Table className="text-center">
                <thead className="thead-cmh">
                    <tr>
                        <th className="col-md-2 col-xs-4">No.</th>
                        <th className="col-md-8 col-xs-4">Top 10 {topTen === 1 ? "Diagnósticos" : "Procedimientos Quirúrgicos"}</th>
                        <th className="col-md-2 col-xs-4">Total de pacientes</th>
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

function GetInputGroupPacientes(props) {

    const { label, value, name, handleChange, index, topTen } = props;

    const handleChangeInput = async (e) => {

        await handleChange(e.target.value, e.target.name, index, topTen)

    }

    return (
        <Fragment>

            <span>
                <OverlayTrigger
                    placement="top"
                    overlay={
                        <Tooltip id="tooltip-rinion">{`Número de pacientes totales  de ${label}`}</Tooltip>
                    }>

                    <InputGroup>
                        <InputGroup.Text className="input-group-text-primary"><FontAwesomeIcon icon={faPerson} /></InputGroup.Text>
                        <Form.Control type="number" min={0} placeholder="Nº Pxs"
                            value={value ? value : ''}
                            name={name}
                            onChange={handleChangeInput} />

                    </InputGroup>
                </OverlayTrigger>
            </span>

        </Fragment>
    )

}


export default PH;