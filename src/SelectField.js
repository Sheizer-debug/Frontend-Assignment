import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
export default function SelectField({currentField,formData,handleChange,checked})
{
    let required=currentField.validate.required,key=currentField.jsonKey;
    console.log('Inside Select',required,currentField,key,formData,handleChange,checked)
    return(
        required ?
                  <Stack sx={{padding:"2px"}}direction="row" justifyContent="space-around" spacing={20}>
                    <label htmlFor={currentField.label} className="col-sm-2 col-form-label">{currentField.label}<span className="required">*</span></label>
                    <FormControl sx={{ width:"17.2rem",backgroundColor:"#F0F7FF" }}>
                      <Select displayEmpty id={currentField.label} inputProps={{ 'aria-label': 'Without label' }} value={formData[key]} onChange={(event)=>handleChange(event,key)}>
                        {currentField.validate.options.map((option) => (
                          <MenuItem value={option.label}>{option.value}</MenuItem> 
                        ))}
                      </Select>
                   </FormControl>
                 </Stack>
        : checked ?
                    <Stack sx={{padding:"2px"}}direction="row" justifyContent="space-around" spacing={20}>
                      <label htmlFor={currentField.label} className="col-sm-2 col-form-label">{currentField.label}</label>
                      <FormControl sx={{ width:"17.2rem",backgroundColor:"#F0F7FF" }}>
                        <Select id={currentField.label} displayEmpty inputProps={{ 'aria-label': 'Without label' }} value={formData[key]} onChange={(event)=>handleChange(event,key)}>
                          {currentField.validate.options.map((option) => (
                            <MenuItem value={option.label}>{option.value}</MenuItem> 
                          ))}
                        </Select>
                      </FormControl>
                    </Stack>
        :null
    );
}
