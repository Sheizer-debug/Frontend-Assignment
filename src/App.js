import React from 'react';
import Field from './Field'
import {useState,useEffect} from 'react';
import './App.css';
import JSONEditor from './JSONEditor.js'
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DialogBox from './Dialog.js';
export default  function App() {
  function generateFormState(schema) {
    const keys=Object.keys(schema);
    const formState={};
    keys.forEach((key) => {
      if(schema[key].validate.defaultValue)
        formState[schema[key]['jsonKey']] = schema[key].validate.defaultValue;
      else
        formState[schema[key]['jsonKey']] = "";
    });
    return formState;
  }  
  const [jsonData,setJsonData]=useState([]);
  const [checked,setChecked]=useState(false);
  const [formData,setFormData]=useState({});
  const [open, setOpen]=useState(false);
  useEffect(()=>{
    console.log('Json generated',jsonData);
    setFormData(generateFormState(jsonData));
  },[jsonData]);
  function handleCheck()
  {
    setChecked(prevValue=>{
      return !prevValue;
    });
  }
  function handleOpen()//open dialog modal
  {
      setOpen(()=>true);
  }
  function handleClose()//close dialog modal
  {
      setOpen(false);
  }
  function handleChange(e,key)
  {
    console.log('Change',e.target.value,key)
    setFormData((prev)=>{
      return {...prev,[key]:e.target.value};
    });
  }
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <JSONEditor setJsonData={setJsonData}/>
      </Grid>
    <Grid item xs={6}>
    <AppBar className="appbar" position="static">
            <Typography variant="h6" component="div">
                GENERATED FORM
            </Typography>
        </AppBar>
      <div >
        <form className="form-background">
          {
            jsonData.map((field)=>{
              return <Field formData={formData} checked={checked} key={field.jsonKey} field={field} handleChange={handleChange}/>
            })
          }
          <DialogBox open={open} formData={formData} handleClose={handleClose}/>
          <Stack sx={{padding:"2px",marginBottom:"6px"}}direction="row" justifyContent="space-between" spacing={20}>
            <FormControlLabel
              control={<Switch checked={checked} onChange={handleCheck} />}
              label="Hide Advanced Fields"
            />
            <Stack sx={{padding:"2px",marginBottom:"6px"}}direction="row" justifyContent="space-around" spacing={1}>
                <Button variant="outlined" sx={{borderColor:"#3D4451",color:"#3D4451"}}>Cancel</Button>
                <Button variant="contained" sx={{backgroundColor:"#3D4451"}} onClick={handleOpen}>Submit</Button>
            </Stack>
          </Stack>
        </form>
      </div>
    </Grid>
  </Grid>
  );
}

