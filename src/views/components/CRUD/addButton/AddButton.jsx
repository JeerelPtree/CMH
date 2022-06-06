import React, { Fragment, useState, useEffect } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function AddButton(props) {

    const { handleModal, tooltipLabel } = props

    return (
        <div className="fixed-action-btn">
            <OverlayTrigger
                placement="top"
                overlay={
                    <Tooltip>{tooltipLabel}</Tooltip>
                }>
                <button
                    size="sm"
                    className="btn-floating"
                    variant="primary"
                    onClick={handleModal}
                ><FontAwesomeIcon icon={faPlus} /></button>
            </OverlayTrigger>
        </div>
    )

}

export default AddButton;