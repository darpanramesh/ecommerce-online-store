import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    display:'inline',
  },
  chip: {
    margin: theme.spacing(0.5),
    width:"10%",
    fontSize:"1em"
  },
}));

export default function Chips(props) {
  const classes = useStyles();

  function handleDelete() {
    alert('You clicked the delete icon.');
  }

  function handleClick() {
    alert('You clicked the Chip.');
  }

  return (
    <div className={classes.root}>      
      <Chip
        label={props.label}
        className={classes.chip}
        color={props.color}
      />
    </div>
  );
}