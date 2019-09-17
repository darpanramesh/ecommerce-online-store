import React from "react";
import Button from '@material-ui/core/Button';
import history from '../../history';



const ButtonPage = (props) => {
    return (
        <Button onClick={props.click}  size="large" onClick={()=>{history.push('/CartValues',{value:props.value});console.log(props)}} style={{ color: "#fff", backgroundColor: "#878a8f", marginTop: "10px",  }}>
         {props.img} {props.name}
        </Button>
    );
}

export default ButtonPage;