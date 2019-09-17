import React from "react";
import AppBar from '../../Component/AppBar/Appbar'
import FooterPagePro from '../../Component/Footer/footer'
import {  DialogContainer} from 'react-md';
import ComposedTextField from '../../Component/textFields'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import history from '../../history'
import {firebaseApp} from '../../Config/Data/firebase'

export default class FormPage extends React.Component {
  constructor(){
    super();
    this.state = {
      visible: false,
      name:'',
      Address:'',
      Number:'',
      email:'',
    }
  }

  checkOut = () =>{
    console.log(this.state);
    try{
      firebaseApp.firestore().collection('orders').add(this.state)
      alert('Order is Sumbited');
      localStorage.removeItem('cartDetail ')
      this.props.location.state.value.splice(0)
      history.push('/',{value:this.props.location.state.value})
  }
  catch(err){
    alert("Please Fill All Fields Data")
  }
  }
  render(){
    // console.log(this.props.location.state.visible)
    // console.log(this.props.location.state.value)
    let visible = this.props.location.state.visible;
    let value =  this.props.location.state.value
  return (
    <div>
      <AppBar mycart={value} />
    <DialogContainer
    id="simple-list-dialog"
    visible={visible}
    >
      <Grid container spacing={3}>
                <Grid item xs={10} sm={12} md={10} lg={12}>
                <Paper>
                <div >
                <br /><br />
                    <div style={{textAlign:"center"}}>
                        <b style={{fontSize:'2.5em'}}>Check Out</b> 
                    </div>
                    <div style={{textAlign:"center"}}>
                    <ComposedTextField onchange={(e)=> { this.setState({name:e.target.value})}}  type="text" style={{width:'40%'}} name="Name" />
                    <ComposedTextField onchange={(e)=> { this.setState({email:e.target.value})}} type="email" style={{width:'40%'}} name="Email" />
                    <ComposedTextField onchange={(e)=> { this.setState({Address:e.target.value})}} type="text" style={{width:'40%'}} name="Address" />
                    <ComposedTextField onchange={(e)=> { this.setState({Number:e.target.value})}} type="number" style={{width:'40%'}} name="Contact Number" />
                    <Button   size="large" onClick={this.checkOut} style={{ color: "#fff", backgroundColor: "#878a8f", marginTop: "10px",  }}>
                    Check out
                    </Button>
                    <br />
                    </div>
                    <br /><br />
                </div>
            </Paper>
            </Grid>
            </Grid>

    </DialogContainer>
    <div style={{ marginTop: "5%" }}>
            <FooterPagePro />
            </div>
    </div>
  );
  }
};


