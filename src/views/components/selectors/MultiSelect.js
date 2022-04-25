import React, { Fragment } from "react";
import Select from 'react-select';
//import makeAnimated from 'react-select/animated';

//TODO: Volverlo un componente reutilizable

//const animatedComponents = makeAnimated();

function MultiSelect(props) {
    //we obtain the props for this component
    const { valueName, form, handleChange } = props

    return <Fragment>
        <Select
            name={valueName}
            value={form.acreditacionesHospitalarias ? form.acreditacionesHospitalarias : ''}
            onChange={handleChange}
            closeMenuOnSelect={false}
            isMulti
            options={props.options}
        />
    </Fragment>
}

export default MultiSelect;