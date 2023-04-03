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
// import SelectField from './SelectField.js';
export default function Field(props) {
    const currentField=props.field;
    const formData=props.formData;
    let fieldElement=null;
    switch (currentField.uiType) {
        case 'Input':
            fieldElement=<InputField currentField={currentField} formData={formData} handleChange={props.handleChange} checked={props.checked}/>
            // let key=currentField.jsonKey;
            // if (currentField.validate.required) {
            //   fieldElement = (
            //     <Stack sx={{padding:"2px",marginBottom:"6px"}}direction="row" justifyContent="space-around" spacing={20}>
            //       <label htmlFor={currentField.label} className="col-sm-2 col-form-label">{currentField.label}<span className="required">*</span>
            //           {currentField.description !== '' && 
            //           <Tooltip title={currentField.description}>
            //               <IconButton>
            //                   <InfoIcon sx={{fontSize:'1rem'}}/>
            //               </IconButton>
            //           </Tooltip>
            //           }
            //        </label>
            //       <TextField required id={currentField.label} value={formData[key]||""} onChange={(event)=>props.handleChange(event,key)} sx={{width:"17.2rem", height:"100%",backgroundColor:"#F0F7FF",border: "1px solid aliceblue" }} variant="outlined" />
            //     </Stack>
            //   );
            // } else if (props.checked) {
            //   fieldElement = (
            //     <Stack sx={{padding:"2px",marginBottom:"6px"}}direction="row" justifyContent="space-around" spacing={20}>
            //       <label htmlFor={currentField.label} className="col-sm-2 col-form-label">{currentField.label}
            //           {currentField.description !== '' && 
            //           <Tooltip title={currentField.description}>
            //               <IconButton>
            //                   <InfoIcon sx={{fontSize:'1rem'}}/>
            //               </IconButton>
            //           </Tooltip>
            //           }
            //        </label>
            //       <TextField id={currentField.label}  value={formData[key]||""} onChange={(event)=>props.handleChange(event,key)} sx={{width:"17.2rem", height:"100%",backgroundColor:"#F0F7FF",border: "1px solid aliceblue" }} variant="outlined" />
            //     </Stack>
            //   );
            // }             
              break;
    }
    return (
        <>
            {fieldElement}
        </>
    )
}
