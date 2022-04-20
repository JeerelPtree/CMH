import React, { Fragment } from "react";
import Select from 'react-select';
//import makeAnimated from 'react-select/animated';

//TODO: Volverlo un componente reutilizable

//const animatedComponents = makeAnimated();

function MultiSelect(props) {
    return <Fragment>
        <Select
            closeMenuOnSelect={false}
            isMulti
            options={props.options}
        />
    </Fragment>
}

export default MultiSelect;