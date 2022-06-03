import React, { Fragment, useState, useEffect } from "react";
import { Container, Col, Row, Accordion, ProgressBar, Button } from "react-bootstrap"
import GeneralCRUD from "../components/tables/GeneralCRUD";

import DATAPERFILES from "../pages/json/perfiles.json"

function PagePerfiles() {

    //we asigned the constans, variables and states
    const [dataPerfiles, setDataPerfiles] = useState({})
    const tableHeaders = ['Nombre', 'Correo', 'Rol', 'Hospital']

    return (
        <Fragment>

            <Container className="mt-3">
                <Row>
                    <Col xs={12} md={12}>

                        <h1 className="title-cmh mb-3">Perfiles</h1>

                        <Row>

                            <Col xs={12} md={12} className="mb-3">
                                {
                                    //FILTERS
                                }
                            </Col>
                            <Col xs={12} md={12} className="mb-3">

                                {/*CRUD PERFILES*/}
                                <GeneralCRUD
                                    data={DATAPERFILES}
                                    tableHeaders={tableHeaders}
                                    pageOrigin='perfiles'
                                />

                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

        </Fragment>
    )

}

export default PagePerfiles;