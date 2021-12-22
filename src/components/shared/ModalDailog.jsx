import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

/**
 * Component: Modal Dailog
 * Description: Creates a popup fading the background screen, allows nesting of child components within
 * @param {*} props 
 * @param {*} ref 
 * @returns 
 */
const ModalDailog = ((props, ref) => {
  return (
   
      <Dialog
        maxWidth={props.maxWidth}
        fullWidth={props.fullWidth}
        open={props.open}
        onClose={props.toggle}
        aria-labelledby="max-width-dialog-title">
          
        <DialogTitle id="max-width-dialog-title">{props.title}</DialogTitle>
        <DialogContent>
            {props.children}
        </DialogContent>
        <DialogActions className={'actionHolder'}>
          
        </DialogActions>
      </Dialog>
  );
})
export default ModalDailog