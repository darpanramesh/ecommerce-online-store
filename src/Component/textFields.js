import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

export default function OutlinedTextFields(props) {
  const classes = useStyles();


  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="outlined-uncontrolled"
        type={props.type}
        label={props.name}
        className={classes.textField}
        margin="normal"
        variant="outlined"
        style={props.style}
        onChange={props.onchange}
      />
    </form>
  );
}