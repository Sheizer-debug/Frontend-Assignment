import React from 'react';
import {useState,useEffect} from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import './Field.css'
import Stack from '@mui/material/Stack';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Tooltip from '@mui/material/Tooltip';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import InputField  from './InputField.js';
import SelectField from './SelectField.js';
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
    }
    return (
        <>
            {fieldElement}
        </>
    )
}
