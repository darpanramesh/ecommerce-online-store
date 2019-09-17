import React from "react";
import AppBar from '../../Component/AppBar/Appbar'
import FooterPagePro from '../../Component/Footer/footer'
import {  DialogContainer} from 'react-md';
import ComposedTextField from '../../Component/textFields'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import history from '../../history'
import {login} from '../../Config/function/function'


export default class FormPage extends React.Component {
  constructor(){
    super();
    this.state = {
      email:'',
      password:''
    }
    this.checkOut = this.checkOut.bind(this)
  }
  
  async checkOut(){
    console.log(this.state);
    try{
      let user = await login(this.state);
      console.log(user);
      history.push('/admin',{value:this.props.location.state.value});
    }catch(err){
      console.log(err.message)
    }
    }
  render(){
    let value =  this.props.location.state.value;
    console.log(value)
  return (
    <div>
      <AppBar mycart={value} />
      <Grid container spacing={3}>
                <Grid item xs={10} sm={12} md={10} lg={12}>
                <Paper>
                <div >
                <br /><br />
                    <div style={{textAlign:"center"}}>
                        <b style={{fontSize:'2.5em'}}>Admin Login</b> 
                    </div>
                    <div style={{textAlign:"center"}}>
                    <ComposedTextField onchange={(e)=> { this.setState({email:e.target.value})}}  type="email" style={{width:'40%'}} name="email" />
                    <ComposedTextField onchange={(e)=> { this.setState({password:e.target.value})}} type="password" style={{width:'40%'}} name="password" />
                    <Button   size="large" onClick={this.checkOut} style={{ color: "#fff", backgroundColor: "#878a8f", marginTop: "10px",  }}>
                    Login
                    </Button>
                    <br />
                    </div>
                    <br /><br />
                </div>
            </Paper>
            </Grid>
            </Grid>

    <div style={{ marginTop: "5%" }}>
            <FooterPagePro />
            </div>
    </div>
  );
  }
};


