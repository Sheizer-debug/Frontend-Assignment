import React from "react";
import {useState} from 'react';
import './JSONEditor.css'
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
export default function JSONEditor({setJsonData})
{
    const [inputValue, setInputValue]=useState("");
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
    const handleJson = (event) => {
        const jsonData=JSON.parse(inputValue);
        setJsonData(jsonData);
      };
    return (
      <div>
            <AppBar className="appbar" position="static">
                <Typography variant="h6" component="div">
                    JSON SCHEMA
                </Typography>
            </AppBar>
        <textarea className="editor"value={inputValue} onChange={handleInputChange} /> 
         <Button  sx={{backgroundColor:"#3D4451"}} variant="contained" onClick={handleJson}>Convert to JSON</Button >
      </div>
    );
}


