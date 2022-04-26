import React, { Fragment } from "react";
import Select from 'react-select';
//import makeAnimated from 'react-select/animated';

//TODO: Volverlo un componente reutilizable

//const animatedComponents = makeAnimated();

function MultiSelect(props) {
    //we obtain the props for this component
    const { options, valueName, handleChange } = props

    return (<Fragment>
        <Select
            placeholder="Seleccionar acreditaciones"
            name={valueName}
            onChange={handleChange}
            closeMenuOnSelect={false}
            isMulti
            options={options}
        />
    </Fragment>)
}

export default MultiSelect;