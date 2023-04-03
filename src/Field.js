import React from 'react';
import InputField  from './InputField.js';
import SelectField from './SelectField.js';
import GroupField from './GroupField.js';
export default function Field(props) {
    const currentField=props.field;
    const formData=props.formData;
    let fieldElement=null;
    switch (currentField.uiType) {
        case 'Input':
            fieldElement=<InputField currentField={currentField} formData={formData} handleChange={props.handleChange} checked={props.checked}/>            
              break;
        case 'Select':
            fieldElement=<SelectField currentField={currentField} formData={formData} handleChange={props.handleChange} checked={props.checked}/>  
            break;
            case 'Group':
                fieldElement=<GroupField currentField={currentField} formData={formData} handleChange={props.handleChange} checked={props.checked}/>           
    }
    return (
        <>
            {fieldElement}
        </>
    )
}
