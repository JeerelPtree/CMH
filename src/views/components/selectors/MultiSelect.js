import React, { Fragment } from "react";
import Select from 'react-select';
//import makeAnimated from 'react-select/animated';

//TODO: Volverlo un componente reutilizable

//const animatedComponents = makeAnimated();

function MultiSelect(props) {
    console.log(props.handleChange);
    return <Fragment>
        <Select
            name={props.nameValue}
            onChange={props.handleChange}
            value={props.form.acreditacionesHospitalarias ? props.form.acreditacionesHospitalarias : "Sin valor"}
            closeMenuOnSelect={false}
            isMulti
            options={props.options}
        />
    </Fragment>
}

export default MultiSelect;