import React, { Fragment } from "react";
import Select from 'react-select';
//import makeAnimated from 'react-select/animated';

//TODO: Volverlo un componente reutilizable

//const animatedComponents = makeAnimated();

function MultiSelect(props) {
    //we obtain the props for this component
    const { options, valueName, handleChange } = props

    //TODO: TEST 

    //const dataMulti = props.dataMulti;
    const setDataMulti = props.setDataMulti;
    //console.log('AQUI', dataMulti)
    const dataMulti = [
        { value: 'ISO 9001', label: 'ISO 9001' },
        { value: 'CSG', label: 'CSG' },
        { value: 'CertCan', label: 'Certificación Canadiense' },
        { value: 'JCI', label: 'JCI' },
        { value: 'DistH', label: 'Distintivo "H"' },
    ];

    return (
        <Fragment>
            <Select
                options={dataMulti}
                setValue={setDataMulti}
                isMulti
            />
        </Fragment>
    )
    //FIXME:

    /*return (<Fragment>
        <Select
            placeholder="Seleccionar acreditaciones"
            name={valueName}
            onChange={handleChange}
            closeMenuOnSelect={false}
            isMulti
            options={options}
        />
    </Fragment>)*/
}

export default MultiSelect;