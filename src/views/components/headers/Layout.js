import React, { Fragment } from "react"; //importamos la libreria react, importamos el componente Fragment para no tener divs anidados
import NavbarC from "./NavbarC"; //importamos el navbar creado

function Layout(props) {

    const children = props.children; //We asigned as constant the propiety from props.children

    return (
        <Fragment>
            <NavbarC />
            {children}
        </Fragment>
    )

}

export default Layout;