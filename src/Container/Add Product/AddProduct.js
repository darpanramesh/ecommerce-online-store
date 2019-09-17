import React from 'react'
import ComposedTextField from '../../Component/textFields'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {firebaseApp} from '../../Config/Data/firebase'


export default class AddProduct extends React.Component{
    constructor(){
        super();
        this.state={
            ProductName:'',
            ProductPrice:'',
            ProductDescription:'',
            ProductImage:'',
        }
        this.addProduct = this.addProduct.bind(this)
    }
    addProduct(){
        console.log(this.state)
        firebaseApp.firestore().collection("Products").add(this.state);
    }
    componentDidMount(){
    }
    async imageUpload(e){
        console.log(e.target.files[0]);
        let fileName = e.target.files[0].name;
        let ref = firebaseApp.storage().ref('/').child(`Images/${fileName}`);
        await ref.put(e.target.files[0])
        ref.getDownloadURL().then((url)=>{
            console.log(url);
            this.setState({ProductImage:url})
        })
    }
    render(){
        return(
            <div>
                <Grid container spacing={3}>
                <Grid item xs={10} sm={12} md={10} lg={12}>
                <Paper>
                <div >
                <br /><br />
                    <div style={{textAlign:"center"}}>
                        <b style={{fontSize:'2.5em'}}>Add Product</b> 
                    </div>
                    <div style={{textAlign:"center"}}>
                    <ComposedTextField onchange={(e)=> { this.setState({ProductName:e.target.value})}}  type="text" style={{width:'40%'}} name="Product Name" />
                    <ComposedTextField onchange={(e)=> { this.setState({ProductPrice:e.target.value})}} type="nummber" style={{width:'40%'}} name="Product Price" />
                    <ComposedTextField onchange={(e)=> { this.setState({ProductDescription:e.target.value})}} type="text" style={{width:'40%'}} name="Product Description" />
                    <ComposedTextField onchange={this.imageUpload.bind(this)} type="file" style={{width:'40%'}}  />
                    
                    <Button size="large" onClick={this.addProduct} style={{ color: "#fff", backgroundColor: "#878a8f", marginTop: "10px",  }}>
                    Add Product
                    </Button>
                    <br />
                    </div>
                    <br /><br />
                </div>
            </Paper>
            </Grid>
            </Grid>



            </div>
        )
    }

}