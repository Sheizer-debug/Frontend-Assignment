import FormControl from '@mui/material/FormControl';
import {Stack,Typography,Divider,ToggleButton,ToggleButtonGroup,Select,MenuItem} from '@mui/material';
export default function SelectField({currentField,formData,handleChange,checked})
{
    let required=currentField.validate.required,key=currentField.jsonKey;
    console.log('Inside Group',formData);
    return(
        required?
        <div>
         <label htmlFor={currentField.label.split('_').join(' ')} className="col-sm-2 col-form-label">{currentField.label.split('_').join(' ')}<span className="required">*</span></label>
        <Divider sx={{ my: 2 }} />
        {currentField.subParameters.map((currentSubField) => {
                if (currentSubField.uiType === "Select" && currentSubField.validate.options) {
                  console.log('current subset',currentSubField,formData,key)
                  return (
                    required ?
                      <Stack sx={{padding:"2px"}}direction="row" justifyContent="space-around" spacing={20}>
                          <label htmlFor={currentSubField.label} className="col-sm-2 col-form-label">{currentSubField.label}<span className="required">*</span></label>
                          <FormControl sx={{ width:"17.2rem",backgroundColor:"#F0F7FF" }}>
                            <Select id={currentSubField.label} inputProps={{ 'aria-label': 'Without label' }} >
                              {currentSubField.validate.options.map((option) => (
                                <MenuItem value={option.label}>{option.value}</MenuItem> 
                              ))}
                            </Select>
                        </FormControl>
                     </Stack>
                    :checked ?
                    <Stack sx={{padding:"2px"}}direction="row" justifyContent="space-around" spacing={20}>
                      <label htmlFor={currentSubField.label} className="col-sm-2 col-form-label">{currentSubField.label}</label>
                      <FormControl sx={{ width:"17.2rem",backgroundColor:"#F0F7FF" }}>
                        <Select id={currentSubField.label} inputProps={{ 'aria-label': 'Without label' }} >
                          {currentSubField.validate.options.map((option) => (
                            <MenuItem value={option.label}>{option.value}</MenuItem> 
                          ))}
                        </Select>
                      </FormControl>
                    </Stack>
                    :null
                  );
                }
              }
            )}
      </div>:null
    );
}
