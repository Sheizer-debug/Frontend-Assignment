import React from 'react';
import {useState,useEffect} from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import './Field.css'
import Stack from '@mui/material/Stack';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Tooltip from '@mui/material/Tooltip';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import Input from './Input.js';
export default function Field(props) {
    const currentField=props.field;
    const formData=props.formData;
    let fieldElement=null;
    switch (currentField.uiType) {
        case 'Input':
            let key=currentField.jsonKey;
            fieldElement=<Input currentField={currentField} key={key} formData={formData} handleChange={props.handleChange} checked={props.checked}/>              
              break;
            case 'Select':
                if (currentField.validate.required) {
                  fieldElement = (
                    <Stack sx={{padding:"2px"}}direction="row" justifyContent="space-around" spacing={20}>
                      <label for="staticEmail" className="col-sm-2 col-form-label">{currentField.label}</label>
                      <TextField required id="filled-basic" label="Filled" sx={{width:"17.2rem", height:"1rem",backgroundColor:"#F0F7FF",border: "1px solid aliceblue" }} variant="filled" />
                    </Stack>
                  );
                } else if (props.checked) {
                  let key=currentField.jsonKey;
                  fieldElement = (
                    <Stack sx={{padding:"2px"}}direction="row" justifyContent="space-around" spacing={20}>
                      <label for="staticEmail" className="col-sm-2 col-form-label">{currentField.label}</label>
                      <FormControl sx={{ width:"17.2rem",backgroundColor:"#F0F7FF" }}>
                        <Select displayEmpty inputProps={{ 'aria-label': 'Without label' }} value={formData[key]} onChange={(event)=>props.handleChange(event,key)}>
                          {currentField.validate.options.map((option) => (
                            <MenuItem value={option.label}>{option.value}</MenuItem> 
                          ))}
                        </Select>
                      </FormControl>
                    </Stack>
                  );
                }                
                break;
            case 'Group':
                if (currentField.validate.required) {
                    fieldElement = (
                      <Stack sx={{padding:"2px"}}direction="row" justifyContent="space-around" spacing={20}>
                        <label for="staticEmail" className="col-sm-2 col-form-label">{currentField.label}</label>
                        <hr></hr>
                        <TextField required id="filled-basic" label="Filled" sx={{width:"17.2rem", height:"1rem",backgroundColor:"#F0F7FF",border: "1px solid aliceblue" }} variant="filled" />
                      </Stack>
                    );
                  } else if (props.checked) {
                    let key=currentField.jsonKey;
                    fieldElement = (
                      <Stack sx={{padding:"2px"}}direction="row" justifyContent="space-around" spacing={20}>
                        <label for="staticEmail" className="col-sm-2 col-form-label">{currentField.label}</label>
                        <FormControl sx={{ width:"17.2rem",backgroundColor:"#F0F7FF" }}>
                          <Select displayEmpty inputProps={{ 'aria-label': 'Without label' }} value={formData[key]} onChange={(event)=>props.handleChange(event,key)}>
                            {currentField.validate.options.map((option) => (
                              <MenuItem value={option.label}>{option.value}</MenuItem> 
                            ))}
                          </Select>
                        </FormControl>
                      </Stack>
                    );
                  }                
                  break;
                console.log('popo',currentField);
                break;

    }
    return (
        <>
            {fieldElement}
        </>
    )
}
