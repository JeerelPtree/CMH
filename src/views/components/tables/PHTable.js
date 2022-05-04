import React, { Fragment, useState, useEffect } from "react";
import { Container, Col, Row, FloatingLabel, Button, Form, OverlayTrigger, Tooltip, Table } from "react-bootstrap";

function PHTable(props) {
    const { handleChange, form } = props

    return (
        <Fragment>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Diagnóstico</th>
                        <th>Total de Pacientes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>
                            <Form.Control></Form.Control>
                        </td>
                        <td>
                            <Form.Control></Form.Control>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Fragment>
    )
}

export default PHTable