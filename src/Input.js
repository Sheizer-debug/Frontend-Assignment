import  './Input.css'
import Tooltip from '@mui/material/Tooltip';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
export default function Input({currentField,formData,handleChange,checked})
{
    let required=currentField.validate.required,key=currentField.jsonKey;
    console.log('Inside Input',required,currentField,key,formData,handleChange,checked)
    return (
        required ?
            <Stack sx={{padding:"2px",marginBottom:"6px"}}direction="row" justifyContent="space-around" spacing={20}>
                <label htmlFor={currentField.label} className="col-sm-2 col-form-label">{currentField.label}<span className="required">*</span>
                    {currentField.description !== '' && 
                    <Tooltip title={currentField.description}>
                        <IconButton>
                            <InfoIcon sx={{fontSize:'1rem'}}/>
                        </IconButton>
                    </Tooltip>
                    }
                </label>
                <TextField required id={currentField.label} value={formData[key]} onChange={(event)=>handleChange(event,key)} sx={{width:"17.2rem", height:"100%",backgroundColor:"#F0F7FF",border: "1px solid aliceblue" }} variant="outlined" />
            </Stack>
        : checked ?
            <Stack sx={{padding:"2px",marginBottom:"6px"}}direction="row" justifyContent="space-around" spacing={20}>
                <label htmlFor={currentField.label} className="col-sm-2 col-form-label">{currentField.label}<span className="required">*</span>
                    {currentField.description !== '' && 
                    <Tooltip title={currentField.description}>
                        <IconButton>
                            <InfoIcon sx={{fontSize:'1rem'}}/>
                        </IconButton>
                    </Tooltip>
                    }
                </label>
                <TextField id={currentField.label}  sx={{width:"17.2rem", height:"100%",backgroundColor:"#F0F7FF",border: "1px solid aliceblue" }} variant="outlined" />
            </Stack>
        :null
    );
}