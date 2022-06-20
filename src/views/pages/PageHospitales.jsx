import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap"
import GeneralCRUD from "../components/CRUD/GeneralCRUD";
import AddButton from "../components/CRUD/addButton/AddButton";
import ModalGeneralAddCRUD from "../components/modals/ModalGeneralAddCRUD";
import PageLoading from "./PageLoading";

import HOSPITALES from "../pages/json/hospitales.json"

function PageHospitales() {



    return (
        <>

            <PageLoading />

        </>
    )

}

export default PageHospitales;