import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './DialogBox.css';
import {Dialog,DialogActions,DialogContent,DialogTitle} from "@mui/material"; 
export default function DialogBox({open,formData,handleClose}) {
    return(
        <Dialog open={open} sx={{'.MuiPaper-root':{backgroundColor:"white",padding:"1rem 1rem 1.5rem"}}}>
          <Stack className="dialog-header"direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
            <DialogTitle >JSON DATA</DialogTitle>
          </Stack>
          <DialogContent>
            <pre>{JSON.stringify(formData, null, 2)}</pre>
          </DialogContent>
          <DialogActions>
            <Button sx={{color:"#3D4451"}}onClick={handleClose}>Close</Button>
          </DialogActions>
         </Dialog>
    );
}